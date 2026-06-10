// ============================================================
// Lớp 6 · NGỮ VĂN — 36 tuần
// Bám chương trình GDPT 2018 (Kết nối / Cánh Diều / Chân trời).
// HK1: T1–18 · HK2: T19–36.
// Nội dung gốc, biên soạn lại để luyện tập — không trích nguyên SGK.
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6NV', 'ngu-van', n, title, qs, opts);

export const S6NV_WEEKS = [
  // ──────────────────── HK1 ────────────────────

  M(1, 'Truyện đồng thoại (1): Đặc trưng thể loại', [
    Q('Truyện đồng thoại thường lấy nhân vật chính là?',
      ['Loài vật, đồ vật được nhân hoá', 'Nhà bác học', 'Học sinh', 'Vua chúa'], 0,
      'Đồng thoại lấy nhân vật chính là loài vật/đồ vật được nhân hoá — biết nói, biết nghĩ như con người.',
      [
        '<b>Truyện đồng thoại</b> là thể loại truyện viết cho thiếu nhi, lấy nhân vật chính là <i>loài vật, đồ vật, cây cỏ</i>… được khoác lên tâm hồn và tính cách của con người.',
        'Ba từ khoá nhận diện đồng thoại:',
        '<ul><li><b>Nhân hoá</b> — con vật biết nói, biết nghĩ.</li><li><b>Tưởng tượng</b> — chất liệu hoang đường nhẹ nhàng.</li><li><b>Bài học</b> — hướng đến giáo dục tuổi thơ.</li></ul>',
        'Ví dụ: <code>Dế Mèn</code> trong "Bài học đường đời đầu tiên" của <b>Tô Hoài</b> — chú dế biết kiêu căng, ăn năn như người.',
      ],
      [
        'Đúng — đồng thoại đặc trưng ở chỗ <b>nhân hoá</b> loài vật/đồ vật, cho chúng biết nói, biết nghĩ như người. Ví dụ Dế Mèn của Tô Hoài.',
        'Sai — <b>nhà bác học</b> là con người thật, không phải nhân vật của đồng thoại. Nhân vật chính đồng thoại phải là <i>loài vật/đồ vật được nhân hoá</i>.',
        'Sai — <b>học sinh</b> là con người, không phải nhân vật trung tâm của đồng thoại. Có thể xuất hiện như nhân vật phụ nhưng không phải chính.',
        'Sai — <b>vua chúa</b> thường là nhân vật của <i>truyền thuyết</i> hay <i>cổ tích thần kì</i>, không phải đồng thoại.',
      ]),
    Q('Đặc trưng cốt lõi của truyện đồng thoại là?',
      ['Nhân hoá', 'Có nhiều nhân vật lịch sử', 'Phóng đại con số', 'Tả cảnh nhiều'], 0,
      '<b>Nhân hoá</b> là linh hồn của truyện đồng thoại — gán đặc điểm con người cho loài vật, đồ vật.',
      [
        '<b>Nhân hoá</b> là thủ pháp cơ bản nhất của đồng thoại: con vật được "khoác áo người" — biết suy nghĩ, nói chuyện, có tính cách.',
        'Không có nhân hoá thì không còn là đồng thoại nữa, mà chỉ là truyện về loài vật thông thường.',
        '<ul><li>Dế Mèn <b>tự xưng "tôi"</b>, biết kiêu căng.</li><li>Dế Choắt biết <b>khuyên răn</b>, biết <b>trăng trối</b>.</li><li>Chị Cốc biết <b>giận dữ</b> như người lớn.</li></ul>',
      ],
      [
        'Đúng — <b>nhân hoá</b> là "linh hồn" của đồng thoại, gán đặc điểm con người cho loài vật. Không có nhân hoá thì không phải đồng thoại.',
        'Sai — <b>nhân vật lịch sử</b> là đặc trưng của <i>truyền thuyết</i> (Thánh Gióng, Lê Lợi), không phải đồng thoại.',
        'Sai — <b>phóng đại con số</b> không phải đặc trưng đồng thoại. Đồng thoại có thể phóng đại nhưng đó không phải nét cốt lõi.',
        'Sai — <b>tả cảnh</b> chỉ là yếu tố phụ. Đồng thoại tập trung vào <i>nhân vật loài vật được nhân hoá</i>, không lấy tả cảnh làm đặc trưng.',
      ]),
    Q('Truyện "Bài học đường đời đầu tiên" của Tô Hoài kể về?',
      ['Dế Mèn kiêu căng và bài học vì cái chết của Dế Choắt', 'Dế Mèn làm vua', 'Dế Mèn đi học', 'Dế Mèn cưới vợ'], 0,
      'Truyện kể về sự ngông cuồng của Dế Mèn dẫn đến cái chết oan của Dế Choắt — bài học cay đắng đầu đời của Mèn.',
      [
        '"Bài học đường đời đầu tiên" là <b>đoạn trích</b> từ tác phẩm "Dế Mèn phiêu lưu kí" của nhà văn <b>Tô Hoài</b>.',
        '<b>Cốt truyện:</b> Dế Mèn cường tráng, kiêu căng → trêu chị Cốc → Choắt bị Cốc mổ chết oan → Mèn ăn năn.',
        '<ul><li>Cái chết của Choắt là "<b>bài học đường đời đầu tiên</b>" — đắt giá và day dứt cả đời Mèn.</li><li>Lời trăng trối của Choắt trở thành phương châm sống cho Mèn.</li></ul>',
      ],
      [
        'Đúng — <b>Dế Mèn kiêu căng và bài học vì cái chết của Dế Choắt</b>. Truyện kể về sự ngông cuồng của Dế Mèn dẫn đến cái chết oan của Dế Choắt — bài học cay đắng đầu đời của Mèn.',
        'Sai — <b>Dế Mèn làm vua</b> không đúng. Phải chọn <i>Dế Mèn kiêu căng và bài học vì cái chết của Dế Choắt</i> vì truyện kể về sự ngông cuồng của Dế Mèn dẫn đến cái chết oan của Dế Choắt — bài học cay đắng đầu đời của Mèn.',
        'Sai — <b>Dế Mèn đi học</b> không đúng. Phải chọn <i>Dế Mèn kiêu căng và bài học vì cái chết của Dế Choắt</i> vì truyện kể về sự ngông cuồng của Dế Mèn dẫn đến cái chết oan của Dế Choắt — bài học cay đắng đầu đời của Mèn.',
        'Sai — <b>Dế Mèn cưới vợ</b> không đúng. Phải chọn <i>Dế Mèn kiêu căng và bài học vì cái chết của Dế Choắt</i> vì truyện kể về sự ngông cuồng của Dế Mèn dẫn đến cái chết oan của Dế Choắt — bài học cay đắng đầu đời của Mèn.',
      ]
    ),
    Q('Nhân vật Dế Mèn ở đầu truyện có tính cách nổi bật là?',
      ['Khiêm tốn, trầm tính', 'Lười biếng, ham ăn', 'Hiền lành, nhút nhát', 'Kiêu căng, hống hách'], 3,
      'Đầu truyện, Mèn tự đắc vì cường tráng, hay bắt nạt kẻ yếu — kiêu căng, hống hách là nét tính cách nổi bật.',
      [
        'Tô Hoài để Mèn <b>tự kể</b> về mình — khoe đôi càng "mẫm bóng", "vuốt cứng và nhọn hoắt", dáng "đi đứng oai vệ".',
        'Tính cách Mèn bộc lộ qua hành động:',
        '<ul><li>Khinh thường Choắt — gọi là "chú mày", không cho đào hang thông sang.</li><li>Trêu chị Cốc rồi chui tọt vào hang sâu.</li><li>Để mặc Choắt yếu ớt hứng cơn giận của Cốc.</li></ul>',
        '⚠️ Sự "hùng dũng" của Mèn chỉ là vỏ ngoài — bên trong là <i>hèn nhát</i>.',
      ],
      [
        'Sai — <b>Khiêm tốn, trầm tính</b> không đúng. Phải chọn <i>Kiêu căng, hống hách</i> vì đầu truyện, Mèn tự đắc vì cường tráng, hay bắt nạt kẻ yếu — kiêu căng, hống hách là nét tính cách nổi bật.',
        'Sai — <b>Lười biếng, ham ăn</b> không đúng. Phải chọn <i>Kiêu căng, hống hách</i> vì đầu truyện, Mèn tự đắc vì cường tráng, hay bắt nạt kẻ yếu — kiêu căng, hống hách là nét tính cách nổi bật.',
        'Sai — <b>Hiền lành, nhút nhát</b> không đúng. Phải chọn <i>Kiêu căng, hống hách</i> vì đầu truyện, Mèn tự đắc vì cường tráng, hay bắt nạt kẻ yếu — kiêu căng, hống hách là nét tính cách nổi bật.',
        'Đúng — <b>Kiêu căng, hống hách</b>. Đầu truyện, Mèn tự đắc vì cường tráng, hay bắt nạt kẻ yếu — kiêu căng, hống hách là nét tính cách nổi bật.',
      ]
    ),
    Q('Bài học Mèn rút ra ở cuối đoạn trích là gì?',
      ['Phải đi xa nhà', 'Không nên kiêu căng, biết suy nghĩ trước khi hành động', 'Phải im lặng tuyệt đối', 'Phải đánh nhiều hơn'], 1,
      'Cái chết của Choắt khiến Mèn ăn năn — phải biết suy xét, không kiêu căng, biết nhận lỗi.',
      [
        'Lời trăng trối của Choắt là kim chỉ nam: "<i>Ở đời mà có thói hung hăng bậy bạ, có óc mà không biết nghĩ, sớm muộn rồi cũng mang vạ vào mình</i>."',
        'Bài học rút ra:',
        '<ul><li>Không vì <b>hơn người</b> mà coi thường kẻ yếu.</li><li>Phải biết <b>suy nghĩ</b> trước khi hành động.</li><li>Mọi hành động đều có <b>hệ quả</b>.</li></ul>',
        'Đây là "<b>bài học đường đời đầu tiên</b>" — đắt giá vì phải đổi bằng mạng sống của bạn.',
      ],
      [
        'Sai — <b>Phải đi xa nhà</b> không đúng. Phải chọn <i>Không nên kiêu căng, biết suy nghĩ trước khi hành động</i> vì cái chết của Choắt khiến Mèn ăn năn — phải biết suy xét, không kiêu căng, biết nhận lỗi.',
        'Đúng — <b>Không nên kiêu căng, biết suy nghĩ trước khi hành động</b>. Cái chết của Choắt khiến Mèn ăn năn — phải biết suy xét, không kiêu căng, biết nhận lỗi.',
        'Sai — <b>Phải im lặng tuyệt đối</b> không đúng. Phải chọn <i>Không nên kiêu căng, biết suy nghĩ trước khi hành động</i> vì cái chết của Choắt khiến Mèn ăn năn — phải biết suy xét, không kiêu căng, biết nhận lỗi.',
        'Sai — <b>Phải đánh nhiều hơn</b> không đúng. Phải chọn <i>Không nên kiêu căng, biết suy nghĩ trước khi hành động</i> vì cái chết của Choắt khiến Mèn ăn năn — phải biết suy xét, không kiêu căng, biết nhận lỗi.',
      ]
    ),
    Q('Trong đồng thoại, vì sao tác giả nhân hoá con vật?',
      ['Để khoe vốn từ', 'Vì con vật biết viết', 'Để truyền bài học sống cho người đọc một cách nhẹ nhàng', 'Để doạ trẻ em'], 2,
      'Mượn chuyện con vật để nói chuyện đời — bài học trở nên nhẹ nhàng, dễ tiếp nhận với bạn đọc nhỏ tuổi.',
      [
        'Nhân hoá con vật giúp tác giả <b>"nói chuyện đời mà không lên giọng dạy đời"</b>.',
        '<ul><li>Em đọc về Dế Mèn → tự soi mình → tự rút ra bài học.</li><li>Lời khuyên không "thẳng thừng" → dễ tiếp nhận hơn.</li><li>Câu chuyện loài vật <b>thân thiện, hấp dẫn</b> với tuổi thơ.</li></ul>',
        'Đó là cách giáo dục <i>khéo léo, nhân hậu</i> đặc trưng của thể loại đồng thoại.',
      ],
      [
        'Sai — <b>Để khoe vốn từ</b> không đúng. Phải chọn <i>Để truyền bài học sống cho người đọc một cách nhẹ nhàng</i> vì mượn chuyện con vật để nói chuyện đời — bài học trở nên nhẹ nhàng, dễ tiếp nhận với bạn đọc nhỏ tuổi.',
        'Sai — <b>Vì con vật biết viết</b> không đúng. Phải chọn <i>Để truyền bài học sống cho người đọc một cách nhẹ nhàng</i> vì mượn chuyện con vật để nói chuyện đời — bài học trở nên nhẹ nhàng, dễ tiếp nhận với bạn đọc nhỏ tuổi.',
        'Đúng — <b>Để truyền bài học sống cho người đọc một cách nhẹ nhàng</b>. Mượn chuyện con vật để nói chuyện đời — bài học trở nên nhẹ nhàng, dễ tiếp nhận với bạn đọc nhỏ tuổi.',
        'Sai — <b>Để doạ trẻ em</b> không đúng. Phải chọn <i>Để truyền bài học sống cho người đọc một cách nhẹ nhàng</i> vì mượn chuyện con vật để nói chuyện đời — bài học trở nên nhẹ nhàng, dễ tiếp nhận với bạn đọc nhỏ tuổi.',
      ]
    ),
  ]),

  M(2, 'Truyện đồng thoại (2): Nhân vật và tình huống', [
    Q('Nhân vật phụ Dế Choắt trong truyện được miêu tả là?',
      ['Giàu có, kiêu kì', 'Thông minh, mưu mẹo', 'Khoẻ mạnh, hung dữ', 'Yếu ớt, ốm yếu, hiền lành'], 3,
      'Choắt là hình ảnh đối lập với Mèn — gầy gò, yếu đuối, hiền lành, ốm yếu.',
      [
        'Tô Hoài đặt <b>Mèn và Choắt cạnh nhau như hai mảng sáng tối</b>:',
        '<ul><li><b>Mèn</b>: cường tráng, kiêu căng, ở hang sâu, vẻ ngoài "hùng dũng".</li><li><b>Choắt</b>: gầy gò, ốm yếu, hiền lành, ở hang nông.</li></ul>',
        'Sự đối lập này không chỉ để so sánh ngoại hình — mà <b>tô đậm bài học</b>: kẻ tưởng mình mạnh nhất hoá ra lại là kẻ <i>gây ra cái chết</i> của người yếu nhất.',
      ],
      [
        'Sai — <b>Giàu có, kiêu kì</b> không đúng. Phải chọn <i>Yếu ớt, ốm yếu, hiền lành</i> vì choắt là hình ảnh đối lập với Mèn — gầy gò, yếu đuối, hiền lành, ốm yếu.',
        'Sai — <b>Thông minh, mưu mẹo</b> không đúng. Phải chọn <i>Yếu ớt, ốm yếu, hiền lành</i> vì choắt là hình ảnh đối lập với Mèn — gầy gò, yếu đuối, hiền lành, ốm yếu.',
        'Sai — <b>Khoẻ mạnh, hung dữ</b> không đúng. Phải chọn <i>Yếu ớt, ốm yếu, hiền lành</i> vì choắt là hình ảnh đối lập với Mèn — gầy gò, yếu đuối, hiền lành, ốm yếu.',
        'Đúng — <b>Yếu ớt, ốm yếu, hiền lành</b>. Choắt là hình ảnh đối lập với Mèn — gầy gò, yếu đuối, hiền lành, ốm yếu.',
      ]
    ),
    Q('Tình huống đẩy truyện đến đỉnh điểm là?',
      ['Mèn lạc trong rừng', 'Mèn được phong vương', 'Choắt đi học xa', 'Mèn trêu chị Cốc khiến Choắt bị ăn đòn oan'], 3,
      'Trò trêu chọc tai hại của Mèn → chị Cốc trút giận lên Choắt → Choắt mất mạng oan.',
      [
        '<b>Diễn tiến tình huống</b> trong đoạn trích:',
        '<ul><li><b>Khởi đầu:</b> Mèn vênh váo, khinh Choắt, không cho đào hang thông sang.</li><li><b>Phát triển:</b> Mèn rủ Choắt trêu chị Cốc; Choắt sợ, can ngăn không được.</li><li><b>Cao trào:</b> Cốc nổi giận, mổ Choắt thay vì mổ Mèn.</li><li><b>Kết:</b> Choắt hấp hối, dặn lại Mèn bài học cuối đời.</li></ul>',
        'Cao trào là <i>cảnh Cốc mổ Choắt</i> — khoảnh khắc bài học bật ra.',
      ],
      [
        'Sai — <b>Mèn lạc trong rừng</b> không đúng. Phải chọn <i>Mèn trêu chị Cốc khiến Choắt bị ăn đòn oan</i> vì trò trêu chọc tai hại của Mèn → chị Cốc trút giận lên Choắt → Choắt mất mạng oan.',
        'Sai — <b>Mèn được phong vương</b> không đúng. Phải chọn <i>Mèn trêu chị Cốc khiến Choắt bị ăn đòn oan</i> vì trò trêu chọc tai hại của Mèn → chị Cốc trút giận lên Choắt → Choắt mất mạng oan.',
        'Sai — <b>Choắt đi học xa</b> không đúng. Phải chọn <i>Mèn trêu chị Cốc khiến Choắt bị ăn đòn oan</i> vì trò trêu chọc tai hại của Mèn → chị Cốc trút giận lên Choắt → Choắt mất mạng oan.',
        'Đúng — <b>Mèn trêu chị Cốc khiến Choắt bị ăn đòn oan</b>. Trò trêu chọc tai hại của Mèn → chị Cốc trút giận lên Choắt → Choắt mất mạng oan.',
      ]
    ),
    Q('Lời trăng trối của Choắt khuyên Mèn điều gì?',
      ['Phải đánh nhiều bạn hơn', 'Sống phải giàu có', 'Phải đi xa nhà', 'Sống nên biết suy nghĩ, đừng kiêu căng hại người'], 3,
      'Choắt khuyên Mèn sống phải biết suy nghĩ, đừng kiêu căng — đó là bài học cốt lõi của đoạn trích.',
      [
        'Nguyên văn lời trăng trối: "<i>Ở đời mà có thói hung hăng bậy bạ, có óc mà không biết nghĩ, sớm muộn rồi cũng mang vạ vào mình</i>."',
        'Lời nói ấy có hai vế:',
        '<ul><li>"<b>Hung hăng bậy bạ</b>" — phê phán thói kiêu căng, ngông cuồng.</li><li>"<b>Có óc mà không biết nghĩ</b>" — nhắc nhở phải biết suy nghĩ trước khi hành động.</li></ul>',
        'Choắt không trách, không oán — chỉ <i>tha thứ và cảnh tỉnh</i>. Đây là lời thoại <b>đắt giá nhất</b> đoạn trích.',
      ],
      [
        'Sai — <b>Phải đánh nhiều bạn hơn</b> không đúng. Phải chọn <i>Sống nên biết suy nghĩ, đừng kiêu căng hại người</i> vì choắt khuyên Mèn sống phải biết suy nghĩ, đừng kiêu căng — đó là bài học cốt lõi của đoạn trích.',
        'Sai — <b>Sống phải giàu có</b> không đúng. Phải chọn <i>Sống nên biết suy nghĩ, đừng kiêu căng hại người</i> vì choắt khuyên Mèn sống phải biết suy nghĩ, đừng kiêu căng — đó là bài học cốt lõi của đoạn trích.',
        'Sai — <b>Phải đi xa nhà</b> không đúng. Phải chọn <i>Sống nên biết suy nghĩ, đừng kiêu căng hại người</i> vì choắt khuyên Mèn sống phải biết suy nghĩ, đừng kiêu căng — đó là bài học cốt lõi của đoạn trích.',
        'Đúng — <b>Sống nên biết suy nghĩ, đừng kiêu căng hại người</b>. Choắt khuyên Mèn sống phải biết suy nghĩ, đừng kiêu căng — đó là bài học cốt lõi của đoạn trích.',
      ]
    ),
    Q('Yếu tố nào KHÔNG phải đặc trưng đồng thoại?',
      ['Mang ý nghĩa giáo dục', 'Nhân vật là loài vật được nhân hoá', 'Có yếu tố tưởng tượng', 'Bắt buộc có yếu tố lịch sử có thật'], 3,
      'Đồng thoại KHÔNG cần bám sự thật lịch sử — đó là đặc trưng của truyền thuyết, không phải đồng thoại.',
      [
        'Ba đặc trưng của đồng thoại:',
        '<ul><li>✅ Nhân vật là loài vật/đồ vật được <b>nhân hoá</b>.</li><li>✅ Có yếu tố <b>tưởng tượng</b>, hoang đường nhẹ nhàng.</li><li>✅ Mang ý nghĩa <b>giáo dục</b>, bài học rõ ràng.</li></ul>',
        '🚫 <b>Yếu tố lịch sử có thật</b> KHÔNG phải đặc trưng đồng thoại — đó là đặc trưng của <code>truyền thuyết</code>.',
        'Phân biệt: <i>đồng thoại</i> bay bổng theo trí tưởng tượng; <i>truyền thuyết</i> bám lõi sự thật lịch sử.',
      ],
      [
        'Sai — <b>Mang ý nghĩa giáo dục</b> không đúng. Phải chọn <i>Bắt buộc có yếu tố lịch sử có thật</i> vì đồng thoại KHÔNG cần bám sự thật lịch sử — đó là đặc trưng của truyền thuyết, không phải đồng thoại.',
        'Sai — <b>Nhân vật là loài vật được nhân hoá</b> không đúng. Phải chọn <i>Bắt buộc có yếu tố lịch sử có thật</i> vì đồng thoại KHÔNG cần bám sự thật lịch sử — đó là đặc trưng của truyền thuyết, không phải đồng thoại.',
        'Sai — <b>Có yếu tố tưởng tượng</b> không đúng. Phải chọn <i>Bắt buộc có yếu tố lịch sử có thật</i> vì đồng thoại KHÔNG cần bám sự thật lịch sử — đó là đặc trưng của truyền thuyết, không phải đồng thoại.',
        'Đúng — <b>Bắt buộc có yếu tố lịch sử có thật</b>. Đồng thoại KHÔNG cần bám sự thật lịch sử — đó là đặc trưng của truyền thuyết, không phải đồng thoại.',
      ]
    ),
    Q('Ngôi kể trong "Bài học đường đời đầu tiên" là?',
      ['Ngôi thứ hai', 'Ngôi thứ ba toàn tri', 'Ngôi thứ nhất (Dế Mèn xưng "tôi")', 'Không xác định'], 2,
      'Dế Mèn tự kể chuyện đời mình — xưng "tôi" → ngôi thứ nhất.',
      [
        '<b>Ngôi thứ nhất</b>: người kể chuyện xưng <code>"tôi"</code>, là nhân vật trong câu chuyện.',
        'Trong đoạn trích, Mèn vừa là <b>nhân vật chính</b>, vừa là <b>người kể</b> — tự thuật lại quãng đời mình.',
        '<ul><li>"Tôi sống độc lập từ thuở bé…"</li><li>"Tôi rất lấy làm hãnh diện…"</li><li>"Tôi rủ Choắt trêu chị Cốc…"</li></ul>',
        '⚠️ Phân biệt: ngôi <b>thứ ba</b> là người kể "đứng ngoài", gọi nhân vật bằng tên (anh ấy, Mèn, Choắt).',
      ],
      [
        'Sai — <b>Ngôi thứ hai</b> không đúng. Phải chọn <i>Ngôi thứ nhất (Dế Mèn xưng "tôi")</i> vì dế Mèn tự kể chuyện đời mình — xưng "tôi" → ngôi thứ nhất.',
        'Sai — <b>Ngôi thứ ba toàn tri</b> không đúng. Phải chọn <i>Ngôi thứ nhất (Dế Mèn xưng "tôi")</i> vì dế Mèn tự kể chuyện đời mình — xưng "tôi" → ngôi thứ nhất.',
        'Đúng — <b>Ngôi thứ nhất (Dế Mèn xưng "tôi")</b>. Dế Mèn tự kể chuyện đời mình — xưng "tôi" → ngôi thứ nhất.',
        'Sai — <b>Không xác định</b> không đúng. Phải chọn <i>Ngôi thứ nhất (Dế Mèn xưng "tôi")</i> vì dế Mèn tự kể chuyện đời mình — xưng "tôi" → ngôi thứ nhất.',
      ]
    ),
    Q('Tác dụng của ngôi kể thứ nhất ở đây?',
      ['Chỉ thuật khô khan', 'Giấu cảm xúc', 'Khó hiểu tâm lý', 'Bộc lộ trực tiếp suy nghĩ, ăn năn của nhân vật'], 3,
      'Ngôi 1 giúp lời ăn năn của Mèn chân thật, gần gũi — như tiếng nức nở vọng ra từ trang sách.',
      [
        '<b>Ưu thế của ngôi thứ nhất</b> trong đoạn trích:',
        '<ul><li><b>Chân thực</b> — Mèn tự kể chuyện đời mình, người đọc tin ngay.</li><li><b>Cảm xúc trực tiếp</b> — nỗi ăn năn của Mèn lay động trái tim.</li><li><b>Gần gũi</b> — như tâm sự, không phải bài giảng.</li></ul>',
        'Nếu dùng ngôi 3, câu chuyện sẽ <i>khô khan</i> hơn nhiều — không có sự nức nở của Mèn về cái chết của Choắt.',
      ],
      [
        'Sai — <b>Chỉ thuật khô khan</b> không đúng. Phải chọn <i>Bộc lộ trực tiếp suy nghĩ, ăn năn của nhân vật</i> vì ngôi 1 giúp lời ăn năn của Mèn chân thật, gần gũi — như tiếng nức nở vọng ra từ trang sách.',
        'Sai — <b>Giấu cảm xúc</b> không đúng. Phải chọn <i>Bộc lộ trực tiếp suy nghĩ, ăn năn của nhân vật</i> vì ngôi 1 giúp lời ăn năn của Mèn chân thật, gần gũi — như tiếng nức nở vọng ra từ trang sách.',
        'Sai — <b>Khó hiểu tâm lý</b> không đúng. Phải chọn <i>Bộc lộ trực tiếp suy nghĩ, ăn năn của nhân vật</i> vì ngôi 1 giúp lời ăn năn của Mèn chân thật, gần gũi — như tiếng nức nở vọng ra từ trang sách.',
        'Đúng — <b>Bộc lộ trực tiếp suy nghĩ, ăn năn của nhân vật</b>. Ngôi 1 giúp lời ăn năn của Mèn chân thật, gần gũi — như tiếng nức nở vọng ra từ trang sách.',
      ]
    ),
  ]),

  M(3, 'Truyện cổ tích: Đặc trưng thể loại', [
    Q('Truyện cổ tích thường có nhân vật?',
      ['Nhân vật lịch sử có thật', 'Người nổi tiếng đương thời', 'Nhà bác học', 'Kiểu nhân vật (người mồ côi, người út, dũng sĩ…)'], 3,
      'Cổ tích xây nhân vật theo "kiểu" — đại diện cho một lớp người trong xã hội (mồ côi, em út, dũng sĩ…).',
      [
        '<b>"Kiểu nhân vật"</b> trong cổ tích — không phải một người cụ thể, mà là <i>đại diện cho cả lớp người</i> trong xã hội.',
        'Các kiểu nhân vật quen thuộc:',
        '<ul><li><b>Người mồ côi</b> — Tấm, Sọ Dừa.</li><li><b>Người em út</b> hiền lành — Cây khế.</li><li><b>Người mang lốt xấu xí</b> — Sọ Dừa, Cóc.</li><li><b>Dũng sĩ</b> — Thạch Sanh.</li><li><b>Người bất hạnh</b> — chàng Mồ Côi.</li></ul>',
        '⚠️ Cổ tích không kể về <i>một người riêng</i> — mà gửi gắm số phận của <b>cả một lớp người</b>.',
      ],
      [
        'Sai — <b>Nhân vật lịch sử có thật</b> không đúng. Phải chọn <i>Kiểu nhân vật (người mồ côi, người út, dũng sĩ…)</i> vì cổ tích xây nhân vật theo "kiểu" — đại diện cho một lớp người trong xã hội (mồ côi, em út, dũng sĩ…).',
        'Sai — <b>Người nổi tiếng đương thời</b> không đúng. Phải chọn <i>Kiểu nhân vật (người mồ côi, người út, dũng sĩ…)</i> vì cổ tích xây nhân vật theo "kiểu" — đại diện cho một lớp người trong xã hội (mồ côi, em út, dũng sĩ…).',
        'Sai — <b>Nhà bác học</b> không đúng. Phải chọn <i>Kiểu nhân vật (người mồ côi, người út, dũng sĩ…)</i> vì cổ tích xây nhân vật theo "kiểu" — đại diện cho một lớp người trong xã hội (mồ côi, em út, dũng sĩ…).',
        'Đúng — <b>Kiểu nhân vật (người mồ côi, người út, dũng sĩ…)</b>. Cổ tích xây nhân vật theo "kiểu" — đại diện cho một lớp người trong xã hội (mồ côi, em út, dũng sĩ…).',
      ]
    ),
    Q('Yếu tố đặc trưng của cổ tích là?',
      ['Yếu tố kì ảo, hoang đường', 'Bám sự kiện lịch sử', 'Số liệu chính xác', 'Phỏng vấn nhân chứng'], 0,
      'Bụt, tiên, vật thần kì… là chất liệu đặc trưng của cổ tích.',
      [
        '<b>Yếu tố kì ảo</b> là chất liệu không thể thiếu của cổ tích:',
        '<ul><li><b>Nhân vật thần kì:</b> Bụt, tiên, ông Trời.</li><li><b>Vật báu:</b> cung tên thần (Thạch Sanh), niêu cơm thần, đàn thần.</li><li><b>Phép biến hoá:</b> Tấm biến thành chim vàng anh, cây xoan đào, quả thị.</li></ul>',
        'Người xưa dùng yếu tố kì ảo để <i>"giải quyết" sự bất công ngoài đời thực</i> — khi không thể chống cái ác bằng sức mình, người ta gửi gắm vào sức mạnh siêu nhiên.',
      ],
      [
        'Đúng — <b>Yếu tố kì ảo, hoang đường</b>. Bụt, tiên, vật thần kì… là chất liệu đặc trưng của cổ tích.',
        'Sai — <b>Bám sự kiện lịch sử</b> không đúng. Phải chọn <i>Yếu tố kì ảo, hoang đường</i> vì bụt, tiên, vật thần kì… là chất liệu đặc trưng của cổ tích.',
        'Sai — <b>Số liệu chính xác</b> không đúng. Phải chọn <i>Yếu tố kì ảo, hoang đường</i> vì bụt, tiên, vật thần kì… là chất liệu đặc trưng của cổ tích.',
        'Sai — <b>Phỏng vấn nhân chứng</b> không đúng. Phải chọn <i>Yếu tố kì ảo, hoang đường</i> vì bụt, tiên, vật thần kì… là chất liệu đặc trưng của cổ tích.',
      ]
    ),
    Q('Kết thúc phổ biến của truyện cổ tích thần kì?',
      ['Cả hai cùng chết', 'Bi kịch không lối thoát', 'Bỏ ngỏ không kết', 'Người tốt được hạnh phúc, kẻ ác bị trừng phạt'], 3,
      'Cổ tích thể hiện ước mơ công bằng của nhân dân — người tốt được hạnh phúc, kẻ ác bị trừng trị.',
      [
        '<b>Kết thúc có hậu</b> là đặc trưng của cổ tích thần kì:',
        '<ul><li>Tấm được làm hoàng hậu; mẹ con Cám bị trừng phạt.</li><li>Thạch Sanh lấy công chúa; Lí Thông bị sét đánh.</li><li>Sọ Dừa cưới được vợ hiền; hai chị độc ác bị tự nhục.</li></ul>',
        'Đây không phải sự <i>ngây thơ</i> — mà là <b>khát vọng công bằng</b> được người xưa gửi vào từng câu chuyện kể bên bếp lửa.',
      ],
      [
        'Sai — <b>Cả hai cùng chết</b> không đúng. Phải chọn <i>Người tốt được hạnh phúc, kẻ ác bị trừng phạt</i> vì cổ tích thể hiện ước mơ công bằng của nhân dân — người tốt được hạnh phúc, kẻ ác bị trừng trị.',
        'Sai — <b>Bi kịch không lối thoát</b> không đúng. Phải chọn <i>Người tốt được hạnh phúc, kẻ ác bị trừng phạt</i> vì cổ tích thể hiện ước mơ công bằng của nhân dân — người tốt được hạnh phúc, kẻ ác bị trừng trị.',
        'Sai — <b>Bỏ ngỏ không kết</b> không đúng. Phải chọn <i>Người tốt được hạnh phúc, kẻ ác bị trừng phạt</i> vì cổ tích thể hiện ước mơ công bằng của nhân dân — người tốt được hạnh phúc, kẻ ác bị trừng trị.',
        'Đúng — <b>Người tốt được hạnh phúc, kẻ ác bị trừng phạt</b>. Cổ tích thể hiện ước mơ công bằng của nhân dân — người tốt được hạnh phúc, kẻ ác bị trừng trị.',
      ]
    ),
    Q('"Thạch Sanh" thuộc kiểu cổ tích nào?',
      ['Cổ tích sinh hoạt', 'Cổ tích thần kì về người dũng sĩ', 'Truyện cười', 'Cổ tích loài vật'], 1,
      'Thạch Sanh là dũng sĩ, có cung thần, đàn thần, niêu cơm thần — cổ tích thần kì về người dũng sĩ.',
      [
        '<b>Ba kiểu cổ tích</b> phổ biến:',
        '<ul><li><b>Cổ tích thần kì:</b> có Bụt, tiên, vật báu (Tấm Cám, Thạch Sanh, Sọ Dừa).</li><li><b>Cổ tích loài vật:</b> nhân vật chính là loài vật.</li><li><b>Cổ tích sinh hoạt:</b> phản ánh đời sống hằng ngày, ít kì ảo.</li></ul>',
        '"<b>Thạch Sanh</b>" thuộc loại <i>thần kì về người dũng sĩ</i>:',
        '<ul><li><b>Thạch Sanh</b>: hiền lành, dũng cảm, sức khoẻ phi thường.</li><li><b>Lí Thông</b>: gian xảo — đại diện cái ác.</li><li><b>Vật báu</b>: cung tên thần, đàn thần, niêu cơm thần.</li></ul>',
      ],
      [
        'Sai — <b>Cổ tích sinh hoạt</b> không đúng. Phải chọn <i>Cổ tích thần kì về người dũng sĩ</i> vì thạch Sanh là dũng sĩ, có cung thần, đàn thần, niêu cơm thần — cổ tích thần kì về người dũng sĩ.',
        'Đúng — <b>Cổ tích thần kì về người dũng sĩ</b>. Thạch Sanh là dũng sĩ, có cung thần, đàn thần, niêu cơm thần — cổ tích thần kì về người dũng sĩ.',
        'Sai — <b>Truyện cười</b> không đúng. Phải chọn <i>Cổ tích thần kì về người dũng sĩ</i> vì thạch Sanh là dũng sĩ, có cung thần, đàn thần, niêu cơm thần — cổ tích thần kì về người dũng sĩ.',
        'Sai — <b>Cổ tích loài vật</b> không đúng. Phải chọn <i>Cổ tích thần kì về người dũng sĩ</i> vì thạch Sanh là dũng sĩ, có cung thần, đàn thần, niêu cơm thần — cổ tích thần kì về người dũng sĩ.',
      ]
    ),
    Q('Ý nghĩa truyện cổ tích đối với người đọc?',
      ['Quảng cáo sản phẩm', 'Cung cấp sự kiện sử học', 'Dạy cách kiếm tiền', 'Gửi gắm ước mơ công bằng, lòng nhân ái'], 3,
      'Cổ tích là tiếng nói khát vọng công bằng, lòng nhân ái của nhân dân.',
      [
        '<b>Ý nghĩa sâu xa</b> của cổ tích:',
        '<ul><li><b>Khát vọng công bằng</b> — người tốt được đền đáp, kẻ ác bị trừng phạt.</li><li><b>Lòng nhân ái</b> — bênh vực kẻ yếu, người thiệt thòi.</li><li><b>Niềm tin</b> — vào cái thiện sẽ chiến thắng.</li><li><b>Bài học đạo đức</b> — sống hiền lành, chăm chỉ sẽ được hạnh phúc.</li></ul>',
        'Đó là <i>tiếng nói tâm hồn của nhân dân</i> qua bao thế hệ.',
      ],
      [
        'Sai — <b>Quảng cáo sản phẩm</b> không đúng. Phải chọn <i>Gửi gắm ước mơ công bằng, lòng nhân ái</i> vì cổ tích là tiếng nói khát vọng công bằng, lòng nhân ái của nhân dân.',
        'Sai — <b>Cung cấp sự kiện sử học</b> không đúng. Phải chọn <i>Gửi gắm ước mơ công bằng, lòng nhân ái</i> vì cổ tích là tiếng nói khát vọng công bằng, lòng nhân ái của nhân dân.',
        'Sai — <b>Dạy cách kiếm tiền</b> không đúng. Phải chọn <i>Gửi gắm ước mơ công bằng, lòng nhân ái</i> vì cổ tích là tiếng nói khát vọng công bằng, lòng nhân ái của nhân dân.',
        'Đúng — <b>Gửi gắm ước mơ công bằng, lòng nhân ái</b>. Cổ tích là tiếng nói khát vọng công bằng, lòng nhân ái của nhân dân.',
      ]
    ),
    Q('Mô típ "người em út" thường gặp ở cổ tích Việt Nam là?',
      ['Người hiền lành bị thiệt thòi nhưng cuối cùng được đền đáp', 'Người út luôn thua', 'Người út luôn ác', 'Người út là vua'], 0,
      'Người em út hiền lành — qua thử thách thì được hạnh phúc (Tấm, Sọ Dừa, người em trong Cây khế…).',
      [
        '<b>Mô típ "người em út"</b> là một trong những mô típ phổ biến nhất của cổ tích Việt Nam:',
        '<ul><li><b>Tấm</b> — bị mẹ con Cám hành hạ, cuối cùng làm hoàng hậu.</li><li><b>Người em trong "Cây khế"</b> — bị anh chiếm hết của cải, cuối cùng giàu nhờ chim thần.</li><li><b>Sọ Dừa</b> — mang lốt xấu, cuối cùng cưới công chúa.</li></ul>',
        'Mô típ này nói lên <b>tiếng nói bênh vực những con người nhỏ bé, thiệt thòi</b> — ai sống tốt, dù bị bắt nạt, cuối cùng cũng được đền đáp xứng đáng.',
      ],
      [
        'Đúng — <b>Người hiền lành bị thiệt thòi nhưng cuối cùng được đền đáp</b>. Người em út hiền lành — qua thử thách thì được hạnh phúc (Tấm, Sọ Dừa, người em trong Cây khế…).',
        'Sai — <b>Người út luôn thua</b> không đúng. Phải chọn <i>Người hiền lành bị thiệt thòi nhưng cuối cùng được đền đáp</i> vì người em út hiền lành — qua thử thách thì được hạnh phúc (Tấm, Sọ Dừa, người em trong Cây khế…).',
        'Sai — <b>Người út luôn ác</b> không đúng. Phải chọn <i>Người hiền lành bị thiệt thòi nhưng cuối cùng được đền đáp</i> vì người em út hiền lành — qua thử thách thì được hạnh phúc (Tấm, Sọ Dừa, người em trong Cây khế…).',
        'Sai — <b>Người út là vua</b> không đúng. Phải chọn <i>Người hiền lành bị thiệt thòi nhưng cuối cùng được đền đáp</i> vì người em út hiền lành — qua thử thách thì được hạnh phúc (Tấm, Sọ Dừa, người em trong Cây khế…).',
      ]
    ),
  ]),

  M(4, 'Truyện truyền thuyết', [
    Q('Truyền thuyết khác cổ tích ở điểm nào?',
      ['Gắn với nhân vật và sự kiện lịch sử có cốt lõi sự thật', 'Không có yếu tố tưởng tượng', 'Không có cốt truyện', 'Không có nhân vật'], 0,
      'Truyền thuyết có "lõi" sự thật lịch sử + tô đậm bằng yếu tố kì ảo — khác với cổ tích chỉ có hư cấu.',
      [
        '<b>Truyền thuyết</b> = lõi sự thật lịch sử + yếu tố kì ảo.',
        '<b>Cổ tích</b> = hoàn toàn hư cấu, không bám lịch sử.',
        '<ul><li>✅ <b>Truyền thuyết:</b> có ông vua, trận đánh, địa danh có thật (Thánh Gióng, Hồ Gươm, Sơn Tinh – Thuỷ Tinh).</li><li>✅ <b>Cổ tích:</b> tập trung số phận cá nhân, không bám lịch sử (Tấm Cám, Thạch Sanh).</li><li>✅ Cả hai đều dùng <b>yếu tố kì ảo</b>.</li></ul>',
        'Truyền thuyết là <i>cách người Việt viết sử bằng văn học</i> — vừa ghi nhớ, vừa tự hào.',
      ],
      [
        'Đúng — <b>Gắn với nhân vật và sự kiện lịch sử có cốt lõi sự thật</b>. Truyền thuyết có "lõi" sự thật lịch sử + tô đậm bằng yếu tố kì ảo — khác với cổ tích chỉ có hư cấu.',
        'Sai — <b>Không có yếu tố tưởng tượng</b> không đúng. Phải chọn <i>Gắn với nhân vật và sự kiện lịch sử có cốt lõi sự thật</i> vì truyền thuyết có "lõi" sự thật lịch sử + tô đậm bằng yếu tố kì ảo — khác với cổ tích chỉ có hư cấu.',
        'Sai — <b>Không có cốt truyện</b> không đúng. Phải chọn <i>Gắn với nhân vật và sự kiện lịch sử có cốt lõi sự thật</i> vì truyền thuyết có "lõi" sự thật lịch sử + tô đậm bằng yếu tố kì ảo — khác với cổ tích chỉ có hư cấu.',
        'Sai — <b>Không có nhân vật</b> không đúng. Phải chọn <i>Gắn với nhân vật và sự kiện lịch sử có cốt lõi sự thật</i> vì truyền thuyết có "lõi" sự thật lịch sử + tô đậm bằng yếu tố kì ảo — khác với cổ tích chỉ có hư cấu.',
      ]
    ),
    Q('"Thánh Gióng" thể hiện điều gì?',
      ['Cách chăn nuôi', 'Cách may áo', 'Tinh thần chống ngoại xâm của dân tộc', 'Cách trồng lúa'], 2,
      'Gióng là biểu tượng sức mạnh chống ngoại xâm của người Việt cổ.',
      [
        '<b>Thánh Gióng</b> là một trong "<b>Tứ bất tử</b>" của tín ngưỡng dân gian Việt Nam — biểu tượng cho:',
        '<ul><li><b>Tinh thần chống ngoại xâm</b> — Gióng đánh giặc Ân.</li><li><b>Sức mạnh nhân dân</b> — cả làng góp gạo nuôi Gióng.</li><li><b>Anh hùng cộng đồng</b> — không tự sinh ra, mà do nhân dân nuôi dưỡng.</li></ul>',
        'Hình tượng Gióng <i>"vươn vai thành tráng sĩ"</i> kết tinh khát vọng và sức mạnh đoàn kết của dân tộc.',
      ],
      [
        'Sai — <b>Cách chăn nuôi</b> không đúng. Phải chọn <i>Tinh thần chống ngoại xâm của dân tộc</i> vì gióng là biểu tượng sức mạnh chống ngoại xâm của người Việt cổ.',
        'Sai — <b>Cách may áo</b> không đúng. Phải chọn <i>Tinh thần chống ngoại xâm của dân tộc</i> vì gióng là biểu tượng sức mạnh chống ngoại xâm của người Việt cổ.',
        'Đúng — <b>Tinh thần chống ngoại xâm của dân tộc</b>. Gióng là biểu tượng sức mạnh chống ngoại xâm của người Việt cổ.',
        'Sai — <b>Cách trồng lúa</b> không đúng. Phải chọn <i>Tinh thần chống ngoại xâm của dân tộc</i> vì gióng là biểu tượng sức mạnh chống ngoại xâm của người Việt cổ.',
      ]
    ),
    Q('Chi tiết Gióng lớn nhanh như thổi, ăn bao nhiêu cũng không no có ý nghĩa?',
      ['Trẻ con phải ăn nhiều', 'Gióng tham ăn', 'Sức mạnh nhân dân nuôi anh hùng cứu nước', 'Khen mẹ Gióng nấu ăn ngon'], 2,
      'Cả làng góp gạo nuôi Gióng — sức mạnh tập thể của nhân dân tạo nên anh hùng.',
      [
        '<b>Chi tiết kì ảo</b> "Gióng lớn nhanh như thổi" mang <b>ý nghĩa biểu tượng sâu sắc</b>:',
        '<ul><li>Anh hùng dân tộc <i>không tự sinh ra</i> — mà được nhân dân nuôi dưỡng.</li><li>Sức mạnh đánh giặc là <b>sức mạnh của cả cộng đồng dồn lại</b>.</li><li>Cả làng góp gạo, góp vải → Gióng vươn vai thành tráng sĩ.</li></ul>',
        'Đây là <i>thông điệp về sức mạnh đoàn kết</i> — bài học muôn đời của dân tộc Việt Nam.',
      ],
      [
        'Sai — <b>Trẻ con phải ăn nhiều</b> không đúng. Phải chọn <i>Sức mạnh nhân dân nuôi anh hùng cứu nước</i> vì cả làng góp gạo nuôi Gióng — sức mạnh tập thể của nhân dân tạo nên anh hùng.',
        'Sai — <b>Gióng tham ăn</b> không đúng. Phải chọn <i>Sức mạnh nhân dân nuôi anh hùng cứu nước</i> vì cả làng góp gạo nuôi Gióng — sức mạnh tập thể của nhân dân tạo nên anh hùng.',
        'Đúng — <b>Sức mạnh nhân dân nuôi anh hùng cứu nước</b>. Cả làng góp gạo nuôi Gióng — sức mạnh tập thể của nhân dân tạo nên anh hùng.',
        'Sai — <b>Khen mẹ Gióng nấu ăn ngon</b> không đúng. Phải chọn <i>Sức mạnh nhân dân nuôi anh hùng cứu nước</i> vì cả làng góp gạo nuôi Gióng — sức mạnh tập thể của nhân dân tạo nên anh hùng.',
      ]
    ),
    Q('Chi tiết kì ảo trong "Sự tích Hồ Gươm" là?',
      ['Lê Lợi đi học', 'Lê Lợi xây thành', 'Rùa thần đòi lại gươm', 'Trận đánh quân Minh'], 2,
      'Rùa Vàng nổi lên đòi lại gươm — yếu tố kì ảo thể hiện ý trời ủng hộ nghĩa quân chính nghĩa.',
      [
        '<b>"Sự tích Hồ Gươm"</b> có hai yếu tố kì ảo nổi bật:',
        '<ul><li><b>Lê Lợi nhận gươm thần</b> Long Quân để đánh đuổi giặc Minh.</li><li><b>Rùa Vàng đòi gươm</b> sau khi đất nước thanh bình.</li></ul>',
        'Yếu tố kì ảo thể hiện:',
        '<ul><li><b>Ý trời</b> ủng hộ nghĩa quân chính nghĩa.</li><li><b>Khát vọng hoà bình</b> sau chiến tranh.</li><li><b>Tự hào dân tộc</b> — sự kiện lịch sử được tô đậm bằng huyền thoại.</li></ul>',
      ],
      [
        'Sai — <b>Lê Lợi đi học</b> không đúng. Phải chọn <i>Rùa thần đòi lại gươm</i> vì rùa Vàng nổi lên đòi lại gươm — yếu tố kì ảo thể hiện ý trời ủng hộ nghĩa quân chính nghĩa.',
        'Sai — <b>Lê Lợi xây thành</b> không đúng. Phải chọn <i>Rùa thần đòi lại gươm</i> vì rùa Vàng nổi lên đòi lại gươm — yếu tố kì ảo thể hiện ý trời ủng hộ nghĩa quân chính nghĩa.',
        'Đúng — <b>Rùa thần đòi lại gươm</b>. Rùa Vàng nổi lên đòi lại gươm — yếu tố kì ảo thể hiện ý trời ủng hộ nghĩa quân chính nghĩa.',
        'Sai — <b>Trận đánh quân Minh</b> không đúng. Phải chọn <i>Rùa thần đòi lại gươm</i> vì rùa Vàng nổi lên đòi lại gươm — yếu tố kì ảo thể hiện ý trời ủng hộ nghĩa quân chính nghĩa.',
      ]
    ),
    Q('Ý nghĩa của việc Lê Lợi trả gươm?',
      ['Vì gươm quá nặng', 'Vì sợ rùa', 'Vì gươm bị gãy', 'Khát vọng hoà bình sau chiến tranh'], 3,
      'Đất nước thanh bình thì gươm trở về với thần — biểu tượng cho khát vọng hoà bình.',
      [
        '<b>Trả gươm</b> là chi tiết mang <b>tư tưởng nhân nghĩa rất Việt Nam</b>:',
        '<ul><li>Vũ khí <i>chỉ cần khi có giặc</i>.</li><li>Khi đất nước hoà bình, hãy <b>cất gươm đi</b>, để nhân dân sống yên ổn.</li><li>Người Việt chuộng hoà hiếu — không hiếu chiến.</li></ul>',
        'Đây cũng là lí do vì sao hồ ấy được đặt tên là <b>Hồ Hoàn Kiếm</b> (= hồ trả gươm) — gắn liền với khát vọng hoà bình của dân tộc.',
      ],
      [
        'Sai — <b>Vì gươm quá nặng</b> không đúng. Phải chọn <i>Khát vọng hoà bình sau chiến tranh</i> vì đất nước thanh bình thì gươm trở về với thần — biểu tượng cho khát vọng hoà bình.',
        'Sai — <b>Vì sợ rùa</b> không đúng. Phải chọn <i>Khát vọng hoà bình sau chiến tranh</i> vì đất nước thanh bình thì gươm trở về với thần — biểu tượng cho khát vọng hoà bình.',
        'Sai — <b>Vì gươm bị gãy</b> không đúng. Phải chọn <i>Khát vọng hoà bình sau chiến tranh</i> vì đất nước thanh bình thì gươm trở về với thần — biểu tượng cho khát vọng hoà bình.',
        'Đúng — <b>Khát vọng hoà bình sau chiến tranh</b>. Đất nước thanh bình thì gươm trở về với thần — biểu tượng cho khát vọng hoà bình.',
      ]
    ),
    Q('Truyền thuyết và cổ tích giống nhau ở chỗ?',
      ['Đều có nhân vật là loài vật', 'Đều ghi sự kiện chính xác như sử', 'Đều có yếu tố tưởng tượng kì ảo', 'Đều bằng văn xuôi hiện đại'], 2,
      'Cả truyền thuyết và cổ tích đều dùng yếu tố kì ảo để truyền tải ý nghĩa.',
      [
        '<b>Điểm chung</b> giữa truyền thuyết và cổ tích:',
        '<ul><li>✅ Đều là <b>truyện dân gian</b> (không rõ tác giả).</li><li>✅ Đều sử dụng <b>yếu tố kì ảo</b>, tưởng tượng.</li><li>✅ Đều <b>gửi gắm ước mơ, khát vọng</b> của nhân dân.</li></ul>',
        '<b>Điểm khác</b>:',
        '<ul><li>Truyền thuyết: có <b>lõi lịch sử</b>, nhân vật có tên tuổi.</li><li>Cổ tích: <i>không bám lịch sử</i>, nhân vật theo "kiểu".</li></ul>',
      ],
      [
        'Sai — <b>Đều có nhân vật là loài vật</b> không đúng. Phải chọn <i>Đều có yếu tố tưởng tượng kì ảo</i> vì cả truyền thuyết và cổ tích đều dùng yếu tố kì ảo để truyền tải ý nghĩa.',
        'Sai — <b>Đều ghi sự kiện chính xác như sử</b> không đúng. Phải chọn <i>Đều có yếu tố tưởng tượng kì ảo</i> vì cả truyền thuyết và cổ tích đều dùng yếu tố kì ảo để truyền tải ý nghĩa.',
        'Đúng — <b>Đều có yếu tố tưởng tượng kì ảo</b>. Cả truyền thuyết và cổ tích đều dùng yếu tố kì ảo để truyền tải ý nghĩa.',
        'Sai — <b>Đều bằng văn xuôi hiện đại</b> không đúng. Phải chọn <i>Đều có yếu tố tưởng tượng kì ảo</i> vì cả truyền thuyết và cổ tích đều dùng yếu tố kì ảo để truyền tải ý nghĩa.',
      ]
    ),
  ]),

  M(5, 'Thơ lục bát — đặc điểm và cách gieo vần', [
    Q('Thơ lục bát có cấu trúc câu là?',
      ['Hai câu đều 6 chữ', 'Hai câu đều 8 chữ', 'Một câu 6 chữ, một câu 8 chữ luân phiên', 'Câu nào cũng 7 chữ'], 2,
      '"Lục" = 6, "bát" = 8 — câu 6 chữ và câu 8 chữ luân phiên nối tiếp.',
      [
        '<b>Lục bát</b> là thể thơ truyền thống của dân tộc Việt Nam, gồm những cặp câu:',
        '<ul><li>Một câu <b>sáu chữ</b> (câu lục).</li><li>Một câu <b>tám chữ</b> (câu bát).</li><li>Hai câu luân phiên nối tiếp.</li></ul>',
        'Ví dụ: <code>"Trên trời mây trắng như bông (6)<br>Ở dưới cánh đồng bông trắng như mây (8)"</code>',
        'Bài thơ lục bát có thể <b>dài tuỳ ý</b> — miễn tuân theo quy tắc vần và luật.',
      ],
      [
        'Sai — <b>Hai câu đều 6 chữ</b> không đúng. Phải chọn <i>Một câu 6 chữ, một câu 8 chữ luân phiên</i> vì "Lục" = 6, "bát" = 8 — câu 6 chữ và câu 8 chữ luân phiên nối tiếp.',
        'Sai — <b>Hai câu đều 8 chữ</b> không đúng. Phải chọn <i>Một câu 6 chữ, một câu 8 chữ luân phiên</i> vì "Lục" = 6, "bát" = 8 — câu 6 chữ và câu 8 chữ luân phiên nối tiếp.',
        'Đúng — <b>Một câu 6 chữ, một câu 8 chữ luân phiên</b>. "Lục" = 6, "bát" = 8 — câu 6 chữ và câu 8 chữ luân phiên nối tiếp.',
        'Sai — <b>Câu nào cũng 7 chữ</b> không đúng. Phải chọn <i>Một câu 6 chữ, một câu 8 chữ luân phiên</i> vì "Lục" = 6, "bát" = 8 — câu 6 chữ và câu 8 chữ luân phiên nối tiếp.',
      ]
    ),
    Q('Tiếng thứ 6 của câu lục thường vần với?',
      ['Không cần vần', 'Tiếng thứ 8 của câu bát', 'Tiếng đầu câu sau', 'Tiếng thứ 6 của câu bát ngay sau'], 3,
      'Quy tắc gieo vần lục bát: tiếng thứ 6 câu lục vần với tiếng thứ 6 câu bát.',
      [
        '<b>Sợi dây vần móc xích</b> của lục bát:',
        '<ul><li>Tiếng <b>6</b> câu lục vần với tiếng <b>6</b> câu bát.</li><li>Tiếng <b>8</b> câu bát vần với tiếng <b>6</b> câu lục tiếp theo.</li><li>Cứ thế, các cặp câu nối với nhau như <i>mắt xích</i>.</li></ul>',
        'Ví dụ: <code>"Mình về có nhớ ta <b>chăng</b><br>Ta về ta nhớ hàm <b>răng</b> mình cười"</code> — "chăng" (6) vần với "răng" (6).',
      ],
      [
        'Sai — <b>Không cần vần</b> không đúng. Phải chọn <i>Tiếng thứ 6 của câu bát ngay sau</i> vì quy tắc gieo vần lục bát: tiếng thứ 6 câu lục vần với tiếng thứ 6 câu bát.',
        'Sai — <b>Tiếng thứ 8 của câu bát</b> không đúng. Phải chọn <i>Tiếng thứ 6 của câu bát ngay sau</i> vì quy tắc gieo vần lục bát: tiếng thứ 6 câu lục vần với tiếng thứ 6 câu bát.',
        'Sai — <b>Tiếng đầu câu sau</b> không đúng. Phải chọn <i>Tiếng thứ 6 của câu bát ngay sau</i> vì quy tắc gieo vần lục bát: tiếng thứ 6 câu lục vần với tiếng thứ 6 câu bát.',
        'Đúng — <b>Tiếng thứ 6 của câu bát ngay sau</b>. Quy tắc gieo vần lục bát: tiếng thứ 6 câu lục vần với tiếng thứ 6 câu bát.',
      ]
    ),
    Q('Tiếng thứ 8 của câu bát vần với?',
      ['Tiếng thứ 6 của câu lục tiếp theo', 'Tiếng thứ 8 câu bát sau', 'Tiếng đầu câu trước', 'Không cần vần'], 0,
      'Tiếng 8 câu bát vần với tiếng 6 câu lục liền sau — tạo móc xích nối các cặp câu.',
      [
        '<b>Vần chân — vần lưng</b> của lục bát:',
        '<ul><li><b>Vần lưng</b>: tiếng 6 câu lục ↔ tiếng 6 câu bát (trong cùng cặp).</li><li><b>Vần chân</b>: tiếng 8 câu bát ↔ tiếng 6 câu lục cặp sau (nối các cặp).</li></ul>',
        'Nhờ đó, bài thơ lục bát có thể <i>kéo dài bao nhiêu cũng được</i> — vần cứ móc nối nhau liên tục, tạo nhạc điệu liền mạch như ru.',
      ],
      [
        'Đúng — <b>Tiếng thứ 6 của câu lục tiếp theo</b>. Tiếng 8 câu bát vần với tiếng 6 câu lục liền sau — tạo móc xích nối các cặp câu.',
        'Sai — <b>Tiếng thứ 8 câu bát sau</b> không đúng. Phải chọn <i>Tiếng thứ 6 của câu lục tiếp theo</i> vì tiếng 8 câu bát vần với tiếng 6 câu lục liền sau — tạo móc xích nối các cặp câu.',
        'Sai — <b>Tiếng đầu câu trước</b> không đúng. Phải chọn <i>Tiếng thứ 6 của câu lục tiếp theo</i> vì tiếng 8 câu bát vần với tiếng 6 câu lục liền sau — tạo móc xích nối các cặp câu.',
        'Sai — <b>Không cần vần</b> không đúng. Phải chọn <i>Tiếng thứ 6 của câu lục tiếp theo</i> vì tiếng 8 câu bát vần với tiếng 6 câu lục liền sau — tạo móc xích nối các cặp câu.',
      ]
    ),
    Q('Lục bát thường gieo vần loại nào?',
      ['Vần trắc (T)', 'Cả bằng và trắc xen kẽ', 'Vần bằng (B)', 'Không có vần'], 2,
      'Vần lục bát là vần bằng (B) — tạo nhạc điệu êm đềm, ngân nga như tiếng ru.',
      [
        '<b>Vần bằng</b> trong tiếng Việt gồm các thanh:',
        '<ul><li>Thanh <b>không dấu</b> (ngang): ma, ba, đi…</li><li>Thanh <b>huyền</b>: mà, bà, mì…</li></ul>',
        'Vần bằng <i>tạo nhạc điệu êm đềm, ngân nga</i> — phù hợp với tính chất trữ tình của ca dao, dân ca.',
        '🚫 Phân biệt với <b>vần trắc</b> (sắc, hỏi, ngã, nặng) — gay gắt hơn.',
      ],
      [
        'Sai — <b>Vần trắc (T)</b> không đúng. Phải chọn <i>Vần bằng (B)</i> vì vần lục bát là vần bằng (B) — tạo nhạc điệu êm đềm, ngân nga như tiếng ru.',
        'Sai — <b>Cả bằng và trắc xen kẽ</b> không đúng. Phải chọn <i>Vần bằng (B)</i> vì vần lục bát là vần bằng (B) — tạo nhạc điệu êm đềm, ngân nga như tiếng ru.',
        'Đúng — <b>Vần bằng (B)</b>. Vần lục bát là vần bằng (B) — tạo nhạc điệu êm đềm, ngân nga như tiếng ru.',
        'Sai — <b>Không có vần</b> không đúng. Phải chọn <i>Vần bằng (B)</i> vì vần lục bát là vần bằng (B) — tạo nhạc điệu êm đềm, ngân nga như tiếng ru.',
      ]
    ),
    Q('Luật bằng trắc lục bát: tiếng thứ 2 câu lục thường mang thanh?',
      ['Bằng hoặc trắc đều được', 'Trắc', 'Bằng', 'Bỏ trống'], 2,
      'Luật cơ bản câu lục: tiếng 2 = Bằng, tiếng 4 = Trắc, tiếng 6 = Bằng.',
      [
        '<b>Luật "nhất – tam – ngũ bất luận, nhị – tứ – lục phân minh"</b>:',
        '<ul><li>Tiếng <b>1, 3, 5</b>: <i>không bắt buộc</i> theo luật.</li><li>Tiếng <b>2, 4, 6</b> (và 8 ở câu bát): <i>phải đúng luật</i>.</li></ul>',
        'Câu lục (6 chữ): <code>B – T – B</code> (tiếng 2, 4, 6).',
        'Câu bát (8 chữ): <code>B – T – B – B</code> (tiếng 2, 4, 6, 8).',
      ],
      [
        'Sai — <b>Bằng hoặc trắc đều được</b> không đúng. Phải chọn <i>Bằng</i> vì luật cơ bản câu lục: tiếng 2 = Bằng, tiếng 4 = Trắc, tiếng 6 = Bằng.',
        'Sai — <b>Trắc</b> không đúng. Phải chọn <i>Bằng</i> vì luật cơ bản câu lục: tiếng 2 = Bằng, tiếng 4 = Trắc, tiếng 6 = Bằng.',
        'Đúng — <b>Bằng</b>. Luật cơ bản câu lục: tiếng 2 = Bằng, tiếng 4 = Trắc, tiếng 6 = Bằng.',
        'Sai — <b>Bỏ trống</b> không đúng. Phải chọn <i>Bằng</i> vì luật cơ bản câu lục: tiếng 2 = Bằng, tiếng 4 = Trắc, tiếng 6 = Bằng.',
      ]
    ),
    Q('Câu nào sau đây ĐÚNG dạng lục bát?',
      ['"Trên trời mây trắng như bông / Ở dưới cánh đồng bông trắng như mây"', '"Em đi học sớm mai"', '"Hè về phượng nở đỏ"', '"Mặt trời đỏ rực / Buổi sáng tinh mơ"'], 0,
      'Hai câu 6 và 8, vần "bông – đồng – bông" theo móc xích → đúng lục bát.',
      [
        '<b>Soi từng đáp án:</b>',
        '<ul><li>✅ "Trên trời mây trắng như <b>bông</b> (6) / Ở dưới cánh <b>đồng</b> bông trắng như mây (8)" — đúng cấu trúc 6–8, vần "bông – đồng".</li><li>❌ "Em đi học sớm mai" — chỉ 5 chữ, không phải lục bát.</li><li>❌ "Hè về phượng nở đỏ" — chỉ 5 chữ.</li><li>❌ Hai câu cùng 5 chữ — không có cặp 6–8.</li></ul>',
        'Quy tắc: phải có <b>cặp 6–8 luân phiên + gieo vần móc xích</b>.',
      ],
      [
        'Đúng — <b>"Trên trời mây trắng như bông / Ở dưới cánh đồng bông trắng như mây"</b>. Hai câu 6 và 8, vần "bông – đồng – bông" theo móc xích → đúng lục bát.',
        'Sai — <b>"Em đi học sớm mai"</b> không đúng. Phải chọn <i>"Trên trời mây trắng như bông / Ở dưới cánh đồng bông trắng như mây"</i> vì hai câu 6 và 8, vần "bông – đồng – bông" theo móc xích → đúng lục bát.',
        'Sai — <b>"Hè về phượng nở đỏ"</b> không đúng. Phải chọn <i>"Trên trời mây trắng như bông / Ở dưới cánh đồng bông trắng như mây"</i> vì hai câu 6 và 8, vần "bông – đồng – bông" theo móc xích → đúng lục bát.',
        'Sai — <b>"Mặt trời đỏ rực / Buổi sáng tinh mơ"</b> không đúng. Phải chọn <i>"Trên trời mây trắng như bông / Ở dưới cánh đồng bông trắng như mây"</i> vì hai câu 6 và 8, vần "bông – đồng – bông" theo móc xích → đúng lục bát.',
      ]
    ),
  ]),

  M(6, 'Văn miêu tả (1): Tả người', [
    Q('Mục đích của văn tả người là?',
      ['Kể chuyện đời', 'Liệt kê số đo', 'Bàn luận triết lí', 'Giúp người đọc hình dung rõ ngoại hình, tính cách nhân vật'], 3,
      'Tả người là "vẽ chân dung bằng ngôn từ" — giúp người đọc hình dung rõ ngoại hình và tính cách.',
      [
        '<b>Văn tả người</b> = "vẽ chân dung bằng ngôn từ" — không phải bằng cọ và màu, mà bằng tiếng Việt giàu hình ảnh.',
        'Mục đích:',
        '<ul><li>Giúp người đọc <b>hình dung rõ</b> ngoại hình, tính cách, hoạt động.</li><li>Khiến người đọc <i>gấp sách lại vẫn nhớ</i> ánh mắt, nụ cười ấy.</li><li>Bộc lộ <b>tình cảm</b> của người viết với người được tả.</li></ul>',
        '⚠️ Không phải kể (không phải kể chuyện đời), không phải bình luận — mà là <b>vẽ lại</b>.',
      ],
      [
        'Sai — <b>Kể chuyện đời</b> không đúng. Phải chọn <i>Giúp người đọc hình dung rõ ngoại hình, tính cách nhân vật</i> vì tả người là "vẽ chân dung bằng ngôn từ" — giúp người đọc hình dung rõ ngoại hình và tính cách.',
        'Sai — <b>Liệt kê số đo</b> không đúng. Phải chọn <i>Giúp người đọc hình dung rõ ngoại hình, tính cách nhân vật</i> vì tả người là "vẽ chân dung bằng ngôn từ" — giúp người đọc hình dung rõ ngoại hình và tính cách.',
        'Sai — <b>Bàn luận triết lí</b> không đúng. Phải chọn <i>Giúp người đọc hình dung rõ ngoại hình, tính cách nhân vật</i> vì tả người là "vẽ chân dung bằng ngôn từ" — giúp người đọc hình dung rõ ngoại hình và tính cách.',
        'Đúng — <b>Giúp người đọc hình dung rõ ngoại hình, tính cách nhân vật</b>. Tả người là "vẽ chân dung bằng ngôn từ" — giúp người đọc hình dung rõ ngoại hình và tính cách.',
      ]
    ),
    Q('Khi tả ngoại hình, cần chú ý?',
      ['Chỉ tả chiều cao', 'Chỉ tả màu áo', 'Chi tiết tiêu biểu (nét mặt, ánh mắt, nụ cười…)', 'Liệt kê tất cả từ đầu đến chân'], 2,
      'Chọn chi tiết tiêu biểu, có dấu ấn — không liệt kê dàn trải.',
      [
        '<b>Chọn chi tiết tiêu biểu</b> là bí quyết tả người:',
        '<ul><li>Tả ngoại hình → chọn <b>nét đặc trưng</b>: mái tóc, đôi mắt, nụ cười, dáng đi.</li><li>Tránh <b>liệt kê khô khan</b>: cao bao nhiêu, nặng bao nhiêu, mặc áo gì…</li></ul>',
        'Ví dụ tả bà: <code>"Mái tóc bà bạc trắng như cước, đôi mắt hiền từ luôn ánh lên niềm vui khi nhìn em."</code> — chỉ 2 chi tiết mà gợi cả một bà ngoại nhân hậu.',
      ],
      [
        'Sai — <b>Chỉ tả chiều cao</b> không đúng. Phải chọn <i>Chi tiết tiêu biểu (nét mặt, ánh mắt, nụ cười…)</i> vì chọn chi tiết tiêu biểu, có dấu ấn — không liệt kê dàn trải.',
        'Sai — <b>Chỉ tả màu áo</b> không đúng. Phải chọn <i>Chi tiết tiêu biểu (nét mặt, ánh mắt, nụ cười…)</i> vì chọn chi tiết tiêu biểu, có dấu ấn — không liệt kê dàn trải.',
        'Đúng — <b>Chi tiết tiêu biểu (nét mặt, ánh mắt, nụ cười…)</b>. Chọn chi tiết tiêu biểu, có dấu ấn — không liệt kê dàn trải.',
        'Sai — <b>Liệt kê tất cả từ đầu đến chân</b> không đúng. Phải chọn <i>Chi tiết tiêu biểu (nét mặt, ánh mắt, nụ cười…)</i> vì chọn chi tiết tiêu biểu, có dấu ấn — không liệt kê dàn trải.',
      ]
    ),
    Q('Để tả tính cách qua hành động, ta nên?',
      ['Liệt kê khẩu hiệu', 'Tả cử chỉ, lời nói, việc làm cụ thể', 'Chỉ nói "rất tốt"', 'Tả chỗ ở'], 1,
      'Hành động cụ thể bộc lộ tính cách — nguyên tắc "show, don\'t tell".',
      [
        '<b>"Show, don\'t tell"</b> — Cho thấy, đừng kể:',
        '<ul><li>❌ "Mẹ em rất hiền." — lời nhận xét sáo rỗng.</li><li>✅ "Mỗi sáng, mẹ nhẹ nhàng vén chăn cho em, đôi tay ấm áp khẽ chạm vào trán em xem có sốt không." — hành động cụ thể.</li></ul>',
        'Một <b>hành động cụ thể</b> nói lên gấp trăm lần lời nhận xét chung chung.',
        'Cử chỉ + lời nói + việc làm → vẽ ra <i>tính cách sống động</i>.',
      ],
      [
        'Sai — <b>Liệt kê khẩu hiệu</b> không đúng. Phải chọn <i>Tả cử chỉ, lời nói, việc làm cụ thể</i> vì hành động cụ thể bộc lộ tính cách — nguyên tắc "show, don\'t tell".',
        'Đúng — <b>Tả cử chỉ, lời nói, việc làm cụ thể</b>. Hành động cụ thể bộc lộ tính cách — nguyên tắc "show, don\'t tell".',
        'Sai — <b>Chỉ nói "rất tốt"</b> không đúng. Phải chọn <i>Tả cử chỉ, lời nói, việc làm cụ thể</i> vì hành động cụ thể bộc lộ tính cách — nguyên tắc "show, don\'t tell".',
        'Sai — <b>Tả chỗ ở</b> không đúng. Phải chọn <i>Tả cử chỉ, lời nói, việc làm cụ thể</i> vì hành động cụ thể bộc lộ tính cách — nguyên tắc "show, don\'t tell".',
      ]
    ),
    Q('Bố cục bài văn tả người gồm?',
      ['Chỉ thân bài', 'Mở – Kết', 'Mở bài – Thân bài – Kết bài', 'Một đoạn duy nhất'], 2,
      'Bố cục 3 phần (Mở – Thân – Kết) là cơ bản của văn miêu tả.',
      [
        '<b>Bố cục ba phần</b> của bài văn tả người:',
        '<ul><li><b>Mở bài</b>: Giới thiệu người được tả — ai, ấn tượng chung.</li><li><b>Thân bài</b>: Tả ngoại hình; tả tính cách qua hoạt động, lời nói.</li><li><b>Kết bài</b>: Cảm nghĩ, tình cảm dành cho người đó.</li></ul>',
        'Đây là bố cục <b>chuẩn</b> cho mọi bài văn miêu tả ở lớp 6 — em hãy luôn giữ.',
      ],
      [
        'Sai — <b>Chỉ thân bài</b> không đúng. Phải chọn <i>Mở bài – Thân bài – Kết bài</i> vì bố cục 3 phần (Mở – Thân – Kết) là cơ bản của văn miêu tả.',
        'Sai — <b>Mở – Kết</b> không đúng. Phải chọn <i>Mở bài – Thân bài – Kết bài</i> vì bố cục 3 phần (Mở – Thân – Kết) là cơ bản của văn miêu tả.',
        'Đúng — <b>Mở bài – Thân bài – Kết bài</b>. Bố cục 3 phần (Mở – Thân – Kết) là cơ bản của văn miêu tả.',
        'Sai — <b>Một đoạn duy nhất</b> không đúng. Phải chọn <i>Mở bài – Thân bài – Kết bài</i> vì bố cục 3 phần (Mở – Thân – Kết) là cơ bản của văn miêu tả.',
      ]
    ),
    Q('Trong "Bà tôi rất hiền, mái tóc bạc như cước, đôi mắt hiền từ", đặc điểm tiêu biểu là?',
      ['Bộ váy', 'Mái tóc và đôi mắt', 'Đôi giày', 'Chiếc khăn'], 1,
      'Tóc bạc + mắt hiền là 2 chi tiết tiêu biểu thể hiện tuổi già nhân hậu.',
      [
        '<b>Phân tích chi tiết</b>:',
        '<ul><li><b>"Mái tóc bạc như cước"</b> — gợi tuổi già, đồng thời có phép so sánh sinh động.</li><li><b>"Đôi mắt hiền từ"</b> — gợi tính cách nhân hậu, gần gũi.</li></ul>',
        'Chỉ 2 chi tiết mà vẽ ra cả một <i>bà ngoại nhân hậu, tuổi cao</i> — đó là sức mạnh của <b>chi tiết tiêu biểu</b>.',
        '⚠️ Tác giả không nói chiều cao, cân nặng, trang phục — vì những chi tiết ấy <i>không cần thiết</i>.',
      ],
      [
        'Sai — <b>Bộ váy</b> không đúng. Phải chọn <i>Mái tóc và đôi mắt</i> vì tóc bạc + mắt hiền là 2 chi tiết tiêu biểu thể hiện tuổi già nhân hậu.',
        'Đúng — <b>Mái tóc và đôi mắt</b>. Tóc bạc + mắt hiền là 2 chi tiết tiêu biểu thể hiện tuổi già nhân hậu.',
        'Sai — <b>Đôi giày</b> không đúng. Phải chọn <i>Mái tóc và đôi mắt</i> vì tóc bạc + mắt hiền là 2 chi tiết tiêu biểu thể hiện tuổi già nhân hậu.',
        'Sai — <b>Chiếc khăn</b> không đúng. Phải chọn <i>Mái tóc và đôi mắt</i> vì tóc bạc + mắt hiền là 2 chi tiết tiêu biểu thể hiện tuổi già nhân hậu.',
      ]
    ),
    Q('Phép tu từ nào hay dùng khi tả người?',
      ['So sánh, nhân hoá', 'Hoán dụ về tỉ giá', 'Tỉ lệ phần trăm', 'Liệt kê số liệu'], 0,
      'So sánh và nhân hoá là "đôi cánh" của văn tả — làm chân dung sinh động.',
      [
        '<b>So sánh và nhân hoá</b> là hai phép tu từ "vàng" của văn miêu tả:',
        '<ul><li><b>So sánh</b>: "tóc bà bạc <code>như cước</code>", "ánh mắt mẹ ấm <code>như nắng sớm</code>".</li><li><b>Nhân hoá</b>: "<i>nụ cười rạng rỡ</i>", "<i>đôi mắt biết nói</i>".</li></ul>',
        '⚠️ <b>Chớ lạm dụng</b> — quá nhiều so sánh, nhân hoá sẽ làm câu văn <i>sáo rỗng, kệch cỡm</i>.',
        'Nguyên tắc: dùng <b>vừa đủ</b>, đúng chỗ, có tính chọn lọc.',
      ],
      [
        'Đúng — <b>So sánh, nhân hoá</b>. So sánh và nhân hoá là "đôi cánh" của văn tả — làm chân dung sinh động.',
        'Sai — <b>Hoán dụ về tỉ giá</b> không đúng. Phải chọn <i>So sánh, nhân hoá</i> vì so sánh và nhân hoá là "đôi cánh" của văn tả — làm chân dung sinh động.',
        'Sai — <b>Tỉ lệ phần trăm</b> không đúng. Phải chọn <i>So sánh, nhân hoá</i> vì so sánh và nhân hoá là "đôi cánh" của văn tả — làm chân dung sinh động.',
        'Sai — <b>Liệt kê số liệu</b> không đúng. Phải chọn <i>So sánh, nhân hoá</i> vì so sánh và nhân hoá là "đôi cánh" của văn tả — làm chân dung sinh động.',
      ]
    ),
  ]),

  M(7, 'Văn miêu tả (2): Tả cảnh', [
    Q('Khi tả cảnh, trình tự hợp lí thường là?',
      ['Từ cảm xúc đến số liệu', 'Lung tung không trình tự', 'Chỉ tả phần kết', 'Từ bao quát đến chi tiết (hoặc từ xa đến gần)'], 3,
      'Trình tự không gian (xa→gần, bao quát→chi tiết) hoặc thời gian giúp bài chặt chẽ.',
      [
        '<b>Hai trình tự miêu tả</b> phổ biến:',
        '<ul><li><b>Trình tự không gian</b>: từ <i>xa đến gần</i>, từ <i>bao quát đến chi tiết</i>, từ <i>trên xuống dưới</i>.</li><li><b>Trình tự thời gian</b>: <i>sáng – trưa – chiều – tối</i>.</li></ul>',
        'Trình tự rõ ràng giúp bài văn <b>mạch lạc</b>, người đọc dễ hình dung và "đi theo" mắt người viết.',
      ],
      [
        'Sai — <b>Từ cảm xúc đến số liệu</b> không đúng. Phải chọn <i>Từ bao quát đến chi tiết (hoặc từ xa đến gần)</i> vì trình tự không gian (xa→gần, bao quát→chi tiết) hoặc thời gian giúp bài chặt chẽ.',
        'Sai — <b>Lung tung không trình tự</b> không đúng. Phải chọn <i>Từ bao quát đến chi tiết (hoặc từ xa đến gần)</i> vì trình tự không gian (xa→gần, bao quát→chi tiết) hoặc thời gian giúp bài chặt chẽ.',
        'Sai — <b>Chỉ tả phần kết</b> không đúng. Phải chọn <i>Từ bao quát đến chi tiết (hoặc từ xa đến gần)</i> vì trình tự không gian (xa→gần, bao quát→chi tiết) hoặc thời gian giúp bài chặt chẽ.',
        'Đúng — <b>Từ bao quát đến chi tiết (hoặc từ xa đến gần)</b>. Trình tự không gian (xa→gần, bao quát→chi tiết) hoặc thời gian giúp bài chặt chẽ.',
      ]
    ),
    Q('Tả cảnh cần huy động giác quan nào?',
      ['Chỉ mắt', 'Không cần giác quan', 'Chỉ tai', 'Mắt, tai, mũi, da (thị, thính, khứu, xúc giác)…'], 3,
      'Tả đa giác quan → cảnh sống động, có hồn.',
      [
        '<b>Bốn giác quan</b> giúp tả cảnh sống động:',
        '<ul><li><b>Thị giác</b>: màu sắc, hình khối, ánh sáng.</li><li><b>Thính giác</b>: tiếng chim, tiếng gió, tiếng người.</li><li><b>Khứu giác</b>: mùi cỏ, mùi đất, mùi hoa.</li><li><b>Xúc giác</b>: cảm giác mát rượi, ấm áp, se lạnh.</li></ul>',
        'Cảnh chỉ thật <i>"có hồn"</i> khi được vẽ bằng <b>nhiều giác quan</b> chứ không chỉ bằng mắt.',
      ],
      [
        'Sai — <b>Chỉ mắt</b> không đúng. Phải chọn <i>Mắt, tai, mũi, da (thị, thính, khứu, xúc giác)…</i> vì tả đa giác quan → cảnh sống động, có hồn.',
        'Sai — <b>Không cần giác quan</b> không đúng. Phải chọn <i>Mắt, tai, mũi, da (thị, thính, khứu, xúc giác)…</i> vì tả đa giác quan → cảnh sống động, có hồn.',
        'Sai — <b>Chỉ tai</b> không đúng. Phải chọn <i>Mắt, tai, mũi, da (thị, thính, khứu, xúc giác)…</i> vì tả đa giác quan → cảnh sống động, có hồn.',
        'Đúng — <b>Mắt, tai, mũi, da (thị, thính, khứu, xúc giác)…</b>. Tả đa giác quan → cảnh sống động, có hồn.',
      ]
    ),
    Q('"Buổi sớm, sương la đà trên mặt hồ như khói." sử dụng?',
      ['Hoán dụ', 'So sánh', 'Liệt kê', 'Điệp ngữ'], 1,
      '"Sương như khói" — có từ "như" → phép so sánh ngang bằng.',
      [
        '<b>Phép so sánh</b> được nhận diện qua các từ: <code>như, tựa, là, bằng, hơn, kém</code>.',
        'Trong câu này:',
        '<ul><li><b>Vế A</b>: "sương la đà trên mặt hồ".</li><li><b>Từ so sánh</b>: "như".</li><li><b>Vế B</b>: "khói".</li></ul>',
        '<b>Tác dụng</b>: làm sương trở nên <i>mờ ảo, bay bay</i> như khói — gợi cảnh sớm bình minh đầy chất thơ.',
      ],
      [
        'Sai — <b>Hoán dụ</b> không đúng. Phải chọn <i>So sánh</i> vì "Sương như khói" — có từ "như" → phép so sánh ngang bằng.',
        'Đúng — <b>So sánh</b>. "Sương như khói" — có từ "như" → phép so sánh ngang bằng.',
        'Sai — <b>Liệt kê</b> không đúng. Phải chọn <i>So sánh</i> vì "Sương như khói" — có từ "như" → phép so sánh ngang bằng.',
        'Sai — <b>Điệp ngữ</b> không đúng. Phải chọn <i>So sánh</i> vì "Sương như khói" — có từ "như" → phép so sánh ngang bằng.',
      ]
    ),
    Q('Khi tả cảnh có người, cần?',
      ['Tách cảnh và người', 'Lồng hoạt động của người vào cảnh', 'Chỉ tả cây cối', 'Bỏ con người'], 1,
      'Cảnh có sự sống — người hoạt động làm cảnh sinh động.',
      [
        'Cảnh <b>không phải bức ảnh chết</b>. Cảnh thật sự đẹp khi có sự sống:',
        '<ul><li>Cánh đồng có <b>người nông dân cấy lúa</b>.</li><li>Dòng sông có <b>con đò chở khách</b>.</li><li>Con phố có <b>em bé chạy nhảy</b>.</li></ul>',
        'Lồng <i>hoạt động của con người</i> vào cảnh — cảnh sẽ <b>thở</b>, có nhịp sống.',
        '⚠️ Cảm xúc người viết cũng phải lồng vào: yêu, nhớ, bâng khuâng…',
      ],
      [
        'Sai — <b>Tách cảnh và người</b> không đúng. Phải chọn <i>Lồng hoạt động của người vào cảnh</i> vì cảnh có sự sống — người hoạt động làm cảnh sinh động.',
        'Đúng — <b>Lồng hoạt động của người vào cảnh</b>. Cảnh có sự sống — người hoạt động làm cảnh sinh động.',
        'Sai — <b>Chỉ tả cây cối</b> không đúng. Phải chọn <i>Lồng hoạt động của người vào cảnh</i> vì cảnh có sự sống — người hoạt động làm cảnh sinh động.',
        'Sai — <b>Bỏ con người</b> không đúng. Phải chọn <i>Lồng hoạt động của người vào cảnh</i> vì cảnh có sự sống — người hoạt động làm cảnh sinh động.',
      ]
    ),
    Q('Cảm xúc của người viết trong bài tả cảnh nên?',
      ['Không cần', 'Tách biệt, viết riêng', 'Chỉ viết ở kết bài', 'Lồng vào hình ảnh một cách tự nhiên'], 3,
      'Tả cảnh ngụ tình — cảm xúc đi cùng hình ảnh, không tách rời.',
      [
        '<b>"Tả cảnh ngụ tình"</b> — cảm xúc người viết phải <i>thấm vào từng hình ảnh</i>:',
        '<ul><li>Không tách cảm xúc thành đoạn riêng.</li><li>Không "khẩu hiệu hoá" cảm xúc kiểu "em yêu cảnh này lắm".</li><li>Lồng cảm xúc vào <b>cách chọn từ, chọn hình ảnh</b>.</li></ul>',
        'Ví dụ: "Cánh đồng <b>thân thương</b> ấy đã in dấu bao tuổi thơ tôi" — từ "thân thương" gửi gắm cả tình cảm.',
      ],
      [
        'Sai — <b>Không cần</b> không đúng. Phải chọn <i>Lồng vào hình ảnh một cách tự nhiên</i> vì tả cảnh ngụ tình — cảm xúc đi cùng hình ảnh, không tách rời.',
        'Sai — <b>Tách biệt, viết riêng</b> không đúng. Phải chọn <i>Lồng vào hình ảnh một cách tự nhiên</i> vì tả cảnh ngụ tình — cảm xúc đi cùng hình ảnh, không tách rời.',
        'Sai — <b>Chỉ viết ở kết bài</b> không đúng. Phải chọn <i>Lồng vào hình ảnh một cách tự nhiên</i> vì tả cảnh ngụ tình — cảm xúc đi cùng hình ảnh, không tách rời.',
        'Đúng — <b>Lồng vào hình ảnh một cách tự nhiên</b>. Tả cảnh ngụ tình — cảm xúc đi cùng hình ảnh, không tách rời.',
      ]
    ),
    Q('Câu nào tả cảnh THẤT BẠI?',
      ['"Tiếng chim ríu rít trong vòm lá."', '"Nắng vàng như mật trải đều trên cánh đồng."', '"Mặt trời lên đỏ rực phía Đông."', '"Cảnh đẹp lắm." (chung chung)'], 3,
      'Câu chung chung không gợi hình — không phải tả cảnh tốt.',
      [
        '<b>Tả cảnh là làm người đọc THẤY đẹp</b>, không phải <i>bảo</i> người đọc rằng nó đẹp.',
        'Phân tích:',
        '<ul><li>✅ "Nắng vàng như mật trải đều trên cánh đồng" — có hình ảnh, có so sánh.</li><li>✅ "Tiếng chim ríu rít trong vòm lá" — có âm thanh sống động.</li><li>✅ "Mặt trời lên đỏ rực phía Đông" — có màu sắc, có không gian.</li><li>❌ "Cảnh đẹp lắm" — <b>khẩu hiệu</b>, không gợi hình ảnh nào.</li></ul>',
      ],
      [
        'Sai — <b>"Tiếng chim ríu rít trong vòm lá."</b> không đúng. Phải chọn <i>"Cảnh đẹp lắm." (chung chung)</i> vì câu chung chung không gợi hình — không phải tả cảnh tốt.',
        'Sai — <b>"Nắng vàng như mật trải đều trên cánh đồng."</b> không đúng. Phải chọn <i>"Cảnh đẹp lắm." (chung chung)</i> vì câu chung chung không gợi hình — không phải tả cảnh tốt.',
        'Sai — <b>"Mặt trời lên đỏ rực phía Đông."</b> không đúng. Phải chọn <i>"Cảnh đẹp lắm." (chung chung)</i> vì câu chung chung không gợi hình — không phải tả cảnh tốt.',
        'Đúng — <b>"Cảnh đẹp lắm." (chung chung)</b>. Câu chung chung không gợi hình — không phải tả cảnh tốt.',
      ]
    ),
  ]),

  M(8, 'Biện pháp tu từ: So sánh', [
    Q('So sánh là?',
      ['Đặt hai từ giống nhau', 'Đối chiếu sự vật này với sự vật khác có nét tương đồng', 'Liệt kê', 'Đếm số lượng'], 1,
      'So sánh là đối chiếu hai sự vật có nét tương đồng để làm nổi bật đặc điểm.',
      [
        '<b>So sánh</b> là đối chiếu sự vật, sự việc này với sự vật, sự việc khác <i>có nét tương đồng</i> nhằm làm tăng <b>sức gợi hình, gợi cảm</b> cho cách diễn đạt.',
        'Ví dụ: <code>"Trẻ em như búp trên cành"</code> — đối chiếu trẻ em với búp non để nói về sự trong sáng, mong manh, cần che chở.',
        '⚠️ Hai vế phải có <b>điểm chung</b> nào đó — đó là cơ sở của so sánh.',
      ],
      [
        'Sai — <b>Đặt hai từ giống nhau</b> không đúng. Phải chọn <i>Đối chiếu sự vật này với sự vật khác có nét tương đồng</i> vì so sánh là đối chiếu hai sự vật có nét tương đồng để làm nổi bật đặc điểm.',
        'Đúng — <b>Đối chiếu sự vật này với sự vật khác có nét tương đồng</b>. So sánh là đối chiếu hai sự vật có nét tương đồng để làm nổi bật đặc điểm.',
        'Sai — <b>Liệt kê</b> không đúng. Phải chọn <i>Đối chiếu sự vật này với sự vật khác có nét tương đồng</i> vì so sánh là đối chiếu hai sự vật có nét tương đồng để làm nổi bật đặc điểm.',
        'Sai — <b>Đếm số lượng</b> không đúng. Phải chọn <i>Đối chiếu sự vật này với sự vật khác có nét tương đồng</i> vì so sánh là đối chiếu hai sự vật có nét tương đồng để làm nổi bật đặc điểm.',
      ]
    ),
    Q('Cấu tạo đầy đủ của phép so sánh gồm mấy yếu tố?',
      ['2 yếu tố', '5 yếu tố', '4 yếu tố: vế A, phương diện, từ so sánh, vế B', '3 yếu tố'], 2,
      'Cấu tạo đầy đủ: A – phương diện – từ so sánh – B (có thể lược phương diện hoặc từ so sánh).',
      [
        '<b>Bốn yếu tố</b> của phép so sánh đầy đủ:',
        '<ul><li><b>Vế A</b>: sự vật được so sánh.</li><li><b>Phương diện so sánh</b>: nét tương đồng (có thể ẩn).</li><li><b>Từ so sánh</b>: như, là, tựa như, bằng, hơn, kém…</li><li><b>Vế B</b>: sự vật dùng để so sánh.</li></ul>',
        'Ví dụ: <code>"Trẻ em (A) đẹp (phương diện) như (từ so sánh) búp trên cành (B)"</code>.',
        'Trong thực tế, <i>phương diện</i> hoặc <i>từ so sánh</i> thường được lược bỏ cho câu gọn.',
      ],
      [
        'Sai — <b>2 yếu tố</b> không đúng. Phải chọn <i>4 yếu tố: vế A, phương diện, từ so sánh, vế B</i> vì cấu tạo đầy đủ: A – phương diện – từ so sánh – B (có thể lược phương diện hoặc từ so sánh).',
        'Sai — <b>5 yếu tố</b> không đúng. Phải chọn <i>4 yếu tố: vế A, phương diện, từ so sánh, vế B</i> vì cấu tạo đầy đủ: A – phương diện – từ so sánh – B (có thể lược phương diện hoặc từ so sánh).',
        'Đúng — <b>4 yếu tố: vế A, phương diện, từ so sánh, vế B</b>. Cấu tạo đầy đủ: A – phương diện – từ so sánh – B (có thể lược phương diện hoặc từ so sánh).',
        'Sai — <b>3 yếu tố</b> không đúng. Phải chọn <i>4 yếu tố: vế A, phương diện, từ so sánh, vế B</i> vì cấu tạo đầy đủ: A – phương diện – từ so sánh – B (có thể lược phương diện hoặc từ so sánh).',
      ]
    ),
    Q('"Trẻ em như búp trên cành" — từ so sánh là?',
      ['búp trên cành', 'trẻ em', 'như', 'trên cành'], 2,
      '"Như" là từ so sánh — dấu hiệu nhận biết rõ nhất của phép so sánh ngang bằng.',
      [
        '<b>Phân tích cấu trúc</b> câu "Trẻ em như búp trên cành":',
        '<ul><li><b>Vế A</b>: "trẻ em".</li><li><b>Phương diện</b>: ẩn (sự trong sáng, mong manh).</li><li><b>Từ so sánh</b>: <code>"như"</code>.</li><li><b>Vế B</b>: "búp trên cành".</li></ul>',
        'Các <b>từ so sánh phổ biến</b>: <code>như, tựa, tựa như, là, bằng, giống như, hệt như, hơn, kém, chẳng bằng</code>.',
      ],
      [
        'Sai — <b>búp trên cành</b> không đúng. Phải chọn <i>như</i> vì "Như" là từ so sánh — dấu hiệu nhận biết rõ nhất của phép so sánh ngang bằng.',
        'Sai — <b>trẻ em</b> không đúng. Phải chọn <i>như</i> vì "Như" là từ so sánh — dấu hiệu nhận biết rõ nhất của phép so sánh ngang bằng.',
        'Đúng — <b>như</b>. "Như" là từ so sánh — dấu hiệu nhận biết rõ nhất của phép so sánh ngang bằng.',
        'Sai — <b>trên cành</b> không đúng. Phải chọn <i>như</i> vì "Như" là từ so sánh — dấu hiệu nhận biết rõ nhất của phép so sánh ngang bằng.',
      ]
    ),
    Q('"Đường vô xứ Nghệ quanh quanh / Non xanh nước biếc như tranh hoạ đồ" — vế B là?',
      ['Non xanh', 'Đường vô xứ Nghệ', 'Nước biếc', 'Tranh hoạ đồ'], 3,
      'Vế B là đối tượng được dùng để so sánh — ở đây là "tranh hoạ đồ".',
      [
        '<b>Phân tích câu ca dao</b>:',
        '<ul><li><b>Vế A</b>: "Non xanh nước biếc" (cảnh xứ Nghệ).</li><li><b>Từ so sánh</b>: <code>"như"</code>.</li><li><b>Vế B</b>: <b>"tranh hoạ đồ"</b> (bức tranh đẹp).</li></ul>',
        '<b>Tác dụng</b>: gợi lên vẻ đẹp <i>thơ mộng, hữu tình</i> của xứ Nghệ — đẹp như một bức tranh được vẽ ra.',
      ],
      [
        'Sai — <b>Non xanh</b> không đúng. Phải chọn <i>Tranh hoạ đồ</i> vì vế B là đối tượng được dùng để so sánh — ở đây là "tranh hoạ đồ".',
        'Sai — <b>Đường vô xứ Nghệ</b> không đúng. Phải chọn <i>Tranh hoạ đồ</i> vì vế B là đối tượng được dùng để so sánh — ở đây là "tranh hoạ đồ".',
        'Sai — <b>Nước biếc</b> không đúng. Phải chọn <i>Tranh hoạ đồ</i> vì vế B là đối tượng được dùng để so sánh — ở đây là "tranh hoạ đồ".',
        'Đúng — <b>Tranh hoạ đồ</b>. Vế B là đối tượng được dùng để so sánh — ở đây là "tranh hoạ đồ".',
      ]
    ),
    Q('Tác dụng của so sánh trong văn miêu tả?',
      ['Làm hình ảnh sinh động, gợi cảm', 'Tăng số chữ', 'Đánh đố người đọc', 'Làm câu dài hơn'], 0,
      'So sánh giúp người đọc hình dung cụ thể, sống động hình ảnh được miêu tả.',
      [
        '<b>Tác dụng của so sánh</b>:',
        '<ul><li>Làm hình ảnh trở nên <b>cụ thể</b>, sinh động.</li><li>Làm điều <i>trừu tượng</i> trở nên <b>dễ hình dung</b>.</li><li>Gợi <b>cảm xúc</b>, sự liên tưởng phong phú.</li></ul>',
        'Ví dụ: <code>"Đôi mắt em đen láy như hai hột nhãn"</code> — người đọc thấy ngay đôi mắt ấy, không cần thêm lời giải thích.',
      ],
      [
        'Đúng — <b>Làm hình ảnh sinh động, gợi cảm</b>. So sánh giúp người đọc hình dung cụ thể, sống động hình ảnh được miêu tả.',
        'Sai — <b>Tăng số chữ</b> không đúng. Phải chọn <i>Làm hình ảnh sinh động, gợi cảm</i> vì so sánh giúp người đọc hình dung cụ thể, sống động hình ảnh được miêu tả.',
        'Sai — <b>Đánh đố người đọc</b> không đúng. Phải chọn <i>Làm hình ảnh sinh động, gợi cảm</i> vì so sánh giúp người đọc hình dung cụ thể, sống động hình ảnh được miêu tả.',
        'Sai — <b>Làm câu dài hơn</b> không đúng. Phải chọn <i>Làm hình ảnh sinh động, gợi cảm</i> vì so sánh giúp người đọc hình dung cụ thể, sống động hình ảnh được miêu tả.',
      ]
    ),
    Q('Có mấy kiểu so sánh chính?',
      ['Chỉ ngang bằng', 'So sánh ngang bằng và so sánh không ngang bằng', 'Chỉ không ngang bằng', 'Bốn kiểu'], 1,
      'Hai kiểu: ngang bằng (như, là…) và không ngang bằng (hơn, kém, chẳng bằng…).',
      [
        '<b>Hai kiểu so sánh</b> chính:',
        '<ul><li><b>So sánh ngang bằng</b>: dùng <code>"như", "tựa", "là", "bằng"</code> — "Mặt trời như quả cầu lửa".</li><li><b>So sánh không ngang bằng</b>: dùng <code>"hơn", "kém", "chẳng bằng"</code> — "Bóng Bác cao lồng lộng / Ấm hơn ngọn lửa hồng".</li></ul>',
        'Mẹo nhận biết: thấy <i>"như"</i> → ngang bằng; thấy <i>"hơn/kém"</i> → không ngang bằng.',
      ],
      [
        'Sai — <b>Chỉ ngang bằng</b> không đúng. Phải chọn <i>So sánh ngang bằng và so sánh không ngang bằng</i> vì hai kiểu: ngang bằng (như, là…) và không ngang bằng (hơn, kém, chẳng bằng…).',
        'Đúng — <b>So sánh ngang bằng và so sánh không ngang bằng</b>. Hai kiểu: ngang bằng (như, là…) và không ngang bằng (hơn, kém, chẳng bằng…).',
        'Sai — <b>Chỉ không ngang bằng</b> không đúng. Phải chọn <i>So sánh ngang bằng và so sánh không ngang bằng</i> vì hai kiểu: ngang bằng (như, là…) và không ngang bằng (hơn, kém, chẳng bằng…).',
        'Sai — <b>Bốn kiểu</b> không đúng. Phải chọn <i>So sánh ngang bằng và so sánh không ngang bằng</i> vì hai kiểu: ngang bằng (như, là…) và không ngang bằng (hơn, kém, chẳng bằng…).',
      ]
    ),
  ]),

  M(9, 'Biện pháp tu từ: Nhân hoá', [
    Q('Nhân hoá là?',
      ['Đặt tên cho người', 'So sánh hai vật', 'Đếm số lượng vật', 'Gọi/tả vật bằng từ vốn dùng cho người'], 3,
      'Nhân hoá là gọi hoặc tả vật bằng những từ ngữ vốn dùng để gọi hoặc tả người.',
      [
        '<b>Nhân hoá</b> là phép tu từ <b>gán đặc điểm con người cho vật</b> — cây cối, đồ vật, con vật, hiện tượng.',
        'Nhân hoá làm thế giới vật trở nên:',
        '<ul><li><b>Gần gũi</b> — như có hồn, biết suy nghĩ.</li><li><b>Sinh động</b> — biết hành động, có cảm xúc.</li><li><b>Có hồn</b> — không còn vô tri.</li></ul>',
        'Ví dụ: "<i>Ông trời mặc áo giáp đen ra trận</i>" — trời được nhân hoá thành "ông" có hành động như người lính.',
      ],
      [
        'Sai — <b>Đặt tên cho người</b> không đúng. Phải chọn <i>Gọi/tả vật bằng từ vốn dùng cho người</i> vì nhân hoá là gọi hoặc tả vật bằng những từ ngữ vốn dùng để gọi hoặc tả người.',
        'Sai — <b>So sánh hai vật</b> không đúng. Phải chọn <i>Gọi/tả vật bằng từ vốn dùng cho người</i> vì nhân hoá là gọi hoặc tả vật bằng những từ ngữ vốn dùng để gọi hoặc tả người.',
        'Sai — <b>Đếm số lượng vật</b> không đúng. Phải chọn <i>Gọi/tả vật bằng từ vốn dùng cho người</i> vì nhân hoá là gọi hoặc tả vật bằng những từ ngữ vốn dùng để gọi hoặc tả người.',
        'Đúng — <b>Gọi/tả vật bằng từ vốn dùng cho người</b>. Nhân hoá là gọi hoặc tả vật bằng những từ ngữ vốn dùng để gọi hoặc tả người.',
      ]
    ),
    Q('"Ông trời mặc áo giáp đen ra trận" — phép nhân hoá là?',
      ['Gọi trời là "ông", trời "mặc áo", "ra trận"', 'Liệt kê đồ vật', 'So sánh trời với áo', 'Điệp từ'], 0,
      'Trời được gọi là "ông" + có hành động "mặc áo", "ra trận" như người — đây là nhân hoá.',
      [
        '<b>Phân tích phép nhân hoá</b> trong câu thơ của Trần Đăng Khoa:',
        '<ul><li><b>Cách 1</b>: gọi trời là "<b>ông</b>" — dùng từ xưng hô của người.</li><li><b>Cách 2</b>: trời "<b>mặc áo giáp đen</b>", "<b>ra trận</b>" — gán hành động của người lính cho trời.</li></ul>',
        '<b>Tác dụng</b>: cơn giông hiện lên <i>hùng tráng, hào hùng</i> như cảnh ra trận — không còn là hiện tượng tự nhiên khô khan.',
      ],
      [
        'Đúng — <b>Gọi trời là "ông", trời "mặc áo", "ra trận"</b>. Trời được gọi là "ông" + có hành động "mặc áo", "ra trận" như người — đây là nhân hoá.',
        'Sai — <b>Liệt kê đồ vật</b> không đúng. Phải chọn <i>Gọi trời là "ông", trời "mặc áo", "ra trận"</i> vì trời được gọi là "ông" + có hành động "mặc áo", "ra trận" như người — đây là nhân hoá.',
        'Sai — <b>So sánh trời với áo</b> không đúng. Phải chọn <i>Gọi trời là "ông", trời "mặc áo", "ra trận"</i> vì trời được gọi là "ông" + có hành động "mặc áo", "ra trận" như người — đây là nhân hoá.',
        'Sai — <b>Điệp từ</b> không đúng. Phải chọn <i>Gọi trời là "ông", trời "mặc áo", "ra trận"</i> vì trời được gọi là "ông" + có hành động "mặc áo", "ra trận" như người — đây là nhân hoá.',
      ]
    ),
    Q('Có mấy kiểu nhân hoá phổ biến?',
      ['3 kiểu: dùng từ gọi người; dùng từ chỉ hoạt động/đặc điểm người; trò chuyện với vật', '2 kiểu', '1 kiểu', '5 kiểu'], 0,
      'Ba kiểu nhân hoá cơ bản theo SGK lớp 6.',
      [
        '<b>Ba kiểu nhân hoá</b> phổ biến:',
        '<ul><li><b>Kiểu 1</b>: Dùng từ <i>gọi người</i> để gọi vật — "ông trời", "chị mây", "bác kim đồng hồ".</li><li><b>Kiểu 2</b>: Dùng từ chỉ <i>hoạt động, đặc điểm</i> của người cho vật — "Cây tre vươn vai đứng dậy".</li><li><b>Kiểu 3</b>: <i>Trò chuyện, xưng hô</i> với vật như với người — "Trâu ơi ta bảo trâu này…".</li></ul>',
      ],
      [
        'Đúng — <b>3 kiểu: dùng từ gọi người; dùng từ chỉ hoạt động/đặc điểm người; trò chuyện với vật</b>. Ba kiểu nhân hoá cơ bản theo SGK lớp 6.',
        'Sai — <b>2 kiểu</b> không đúng. Phải chọn <i>3 kiểu: dùng từ gọi người; dùng từ chỉ hoạt động/đặc điểm người; trò chuyện với vật</i> vì ba kiểu nhân hoá cơ bản theo SGK lớp 6.',
        'Sai — <b>1 kiểu</b> không đúng. Phải chọn <i>3 kiểu: dùng từ gọi người; dùng từ chỉ hoạt động/đặc điểm người; trò chuyện với vật</i> vì ba kiểu nhân hoá cơ bản theo SGK lớp 6.',
        'Sai — <b>5 kiểu</b> không đúng. Phải chọn <i>3 kiểu: dùng từ gọi người; dùng từ chỉ hoạt động/đặc điểm người; trò chuyện với vật</i> vì ba kiểu nhân hoá cơ bản theo SGK lớp 6.',
      ]
    ),
    Q('"Lá vàng trước ngõ khẽ đưa vèo" — nhân hoá ở từ?',
      ['khẽ đưa vèo (hoạt động của người)', 'lá vàng', 'trước ngõ', 'vèo (từ tượng thanh)'], 0,
      '"Khẽ đưa" là hành động được nhân hoá cho lá — gán động từ chỉ hành động người cho vật.',
      [
        '<b>Phân tích nhân hoá</b>:',
        '<ul><li>"Lá vàng" — sự vật vô tri.</li><li><b>"Khẽ đưa"</b> — hành động <i>nhẹ nhàng, có ý thức</i> của con người được gán cho lá.</li></ul>',
        'Đây là <b>nhân hoá kiểu 2</b> (dùng từ chỉ hoạt động của người cho vật).',
        '<b>Tác dụng</b>: làm cảnh thu hiện lên <i>nhẹ nhàng, tinh tế</i> — như có một bàn tay vô hình đang đưa lá rụng.',
      ],
      [
        'Đúng — <b>khẽ đưa vèo (hoạt động của người)</b>. "Khẽ đưa" là hành động được nhân hoá cho lá — gán động từ chỉ hành động người cho vật.',
        'Sai — <b>lá vàng</b> không đúng. Phải chọn <i>khẽ đưa vèo (hoạt động của người)</i> vì "Khẽ đưa" là hành động được nhân hoá cho lá — gán động từ chỉ hành động người cho vật.',
        'Sai — <b>trước ngõ</b> không đúng. Phải chọn <i>khẽ đưa vèo (hoạt động của người)</i> vì "Khẽ đưa" là hành động được nhân hoá cho lá — gán động từ chỉ hành động người cho vật.',
        'Sai — <b>vèo (từ tượng thanh)</b> không đúng. Phải chọn <i>khẽ đưa vèo (hoạt động của người)</i> vì "Khẽ đưa" là hành động được nhân hoá cho lá — gán động từ chỉ hành động người cho vật.',
      ]
    ),
    Q('"Trâu ơi ta bảo trâu này" — kiểu nhân hoá nào?',
      ['Dùng từ chỉ hoạt động', 'So sánh', 'Liệt kê', 'Trò chuyện, xưng hô với vật như với người'], 3,
      'Gọi trâu bằng "ơi" và "trò chuyện" như với người — đây là nhân hoá kiểu 3.',
      [
        '<b>Câu ca dao</b> "Trâu ơi ta bảo trâu này" — người nông dân <i>trò chuyện với trâu như bạn</i>:',
        '<ul><li>Dùng từ <b>"ơi"</b> — xưng hô thân thiết.</li><li>"<b>Ta bảo trâu này</b>" — như đang nói với một người bạn.</li></ul>',
        'Đây là <b>nhân hoá kiểu 3</b> — trò chuyện, xưng hô với vật như với người.',
        '<b>Tác dụng</b>: gợi tình cảm <i>gắn bó, thân thiết</i> giữa người nông dân và con trâu — bạn đồng hành lao động.',
      ],
      [
        'Sai — <b>Dùng từ chỉ hoạt động</b> không đúng. Phải chọn <i>Trò chuyện, xưng hô với vật như với người</i> vì gọi trâu bằng "ơi" và "trò chuyện" như với người — đây là nhân hoá kiểu 3.',
        'Sai — <b>So sánh</b> không đúng. Phải chọn <i>Trò chuyện, xưng hô với vật như với người</i> vì gọi trâu bằng "ơi" và "trò chuyện" như với người — đây là nhân hoá kiểu 3.',
        'Sai — <b>Liệt kê</b> không đúng. Phải chọn <i>Trò chuyện, xưng hô với vật như với người</i> vì gọi trâu bằng "ơi" và "trò chuyện" như với người — đây là nhân hoá kiểu 3.',
        'Đúng — <b>Trò chuyện, xưng hô với vật như với người</b>. Gọi trâu bằng "ơi" và "trò chuyện" như với người — đây là nhân hoá kiểu 3.',
      ]
    ),
    Q('Tác dụng nhân hoá?',
      ['Đánh đố', 'Tăng số chữ', 'Làm sự vật trở nên gần gũi, có hồn', 'Làm câu khó hiểu'], 2,
      'Nhân hoá làm thế giới vật trở nên sống động, gần với con người.',
      [
        '<b>Tác dụng của nhân hoá</b>:',
        '<ul><li>Làm sự vật trở nên <b>gần gũi</b>, có hồn.</li><li>Bộc lộ <b>cảm xúc</b> của người viết một cách tinh tế.</li><li>Gợi <b>liên tưởng phong phú</b> cho người đọc.</li><li>Làm câu văn <i>sinh động</i>, có sức sống.</li></ul>',
        'Nhân hoá biến <i>thế giới vô tri</i> thành <i>thế giới có hồn</i> — đó là sức mạnh kỳ diệu của phép tu từ này.',
      ],
      [
        'Sai — <b>Đánh đố</b> không đúng. Phải chọn <i>Làm sự vật trở nên gần gũi, có hồn</i> vì nhân hoá làm thế giới vật trở nên sống động, gần với con người.',
        'Sai — <b>Tăng số chữ</b> không đúng. Phải chọn <i>Làm sự vật trở nên gần gũi, có hồn</i> vì nhân hoá làm thế giới vật trở nên sống động, gần với con người.',
        'Đúng — <b>Làm sự vật trở nên gần gũi, có hồn</b>. Nhân hoá làm thế giới vật trở nên sống động, gần với con người.',
        'Sai — <b>Làm câu khó hiểu</b> không đúng. Phải chọn <i>Làm sự vật trở nên gần gũi, có hồn</i> vì nhân hoá làm thế giới vật trở nên sống động, gần với con người.',
      ]
    ),
  ]),

  M(10, 'Biện pháp tu từ: Ẩn dụ và hoán dụ', [
    Q('Ẩn dụ là?',
      ['So sánh có từ "như"', 'Lặp từ', 'Đếm số lượng', 'Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng'], 3,
      'Ẩn dụ là "so sánh ngầm" — gọi tên A bằng B dựa trên nét tương đồng, đã lược vế A và từ so sánh.',
      [
        '<b>Ẩn dụ</b> là gọi tên sự vật, hiện tượng này bằng tên của sự vật, hiện tượng khác <i>có nét tương đồng</i> với nó.',
        'Có thể hình dung: ẩn dụ là <b>"so sánh ngầm"</b>:',
        '<ul><li>So sánh đầy đủ: A như B → "Bác như mặt trời".</li><li>Ẩn dụ: chỉ còn B → "Mặt trời trong lăng" (chỉ Bác).</li></ul>',
        'Ẩn dụ lược bỏ <b>vế A</b> và <b>từ so sánh</b>, chỉ giữ vế B.',
      ],
      [
        'Sai — <b>So sánh có từ "như"</b> không đúng. Phải chọn <i>Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng</i> vì ẩn dụ là "so sánh ngầm" — gọi tên A bằng B dựa trên nét tương đồng, đã lược vế A và từ so sánh.',
        'Sai — <b>Lặp từ</b> không đúng. Phải chọn <i>Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng</i> vì ẩn dụ là "so sánh ngầm" — gọi tên A bằng B dựa trên nét tương đồng, đã lược vế A và từ so sánh.',
        'Sai — <b>Đếm số lượng</b> không đúng. Phải chọn <i>Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng</i> vì ẩn dụ là "so sánh ngầm" — gọi tên A bằng B dựa trên nét tương đồng, đã lược vế A và từ so sánh.',
        'Đúng — <b>Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng</b>. Ẩn dụ là "so sánh ngầm" — gọi tên A bằng B dựa trên nét tương đồng, đã lược vế A và từ so sánh.',
      ]
    ),
    Q('"Thuyền về có nhớ bến chăng / Bến thì một dạ khăng khăng đợi thuyền" — ẩn dụ "thuyền – bến" chỉ?',
      ['Cảnh biển', 'Người con trai – người con gái (tình yêu xa)', 'Nghề đánh cá', 'Phương tiện đi lại'], 1,
      'Ẩn dụ chỉ tình yêu đôi lứa: thuyền (chàng — di động, đi xa) và bến (nàng — ở nguyên, chờ đợi).',
      [
        '<b>Phân tích ẩn dụ "thuyền – bến"</b> trong ca dao:',
        '<ul><li><b>Thuyền</b> — di động, đi xa → ẩn dụ <i>chàng trai</i>.</li><li><b>Bến</b> — ở nguyên một chỗ, chờ đợi → ẩn dụ <i>cô gái</i>.</li></ul>',
        '<b>Cơ sở tương đồng</b>: thuyền/chàng trai di động; bến/cô gái cố định, chờ đợi.',
        'Đây là cách nói <i>kín đáo, ý nhị</i> về tình yêu xa cách — đặc trưng của ca dao Việt Nam.',
      ],
      [
        'Sai — <b>Cảnh biển</b> không đúng. Phải chọn <i>Người con trai – người con gái (tình yêu xa)</i> vì ẩn dụ chỉ tình yêu đôi lứa: thuyền (chàng — di động, đi xa) và bến (nàng — ở nguyên, chờ đợi).',
        'Đúng — <b>Người con trai – người con gái (tình yêu xa)</b>. Ẩn dụ chỉ tình yêu đôi lứa: thuyền (chàng — di động, đi xa) và bến (nàng — ở nguyên, chờ đợi).',
        'Sai — <b>Nghề đánh cá</b> không đúng. Phải chọn <i>Người con trai – người con gái (tình yêu xa)</i> vì ẩn dụ chỉ tình yêu đôi lứa: thuyền (chàng — di động, đi xa) và bến (nàng — ở nguyên, chờ đợi).',
        'Sai — <b>Phương tiện đi lại</b> không đúng. Phải chọn <i>Người con trai – người con gái (tình yêu xa)</i> vì ẩn dụ chỉ tình yêu đôi lứa: thuyền (chàng — di động, đi xa) và bến (nàng — ở nguyên, chờ đợi).',
      ]
    ),
    Q('Hoán dụ là?',
      ['Gọi tên sự vật này bằng tên sự vật khác có quan hệ gần gũi (bộ phận – toàn thể, dấu hiệu – đối tượng…)', 'Liệt kê', 'Lặp lại', 'So sánh xa nhau'], 0,
      'Hoán dụ dựa vào quan hệ gần gũi (không phải tương đồng) — bộ phận/toàn thể, dấu hiệu/đối tượng…',
      [
        '<b>Hoán dụ</b> là gọi tên sự vật này bằng tên sự vật khác có <i>quan hệ gần gũi</i> với nó (không phải tương đồng).',
        'Các <b>kiểu hoán dụ</b>:',
        '<ul><li>Lấy <b>bộ phận</b> chỉ <b>toàn thể</b>: "bàn tay ta làm nên tất cả".</li><li>Lấy <b>dấu hiệu</b> chỉ <b>đối tượng</b>: "áo nâu" – nông dân.</li><li>Lấy <b>vật chứa</b> chỉ <b>vật được chứa</b>: "cả làng đứng dậy".</li><li>Lấy <b>cụ thể</b> chỉ <b>trừu tượng</b>: "một nắng hai sương" – vất vả.</li></ul>',
      ],
      [
        'Đúng — <b>Gọi tên sự vật này bằng tên sự vật khác có quan hệ gần gũi (bộ phận – toàn thể, dấu hiệu – đối tượng…)</b>. Hoán dụ dựa vào quan hệ gần gũi (không phải tương đồng) — bộ phận/toàn thể, dấu hiệu/đối tượng….',
        'Sai — <b>Liệt kê</b> không đúng. Phải chọn <i>Gọi tên sự vật này bằng tên sự vật khác có quan hệ gần gũi (bộ phận – toàn thể, dấu hiệu – đối tượng…)</i> vì hoán dụ dựa vào quan hệ gần gũi (không phải tương đồng) — bộ phận/toàn thể, dấu hiệu/đối…',
        'Sai — <b>Lặp lại</b> không đúng. Phải chọn <i>Gọi tên sự vật này bằng tên sự vật khác có quan hệ gần gũi (bộ phận – toàn thể, dấu hiệu – đối tượng…)</i> vì hoán dụ dựa vào quan hệ gần gũi (không phải tương đồng) — bộ phận/toàn thể, dấu hiệu/đối…',
        'Sai — <b>So sánh xa nhau</b> không đúng. Phải chọn <i>Gọi tên sự vật này bằng tên sự vật khác có quan hệ gần gũi (bộ phận – toàn thể, dấu hiệu – đối tượng…)</i> vì hoán dụ dựa vào quan hệ gần gũi (không phải tương đồng) — bộ phận/toàn thể, dấu…',
      ]
    ),
    Q('"Áo nâu cùng với áo xanh / Nông thôn cùng với thị thành đứng lên" — "áo nâu", "áo xanh" hoán dụ chỉ?',
      ['Hai màu sắc', 'Hai cửa hàng', 'Hai loại áo', 'Nông dân và công nhân'], 3,
      'Lấy dấu hiệu trang phục để chỉ tầng lớp người: áo nâu – nông dân, áo xanh – công nhân.',
      [
        '<b>Phân tích hoán dụ</b>:',
        '<ul><li><b>"Áo nâu"</b> — trang phục lao động truyền thống của <i>nông dân</i>.</li><li><b>"Áo xanh"</b> — trang phục công nhân (áo xanh công nhân).</li></ul>',
        '<b>Kiểu hoán dụ</b>: lấy <i>dấu hiệu</i> (trang phục) để chỉ <i>đối tượng</i> (tầng lớp người).',
        '<b>Tác dụng</b>: gợi hình ảnh đoàn kết toàn dân — nông dân và công nhân cùng đứng lên.',
      ],
      [
        'Sai — <b>Hai màu sắc</b> không đúng. Phải chọn <i>Nông dân và công nhân</i> vì lấy dấu hiệu trang phục để chỉ tầng lớp người: áo nâu – nông dân, áo xanh – công nhân.',
        'Sai — <b>Hai cửa hàng</b> không đúng. Phải chọn <i>Nông dân và công nhân</i> vì lấy dấu hiệu trang phục để chỉ tầng lớp người: áo nâu – nông dân, áo xanh – công nhân.',
        'Sai — <b>Hai loại áo</b> không đúng. Phải chọn <i>Nông dân và công nhân</i> vì lấy dấu hiệu trang phục để chỉ tầng lớp người: áo nâu – nông dân, áo xanh – công nhân.',
        'Đúng — <b>Nông dân và công nhân</b>. Lấy dấu hiệu trang phục để chỉ tầng lớp người: áo nâu – nông dân, áo xanh – công nhân.',
      ]
    ),
    Q('Điểm khác cơ bản giữa ẩn dụ và hoán dụ?',
      ['Không khác gì', 'Hoán dụ chỉ dùng cho người', 'Ẩn dụ dài hơn', 'Ẩn dụ dựa vào tương đồng, hoán dụ dựa vào quan hệ gần gũi'], 3,
      'Bản chất: ẩn dụ dựa vào TƯƠNG ĐỒNG; hoán dụ dựa vào quan hệ GẦN GŨI (liền kề, bộ phận – toàn thể).',
      [
        '<b>Phân biệt ẩn dụ và hoán dụ</b>:',
        '<ul><li><b>Ẩn dụ</b>: dựa trên <i>tương đồng</i> (giống nhau ở một nét).</li><li><b>Hoán dụ</b>: dựa trên <i>quan hệ gần gũi</i> (liền kề, bộ phận – toàn thể).</li></ul>',
        '<b>Mẹo phân biệt</b>:',
        '<ul><li>Nếu có thể thêm "<code>như</code>" vào giữa để thành so sánh → <b>ẩn dụ</b>.</li><li>Nếu hai vật có quan hệ "đứng cạnh nhau", "thuộc về nhau" → <b>hoán dụ</b>.</li></ul>',
      ],
      [
        'Sai — <b>Không khác gì</b> không đúng. Phải chọn <i>Ẩn dụ dựa vào tương đồng, hoán dụ dựa vào quan hệ gần gũi</i> vì bản chất: ẩn dụ dựa vào TƯƠNG ĐỒNG; hoán dụ dựa vào quan hệ GẦN GŨI (liền kề, bộ phận – toàn thể).',
        'Sai — <b>Hoán dụ chỉ dùng cho người</b> không đúng. Phải chọn <i>Ẩn dụ dựa vào tương đồng, hoán dụ dựa vào quan hệ gần gũi</i> vì bản chất: ẩn dụ dựa vào TƯƠNG ĐỒNG; hoán dụ dựa vào quan hệ GẦN GŨI (liền kề, bộ phận – toàn thể).',
        'Sai — <b>Ẩn dụ dài hơn</b> không đúng. Phải chọn <i>Ẩn dụ dựa vào tương đồng, hoán dụ dựa vào quan hệ gần gũi</i> vì bản chất: ẩn dụ dựa vào TƯƠNG ĐỒNG; hoán dụ dựa vào quan hệ GẦN GŨI (liền kề, bộ phận – toàn thể).',
        'Đúng — <b>Ẩn dụ dựa vào tương đồng, hoán dụ dựa vào quan hệ gần gũi</b>. Bản chất: ẩn dụ dựa vào TƯƠNG ĐỒNG; hoán dụ dựa vào quan hệ GẦN GŨI (liền kề, bộ phận – toàn thể).',
      ]
    ),
    Q('"Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao" — "cây" ẩn dụ chỉ?',
      ['Con người, cá nhân', 'Khu rừng', 'Cây cối thật', 'Núi đá'], 0,
      '"Cây" ẩn dụ chỉ con người, cá nhân — bài học về sức mạnh đoàn kết.',
      [
        '<b>Phân tích ẩn dụ</b>:',
        '<ul><li><b>"Một cây"</b> — ẩn dụ chỉ <i>một cá nhân đơn lẻ</i>.</li><li><b>"Ba cây chụm lại"</b> — ẩn dụ chỉ <i>nhiều người đoàn kết</i>.</li></ul>',
        '<b>Cơ sở tương đồng</b>: cây đơn lẻ yếu, cây chụm lại mạnh → cá nhân yếu, đoàn kết thì mạnh.',
        '<b>Bài học</b>: <i>sức mạnh đoàn kết</i> — một câu ca dao bất hủ về tinh thần cộng đồng.',
      ],
      [
        'Đúng — <b>Con người, cá nhân</b>. "Cây" ẩn dụ chỉ con người, cá nhân — bài học về sức mạnh đoàn kết.',
        'Sai — <b>Khu rừng</b> không đúng. Phải chọn <i>Con người, cá nhân</i> vì "Cây" ẩn dụ chỉ con người, cá nhân — bài học về sức mạnh đoàn kết.',
        'Sai — <b>Cây cối thật</b> không đúng. Phải chọn <i>Con người, cá nhân</i> vì "Cây" ẩn dụ chỉ con người, cá nhân — bài học về sức mạnh đoàn kết.',
        'Sai — <b>Núi đá</b> không đúng. Phải chọn <i>Con người, cá nhân</i> vì "Cây" ẩn dụ chỉ con người, cá nhân — bài học về sức mạnh đoàn kết.',
      ]
    ),
  ]),

  M(11, 'Từ đơn, từ phức, từ ghép, từ láy (1)', [
    Q('Từ đơn là?',
      ['Từ chỉ có một âm', 'Từ chỉ dùng một lần', 'Từ chỉ có một tiếng', 'Từ có nhiều tiếng'], 2,
      'Từ đơn = từ chỉ có 1 tiếng có nghĩa: nhà, đi, học, mẹ, sông…',
      [
        '<b>Phân loại từ theo cấu tạo</b>:',
        '<ul><li><b>Từ đơn</b>: từ chỉ có <i>một tiếng</i> — nhà, đi, học, mẹ, sông.</li><li><b>Từ phức</b>: từ có từ <i>hai tiếng trở lên</i> — gồm từ ghép và từ láy.</li></ul>',
        'Mỗi <b>tiếng</b> trong tiếng Việt là một âm tiết (viết tách rời bằng dấu cách).',
      ],
      [
        'Sai — <b>Từ chỉ có một âm</b> không đúng. Phải chọn <i>Từ chỉ có một tiếng</i> vì từ đơn = từ chỉ có 1 tiếng có nghĩa: nhà, đi, học, mẹ, sông….',
        'Sai — <b>Từ chỉ dùng một lần</b> không đúng. Phải chọn <i>Từ chỉ có một tiếng</i> vì từ đơn = từ chỉ có 1 tiếng có nghĩa: nhà, đi, học, mẹ, sông….',
        'Đúng — <b>Từ chỉ có một tiếng</b>. Từ đơn = từ chỉ có 1 tiếng có nghĩa: nhà, đi, học, mẹ, sông….',
        'Sai — <b>Từ có nhiều tiếng</b> không đúng. Phải chọn <i>Từ chỉ có một tiếng</i> vì từ đơn = từ chỉ có 1 tiếng có nghĩa: nhà, đi, học, mẹ, sông….',
      ]
    ),
    Q('Từ phức gồm?',
      ['Câu ghép', 'Chỉ từ láy', 'Chỉ từ ghép', 'Từ ghép và từ láy'], 3,
      'Từ phức = từ có ≥ 2 tiếng, gồm 2 loại lớn: từ ghép + từ láy.',
      [
        '<b>Từ phức</b> = từ có ≥ 2 tiếng. Có hai loại:',
        '<ul><li><b>Từ ghép</b>: các tiếng có <i>quan hệ về nghĩa</i> — nhà cửa, bàn ghế, học sinh.</li><li><b>Từ láy</b>: các tiếng có <i>quan hệ láy âm</i> — lung linh, rì rào, lác đác.</li></ul>',
        'Cách phân biệt cơ bản: nếu cả hai tiếng đều có nghĩa rõ ràng → <b>từ ghép</b>; nếu chỉ một tiếng có nghĩa, tiếng kia "láy theo" → <b>từ láy</b>.',
      ],
      [
        'Sai — <b>Câu ghép</b> không đúng. Phải chọn <i>Từ ghép và từ láy</i> vì từ phức = từ có ≥ 2 tiếng, gồm 2 loại lớn: từ ghép + từ láy.',
        'Sai — <b>Chỉ từ láy</b> không đúng. Phải chọn <i>Từ ghép và từ láy</i> vì từ phức = từ có ≥ 2 tiếng, gồm 2 loại lớn: từ ghép + từ láy.',
        'Sai — <b>Chỉ từ ghép</b> không đúng. Phải chọn <i>Từ ghép và từ láy</i> vì từ phức = từ có ≥ 2 tiếng, gồm 2 loại lớn: từ ghép + từ láy.',
        'Đúng — <b>Từ ghép và từ láy</b>. Từ phức = từ có ≥ 2 tiếng, gồm 2 loại lớn: từ ghép + từ láy.',
      ]
    ),
    Q('Từ nào là từ đơn?',
      ['nhà cửa', 'nhà', 'lung linh', 'sạch sẽ'], 1,
      '"Nhà" — chỉ 1 tiếng — là từ đơn. Các từ còn lại đều có 2 tiếng.',
      [
        '<b>Soi từng đáp án</b>:',
        '<ul><li>✅ "<b>nhà</b>" — 1 tiếng → <i>từ đơn</i>.</li><li>❌ "nhà cửa" — 2 tiếng, cả hai có nghĩa → <i>từ ghép</i>.</li><li>❌ "lung linh" — 2 tiếng, láy âm "l" → <i>từ láy</i>.</li><li>❌ "sạch sẽ" — 2 tiếng, láy âm "s" → <i>từ láy</i>.</li></ul>',
        '<b>Mẹo</b>: đếm số tiếng — 1 tiếng là từ đơn, ≥ 2 tiếng là từ phức.',
      ],
      [
        'Sai — <b>nhà cửa</b> không đúng. Phải chọn <i>nhà</i> vì "Nhà" — chỉ 1 tiếng — là từ đơn. Các từ còn lại đều có 2 tiếng.',
        'Đúng — <b>nhà</b>. "Nhà" — chỉ 1 tiếng — là từ đơn. Các từ còn lại đều có 2 tiếng.',
        'Sai — <b>lung linh</b> không đúng. Phải chọn <i>nhà</i> vì "Nhà" — chỉ 1 tiếng — là từ đơn. Các từ còn lại đều có 2 tiếng.',
        'Sai — <b>sạch sẽ</b> không đúng. Phải chọn <i>nhà</i> vì "Nhà" — chỉ 1 tiếng — là từ đơn. Các từ còn lại đều có 2 tiếng.',
      ]
    ),
    Q('Từ ghép là?',
      ['Từ chỉ một âm tiết', 'Từ có tiếng lặp âm', 'Từ gồm các tiếng có nghĩa kết hợp lại', 'Từ vô nghĩa'], 2,
      'Từ ghép là từ phức trong đó các tiếng đều có nghĩa, kết hợp tạo nghĩa mới.',
      [
        '<b>Từ ghép</b> là từ phức được tạo bởi 2 hay nhiều tiếng <i>có quan hệ về nghĩa</i> — tức các tiếng đó đều mang nghĩa.',
        '<b>Hai loại từ ghép</b>:',
        '<ul><li><b>Từ ghép đẳng lập</b> (song song): các tiếng bình đẳng — "quần áo", "sách vở".</li><li><b>Từ ghép chính phụ</b>: có tiếng chính + tiếng phụ bổ nghĩa — "xe đạp", "hoa hồng".</li></ul>',
        'Cách kiểm tra: thử <b>tách từng tiếng</b>, nếu cả hai đều có nghĩa độc lập → từ ghép.',
      ],
      [
        'Sai — <b>Từ chỉ một âm tiết</b> không đúng. Phải chọn <i>Từ gồm các tiếng có nghĩa kết hợp lại</i> vì từ ghép là từ phức trong đó các tiếng đều có nghĩa, kết hợp tạo nghĩa mới.',
        'Sai — <b>Từ có tiếng lặp âm</b> không đúng. Phải chọn <i>Từ gồm các tiếng có nghĩa kết hợp lại</i> vì từ ghép là từ phức trong đó các tiếng đều có nghĩa, kết hợp tạo nghĩa mới.',
        'Đúng — <b>Từ gồm các tiếng có nghĩa kết hợp lại</b>. Từ ghép là từ phức trong đó các tiếng đều có nghĩa, kết hợp tạo nghĩa mới.',
        'Sai — <b>Từ vô nghĩa</b> không đúng. Phải chọn <i>Từ gồm các tiếng có nghĩa kết hợp lại</i> vì từ ghép là từ phức trong đó các tiếng đều có nghĩa, kết hợp tạo nghĩa mới.',
      ]
    ),
    Q('Từ nào là từ ghép?',
      ['rì rào', 'lung linh', 'quần áo', 'lấp lánh'], 2,
      '"Quần" và "áo" đều có nghĩa độc lập → quần áo là từ ghép đẳng lập.',
      [
        '<b>Soi từng đáp án</b>:',
        '<ul><li>❌ "rì rào" — láy âm "r", chỉ "rào" có nghĩa → <i>từ láy</i>.</li><li>❌ "lung linh" — láy âm "l" → <i>từ láy</i>.</li><li>✅ "<b>quần áo</b>" — cả "quần" và "áo" đều có nghĩa → <i>từ ghép đẳng lập</i>.</li><li>❌ "lấp lánh" — láy âm "l" → <i>từ láy</i>.</li></ul>',
        '<b>Quy tắc vàng</b>: cả 2 tiếng đều có nghĩa → <i>từ ghép</i>; chỉ 1 tiếng có nghĩa, tiếng kia láy theo → <i>từ láy</i>.',
      ],
      [
        'Sai — <b>rì rào</b> không đúng. Phải chọn <i>quần áo</i> vì "Quần" và "áo" đều có nghĩa độc lập → quần áo là từ ghép đẳng lập.',
        'Sai — <b>lung linh</b> không đúng. Phải chọn <i>quần áo</i> vì "Quần" và "áo" đều có nghĩa độc lập → quần áo là từ ghép đẳng lập.',
        'Đúng — <b>quần áo</b>. "Quần" và "áo" đều có nghĩa độc lập → quần áo là từ ghép đẳng lập.',
        'Sai — <b>lấp lánh</b> không đúng. Phải chọn <i>quần áo</i> vì "Quần" và "áo" đều có nghĩa độc lập → quần áo là từ ghép đẳng lập.',
      ]
    ),
    Q('Tách "bàn ghế" thì?',
      ['Là từ láy', 'Không tách được', 'Là từ đơn', '"Bàn" và "ghế" đều có nghĩa → từ ghép'], 3,
      'Cả "bàn" và "ghế" đều có nghĩa độc lập → bàn ghế là từ ghép đẳng lập.',
      [
        '<b>Tách thử các tiếng</b>:',
        '<ul><li><b>"Bàn"</b> có nghĩa: đồ dùng có mặt phẳng để viết, ăn…</li><li><b>"Ghế"</b> có nghĩa: đồ dùng để ngồi.</li></ul>',
        '→ Hai tiếng đều có nghĩa, ghép lại chỉ chung <i>đồ nội thất</i> → đây là <b>từ ghép đẳng lập</b>.',
        'Tương tự: "sách vở", "nhà cửa", "ăn uống", "đi đứng" đều là từ ghép đẳng lập.',
      ],
      [
        'Sai — <b>Là từ láy</b> không đúng. Phải chọn <i>"Bàn" và "ghế" đều có nghĩa → từ ghép</i> vì cả "bàn" và "ghế" đều có nghĩa độc lập → bàn ghế là từ ghép đẳng lập.',
        'Sai — <b>Không tách được</b> không đúng. Phải chọn <i>"Bàn" và "ghế" đều có nghĩa → từ ghép</i> vì cả "bàn" và "ghế" đều có nghĩa độc lập → bàn ghế là từ ghép đẳng lập.',
        'Sai — <b>Là từ đơn</b> không đúng. Phải chọn <i>"Bàn" và "ghế" đều có nghĩa → từ ghép</i> vì cả "bàn" và "ghế" đều có nghĩa độc lập → bàn ghế là từ ghép đẳng lập.',
        'Đúng — <b>"Bàn" và "ghế" đều có nghĩa → từ ghép</b>. Cả "bàn" và "ghế" đều có nghĩa độc lập → bàn ghế là từ ghép đẳng lập.',
      ]
    ),
  ]),

  M(12, 'Từ đơn, từ phức, từ ghép, từ láy (2)', [
    Q('Từ láy là?',
      ['Từ phức có quan hệ láy âm giữa các tiếng', 'Từ đơn lặp lại', 'Từ Hán Việt', 'Từ ghép nghĩa'], 0,
      'Từ láy là từ phức trong đó các tiếng có quan hệ láy âm — lặp âm đầu, vần, hoặc cả tiếng.',
      [
        '<b>Từ láy</b> là từ phức trong đó các tiếng có <i>quan hệ láy âm</i> — lặp lại:',
        '<ul><li><b>Âm đầu</b>: lung linh (cùng "l"), rì rào (cùng "r").</li><li><b>Vần</b>: lác đác (cùng "ác"), bâng khuâng.</li><li><b>Cả tiếng</b>: xanh xanh, đỏ đỏ.</li></ul>',
        'Khác từ ghép — các tiếng trong từ láy thường <i>chỉ có một tiếng mang nghĩa rõ</i>, tiếng còn lại "láy" theo tạo nhạc tính.',
      ],
      [
        'Đúng — <b>Từ phức có quan hệ láy âm giữa các tiếng</b>. Từ láy là từ phức trong đó các tiếng có quan hệ láy âm — lặp âm đầu, vần, hoặc cả tiếng.',
        'Sai — <b>Từ đơn lặp lại</b> không đúng. Phải chọn <i>Từ phức có quan hệ láy âm giữa các tiếng</i> vì từ láy là từ phức trong đó các tiếng có quan hệ láy âm — lặp âm đầu, vần, hoặc cả tiếng.',
        'Sai — <b>Từ Hán Việt</b> không đúng. Phải chọn <i>Từ phức có quan hệ láy âm giữa các tiếng</i> vì từ láy là từ phức trong đó các tiếng có quan hệ láy âm — lặp âm đầu, vần, hoặc cả tiếng.',
        'Sai — <b>Từ ghép nghĩa</b> không đúng. Phải chọn <i>Từ phức có quan hệ láy âm giữa các tiếng</i> vì từ láy là từ phức trong đó các tiếng có quan hệ láy âm — lặp âm đầu, vần, hoặc cả tiếng.',
      ]
    ),
    Q('Từ nào là từ láy?',
      ['bàn ghế', 'nhà cửa', 'lung linh', 'sách vở'], 2,
      '"Lung linh" láy âm "l" + vần "ung/inh" — từ láy bộ phận âm đầu.',
      [
        '<b>Soi từng đáp án</b>:',
        '<ul><li>❌ "bàn ghế" — cả 2 có nghĩa → <i>từ ghép</i>.</li><li>❌ "nhà cửa" — cả 2 có nghĩa → <i>từ ghép</i>.</li><li>✅ "<b>lung linh</b>" — láy âm "l", chỉ tạo nhạc → <i>từ láy</i>.</li><li>❌ "sách vở" — cả 2 có nghĩa → <i>từ ghép</i>.</li></ul>',
        '<b>Tác dụng từ láy</b>: gợi hình, gợi cảm rất mạnh — "lung linh" gợi ánh sáng dao động.',
      ],
      [
        'Sai — <b>bàn ghế</b> không đúng. Phải chọn <i>lung linh</i> vì "Lung linh" láy âm "l" + vần "ung/inh" — từ láy bộ phận âm đầu.',
        'Sai — <b>nhà cửa</b> không đúng. Phải chọn <i>lung linh</i> vì "Lung linh" láy âm "l" + vần "ung/inh" — từ láy bộ phận âm đầu.',
        'Đúng — <b>lung linh</b>. "Lung linh" láy âm "l" + vần "ung/inh" — từ láy bộ phận âm đầu.',
        'Sai — <b>sách vở</b> không đúng. Phải chọn <i>lung linh</i> vì "Lung linh" láy âm "l" + vần "ung/inh" — từ láy bộ phận âm đầu.',
      ]
    ),
    Q('Phân loại từ láy theo cấu tạo gồm?',
      ['Láy toàn bộ và láy bộ phận', 'Láy chính và phụ', 'Láy đơn và kép', 'Láy âm và láy nghĩa'], 0,
      'Hai loại: láy toàn bộ (xanh xanh) và láy bộ phận (lung linh, lác đác).',
      [
        '<b>Hai loại từ láy</b>:',
        '<ul><li><b>Láy toàn bộ</b>: lặp lại cả tiếng — "xanh xanh", "đỏ đỏ", "ầm ầm". Có khi biến thanh nhẹ: "đo đỏ", "tim tím".</li><li><b>Láy bộ phận</b>: chỉ lặp một phần của tiếng — có hai dạng nhỏ.</li></ul>',
        '<b>Hai dạng láy bộ phận</b>:',
        '<ul><li><b>Láy âm</b> (láy phụ âm đầu): "rì rào", "lung linh".</li><li><b>Láy vần</b>: "lác đác", "lao xao", "bâng khuâng".</li></ul>',
      ],
      [
        'Đúng — <b>Láy toàn bộ và láy bộ phận</b>. Hai loại: láy toàn bộ (xanh xanh) và láy bộ phận (lung linh, lác đác).',
        'Sai — <b>Láy chính và phụ</b> không đúng. Phải chọn <i>Láy toàn bộ và láy bộ phận</i> vì hai loại: láy toàn bộ (xanh xanh) và láy bộ phận (lung linh, lác đác).',
        'Sai — <b>Láy đơn và kép</b> không đúng. Phải chọn <i>Láy toàn bộ và láy bộ phận</i> vì hai loại: láy toàn bộ (xanh xanh) và láy bộ phận (lung linh, lác đác).',
        'Sai — <b>Láy âm và láy nghĩa</b> không đúng. Phải chọn <i>Láy toàn bộ và láy bộ phận</i> vì hai loại: láy toàn bộ (xanh xanh) và láy bộ phận (lung linh, lác đác).',
      ]
    ),
    Q('"Xanh xanh" là từ láy?',
      ['Láy bộ phận âm đầu', 'Không phải từ láy', 'Láy toàn bộ', 'Láy bộ phận vần'], 2,
      'Lặp lại nguyên tiếng "xanh" → láy toàn bộ.',
      [
        '<b>"Xanh xanh"</b> — lặp lại <i>nguyên tiếng "xanh"</i> → đây là <b>láy toàn bộ</b>.',
        '<b>Đặc điểm láy toàn bộ</b>:',
        '<ul><li>Lặp <b>cả tiếng</b>: xanh xanh, đỏ đỏ, ầm ầm.</li><li>Có thể <b>biến thanh nhẹ</b>: đo đỏ (giảm cường độ), tim tím.</li><li>Có thể <b>biến phụ âm cuối</b>: chiu chít, ngoan ngoãn.</li></ul>',
        '<b>Tác dụng</b>: gợi sự lặp đi lặp lại, kéo dài (xanh xanh = một màu xanh trải dài).',
      ],
      [
        'Sai — <b>Láy bộ phận âm đầu</b> không đúng. Phải chọn <i>Láy toàn bộ</i> vì lặp lại nguyên tiếng "xanh" → láy toàn bộ.',
        'Sai — <b>Không phải từ láy</b> không đúng. Phải chọn <i>Láy toàn bộ</i> vì lặp lại nguyên tiếng "xanh" → láy toàn bộ.',
        'Đúng — <b>Láy toàn bộ</b>. Lặp lại nguyên tiếng "xanh" → láy toàn bộ. Đây là phương án chính xác theo nội dung bài học.',
        'Sai — <b>Láy bộ phận vần</b> không đúng. Phải chọn <i>Láy toàn bộ</i> vì lặp lại nguyên tiếng "xanh" → láy toàn bộ.',
      ]
    ),
    Q('"Rì rào" láy bộ phận nào?',
      ['Không láy', 'Láy toàn bộ', 'Láy âm đầu "r"', 'Láy vần'], 2,
      'Cùng phụ âm đầu "r" (rì – rào) → láy âm (láy bộ phận âm đầu).',
      [
        '<b>Phân tích "rì rào"</b>:',
        '<ul><li>Tiếng 1: <b>r</b>ì → phụ âm đầu "r".</li><li>Tiếng 2: <b>r</b>ào → phụ âm đầu "r".</li><li>Vần khác nhau ("ì" và "ào").</li></ul>',
        '→ Cùng phụ âm đầu "r", khác vần → <b>láy âm</b> (láy bộ phận âm đầu).',
        '<b>Tác dụng</b>: gợi tiếng sóng nhẹ, tiếng lá xào xạc — âm thanh êm dịu, kéo dài.',
      ],
      [
        'Sai — <b>Không láy</b> không đúng. Phải chọn <i>Láy âm đầu "r"</i> vì cùng phụ âm đầu "r" (rì – rào) → láy âm (láy bộ phận âm đầu).',
        'Sai — <b>Láy toàn bộ</b> không đúng. Phải chọn <i>Láy âm đầu "r"</i> vì cùng phụ âm đầu "r" (rì – rào) → láy âm (láy bộ phận âm đầu).',
        'Đúng — <b>Láy âm đầu "r"</b>. Cùng phụ âm đầu "r" (rì – rào) → láy âm (láy bộ phận âm đầu).',
        'Sai — <b>Láy vần</b> không đúng. Phải chọn <i>Láy âm đầu "r"</i> vì cùng phụ âm đầu "r" (rì – rào) → láy âm (láy bộ phận âm đầu).',
      ]
    ),
    Q('"Lác đác" láy bộ phận nào?',
      ['Láy toàn bộ', 'Láy vần "ác"', 'Từ ghép', 'Láy âm đầu'], 1,
      'Cùng vần "ác" (lác – đác), khác phụ âm đầu → láy vần.',
      [
        '<b>Phân tích "lác đác"</b>:',
        '<ul><li>Tiếng 1: l<b>ác</b> → vần "ác".</li><li>Tiếng 2: đ<b>ác</b> → vần "ác".</li><li>Phụ âm đầu khác nhau ("l" và "đ").</li></ul>',
        '→ Cùng vần "ác", khác phụ âm đầu → <b>láy vần</b>.',
        '<b>Tác dụng</b>: gợi sự <i>thưa thớt, rải rác</i> — "mưa lác đác", "nhà cửa lác đác".',
      ],
      [
        'Sai — <b>Láy toàn bộ</b> không đúng. Phải chọn <i>Láy vần "ác"</i> vì cùng vần "ác" (lác – đác), khác phụ âm đầu → láy vần.',
        'Đúng — <b>Láy vần "ác"</b>. Cùng vần "ác" (lác – đác), khác phụ âm đầu → láy vần.',
        'Sai — <b>Từ ghép</b> không đúng. Phải chọn <i>Láy vần "ác"</i> vì cùng vần "ác" (lác – đác), khác phụ âm đầu → láy vần.',
        'Sai — <b>Láy âm đầu</b> không đúng. Phải chọn <i>Láy vần "ác"</i> vì cùng vần "ác" (lác – đác), khác phụ âm đầu → láy vần.',
      ]
    ),
  ]),

  M(13, 'Nghĩa của từ — từ nhiều nghĩa', [
    Q('Nghĩa gốc của từ là?',
      ['Nghĩa dùng nhiều nhất', 'Nghĩa mới phát sinh', 'Nghĩa hài hước', 'Nghĩa xuất hiện đầu tiên, làm cơ sở cho các nghĩa khác'], 3,
      'Nghĩa gốc = nghĩa ban đầu; các nghĩa chuyển sinh ra trên cơ sở nghĩa gốc.',
      [
        '<b>Nghĩa gốc</b>: nghĩa <i>xuất hiện đầu tiên</i>, làm cơ sở cho các nghĩa khác.',
        '<b>Nghĩa chuyển</b>: nghĩa hình thành <i>trên cơ sở nghĩa gốc</i>, dựa trên mối liên hệ tương đồng hoặc gần gũi.',
        'Ví dụ từ "<b>chân</b>":',
        '<ul><li><b>Nghĩa gốc</b>: bộ phận cơ thể người/vật để đi đứng — "chân người", "chân mèo".</li><li><b>Nghĩa chuyển</b>: bộ phận dưới cùng nâng đỡ — "chân bàn", "chân núi", "chân trời".</li></ul>',
      ],
      [
        'Sai — <b>Nghĩa dùng nhiều nhất</b> không đúng. Phải chọn <i>Nghĩa xuất hiện đầu tiên, làm cơ sở cho các nghĩa khác</i> vì nghĩa gốc = nghĩa ban đầu; các nghĩa chuyển sinh ra trên cơ sở nghĩa gốc.',
        'Sai — <b>Nghĩa mới phát sinh</b> không đúng. Phải chọn <i>Nghĩa xuất hiện đầu tiên, làm cơ sở cho các nghĩa khác</i> vì nghĩa gốc = nghĩa ban đầu; các nghĩa chuyển sinh ra trên cơ sở nghĩa gốc.',
        'Sai — <b>Nghĩa hài hước</b> không đúng. Phải chọn <i>Nghĩa xuất hiện đầu tiên, làm cơ sở cho các nghĩa khác</i> vì nghĩa gốc = nghĩa ban đầu; các nghĩa chuyển sinh ra trên cơ sở nghĩa gốc.',
        'Đúng — <b>Nghĩa xuất hiện đầu tiên, làm cơ sở cho các nghĩa khác</b>. Nghĩa gốc = nghĩa ban đầu; các nghĩa chuyển sinh ra trên cơ sở nghĩa gốc.',
      ]
    ),
    Q('"Chân" trong "chân người" và "chân bàn" — quan hệ là?',
      ['Từ đồng nghĩa', 'Từ trái nghĩa', 'Từ nhiều nghĩa (cùng một từ, nghĩa chuyển)', 'Từ đồng âm'], 2,
      '"Chân bàn" là nghĩa chuyển của "chân" — đều là "bộ phận dưới cùng nâng đỡ" → từ nhiều nghĩa.',
      [
        '<b>Phân tích quan hệ</b>:',
        '<ul><li>"<b>Chân người</b>" — nghĩa gốc: cơ quan đi đứng.</li><li>"<b>Chân bàn</b>" — nghĩa chuyển: bộ phận dưới cùng nâng đỡ bàn.</li></ul>',
        '<b>Cơ sở liên hệ</b>: cả hai đều là "<i>bộ phận dưới cùng nâng đỡ</i>" — đây là liên hệ <b>tương đồng</b>.',
        'Vì có liên hệ với nghĩa gốc → đây là <b>từ nhiều nghĩa</b>, không phải từ đồng âm.',
      ],
      [
        'Sai — <b>Từ đồng nghĩa</b> không đúng. Phải chọn <i>Từ nhiều nghĩa (cùng một từ, nghĩa chuyển)</i> vì "Chân bàn" là nghĩa chuyển của "chân" — đều là "bộ phận dưới cùng nâng đỡ" → từ nhiều nghĩa.',
        'Sai — <b>Từ trái nghĩa</b> không đúng. Phải chọn <i>Từ nhiều nghĩa (cùng một từ, nghĩa chuyển)</i> vì "Chân bàn" là nghĩa chuyển của "chân" — đều là "bộ phận dưới cùng nâng đỡ" → từ nhiều nghĩa.',
        'Đúng — <b>Từ nhiều nghĩa (cùng một từ, nghĩa chuyển)</b>. "Chân bàn" là nghĩa chuyển của "chân" — đều là "bộ phận dưới cùng nâng đỡ" → từ nhiều nghĩa.',
        'Sai — <b>Từ đồng âm</b> không đúng. Phải chọn <i>Từ nhiều nghĩa (cùng một từ, nghĩa chuyển)</i> vì "Chân bàn" là nghĩa chuyển của "chân" — đều là "bộ phận dưới cùng nâng đỡ" → từ nhiều nghĩa.',
      ]
    ),
    Q('Nghĩa chuyển hình thành dựa trên?',
      ['Quan hệ với nghĩa gốc (tương đồng/gần gũi)', 'Cách viết', 'Sự ngẫu nhiên', 'Số tiếng'], 0,
      'Nghĩa chuyển có liên hệ với nghĩa gốc qua tương đồng hoặc gần gũi — không phải tách rời.',
      [
        '<b>Cơ sở hình thành nghĩa chuyển</b>:',
        '<ul><li><b>Tương đồng</b>: giống nhau ở một nét — "chân bàn" giống "chân người" ở chỗ "ở dưới, nâng đỡ".</li><li><b>Gần gũi</b>: có quan hệ liền kề — "lưỡi" (cơ quan) → "lưỡi dao" (phần sắc).</li></ul>',
        'Nhờ có liên hệ này, người Việt <i>"tiết kiệm từ"</i> — dùng một từ để chỉ nhiều khái niệm liên quan.',
      ],
      [
        'Đúng — <b>Quan hệ với nghĩa gốc (tương đồng/gần gũi)</b>. Nghĩa chuyển có liên hệ với nghĩa gốc qua tương đồng hoặc gần gũi — không phải tách rời.',
        'Sai — <b>Cách viết</b> không đúng. Phải chọn <i>Quan hệ với nghĩa gốc (tương đồng/gần gũi)</i> vì nghĩa chuyển có liên hệ với nghĩa gốc qua tương đồng hoặc gần gũi — không phải tách rời.',
        'Sai — <b>Sự ngẫu nhiên</b> không đúng. Phải chọn <i>Quan hệ với nghĩa gốc (tương đồng/gần gũi)</i> vì nghĩa chuyển có liên hệ với nghĩa gốc qua tương đồng hoặc gần gũi — không phải tách rời.',
        'Sai — <b>Số tiếng</b> không đúng. Phải chọn <i>Quan hệ với nghĩa gốc (tương đồng/gần gũi)</i> vì nghĩa chuyển có liên hệ với nghĩa gốc qua tương đồng hoặc gần gũi — không phải tách rời.',
      ]
    ),
    Q('"Mắt" trong "mắt na" là?',
      ['Nghĩa gốc', 'Từ đồng âm', 'Nghĩa chuyển (chỉ bộ phận giống mắt người)', 'Từ láy'], 2,
      '"Mắt na" là nghĩa chuyển — chỉ phần nổi trên vỏ quả na, hình dáng giống mắt người.',
      [
        '<b>Từ "mắt" — đa nghĩa</b>:',
        '<ul><li><b>Nghĩa gốc</b>: cơ quan thị giác — "đôi mắt em".</li><li><b>Nghĩa chuyển</b>: bộ phận có hình dáng giống mắt — "mắt na", "mắt dứa", "mắt lưới", "mắt xích".</li></ul>',
        '<b>Cơ sở</b>: tương đồng về <i>hình dáng</i>.',
        'Tương tự, "mũi" (cơ quan khứu giác) → "mũi dao", "mũi tên", "mũi đất".',
      ],
      [
        'Sai — <b>Nghĩa gốc</b> không đúng. Phải chọn <i>Nghĩa chuyển (chỉ bộ phận giống mắt người)</i> vì "Mắt na" là nghĩa chuyển — chỉ phần nổi trên vỏ quả na, hình dáng giống mắt người.',
        'Sai — <b>Từ đồng âm</b> không đúng. Phải chọn <i>Nghĩa chuyển (chỉ bộ phận giống mắt người)</i> vì "Mắt na" là nghĩa chuyển — chỉ phần nổi trên vỏ quả na, hình dáng giống mắt người.',
        'Đúng — <b>Nghĩa chuyển (chỉ bộ phận giống mắt người)</b>. "Mắt na" là nghĩa chuyển — chỉ phần nổi trên vỏ quả na, hình dáng giống mắt người.',
        'Sai — <b>Từ láy</b> không đúng. Phải chọn <i>Nghĩa chuyển (chỉ bộ phận giống mắt người)</i> vì "Mắt na" là nghĩa chuyển — chỉ phần nổi trên vỏ quả na, hình dáng giống mắt người.',
      ]
    ),
    Q('Để giải thích nghĩa của từ, có thể?',
      ['Dùng từ đồng nghĩa hoặc trình bày khái niệm', 'Đếm số chữ cái', 'Chỉ phiên âm', 'Chỉ tra từ trái nghĩa'], 0,
      'Hai cách giải nghĩa từ: dùng từ đồng nghĩa, hoặc trình bày khái niệm.',
      [
        '<b>Hai cách giải thích nghĩa của từ</b>:',
        '<ul><li><b>Dùng từ đồng nghĩa</b>: "siêng năng" = chăm chỉ, cần cù.</li><li><b>Trình bày khái niệm</b>: "bút" = đồ dùng để viết, có ngòi, có cán cầm.</li></ul>',
        'Cách 1 nhanh gọn nhưng không phải lúc nào cũng có từ đồng nghĩa tốt.',
        'Cách 2 cụ thể, rõ ràng, dùng được cho mọi từ.',
      ],
      [
        'Đúng — <b>Dùng từ đồng nghĩa hoặc trình bày khái niệm</b>. Hai cách giải nghĩa từ: dùng từ đồng nghĩa, hoặc trình bày khái niệm.',
        'Sai — <b>Đếm số chữ cái</b> không đúng. Phải chọn <i>Dùng từ đồng nghĩa hoặc trình bày khái niệm</i> vì hai cách giải nghĩa từ: dùng từ đồng nghĩa, hoặc trình bày khái niệm.',
        'Sai — <b>Chỉ phiên âm</b> không đúng. Phải chọn <i>Dùng từ đồng nghĩa hoặc trình bày khái niệm</i> vì hai cách giải nghĩa từ: dùng từ đồng nghĩa, hoặc trình bày khái niệm.',
        'Sai — <b>Chỉ tra từ trái nghĩa</b> không đúng. Phải chọn <i>Dùng từ đồng nghĩa hoặc trình bày khái niệm</i> vì hai cách giải nghĩa từ: dùng từ đồng nghĩa, hoặc trình bày khái niệm.',
      ]
    ),
    Q('"Ngọt" trong "đường ngọt" (vị giác) và "lời ngọt" (lời nói dễ chịu) là?',
      ['Từ ghép', 'Từ trái nghĩa', 'Từ nhiều nghĩa', 'Từ đồng âm'], 2,
      'Cùng cảm giác "dễ chịu" — nghĩa chuyển từ vị giác sang thính giác → từ nhiều nghĩa.',
      [
        '<b>Phân tích "ngọt"</b>:',
        '<ul><li><b>Nghĩa gốc</b>: vị giác — vị của đường, mật.</li><li><b>Nghĩa chuyển</b>: cảm giác dễ chịu, êm tai khi nghe — "lời ngọt", "giọng nói ngọt".</li></ul>',
        '<b>Cơ sở chuyển nghĩa</b>: tương đồng ở cảm giác "<i>dễ chịu</i>" — chuyển từ vị giác sang thính giác.',
        'Vì có liên hệ qua nghĩa gốc → đây là <b>từ nhiều nghĩa</b>.',
      ],
      [
        'Sai — <b>Từ ghép</b> không đúng. Phải chọn <i>Từ nhiều nghĩa</i> vì cùng cảm giác "dễ chịu" — nghĩa chuyển từ vị giác sang thính giác → từ nhiều nghĩa.',
        'Sai — <b>Từ trái nghĩa</b> không đúng. Phải chọn <i>Từ nhiều nghĩa</i> vì cùng cảm giác "dễ chịu" — nghĩa chuyển từ vị giác sang thính giác → từ nhiều nghĩa.',
        'Đúng — <b>Từ nhiều nghĩa</b>. Cùng cảm giác "dễ chịu" — nghĩa chuyển từ vị giác sang thính giác → từ nhiều nghĩa.',
        'Sai — <b>Từ đồng âm</b> không đúng. Phải chọn <i>Từ nhiều nghĩa</i> vì cùng cảm giác "dễ chịu" — nghĩa chuyển từ vị giác sang thính giác → từ nhiều nghĩa.',
      ]
    ),
  ]),

  M(14, 'Từ đồng âm, đồng nghĩa, trái nghĩa', [
    Q('Từ đồng âm là?',
      ['Các từ giống âm nhưng nghĩa hoàn toàn khác nhau', 'Từ nhiều nghĩa', 'Từ trái nghĩa', 'Từ cùng nghĩa'], 0,
      'Từ đồng âm: âm giống nhau nhưng nghĩa hoàn toàn không liên quan.',
      [
        '<b>Từ đồng âm</b> là những từ <i>giống nhau về âm thanh</i> nhưng <i>nghĩa hoàn toàn khác xa</i>, không liên quan gì.',
        'Ví dụ:',
        '<ul><li>"<b>Đường</b>" (lối đi) – "<b>đường</b>" (chất ngọt).</li><li>"<b>Bàn</b>" (đồ dùng) – "<b>bàn</b>" (thảo luận).</li><li>"<b>Lá</b>" (lá cây) – "<b>lá</b>" (lá thư).</li></ul>',
        '⚠️ Khác từ nhiều nghĩa: các nghĩa của từ đồng âm <i>không có cơ sở liên hệ</i>.',
      ],
      [
        'Đúng — <b>Các từ giống âm nhưng nghĩa hoàn toàn khác nhau</b>. Từ đồng âm: âm giống nhau nhưng nghĩa hoàn toàn không liên quan.',
        'Sai — <b>Từ nhiều nghĩa</b> không đúng. Phải chọn <i>Các từ giống âm nhưng nghĩa hoàn toàn khác nhau</i> vì từ đồng âm: âm giống nhau nhưng nghĩa hoàn toàn không liên quan.',
        'Sai — <b>Từ trái nghĩa</b> không đúng. Phải chọn <i>Các từ giống âm nhưng nghĩa hoàn toàn khác nhau</i> vì từ đồng âm: âm giống nhau nhưng nghĩa hoàn toàn không liên quan.',
        'Sai — <b>Từ cùng nghĩa</b> không đúng. Phải chọn <i>Các từ giống âm nhưng nghĩa hoàn toàn khác nhau</i> vì từ đồng âm: âm giống nhau nhưng nghĩa hoàn toàn không liên quan.',
      ]
    ),
    Q('"Đường" (đi) và "đường" (ăn) là?',
      ['Từ đồng âm', 'Từ nhiều nghĩa', 'Từ trái nghĩa', 'Từ đồng nghĩa'], 0,
      'Hai nghĩa không liên quan gì → đồng âm.',
      [
        '<b>Phân tích</b>:',
        '<ul><li>"<b>Đường</b>" (lối đi) — đường phố, con đường.</li><li>"<b>Đường</b>" (chất ngọt) — đường cát, đường phèn.</li></ul>',
        'Hai nghĩa này <i>hoàn toàn không liên quan</i> với nhau → đây là <b>từ đồng âm</b>.',
        '<b>Phân biệt với từ nhiều nghĩa</b>: "chân người" và "chân bàn" có liên hệ tương đồng → từ nhiều nghĩa.',
      ],
      [
        'Đúng — <b>Từ đồng âm</b>. Hai nghĩa không liên quan gì → đồng âm. Đây là phương án chính xác theo nội dung bài học.',
        'Sai — <b>Từ nhiều nghĩa</b> không đúng. Phải chọn <i>Từ đồng âm</i> vì hai nghĩa không liên quan gì → đồng âm.',
        'Sai — <b>Từ trái nghĩa</b> không đúng. Phải chọn <i>Từ đồng âm</i> vì hai nghĩa không liên quan gì → đồng âm.',
        'Sai — <b>Từ đồng nghĩa</b> không đúng. Phải chọn <i>Từ đồng âm</i> vì hai nghĩa không liên quan gì → đồng âm.',
      ]
    ),
    Q('Từ đồng nghĩa là?',
      ['Các từ gần nghĩa hoặc cùng nghĩa', 'Cùng số chữ', 'Cùng vần', 'Cùng âm'], 0,
      'Đồng nghĩa: nghĩa giống/gần nhau, có thể thay thế trong một số ngữ cảnh.',
      [
        '<b>Từ đồng nghĩa</b> là những từ có <i>nghĩa giống nhau hoặc gần giống nhau</i>.',
        '<b>Hai loại</b>:',
        '<ul><li><b>Đồng nghĩa hoàn toàn</b>: "ba – bố", "mẹ – má", "quả – trái" — có thể thay thế hoàn toàn.</li><li><b>Đồng nghĩa không hoàn toàn</b> (khác sắc thái): "chết – mất – qua đời – hi sinh".</li></ul>',
        '⚠️ Dùng đồng nghĩa cần lưu ý <b>sắc thái</b> — "hi sinh" trang trọng, không dùng cho cái chết thường.',
      ],
      [
        'Đúng — <b>Các từ gần nghĩa hoặc cùng nghĩa</b>. Đồng nghĩa: nghĩa giống/gần nhau, có thể thay thế trong một số ngữ cảnh.',
        'Sai — <b>Cùng số chữ</b> không đúng. Phải chọn <i>Các từ gần nghĩa hoặc cùng nghĩa</i> vì đồng nghĩa: nghĩa giống/gần nhau, có thể thay thế trong một số ngữ cảnh.',
        'Sai — <b>Cùng vần</b> không đúng. Phải chọn <i>Các từ gần nghĩa hoặc cùng nghĩa</i> vì đồng nghĩa: nghĩa giống/gần nhau, có thể thay thế trong một số ngữ cảnh.',
        'Sai — <b>Cùng âm</b> không đúng. Phải chọn <i>Các từ gần nghĩa hoặc cùng nghĩa</i> vì đồng nghĩa: nghĩa giống/gần nhau, có thể thay thế trong một số ngữ cảnh.',
      ]
    ),
    Q('Cặp nào là từ đồng nghĩa?',
      ['Cao – thấp', 'Đen – trắng', 'To – nhỏ', 'Học sinh – học trò'], 3,
      '"Học sinh" và "học trò" cùng chỉ "người đi học" → đồng nghĩa.',
      [
        '<b>Soi từng cặp</b>:',
        '<ul><li>❌ "cao – thấp" — đối lập → <i>trái nghĩa</i>.</li><li>❌ "đen – trắng" — đối lập → <i>trái nghĩa</i>.</li><li>❌ "to – nhỏ" — đối lập → <i>trái nghĩa</i>.</li><li>✅ "<b>học sinh – học trò</b>" — cùng chỉ người đi học → <i>đồng nghĩa</i>.</li></ul>',
        'Đây là cặp đồng nghĩa hoàn toàn, có thể thay thế nhau trong hầu hết ngữ cảnh.',
      ],
      [
        'Sai — <b>Cao – thấp</b> không đúng. Phải chọn <i>Học sinh – học trò</i> vì "Học sinh" và "học trò" cùng chỉ "người đi học" → đồng nghĩa.',
        'Sai — <b>Đen – trắng</b> không đúng. Phải chọn <i>Học sinh – học trò</i> vì "Học sinh" và "học trò" cùng chỉ "người đi học" → đồng nghĩa.',
        'Sai — <b>To – nhỏ</b> không đúng. Phải chọn <i>Học sinh – học trò</i> vì "Học sinh" và "học trò" cùng chỉ "người đi học" → đồng nghĩa.',
        'Đúng — <b>Học sinh – học trò</b>. "Học sinh" và "học trò" cùng chỉ "người đi học" → đồng nghĩa.',
      ]
    ),
    Q('Cặp nào là từ trái nghĩa?',
      ['Mẹ – má', 'Đẹp – xấu', 'Học sinh – học trò', 'Quả – trái'], 1,
      '"Đẹp" và "xấu" đối lập về tính chất → trái nghĩa.',
      [
        '<b>Từ trái nghĩa</b> là những từ có nghĩa <i>đối lập nhau</i> về một tiêu chí.',
        '<b>Soi từng cặp</b>:',
        '<ul><li>❌ "mẹ – má" — cùng chỉ mẹ → <i>đồng nghĩa</i>.</li><li>✅ "<b>đẹp – xấu</b>" — đối lập về hình thức → <i>trái nghĩa</i>.</li><li>❌ "học sinh – học trò" → <i>đồng nghĩa</i>.</li><li>❌ "quả – trái" → <i>đồng nghĩa</i> (Bắc – Nam).</li></ul>',
      ],
      [
        'Sai — <b>Mẹ – má</b> không đúng. Phải chọn <i>Đẹp – xấu</i> vì "Đẹp" và "xấu" đối lập về tính chất → trái nghĩa.',
        'Đúng — <b>Đẹp – xấu</b>. "Đẹp" và "xấu" đối lập về tính chất → trái nghĩa. Đây là phương án chính xác theo nội dung bài học.',
        'Sai — <b>Học sinh – học trò</b> không đúng. Phải chọn <i>Đẹp – xấu</i> vì "Đẹp" và "xấu" đối lập về tính chất → trái nghĩa.',
        'Sai — <b>Quả – trái</b> không đúng. Phải chọn <i>Đẹp – xấu</i> vì "Đẹp" và "xấu" đối lập về tính chất → trái nghĩa.',
      ]
    ),
    Q('Phân biệt từ đồng âm và từ nhiều nghĩa dựa vào?',
      ['Cách viết hoa', 'Số dấu thanh', 'Có hay không có mối liên hệ giữa các nghĩa', 'Số âm tiết'], 2,
      'Đồng âm: nghĩa hoàn toàn rời nhau. Nhiều nghĩa: các nghĩa có liên hệ với nghĩa gốc.',
      [
        '<b>Mẹo phân biệt</b>:',
        '<ul><li><b>Đồng âm</b>: nghĩa <i>hoàn toàn rời nhau</i>, không có cơ sở chung — "đường" (đi) vs "đường" (ngọt).</li><li><b>Nhiều nghĩa</b>: các nghĩa <i>liên hệ với nhau qua nghĩa gốc</i> — "chân người" và "chân bàn" cùng là "bộ phận dưới nâng đỡ".</li></ul>',
        '<b>Quy tắc vàng</b>: thử tìm điểm chung giữa hai nghĩa. Có → <i>nhiều nghĩa</i>; không → <i>đồng âm</i>.',
      ],
      [
        'Sai — <b>Cách viết hoa</b> không đúng. Phải chọn <i>Có hay không có mối liên hệ giữa các nghĩa</i> vì đồng âm: nghĩa hoàn toàn rời nhau. Nhiều nghĩa: các nghĩa có liên hệ với nghĩa gốc.',
        'Sai — <b>Số dấu thanh</b> không đúng. Phải chọn <i>Có hay không có mối liên hệ giữa các nghĩa</i> vì đồng âm: nghĩa hoàn toàn rời nhau. Nhiều nghĩa: các nghĩa có liên hệ với nghĩa gốc.',
        'Đúng — <b>Có hay không có mối liên hệ giữa các nghĩa</b>. Đồng âm: nghĩa hoàn toàn rời nhau. Nhiều nghĩa: các nghĩa có liên hệ với nghĩa gốc.',
        'Sai — <b>Số âm tiết</b> không đúng. Phải chọn <i>Có hay không có mối liên hệ giữa các nghĩa</i> vì đồng âm: nghĩa hoàn toàn rời nhau. Nhiều nghĩa: các nghĩa có liên hệ với nghĩa gốc.',
      ]
    ),
  ]),

  M(15, 'Câu trần thuật đơn (Ai là gì? Ai làm gì? Ai thế nào?)', [
    Q('Câu trần thuật đơn là?',
      ['Câu cảm thán', 'Câu hỏi ngắn', 'Câu có nhiều cụm C–V', 'Câu chỉ có một cụm chủ – vị làm nòng cốt'], 3,
      'Câu trần thuật đơn = câu chỉ có một cụm chủ – vị làm nòng cốt.',
      [
        '<b>Câu trần thuật đơn</b> là câu chỉ có <i>một cụm chủ – vị (C–V)</i> làm nòng cốt, dùng để <b>kể, tả, giới thiệu, nhận xét</b>.',
        '<b>Ba kiểu phổ biến</b>:',
        '<ul><li>Câu "<b>Ai là gì?</b>" — vị ngữ có "là" + danh từ.</li><li>Câu "<b>Ai làm gì?</b>" — vị ngữ là động từ/cụm động từ.</li><li>Câu "<b>Ai thế nào?</b>" — vị ngữ là tính từ/cụm tính từ.</li></ul>',
      ],
      [
        'Sai — <b>Câu cảm thán</b> không đúng. Phải chọn <i>Câu chỉ có một cụm chủ – vị làm nòng cốt</i> vì câu trần thuật đơn = câu chỉ có một cụm chủ – vị làm nòng cốt.',
        'Sai — <b>Câu hỏi ngắn</b> không đúng. Phải chọn <i>Câu chỉ có một cụm chủ – vị làm nòng cốt</i> vì câu trần thuật đơn = câu chỉ có một cụm chủ – vị làm nòng cốt.',
        'Sai — <b>Câu có nhiều cụm C–V</b> không đúng. Phải chọn <i>Câu chỉ có một cụm chủ – vị làm nòng cốt</i> vì câu trần thuật đơn = câu chỉ có một cụm chủ – vị làm nòng cốt.',
        'Đúng — <b>Câu chỉ có một cụm chủ – vị làm nòng cốt</b>. Câu trần thuật đơn = câu chỉ có một cụm chủ – vị làm nòng cốt.',
      ]
    ),
    Q('Câu "Bạn Lan là học sinh giỏi." thuộc kiểu?',
      ['Ai là gì?', 'Câu hỏi', 'Ai làm gì?', 'Ai thế nào?'], 0,
      'Vị ngữ có từ "là" + danh từ ("học sinh giỏi") → câu "Ai là gì?".',
      [
        '<b>Phân tích câu</b> "Bạn Lan là học sinh giỏi":',
        '<ul><li><b>Chủ ngữ</b>: "Bạn Lan" (trả lời "Ai?").</li><li><b>Vị ngữ</b>: "là học sinh giỏi" — có <code>"là" + danh từ</code>.</li></ul>',
        '→ Đây là kiểu <b>"Ai là gì?"</b> — dùng để <i>định nghĩa, giới thiệu</i>.',
        'Tương tự: "Hà Nội là thủ đô.", "Mẹ em là giáo viên."',
      ],
      [
        'Đúng — <b>Ai là gì?</b>. Vị ngữ có từ "là" + danh từ ("học sinh giỏi") → câu "Ai là gì?".',
        'Sai — <b>Câu hỏi</b> không đúng. Phải chọn <i>Ai là gì?</i> vì vị ngữ có từ "là" + danh từ ("học sinh giỏi") → câu "Ai là gì?".',
        'Sai — <b>Ai làm gì?</b> không đúng. Phải chọn <i>Ai là gì?</i> vì vị ngữ có từ "là" + danh từ ("học sinh giỏi") → câu "Ai là gì?".',
        'Sai — <b>Ai thế nào?</b> không đúng. Phải chọn <i>Ai là gì?</i> vì vị ngữ có từ "là" + danh từ ("học sinh giỏi") → câu "Ai là gì?".',
      ]
    ),
    Q('Câu "Em đang đọc sách." thuộc kiểu?',
      ['Ai là gì?', 'Câu cảm', 'Ai thế nào?', 'Ai làm gì?'], 3,
      'Vị ngữ là cụm động từ "đang đọc sách" → câu "Ai làm gì?".',
      [
        '<b>Phân tích câu</b> "Em đang đọc sách":',
        '<ul><li><b>Chủ ngữ</b>: "Em" (trả lời "Ai?").</li><li><b>Vị ngữ</b>: "đang đọc sách" — cụm <i>động từ</i>.</li></ul>',
        '→ Đây là kiểu <b>"Ai làm gì?"</b> — dùng để <i>kể hành động</i>.',
        'Tương tự: "Bạn Lan chơi đàn.", "Cô giáo đang giảng bài."',
      ],
      [
        'Sai — <b>Ai là gì?</b> không đúng. Phải chọn <i>Ai làm gì?</i> vì vị ngữ là cụm động từ "đang đọc sách" → câu "Ai làm gì?".',
        'Sai — <b>Câu cảm</b> không đúng. Phải chọn <i>Ai làm gì?</i> vì vị ngữ là cụm động từ "đang đọc sách" → câu "Ai làm gì?".',
        'Sai — <b>Ai thế nào?</b> không đúng. Phải chọn <i>Ai làm gì?</i> vì vị ngữ là cụm động từ "đang đọc sách" → câu "Ai làm gì?".',
        'Đúng — <b>Ai làm gì?</b>. Vị ngữ là cụm động từ "đang đọc sách" → câu "Ai làm gì?".',
      ]
    ),
    Q('Câu "Bầu trời rất xanh." thuộc kiểu?',
      ['Ai làm gì?', 'Câu hỏi', 'Ai là gì?', 'Ai thế nào?'], 3,
      'Vị ngữ là cụm tính từ "rất xanh" → câu "Ai thế nào?".',
      [
        '<b>Phân tích câu</b> "Bầu trời rất xanh":',
        '<ul><li><b>Chủ ngữ</b>: "Bầu trời" (trả lời "Cái gì?").</li><li><b>Vị ngữ</b>: "rất xanh" — cụm <i>tính từ</i>.</li></ul>',
        '→ Đây là kiểu <b>"Ai thế nào?"</b> — dùng để <i>miêu tả đặc điểm, trạng thái</i>.',
        'Tương tự: "Hoa hồng rất thơm.", "Mẹ rất hiền."',
      ],
      [
        'Sai — <b>Ai làm gì?</b> không đúng. Phải chọn <i>Ai thế nào?</i> vì vị ngữ là cụm tính từ "rất xanh" → câu "Ai thế nào?".',
        'Sai — <b>Câu hỏi</b> không đúng. Phải chọn <i>Ai thế nào?</i> vì vị ngữ là cụm tính từ "rất xanh" → câu "Ai thế nào?".',
        'Sai — <b>Ai là gì?</b> không đúng. Phải chọn <i>Ai thế nào?</i> vì vị ngữ là cụm tính từ "rất xanh" → câu "Ai thế nào?".',
        'Đúng — <b>Ai thế nào?</b>. Vị ngữ là cụm tính từ "rất xanh" → câu "Ai thế nào?".',
      ]
    ),
    Q('Trong "Hà Nội là thủ đô của Việt Nam.", từ làm vị ngữ chính là?',
      ['thủ đô', 'là thủ đô của Việt Nam', 'Hà Nội', 'Việt Nam'], 1,
      'Cả cụm "là thủ đô của Việt Nam" mới làm vị ngữ — không chỉ riêng "thủ đô".',
      [
        '<b>Phân tích câu</b>:',
        '<ul><li><b>Chủ ngữ</b>: "Hà Nội".</li><li><b>Vị ngữ</b>: "<b>là thủ đô của Việt Nam</b>" — cả cụm.</li></ul>',
        '⚠️ Vị ngữ không chỉ là "thủ đô" — phải tính cả <b>từ "là"</b> và phần bổ ngữ "của Việt Nam".',
        'Kiểu câu: <b>"Ai là gì?"</b> — giới thiệu vị thế của Hà Nội.',
      ],
      [
        'Sai — <b>thủ đô</b> không đúng. Phải chọn <i>là thủ đô của Việt Nam</i> vì cả cụm "là thủ đô của Việt Nam" mới làm vị ngữ — không chỉ riêng "thủ đô".',
        'Đúng — <b>là thủ đô của Việt Nam</b>. Cả cụm "là thủ đô của Việt Nam" mới làm vị ngữ — không chỉ riêng "thủ đô".',
        'Sai — <b>Hà Nội</b> không đúng. Phải chọn <i>là thủ đô của Việt Nam</i> vì cả cụm "là thủ đô của Việt Nam" mới làm vị ngữ — không chỉ riêng "thủ đô".',
        'Sai — <b>Việt Nam</b> không đúng. Phải chọn <i>là thủ đô của Việt Nam</i> vì cả cụm "là thủ đô của Việt Nam" mới làm vị ngữ — không chỉ riêng "thủ đô".',
      ]
    ),
    Q('Câu trần thuật đơn dùng để?',
      ['Chỉ để bộc lộ cảm xúc', 'Chỉ để hỏi', 'Kể, tả, giới thiệu, nhận xét', 'Chỉ để yêu cầu'], 2,
      'Chức năng chính: kể (kiểu Ai làm gì), tả (Ai thế nào), giới thiệu/nhận xét (Ai là gì).',
      [
        '<b>Bốn chức năng</b> của câu trần thuật đơn:',
        '<ul><li><b>Kể</b>: "Em đi học."</li><li><b>Tả</b>: "Bầu trời xanh ngắt."</li><li><b>Giới thiệu</b>: "Bạn ấy là lớp trưởng lớp em."</li><li><b>Nhận xét</b>: "Bài thơ này rất hay."</li></ul>',
        '⚠️ Phân biệt với câu hỏi (?), câu cảm thán (!), câu cầu khiến (!).',
      ],
      [
        'Sai — <b>Chỉ để bộc lộ cảm xúc</b> không đúng. Phải chọn <i>Kể, tả, giới thiệu, nhận xét</i> vì chức năng chính: kể (kiểu Ai làm gì), tả (Ai thế nào), giới thiệu/nhận xét (Ai là gì).',
        'Sai — <b>Chỉ để hỏi</b> không đúng. Phải chọn <i>Kể, tả, giới thiệu, nhận xét</i> vì chức năng chính: kể (kiểu Ai làm gì), tả (Ai thế nào), giới thiệu/nhận xét (Ai là gì).',
        'Đúng — <b>Kể, tả, giới thiệu, nhận xét</b>. Chức năng chính: kể (kiểu Ai làm gì), tả (Ai thế nào), giới thiệu/nhận xét (Ai là gì).',
        'Sai — <b>Chỉ để yêu cầu</b> không đúng. Phải chọn <i>Kể, tả, giới thiệu, nhận xét</i> vì chức năng chính: kể (kiểu Ai làm gì), tả (Ai thế nào), giới thiệu/nhận xét (Ai là gì).',
      ]
    ),
  ]),

  M(16, 'Chủ ngữ — Vị ngữ', [
    Q('Chủ ngữ là?',
      ['Bộ phận chỉ thời gian', 'Bộ phận nêu sự vật/hiện tượng được nói đến trong câu', 'Bộ phận chỉ nơi chốn', 'Bộ phận chỉ mục đích'], 1,
      'Chủ ngữ nêu sự vật/hiện tượng được nói đến — trả lời câu hỏi "Ai?", "Cái gì?", "Con gì?".',
      [
        '<b>Chủ ngữ</b> là một trong hai thành phần chính của câu, nêu <i>sự vật, hiện tượng được nói đến</i>.',
        '<b>Đặc điểm</b>:',
        '<ul><li>Trả lời các câu hỏi: <code>"Ai?", "Cái gì?", "Con gì?"</code>.</li><li>Thường đứng <b>trước vị ngữ</b>.</li><li>Do <b>danh từ, cụm danh từ, đại từ</b> đảm nhiệm.</li><li>Có thể là 1 tiếng ("Em đi học") hoặc nhiều tiếng ("Cô giáo lớp em rất hiền").</li></ul>',
      ],
      [
        'Sai — <b>Bộ phận chỉ thời gian</b> không đúng. Phải chọn <i>Bộ phận nêu sự vật/hiện tượng được nói đến trong câu</i> vì chủ ngữ nêu sự vật/hiện tượng được nói đến — trả lời câu hỏi "Ai?", "Cái gì?", "Con gì?".',
        'Đúng — <b>Bộ phận nêu sự vật/hiện tượng được nói đến trong câu</b>. Chủ ngữ nêu sự vật/hiện tượng được nói đến — trả lời câu hỏi "Ai?", "Cái gì?", "Con gì?".',
        'Sai — <b>Bộ phận chỉ nơi chốn</b> không đúng. Phải chọn <i>Bộ phận nêu sự vật/hiện tượng được nói đến trong câu</i> vì chủ ngữ nêu sự vật/hiện tượng được nói đến — trả lời câu hỏi "Ai?", "Cái gì?", "Con gì?".',
        'Sai — <b>Bộ phận chỉ mục đích</b> không đúng. Phải chọn <i>Bộ phận nêu sự vật/hiện tượng được nói đến trong câu</i> vì chủ ngữ nêu sự vật/hiện tượng được nói đến — trả lời câu hỏi "Ai?", "Cái gì?", "Con gì?".',
      ]
    ),
    Q('Vị ngữ là?',
      ['Bộ phận nêu hoạt động, đặc điểm, trạng thái của sự vật ở chủ ngữ', 'Bộ phận chỉ thời gian', 'Bộ phận chỉ địa điểm', 'Bộ phận đứng đầu câu'], 0,
      'Vị ngữ nêu hoạt động/đặc điểm/trạng thái — trả lời câu hỏi "Làm gì?", "Là gì?", "Thế nào?".',
      [
        '<b>Vị ngữ</b> là thành phần chính nêu <i>hoạt động, đặc điểm, trạng thái</i> của sự vật được nói đến ở chủ ngữ.',
        '<b>Đặc điểm</b>:',
        '<ul><li>Trả lời câu hỏi: <code>"Làm gì?", "Như thế nào?", "Là gì?"</code>.</li><li>Thường đứng <b>sau chủ ngữ</b>.</li><li>Do <b>động từ, tính từ</b>, cụm động từ, cụm tính từ, hoặc cụm <code>"là + danh từ"</code> đảm nhiệm.</li></ul>',
      ],
      [
        'Đúng — <b>Bộ phận nêu hoạt động, đặc điểm, trạng thái của sự vật ở chủ ngữ</b>. Vị ngữ nêu hoạt động/đặc điểm/trạng thái — trả lời câu hỏi "Làm gì?", "Là gì?", "Thế nào?".',
        'Sai — <b>Bộ phận chỉ thời gian</b> không đúng. Phải chọn <i>Bộ phận nêu hoạt động, đặc điểm, trạng thái của sự vật ở chủ ngữ</i> vì vị ngữ nêu hoạt động/đặc điểm/trạng thái — trả lời câu hỏi "Làm gì?", "Là gì?", "Thế nào?".',
        'Sai — <b>Bộ phận chỉ địa điểm</b> không đúng. Phải chọn <i>Bộ phận nêu hoạt động, đặc điểm, trạng thái của sự vật ở chủ ngữ</i> vì vị ngữ nêu hoạt động/đặc điểm/trạng thái — trả lời câu hỏi "Làm gì?", "Là gì?", "Thế nào?".',
        'Sai — <b>Bộ phận đứng đầu câu</b> không đúng. Phải chọn <i>Bộ phận nêu hoạt động, đặc điểm, trạng thái của sự vật ở chủ ngữ</i> vì vị ngữ nêu hoạt động/đặc điểm/trạng thái — trả lời câu hỏi "Làm gì?", "Là gì?", "Thế nào?".',
      ]
    ),
    Q('Trong "Mẹ em đang nấu cơm.", chủ ngữ là?',
      ['Mẹ em', 'đang nấu cơm', 'Mẹ em đang', 'Mẹ em đang nấu'], 0,
      'Chủ ngữ là "Mẹ em" — bộ phận được nói đến trong câu.',
      [
        '<b>Phân tích câu</b>:',
        '<ul><li><b>Chủ ngữ</b>: "<b>Mẹ em</b>" (cụm danh từ) — trả lời "Ai?".</li><li><b>Vị ngữ</b>: "đang nấu cơm" (cụm động từ).</li></ul>',
        '⚠️ Chú ý: chủ ngữ chỉ gồm "Mẹ em" — không kéo dài sang "đang" hay "đang nấu".',
        'Mẹo: đặt câu hỏi "<i>Ai đang nấu cơm?</i>" → "Mẹ em" → đó là chủ ngữ.',
      ],
      [
        'Đúng — <b>Mẹ em</b>. Chủ ngữ là "Mẹ em" — bộ phận được nói đến trong câu. Đây là phương án chính xác theo nội dung bài học.',
        'Sai — <b>đang nấu cơm</b> không đúng. Phải chọn <i>Mẹ em</i> vì chủ ngữ là "Mẹ em" — bộ phận được nói đến trong câu.',
        'Sai — <b>Mẹ em đang</b> không đúng. Phải chọn <i>Mẹ em</i> vì chủ ngữ là "Mẹ em" — bộ phận được nói đến trong câu.',
        'Sai — <b>Mẹ em đang nấu</b> không đúng. Phải chọn <i>Mẹ em</i> vì chủ ngữ là "Mẹ em" — bộ phận được nói đến trong câu.',
      ]
    ),
    Q('Trong câu trên, vị ngữ là?',
      ['nấu cơm', 'đang nấu', 'nấu', 'đang nấu cơm'], 3,
      'Vị ngữ là "đang nấu cơm" — cả cụm động từ chỉ hành động của chủ ngữ.',
      [
        '<b>Vị ngữ "đang nấu cơm"</b> bao gồm:',
        '<ul><li><b>"đang"</b> — phó từ chỉ thời gian.</li><li><b>"nấu"</b> — động từ chính.</li><li><b>"cơm"</b> — bổ ngữ chỉ đối tượng.</li></ul>',
        '→ Cả cụm <b>"đang nấu cơm"</b> mới là vị ngữ đầy đủ.',
        'Mẹo: đặt câu hỏi "<i>Mẹ em làm gì?</i>" → "đang nấu cơm" → đó là vị ngữ.',
      ],
      [
        'Sai — <b>nấu cơm</b> không đúng. Phải chọn <i>đang nấu cơm</i> vì vị ngữ là "đang nấu cơm" — cả cụm động từ chỉ hành động của chủ ngữ.',
        'Sai — <b>đang nấu</b> không đúng. Phải chọn <i>đang nấu cơm</i> vì vị ngữ là "đang nấu cơm" — cả cụm động từ chỉ hành động của chủ ngữ.',
        'Sai — <b>nấu</b> không đúng. Phải chọn <i>đang nấu cơm</i> vì vị ngữ là "đang nấu cơm" — cả cụm động từ chỉ hành động của chủ ngữ.',
        'Đúng — <b>đang nấu cơm</b>. Vị ngữ là "đang nấu cơm" — cả cụm động từ chỉ hành động của chủ ngữ.',
      ]
    ),
    Q('Chủ ngữ thường do?',
      ['Danh từ, đại từ, cụm danh từ đảm nhiệm', 'Động từ', 'Phó từ', 'Tính từ'], 0,
      'Chủ ngữ chính do danh từ, đại từ, cụm danh từ đảm nhiệm.',
      [
        '<b>Các loại từ làm chủ ngữ</b>:',
        '<ul><li><b>Danh từ</b>: "Mẹ đi chợ."</li><li><b>Đại từ</b>: "Em đang học bài."</li><li><b>Cụm danh từ</b>: "Cô giáo lớp em rất hiền."</li></ul>',
        '⚠️ Động từ, tính từ, phó từ thường <i>không làm chủ ngữ</i> trong câu thông thường — chúng làm vị ngữ.',
      ],
      [
        'Đúng — <b>Danh từ, đại từ, cụm danh từ đảm nhiệm</b>. Chủ ngữ chính do danh từ, đại từ, cụm danh từ đảm nhiệm.',
        'Sai — <b>Động từ</b> không đúng. Phải chọn <i>Danh từ, đại từ, cụm danh từ đảm nhiệm</i> vì chủ ngữ chính do danh từ, đại từ, cụm danh từ đảm nhiệm.',
        'Sai — <b>Phó từ</b> không đúng. Phải chọn <i>Danh từ, đại từ, cụm danh từ đảm nhiệm</i> vì chủ ngữ chính do danh từ, đại từ, cụm danh từ đảm nhiệm.',
        'Sai — <b>Tính từ</b> không đúng. Phải chọn <i>Danh từ, đại từ, cụm danh từ đảm nhiệm</i> vì chủ ngữ chính do danh từ, đại từ, cụm danh từ đảm nhiệm.',
      ]
    ),
    Q('Câu nào có chủ ngữ là đại từ?',
      ['Em rất chăm học.', 'Cây phượng đang nở.', 'Mặt trời đỏ rực.', 'Bút mực mới mua.'], 0,
      '"Em" là đại từ làm chủ ngữ — chỉ người nói.',
      [
        '<b>Soi từng câu</b>:',
        '<ul><li>✅ "<b>Em</b> rất chăm học" — "Em" là <i>đại từ</i> chỉ người nói.</li><li>❌ "Cây phượng đang nở" — "Cây phượng" là <i>cụm danh từ</i>.</li><li>❌ "Mặt trời đỏ rực" — "Mặt trời" là <i>danh từ</i>.</li><li>❌ "Bút mực mới mua" — "Bút mực" là <i>cụm danh từ</i>.</li></ul>',
        'Các đại từ thường gặp: <code>tôi, em, mình, ta, anh, chị, nó, họ, chúng ta…</code>',
      ],
      [
        'Đúng — <b>Em rất chăm học.</b>. "Em" là đại từ làm chủ ngữ — chỉ người nói. Đây là phương án chính xác theo nội dung bài học.',
        'Sai — <b>Cây phượng đang nở.</b> không đúng. Phải chọn <i>Em rất chăm học.</i> vì "Em" là đại từ làm chủ ngữ — chỉ người nói.',
        'Sai — <b>Mặt trời đỏ rực.</b> không đúng. Phải chọn <i>Em rất chăm học.</i> vì "Em" là đại từ làm chủ ngữ — chỉ người nói.',
        'Sai — <b>Bút mực mới mua.</b> không đúng. Phải chọn <i>Em rất chăm học.</i> vì "Em" là đại từ làm chủ ngữ — chỉ người nói.',
      ]
    ),
  ]),

  M(17, 'Trạng ngữ', [
    Q('Trạng ngữ là?',
      ['Vị ngữ phụ', 'Thành phần phụ bổ sung ý về thời gian, nơi chốn, nguyên nhân… cho câu', 'Bộ phận chỉ chủ thể', 'Thành phần chính của câu'], 1,
      'Trạng ngữ là thành phần phụ, bổ sung ý về hoàn cảnh (thời gian, nơi chốn, nguyên nhân…) cho câu.',
      [
        '<b>Trạng ngữ</b> là <i>thành phần phụ</i> của câu, bổ sung ý nghĩa về <b>hoàn cảnh</b>:',
        '<ul><li><b>Thời gian</b>: "Sáng nay", "Vào mùa thu".</li><li><b>Nơi chốn</b>: "Ở vườn", "Trên cây".</li><li><b>Nguyên nhân</b>: "Vì trời mưa", "Do lười học".</li><li><b>Mục đích</b>: "Để học giỏi", "Vì tương lai".</li><li><b>Cách thức, phương tiện</b>: "Bằng xe đạp".</li></ul>',
        '⚠️ Trạng ngữ là <i>thành phần phụ</i> — bỏ đi câu vẫn đúng ngữ pháp.',
      ],
      [
        'Sai — <b>Vị ngữ phụ</b> không đúng. Phải chọn <i>Thành phần phụ bổ sung ý về thời gian, nơi chốn, nguyên nhân… cho câu</i> vì trạng ngữ là thành phần phụ, bổ sung ý về hoàn cảnh (thời gian, nơi chốn, nguyên nhân…) cho câu.',
        'Đúng — <b>Thành phần phụ bổ sung ý về thời gian, nơi chốn, nguyên nhân… cho câu</b>. Trạng ngữ là thành phần phụ, bổ sung ý về hoàn cảnh (thời gian, nơi chốn, nguyên nhân…) cho câu.',
        'Sai — <b>Bộ phận chỉ chủ thể</b> không đúng. Phải chọn <i>Thành phần phụ bổ sung ý về thời gian, nơi chốn, nguyên nhân… cho câu</i> vì trạng ngữ là thành phần phụ, bổ sung ý về hoàn cảnh (thời gian, nơi chốn, nguyên nhân…) cho câu.',
        'Sai — <b>Thành phần chính của câu</b> không đúng. Phải chọn <i>Thành phần phụ bổ sung ý về thời gian, nơi chốn, nguyên nhân… cho câu</i> vì trạng ngữ là thành phần phụ, bổ sung ý về hoàn cảnh (thời gian, nơi chốn, nguyên nhân…) cho câu.',
      ]
    ),
    Q('"Sáng nay, em đi học sớm." — trạng ngữ là?',
      ['em đi học', 'đi học sớm', 'đi học', 'Sáng nay'], 3,
      '"Sáng nay" là trạng ngữ chỉ thời gian.',
      [
        '<b>Phân tích câu</b>:',
        '<ul><li><b>Trạng ngữ</b>: "<b>Sáng nay</b>" — chỉ <i>thời gian</i>.</li><li><b>Chủ ngữ</b>: "em".</li><li><b>Vị ngữ</b>: "đi học sớm".</li></ul>',
        'Trạng ngữ "Sáng nay" trả lời cho câu hỏi: <i>"Khi nào?"</i>.',
        '⚠️ Sau trạng ngữ đầu câu, dùng <b>dấu phẩy</b> để tách với nòng cốt.',
      ],
      [
        'Sai — <b>em đi học</b> không đúng. Phải chọn <i>Sáng nay</i> vì "Sáng nay" là trạng ngữ chỉ thời gian.',
        'Sai — <b>đi học sớm</b> không đúng. Phải chọn <i>Sáng nay</i> vì "Sáng nay" là trạng ngữ chỉ thời gian.',
        'Sai — <b>đi học</b> không đúng. Phải chọn <i>Sáng nay</i> vì "Sáng nay" là trạng ngữ chỉ thời gian.',
        'Đúng — <b>Sáng nay</b>. "Sáng nay" là trạng ngữ chỉ thời gian. Đây là phương án chính xác theo nội dung bài học.',
      ]
    ),
    Q('Trạng ngữ chỉ nơi chốn trong "Ở vườn, hoa nở rộ." là?',
      ['hoa nở rộ', 'Ở vườn', 'hoa nở', 'nở rộ'], 1,
      '"Ở vườn" — trạng ngữ chỉ nơi chốn, trả lời câu hỏi "Ở đâu?".',
      [
        '<b>Phân tích câu</b>:',
        '<ul><li><b>Trạng ngữ</b>: "<b>Ở vườn</b>" — chỉ <i>nơi chốn</i>.</li><li><b>Chủ ngữ</b>: "hoa".</li><li><b>Vị ngữ</b>: "nở rộ".</li></ul>',
        'Trạng ngữ chỉ nơi chốn thường mở đầu bằng: <code>ở, tại, trên, dưới, trong, ngoài, giữa…</code>',
        'Ví dụ: "Trên cây phượng", "Tại sân trường", "Trong vườn nhà".',
      ],
      [
        'Sai — <b>hoa nở rộ</b> không đúng. Phải chọn <i>Ở vườn</i> vì "Ở vườn" — trạng ngữ chỉ nơi chốn, trả lời câu hỏi "Ở đâu?".',
        'Đúng — <b>Ở vườn</b>. "Ở vườn" — trạng ngữ chỉ nơi chốn, trả lời câu hỏi "Ở đâu?".',
        'Sai — <b>hoa nở</b> không đúng. Phải chọn <i>Ở vườn</i> vì "Ở vườn" — trạng ngữ chỉ nơi chốn, trả lời câu hỏi "Ở đâu?".',
        'Sai — <b>nở rộ</b> không đúng. Phải chọn <i>Ở vườn</i> vì "Ở vườn" — trạng ngữ chỉ nơi chốn, trả lời câu hỏi "Ở đâu?".',
      ]
    ),
    Q('Trạng ngữ chỉ nguyên nhân trong "Vì trời mưa, lớp tan muộn." là?',
      ['tan muộn', 'lớp tan muộn', 'trời mưa', 'Vì trời mưa'], 3,
      '"Vì trời mưa" — trạng ngữ chỉ nguyên nhân (trả lời "Vì sao?").',
      [
        '<b>Phân tích câu</b>:',
        '<ul><li><b>Trạng ngữ</b>: "<b>Vì trời mưa</b>" — chỉ <i>nguyên nhân</i>.</li><li><b>Chủ ngữ</b>: "lớp".</li><li><b>Vị ngữ</b>: "tan muộn".</li></ul>',
        'Trạng ngữ chỉ nguyên nhân thường mở đầu bằng: <code>vì, do, bởi, tại, nhờ…</code>',
        '⚠️ Phải tính cả từ "Vì" — không chỉ "trời mưa".',
      ],
      [
        'Sai — <b>tan muộn</b> không đúng. Phải chọn <i>Vì trời mưa</i> vì "Vì trời mưa" — trạng ngữ chỉ nguyên nhân (trả lời "Vì sao?").',
        'Sai — <b>lớp tan muộn</b> không đúng. Phải chọn <i>Vì trời mưa</i> vì "Vì trời mưa" — trạng ngữ chỉ nguyên nhân (trả lời "Vì sao?").',
        'Sai — <b>trời mưa</b> không đúng. Phải chọn <i>Vì trời mưa</i> vì "Vì trời mưa" — trạng ngữ chỉ nguyên nhân (trả lời "Vì sao?").',
        'Đúng — <b>Vì trời mưa</b>. "Vì trời mưa" — trạng ngữ chỉ nguyên nhân (trả lời "Vì sao?").',
      ]
    ),
    Q('Khi viết, trạng ngữ thường được ngăn cách với nòng cốt bằng?',
      ['Dấu hai chấm', 'Dấu chấm', 'Dấu phẩy', 'Dấu hỏi'], 2,
      'Trạng ngữ đầu câu thường tách với nòng cốt bằng dấu phẩy.',
      [
        '<b>Quy tắc dấu câu với trạng ngữ</b>:',
        '<ul><li>Trạng ngữ <b>đầu câu</b>: tách bằng <i>dấu phẩy</i> — "Sáng nay, em đi học."</li><li>Trạng ngữ <b>cuối câu</b>: thường không cần dấu phẩy — "Em đi học sáng nay."</li><li>Trạng ngữ <b>giữa câu</b>: tách bằng <i>hai dấu phẩy</i> — "Em, vào sáng nay, đã đi học sớm."</li></ul>',
        'Dấu phẩy giúp người đọc <b>phân biệt</b> trạng ngữ với phần nòng cốt câu.',
      ],
      [
        'Sai — <b>Dấu hai chấm</b> không đúng. Phải chọn <i>Dấu phẩy</i> vì trạng ngữ đầu câu thường tách với nòng cốt bằng dấu phẩy.',
        'Sai — <b>Dấu chấm</b> không đúng. Phải chọn <i>Dấu phẩy</i> vì trạng ngữ đầu câu thường tách với nòng cốt bằng dấu phẩy.',
        'Đúng — <b>Dấu phẩy</b>. Trạng ngữ đầu câu thường tách với nòng cốt bằng dấu phẩy.',
        'Sai — <b>Dấu hỏi</b> không đúng. Phải chọn <i>Dấu phẩy</i> vì trạng ngữ đầu câu thường tách với nòng cốt bằng dấu phẩy.',
      ]
    ),
    Q('Câu nào KHÔNG có trạng ngữ?',
      ['Em đi học.', 'Vì rét, em mặc áo ấm.', 'Tại sân trường, các bạn xếp hàng.', 'Sáng nay, em đi học.'], 0,
      '"Em đi học" chỉ có chủ ngữ + vị ngữ, không có trạng ngữ.',
      [
        '<b>Soi từng câu</b>:',
        '<ul><li>✅ "Em đi học" — chỉ có <b>C–V</b>, <i>không có trạng ngữ</i>.</li><li>❌ "Vì rét, em mặc áo ấm" — có trạng ngữ "Vì rét" (nguyên nhân).</li><li>❌ "Tại sân trường, các bạn xếp hàng" — có trạng ngữ "Tại sân trường" (nơi chốn).</li><li>❌ "Sáng nay, em đi học" — có trạng ngữ "Sáng nay" (thời gian).</li></ul>',
        'Mẹo: trạng ngữ thường đứng <i>đầu câu, ngăn cách bằng dấu phẩy</i>.',
      ],
      [
        'Đúng — <b>Em đi học.</b>. "Em đi học" chỉ có chủ ngữ + vị ngữ, không có trạng ngữ.',
        'Sai — <b>Vì rét, em mặc áo ấm.</b> không đúng. Phải chọn <i>Em đi học.</i> vì "Em đi học" chỉ có chủ ngữ + vị ngữ, không có trạng ngữ.',
        'Sai — <b>Tại sân trường, các bạn xếp hàng.</b> không đúng. Phải chọn <i>Em đi học.</i> vì "Em đi học" chỉ có chủ ngữ + vị ngữ, không có trạng ngữ.',
        'Sai — <b>Sáng nay, em đi học.</b> không đúng. Phải chọn <i>Em đi học.</i> vì "Em đi học" chỉ có chủ ngữ + vị ngữ, không có trạng ngữ.',
      ]
    ),
  ]),

  M(18, 'Ôn tập học kì 1', [
    Q('Tổng hợp: Truyện đồng thoại nổi bật thường dùng thủ pháp?',
      ['Nhân hoá', 'Phỏng vấn', 'Liệt kê', 'Trắc nghiệm'], 0,
      'Nhân hoá là đặc trưng cơ bản của đồng thoại — gán đặc điểm người cho loài vật.',
      [
        '<b>Bản đồ thể loại đã học HK1</b>:',
        '<ul><li><b>Đồng thoại</b>: nhân vật loài vật được <i>nhân hoá</i> (Dế Mèn).</li><li><b>Cổ tích</b>: kiểu nhân vật + kì ảo + kết thúc có hậu.</li><li><b>Truyền thuyết</b>: lõi sự thật lịch sử + kì ảo (Thánh Gióng).</li><li><b>Thơ lục bát</b>: thể thơ 6–8 truyền thống.</li></ul>',
        '"Nhân hoá – tưởng tượng – bài học" là <b>ba từ khoá</b> của đồng thoại.',
      ],
      [
        'Đúng — <b>Nhân hoá</b>. Nhân hoá là đặc trưng cơ bản của đồng thoại — gán đặc điểm người cho loài vật.',
        'Sai — <b>Phỏng vấn</b> không đúng. Phải chọn <i>Nhân hoá</i> vì nhân hoá là đặc trưng cơ bản của đồng thoại — gán đặc điểm người cho loài vật.',
        'Sai — <b>Liệt kê</b> không đúng. Phải chọn <i>Nhân hoá</i> vì nhân hoá là đặc trưng cơ bản của đồng thoại — gán đặc điểm người cho loài vật.',
        'Sai — <b>Trắc nghiệm</b> không đúng. Phải chọn <i>Nhân hoá</i> vì nhân hoá là đặc trưng cơ bản của đồng thoại — gán đặc điểm người cho loài vật.',
      ]
    ),
    Q('Tổng hợp: Truyền thuyết khác cổ tích ở chỗ?',
      ['Có nhiều nhân vật hơn', 'Có lõi sự thật lịch sử', 'Không có yếu tố kì ảo', 'Dài hơn'], 1,
      'Truyền thuyết bám lõi sự kiện/nhân vật lịch sử có thật; cổ tích thì không.',
      [
        '<b>Phân biệt truyền thuyết – cổ tích</b>:',
        '<ul><li><b>Truyền thuyết</b>: có <i>lõi sự thật lịch sử</i>, nhân vật có tên tuổi (Thánh Gióng, Lê Lợi).</li><li><b>Cổ tích</b>: <i>không bám lịch sử</i>, nhân vật theo "kiểu" (Tấm, Thạch Sanh).</li><li>Cả hai đều dùng <b>yếu tố kì ảo</b>.</li></ul>',
      ],
      [
        'Sai — <b>Có nhiều nhân vật hơn</b> không đúng. Phải chọn <i>Có lõi sự thật lịch sử</i> vì truyền thuyết bám lõi sự kiện/nhân vật lịch sử có thật; cổ tích thì không.',
        'Đúng — <b>Có lõi sự thật lịch sử</b>. Truyền thuyết bám lõi sự kiện/nhân vật lịch sử có thật; cổ tích thì không.',
        'Sai — <b>Không có yếu tố kì ảo</b> không đúng. Phải chọn <i>Có lõi sự thật lịch sử</i> vì truyền thuyết bám lõi sự kiện/nhân vật lịch sử có thật; cổ tích thì không.',
        'Sai — <b>Dài hơn</b> không đúng. Phải chọn <i>Có lõi sự thật lịch sử</i> vì truyền thuyết bám lõi sự kiện/nhân vật lịch sử có thật; cổ tích thì không.',
      ]
    ),
    Q('Tổng hợp: Câu lục bát đúng có cấu trúc?',
      ['4 chữ – 4 chữ', '7 chữ – 7 chữ', '6 chữ – 8 chữ luân phiên', '5 chữ – 7 chữ'], 2,
      'Lục (6) – Bát (8) luân phiên, vần móc xích.',
      [
        '<b>Lục bát</b> = <code>6 – 8</code> luân phiên + vần móc xích.',
        '<b>Quy tắc gieo vần</b>:',
        '<ul><li>Tiếng 6 câu lục ↔ tiếng 6 câu bát.</li><li>Tiếng 8 câu bát ↔ tiếng 6 câu lục cặp sau.</li></ul>',
        'Vần là <b>vần bằng</b> — tạo nhạc điệu êm đềm.',
      ],
      [
        'Sai — <b>4 chữ – 4 chữ</b> không đúng. Phải chọn <i>6 chữ – 8 chữ luân phiên</i> vì lục (6) – Bát (8) luân phiên, vần móc xích.',
        'Sai — <b>7 chữ – 7 chữ</b> không đúng. Phải chọn <i>6 chữ – 8 chữ luân phiên</i> vì lục (6) – Bát (8) luân phiên, vần móc xích.',
        'Đúng — <b>6 chữ – 8 chữ luân phiên</b>. Lục (6) – Bát (8) luân phiên, vần móc xích.',
        'Sai — <b>5 chữ – 7 chữ</b> không đúng. Phải chọn <i>6 chữ – 8 chữ luân phiên</i> vì lục (6) – Bát (8) luân phiên, vần móc xích.',
      ]
    ),
    Q('Tổng hợp: "Mặt trời như quả cầu lửa" là phép?',
      ['So sánh', 'Điệp ngữ', 'Hoán dụ', 'Nhân hoá'], 0,
      'Dùng từ "như" — phép so sánh ngang bằng.',
      [
        '<b>Phân tích</b>: "Mặt trời <code>như</code> quả cầu lửa".',
        '<ul><li><b>Vế A</b>: "Mặt trời".</li><li><b>Từ so sánh</b>: "như".</li><li><b>Vế B</b>: "quả cầu lửa".</li></ul>',
        '<b>Tác dụng</b>: gợi hình ảnh mặt trời <i>đỏ rực, nóng bỏng, tròn trịa</i> — sinh động.',
      ],
      [
        'Đúng — <b>So sánh</b>. Dùng từ "như" — phép so sánh ngang bằng. Đây là phương án chính xác theo nội dung bài học.',
        'Sai — <b>Điệp ngữ</b> không đúng. Phải chọn <i>So sánh</i> vì dùng từ "như" — phép so sánh ngang bằng.',
        'Sai — <b>Hoán dụ</b> không đúng. Phải chọn <i>So sánh</i> vì dùng từ "như" — phép so sánh ngang bằng.',
        'Sai — <b>Nhân hoá</b> không đúng. Phải chọn <i>So sánh</i> vì dùng từ "như" — phép so sánh ngang bằng.',
      ]
    ),
    Q('Tổng hợp: "Áo nâu" chỉ "nông dân" là phép?',
      ['Nhân hoá', 'Ẩn dụ', 'Hoán dụ', 'So sánh'], 2,
      'Lấy dấu hiệu trang phục để chỉ tầng lớp người → quan hệ gần gũi → hoán dụ.',
      [
        '<b>Phân tích "áo nâu" → nông dân</b>:',
        '<ul><li>Cơ sở: <i>quan hệ gần gũi</i> (trang phục đặc trưng).</li><li>Kiểu hoán dụ: lấy <b>dấu hiệu</b> để chỉ <b>đối tượng</b>.</li></ul>',
        '⚠️ Phân biệt với ẩn dụ: ẩn dụ dựa trên <b>tương đồng</b>; hoán dụ dựa trên <b>quan hệ gần gũi</b>.',
      ],
      [
        'Sai — <b>Nhân hoá</b> không đúng. Phải chọn <i>Hoán dụ</i> vì lấy dấu hiệu trang phục để chỉ tầng lớp người → quan hệ gần gũi → hoán dụ.',
        'Sai — <b>Ẩn dụ</b> không đúng. Phải chọn <i>Hoán dụ</i> vì lấy dấu hiệu trang phục để chỉ tầng lớp người → quan hệ gần gũi → hoán dụ.',
        'Đúng — <b>Hoán dụ</b>. Lấy dấu hiệu trang phục để chỉ tầng lớp người → quan hệ gần gũi → hoán dụ.',
        'Sai — <b>So sánh</b> không đúng. Phải chọn <i>Hoán dụ</i> vì lấy dấu hiệu trang phục để chỉ tầng lớp người → quan hệ gần gũi → hoán dụ.',
      ]
    ),
    Q('Tổng hợp: Câu "Sáng nay, em đi học." có trạng ngữ là?',
      ['em đi học', 'Sáng nay', 'đi học', 'em'], 1,
      '"Sáng nay" — trạng ngữ chỉ thời gian, tách bằng dấu phẩy.',
      [
        '<b>Phân tích câu</b>:',
        '<ul><li><b>Trạng ngữ</b>: "<b>Sáng nay</b>" — chỉ thời gian.</li><li><b>Chủ ngữ</b>: "em".</li><li><b>Vị ngữ</b>: "đi học".</li></ul>',
        'Dấu phẩy sau "Sáng nay" là <i>quy ước ngữ pháp</i> — tách trạng ngữ với nòng cốt.',
      ],
      [
        'Sai — <b>em đi học</b> không đúng. Phải chọn <i>Sáng nay</i> vì "Sáng nay" — trạng ngữ chỉ thời gian, tách bằng dấu phẩy.',
        'Đúng — <b>Sáng nay</b>. "Sáng nay" — trạng ngữ chỉ thời gian, tách bằng dấu phẩy.',
        'Sai — <b>đi học</b> không đúng. Phải chọn <i>Sáng nay</i> vì "Sáng nay" — trạng ngữ chỉ thời gian, tách bằng dấu phẩy.',
        'Sai — <b>em</b> không đúng. Phải chọn <i>Sáng nay</i> vì "Sáng nay" — trạng ngữ chỉ thời gian, tách bằng dấu phẩy.',
      ]
    ),
    Q('Tổng hợp: "Lung linh" thuộc loại?',
      ['Từ Hán Việt', 'Từ láy bộ phận', 'Từ đơn', 'Từ ghép'], 1,
      'Láy âm "l" + vần khác → láy bộ phận âm đầu.',
      [
        '<b>Phân tích "lung linh"</b>:',
        '<ul><li>Tiếng 1: <b>l</b>ung → âm "l".</li><li>Tiếng 2: <b>l</b>inh → âm "l".</li><li>Vần khác nhau ("ung" và "inh").</li></ul>',
        '→ Cùng phụ âm đầu, khác vần → <b>láy bộ phận âm đầu</b>.',
        '<b>Tác dụng</b>: gợi <i>ánh sáng dao động, lấp lánh</i>.',
      ],
      [
        'Sai — <b>Từ Hán Việt</b> không đúng. Phải chọn <i>Từ láy bộ phận</i> vì láy âm "l" + vần khác → láy bộ phận âm đầu.',
        'Đúng — <b>Từ láy bộ phận</b>. Láy âm "l" + vần khác → láy bộ phận âm đầu. Đây là phương án chính xác theo nội dung bài học.',
        'Sai — <b>Từ đơn</b> không đúng. Phải chọn <i>Từ láy bộ phận</i> vì láy âm "l" + vần khác → láy bộ phận âm đầu.',
        'Sai — <b>Từ ghép</b> không đúng. Phải chọn <i>Từ láy bộ phận</i> vì láy âm "l" + vần khác → láy bộ phận âm đầu.',
      ]
    ),
  ]),

  // ──────────────────── HK2 ────────────────────

  M(19, 'Ký, hồi ký (1): Đặc trưng thể loại', [
    Q('Ký là thể loại?',
      ['Chỉ ghi số liệu', 'Đặt theo cốt truyện cổ tích', 'Ghi chép sự việc, con người có thật bằng cảm nhận của người viết', 'Hoàn toàn hư cấu'], 2,
      'Ký = ghi chép sự việc, con người có thật, đan xen cảm nhận chủ quan của người viết.',
      [
        '<b>Ký</b> là thể loại văn học ghi chép <i>sự việc, con người có thật</i> bằng <b>cảm nhận chủ quan</b> của người viết.',
        '<b>Đặc trưng</b>:',
        '<ul><li>Có yếu tố <b>thật</b>: con người, sự việc, không gian, thời gian.</li><li>Có cái "<b>tôi</b>" của người viết — không giấu mình.</li><li>Ngôn ngữ giàu hình ảnh, giàu cảm xúc.</li><li>Có thể kết hợp tự sự, miêu tả, biểu cảm, nghị luận.</li></ul>',
        '⚠️ Khác báo chí (chỉ thông tin khô khan) — ký <i>thấm đẫm cảm xúc, suy ngẫm</i> của tác giả.',
      ],
      [
        'Sai — <b>Chỉ ghi số liệu</b> không đúng. Phải chọn <i>Ghi chép sự việc, con người có thật bằng cảm nhận của người viết</i> vì ký = ghi chép sự việc, con người có thật, đan xen cảm nhận chủ quan của người viết.',
        'Sai — <b>Đặt theo cốt truyện cổ tích</b> không đúng. Phải chọn <i>Ghi chép sự việc, con người có thật bằng cảm nhận của người viết</i> vì ký = ghi chép sự việc, con người có thật, đan xen cảm nhận chủ quan của người viết.',
        'Đúng — <b>Ghi chép sự việc, con người có thật bằng cảm nhận của người viết</b>. Ký = ghi chép sự việc, con người có thật, đan xen cảm nhận chủ quan của người viết.',
        'Sai — <b>Hoàn toàn hư cấu</b> không đúng. Phải chọn <i>Ghi chép sự việc, con người có thật bằng cảm nhận của người viết</i> vì ký = ghi chép sự việc, con người có thật, đan xen cảm nhận chủ quan của người viết.',
      ]
    ),
    Q('Đặc điểm chung của ký là?',
      ['Không có cảm xúc', 'Có yếu tố thật + cái "tôi" trữ tình của người viết', 'Hoàn toàn tưởng tượng', 'Chỉ kể lại như sử'], 1,
      'Ký kết hợp yếu tố thật + cái "tôi" trữ tình bộc lộ cảm xúc trực tiếp.',
      [
        '<b>Hai đặc điểm cốt lõi</b> của ký:',
        '<ul><li><b>Yếu tố thật</b>: bám sát hiện thực, không bịa đặt cốt truyện.</li><li><b>Cái "tôi" trữ tình</b>: người viết hiện diện qua cảm xúc, suy ngẫm.</li></ul>',
        'Cái "tôi" làm ký <i>khác với phóng sự, biên niên</i> (vốn cần khách quan).',
        'Ngôn ngữ ký <b>giàu hình ảnh, giàu cảm xúc</b> — vẫn là văn học, không phải báo chí.',
      ],
      [
        'Sai — <b>Không có cảm xúc</b> không đúng. Phải chọn <i>Có yếu tố thật + cái "tôi" trữ tình của người viết</i> vì ký kết hợp yếu tố thật + cái "tôi" trữ tình bộc lộ cảm xúc trực tiếp.',
        'Đúng — <b>Có yếu tố thật + cái "tôi" trữ tình của người viết</b>. Ký kết hợp yếu tố thật + cái "tôi" trữ tình bộc lộ cảm xúc trực tiếp.',
        'Sai — <b>Hoàn toàn tưởng tượng</b> không đúng. Phải chọn <i>Có yếu tố thật + cái "tôi" trữ tình của người viết</i> vì ký kết hợp yếu tố thật + cái "tôi" trữ tình bộc lộ cảm xúc trực tiếp.',
        'Sai — <b>Chỉ kể lại như sử</b> không đúng. Phải chọn <i>Có yếu tố thật + cái "tôi" trữ tình của người viết</i> vì ký kết hợp yếu tố thật + cái "tôi" trữ tình bộc lộ cảm xúc trực tiếp.',
      ]
    ),
    Q('Hồi ký là ký kể về?',
      ['Sự việc đã qua trong cuộc đời người viết hoặc người khác', 'Truyền thuyết', 'Cổ tích', 'Tương lai'], 0,
      '"Hồi" = nhớ lại → hồi ký kể về sự việc quá khứ trong cuộc đời người viết.',
      [
        '<b>Hồi ký</b> = "hồi" (nhớ lại) + "ký" — ký về <i>quá khứ</i>.',
        '<b>Đặc điểm</b>:',
        '<ul><li>Kể về <i>sự việc đã qua</i> trong cuộc đời người viết hoặc người mà tác giả quen biết.</li><li>Ngôi kể thường là <b>ngôi thứ nhất</b> — "tôi" xưng tên.</li><li>Cảm xúc đậm nét: nhớ thương, biết ơn, day dứt, ăn năn…</li><li>Chi tiết nhỏ thường rất <b>đắt</b> — một mùi hương, một ánh nhìn của mẹ.</li></ul>',
      ],
      [
        'Đúng — <b>Sự việc đã qua trong cuộc đời người viết hoặc người khác</b>. "Hồi" = nhớ lại → hồi ký kể về sự việc quá khứ trong cuộc đời người viết.',
        'Sai — <b>Truyền thuyết</b> không đúng. Phải chọn <i>Sự việc đã qua trong cuộc đời người viết hoặc người khác</i> vì "Hồi" = nhớ lại → hồi ký kể về sự việc quá khứ trong cuộc đời người viết.',
        'Sai — <b>Cổ tích</b> không đúng. Phải chọn <i>Sự việc đã qua trong cuộc đời người viết hoặc người khác</i> vì "Hồi" = nhớ lại → hồi ký kể về sự việc quá khứ trong cuộc đời người viết.',
        'Sai — <b>Tương lai</b> không đúng. Phải chọn <i>Sự việc đã qua trong cuộc đời người viết hoặc người khác</i> vì "Hồi" = nhớ lại → hồi ký kể về sự việc quá khứ trong cuộc đời người viết.',
      ]
    ),
    Q('Ngôi kể thường dùng trong hồi ký?',
      ['Ngôi thứ ba toàn tri', 'Ngôi thứ hai', 'Ngôi thứ nhất "tôi"', 'Không xác định'], 2,
      'Hồi ký dùng ngôi thứ nhất — người kể là người trong cuộc, xưng "tôi".',
      [
        '<b>Ngôi thứ nhất</b> trong hồi ký:',
        '<ul><li>Người kể xưng "<b>tôi</b>" — chính là tác giả.</li><li>Là <i>dòng hồi tưởng</i> của chính người viết về quá khứ.</li><li>Cảm xúc, suy ngẫm cá nhân được bộc lộ trực tiếp.</li></ul>',
        '<b>Ưu thế</b>: giúp lời kể <i>chân thực, gần gũi</i>; người đọc cảm nhận cảm xúc trực tiếp.',
        'Ví dụ tiêu biểu: "Trong lòng mẹ" (Nguyên Hồng), "Tuổi thơ tôi" (Nguyễn Nhật Ánh).',
      ],
      [
        'Sai — <b>Ngôi thứ ba toàn tri</b> không đúng. Phải chọn <i>Ngôi thứ nhất "tôi"</i> vì hồi ký dùng ngôi thứ nhất — người kể là người trong cuộc, xưng "tôi".',
        'Sai — <b>Ngôi thứ hai</b> không đúng. Phải chọn <i>Ngôi thứ nhất "tôi"</i> vì hồi ký dùng ngôi thứ nhất — người kể là người trong cuộc, xưng "tôi".',
        'Đúng — <b>Ngôi thứ nhất "tôi"</b>. Hồi ký dùng ngôi thứ nhất — người kể là người trong cuộc, xưng "tôi".',
        'Sai — <b>Không xác định</b> không đúng. Phải chọn <i>Ngôi thứ nhất "tôi"</i> vì hồi ký dùng ngôi thứ nhất — người kể là người trong cuộc, xưng "tôi".',
      ]
    ),
    Q('Ưu thế của ngôi thứ nhất trong hồi ký?',
      ['Khô khan', 'Lạnh lùng', 'Chân thực, cảm xúc trực tiếp', 'Khó hiểu'], 2,
      '"Tôi" làm câu chuyện chân thực, gần gũi, cảm xúc dâng trào trực tiếp.',
      [
        '<b>Ưu thế của ngôi 1</b> trong hồi ký:',
        '<ul><li><b>Chân thực</b> — như tác giả tự tâm sự.</li><li><b>Gần gũi</b> — không có khoảng cách "kể chuyện đời người khác".</li><li><b>Cảm xúc trực tiếp</b> — nhớ thương, day dứt, biết ơn… dâng trào.</li><li><b>Cá nhân hoá</b> — chi tiết nhỏ trở nên đắc địa.</li></ul>',
        '⚠️ Nhược điểm: chỉ thấy được những gì <i>"tôi" biết</i> — góc nhìn hạn chế.',
      ],
      [
        'Sai — <b>Khô khan</b> không đúng. Phải chọn <i>Chân thực, cảm xúc trực tiếp</i> vì "Tôi" làm câu chuyện chân thực, gần gũi, cảm xúc dâng trào trực tiếp.',
        'Sai — <b>Lạnh lùng</b> không đúng. Phải chọn <i>Chân thực, cảm xúc trực tiếp</i> vì "Tôi" làm câu chuyện chân thực, gần gũi, cảm xúc dâng trào trực tiếp.',
        'Đúng — <b>Chân thực, cảm xúc trực tiếp</b>. "Tôi" làm câu chuyện chân thực, gần gũi, cảm xúc dâng trào trực tiếp.',
        'Sai — <b>Khó hiểu</b> không đúng. Phải chọn <i>Chân thực, cảm xúc trực tiếp</i> vì "Tôi" làm câu chuyện chân thực, gần gũi, cảm xúc dâng trào trực tiếp.',
      ]
    ),
    Q('Ký khác truyện hư cấu ở điểm cốt lõi?',
      ['Bịa hoàn toàn', 'Tôn trọng sự thật của sự việc, con người', 'Có ít từ hơn', 'Có nhiều thoại hơn'], 1,
      'Ký bám sát sự thật, dù vẫn có cảm nhận chủ quan; truyện hư cấu xây từ tưởng tượng.',
      [
        '<b>Phân biệt ký và truyện hư cấu</b>:',
        '<ul><li><b>Ký</b>: <i>tôn trọng sự thật</i>, không bịa đặt cốt truyện; dựa trên đời thật của tác giả/nhân vật có thật.</li><li><b>Truyện hư cấu</b>: xây dựng nhân vật, tình huống <i>tưởng tượng</i>.</li></ul>',
        'Ký <b>vẫn là văn học</b> chứ không phải báo chí — vì có cảm xúc, có phong cách nghệ thuật, có nghệ thuật ngôn từ.',
        'Đây là <i>ranh giới quan trọng</i> để phân biệt ký với các thể loại khác.',
      ],
      [
        'Sai — <b>Bịa hoàn toàn</b> không đúng. Phải chọn <i>Tôn trọng sự thật của sự việc, con người</i> vì ký bám sát sự thật, dù vẫn có cảm nhận chủ quan; truyện hư cấu xây từ tưởng tượng.',
        'Đúng — <b>Tôn trọng sự thật của sự việc, con người</b>. Ký bám sát sự thật, dù vẫn có cảm nhận chủ quan; truyện hư cấu xây từ tưởng tượng.',
        'Sai — <b>Có ít từ hơn</b> không đúng. Phải chọn <i>Tôn trọng sự thật của sự việc, con người</i> vì ký bám sát sự thật, dù vẫn có cảm nhận chủ quan; truyện hư cấu xây từ tưởng tượng.',
        'Sai — <b>Có nhiều thoại hơn</b> không đúng. Phải chọn <i>Tôn trọng sự thật của sự việc, con người</i> vì ký bám sát sự thật, dù vẫn có cảm nhận chủ quan; truyện hư cấu xây từ tưởng tượng.',
      ]
    ),
  ]),

  M(20, 'Ký, hồi ký (2): Đọc – cảm nhận', [
    Q('Khi đọc một đoạn hồi ký, cần chú ý?',
      ['Chỉ số chữ', 'Chỉ dấu câu', 'Sự việc, không gian, thời gian và cảm xúc người viết', 'Chỉ tốc độ đọc'], 2,
      'Đọc ký = nắm "ai – ở đâu – khi nào – cảm thế nào".',
      [
        '<b>Bốn yếu tố cần chú ý</b> khi đọc hồi ký:',
        '<ul><li><b>Sự việc</b>: chuyện gì đã xảy ra?</li><li><b>Không gian, thời gian</b>: ở đâu, khi nào?</li><li><b>Cảm xúc người viết</b>: vui, buồn, nhớ thương, biết ơn?</li><li><b>Bài học, suy ngẫm</b>: tác giả muốn gửi gắm điều gì?</li></ul>',
        '⚠️ Đọc hồi ký <i>không chỉ để biết "chuyện gì xảy ra"</i>, mà để rung lên cùng kỉ niệm tác giả gửi gắm.',
      ],
      [
        'Sai — <b>Chỉ số chữ</b> không đúng. Phải chọn <i>Sự việc, không gian, thời gian và cảm xúc người viết</i> vì đọc ký = nắm "ai – ở đâu – khi nào – cảm thế nào".',
        'Sai — <b>Chỉ dấu câu</b> không đúng. Phải chọn <i>Sự việc, không gian, thời gian và cảm xúc người viết</i> vì đọc ký = nắm "ai – ở đâu – khi nào – cảm thế nào".',
        'Đúng — <b>Sự việc, không gian, thời gian và cảm xúc người viết</b>. Đọc ký = nắm "ai – ở đâu – khi nào – cảm thế nào".',
        'Sai — <b>Chỉ tốc độ đọc</b> không đúng. Phải chọn <i>Sự việc, không gian, thời gian và cảm xúc người viết</i> vì đọc ký = nắm "ai – ở đâu – khi nào – cảm thế nào".',
      ]
    ),
    Q('Trong hồi ký, chi tiết nhỏ thường có tác dụng?',
      ['Không có vai trò gì', 'Làm câu dài', 'Gợi cảm xúc sâu sắc, làm sống dậy kỉ niệm', 'Đánh đố người đọc'], 2,
      'Chi tiết nhỏ trong hồi ký rất đắt — làm sống lại kí ức và gợi cảm xúc sâu sắc.',
      [
        '<b>Sức nặng của chi tiết nhỏ</b> trong hồi ký:',
        '<ul><li>Cái <b>mũi mồ hôi</b> trên trán mẹ.</li><li>Mùi <b>cháo gà</b> bà nấu.</li><li>Tiếng <b>ru hời</b> của bà cụ hàng xóm.</li></ul>',
        'Những chi tiết tưởng vụn vặt ấy chính là "<i>linh hồn</i>" của hồi ký — làm sống dậy cả một vùng kí ức.',
        'Đó là lí do hồi ký hay không nằm ở chuyện lớn, mà ở <b>chi tiết thật và cảm xúc thật</b>.',
      ],
      [
        'Sai — <b>Không có vai trò gì</b> không đúng. Phải chọn <i>Gợi cảm xúc sâu sắc, làm sống dậy kỉ niệm</i> vì chi tiết nhỏ trong hồi ký rất đắt — làm sống lại kí ức và gợi cảm xúc sâu sắc.',
        'Sai — <b>Làm câu dài</b> không đúng. Phải chọn <i>Gợi cảm xúc sâu sắc, làm sống dậy kỉ niệm</i> vì chi tiết nhỏ trong hồi ký rất đắt — làm sống lại kí ức và gợi cảm xúc sâu sắc.',
        'Đúng — <b>Gợi cảm xúc sâu sắc, làm sống dậy kỉ niệm</b>. Chi tiết nhỏ trong hồi ký rất đắt — làm sống lại kí ức và gợi cảm xúc sâu sắc.',
        'Sai — <b>Đánh đố người đọc</b> không đúng. Phải chọn <i>Gợi cảm xúc sâu sắc, làm sống dậy kỉ niệm</i> vì chi tiết nhỏ trong hồi ký rất đắt — làm sống lại kí ức và gợi cảm xúc sâu sắc.',
      ]
    ),
    Q('Cái "tôi" trong hồi ký thường?',
      ['Im lặng', 'Không hiện diện', 'Vừa kể vừa bộc lộ cảm xúc, suy ngẫm', 'Chỉ kể khô khan'], 2,
      'Cái "tôi" trữ tình vừa kể chuyện, vừa bộc lộ cảm xúc và suy ngẫm — linh hồn của ký.',
      [
        '<b>Cái "tôi" trữ tình</b> trong hồi ký:',
        '<ul><li>Vừa là <i>người chứng kiến</i> (kể sự việc).</li><li>Vừa là <i>người cảm nhận</i> (bộc lộ cảm xúc, suy ngẫm).</li></ul>',
        '"Tôi" <b>không đứng ngoài</b> mà nhập cuộc — vui buồn cùng câu chuyện.',
        'Đó là <i>khác biệt lớn</i> so với phóng sự, biên niên (vốn cần khách quan).',
      ],
      [
        'Sai — <b>Im lặng</b> không đúng. Phải chọn <i>Vừa kể vừa bộc lộ cảm xúc, suy ngẫm</i> vì cái "tôi" trữ tình vừa kể chuyện, vừa bộc lộ cảm xúc và suy ngẫm — linh hồn của ký.',
        'Sai — <b>Không hiện diện</b> không đúng. Phải chọn <i>Vừa kể vừa bộc lộ cảm xúc, suy ngẫm</i> vì cái "tôi" trữ tình vừa kể chuyện, vừa bộc lộ cảm xúc và suy ngẫm — linh hồn của ký.',
        'Đúng — <b>Vừa kể vừa bộc lộ cảm xúc, suy ngẫm</b>. Cái "tôi" trữ tình vừa kể chuyện, vừa bộc lộ cảm xúc và suy ngẫm — linh hồn của ký.',
        'Sai — <b>Chỉ kể khô khan</b> không đúng. Phải chọn <i>Vừa kể vừa bộc lộ cảm xúc, suy ngẫm</i> vì cái "tôi" trữ tình vừa kể chuyện, vừa bộc lộ cảm xúc và suy ngẫm — linh hồn của ký.',
      ]
    ),
    Q('Hồi ký "Tuổi thơ tôi" thường gợi cảm hứng?',
      ['Hận thù', 'Trân quý kỉ niệm, lòng biết ơn', 'Dửng dưng', 'Sợ hãi'], 1,
      'Hồi ký tuổi thơ gợi cảm hứng trân quý kỉ niệm, biết ơn quá khứ và người thân.',
      [
        '<b>Hồi ký tuổi thơ</b> thường gợi:',
        '<ul><li><b>Trân quý kỉ niệm</b> — những điều nhỏ bé một thời.</li><li><b>Lòng biết ơn</b> — ông bà, cha mẹ, thầy cô.</li><li><b>Hoài niệm</b> — nỗi nhớ về một thời đã qua.</li></ul>',
        '⚠️ Văn học không phải nơi của hận thù hay dửng dưng — đặc biệt với mảng hồi ký tuổi thơ.',
      ],
      [
        'Sai — <b>Hận thù</b> không đúng. Phải chọn <i>Trân quý kỉ niệm, lòng biết ơn</i> vì hồi ký tuổi thơ gợi cảm hứng trân quý kỉ niệm, biết ơn quá khứ và người thân.',
        'Đúng — <b>Trân quý kỉ niệm, lòng biết ơn</b>. Hồi ký tuổi thơ gợi cảm hứng trân quý kỉ niệm, biết ơn quá khứ và người thân.',
        'Sai — <b>Dửng dưng</b> không đúng. Phải chọn <i>Trân quý kỉ niệm, lòng biết ơn</i> vì hồi ký tuổi thơ gợi cảm hứng trân quý kỉ niệm, biết ơn quá khứ và người thân.',
        'Sai — <b>Sợ hãi</b> không đúng. Phải chọn <i>Trân quý kỉ niệm, lòng biết ơn</i> vì hồi ký tuổi thơ gợi cảm hứng trân quý kỉ niệm, biết ơn quá khứ và người thân.',
      ]
    ),
    Q('Khi viết một đoạn hồi ký ngắn về kỉ niệm, cần?',
      ['Kể cụ thể + bộc lộ cảm xúc', 'Liệt kê khô khan', 'Chỉ tả ngoại hình', 'Chỉ ghi ngày tháng'], 0,
      'Sự kiện cụ thể + cảm xúc chân thật mới làm nên hồi ký.',
      [
        '<b>Cách viết một đoạn hồi ký</b>:',
        '<ul><li>Chọn một <b>kỉ niệm thật</b>, có ý nghĩa với em.</li><li>Kể <b>cụ thể</b>: thời gian, không gian, nhân vật, sự việc.</li><li>Bộc lộ <b>cảm xúc</b> — không sợ "đậm chất tôi".</li><li>Kết: rút ra <b>cảm nghĩ, bài học</b>.</li></ul>',
        'Hồi ký hay nằm ở <i>cảm xúc thật</i> — không cần chuyện lớn.',
      ],
      [
        'Đúng — <b>Kể cụ thể + bộc lộ cảm xúc</b>. Sự kiện cụ thể + cảm xúc chân thật mới làm nên hồi ký.',
        'Sai — <b>Liệt kê khô khan</b> không đúng. Phải chọn <i>Kể cụ thể + bộc lộ cảm xúc</i> vì sự kiện cụ thể + cảm xúc chân thật mới làm nên hồi ký.',
        'Sai — <b>Chỉ tả ngoại hình</b> không đúng. Phải chọn <i>Kể cụ thể + bộc lộ cảm xúc</i> vì sự kiện cụ thể + cảm xúc chân thật mới làm nên hồi ký.',
        'Sai — <b>Chỉ ghi ngày tháng</b> không đúng. Phải chọn <i>Kể cụ thể + bộc lộ cảm xúc</i> vì sự kiện cụ thể + cảm xúc chân thật mới làm nên hồi ký.',
      ]
    ),
    Q('Ngôn ngữ ký thường?',
      ['Toàn số liệu', 'Toàn kí hiệu', 'Giàu hình ảnh, giàu cảm xúc', 'Khô khan như báo cáo'], 2,
      'Ký nghiêng về văn học → ngôn ngữ giàu hình ảnh, giàu cảm xúc, có nhạc tính.',
      [
        '<b>Ngôn ngữ ký</b>:',
        '<ul><li><b>Giàu hình ảnh</b> — gợi nhìn, gợi nghe, gợi ngửi.</li><li><b>Giàu cảm xúc</b> — chứa tâm tư người viết.</li><li><b>Có nhạc tính</b> — câu văn nhịp nhàng, có tiết tấu.</li></ul>',
        '⚠️ Không phải <i>"toàn số liệu"</i> (như báo cáo) hay <i>"khô khan"</i> (như công văn).',
        'Vì ký là <b>văn học</b>, không phải báo chí thuần tuý.',
      ],
      [
        'Sai — <b>Toàn số liệu</b> không đúng. Phải chọn <i>Giàu hình ảnh, giàu cảm xúc</i> vì ký nghiêng về văn học → ngôn ngữ giàu hình ảnh, giàu cảm xúc, có nhạc tính.',
        'Sai — <b>Toàn kí hiệu</b> không đúng. Phải chọn <i>Giàu hình ảnh, giàu cảm xúc</i> vì ký nghiêng về văn học → ngôn ngữ giàu hình ảnh, giàu cảm xúc, có nhạc tính.',
        'Đúng — <b>Giàu hình ảnh, giàu cảm xúc</b>. Ký nghiêng về văn học → ngôn ngữ giàu hình ảnh, giàu cảm xúc, có nhạc tính.',
        'Sai — <b>Khô khan như báo cáo</b> không đúng. Phải chọn <i>Giàu hình ảnh, giàu cảm xúc</i> vì ký nghiêng về văn học → ngôn ngữ giàu hình ảnh, giàu cảm xúc, có nhạc tính.',
      ]
    ),
  ]),

  M(21, 'Thơ có yếu tố tự sự, miêu tả (1)', [
    Q('Thơ có yếu tố tự sự là loại thơ?',
      ['Chỉ bộc lộ cảm xúc thuần tuý', 'Có kể lại sự việc/câu chuyện trong bài', 'Chỉ miêu tả', 'Không có nhân vật'], 1,
      'Thơ tự sự = thơ có "kể chuyện" qua các sự việc, nhân vật, diễn biến.',
      [
        '<b>Thơ có yếu tố tự sự</b> là thơ có <i>kể lại sự việc, câu chuyện</i>, có nhân vật và diễn biến.',
        '<b>Khác với thơ trữ tình thuần</b> — chỉ bộc lộ cảm xúc — thơ tự sự "<b>có cốt</b>", có chuyện để kể.',
        'Ví dụ: bài thơ "<b>Lượm</b>" (Tố Hữu) kể về chú bé Lượm làm liên lạc, hy sinh trên cánh đồng — đó là một câu chuyện được kể bằng thơ.',
        'Các bài "Đêm nay Bác không ngủ" (Minh Huệ) cũng là thơ có yếu tố tự sự đậm.',
      ],
      [
        'Sai — <b>Chỉ bộc lộ cảm xúc thuần tuý</b> không đúng. Phải chọn <i>Có kể lại sự việc/câu chuyện trong bài</i> vì thơ tự sự = thơ có "kể chuyện" qua các sự việc, nhân vật, diễn biến.',
        'Đúng — <b>Có kể lại sự việc/câu chuyện trong bài</b>. Thơ tự sự = thơ có "kể chuyện" qua các sự việc, nhân vật, diễn biến.',
        'Sai — <b>Chỉ miêu tả</b> không đúng. Phải chọn <i>Có kể lại sự việc/câu chuyện trong bài</i> vì thơ tự sự = thơ có "kể chuyện" qua các sự việc, nhân vật, diễn biến.',
        'Sai — <b>Không có nhân vật</b> không đúng. Phải chọn <i>Có kể lại sự việc/câu chuyện trong bài</i> vì thơ tự sự = thơ có "kể chuyện" qua các sự việc, nhân vật, diễn biến.',
      ]
    ),
    Q('Thơ có yếu tố miêu tả khi?',
      ['Có nhiều hình ảnh tả người, cảnh, vật', 'Chỉ có lập luận', 'Chỉ có thoại', 'Chỉ có số liệu'], 0,
      'Thơ có yếu tố miêu tả khi xuất hiện nhiều hình ảnh tả người, cảnh, vật cô đọng.',
      [
        '<b>Thơ có yếu tố miêu tả</b>: có nhiều hình ảnh tả người, tả cảnh, tả vật.',
        '<b>Đặc điểm hình ảnh thơ</b>:',
        '<ul><li>Cô đọng, giàu sức gợi hơn miêu tả văn xuôi.</li><li>Thường kèm phép tu từ (so sánh, nhân hoá, ẩn dụ).</li><li>Có nhạc tính, nhịp điệu.</li></ul>',
        'Ví dụ: "<i>Mặt trời xuống biển như hòn lửa / Sóng đã cài then, đêm sập cửa</i>" — vừa tả mặt trời lặn, vừa nhân hoá đêm biển.',
      ],
      [
        'Đúng — <b>Có nhiều hình ảnh tả người, cảnh, vật</b>. Thơ có yếu tố miêu tả khi xuất hiện nhiều hình ảnh tả người, cảnh, vật cô đọng.',
        'Sai — <b>Chỉ có lập luận</b> không đúng. Phải chọn <i>Có nhiều hình ảnh tả người, cảnh, vật</i> vì thơ có yếu tố miêu tả khi xuất hiện nhiều hình ảnh tả người, cảnh, vật cô đọng.',
        'Sai — <b>Chỉ có thoại</b> không đúng. Phải chọn <i>Có nhiều hình ảnh tả người, cảnh, vật</i> vì thơ có yếu tố miêu tả khi xuất hiện nhiều hình ảnh tả người, cảnh, vật cô đọng.',
        'Sai — <b>Chỉ có số liệu</b> không đúng. Phải chọn <i>Có nhiều hình ảnh tả người, cảnh, vật</i> vì thơ có yếu tố miêu tả khi xuất hiện nhiều hình ảnh tả người, cảnh, vật cô đọng.',
      ]
    ),
    Q('Yếu tố tự sự trong thơ giúp?',
      ['Bài thơ dài hơn', 'Triệt tiêu cảm xúc', 'Câu chuyện sinh động, dễ hình dung', 'Câu thơ khó hiểu'], 2,
      'Tự sự trong thơ giúp câu chuyện sinh động, dễ hình dung — vừa kể vừa lay động cảm xúc.',
      [
        '<b>Tác dụng của yếu tố tự sự</b> trong thơ:',
        '<ul><li>Câu chuyện <b>sinh động</b>, có nhân vật, có diễn biến.</li><li>Người đọc <b>dễ hình dung</b> sự việc.</li><li>Cảm xúc trở nên <b>cụ thể</b> qua câu chuyện.</li></ul>',
        'Tự sự + thơ → vừa <i>kể</i> vừa <i>lay động cảm xúc</i> — sức mạnh đặc biệt của thơ tự sự.',
      ],
      [
        'Sai — <b>Bài thơ dài hơn</b> không đúng. Phải chọn <i>Câu chuyện sinh động, dễ hình dung</i> vì tự sự trong thơ giúp câu chuyện sinh động, dễ hình dung — vừa kể vừa lay động cảm xúc.',
        'Sai — <b>Triệt tiêu cảm xúc</b> không đúng. Phải chọn <i>Câu chuyện sinh động, dễ hình dung</i> vì tự sự trong thơ giúp câu chuyện sinh động, dễ hình dung — vừa kể vừa lay động cảm xúc.',
        'Đúng — <b>Câu chuyện sinh động, dễ hình dung</b>. Tự sự trong thơ giúp câu chuyện sinh động, dễ hình dung — vừa kể vừa lay động cảm xúc.',
        'Sai — <b>Câu thơ khó hiểu</b> không đúng. Phải chọn <i>Câu chuyện sinh động, dễ hình dung</i> vì tự sự trong thơ giúp câu chuyện sinh động, dễ hình dung — vừa kể vừa lay động cảm xúc.',
      ]
    ),
    Q('Bài thơ có hình ảnh "mẹ đội nón ra đồng" — đó là yếu tố?',
      ['Miêu tả', 'Số liệu', 'Đối thoại', 'Lập luận'], 0,
      'Hình ảnh cụ thể "mẹ đội nón ra đồng" → yếu tố miêu tả.',
      [
        '<b>Phân tích hình ảnh</b> "mẹ đội nón ra đồng":',
        '<ul><li>Có <b>nhân vật</b>: mẹ.</li><li>Có <b>chi tiết cụ thể</b>: đội nón, ra đồng.</li><li>Gợi <b>hình ảnh trực quan</b>: dáng mẹ tần tảo, vất vả.</li></ul>',
        '→ Đây là <b>yếu tố miêu tả</b> — vẽ ra hình ảnh để người đọc hình dung.',
        'Nếu đặt trong một bài thơ, hình ảnh này còn gửi gắm <i>tình yêu, lòng biết ơn</i> với mẹ.',
      ],
      [
        'Đúng — <b>Miêu tả</b>. Hình ảnh cụ thể "mẹ đội nón ra đồng" → yếu tố miêu tả. Đây là phương án chính xác theo nội dung bài học.',
        'Sai — <b>Số liệu</b> không đúng. Phải chọn <i>Miêu tả</i> vì hình ảnh cụ thể "mẹ đội nón ra đồng" → yếu tố miêu tả.',
        'Sai — <b>Đối thoại</b> không đúng. Phải chọn <i>Miêu tả</i> vì hình ảnh cụ thể "mẹ đội nón ra đồng" → yếu tố miêu tả.',
        'Sai — <b>Lập luận</b> không đúng. Phải chọn <i>Miêu tả</i> vì hình ảnh cụ thể "mẹ đội nón ra đồng" → yếu tố miêu tả.',
      ]
    ),
    Q('Khi đọc thơ có yếu tố tự sự, cần chú ý?',
      ['Chỉ số dòng', 'Chỉ vần điệu', 'Cốt sự việc + cảm xúc tác giả gửi gắm', 'Chỉ tên tác giả'], 2,
      'Hiểu sự việc → mới hiểu cảm xúc và thông điệp tác giả gửi gắm.',
      [
        '<b>Cách đọc thơ có yếu tố tự sự</b>:',
        '<ul><li>Nắm <b>cốt sự việc</b>: ai – làm gì – ở đâu.</li><li>Hình dung <b>hình ảnh</b> được tả.</li><li>Cảm nhận <b>cảm xúc</b>, thái độ tác giả.</li><li>Suy ngẫm <b>thông điệp</b>.</li></ul>',
        'Hiểu sự việc → mới hiểu cảm xúc → mới chạm được thông điệp.',
      ],
      [
        'Sai — <b>Chỉ số dòng</b> không đúng. Phải chọn <i>Cốt sự việc + cảm xúc tác giả gửi gắm</i> vì hiểu sự việc → mới hiểu cảm xúc và thông điệp tác giả gửi gắm.',
        'Sai — <b>Chỉ vần điệu</b> không đúng. Phải chọn <i>Cốt sự việc + cảm xúc tác giả gửi gắm</i> vì hiểu sự việc → mới hiểu cảm xúc và thông điệp tác giả gửi gắm.',
        'Đúng — <b>Cốt sự việc + cảm xúc tác giả gửi gắm</b>. Hiểu sự việc → mới hiểu cảm xúc và thông điệp tác giả gửi gắm.',
        'Sai — <b>Chỉ tên tác giả</b> không đúng. Phải chọn <i>Cốt sự việc + cảm xúc tác giả gửi gắm</i> vì hiểu sự việc → mới hiểu cảm xúc và thông điệp tác giả gửi gắm.',
      ]
    ),
    Q('Tự sự và trữ tình trong thơ?',
      ['Trái nghĩa hoàn toàn', 'Là một', 'Không bao giờ gặp nhau', 'Có thể đan xen, bổ trợ cho nhau'], 3,
      'Thơ hiện đại thường đan xen kể – tả – cảm; tự sự và trữ tình bổ trợ cho nhau.',
      [
        '<b>Sự hoà quyện kể – tả – cảm</b> trong thơ hiện đại:',
        '<ul><li><b>Kể</b> (tự sự): sự việc, diễn biến.</li><li><b>Tả</b> (miêu tả): hình ảnh cụ thể.</li><li><b>Cảm</b> (trữ tình): cảm xúc, suy ngẫm.</li></ul>',
        'Ba yếu tố <i>đan xen, bổ trợ cho nhau</i> — không tách rời.',
        'Ví dụ "Lượm": vừa kể chuyện chú bé Lượm, vừa tả ngoại hình, vừa bộc lộ tình cảm.',
      ],
      [
        'Sai — <b>Trái nghĩa hoàn toàn</b> không đúng. Phải chọn <i>Có thể đan xen, bổ trợ cho nhau</i> vì thơ hiện đại thường đan xen kể – tả – cảm; tự sự và trữ tình bổ trợ cho nhau.',
        'Sai — <b>Là một</b> không đúng. Phải chọn <i>Có thể đan xen, bổ trợ cho nhau</i> vì thơ hiện đại thường đan xen kể – tả – cảm; tự sự và trữ tình bổ trợ cho nhau.',
        'Sai — <b>Không bao giờ gặp nhau</b> không đúng. Phải chọn <i>Có thể đan xen, bổ trợ cho nhau</i> vì thơ hiện đại thường đan xen kể – tả – cảm; tự sự và trữ tình bổ trợ cho nhau.',
        'Đúng — <b>Có thể đan xen, bổ trợ cho nhau</b>. Thơ hiện đại thường đan xen kể – tả – cảm; tự sự và trữ tình bổ trợ cho nhau.',
      ]
    ),
  ]),

  M(22, 'Thơ có yếu tố tự sự, miêu tả (2)', [
    Q('Trong câu thơ "Mẹ ru cái lẽ ở đời / Sữa nuôi phần xác, hát nuôi phần hồn", yếu tố nổi bật là?',
      ['Trữ tình (cảm xúc về mẹ) + chút tự sự', 'Lập luận', 'Đối thoại', 'Số liệu'], 0,
      'Câu thơ giàu cảm xúc về mẹ + có yếu tố tự sự (kể việc mẹ ru con) → trữ tình + tự sự.',
      [
        '<b>Phân tích câu thơ</b> "Mẹ ru cái lẽ ở đời / Sữa nuôi phần xác, hát nuôi phần hồn":',
        '<ul><li><b>Tự sự</b>: kể việc <i>mẹ ru con</i>.</li><li><b>Trữ tình</b>: tình yêu, biết ơn mẹ.</li><li><b>Triết lí</b>: "sữa – hát" nuôi "xác – hồn".</li></ul>',
        '<b>Tác dụng</b>: chỉ 2 dòng mà <i>gói trọn công lao mẹ</i> — vật chất và tinh thần.',
        'Phép đối "<code>sữa – hát</code>" và "<code>xác – hồn</code>" làm câu thơ cân đối, sâu sắc.',
      ],
      [
        'Đúng — <b>Trữ tình (cảm xúc về mẹ) + chút tự sự</b>. Câu thơ giàu cảm xúc về mẹ + có yếu tố tự sự (kể việc mẹ ru con) → trữ tình + tự sự.',
        'Sai — <b>Lập luận</b> không đúng. Phải chọn <i>Trữ tình (cảm xúc về mẹ) + chút tự sự</i> vì câu thơ giàu cảm xúc về mẹ + có yếu tố tự sự (kể việc mẹ ru con) → trữ tình + tự sự.',
        'Sai — <b>Đối thoại</b> không đúng. Phải chọn <i>Trữ tình (cảm xúc về mẹ) + chút tự sự</i> vì câu thơ giàu cảm xúc về mẹ + có yếu tố tự sự (kể việc mẹ ru con) → trữ tình + tự sự.',
        'Sai — <b>Số liệu</b> không đúng. Phải chọn <i>Trữ tình (cảm xúc về mẹ) + chút tự sự</i> vì câu thơ giàu cảm xúc về mẹ + có yếu tố tự sự (kể việc mẹ ru con) → trữ tình + tự sự.',
      ]
    ),
    Q('Hình ảnh giàu tính tạo hình trong thơ thường tác động đến giác quan?',
      ['Chỉ vị giác', 'Không tác động', 'Thị giác và thính giác', 'Chỉ xúc giác'], 2,
      'Hình ảnh thơ chủ yếu gợi nhìn (thị giác) và nghe (thính giác).',
      [
        '<b>Hai giác quan chính</b> hình ảnh thơ tác động:',
        '<ul><li><b>Thị giác</b>: màu sắc, hình khối, ánh sáng — "mặt trời đỏ rực", "trăng vàng".</li><li><b>Thính giác</b>: âm thanh — "tiếng chim", "tiếng gió", "tiếng ve".</li></ul>',
        'Đôi khi có cả khứu giác (mùi hương) và xúc giác (cảm giác mát, ấm), nhưng <i>thị giác và thính giác</i> chiếm ưu thế.',
      ],
      [
        'Sai — <b>Chỉ vị giác</b> không đúng. Phải chọn <i>Thị giác và thính giác</i> vì hình ảnh thơ chủ yếu gợi nhìn (thị giác) và nghe (thính giác).',
        'Sai — <b>Không tác động</b> không đúng. Phải chọn <i>Thị giác và thính giác</i> vì hình ảnh thơ chủ yếu gợi nhìn (thị giác) và nghe (thính giác).',
        'Đúng — <b>Thị giác và thính giác</b>. Hình ảnh thơ chủ yếu gợi nhìn (thị giác) và nghe (thính giác).',
        'Sai — <b>Chỉ xúc giác</b> không đúng. Phải chọn <i>Thị giác và thính giác</i> vì hình ảnh thơ chủ yếu gợi nhìn (thị giác) và nghe (thính giác).',
      ]
    ),
    Q('Khi thơ kể về một câu chuyện ngắn, người đọc nên?',
      ['Chỉ tính số dòng', 'Hình dung sự việc rồi cảm nhận cảm xúc', 'Bỏ qua sự việc', 'Chỉ đọc kết'], 1,
      'Nắm sự việc → cảm nhận cảm xúc → hiểu thông điệp.',
      [
        '<b>Quy trình đọc thơ tự sự</b>:',
        '<ul><li><b>Bước 1</b>: <i>Hình dung sự việc</i> — ai, làm gì, ở đâu.</li><li><b>Bước 2</b>: <i>Cảm nhận cảm xúc</i> — tác giả vui, buồn, day dứt?</li><li><b>Bước 3</b>: <i>Suy ngẫm thông điệp</i> — bài thơ muốn nói điều gì?</li></ul>',
        'Bỏ qua sự việc → <b>không thể</b> cảm nhận trọn vẹn bài thơ tự sự.',
      ],
      [
        'Sai — <b>Chỉ tính số dòng</b> không đúng. Phải chọn <i>Hình dung sự việc rồi cảm nhận cảm xúc</i> vì nắm sự việc → cảm nhận cảm xúc → hiểu thông điệp.',
        'Đúng — <b>Hình dung sự việc rồi cảm nhận cảm xúc</b>. Nắm sự việc → cảm nhận cảm xúc → hiểu thông điệp.',
        'Sai — <b>Bỏ qua sự việc</b> không đúng. Phải chọn <i>Hình dung sự việc rồi cảm nhận cảm xúc</i> vì nắm sự việc → cảm nhận cảm xúc → hiểu thông điệp.',
        'Sai — <b>Chỉ đọc kết</b> không đúng. Phải chọn <i>Hình dung sự việc rồi cảm nhận cảm xúc</i> vì nắm sự việc → cảm nhận cảm xúc → hiểu thông điệp.',
      ]
    ),
    Q('Nhịp thơ ảnh hưởng đến?',
      ['Số trang', 'Màu giấy', 'Cách in', 'Cảm xúc và mạch tự sự'], 3,
      'Nhịp thơ ảnh hưởng đến cảm xúc và mạch tự sự — là "hơi thở" của bài thơ.',
      [
        '<b>Nhịp thơ — hơi thở của bài thơ</b>:',
        '<ul><li><b>Nhịp ngắn</b> (2/2, 1/3): gấp gáp, hồ hởi, lo lắng.</li><li><b>Nhịp dài</b> (4/4, 4/3): chậm rãi, suy tư, trữ tình.</li><li><b>Nhịp bất thường</b>: thể hiện xúc động mạnh, đột ngột.</li></ul>',
        'Mỗi nhịp tạo một <i>"hơi thở" riêng</i> — ảnh hưởng đến cảm xúc người đọc và mạch tự sự bài thơ.',
      ],
      [
        'Sai — <b>Số trang</b> không đúng. Phải chọn <i>Cảm xúc và mạch tự sự</i> vì nhịp thơ ảnh hưởng đến cảm xúc và mạch tự sự — là "hơi thở" của bài thơ.',
        'Sai — <b>Màu giấy</b> không đúng. Phải chọn <i>Cảm xúc và mạch tự sự</i> vì nhịp thơ ảnh hưởng đến cảm xúc và mạch tự sự — là "hơi thở" của bài thơ.',
        'Sai — <b>Cách in</b> không đúng. Phải chọn <i>Cảm xúc và mạch tự sự</i> vì nhịp thơ ảnh hưởng đến cảm xúc và mạch tự sự — là "hơi thở" của bài thơ.',
        'Đúng — <b>Cảm xúc và mạch tự sự</b>. Nhịp thơ ảnh hưởng đến cảm xúc và mạch tự sự — là "hơi thở" của bài thơ.',
      ]
    ),
    Q('Thơ có yếu tố miêu tả khác văn miêu tả ở chỗ?',
      ['Dài hơn', 'Hình ảnh thơ cô đọng, giàu sức gợi, có nhạc tính', 'Có nhiều nhân vật hơn', 'Không có cảm xúc'], 1,
      'Thơ cô đọng, có nhịp, có vần, có hình ảnh tinh chọn; văn miêu tả chi tiết hơn.',
      [
        '<b>Phân biệt thơ miêu tả và văn miêu tả</b>:',
        '<ul><li><b>Thơ</b>: <i>cô đọng</i>, có nhịp, có vần, hình ảnh <i>tinh chọn, giàu sức gợi</i>.</li><li><b>Văn miêu tả</b>: <i>chi tiết hơn</i>, không bị bó buộc bởi vần và nhịp.</li></ul>',
        '<b>Thơ "nói ít gợi nhiều"</b>; văn miêu tả "nói đủ vẽ rõ".',
        'Ví dụ: thơ chỉ cần "ngọn lửa hồng" để gợi cảnh đêm Bác không ngủ; văn xuôi cần tả nhiều câu mới đạt được không khí ấy.',
      ],
      [
        'Sai — <b>Dài hơn</b> không đúng. Phải chọn <i>Hình ảnh thơ cô đọng, giàu sức gợi, có nhạc tính</i> vì thơ cô đọng, có nhịp, có vần, có hình ảnh tinh chọn; văn miêu tả chi tiết hơn.',
        'Đúng — <b>Hình ảnh thơ cô đọng, giàu sức gợi, có nhạc tính</b>. Thơ cô đọng, có nhịp, có vần, có hình ảnh tinh chọn; văn miêu tả chi tiết hơn.',
        'Sai — <b>Có nhiều nhân vật hơn</b> không đúng. Phải chọn <i>Hình ảnh thơ cô đọng, giàu sức gợi, có nhạc tính</i> vì thơ cô đọng, có nhịp, có vần, có hình ảnh tinh chọn; văn miêu tả chi tiết hơn.',
        'Sai — <b>Không có cảm xúc</b> không đúng. Phải chọn <i>Hình ảnh thơ cô đọng, giàu sức gợi, có nhạc tính</i> vì thơ cô đọng, có nhịp, có vần, có hình ảnh tinh chọn; văn miêu tả chi tiết hơn.',
      ]
    ),
    Q('Đọc thơ đúng cách cần?',
      ['Bỏ hình ảnh', 'Bỏ vần', 'Đọc thành tiếng theo nhịp, ngẫm hình ảnh, cảm xúc', 'Đọc nhanh'], 2,
      'Đọc chậm theo nhịp, ngẫm từng hình ảnh, cảm từng cảm xúc — đó mới là đọc thơ.',
      [
        '<b>Cách đọc thơ đúng</b>:',
        '<ul><li>Đọc <b>rõ ràng</b>, không vội.</li><li>Ngắt nhịp theo <b>dấu câu và nhịp thơ</b>.</li><li>Dừng lại ở <b>hình ảnh đắt</b>, ngẫm nghĩ.</li><li>Đặt mình vào <b>tâm trạng tác giả</b>.</li></ul>',
        '⚠️ Đọc thơ <i>không phải lướt mắt như đọc báo</i> — cần đọc thành tiếng, ngắt nhịp đúng.',
        'Một câu thơ hay <b>đáng đọc đi đọc lại nhiều lần</b> — mỗi lần lại "vỡ" ra một tầng nghĩa mới.',
      ],
      [
        'Sai — <b>Bỏ hình ảnh</b> không đúng. Phải chọn <i>Đọc thành tiếng theo nhịp, ngẫm hình ảnh, cảm xúc</i> vì đọc chậm theo nhịp, ngẫm từng hình ảnh, cảm từng cảm xúc — đó mới là đọc thơ.',
        'Sai — <b>Bỏ vần</b> không đúng. Phải chọn <i>Đọc thành tiếng theo nhịp, ngẫm hình ảnh, cảm xúc</i> vì đọc chậm theo nhịp, ngẫm từng hình ảnh, cảm từng cảm xúc — đó mới là đọc thơ.',
        'Đúng — <b>Đọc thành tiếng theo nhịp, ngẫm hình ảnh, cảm xúc</b>. Đọc chậm theo nhịp, ngẫm từng hình ảnh, cảm từng cảm xúc — đó mới là đọc thơ.',
        'Sai — <b>Đọc nhanh</b> không đúng. Phải chọn <i>Đọc thành tiếng theo nhịp, ngẫm hình ảnh, cảm xúc</i> vì đọc chậm theo nhịp, ngẫm từng hình ảnh, cảm từng cảm xúc — đó mới là đọc thơ.',
      ]
    ),
  ]),

  M(23, 'Văn bản nghị luận (đặc trưng cơ bản)', [
    Q('Văn bản nghị luận dùng để?',
      ['Bộc lộ cảm xúc thuần tuý', 'Tả cảnh', 'Trình bày ý kiến, thuyết phục người đọc về một vấn đề', 'Kể chuyện'], 2,
      'Mục đích nghị luận = thuyết phục người đọc đồng tình với một quan điểm.',
      [
        '<b>Văn nghị luận</b> là kiểu văn bản dùng <i>lí lẽ và dẫn chứng</i> để trình bày, bảo vệ một ý kiến, một quan điểm về một vấn đề trong cuộc sống hoặc văn học.',
        '<b>Mục đích cuối cùng</b>: <i>thuyết phục</i> người đọc, người nghe đồng tình.',
        '⚠️ Khác với:',
        '<ul><li><b>Tự sự</b>: kể chuyện.</li><li><b>Miêu tả</b>: vẽ hình ảnh.</li><li><b>Biểu cảm</b>: bộc lộ cảm xúc.</li></ul>',
      ],
      [
        'Sai — <b>Bộc lộ cảm xúc thuần tuý</b> không đúng. Phải chọn <i>Trình bày ý kiến, thuyết phục người đọc về một vấn đề</i> vì mục đích nghị luận = thuyết phục người đọc đồng tình với một quan điểm.',
        'Sai — <b>Tả cảnh</b> không đúng. Phải chọn <i>Trình bày ý kiến, thuyết phục người đọc về một vấn đề</i> vì mục đích nghị luận = thuyết phục người đọc đồng tình với một quan điểm.',
        'Đúng — <b>Trình bày ý kiến, thuyết phục người đọc về một vấn đề</b>. Mục đích nghị luận = thuyết phục người đọc đồng tình với một quan điểm.',
        'Sai — <b>Kể chuyện</b> không đúng. Phải chọn <i>Trình bày ý kiến, thuyết phục người đọc về một vấn đề</i> vì mục đích nghị luận = thuyết phục người đọc đồng tình với một quan điểm.',
      ]
    ),
    Q('Yếu tố cốt lõi của nghị luận là?',
      ['Đối thoại nhiều', 'Cốt truyện, nhân vật', 'Hình ảnh, nhịp', 'Luận điểm, luận cứ, lập luận'], 3,
      'Ba yếu tố cốt lõi của văn nghị luận: luận điểm + luận cứ + lập luận.',
      [
        '<b>Ba yếu tố cốt lõi</b> của nghị luận:',
        '<ul><li><b>Luận điểm</b>: ý kiến chính người viết muốn người đọc tin.</li><li><b>Luận cứ</b>: lí lẽ và dẫn chứng để làm sáng tỏ luận điểm.</li><li><b>Lập luận</b>: cách trình bày, sắp xếp logic, chặt chẽ.</li></ul>',
        'Thiếu một trong ba → bài nghị luận <i>không thuyết phục</i> được người đọc.',
      ],
      [
        'Sai — <b>Đối thoại nhiều</b> không đúng. Phải chọn <i>Luận điểm, luận cứ, lập luận</i> vì ba yếu tố cốt lõi của văn nghị luận: luận điểm + luận cứ + lập luận.',
        'Sai — <b>Cốt truyện, nhân vật</b> không đúng. Phải chọn <i>Luận điểm, luận cứ, lập luận</i> vì ba yếu tố cốt lõi của văn nghị luận: luận điểm + luận cứ + lập luận.',
        'Sai — <b>Hình ảnh, nhịp</b> không đúng. Phải chọn <i>Luận điểm, luận cứ, lập luận</i> vì ba yếu tố cốt lõi của văn nghị luận: luận điểm + luận cứ + lập luận.',
        'Đúng — <b>Luận điểm, luận cứ, lập luận</b>. Ba yếu tố cốt lõi của văn nghị luận: luận điểm + luận cứ + lập luận.',
      ]
    ),
    Q('Luận điểm là?',
      ['Dẫn chứng', 'Câu kết', 'Câu mở đầu', 'Ý kiến chính người viết muốn người đọc tin'], 3,
      'Luận điểm = quan điểm/ý kiến chính cần thuyết phục người đọc.',
      [
        '<b>Luận điểm</b> = ý kiến chính người viết muốn người đọc tin và làm theo.',
        '<b>Đặc điểm của luận điểm tốt</b>:',
        '<ul><li><b>Rõ ràng</b>, có thể bảo vệ hoặc bác bỏ.</li><li><b>Đúng đắn</b> về mặt đạo đức, khoa học.</li><li><b>Phù hợp</b> với vấn đề đang bàn.</li></ul>',
        'Ví dụ luận điểm: "<i>Đọc sách giúp mở rộng hiểu biết</i>" — quan điểm có thể bảo vệ bằng lí lẽ và dẫn chứng.',
      ],
      [
        'Sai — <b>Dẫn chứng</b> không đúng. Phải chọn <i>Ý kiến chính người viết muốn người đọc tin</i> vì luận điểm = quan điểm/ý kiến chính cần thuyết phục người đọc.',
        'Sai — <b>Câu kết</b> không đúng. Phải chọn <i>Ý kiến chính người viết muốn người đọc tin</i> vì luận điểm = quan điểm/ý kiến chính cần thuyết phục người đọc.',
        'Sai — <b>Câu mở đầu</b> không đúng. Phải chọn <i>Ý kiến chính người viết muốn người đọc tin</i> vì luận điểm = quan điểm/ý kiến chính cần thuyết phục người đọc.',
        'Đúng — <b>Ý kiến chính người viết muốn người đọc tin</b>. Luận điểm = quan điểm/ý kiến chính cần thuyết phục người đọc.',
      ]
    ),
    Q('Luận cứ là?',
      ['Hình ảnh thơ', 'Lí lẽ và dẫn chứng để làm rõ luận điểm', 'Đối thoại', 'Cảm xúc'], 1,
      'Luận cứ = lí lẽ + dẫn chứng dùng để làm sáng tỏ luận điểm.',
      [
        '<b>Luận cứ</b> = chất liệu chứng minh luận điểm. Gồm:',
        '<ul><li><b>Lí lẽ</b>: lập luận, suy luận có logic.</li><li><b>Dẫn chứng</b>: sự kiện, số liệu, ví dụ thực tế.</li></ul>',
        '<b>Luận cứ tốt phải</b>:',
        '<ul><li><b>Chặt chẽ</b>, hợp lí.</li><li><b>Cụ thể, xác thực</b>, đúng vấn đề.</li><li>Không bịa đặt, không lệch chủ đề.</li></ul>',
      ],
      [
        'Sai — <b>Hình ảnh thơ</b> không đúng. Phải chọn <i>Lí lẽ và dẫn chứng để làm rõ luận điểm</i> vì luận cứ = lí lẽ + dẫn chứng dùng để làm sáng tỏ luận điểm.',
        'Đúng — <b>Lí lẽ và dẫn chứng để làm rõ luận điểm</b>. Luận cứ = lí lẽ + dẫn chứng dùng để làm sáng tỏ luận điểm.',
        'Sai — <b>Đối thoại</b> không đúng. Phải chọn <i>Lí lẽ và dẫn chứng để làm rõ luận điểm</i> vì luận cứ = lí lẽ + dẫn chứng dùng để làm sáng tỏ luận điểm.',
        'Sai — <b>Cảm xúc</b> không đúng. Phải chọn <i>Lí lẽ và dẫn chứng để làm rõ luận điểm</i> vì luận cứ = lí lẽ + dẫn chứng dùng để làm sáng tỏ luận điểm.',
      ]
    ),
    Q('Trong nghị luận, dẫn chứng tốt nên?',
      ['Chung chung, không nguồn rõ', 'Bịa đặt', 'Lệch chủ đề', 'Cụ thể, xác thực, đúng vấn đề'], 3,
      'Dẫn chứng tốt = thật, chuẩn, sát chủ đề.',
      [
        '<b>Tiêu chí dẫn chứng tốt</b>:',
        '<ul><li><b>Cụ thể</b>: có tên người, tên việc, thời gian, địa điểm rõ ràng.</li><li><b>Xác thực</b>: thật, có nguồn rõ.</li><li><b>Đúng vấn đề</b>: sát với luận điểm cần chứng minh.</li><li><b>Tiêu biểu</b>: gây ấn tượng mạnh.</li></ul>',
        '⚠️ <b>Tuyệt đối không bịa đặt</b> — dẫn chứng bịa làm sụp đổ toàn bộ bài nghị luận.',
      ],
      [
        'Sai — <b>Chung chung, không nguồn rõ</b> không đúng. Phải chọn <i>Cụ thể, xác thực, đúng vấn đề</i> vì dẫn chứng tốt = thật, chuẩn, sát chủ đề.',
        'Sai — <b>Bịa đặt</b> không đúng. Phải chọn <i>Cụ thể, xác thực, đúng vấn đề</i> vì dẫn chứng tốt = thật, chuẩn, sát chủ đề.',
        'Sai — <b>Lệch chủ đề</b> không đúng. Phải chọn <i>Cụ thể, xác thực, đúng vấn đề</i> vì dẫn chứng tốt = thật, chuẩn, sát chủ đề.',
        'Đúng — <b>Cụ thể, xác thực, đúng vấn đề</b>. Dẫn chứng tốt = thật, chuẩn, sát chủ đề.',
      ]
    ),
    Q('Câu nào sau đây là luận điểm?',
      ['Em rất buồn.', 'Hôm qua trời mưa.', 'Đọc sách giúp mở rộng hiểu biết.', 'Hoa nở đỏ rực.'], 2,
      '"Đọc sách giúp mở rộng hiểu biết" là quan điểm có thể bảo vệ bằng lí lẽ và dẫn chứng → luận điểm.',
      [
        '<b>Soi từng câu</b>:',
        '<ul><li>❌ "Em rất buồn" — câu <i>biểu cảm</i>, không bàn cãi.</li><li>❌ "Hôm qua trời mưa" — câu <i>trần thuật về sự kiện</i>, không bàn cãi.</li><li>✅ "<b>Đọc sách giúp mở rộng hiểu biết</b>" — <i>quan điểm</i>, có thể bảo vệ bằng lí lẽ + dẫn chứng → <b>luận điểm</b>.</li><li>❌ "Hoa nở đỏ rực" — câu <i>miêu tả</i>, không phải quan điểm.</li></ul>',
      ],
      [
        'Sai — <b>Em rất buồn.</b> không đúng. Phải chọn <i>Đọc sách giúp mở rộng hiểu biết.</i> vì "Đọc sách giúp mở rộng hiểu biết" là quan điểm có thể bảo vệ bằng lí lẽ và dẫn chứng → luận điểm.',
        'Sai — <b>Hôm qua trời mưa.</b> không đúng. Phải chọn <i>Đọc sách giúp mở rộng hiểu biết.</i> vì "Đọc sách giúp mở rộng hiểu biết" là quan điểm có thể bảo vệ bằng lí lẽ và dẫn chứng → luận điểm.',
        'Đúng — <b>Đọc sách giúp mở rộng hiểu biết.</b>. "Đọc sách giúp mở rộng hiểu biết" là quan điểm có thể bảo vệ bằng lí lẽ và dẫn chứng → luận điểm.',
        'Sai — <b>Hoa nở đỏ rực.</b> không đúng. Phải chọn <i>Đọc sách giúp mở rộng hiểu biết.</i> vì "Đọc sách giúp mở rộng hiểu biết" là quan điểm có thể bảo vệ bằng lí lẽ và dẫn chứng → luận điểm.',
      ]
    ),
  ]),

  M(24, 'Văn bản thông tin', [
    Q('Văn bản thông tin nhằm?',
      ['Bộc lộ cảm xúc cá nhân', 'Cung cấp thông tin, kiến thức, hướng dẫn về một đối tượng', 'Tả cảnh thơ mộng', 'Kể chuyện hư cấu'], 1,
      'Chức năng chính của văn bản thông tin: cung cấp thông tin, kiến thức, hướng dẫn.',
      [
        '<b>Văn bản thông tin</b> là loại văn bản nhằm <i>cung cấp thông tin, kiến thức, hướng dẫn</i> về một đối tượng, sự việc, hiện tượng.',
        '<b>Mục tiêu</b>: giúp người đọc <i>hiểu rõ</i> — không phải thuyết phục, không phải kể chuyện.',
        'Ví dụ trong đời sống:',
        '<ul><li>Bản tin trên báo.</li><li>Tờ rơi sự kiện.</li><li>Hướng dẫn sử dụng đồ dùng.</li><li>Bài giới thiệu danh thắng.</li></ul>',
      ],
      [
        'Sai — <b>Bộc lộ cảm xúc cá nhân</b> không đúng. Phải chọn <i>Cung cấp thông tin, kiến thức, hướng dẫn về một đối tượng</i> vì chức năng chính của văn bản thông tin: cung cấp thông tin, kiến thức, hướng dẫn.',
        'Đúng — <b>Cung cấp thông tin, kiến thức, hướng dẫn về một đối tượng</b>. Chức năng chính của văn bản thông tin: cung cấp thông tin, kiến thức, hướng dẫn.',
        'Sai — <b>Tả cảnh thơ mộng</b> không đúng. Phải chọn <i>Cung cấp thông tin, kiến thức, hướng dẫn về một đối tượng</i> vì chức năng chính của văn bản thông tin: cung cấp thông tin, kiến thức, hướng dẫn.',
        'Sai — <b>Kể chuyện hư cấu</b> không đúng. Phải chọn <i>Cung cấp thông tin, kiến thức, hướng dẫn về một đối tượng</i> vì chức năng chính của văn bản thông tin: cung cấp thông tin, kiến thức, hướng dẫn.',
      ]
    ),
    Q('Đặc điểm văn bản thông tin?',
      ['Đậm chất thơ', 'Chính xác, khách quan, mạch lạc', 'Toàn đối thoại', 'Cảm tính, mơ hồ'], 1,
      'Đặc điểm: chính xác + khách quan + mạch lạc + rõ ràng.',
      [
        '<b>Bốn yêu cầu</b> của văn bản thông tin:',
        '<ul><li><b>Chính xác</b>: thông tin đúng sự thật, có nguồn rõ ràng.</li><li><b>Khách quan</b>: hạn chế cảm xúc, đánh giá cá nhân.</li><li><b>Mạch lạc</b>: trình bày theo trình tự logic.</li><li><b>Rõ ràng</b>: ngôn ngữ dễ hiểu, không mơ hồ.</li></ul>',
        '⚠️ Khác văn học (giàu cảm xúc, hình ảnh) — văn bản thông tin <i>khô khan hơn nhưng chính xác hơn</i>.',
      ],
      [
        'Sai — <b>Đậm chất thơ</b> không đúng. Phải chọn <i>Chính xác, khách quan, mạch lạc</i> vì đặc điểm: chính xác + khách quan + mạch lạc + rõ ràng.',
        'Đúng — <b>Chính xác, khách quan, mạch lạc</b>. Đặc điểm: chính xác + khách quan + mạch lạc + rõ ràng.',
        'Sai — <b>Toàn đối thoại</b> không đúng. Phải chọn <i>Chính xác, khách quan, mạch lạc</i> vì đặc điểm: chính xác + khách quan + mạch lạc + rõ ràng.',
        'Sai — <b>Cảm tính, mơ hồ</b> không đúng. Phải chọn <i>Chính xác, khách quan, mạch lạc</i> vì đặc điểm: chính xác + khách quan + mạch lạc + rõ ràng.',
      ]
    ),
    Q('Cấu trúc phổ biến của văn bản thông tin?',
      ['Khổ thơ', 'Mở thân kết của truyện', 'Tiêu đề – sapo/mở đầu – các phần thông tin – kết thúc', 'Đối thoại'], 2,
      'Cấu trúc: tiêu đề → sapo → các phần thông tin → kết thúc.',
      [
        '<b>Cấu trúc phổ biến</b>:',
        '<ul><li><b>Tiêu đề (nhan đề)</b>: ngắn gọn, nêu rõ chủ đề.</li><li><b>Sa-pô / mở đầu</b>: tóm tắt nội dung chính.</li><li><b>Các phần thông tin</b>: triển khai theo đề mục.</li><li><b>Kết thúc</b>: tóm kết hoặc gợi mở.</li></ul>',
        'Cấu trúc rõ ràng giúp người đọc <i>nắm nhanh, nhớ lâu</i>.',
      ],
      [
        'Sai — <b>Khổ thơ</b> không đúng. Phải chọn <i>Tiêu đề – sapo/mở đầu – các phần thông tin – kết thúc</i> vì cấu trúc: tiêu đề → sapo → các phần thông tin → kết thúc.',
        'Sai — <b>Mở thân kết của truyện</b> không đúng. Phải chọn <i>Tiêu đề – sapo/mở đầu – các phần thông tin – kết thúc</i> vì cấu trúc: tiêu đề → sapo → các phần thông tin → kết thúc.',
        'Đúng — <b>Tiêu đề – sapo/mở đầu – các phần thông tin – kết thúc</b>. Cấu trúc: tiêu đề → sapo → các phần thông tin → kết thúc.',
        'Sai — <b>Đối thoại</b> không đúng. Phải chọn <i>Tiêu đề – sapo/mở đầu – các phần thông tin – kết thúc</i> vì cấu trúc: tiêu đề → sapo → các phần thông tin → kết thúc.',
      ]
    ),
    Q('Thông tin được trình bày sinh động hơn nhờ?',
      ['Vần điệu', 'Yếu tố hoang đường', 'Bảng, biểu đồ, hình ảnh, sơ đồ', 'Thoại nhân vật'], 2,
      'Yếu tố phi ngôn ngữ (bảng, biểu đồ, hình ảnh, sơ đồ) giúp người đọc dễ nắm.',
      [
        '<b>Yếu tố phi ngôn ngữ</b> trong văn bản thông tin:',
        '<ul><li><b>Bảng biểu</b>: so sánh, đối chiếu.</li><li><b>Biểu đồ</b>: dữ liệu trực quan.</li><li><b>Hình ảnh</b>: minh hoạ cụ thể.</li><li><b>Sơ đồ</b>: quan hệ, quy trình.</li></ul>',
        'Đây không phải "<i>trang trí</i>" — mà là <b>phương tiện truyền tải thông tin</b>, giúp người đọc nắm nhanh, nhớ lâu.',
      ],
      [
        'Sai — <b>Vần điệu</b> không đúng. Phải chọn <i>Bảng, biểu đồ, hình ảnh, sơ đồ</i> vì yếu tố phi ngôn ngữ (bảng, biểu đồ, hình ảnh, sơ đồ) giúp người đọc dễ nắm.',
        'Sai — <b>Yếu tố hoang đường</b> không đúng. Phải chọn <i>Bảng, biểu đồ, hình ảnh, sơ đồ</i> vì yếu tố phi ngôn ngữ (bảng, biểu đồ, hình ảnh, sơ đồ) giúp người đọc dễ nắm.',
        'Đúng — <b>Bảng, biểu đồ, hình ảnh, sơ đồ</b>. Yếu tố phi ngôn ngữ (bảng, biểu đồ, hình ảnh, sơ đồ) giúp người đọc dễ nắm.',
        'Sai — <b>Thoại nhân vật</b> không đúng. Phải chọn <i>Bảng, biểu đồ, hình ảnh, sơ đồ</i> vì yếu tố phi ngôn ngữ (bảng, biểu đồ, hình ảnh, sơ đồ) giúp người đọc dễ nắm.',
      ]
    ),
    Q('Khi đọc văn bản thông tin, cần?',
      ['Chỉ đọc kết', 'Chỉ đọc tiêu đề', 'Đọc lướt vô tội vạ', 'Nắm ý chính từng phần, dữ liệu quan trọng'], 3,
      'Cần nắm ý chính từng phần + dữ liệu quan trọng + tóm tắt sau khi đọc.',
      [
        '<b>Cách đọc văn bản thông tin</b>:',
        '<ul><li>Đọc <b>lướt tiêu đề và sa-pô</b> để biết chủ đề.</li><li>Đọc kĩ các <b>đề mục</b> để nắm bố cục.</li><li><b>Ghi nhận số liệu, dữ kiện</b> quan trọng.</li><li><b>Tóm tắt ý chính</b> sau khi đọc xong.</li></ul>',
        'Đọc thông tin <i>khác đọc truyện</i> — cần "săn" dữ kiện, không phải thưởng thức hình ảnh.',
      ],
      [
        'Sai — <b>Chỉ đọc kết</b> không đúng. Phải chọn <i>Nắm ý chính từng phần, dữ liệu quan trọng</i> vì cần nắm ý chính từng phần + dữ liệu quan trọng + tóm tắt sau khi đọc.',
        'Sai — <b>Chỉ đọc tiêu đề</b> không đúng. Phải chọn <i>Nắm ý chính từng phần, dữ liệu quan trọng</i> vì cần nắm ý chính từng phần + dữ liệu quan trọng + tóm tắt sau khi đọc.',
        'Sai — <b>Đọc lướt vô tội vạ</b> không đúng. Phải chọn <i>Nắm ý chính từng phần, dữ liệu quan trọng</i> vì cần nắm ý chính từng phần + dữ liệu quan trọng + tóm tắt sau khi đọc.',
        'Đúng — <b>Nắm ý chính từng phần, dữ liệu quan trọng</b>. Cần nắm ý chính từng phần + dữ liệu quan trọng + tóm tắt sau khi đọc.',
      ]
    ),
    Q('Văn bản thông tin và văn bản nghị luận khác nhau ở?',
      ['Phông chữ', 'Thông tin nhằm cung cấp; nghị luận nhằm thuyết phục', 'Cách in', 'Số chữ'], 1,
      'Mục đích khác nhau: thông tin để cung cấp/hiểu; nghị luận để thuyết phục.',
      [
        '<b>Phân biệt</b>:',
        '<ul><li><b>Thông tin</b>: cung cấp dữ liệu — "<i>Mỗi năm Việt Nam thải ra hàng triệu tấn rác nhựa</i>".</li><li><b>Nghị luận</b>: đưa quan điểm, thuyết phục — "<i>Học sinh cần hành động ngay để bảo vệ môi trường</i>" + lí lẽ + dẫn chứng.</li></ul>',
        '<b>Mục đích</b> là khác biệt cốt lõi — thông tin để <i>hiểu</i>, nghị luận để <i>tin và làm theo</i>.',
      ],
      [
        'Sai — <b>Phông chữ</b> không đúng. Phải chọn <i>Thông tin nhằm cung cấp; nghị luận nhằm thuyết phục</i> vì mục đích khác nhau: thông tin để cung cấp/hiểu; nghị luận để thuyết phục.',
        'Đúng — <b>Thông tin nhằm cung cấp; nghị luận nhằm thuyết phục</b>. Mục đích khác nhau: thông tin để cung cấp/hiểu; nghị luận để thuyết phục.',
        'Sai — <b>Cách in</b> không đúng. Phải chọn <i>Thông tin nhằm cung cấp; nghị luận nhằm thuyết phục</i> vì mục đích khác nhau: thông tin để cung cấp/hiểu; nghị luận để thuyết phục.',
        'Sai — <b>Số chữ</b> không đúng. Phải chọn <i>Thông tin nhằm cung cấp; nghị luận nhằm thuyết phục</i> vì mục đích khác nhau: thông tin để cung cấp/hiểu; nghị luận để thuyết phục.',
      ]
    ),
  ]),

  M(25, 'Văn kể chuyện (1): Cách kể, ngôi kể', [
    Q('Văn kể chuyện là?',
      ['Lập luận', 'Tả cảnh', 'Trình bày một chuỗi sự việc có nhân vật, có ý nghĩa', 'Bộc lộ cảm xúc thuần'], 2,
      'Kể chuyện = trình bày một chuỗi sự việc có nhân vật, có diễn biến, có ý nghĩa.',
      [
        '<b>Văn kể chuyện</b> là kiểu văn bản trình bày <i>một chuỗi sự việc có nhân vật, có diễn biến, có ý nghĩa</i>.',
        '<b>Mục đích</b>: làm cho người đọc, người nghe:',
        '<ul><li><b>Nắm được câu chuyện</b>.</li><li><b>Cảm nhận được thông điệp</b> tác giả gửi gắm.</li></ul>',
        'Khác kể chuyện đời thường (mục đích giao tiếp), văn kể chuyện <i>có chủ ý nghệ thuật</i>.',
      ],
      [
        'Sai — <b>Lập luận</b> không đúng. Phải chọn <i>Trình bày một chuỗi sự việc có nhân vật, có ý nghĩa</i> vì kể chuyện = trình bày một chuỗi sự việc có nhân vật, có diễn biến, có ý nghĩa.',
        'Sai — <b>Tả cảnh</b> không đúng. Phải chọn <i>Trình bày một chuỗi sự việc có nhân vật, có ý nghĩa</i> vì kể chuyện = trình bày một chuỗi sự việc có nhân vật, có diễn biến, có ý nghĩa.',
        'Đúng — <b>Trình bày một chuỗi sự việc có nhân vật, có ý nghĩa</b>. Kể chuyện = trình bày một chuỗi sự việc có nhân vật, có diễn biến, có ý nghĩa.',
        'Sai — <b>Bộc lộ cảm xúc thuần</b> không đúng. Phải chọn <i>Trình bày một chuỗi sự việc có nhân vật, có ý nghĩa</i> vì kể chuyện = trình bày một chuỗi sự việc có nhân vật, có diễn biến, có ý nghĩa.',
      ]
    ),
    Q('Ngôi thứ nhất trong văn kể là?',
      ['Người kể là phụ huynh', 'Người kể là cô giáo', 'Người kể xưng "tôi/em…"', 'Người kể giấu mình, gọi tên nhân vật'], 2,
      'Ngôi 1: người kể là một nhân vật trong truyện, xưng "tôi/em/mình".',
      [
        '<b>Ngôi thứ nhất</b>:',
        '<ul><li>Người kể xưng <code>"tôi", "em", "mình"</code>…</li><li>Là <b>một nhân vật trong câu chuyện</b>.</li><li>Chỉ kể những gì <i>"tôi" biết</i>.</li></ul>',
        'Ví dụ: trong "Bài học đường đời đầu tiên", Dế Mèn xưng "tôi" tự kể chuyện đời mình.',
      ],
      [
        'Sai — <b>Người kể là phụ huynh</b> không đúng. Phải chọn <i>Người kể xưng "tôi/em…"</i> vì ngôi 1: người kể là một nhân vật trong truyện, xưng "tôi/em/mình".',
        'Sai — <b>Người kể là cô giáo</b> không đúng. Phải chọn <i>Người kể xưng "tôi/em…"</i> vì ngôi 1: người kể là một nhân vật trong truyện, xưng "tôi/em/mình".',
        'Đúng — <b>Người kể xưng "tôi/em…"</b>. Ngôi 1: người kể là một nhân vật trong truyện, xưng "tôi/em/mình".',
        'Sai — <b>Người kể giấu mình, gọi tên nhân vật</b> không đúng. Phải chọn <i>Người kể xưng "tôi/em…"</i> vì ngôi 1: người kể là một nhân vật trong truyện, xưng "tôi/em/mình".',
      ]
    ),
    Q('Ngôi thứ ba trong văn kể là?',
      ['Người kể là tác giả phát biểu', 'Người kể giấu mình, gọi nhân vật bằng tên', 'Người kể là nhân vật chính', 'Người kể xưng "tôi"'], 1,
      'Ngôi 3: người kể giấu mình, đứng ngoài câu chuyện, gọi nhân vật bằng tên.',
      [
        '<b>Ngôi thứ ba</b>:',
        '<ul><li>Người kể <i>giấu mình</i>, gọi nhân vật bằng tên.</li><li>Đứng <b>ngoài câu chuyện</b>.</li><li>Có thể <i>"toàn tri"</i> — biết tất cả mọi nhân vật, mọi nơi, mọi thời điểm.</li></ul>',
        'Ví dụ: "Tấm sống với mẹ con Cám…" — người kể đứng ngoài, gọi Tấm bằng tên.',
      ],
      [
        'Sai — <b>Người kể là tác giả phát biểu</b> không đúng. Phải chọn <i>Người kể giấu mình, gọi nhân vật bằng tên</i> vì ngôi 3: người kể giấu mình, đứng ngoài câu chuyện, gọi nhân vật bằng tên.',
        'Đúng — <b>Người kể giấu mình, gọi nhân vật bằng tên</b>. Ngôi 3: người kể giấu mình, đứng ngoài câu chuyện, gọi nhân vật bằng tên.',
        'Sai — <b>Người kể là nhân vật chính</b> không đúng. Phải chọn <i>Người kể giấu mình, gọi nhân vật bằng tên</i> vì ngôi 3: người kể giấu mình, đứng ngoài câu chuyện, gọi nhân vật bằng tên.',
        'Sai — <b>Người kể xưng "tôi"</b> không đúng. Phải chọn <i>Người kể giấu mình, gọi nhân vật bằng tên</i> vì ngôi 3: người kể giấu mình, đứng ngoài câu chuyện, gọi nhân vật bằng tên.',
      ]
    ),
    Q('Ưu thế ngôi 1?',
      ['Chân thực, dễ bộc lộ cảm xúc trực tiếp', 'Khô khan', 'Lạnh lùng', 'Khó hiểu'], 0,
      '"Tôi" tạo cảm giác chân thực, gần gũi, dễ bộc lộ cảm xúc trực tiếp.',
      [
        '<b>Ưu thế ngôi 1</b>:',
        '<ul><li><b>Chân thực</b> — như tâm sự thật.</li><li><b>Gần gũi</b> — không có khoảng cách.</li><li><b>Cảm xúc trực tiếp</b> — bộc lộ rõ ràng.</li></ul>',
        '<b>Nhược điểm</b>: <i>chỉ thấy được những gì "tôi" biết</i> — góc nhìn hạn chế.',
      ],
      [
        'Đúng — <b>Chân thực, dễ bộc lộ cảm xúc trực tiếp</b>. "Tôi" tạo cảm giác chân thực, gần gũi, dễ bộc lộ cảm xúc trực tiếp.',
        'Sai — <b>Khô khan</b> không đúng. Phải chọn <i>Chân thực, dễ bộc lộ cảm xúc trực tiếp</i> vì "Tôi" tạo cảm giác chân thực, gần gũi, dễ bộc lộ cảm xúc trực tiếp.',
        'Sai — <b>Lạnh lùng</b> không đúng. Phải chọn <i>Chân thực, dễ bộc lộ cảm xúc trực tiếp</i> vì "Tôi" tạo cảm giác chân thực, gần gũi, dễ bộc lộ cảm xúc trực tiếp.',
        'Sai — <b>Khó hiểu</b> không đúng. Phải chọn <i>Chân thực, dễ bộc lộ cảm xúc trực tiếp</i> vì "Tôi" tạo cảm giác chân thực, gần gũi, dễ bộc lộ cảm xúc trực tiếp.',
      ]
    ),
    Q('Ưu thế ngôi 3?',
      ['Bao quát, có thể kể nhiều nhân vật, nhiều nơi', 'Chỉ kể được 1 nhân vật', 'Không kể được nội tâm', 'Bó hẹp'], 0,
      'Ngôi 3 toàn tri có thể bao quát nhiều nhân vật, nhiều nơi, nhiều thời điểm.',
      [
        '<b>Ưu thế ngôi 3 toàn tri</b>:',
        '<ul><li><b>Bao quát</b> nhiều tuyến nhân vật.</li><li>Kể được nhiều <i>nơi</i>, nhiều <i>thời điểm</i>.</li><li>Có thể vào <b>nội tâm</b> các nhân vật khác nhau.</li><li>Đánh giá <b>khách quan</b> hơn.</li></ul>',
        '<b>Nhược điểm</b>: <i>ít cảm xúc cá nhân</i> hơn ngôi 1.',
      ],
      [
        'Đúng — <b>Bao quát, có thể kể nhiều nhân vật, nhiều nơi</b>. Ngôi 3 toàn tri có thể bao quát nhiều nhân vật, nhiều nơi, nhiều thời điểm.',
        'Sai — <b>Chỉ kể được 1 nhân vật</b> không đúng. Phải chọn <i>Bao quát, có thể kể nhiều nhân vật, nhiều nơi</i> vì ngôi 3 toàn tri có thể bao quát nhiều nhân vật, nhiều nơi, nhiều thời điểm.',
        'Sai — <b>Không kể được nội tâm</b> không đúng. Phải chọn <i>Bao quát, có thể kể nhiều nhân vật, nhiều nơi</i> vì ngôi 3 toàn tri có thể bao quát nhiều nhân vật, nhiều nơi, nhiều thời điểm.',
        'Sai — <b>Bó hẹp</b> không đúng. Phải chọn <i>Bao quát, có thể kể nhiều nhân vật, nhiều nơi</i> vì ngôi 3 toàn tri có thể bao quát nhiều nhân vật, nhiều nơi, nhiều thời điểm.',
      ]
    ),
    Q('Chọn ngôi kể nào tuỳ thuộc?',
      ['Số trang', 'Mục đích kể và hiệu quả nghệ thuật mong muốn', 'Phông chữ', 'Sở thích bút'], 1,
      'Tuỳ vào mục đích kể: kỉ niệm cá nhân → ngôi 1; chuyện nhiều tuyến → ngôi 3.',
      [
        '<b>Cách chọn ngôi kể</b>:',
        '<ul><li>Muốn kể <b>chân thực kỉ niệm của mình</b> → <i>ngôi 1</i>.</li><li>Muốn kể câu chuyện <b>nhiều nhân vật, nhiều tuyến</b> → <i>ngôi 3</i>.</li><li>Muốn <b>gây bất ngờ</b> qua góc nhìn hạn chế → <i>ngôi 1</i>.</li><li>Muốn nhìn nhân vật <b>từ ngoài</b>, đánh giá khách quan → <i>ngôi 3</i>.</li></ul>',
        '⚠️ <b>Giữ ngôi kể nhất quán</b> — không đổi giữa chừng.',
      ],
      [
        'Sai — <b>Số trang</b> không đúng. Phải chọn <i>Mục đích kể và hiệu quả nghệ thuật mong muốn</i> vì tuỳ vào mục đích kể: kỉ niệm cá nhân → ngôi 1; chuyện nhiều tuyến → ngôi 3.',
        'Đúng — <b>Mục đích kể và hiệu quả nghệ thuật mong muốn</b>. Tuỳ vào mục đích kể: kỉ niệm cá nhân → ngôi 1; chuyện nhiều tuyến → ngôi 3.',
        'Sai — <b>Phông chữ</b> không đúng. Phải chọn <i>Mục đích kể và hiệu quả nghệ thuật mong muốn</i> vì tuỳ vào mục đích kể: kỉ niệm cá nhân → ngôi 1; chuyện nhiều tuyến → ngôi 3.',
        'Sai — <b>Sở thích bút</b> không đúng. Phải chọn <i>Mục đích kể và hiệu quả nghệ thuật mong muốn</i> vì tuỳ vào mục đích kể: kỉ niệm cá nhân → ngôi 1; chuyện nhiều tuyến → ngôi 3.',
      ]
    ),
  ]),

  M(26, 'Văn kể chuyện (2): Trình tự sự việc', [
    Q('Trình tự kể phổ biến nhất là?',
      ['Theo bảng chữ cái', 'Theo độ dài', 'Theo thời gian xảy ra sự việc', 'Theo độ tuổi'], 2,
      'Trình tự thời gian là cách kể cơ bản, dễ theo dõi nhất.',
      [
        '<b>Ba trình tự kể</b> phổ biến:',
        '<ul><li><b>Trình tự thời gian</b>: theo thứ tự sự việc xảy ra — <i>dễ theo dõi, cơ bản</i>.</li><li><b>Trình tự đảo</b>: bắt đầu từ kết quả/cao trào — <i>gây bất ngờ</i>.</li><li><b>Trình tự hồi tưởng</b>: nhân vật ở hiện tại nhớ về quá khứ — <i>phù hợp hồi ký</i>.</li></ul>',
        'Phổ biến nhất là <b>trình tự thời gian</b> — phù hợp với hầu hết câu chuyện.',
      ],
      [
        'Sai — <b>Theo bảng chữ cái</b> không đúng. Phải chọn <i>Theo thời gian xảy ra sự việc</i> vì trình tự thời gian là cách kể cơ bản, dễ theo dõi nhất.',
        'Sai — <b>Theo độ dài</b> không đúng. Phải chọn <i>Theo thời gian xảy ra sự việc</i> vì trình tự thời gian là cách kể cơ bản, dễ theo dõi nhất.',
        'Đúng — <b>Theo thời gian xảy ra sự việc</b>. Trình tự thời gian là cách kể cơ bản, dễ theo dõi nhất.',
        'Sai — <b>Theo độ tuổi</b> không đúng. Phải chọn <i>Theo thời gian xảy ra sự việc</i> vì trình tự thời gian là cách kể cơ bản, dễ theo dõi nhất.',
      ]
    ),
    Q('Khi muốn gây bất ngờ, người kể có thể?',
      ['Bắt buộc kể tuần tự', 'Đảo trật tự, bắt đầu từ kết quả/cao trào', 'Bỏ kết bài', 'Bỏ mở bài'], 1,
      'Đảo trật tự (kết → thân → mở) gây tò mò, hấp dẫn.',
      [
        '<b>Trình tự đảo</b> — kĩ thuật gây bất ngờ:',
        '<ul><li>Mở đầu bằng <b>kết quả</b> hoặc <b>cao trào</b>.</li><li>Quay về <b>nguyên nhân</b>, diễn biến.</li><li>Kết: làm rõ ý nghĩa.</li></ul>',
        'Ví dụ: mở đầu bằng cảnh người mất ví ôm Lan cảm ơn → người đọc <i>tò mò</i>: chuyện gì? → kể lại từ đầu.',
        '<b>Tác dụng</b>: hấp dẫn hơn kể tuần tự.',
      ],
      [
        'Sai — <b>Bắt buộc kể tuần tự</b> không đúng. Phải chọn <i>Đảo trật tự, bắt đầu từ kết quả/cao trào</i> vì đảo trật tự (kết → thân → mở) gây tò mò, hấp dẫn.',
        'Đúng — <b>Đảo trật tự, bắt đầu từ kết quả/cao trào</b>. Đảo trật tự (kết → thân → mở) gây tò mò, hấp dẫn.',
        'Sai — <b>Bỏ kết bài</b> không đúng. Phải chọn <i>Đảo trật tự, bắt đầu từ kết quả/cao trào</i> vì đảo trật tự (kết → thân → mở) gây tò mò, hấp dẫn.',
        'Sai — <b>Bỏ mở bài</b> không đúng. Phải chọn <i>Đảo trật tự, bắt đầu từ kết quả/cao trào</i> vì đảo trật tự (kết → thân → mở) gây tò mò, hấp dẫn.',
      ]
    ),
    Q('Bố cục bài văn kể chuyện?',
      ['Hai phần', 'Bốn phần cố định', 'Một đoạn duy nhất', 'Mở bài – Thân bài (chuỗi sự việc) – Kết bài'], 3,
      'Bố cục 3 phần: Mở bài – Thân bài (chuỗi sự việc) – Kết bài.',
      [
        '<b>Bố cục bài văn kể chuyện</b>:',
        '<ul><li><b>Mở bài</b>: giới thiệu câu chuyện, hoàn cảnh, nhân vật chính.</li><li><b>Thân bài</b>: kể chi tiết các sự việc theo trình tự đã chọn.</li><li><b>Kết bài</b>: nêu kết quả, cảm nghĩ, bài học.</li></ul>',
        'Đây là bố cục <b>chuẩn 3 phần</b> — luôn giữ trong bài tập làm văn lớp 6.',
      ],
      [
        'Sai — <b>Hai phần</b> không đúng. Phải chọn <i>Mở bài – Thân bài (chuỗi sự việc) – Kết bài</i> vì bố cục 3 phần: Mở bài – Thân bài (chuỗi sự việc) – Kết bài.',
        'Sai — <b>Bốn phần cố định</b> không đúng. Phải chọn <i>Mở bài – Thân bài (chuỗi sự việc) – Kết bài</i> vì bố cục 3 phần: Mở bài – Thân bài (chuỗi sự việc) – Kết bài.',
        'Sai — <b>Một đoạn duy nhất</b> không đúng. Phải chọn <i>Mở bài – Thân bài (chuỗi sự việc) – Kết bài</i> vì bố cục 3 phần: Mở bài – Thân bài (chuỗi sự việc) – Kết bài.',
        'Đúng — <b>Mở bài – Thân bài (chuỗi sự việc) – Kết bài</b>. Bố cục 3 phần: Mở bài – Thân bài (chuỗi sự việc) – Kết bài.',
      ]
    ),
    Q('Thân bài kể chuyện nên?',
      ['Tả cảnh là chính', 'Lập luận triết học', 'Liệt kê tất cả mọi thứ', 'Sự việc tiêu biểu, có cao trào và giải quyết'], 3,
      'Thân bài cần chọn lọc sự việc tiêu biểu, có cao trào (nút thắt) và giải quyết.',
      [
        '<b>Sơ đồ cốt truyện có cao trào</b>:',
        '<ul><li><b>Mở đầu</b>: giới thiệu nhân vật, hoàn cảnh.</li><li><b>Phát triển</b>: sự việc dồn dập, mâu thuẫn lớn dần.</li><li><b>Cao trào</b>: căng thẳng nhất, "nút thắt" cao nhất.</li><li><b>Giải quyết</b>: tháo gỡ mâu thuẫn.</li><li><b>Kết</b>: kết quả, bài học, cảm nghĩ.</li></ul>',
        'Một câu chuyện không có cao trào giống như <i>bài hát không có điệp khúc</i> — buồn tẻ, dễ quên.',
      ],
      [
        'Sai — <b>Tả cảnh là chính</b> không đúng. Phải chọn <i>Sự việc tiêu biểu, có cao trào và giải quyết</i> vì thân bài cần chọn lọc sự việc tiêu biểu, có cao trào (nút thắt) và giải quyết.',
        'Sai — <b>Lập luận triết học</b> không đúng. Phải chọn <i>Sự việc tiêu biểu, có cao trào và giải quyết</i> vì thân bài cần chọn lọc sự việc tiêu biểu, có cao trào (nút thắt) và giải quyết.',
        'Sai — <b>Liệt kê tất cả mọi thứ</b> không đúng. Phải chọn <i>Sự việc tiêu biểu, có cao trào và giải quyết</i> vì thân bài cần chọn lọc sự việc tiêu biểu, có cao trào (nút thắt) và giải quyết.',
        'Đúng — <b>Sự việc tiêu biểu, có cao trào và giải quyết</b>. Thân bài cần chọn lọc sự việc tiêu biểu, có cao trào (nút thắt) và giải quyết.',
      ]
    ),
    Q('Kết bài kể chuyện thường?',
      ['Lặp lại mở bài', 'Nêu kết quả, bài học/cảm nghĩ', 'Đặt câu hỏi vô tận', 'Trống không'], 1,
      'Kết bài: nêu kết quả + cảm nghĩ/bài học rút ra.',
      [
        '<b>Kết bài bài văn kể chuyện</b>:',
        '<ul><li><b>Kết quả</b> của sự việc.</li><li><b>Bài học</b> rút ra từ câu chuyện.</li><li><b>Cảm nghĩ</b> của người kể.</li></ul>',
        '⚠️ Tránh các lỗi:',
        '<ul><li>Lặp lại mở bài.</li><li>Mở thêm vấn đề mới không liên quan.</li><li>Kết cụt lủn, "không có gì".</li></ul>',
      ],
      [
        'Sai — <b>Lặp lại mở bài</b> không đúng. Phải chọn <i>Nêu kết quả, bài học/cảm nghĩ</i> vì kết bài: nêu kết quả + cảm nghĩ/bài học rút ra.',
        'Đúng — <b>Nêu kết quả, bài học/cảm nghĩ</b>. Kết bài: nêu kết quả + cảm nghĩ/bài học rút ra.',
        'Sai — <b>Đặt câu hỏi vô tận</b> không đúng. Phải chọn <i>Nêu kết quả, bài học/cảm nghĩ</i> vì kết bài: nêu kết quả + cảm nghĩ/bài học rút ra.',
        'Sai — <b>Trống không</b> không đúng. Phải chọn <i>Nêu kết quả, bài học/cảm nghĩ</i> vì kết bài: nêu kết quả + cảm nghĩ/bài học rút ra.',
      ]
    ),
    Q('Khi kể, để câu chuyện hấp dẫn cần?',
      ['Không có nhân vật', 'Toàn liệt kê', 'Khô khan', 'Có chi tiết sinh động, lời thoại tự nhiên'], 3,
      'Chi tiết sinh động + lời thoại tự nhiên + cao trào → câu chuyện hấp dẫn.',
      [
        '<b>Bí quyết kể chuyện hay</b>:',
        '<ul><li><b>Chọn lọc chi tiết</b> — chỉ giữ những gì làm câu chuyện sống.</li><li><b>Thêm lời thoại</b> — nhân vật "nói" thay vì tác giả "kể về".</li><li><b>Tạo cao trào</b> — đừng để câu chuyện đều đều.</li><li><b>Kết có hậu hoặc gợi mở</b> — đừng kết cụt lủn.</li></ul>',
        'Chi tiết + thoại giúp truyện <i>sống</i> — không chỉ là chuỗi sự kiện khô khan.',
      ],
      [
        'Sai — <b>Không có nhân vật</b> không đúng. Phải chọn <i>Có chi tiết sinh động, lời thoại tự nhiên</i> vì chi tiết sinh động + lời thoại tự nhiên + cao trào → câu chuyện hấp dẫn.',
        'Sai — <b>Toàn liệt kê</b> không đúng. Phải chọn <i>Có chi tiết sinh động, lời thoại tự nhiên</i> vì chi tiết sinh động + lời thoại tự nhiên + cao trào → câu chuyện hấp dẫn.',
        'Sai — <b>Khô khan</b> không đúng. Phải chọn <i>Có chi tiết sinh động, lời thoại tự nhiên</i> vì chi tiết sinh động + lời thoại tự nhiên + cao trào → câu chuyện hấp dẫn.',
        'Đúng — <b>Có chi tiết sinh động, lời thoại tự nhiên</b>. Chi tiết sinh động + lời thoại tự nhiên + cao trào → câu chuyện hấp dẫn.',
      ]
    ),
  ]),

  M(27, 'Văn biểu cảm', [
    Q('Văn biểu cảm dùng để?',
      ['Liệt kê số liệu', 'Báo cáo sự kiện', 'Hướng dẫn cách làm', 'Bộc lộ tình cảm, cảm xúc của người viết'], 3,
      'Văn biểu cảm = bộc lộ tình cảm, cảm xúc, sự đánh giá của người viết.',
      [
        '<b>Văn biểu cảm</b> là kiểu văn bản dùng để <i>bộc lộ tình cảm, cảm xúc, sự đánh giá</i> của người viết đối với một con người, sự vật, sự việc, cảnh trong cuộc sống.',
        '<b>Mục đích</b>: chia sẻ tình cảm, gây <i>rung cảm</i> cho người đọc.',
        '⚠️ Khác:',
        '<ul><li><b>Tự sự</b>: kể chuyện.</li><li><b>Miêu tả</b>: vẽ hình ảnh.</li><li><b>Nghị luận</b>: thuyết phục.</li></ul>',
      ],
      [
        'Sai — <b>Liệt kê số liệu</b> không đúng. Phải chọn <i>Bộc lộ tình cảm, cảm xúc của người viết</i> vì văn biểu cảm = bộc lộ tình cảm, cảm xúc, sự đánh giá của người viết.',
        'Sai — <b>Báo cáo sự kiện</b> không đúng. Phải chọn <i>Bộc lộ tình cảm, cảm xúc của người viết</i> vì văn biểu cảm = bộc lộ tình cảm, cảm xúc, sự đánh giá của người viết.',
        'Sai — <b>Hướng dẫn cách làm</b> không đúng. Phải chọn <i>Bộc lộ tình cảm, cảm xúc của người viết</i> vì văn biểu cảm = bộc lộ tình cảm, cảm xúc, sự đánh giá của người viết.',
        'Đúng — <b>Bộc lộ tình cảm, cảm xúc của người viết</b>. Văn biểu cảm = bộc lộ tình cảm, cảm xúc, sự đánh giá của người viết.',
      ]
    ),
    Q('Đối tượng biểu cảm có thể là?',
      ['Chỉ con người', 'Chỉ đồ vật', 'Người, sự vật, cảnh, sự việc gợi cảm xúc cho người viết', 'Chỉ cảnh'], 2,
      'Mọi thứ khơi cảm xúc đều có thể là đối tượng biểu cảm.',
      [
        '<b>Đối tượng biểu cảm</b> rất đa dạng:',
        '<ul><li><b>Con người</b>: mẹ, bố, ông bà, thầy cô, bạn bè.</li><li><b>Sự vật</b>: cuốn sách cũ, chiếc xe đạp của mẹ.</li><li><b>Cảnh</b>: dòng sông quê, sân trường, mái nhà.</li><li><b>Sự việc</b>: một kỉ niệm, một buổi chia tay.</li></ul>',
        'Miễn là <i>khơi gợi cảm xúc</i> cho người viết — đều có thể biểu cảm.',
      ],
      [
        'Sai — <b>Chỉ con người</b> không đúng. Phải chọn <i>Người, sự vật, cảnh, sự việc gợi cảm xúc cho người viết</i> vì mọi thứ khơi cảm xúc đều có thể là đối tượng biểu cảm.',
        'Sai — <b>Chỉ đồ vật</b> không đúng. Phải chọn <i>Người, sự vật, cảnh, sự việc gợi cảm xúc cho người viết</i> vì mọi thứ khơi cảm xúc đều có thể là đối tượng biểu cảm.',
        'Đúng — <b>Người, sự vật, cảnh, sự việc gợi cảm xúc cho người viết</b>. Mọi thứ khơi cảm xúc đều có thể là đối tượng biểu cảm.',
        'Sai — <b>Chỉ cảnh</b> không đúng. Phải chọn <i>Người, sự vật, cảnh, sự việc gợi cảm xúc cho người viết</i> vì mọi thứ khơi cảm xúc đều có thể là đối tượng biểu cảm.',
      ]
    ),
    Q('Cảm xúc trong văn biểu cảm cần?',
      ['Chân thật, sâu sắc', 'Vô cảm', 'Giả tạo', 'Khoa trương trống rỗng'], 0,
      'Cảm xúc phải chân thật, sâu sắc — không giả tạo, không sáo rỗng.',
      [
        '<b>Ba yêu cầu cảm xúc</b>:',
        '<ul><li><b>Chân thật</b> — không giả tạo, không sáo rỗng.</li><li><b>Sâu sắc</b> — không hời hợt một chiều.</li><li><b>Cụ thể</b> — gắn với chi tiết, sự việc thực.</li></ul>',
        '<b>Chân thật</b> là gốc của biểu cảm. Cảm xúc giả tạo, khoa trương dễ bị người đọc nhận ra ngay.',
      ],
      [
        'Đúng — <b>Chân thật, sâu sắc</b>. Cảm xúc phải chân thật, sâu sắc — không giả tạo, không sáo rỗng.',
        'Sai — <b>Vô cảm</b> không đúng. Phải chọn <i>Chân thật, sâu sắc</i> vì cảm xúc phải chân thật, sâu sắc — không giả tạo, không sáo rỗng.',
        'Sai — <b>Giả tạo</b> không đúng. Phải chọn <i>Chân thật, sâu sắc</i> vì cảm xúc phải chân thật, sâu sắc — không giả tạo, không sáo rỗng.',
        'Sai — <b>Khoa trương trống rỗng</b> không đúng. Phải chọn <i>Chân thật, sâu sắc</i> vì cảm xúc phải chân thật, sâu sắc — không giả tạo, không sáo rỗng.',
      ]
    ),
    Q('Câu nào mang tính biểu cảm rõ?',
      ['Sông dài 5km.', 'Sông có 3 cầu.', 'Đoàn 30 người đi qua sông.', '"Ôi, dòng sông quê hương yêu dấu của tôi!"'], 3,
      'Lời gọi "Ôi" + tính từ cảm xúc "yêu dấu" → biểu cảm rõ.',
      [
        '<b>Soi từng câu</b>:',
        '<ul><li>❌ "Sông dài 5km" — câu <i>thông tin</i>, không cảm xúc.</li><li>❌ "Sông có 3 cầu" — câu <i>thông tin</i>.</li><li>❌ "Đoàn 30 người đi qua sông" — câu <i>kể</i>.</li><li>✅ "<b>Ôi, dòng sông quê hương yêu dấu của tôi!</b>" — có <i>lời gọi cảm thán</i> + <i>tính từ cảm xúc</i> → biểu cảm.</li></ul>',
        'Dấu hiệu biểu cảm: <b>"ôi", "ơi", "yêu", "thương", "nhớ"</b>… + dấu chấm than.',
      ],
      [
        'Sai — <b>Sông dài 5km.</b> không đúng. Phải chọn <i>"Ôi, dòng sông quê hương yêu dấu của tôi!"</i> vì lời gọi "Ôi" + tính từ cảm xúc "yêu dấu" → biểu cảm rõ.',
        'Sai — <b>Sông có 3 cầu.</b> không đúng. Phải chọn <i>"Ôi, dòng sông quê hương yêu dấu của tôi!"</i> vì lời gọi "Ôi" + tính từ cảm xúc "yêu dấu" → biểu cảm rõ.',
        'Sai — <b>Đoàn 30 người đi qua sông.</b> không đúng. Phải chọn <i>"Ôi, dòng sông quê hương yêu dấu của tôi!"</i> vì lời gọi "Ôi" + tính từ cảm xúc "yêu dấu" → biểu cảm rõ.',
        'Đúng — <b>"Ôi, dòng sông quê hương yêu dấu của tôi!"</b>. Lời gọi "Ôi" + tính từ cảm xúc "yêu dấu" → biểu cảm rõ.',
      ]
    ),
    Q('Văn biểu cảm có thể kết hợp?',
      ['Tự sự + miêu tả để làm nền cho cảm xúc', 'Toàn số liệu', 'Toàn công thức', 'Toàn bảng biểu'], 0,
      'Văn biểu cảm hiện đại thường kết hợp tự sự + miêu tả → làm nền cho cảm xúc.',
      [
        '<b>Kết hợp các kiểu văn</b> trong biểu cảm hiện đại:',
        '<ul><li><b>Tự sự</b> (kể một kỉ niệm) — làm nền cho cảm xúc.</li><li><b>Miêu tả</b> (vẽ chân dung, tả cảnh) — gợi hình ảnh.</li><li><b>Biểu cảm trực tiếp</b> — gọi tên cảm xúc.</li></ul>',
        'Ba yếu tố <i>đan xen</i> → bài biểu cảm sâu sắc, không sáo rỗng.',
      ],
      [
        'Đúng — <b>Tự sự + miêu tả để làm nền cho cảm xúc</b>. Văn biểu cảm hiện đại thường kết hợp tự sự + miêu tả → làm nền cho cảm xúc.',
        'Sai — <b>Toàn số liệu</b> không đúng. Phải chọn <i>Tự sự + miêu tả để làm nền cho cảm xúc</i> vì văn biểu cảm hiện đại thường kết hợp tự sự + miêu tả → làm nền cho cảm xúc.',
        'Sai — <b>Toàn công thức</b> không đúng. Phải chọn <i>Tự sự + miêu tả để làm nền cho cảm xúc</i> vì văn biểu cảm hiện đại thường kết hợp tự sự + miêu tả → làm nền cho cảm xúc.',
        'Sai — <b>Toàn bảng biểu</b> không đúng. Phải chọn <i>Tự sự + miêu tả để làm nền cho cảm xúc</i> vì văn biểu cảm hiện đại thường kết hợp tự sự + miêu tả → làm nền cho cảm xúc.',
      ]
    ),
    Q('Khi viết bài biểu cảm về một người thân, cần?',
      ['Tả ngoại hình khô khan', 'Chỉ liệt kê tên tuổi', 'Chép tiểu sử', 'Chọn kỉ niệm, chi tiết đáng nhớ + bộc lộ cảm xúc'], 3,
      'Chọn kỉ niệm + chi tiết cụ thể + cảm xúc chân thành → đúng văn biểu cảm.',
      [
        '<b>Cách viết bài biểu cảm về người thân</b>:',
        '<ul><li>Chọn <b>kỉ niệm đáng nhớ</b>, có ý nghĩa.</li><li>Đưa <b>chi tiết cụ thể</b> — đời thường, đắt giá.</li><li>Bộc lộ <b>cảm xúc chân thành</b>.</li></ul>',
        '⚠️ Một bài biểu cảm hay <i>không cần dùng nhiều từ "yêu", "thương"</i> — mà cần chi tiết đời thường đủ chạm vào tim người đọc.',
        'Ví dụ: "Mẹ ngồi vá lại cái áo cũ cho em đến tận khuya, ánh đèn vàng trầm đục soi rõ cả nếp nhăn quanh mắt mẹ" — chi tiết nhỏ mà ngấm.',
      ],
      [
        'Sai — <b>Tả ngoại hình khô khan</b> không đúng. Phải chọn <i>Chọn kỉ niệm, chi tiết đáng nhớ + bộc lộ cảm xúc</i> vì chọn kỉ niệm + chi tiết cụ thể + cảm xúc chân thành → đúng văn biểu cảm.',
        'Sai — <b>Chỉ liệt kê tên tuổi</b> không đúng. Phải chọn <i>Chọn kỉ niệm, chi tiết đáng nhớ + bộc lộ cảm xúc</i> vì chọn kỉ niệm + chi tiết cụ thể + cảm xúc chân thành → đúng văn biểu cảm.',
        'Sai — <b>Chép tiểu sử</b> không đúng. Phải chọn <i>Chọn kỉ niệm, chi tiết đáng nhớ + bộc lộ cảm xúc</i> vì chọn kỉ niệm + chi tiết cụ thể + cảm xúc chân thành → đúng văn biểu cảm.',
        'Đúng — <b>Chọn kỉ niệm, chi tiết đáng nhớ + bộc lộ cảm xúc</b>. Chọn kỉ niệm + chi tiết cụ thể + cảm xúc chân thành → đúng văn biểu cảm.',
      ]
    ),
  ]),

  M(28, 'Lập dàn ý bài văn', [
    Q('Vai trò của dàn ý?',
      ['Tăng số trang', 'Làm bài dài hơn', 'Không cần thiết', 'Giúp bài viết mạch lạc, đủ ý, không lan man'], 3,
      'Dàn ý = "khung xương" của bài văn — giúp bài mạch lạc, đủ ý, không lan man.',
      [
        '<b>Dàn ý</b> là bản kế hoạch trước khi viết. Có dàn ý, em sẽ:',
        '<ul><li>Tránh viết <b>lan man, lạc đề</b>.</li><li>Đảm bảo <b>đủ ý</b>, không sót.</li><li>Sắp xếp ý <b>mạch lạc</b>, không lộn xộn.</li><li>Tiết kiệm <b>thời gian</b> viết bài.</li></ul>',
        'Dàn ý là <i>"khung xương"</i> của bài văn — không có nó, bài dễ sụp.',
      ],
      [
        'Sai — <b>Tăng số trang</b> không đúng. Phải chọn <i>Giúp bài viết mạch lạc, đủ ý, không lan man</i> vì dàn ý = "khung xương" của bài văn — giúp bài mạch lạc, đủ ý, không lan man.',
        'Sai — <b>Làm bài dài hơn</b> không đúng. Phải chọn <i>Giúp bài viết mạch lạc, đủ ý, không lan man</i> vì dàn ý = "khung xương" của bài văn — giúp bài mạch lạc, đủ ý, không lan man.',
        'Sai — <b>Không cần thiết</b> không đúng. Phải chọn <i>Giúp bài viết mạch lạc, đủ ý, không lan man</i> vì dàn ý = "khung xương" của bài văn — giúp bài mạch lạc, đủ ý, không lan man.',
        'Đúng — <b>Giúp bài viết mạch lạc, đủ ý, không lan man</b>. Dàn ý = "khung xương" của bài văn — giúp bài mạch lạc, đủ ý, không lan man.',
      ]
    ),
    Q('Dàn ý gồm mấy phần chính?',
      ['5 phần', '1 phần', '2 phần', '3 phần: Mở bài – Thân bài – Kết bài'], 3,
      'Ba phần cơ bản: Mở bài – Thân bài – Kết bài.',
      [
        '<b>Cấu trúc dàn ý ba phần</b>:',
        '<ul><li><b>Mở bài</b>: giới thiệu đối tượng/vấn đề, cảm hứng chung.</li><li><b>Thân bài</b>: triển khai các ý lớn — mỗi ý lớn có các ý nhỏ làm rõ.</li><li><b>Kết bài</b>: khái quát, nêu cảm nghĩ/bài học/ý nghĩa.</li></ul>',
        'Đây là <i>"công thức bất biến"</i> cho mọi loại bài văn — tả, kể, biểu cảm, nghị luận.',
      ],
      [
        'Sai — <b>5 phần</b> không đúng. Phải chọn <i>3 phần: Mở bài – Thân bài – Kết bài</i> vì ba phần cơ bản: Mở bài – Thân bài – Kết bài.',
        'Sai — <b>1 phần</b> không đúng. Phải chọn <i>3 phần: Mở bài – Thân bài – Kết bài</i> vì ba phần cơ bản: Mở bài – Thân bài – Kết bài.',
        'Sai — <b>2 phần</b> không đúng. Phải chọn <i>3 phần: Mở bài – Thân bài – Kết bài</i> vì ba phần cơ bản: Mở bài – Thân bài – Kết bài.',
        'Đúng — <b>3 phần: Mở bài – Thân bài – Kết bài</b>. Ba phần cơ bản: Mở bài – Thân bài – Kết bài.',
      ]
    ),
    Q('Mở bài nên?',
      ['Giới thiệu đối tượng và cảm hứng/khuynh hướng chung', 'Trống không', 'Toàn câu hỏi', 'Đi vào kết quả ngay'], 0,
      'Mở bài: giới thiệu đối tượng + dẫn dắt vào chủ đề + nêu cảm hứng chung.',
      [
        '<b>Nhiệm vụ của mở bài</b>:',
        '<ul><li><b>Giới thiệu</b> đối tượng/vấn đề.</li><li>Dẫn dắt vào chủ đề chính.</li><li>Nêu <b>cảm hứng, khuynh hướng chung</b>.</li></ul>',
        '⚠️ Tránh:',
        '<ul><li>Mở bài <i>trống không</i>, không có ý.</li><li>Vào kết quả ngay (mất hấp dẫn).</li><li>Lan man, dài dòng.</li></ul>',
      ],
      [
        'Đúng — <b>Giới thiệu đối tượng và cảm hứng/khuynh hướng chung</b>. Mở bài: giới thiệu đối tượng + dẫn dắt vào chủ đề + nêu cảm hứng chung.',
        'Sai — <b>Trống không</b> không đúng. Phải chọn <i>Giới thiệu đối tượng và cảm hứng/khuynh hướng chung</i> vì mở bài: giới thiệu đối tượng + dẫn dắt vào chủ đề + nêu cảm hứng chung.',
        'Sai — <b>Toàn câu hỏi</b> không đúng. Phải chọn <i>Giới thiệu đối tượng và cảm hứng/khuynh hướng chung</i> vì mở bài: giới thiệu đối tượng + dẫn dắt vào chủ đề + nêu cảm hứng chung.',
        'Sai — <b>Đi vào kết quả ngay</b> không đúng. Phải chọn <i>Giới thiệu đối tượng và cảm hứng/khuynh hướng chung</i> vì mở bài: giới thiệu đối tượng + dẫn dắt vào chủ đề + nêu cảm hứng chung.',
      ]
    ),
    Q('Thân bài nên?',
      ['Triển khai các ý chính theo trình tự hợp lí', 'Chỉ 1 câu', 'Liệt kê hỗn loạn', 'Bỏ trống'], 0,
      'Thân bài: triển khai các ý chính theo trình tự hợp lí — phần trọng tâm của bài.',
      [
        '<b>Thân bài</b> là phần <i>triển khai chính</i>:',
        '<ul><li>Đưa ra <b>3–4 ý lớn</b>.</li><li>Mỗi ý lớn có <b>2–3 ý nhỏ</b> làm rõ.</li><li>Sắp xếp theo <b>trình tự hợp lí</b> (không gian, thời gian, logic).</li><li>Mỗi ý lớn nên thành <b>1 đoạn văn</b>.</li></ul>',
        '⚠️ Đừng quá nhiều ý lớn (5–6) — bài sẽ <i>dàn trải, qua loa</i>.',
      ],
      [
        'Đúng — <b>Triển khai các ý chính theo trình tự hợp lí</b>. Thân bài: triển khai các ý chính theo trình tự hợp lí — phần trọng tâm của bài.',
        'Sai — <b>Chỉ 1 câu</b> không đúng. Phải chọn <i>Triển khai các ý chính theo trình tự hợp lí</i> vì thân bài: triển khai các ý chính theo trình tự hợp lí — phần trọng tâm của bài.',
        'Sai — <b>Liệt kê hỗn loạn</b> không đúng. Phải chọn <i>Triển khai các ý chính theo trình tự hợp lí</i> vì thân bài: triển khai các ý chính theo trình tự hợp lí — phần trọng tâm của bài.',
        'Sai — <b>Bỏ trống</b> không đúng. Phải chọn <i>Triển khai các ý chính theo trình tự hợp lí</i> vì thân bài: triển khai các ý chính theo trình tự hợp lí — phần trọng tâm của bài.',
      ]
    ),
    Q('Kết bài nên?',
      ['Lặp y mở bài', 'Khái quát, nêu cảm nghĩ hoặc bài học', 'Mở thêm vấn đề mới không liên quan', 'Chỉ kể lại sự việc đã nêu ở thân bài'], 1,
      'Kết bài: tổng kết + đọng lại cảm xúc/ý nghĩa.',
      [
        '<b>Nhiệm vụ của kết bài</b>:',
        '<ul><li><b>Khái quát</b> lại vấn đề.</li><li>Nêu <b>cảm nghĩ</b> hoặc <b>bài học</b>.</li><li>Để lại <i>ấn tượng</i> cho người đọc.</li></ul>',
        '⚠️ Tránh:',
        '<ul><li>Lặp y mở bài (nhàm).</li><li>Mở thêm vấn đề mới không liên quan (lạc đề).</li><li>Chỉ kể lại đã nói (thừa).</li></ul>',
      ],
      [
        'Sai — <b>Lặp y mở bài</b> không đúng. Phải chọn <i>Khái quát, nêu cảm nghĩ hoặc bài học</i> vì kết bài: tổng kết + đọng lại cảm xúc/ý nghĩa.',
        'Đúng — <b>Khái quát, nêu cảm nghĩ hoặc bài học</b>. Kết bài: tổng kết + đọng lại cảm xúc/ý nghĩa.',
        'Sai — <b>Mở thêm vấn đề mới không liên quan</b> không đúng. Phải chọn <i>Khái quát, nêu cảm nghĩ hoặc bài học</i> vì kết bài: tổng kết + đọng lại cảm xúc/ý nghĩa.',
        'Sai — <b>Chỉ kể lại sự việc đã nêu ở thân bài</b> không đúng. Phải chọn <i>Khái quát, nêu cảm nghĩ hoặc bài học</i> vì kết bài: tổng kết + đọng lại cảm xúc/ý nghĩa.',
      ]
    ),
    Q('Mỗi ý lớn trong dàn ý nên?',
      ['Đứng trơ trọi', 'Không cần làm rõ', 'Có ý nhỏ làm rõ', 'Trùng nhau'], 2,
      'Ý lớn cần có 2–3 ý nhỏ làm rõ → triển khai thành đoạn văn đầy đủ.',
      [
        '<b>Quan hệ ý lớn – ý nhỏ</b>:',
        '<ul><li>Một <b>ý lớn</b> thường có <i>2–3 ý nhỏ</i> làm rõ.</li><li>Mỗi <b>ý nhỏ</b> → thành 1–2 câu trong đoạn văn.</li><li>Cấu trúc: <code>ý lớn → ý nhỏ → câu văn → đoạn văn</code>.</li></ul>',
        'Ví dụ ý lớn "Ngoại hình mẹ" → ý nhỏ: tuổi, dáng người, mái tóc, đôi mắt.',
        'Ý lớn <b>không có ý nhỏ</b> → bài viết <i>trống rỗng, không có chiều sâu</i>.',
      ],
      [
        'Sai — <b>Đứng trơ trọi</b> không đúng. Phải chọn <i>Có ý nhỏ làm rõ</i> vì ý lớn cần có 2–3 ý nhỏ làm rõ → triển khai thành đoạn văn đầy đủ.',
        'Sai — <b>Không cần làm rõ</b> không đúng. Phải chọn <i>Có ý nhỏ làm rõ</i> vì ý lớn cần có 2–3 ý nhỏ làm rõ → triển khai thành đoạn văn đầy đủ.',
        'Đúng — <b>Có ý nhỏ làm rõ</b>. Ý lớn cần có 2–3 ý nhỏ làm rõ → triển khai thành đoạn văn đầy đủ.',
        'Sai — <b>Trùng nhau</b> không đúng. Phải chọn <i>Có ý nhỏ làm rõ</i> vì ý lớn cần có 2–3 ý nhỏ làm rõ → triển khai thành đoạn văn đầy đủ.',
      ]
    ),
  ]),

  M(29, 'Mở đoạn, thân đoạn, kết đoạn', [
    Q('Đoạn văn là?',
      ['Đơn vị tạo nên văn bản, có một ý chính', 'Một trang giấy', 'Một chữ', 'Câu đơn lẻ'], 0,
      'Đoạn văn = đơn vị tạo nên văn bản, gồm một nhóm câu xoay quanh một ý chính.',
      [
        '<b>Đoạn văn</b> là đơn vị tạo nên văn bản, gồm một nhóm câu xoay quanh <i>một ý chính</i> (gọi là <b>chủ đề đoạn</b>).',
        '<b>Quy ước hình thức</b>:',
        '<ul><li>Mở đầu đoạn lùi vào <b>một ô</b>.</li><li>Kết thúc đoạn <b>xuống dòng</b>.</li><li>Mỗi đoạn 5–10 câu là vừa.</li></ul>',
      ],
      [
        'Đúng — <b>Đơn vị tạo nên văn bản, có một ý chính</b>. Đoạn văn = đơn vị tạo nên văn bản, gồm một nhóm câu xoay quanh một ý chính.',
        'Sai — <b>Một trang giấy</b> không đúng. Phải chọn <i>Đơn vị tạo nên văn bản, có một ý chính</i> vì đoạn văn = đơn vị tạo nên văn bản, gồm một nhóm câu xoay quanh một ý chính.',
        'Sai — <b>Một chữ</b> không đúng. Phải chọn <i>Đơn vị tạo nên văn bản, có một ý chính</i> vì đoạn văn = đơn vị tạo nên văn bản, gồm một nhóm câu xoay quanh một ý chính.',
        'Sai — <b>Câu đơn lẻ</b> không đúng. Phải chọn <i>Đơn vị tạo nên văn bản, có một ý chính</i> vì đoạn văn = đơn vị tạo nên văn bản, gồm một nhóm câu xoay quanh một ý chính.',
      ]
    ),
    Q('Câu chủ đề của đoạn thường?',
      ['Luôn ở giữa', 'Đứng bên lề', 'Mở đoạn (diễn dịch) hoặc kết đoạn (quy nạp)', 'Luôn nằm rải rác ở mọi câu trong đoạn'], 2,
      'Câu chủ đề ở đầu đoạn (diễn dịch) hoặc cuối đoạn (quy nạp).',
      [
        '<b>Vị trí câu chủ đề</b>:',
        '<ul><li><b>Đầu đoạn</b> — đoạn <i>diễn dịch</i> (tổng → phân).</li><li><b>Cuối đoạn</b> — đoạn <i>quy nạp</i> (phân → tổng).</li><li><b>Đầu và cuối</b> — đoạn <i>tổng – phân – hợp</i>.</li></ul>',
        '<b>Câu chủ đề</b>: nêu trực tiếp ý chính của đoạn.',
      ],
      [
        'Sai — <b>Luôn ở giữa</b> không đúng. Phải chọn <i>Mở đoạn (diễn dịch) hoặc kết đoạn (quy nạp)</i> vì câu chủ đề ở đầu đoạn (diễn dịch) hoặc cuối đoạn (quy nạp).',
        'Sai — <b>Đứng bên lề</b> không đúng. Phải chọn <i>Mở đoạn (diễn dịch) hoặc kết đoạn (quy nạp)</i> vì câu chủ đề ở đầu đoạn (diễn dịch) hoặc cuối đoạn (quy nạp).',
        'Đúng — <b>Mở đoạn (diễn dịch) hoặc kết đoạn (quy nạp)</b>. Câu chủ đề ở đầu đoạn (diễn dịch) hoặc cuối đoạn (quy nạp).',
        'Sai — <b>Luôn nằm rải rác ở mọi câu trong đoạn</b> không đúng. Phải chọn <i>Mở đoạn (diễn dịch) hoặc kết đoạn (quy nạp)</i> vì câu chủ đề ở đầu đoạn (diễn dịch) hoặc cuối đoạn (quy nạp).',
      ]
    ),
    Q('Thân đoạn dùng để?',
      ['Tách khỏi câu chủ đề', 'Đi lạc chủ đề', 'Đặt câu hỏi vô nghĩa', 'Triển khai, làm rõ câu chủ đề bằng lí lẽ/dẫn chứng'], 3,
      'Thân đoạn = bộ phận làm rõ câu chủ đề bằng lí lẽ, dẫn chứng.',
      [
        '<b>Thân đoạn</b> = phần triển khai, làm rõ câu chủ đề.',
        '<b>Cách triển khai</b>:',
        '<ul><li>Đưa <b>lí lẽ</b> giải thích.</li><li>Đưa <b>dẫn chứng</b> cụ thể.</li><li>Đưa <b>ví dụ</b> minh hoạ.</li></ul>',
        '⚠️ Thân đoạn phải <i>bám sát câu chủ đề</i> — không lạc đề.',
      ],
      [
        'Sai — <b>Tách khỏi câu chủ đề</b> không đúng. Phải chọn <i>Triển khai, làm rõ câu chủ đề bằng lí lẽ/dẫn chứng</i> vì thân đoạn = bộ phận làm rõ câu chủ đề bằng lí lẽ, dẫn chứng.',
        'Sai — <b>Đi lạc chủ đề</b> không đúng. Phải chọn <i>Triển khai, làm rõ câu chủ đề bằng lí lẽ/dẫn chứng</i> vì thân đoạn = bộ phận làm rõ câu chủ đề bằng lí lẽ, dẫn chứng.',
        'Sai — <b>Đặt câu hỏi vô nghĩa</b> không đúng. Phải chọn <i>Triển khai, làm rõ câu chủ đề bằng lí lẽ/dẫn chứng</i> vì thân đoạn = bộ phận làm rõ câu chủ đề bằng lí lẽ, dẫn chứng.',
        'Đúng — <b>Triển khai, làm rõ câu chủ đề bằng lí lẽ/dẫn chứng</b>. Thân đoạn = bộ phận làm rõ câu chủ đề bằng lí lẽ, dẫn chứng.',
      ]
    ),
    Q('Kết đoạn (trong đoạn quy nạp) nên?',
      ['Mở vấn đề mới', 'Lặp y câu đầu', 'Chốt lại ý chính rút ra từ các câu trước', 'Đưa thêm dẫn chứng mới chưa nhắc ở trên'], 2,
      'Quy nạp: từ dẫn chứng → kết luận ở cuối đoạn.',
      [
        '<b>Đoạn quy nạp</b>:',
        '<ul><li>Các câu trước: <i>dẫn chứng, lí lẽ</i>.</li><li>Câu cuối: <b>chốt lại ý chính</b> rút ra từ các câu trước.</li></ul>',
        'Tạo bất ngờ, đẩy ý lên cao — phù hợp khi muốn <i>nhấn mạnh kết luận</i>.',
        '⚠️ Không nên mở vấn đề mới ở kết đoạn — lạc đề.',
      ],
      [
        'Sai — <b>Mở vấn đề mới</b> không đúng. Phải chọn <i>Chốt lại ý chính rút ra từ các câu trước</i> vì quy nạp: từ dẫn chứng → kết luận ở cuối đoạn.',
        'Sai — <b>Lặp y câu đầu</b> không đúng. Phải chọn <i>Chốt lại ý chính rút ra từ các câu trước</i> vì quy nạp: từ dẫn chứng → kết luận ở cuối đoạn.',
        'Đúng — <b>Chốt lại ý chính rút ra từ các câu trước</b>. Quy nạp: từ dẫn chứng → kết luận ở cuối đoạn.',
        'Sai — <b>Đưa thêm dẫn chứng mới chưa nhắc ở trên</b> không đúng. Phải chọn <i>Chốt lại ý chính rút ra từ các câu trước</i> vì quy nạp: từ dẫn chứng → kết luận ở cuối đoạn.',
      ]
    ),
    Q('Đoạn diễn dịch là?',
      ['Câu chủ đề ở giữa', 'Không có chủ đề', 'Câu chủ đề ở đầu, các câu sau làm rõ', 'Câu chủ đề ở cuối'], 2,
      'Diễn dịch = câu chủ đề ở ĐẦU, các câu sau triển khai làm rõ (tổng → phân).',
      [
        '<b>Đoạn diễn dịch</b>:',
        '<ul><li><b>Câu chủ đề</b> đứng <i>đầu đoạn</i>, nêu ý chính.</li><li>Các câu sau <i>triển khai, làm rõ</i>.</li><li>Cấu trúc: <code>tổng → phân</code>.</li></ul>',
        'Đây là kiểu <i>phổ biến nhất</i>, dễ đọc, dễ viết.',
        'Ví dụ: "Cây tre rất gắn bó với người Việt." (chủ đề) + các câu sau dẫn chứng.',
      ],
      [
        'Sai — <b>Câu chủ đề ở giữa</b> không đúng. Phải chọn <i>Câu chủ đề ở đầu, các câu sau làm rõ</i> vì diễn dịch = câu chủ đề ở ĐẦU, các câu sau triển khai làm rõ (tổng → phân).',
        'Sai — <b>Không có chủ đề</b> không đúng. Phải chọn <i>Câu chủ đề ở đầu, các câu sau làm rõ</i> vì diễn dịch = câu chủ đề ở ĐẦU, các câu sau triển khai làm rõ (tổng → phân).',
        'Đúng — <b>Câu chủ đề ở đầu, các câu sau làm rõ</b>. Diễn dịch = câu chủ đề ở ĐẦU, các câu sau triển khai làm rõ (tổng → phân).',
        'Sai — <b>Câu chủ đề ở cuối</b> không đúng. Phải chọn <i>Câu chủ đề ở đầu, các câu sau làm rõ</i> vì diễn dịch = câu chủ đề ở ĐẦU, các câu sau triển khai làm rõ (tổng → phân).',
      ]
    ),
    Q('Liên kết đoạn cần?',
      ['Dùng từ nối, đại từ, lặp ý phù hợp', 'Trộn ngẫu nhiên', 'Ngắt tuỳ ý', 'Bỏ mặc'], 0,
      'Liên kết bằng từ nối, đại từ, lặp ý → giúp đoạn gắn kết mạch lạc.',
      [
        '<b>Phương tiện liên kết đoạn</b>:',
        '<ul><li><b>Từ nối</b>: <code>trước hết, tiếp theo, cuối cùng, tuy nhiên, vì vậy</code>…</li><li><b>Đại từ</b>: thay cho danh từ đã nhắc.</li><li><b>Lặp ý</b>: từ đoạn trước được nhắc lại ở đoạn sau.</li></ul>',
        'Liên kết tốt giúp bài văn <i>mạch lạc, không rời rạc</i>.',
      ],
      [
        'Đúng — <b>Dùng từ nối, đại từ, lặp ý phù hợp</b>. Liên kết bằng từ nối, đại từ, lặp ý → giúp đoạn gắn kết mạch lạc.',
        'Sai — <b>Trộn ngẫu nhiên</b> không đúng. Phải chọn <i>Dùng từ nối, đại từ, lặp ý phù hợp</i> vì liên kết bằng từ nối, đại từ, lặp ý → giúp đoạn gắn kết mạch lạc.',
        'Sai — <b>Ngắt tuỳ ý</b> không đúng. Phải chọn <i>Dùng từ nối, đại từ, lặp ý phù hợp</i> vì liên kết bằng từ nối, đại từ, lặp ý → giúp đoạn gắn kết mạch lạc.',
        'Sai — <b>Bỏ mặc</b> không đúng. Phải chọn <i>Dùng từ nối, đại từ, lặp ý phù hợp</i> vì liên kết bằng từ nối, đại từ, lặp ý → giúp đoạn gắn kết mạch lạc.',
      ]
    ),
  ]),

  M(30, 'Dấu câu: chấm, phẩy, chấm hỏi, chấm than', [
    Q('Dấu chấm dùng để?',
      ['Kết thúc câu cảm', 'Kết thúc câu hỏi', 'Kết thúc câu trần thuật', 'Liệt kê'], 2,
      'Dấu chấm = kết thúc câu trần thuật (câu kể, câu tả, câu nhận xét).',
      [
        '<b>Dấu chấm (.)</b> dùng để kết thúc <i>câu trần thuật</i>:',
        '<ul><li>Câu <b>kể</b>: "Em đang đọc sách."</li><li>Câu <b>tả</b>: "Bầu trời rất xanh."</li><li>Câu <b>nhận xét</b>: "Bài thơ này hay."</li></ul>',
        '⚠️ Sau dấu chấm, từ tiếp theo <b>phải viết hoa</b>.',
      ],
      [
        'Sai — <b>Kết thúc câu cảm</b> không đúng. Phải chọn <i>Kết thúc câu trần thuật</i> vì dấu chấm = kết thúc câu trần thuật (câu kể, câu tả, câu nhận xét).',
        'Sai — <b>Kết thúc câu hỏi</b> không đúng. Phải chọn <i>Kết thúc câu trần thuật</i> vì dấu chấm = kết thúc câu trần thuật (câu kể, câu tả, câu nhận xét).',
        'Đúng — <b>Kết thúc câu trần thuật</b>. Dấu chấm = kết thúc câu trần thuật (câu kể, câu tả, câu nhận xét).',
        'Sai — <b>Liệt kê</b> không đúng. Phải chọn <i>Kết thúc câu trần thuật</i> vì dấu chấm = kết thúc câu trần thuật (câu kể, câu tả, câu nhận xét).',
      ]
    ),
    Q('Dấu phẩy dùng để?',
      ['Ngăn cách thành phần câu, các bộ phận đồng chức', 'Đặt cuối bài', 'Đặt giữa từ', 'Kết thúc câu'], 0,
      'Dấu phẩy: ngăn cách các thành phần, bộ phận đồng chức.',
      [
        '<b>Dấu phẩy (,)</b> dùng để ngăn cách:',
        '<ul><li>Các bộ phận <b>đồng chức năng</b>: "Lan, Hà, Mai đều học giỏi."</li><li><b>Trạng ngữ</b> với nòng cốt: "Sáng nay, em đi học sớm."</li><li>Các <b>vế trong câu ghép</b>: "Trời mưa, em mặc áo mưa."</li></ul>',
        'Dấu phẩy giúp câu <b>rõ cấu trúc</b>, dễ đọc.',
      ],
      [
        'Đúng — <b>Ngăn cách thành phần câu, các bộ phận đồng chức</b>. Dấu phẩy: ngăn cách các thành phần, bộ phận đồng chức.',
        'Sai — <b>Đặt cuối bài</b> không đúng. Phải chọn <i>Ngăn cách thành phần câu, các bộ phận đồng chức</i> vì dấu phẩy: ngăn cách các thành phần, bộ phận đồng chức.',
        'Sai — <b>Đặt giữa từ</b> không đúng. Phải chọn <i>Ngăn cách thành phần câu, các bộ phận đồng chức</i> vì dấu phẩy: ngăn cách các thành phần, bộ phận đồng chức.',
        'Sai — <b>Kết thúc câu</b> không đúng. Phải chọn <i>Ngăn cách thành phần câu, các bộ phận đồng chức</i> vì dấu phẩy: ngăn cách các thành phần, bộ phận đồng chức.',
      ]
    ),
    Q('Câu nào dùng dấu phẩy đúng?',
      ['Hôm nay, em đi học sớm.', 'Hôm nay em, đi học sớm.', 'Hôm nay em đi, học sớm.', 'Hôm nay em đi học sớm,'], 0,
      'Tách trạng ngữ "Hôm nay" với nòng cốt câu bằng dấu phẩy → đúng.',
      [
        '<b>Soi từng câu</b>:',
        '<ul><li>✅ "<b>Hôm nay, em đi học sớm</b>" — dấu phẩy tách trạng ngữ "Hôm nay" với nòng cốt.</li><li>❌ "Hôm nay em, đi học sớm" — dấu phẩy giữa chủ ngữ và vị ngữ, <i>sai</i>.</li><li>❌ "Hôm nay em đi, học sớm" — dấu phẩy chia đôi vị ngữ, <i>sai</i>.</li><li>❌ "Hôm nay em đi học sớm," — dấu phẩy cuối câu, <i>sai</i> (phải dấu chấm).</li></ul>',
      ],
      [
        'Đúng — <b>Hôm nay, em đi học sớm.</b>. Tách trạng ngữ "Hôm nay" với nòng cốt câu bằng dấu phẩy → đúng.',
        'Sai — <b>Hôm nay em, đi học sớm.</b> không đúng. Phải chọn <i>Hôm nay, em đi học sớm.</i> vì tách trạng ngữ "Hôm nay" với nòng cốt câu bằng dấu phẩy → đúng.',
        'Sai — <b>Hôm nay em đi, học sớm.</b> không đúng. Phải chọn <i>Hôm nay, em đi học sớm.</i> vì tách trạng ngữ "Hôm nay" với nòng cốt câu bằng dấu phẩy → đúng.',
        'Sai — <b>Hôm nay em đi học sớm,</b> không đúng. Phải chọn <i>Hôm nay, em đi học sớm.</i> vì tách trạng ngữ "Hôm nay" với nòng cốt câu bằng dấu phẩy → đúng.',
      ]
    ),
    Q('Dấu chấm hỏi dùng?',
      ['Tách thành phần', 'Kết thúc trần thuật', 'Kết thúc câu hỏi', 'Kết thúc cảm thán'], 2,
      'Dấu chấm hỏi (?) đặt cuối câu nghi vấn (câu hỏi).',
      [
        '<b>Dấu chấm hỏi (?)</b> đặt cuối câu <i>nghi vấn</i>:',
        '<ul><li>Câu chứa từ: <code>ai, gì, nào, sao, đâu, không, à, ư, hả</code>…</li><li>Ví dụ: "Em đã làm bài tập chưa?"</li></ul>',
        'Đây là <b>dấu hiệu rõ nhất</b> của câu hỏi trong văn viết.',
      ],
      [
        'Sai — <b>Tách thành phần</b> không đúng. Phải chọn <i>Kết thúc câu hỏi</i> vì dấu chấm hỏi (?) đặt cuối câu nghi vấn (câu hỏi).',
        'Sai — <b>Kết thúc trần thuật</b> không đúng. Phải chọn <i>Kết thúc câu hỏi</i> vì dấu chấm hỏi (?) đặt cuối câu nghi vấn (câu hỏi).',
        'Đúng — <b>Kết thúc câu hỏi</b>. Dấu chấm hỏi (?) đặt cuối câu nghi vấn (câu hỏi).',
        'Sai — <b>Kết thúc cảm thán</b> không đúng. Phải chọn <i>Kết thúc câu hỏi</i> vì dấu chấm hỏi (?) đặt cuối câu nghi vấn (câu hỏi).',
      ]
    ),
    Q('Dấu chấm than dùng?',
      ['Đầu câu', 'Tách thành phần', 'Kết thúc câu cảm thán/cầu khiến mạnh', 'Giữa từ'], 2,
      'Dấu chấm than (!) = kết thúc câu cảm thán hoặc cầu khiến mạnh.',
      [
        '<b>Dấu chấm than (!)</b> dùng cho:',
        '<ul><li><b>Câu cảm thán</b>: "Ôi, bông hoa đẹp quá!"</li><li><b>Câu cầu khiến mạnh</b>: "Im lặng!"</li></ul>',
        'Đặt ở <b>cuối câu</b>, biểu thị cảm xúc mạnh hoặc lời ra lệnh.',
      ],
      [
        'Sai — <b>Đầu câu</b> không đúng. Phải chọn <i>Kết thúc câu cảm thán/cầu khiến mạnh</i> vì dấu chấm than (!) = kết thúc câu cảm thán hoặc cầu khiến mạnh.',
        'Sai — <b>Tách thành phần</b> không đúng. Phải chọn <i>Kết thúc câu cảm thán/cầu khiến mạnh</i> vì dấu chấm than (!) = kết thúc câu cảm thán hoặc cầu khiến mạnh.',
        'Đúng — <b>Kết thúc câu cảm thán/cầu khiến mạnh</b>. Dấu chấm than (!) = kết thúc câu cảm thán hoặc cầu khiến mạnh.',
        'Sai — <b>Giữa từ</b> không đúng. Phải chọn <i>Kết thúc câu cảm thán/cầu khiến mạnh</i> vì dấu chấm than (!) = kết thúc câu cảm thán hoặc cầu khiến mạnh.',
      ]
    ),
    Q('Câu "Ôi, đẹp quá!" — dấu cuối là?',
      ['Chấm hỏi', 'Chấm than', 'Dấu chấm', 'Dấu ba chấm'], 1,
      'Câu cảm thán "Ôi, đẹp quá!" → kết bằng dấu chấm than.',
      [
        '<b>Phân tích câu</b> "Ôi, đẹp quá!":',
        '<ul><li>"<b>Ôi</b>" — thán từ bộc lộ cảm xúc.</li><li>"<b>đẹp quá</b>" — bộc lộ cảm xúc mạnh.</li></ul>',
        '→ Câu <b>cảm thán</b> → kết bằng <b>dấu chấm than (!)</b>.',
        'Mẹo: thấy <code>ôi, ơi, chao, eo ôi</code> + cảm xúc mạnh → dùng dấu chấm than.',
      ],
      [
        'Sai — <b>Chấm hỏi</b> không đúng. Phải chọn <i>Chấm than</i> vì câu cảm thán "Ôi, đẹp quá!" → kết bằng dấu chấm than.',
        'Đúng — <b>Chấm than</b>. Câu cảm thán "Ôi, đẹp quá!" → kết bằng dấu chấm than. Đây là phương án chính xác theo nội dung bài học.',
        'Sai — <b>Dấu chấm</b> không đúng. Phải chọn <i>Chấm than</i> vì câu cảm thán "Ôi, đẹp quá!" → kết bằng dấu chấm than.',
        'Sai — <b>Dấu ba chấm</b> không đúng. Phải chọn <i>Chấm than</i> vì câu cảm thán "Ôi, đẹp quá!" → kết bằng dấu chấm than.',
      ]
    ),
    ]),

  M(31, 'Dấu chấm phẩy, hai chấm, ngoặc kép', [
    Q('Dấu chấm phẩy (;) dùng để?',
      ['Đặt giữa từ', 'Mở thoại', 'Ngăn cách các vế câu ghép phức tạp hoặc các bộ phận liệt kê có cấu tạo phức', 'Kết thúc câu'], 2,
      'Dấu chấm phẩy "mạnh hơn dấu phẩy, yếu hơn dấu chấm" — ngăn các vế phức tạp.',
      [
        '<b>Dấu chấm phẩy (;)</b> — "mạnh hơn dấu phẩy, yếu hơn dấu chấm". Dùng để:',
        '<ul><li>Ngăn cách <b>các vế trong câu ghép phức tạp</b>.</li><li>Ngăn cách <b>các bộ phận liệt kê có cấu tạo phức tạp</b> (mỗi bộ phận đã có dấu phẩy bên trong).</li></ul>',
        'Ví dụ: "Trong lớp, có những bạn học giỏi văn, giỏi toán; có những bạn đam mê thể thao, âm nhạc; lại có những bạn nổi bật ở khả năng tổ chức."',
      ],
      [
        'Sai — <b>Đặt giữa từ</b> không đúng. Phải chọn <i>Ngăn cách các vế câu ghép phức tạp hoặc các bộ phận liệt kê có cấu tạo phức</i> vì dấu chấm phẩy "mạnh hơn dấu phẩy, yếu hơn dấu chấm" — ngăn các vế phức tạp.',
        'Sai — <b>Mở thoại</b> không đúng. Phải chọn <i>Ngăn cách các vế câu ghép phức tạp hoặc các bộ phận liệt kê có cấu tạo phức</i> vì dấu chấm phẩy "mạnh hơn dấu phẩy, yếu hơn dấu chấm" — ngăn các vế phức tạp.',
        'Đúng — <b>Ngăn cách các vế câu ghép phức tạp hoặc các bộ phận liệt kê có cấu tạo phức</b>. Dấu chấm phẩy "mạnh hơn dấu phẩy, yếu hơn dấu chấm" — ngăn các vế phức tạp.',
        'Sai — <b>Kết thúc câu</b> không đúng. Phải chọn <i>Ngăn cách các vế câu ghép phức tạp hoặc các bộ phận liệt kê có cấu tạo phức</i> vì dấu chấm phẩy "mạnh hơn dấu phẩy, yếu hơn dấu chấm" — ngăn các vế phức tạp.',
      ]
    ),
    Q('Dấu hai chấm (:) thường dùng để?',
      ['Mở câu hỏi', 'Báo trước phần giải thích, liệt kê hoặc lời dẫn', 'Kết thúc câu', 'Tách thành phần đồng chức nhỏ'], 1,
      'Dấu hai chấm = "sắp tới là phần làm rõ" — báo trước giải thích, liệt kê, lời dẫn.',
      [
        '<b>Dấu hai chấm (:)</b> báo trước:',
        '<ul><li><b>Lời dẫn trực tiếp</b>: "Cô nói: \'Các em cố lên.\'"</li><li><b>Lời giải thích, thuyết minh</b>: "Em mang theo đủ đồ: bút, vở, thước, tẩy."</li><li><b>Phần liệt kê</b>: "Trong vườn có: cam, chanh, bưởi."</li></ul>',
        '<i>"Sắp tới là phần làm rõ ở dưới"</i> — đó là tinh thần của dấu hai chấm.',
      ],
      [
        'Sai — <b>Mở câu hỏi</b> không đúng. Phải chọn <i>Báo trước phần giải thích, liệt kê hoặc lời dẫn</i> vì dấu hai chấm = "sắp tới là phần làm rõ" — báo trước giải thích, liệt kê, lời dẫn.',
        'Đúng — <b>Báo trước phần giải thích, liệt kê hoặc lời dẫn</b>. Dấu hai chấm = "sắp tới là phần làm rõ" — báo trước giải thích, liệt kê, lời dẫn.',
        'Sai — <b>Kết thúc câu</b> không đúng. Phải chọn <i>Báo trước phần giải thích, liệt kê hoặc lời dẫn</i> vì dấu hai chấm = "sắp tới là phần làm rõ" — báo trước giải thích, liệt kê, lời dẫn.',
        'Sai — <b>Tách thành phần đồng chức nhỏ</b> không đúng. Phải chọn <i>Báo trước phần giải thích, liệt kê hoặc lời dẫn</i> vì dấu hai chấm = "sắp tới là phần làm rõ" — báo trước giải thích, liệt kê, lời dẫn.',
      ]
    ),
    Q('Câu nào dùng dấu hai chấm đúng?',
      ['Em mua nhiều đồ: bút, vở, thước.', 'Em mua đồ.', 'Em: mua đồ rồi đi học.', 'Em mua: rồi đi học.'], 0,
      'Dấu hai chấm dẫn ra danh sách liệt kê → đúng.',
      [
        '<b>Soi từng câu</b>:',
        '<ul><li>✅ "<b>Em mua nhiều đồ: bút, vở, thước.</b>" — dấu hai chấm báo trước phần liệt kê.</li><li>❌ "Em mua đồ." — không cần dấu hai chấm.</li><li>❌ "Em: mua đồ rồi đi học" — dấu hai chấm sau chủ ngữ, <i>sai</i>.</li><li>❌ "Em mua: rồi đi học" — dấu hai chấm vô lí giữa câu.</li></ul>',
      ],
      [
        'Đúng — <b>Em mua nhiều đồ: bút, vở, thước.</b>. Dấu hai chấm dẫn ra danh sách liệt kê → đúng.',
        'Sai — <b>Em mua đồ.</b> không đúng. Phải chọn <i>Em mua nhiều đồ: bút, vở, thước.</i> vì dấu hai chấm dẫn ra danh sách liệt kê → đúng.',
        'Sai — <b>Em: mua đồ rồi đi học.</b> không đúng. Phải chọn <i>Em mua nhiều đồ: bút, vở, thước.</i> vì dấu hai chấm dẫn ra danh sách liệt kê → đúng.',
        'Sai — <b>Em mua: rồi đi học.</b> không đúng. Phải chọn <i>Em mua nhiều đồ: bút, vở, thước.</i> vì dấu hai chấm dẫn ra danh sách liệt kê → đúng.',
      ]
    ),
    Q('Dấu ngoặc kép ("…") thường dùng để?',
      ['Đánh dấu lời dẫn trực tiếp, tên tác phẩm hoặc nghĩa đặc biệt', 'Tách trạng ngữ', 'Ngắt từ', 'Kết thúc câu'], 0,
      'Ngoặc kép: lời dẫn trực tiếp, tên tác phẩm, nghĩa đặc biệt.',
      [
        '<b>Dấu ngoặc kép ("…")</b> dùng để:',
        '<ul><li>Đánh dấu <b>lời dẫn trực tiếp</b> — nguyên văn lời nói.</li><li>Đánh dấu <b>tên tác phẩm</b>, tác giả — "Dế Mèn phiêu lưu kí".</li><li>Đánh dấu từ ngữ hiểu theo <b>nghĩa đặc biệt</b>, nghĩa mỉa mai.</li></ul>',
      ],
      [
        'Đúng — <b>Đánh dấu lời dẫn trực tiếp, tên tác phẩm hoặc nghĩa đặc biệt</b>. Ngoặc kép: lời dẫn trực tiếp, tên tác phẩm, nghĩa đặc biệt.',
        'Sai — <b>Tách trạng ngữ</b> không đúng. Phải chọn <i>Đánh dấu lời dẫn trực tiếp, tên tác phẩm hoặc nghĩa đặc biệt</i> vì ngoặc kép: lời dẫn trực tiếp, tên tác phẩm, nghĩa đặc biệt.',
        'Sai — <b>Ngắt từ</b> không đúng. Phải chọn <i>Đánh dấu lời dẫn trực tiếp, tên tác phẩm hoặc nghĩa đặc biệt</i> vì ngoặc kép: lời dẫn trực tiếp, tên tác phẩm, nghĩa đặc biệt.',
        'Sai — <b>Kết thúc câu</b> không đúng. Phải chọn <i>Đánh dấu lời dẫn trực tiếp, tên tác phẩm hoặc nghĩa đặc biệt</i> vì ngoặc kép: lời dẫn trực tiếp, tên tác phẩm, nghĩa đặc biệt.',
      ]
    ),
    Q('Câu nào dùng ngoặc kép đúng?',
      ['"Các em" cần chăm học.', 'Cô nói các em cần chăm học."', 'Cô nói các em "cần" chăm học.', 'Cô nói: "Các em cần chăm học."'], 3,
      'Lời dẫn trực tiếp được đặt trong ngoặc kép, sau dấu hai chấm → đúng.',
      [
        '<b>Soi từng câu</b>:',
        '<ul><li>✅ "<b>Cô nói: \'Các em cần chăm học.\'</b>" — lời dẫn trực tiếp đặt trong ngoặc kép sau dấu hai chấm.</li><li>❌ \'"Các em" cần chăm học\' — ngoặc kép vô cớ.</li><li>❌ Mở ngoặc kép thiếu đầu.</li><li>❌ \'"cần"\' — nghĩa mỉa mai vô lí.</li></ul>',
        '<b>Công thức</b>: <code>: + " + lời nói + "</code>.',
      ],
      [
        'Sai — <b>"Các em" cần chăm học.</b> không đúng. Phải chọn <i>Cô nói: "Các em cần chăm học."</i> vì lời dẫn trực tiếp được đặt trong ngoặc kép, sau dấu hai chấm → đúng.',
        'Sai — <b>Cô nói các em cần chăm học."</b> không đúng. Phải chọn <i>Cô nói: "Các em cần chăm học."</i> vì lời dẫn trực tiếp được đặt trong ngoặc kép, sau dấu hai chấm → đúng.',
        'Sai — <b>Cô nói các em "cần" chăm học.</b> không đúng. Phải chọn <i>Cô nói: "Các em cần chăm học."</i> vì lời dẫn trực tiếp được đặt trong ngoặc kép, sau dấu hai chấm → đúng.',
        'Đúng — <b>Cô nói: "Các em cần chăm học."</b>. Lời dẫn trực tiếp được đặt trong ngoặc kép, sau dấu hai chấm → đúng.',
      ]
    ),
    Q('Khi viết tên tác phẩm trong bài, có thể?',
      ['Đặt trong ngoặc đơn', 'Để trống', 'Đặt sau dấu chấm', 'Đặt trong ngoặc kép, ví dụ: "Dế Mèn phiêu lưu kí"'], 3,
      'Quy ước: tên tác phẩm đặt trong ngoặc kép hoặc in nghiêng.',
      [
        '<b>Quy ước viết tên tác phẩm</b>:',
        '<ul><li><b>Trong ngoặc kép</b>: "Dế Mèn phiêu lưu kí", "Truyện Kiều", "Đất nước".</li><li><b>In nghiêng</b> (khi đánh máy): <i>Dế Mèn phiêu lưu kí</i>.</li></ul>',
        'Cả hai cách đều được, miễn <b>nhất quán trong bài</b>.',
      ],
      [
        'Sai — <b>Đặt trong ngoặc đơn</b> không đúng. Phải chọn <i>Đặt trong ngoặc kép, ví dụ: "Dế Mèn phiêu lưu kí"</i> vì quy ước: tên tác phẩm đặt trong ngoặc kép hoặc in nghiêng.',
        'Sai — <b>Để trống</b> không đúng. Phải chọn <i>Đặt trong ngoặc kép, ví dụ: "Dế Mèn phiêu lưu kí"</i> vì quy ước: tên tác phẩm đặt trong ngoặc kép hoặc in nghiêng.',
        'Sai — <b>Đặt sau dấu chấm</b> không đúng. Phải chọn <i>Đặt trong ngoặc kép, ví dụ: "Dế Mèn phiêu lưu kí"</i> vì quy ước: tên tác phẩm đặt trong ngoặc kép hoặc in nghiêng.',
        'Đúng — <b>Đặt trong ngoặc kép, ví dụ: "Dế Mèn phiêu lưu kí"</b>. Quy ước: tên tác phẩm đặt trong ngoặc kép hoặc in nghiêng.',
      ]
    ),
  ]),

  M(32, 'Phép tu từ điệp ngữ', [
    Q('Điệp ngữ là?',
      ['Phép so sánh', 'Phép lặp một từ/ngữ/câu để nhấn mạnh, gợi cảm', 'Phép ẩn dụ', 'Phép hoán dụ'], 1,
      'Điệp ngữ = lặp lại một từ/ngữ/câu có chủ ý để nhấn mạnh, tạo nhạc tính, gây ấn tượng.',
      [
        '<b>Điệp ngữ</b> là phép tu từ <i>lặp lại một từ, một ngữ hoặc một câu</i> nhằm:',
        '<ul><li><b>Nhấn mạnh</b> ý, cảm xúc.</li><li>Tạo <b>nhạc tính</b>, nhịp điệu.</li><li>Gây <b>ấn tượng mạnh</b>, khó quên.</li></ul>',
        'Như <i>"điệp khúc"</i> trong âm nhạc — phần được hát đi hát lại để nhấn mạnh.',
      ],
      [
        'Sai — <b>Phép so sánh</b> không đúng. Phải chọn <i>Phép lặp một từ/ngữ/câu để nhấn mạnh, gợi cảm</i> vì điệp ngữ = lặp lại một từ/ngữ/câu có chủ ý để nhấn mạnh, tạo nhạc tính, gây ấn tượng.',
        'Đúng — <b>Phép lặp một từ/ngữ/câu để nhấn mạnh, gợi cảm</b>. Điệp ngữ = lặp lại một từ/ngữ/câu có chủ ý để nhấn mạnh, tạo nhạc tính, gây ấn tượng.',
        'Sai — <b>Phép ẩn dụ</b> không đúng. Phải chọn <i>Phép lặp một từ/ngữ/câu để nhấn mạnh, gợi cảm</i> vì điệp ngữ = lặp lại một từ/ngữ/câu có chủ ý để nhấn mạnh, tạo nhạc tính, gây ấn tượng.',
        'Sai — <b>Phép hoán dụ</b> không đúng. Phải chọn <i>Phép lặp một từ/ngữ/câu để nhấn mạnh, gợi cảm</i> vì điệp ngữ = lặp lại một từ/ngữ/câu có chủ ý để nhấn mạnh, tạo nhạc tính, gây ấn tượng.',
      ]
    ),
    Q('"Đoàn kết, đoàn kết, đại đoàn kết" sử dụng?',
      ['Ẩn dụ', 'Điệp ngữ', 'So sánh', 'Nhân hoá'], 1,
      'Từ "đoàn kết" được lặp 3 lần → điệp ngữ nhấn mạnh sức mạnh đoàn kết.',
      [
        '<b>Phân tích câu nói của Bác Hồ</b>:',
        '<ul><li>"<b>Đoàn kết, đoàn kết, đại đoàn kết</b>" — lặp 3 lần "đoàn kết".</li><li>"<b>Thành công, thành công, đại thành công</b>" — lặp 3 lần "thành công".</li></ul>',
        '<b>Tác dụng</b>: nhấn mạnh sức mạnh đoàn kết và thành công; tạo nhịp điệu mạnh mẽ <i>như khẩu hiệu</i>; gây ấn tượng sâu sắc, dễ nhớ.',
      ],
      [
        'Sai — <b>Ẩn dụ</b> không đúng. Phải chọn <i>Điệp ngữ</i> vì từ "đoàn kết" được lặp 3 lần → điệp ngữ nhấn mạnh sức mạnh đoàn kết.',
        'Đúng — <b>Điệp ngữ</b>. Từ "đoàn kết" được lặp 3 lần → điệp ngữ nhấn mạnh sức mạnh đoàn kết.',
        'Sai — <b>So sánh</b> không đúng. Phải chọn <i>Điệp ngữ</i> vì từ "đoàn kết" được lặp 3 lần → điệp ngữ nhấn mạnh sức mạnh đoàn kết.',
        'Sai — <b>Nhân hoá</b> không đúng. Phải chọn <i>Điệp ngữ</i> vì từ "đoàn kết" được lặp 3 lần → điệp ngữ nhấn mạnh sức mạnh đoàn kết.',
      ]
    ),
    Q('Tác dụng của điệp ngữ?',
      ['Tăng số chữ vô nghĩa', 'Nhấn mạnh ý, tạo nhạc tính, gây ấn tượng', 'Làm bài khó hiểu', 'Đánh đố'], 1,
      'Điệp ngữ nhấn mạnh ý, tạo nhịp điệu, gây ấn tượng sâu sắc.',
      [
        '<b>Bốn tác dụng</b> của điệp ngữ:',
        '<ul><li><b>Nhấn mạnh</b> một ý, một cảm xúc.</li><li>Tạo <b>nhịp điệu, nhạc tính</b>.</li><li>Gây <b>ấn tượng mạnh</b>, khó quên.</li><li>Tạo <b>tính liên kết</b> trong câu/đoạn.</li></ul>',
        'Điệp ngữ là <i>"điệp khúc"</i> của văn — phần được lặp để ngân vang.',
      ],
      [
        'Sai — <b>Tăng số chữ vô nghĩa</b> không đúng. Phải chọn <i>Nhấn mạnh ý, tạo nhạc tính, gây ấn tượng</i> vì điệp ngữ nhấn mạnh ý, tạo nhịp điệu, gây ấn tượng sâu sắc.',
        'Đúng — <b>Nhấn mạnh ý, tạo nhạc tính, gây ấn tượng</b>. Điệp ngữ nhấn mạnh ý, tạo nhịp điệu, gây ấn tượng sâu sắc.',
        'Sai — <b>Làm bài khó hiểu</b> không đúng. Phải chọn <i>Nhấn mạnh ý, tạo nhạc tính, gây ấn tượng</i> vì điệp ngữ nhấn mạnh ý, tạo nhịp điệu, gây ấn tượng sâu sắc.',
        'Sai — <b>Đánh đố</b> không đúng. Phải chọn <i>Nhấn mạnh ý, tạo nhạc tính, gây ấn tượng</i> vì điệp ngữ nhấn mạnh ý, tạo nhịp điệu, gây ấn tượng sâu sắc.',
      ]
    ),
    Q('Phân biệt điệp ngữ với lỗi lặp từ ở chỗ?',
      ['Điệp có dụng ý nghệ thuật; lặp từ là lỗi diễn đạt', 'Điệp xấu hơn', 'Không khác gì', 'Lặp từ luôn đẹp'], 0,
      'Điệp ngữ = có dụng ý nghệ thuật. Lỗi lặp từ = lặp vô ý, làm câu lủng củng.',
      [
        '<b>Phân biệt</b>:',
        '<ul><li><b>Điệp ngữ</b>: lặp có <i>dụng ý nghệ thuật</i> — làm câu hay hơn. "Tre giữ làng, giữ nước, giữ mái nhà tranh."</li><li><b>Lỗi lặp từ</b>: lặp <i>vô ý</i> — làm câu lủng củng, dở. "Em đi học, em rất thích đi học, đi học giúp em vui."</li></ul>',
        '<b>Mẹo</b>: đọc lại, thấy câu <i>hay hơn, có tiết tấu</i> → điệp. Thấy câu <i>nhàm, lê thê</i> → lỗi lặp.',
      ],
      [
        'Đúng — <b>Điệp có dụng ý nghệ thuật; lặp từ là lỗi diễn đạt</b>. Điệp ngữ = có dụng ý nghệ thuật. Lỗi lặp từ = lặp vô ý, làm câu lủng củng.',
        'Sai — <b>Điệp xấu hơn</b> không đúng. Phải chọn <i>Điệp có dụng ý nghệ thuật; lặp từ là lỗi diễn đạt</i> vì điệp ngữ = có dụng ý nghệ thuật. Lỗi lặp từ = lặp vô ý, làm câu lủng củng.',
        'Sai — <b>Không khác gì</b> không đúng. Phải chọn <i>Điệp có dụng ý nghệ thuật; lặp từ là lỗi diễn đạt</i> vì điệp ngữ = có dụng ý nghệ thuật. Lỗi lặp từ = lặp vô ý, làm câu lủng củng.',
        'Sai — <b>Lặp từ luôn đẹp</b> không đúng. Phải chọn <i>Điệp có dụng ý nghệ thuật; lặp từ là lỗi diễn đạt</i> vì điệp ngữ = có dụng ý nghệ thuật. Lỗi lặp từ = lặp vô ý, làm câu lủng củng.',
      ]
    ),
    Q('Các kiểu điệp ngữ phổ biến?',
      ['Điệp nối tiếp, điệp cách quãng, điệp vòng', 'Điệp ngang', 'Điệp dọc', 'Điệp tròn'], 0,
      'Ba kiểu cơ bản: điệp nối tiếp, điệp cách quãng, điệp vòng (chuyển tiếp).',
      [
        '<b>Ba kiểu điệp ngữ</b>:',
        '<ul><li><b>Điệp nối tiếp</b>: các từ lặp đứng <i>liền nhau</i> — "Học, học nữa, học mãi."</li><li><b>Điệp cách quãng</b>: các từ lặp đứng <i>cách nhau</i> — "Cùng trông lại mà cùng chẳng thấy."</li><li><b>Điệp vòng (chuyển tiếp)</b>: từ cuối câu trước được lặp ở đầu câu sau — "Thấy xanh xanh những mấy ngàn dâu / Ngàn dâu xanh ngắt một màu…"</li></ul>',
      ],
      [
        'Đúng — <b>Điệp nối tiếp, điệp cách quãng, điệp vòng</b>. Ba kiểu cơ bản: điệp nối tiếp, điệp cách quãng, điệp vòng (chuyển tiếp).',
        'Sai — <b>Điệp ngang</b> không đúng. Phải chọn <i>Điệp nối tiếp, điệp cách quãng, điệp vòng</i> vì ba kiểu cơ bản: điệp nối tiếp, điệp cách quãng, điệp vòng (chuyển tiếp).',
        'Sai — <b>Điệp dọc</b> không đúng. Phải chọn <i>Điệp nối tiếp, điệp cách quãng, điệp vòng</i> vì ba kiểu cơ bản: điệp nối tiếp, điệp cách quãng, điệp vòng (chuyển tiếp).',
        'Sai — <b>Điệp tròn</b> không đúng. Phải chọn <i>Điệp nối tiếp, điệp cách quãng, điệp vòng</i> vì ba kiểu cơ bản: điệp nối tiếp, điệp cách quãng, điệp vòng (chuyển tiếp).',
      ]
    ),
    Q('"Học, học nữa, học mãi" thuộc kiểu?',
      ['Điệp nối tiếp (lặp liền)', 'Không phải điệp', 'Điệp cách quãng', 'Điệp vòng'], 0,
      'Lặp "học" liền kề → điệp nối tiếp.',
      [
        '<b>Phân tích câu</b> "Học, học nữa, học mãi" (Lê-nin):',
        '<ul><li>Từ "<b>học</b>" lặp 3 lần.</li><li>Các lần lặp <i>đứng liền nhau</i> (chỉ cách bằng dấu phẩy).</li></ul>',
        '→ Đây là <b>điệp nối tiếp</b>.',
        '<b>Tác dụng</b>: nhấn mạnh sự cần thiết của việc học suốt đời — học liên tục, không ngừng.',
      ],
      [
        'Đúng — <b>Điệp nối tiếp (lặp liền)</b>. Lặp "học" liền kề → điệp nối tiếp. Đây là phương án chính xác theo nội dung bài học.',
        'Sai — <b>Không phải điệp</b> không đúng. Phải chọn <i>Điệp nối tiếp (lặp liền)</i> vì lặp "học" liền kề → điệp nối tiếp.',
        'Sai — <b>Điệp cách quãng</b> không đúng. Phải chọn <i>Điệp nối tiếp (lặp liền)</i> vì lặp "học" liền kề → điệp nối tiếp.',
        'Sai — <b>Điệp vòng</b> không đúng. Phải chọn <i>Điệp nối tiếp (lặp liền)</i> vì lặp "học" liền kề → điệp nối tiếp.',
      ]
    ),
  ]),

  M(33, 'Phép tu từ liệt kê', [
    Q('Liệt kê là?',
      ['So sánh', 'Đối thoại', 'Lặp 1 từ', 'Sắp xếp nối tiếp hàng loạt từ/cụm cùng loại để diễn tả đầy đủ'], 3,
      'Liệt kê = kể ra hàng loạt các đối tượng cùng loại để diễn tả phong phú, đầy đủ.',
      [
        '<b>Liệt kê</b> là phép tu từ <i>sắp xếp nối tiếp hàng loạt từ hay cụm từ cùng loại</i> để diễn tả đầy đủ hơn, sâu sắc hơn những khía cạnh khác nhau của thực tế.',
        '<b>Tinh thần</b>: "<i>kể ra hàng loạt</i>" có ý đồ — không phải liệt kê tuỳ tiện.',
        'Ví dụ: "Trong vườn có cam, chanh, bưởi, ổi, mít…"',
      ],
      [
        'Sai — <b>So sánh</b> không đúng. Phải chọn <i>Sắp xếp nối tiếp hàng loạt từ/cụm cùng loại để diễn tả đầy đủ</i> vì liệt kê = kể ra hàng loạt các đối tượng cùng loại để diễn tả phong phú, đầy đủ.',
        'Sai — <b>Đối thoại</b> không đúng. Phải chọn <i>Sắp xếp nối tiếp hàng loạt từ/cụm cùng loại để diễn tả đầy đủ</i> vì liệt kê = kể ra hàng loạt các đối tượng cùng loại để diễn tả phong phú, đầy đủ.',
        'Sai — <b>Lặp 1 từ</b> không đúng. Phải chọn <i>Sắp xếp nối tiếp hàng loạt từ/cụm cùng loại để diễn tả đầy đủ</i> vì liệt kê = kể ra hàng loạt các đối tượng cùng loại để diễn tả phong phú, đầy đủ.',
        'Đúng — <b>Sắp xếp nối tiếp hàng loạt từ/cụm cùng loại để diễn tả đầy đủ</b>. Liệt kê = kể ra hàng loạt các đối tượng cùng loại để diễn tả phong phú, đầy đủ.',
      ]
    ),
    Q('Câu "Trong vườn có cam, chanh, bưởi, ổi, mít…" sử dụng?',
      ['Liệt kê', 'Điệp ngữ', 'Ẩn dụ', 'Hoán dụ'], 0,
      'Kể hàng loạt các loại cây cùng loại → liệt kê.',
      [
        '<b>Phân tích câu</b>:',
        '<ul><li>Các đối tượng được kể: <b>cam, chanh, bưởi, ổi, mít</b>.</li><li>Cùng loại: <i>cây ăn quả trong vườn</i>.</li><li>Cách thức: <i>kể nối tiếp, ngăn bằng dấu phẩy</i>.</li></ul>',
        '→ Đây là <b>phép liệt kê</b>.',
        '<b>Tác dụng</b>: gợi sự <i>phong phú, đa dạng</i> của vườn cây — cảm nhận được sự trù phú.',
      ],
      [
        'Đúng — <b>Liệt kê</b>. Kể hàng loạt các loại cây cùng loại → liệt kê. Đây là phương án chính xác theo nội dung bài học.',
        'Sai — <b>Điệp ngữ</b> không đúng. Phải chọn <i>Liệt kê</i> vì kể hàng loạt các loại cây cùng loại → liệt kê.',
        'Sai — <b>Ẩn dụ</b> không đúng. Phải chọn <i>Liệt kê</i> vì kể hàng loạt các loại cây cùng loại → liệt kê.',
        'Sai — <b>Hoán dụ</b> không đúng. Phải chọn <i>Liệt kê</i> vì kể hàng loạt các loại cây cùng loại → liệt kê.',
      ]
    ),
    Q('Tác dụng của liệt kê?',
      ['Rút gọn nội dung, làm câu ngắn lại', 'Diễn tả phong phú, nhấn mạnh số lượng/mức độ', 'Đánh đố', 'Làm rối câu'], 1,
      'Liệt kê diễn tả phong phú, đa dạng; nhấn mạnh số lượng hoặc mức độ.',
      [
        '<b>Bốn tác dụng</b> của liệt kê:',
        '<ul><li>Diễn tả <b>phong phú, đầy đủ</b> một sự vật, hiện tượng.</li><li>Nhấn mạnh <b>số lượng, mức độ</b>.</li><li>Tạo cảm giác <b>trùng điệp, dồn dập</b>.</li><li>Gây <b>ấn tượng mạnh</b>.</li></ul>',
      ],
      [
        'Sai — <b>Rút gọn nội dung, làm câu ngắn lại</b> không đúng. Phải chọn <i>Diễn tả phong phú, nhấn mạnh số lượng/mức độ</i> vì liệt kê diễn tả phong phú, đa dạng; nhấn mạnh số lượng hoặc mức độ.',
        'Đúng — <b>Diễn tả phong phú, nhấn mạnh số lượng/mức độ</b>. Liệt kê diễn tả phong phú, đa dạng; nhấn mạnh số lượng hoặc mức độ.',
        'Sai — <b>Đánh đố</b> không đúng. Phải chọn <i>Diễn tả phong phú, nhấn mạnh số lượng/mức độ</i> vì liệt kê diễn tả phong phú, đa dạng; nhấn mạnh số lượng hoặc mức độ.',
        'Sai — <b>Làm rối câu</b> không đúng. Phải chọn <i>Diễn tả phong phú, nhấn mạnh số lượng/mức độ</i> vì liệt kê diễn tả phong phú, đa dạng; nhấn mạnh số lượng hoặc mức độ.',
      ]
    ),
    Q('Liệt kê theo cặp là?',
      ['Liệt kê hỗn loạn', 'Liệt kê tăng tiến theo mức độ', 'Các đối tượng được sắp xếp thành từng cặp', 'Liệt kê 1 từ'], 2,
      'Liệt kê theo cặp = các đối tượng đi thành cặp (cha-mẹ, anh-em, vợ-chồng…).',
      [
        '<b>Liệt kê theo cặp</b>:',
        '<ul><li>Các đối tượng đi <b>thành cặp</b>.</li><li>Ví dụ: "<code>cha mẹ</code>, <code>anh em</code>, <code>vợ chồng</code>".</li></ul>',
        'Khác với liệt kê không theo cặp: "<code>sách, vở, bút, thước</code>" — đi riêng từng đối tượng.',
      ],
      [
        'Sai — <b>Liệt kê hỗn loạn</b> không đúng. Phải chọn <i>Các đối tượng được sắp xếp thành từng cặp</i> vì liệt kê theo cặp = các đối tượng đi thành cặp (cha-mẹ, anh-em, vợ-chồng…).',
        'Sai — <b>Liệt kê tăng tiến theo mức độ</b> không đúng. Phải chọn <i>Các đối tượng được sắp xếp thành từng cặp</i> vì liệt kê theo cặp = các đối tượng đi thành cặp (cha-mẹ, anh-em, vợ-chồng…).',
        'Đúng — <b>Các đối tượng được sắp xếp thành từng cặp</b>. Liệt kê theo cặp = các đối tượng đi thành cặp (cha-mẹ, anh-em, vợ-chồng…).',
        'Sai — <b>Liệt kê 1 từ</b> không đúng. Phải chọn <i>Các đối tượng được sắp xếp thành từng cặp</i> vì liệt kê theo cặp = các đối tượng đi thành cặp (cha-mẹ, anh-em, vợ-chồng…).',
      ]
    ),
    Q('Liệt kê tăng tiến là?',
      ['Lẫn lộn', 'Không có thứ tự', 'Các đối tượng tăng dần về mức độ/ý nghĩa', 'Giảm dần'], 2,
      'Liệt kê tăng tiến = các đối tượng được sắp xếp tăng dần về mức độ, ý nghĩa.',
      [
        '<b>Liệt kê tăng tiến</b>: các đối tượng <i>tăng dần về mức độ, ý nghĩa</i>.',
        'Ví dụ: "<i>ăn không ngon, ngủ không yên, sống dở chết dở</i>" — mức độ vất vả tăng dần.',
        '<b>Tác dụng</b>: nhấn mạnh sự tăng tiến của cảm xúc, mức độ — gây ấn tượng mạnh.',
        'Khác liệt kê không tăng tiến: "trong vườn có cam, chanh, bưởi" — các đối tượng bình đẳng.',
      ],
      [
        'Sai — <b>Lẫn lộn</b> không đúng. Phải chọn <i>Các đối tượng tăng dần về mức độ/ý nghĩa</i> vì liệt kê tăng tiến = các đối tượng được sắp xếp tăng dần về mức độ, ý nghĩa.',
        'Sai — <b>Không có thứ tự</b> không đúng. Phải chọn <i>Các đối tượng tăng dần về mức độ/ý nghĩa</i> vì liệt kê tăng tiến = các đối tượng được sắp xếp tăng dần về mức độ, ý nghĩa.',
        'Đúng — <b>Các đối tượng tăng dần về mức độ/ý nghĩa</b>. Liệt kê tăng tiến = các đối tượng được sắp xếp tăng dần về mức độ, ý nghĩa.',
        'Sai — <b>Giảm dần</b> không đúng. Phải chọn <i>Các đối tượng tăng dần về mức độ/ý nghĩa</i> vì liệt kê tăng tiến = các đối tượng được sắp xếp tăng dần về mức độ, ý nghĩa.',
      ]
    ),
    Q('Câu "Một, hai, ba, bốn, năm…" thuộc liệt kê?',
      ['Không trình tự', 'Theo trình tự (số đếm)', 'Theo cặp', 'Theo cảm xúc'], 1,
      'Các số đếm tăng dần → liệt kê theo trình tự (tăng tiến).',
      [
        '<b>Phân tích "Một, hai, ba, bốn, năm…"</b>:',
        '<ul><li>Các số đếm <i>tăng dần</i>.</li><li>Có <b>trình tự</b> rõ ràng (1 → 5).</li></ul>',
        '→ Đây là <b>liệt kê theo trình tự</b> (tăng tiến).',
        'Trật tự số đếm là <i>quy luật tự nhiên</i> — không thể đảo lộn.',
      ],
      [
        'Sai — <b>Không trình tự</b> không đúng. Phải chọn <i>Theo trình tự (số đếm)</i> vì các số đếm tăng dần → liệt kê theo trình tự (tăng tiến).',
        'Đúng — <b>Theo trình tự (số đếm)</b>. Các số đếm tăng dần → liệt kê theo trình tự (tăng tiến).',
        'Sai — <b>Theo cặp</b> không đúng. Phải chọn <i>Theo trình tự (số đếm)</i> vì các số đếm tăng dần → liệt kê theo trình tự (tăng tiến).',
        'Sai — <b>Theo cảm xúc</b> không đúng. Phải chọn <i>Theo trình tự (số đếm)</i> vì các số đếm tăng dần → liệt kê theo trình tự (tăng tiến).',
      ]
    ),
  ]),

  M(34, 'Từ Hán Việt — bước đầu', [
    Q('Từ Hán Việt là?',
      ['Từ tiếng Anh', 'Từ mượn gốc Hán, đọc theo âm Hán Việt', 'Từ thuần Việt', 'Từ tiếng Pháp'], 1,
      'Từ Hán Việt = từ mượn gốc Hán, đọc theo âm Hán Việt (cách đọc của người Việt với chữ Hán).',
      [
        '<b>Từ Hán Việt</b> là từ tiếng Việt có <i>gốc từ tiếng Hán</i>, được đọc theo <b>âm Hán Việt</b> (cách đọc của người Việt với chữ Hán từ thời xưa).',
        '<b>Tỉ lệ trong tiếng Việt</b>: <i>khá lớn</i> — đặc biệt ở các lĩnh vực học thuật, hành chính, văn chương.',
        'Ví dụ: <code>phụ huynh, quốc gia, văn học, nhân loại</code>.',
      ],
      [
        'Sai — <b>Từ tiếng Anh</b> không đúng. Phải chọn <i>Từ mượn gốc Hán, đọc theo âm Hán Việt</i> vì từ Hán Việt = từ mượn gốc Hán, đọc theo âm Hán Việt (cách đọc của người Việt với chữ Hán).',
        'Đúng — <b>Từ mượn gốc Hán, đọc theo âm Hán Việt</b>. Từ Hán Việt = từ mượn gốc Hán, đọc theo âm Hán Việt (cách đọc của người Việt với chữ Hán).',
        'Sai — <b>Từ thuần Việt</b> không đúng. Phải chọn <i>Từ mượn gốc Hán, đọc theo âm Hán Việt</i> vì từ Hán Việt = từ mượn gốc Hán, đọc theo âm Hán Việt (cách đọc của người Việt với chữ Hán).',
        'Sai — <b>Từ tiếng Pháp</b> không đúng. Phải chọn <i>Từ mượn gốc Hán, đọc theo âm Hán Việt</i> vì từ Hán Việt = từ mượn gốc Hán, đọc theo âm Hán Việt (cách đọc của người Việt với chữ Hán).',
      ]
    ),
    Q('Từ nào sau đây là Hán Việt?',
      ['Phụ huynh', 'Ba má', 'Cha mẹ', 'Mẹ cha'], 0,
      '"Phụ huynh" gốc Hán (phụ = cha, huynh = anh) — là từ Hán Việt.',
      [
        '<b>Soi từng đáp án</b>:',
        '<ul><li>✅ "<b>Phụ huynh</b>" — gốc Hán (phụ = cha, huynh = anh) → <i>Hán Việt</i>.</li><li>❌ "Ba má" — <i>thuần Việt</i> (từ địa phương).</li><li>❌ "Cha mẹ" — <i>thuần Việt</i>.</li><li>❌ "Mẹ cha" — <i>thuần Việt</i>.</li></ul>',
        '<b>Mẹo nhận biết</b>: từ Hán Việt thường mang sắc thái <i>trang trọng, cổ kính, học thuật</i>.',
      ],
      [
        'Đúng — <b>Phụ huynh</b>. "Phụ huynh" gốc Hán (phụ = cha, huynh = anh) — là từ Hán Việt.',
        'Sai — <b>Ba má</b> không đúng. Phải chọn <i>Phụ huynh</i> vì "Phụ huynh" gốc Hán (phụ = cha, huynh = anh) — là từ Hán Việt.',
        'Sai — <b>Cha mẹ</b> không đúng. Phải chọn <i>Phụ huynh</i> vì "Phụ huynh" gốc Hán (phụ = cha, huynh = anh) — là từ Hán Việt.',
        'Sai — <b>Mẹ cha</b> không đúng. Phải chọn <i>Phụ huynh</i> vì "Phụ huynh" gốc Hán (phụ = cha, huynh = anh) — là từ Hán Việt.',
      ]
    ),
    Q('Cặp nào tương ứng Thuần Việt – Hán Việt?',
      ['Sông – giang', 'Cao – thấp', 'Mẹ – cha', 'Đi – chạy'], 0,
      '"Sông" (thuần Việt) tương ứng "giang" (Hán Việt) — như Cửu Long Giang.',
      [
        '<b>Các cặp Thuần Việt – Hán Việt</b>:',
        '<ul><li><b>Sông</b> – <b>giang</b> (Cửu Long Giang).</li><li><b>Núi</b> – <b>sơn</b> (Hoành Sơn).</li><li><b>Vua</b> – <b>quân vương, đế</b>.</li><li><b>Đất nước</b> – <b>quốc gia, tổ quốc</b>.</li><li><b>Người</b> – <b>nhân</b> (nhân loại).</li></ul>',
        'Các đáp án khác là cặp <i>trái nghĩa</i> hoặc <i>đồng nghĩa thuần Việt</i> — không phải Hán Việt.',
      ],
      [
        'Đúng — <b>Sông – giang</b>. "Sông" (thuần Việt) tương ứng "giang" (Hán Việt) — như Cửu Long Giang.',
        'Sai — <b>Cao – thấp</b> không đúng. Phải chọn <i>Sông – giang</i> vì "Sông" (thuần Việt) tương ứng "giang" (Hán Việt) — như Cửu Long Giang.',
        'Sai — <b>Mẹ – cha</b> không đúng. Phải chọn <i>Sông – giang</i> vì "Sông" (thuần Việt) tương ứng "giang" (Hán Việt) — như Cửu Long Giang.',
        'Sai — <b>Đi – chạy</b> không đúng. Phải chọn <i>Sông – giang</i> vì "Sông" (thuần Việt) tương ứng "giang" (Hán Việt) — như Cửu Long Giang.',
      ]
    ),
    Q('Sử dụng từ Hán Việt cần?',
      ['Càng nhiều càng tốt', 'Tuỳ tiện', 'Không cần để ý', 'Đúng nghĩa, đúng sắc thái, đúng văn cảnh'], 3,
      'Dùng từ Hán Việt: đúng nghĩa + đúng sắc thái + đúng văn cảnh.',
      [
        '<b>Nguyên tắc dùng từ Hán Việt</b>:',
        '<ul><li>Đúng <b>nghĩa</b>.</li><li>Đúng <b>sắc thái</b> (trang trọng hay bình dân).</li><li>Đúng <b>văn cảnh</b>.</li></ul>',
        '⚠️ <b>Hai cực đoan cần tránh</b>:',
        '<ul><li><i>Lạm dụng</i> → câu kém tự nhiên, kệch cỡm.</li><li><i>Thiếu</i> → mất trang trọng (trong văn nghị luận, văn cổ).</li></ul>',
      ],
      [
        'Sai — <b>Càng nhiều càng tốt</b> không đúng. Phải chọn <i>Đúng nghĩa, đúng sắc thái, đúng văn cảnh</i> vì dùng từ Hán Việt: đúng nghĩa + đúng sắc thái + đúng văn cảnh.',
        'Sai — <b>Tuỳ tiện</b> không đúng. Phải chọn <i>Đúng nghĩa, đúng sắc thái, đúng văn cảnh</i> vì dùng từ Hán Việt: đúng nghĩa + đúng sắc thái + đúng văn cảnh.',
        'Sai — <b>Không cần để ý</b> không đúng. Phải chọn <i>Đúng nghĩa, đúng sắc thái, đúng văn cảnh</i> vì dùng từ Hán Việt: đúng nghĩa + đúng sắc thái + đúng văn cảnh.',
        'Đúng — <b>Đúng nghĩa, đúng sắc thái, đúng văn cảnh</b>. Dùng từ Hán Việt: đúng nghĩa + đúng sắc thái + đúng văn cảnh.',
      ]
    ),
    Q('Từ Hán Việt thường tạo sắc thái?',
      ['Vô cảm', 'Hài hước thuần Việt', 'Trang trọng, cổ kính, khái quát', 'Bình dân thuần tuý'], 2,
      'Từ Hán Việt mang sắc thái trang trọng, cổ kính, khái quát, học thuật.',
      [
        '<b>Ba sắc thái</b> của từ Hán Việt:',
        '<ul><li><b>Trang trọng, cổ kính</b>: "phụ huynh" trang trọng hơn "cha mẹ"; "tổ quốc" thiêng liêng hơn "đất nước".</li><li><b>Khái quát, trừu tượng</b>: "nhân loại", "quốc gia".</li><li><b>Học thuật, chuyên môn</b>: "địa lí", "lịch sử", "văn học".</li></ul>',
        'Dùng từ Hán Việt giúp văn nghị luận, văn chính luận, văn cổ <i>tăng tính trang trọng</i>.',
      ],
      [
        'Sai — <b>Vô cảm</b> không đúng. Phải chọn <i>Trang trọng, cổ kính, khái quát</i> vì từ Hán Việt mang sắc thái trang trọng, cổ kính, khái quát, học thuật.',
        'Sai — <b>Hài hước thuần Việt</b> không đúng. Phải chọn <i>Trang trọng, cổ kính, khái quát</i> vì từ Hán Việt mang sắc thái trang trọng, cổ kính, khái quát, học thuật.',
        'Đúng — <b>Trang trọng, cổ kính, khái quát</b>. Từ Hán Việt mang sắc thái trang trọng, cổ kính, khái quát, học thuật.',
        'Sai — <b>Bình dân thuần tuý</b> không đúng. Phải chọn <i>Trang trọng, cổ kính, khái quát</i> vì từ Hán Việt mang sắc thái trang trọng, cổ kính, khái quát, học thuật.',
      ]
    ),
    Q('"Tổ quốc" là từ?',
      ['Thuần Việt', 'Tiếng địa phương', 'Hán Việt, mang sắc thái trang trọng', 'Phiên âm tiếng Anh'], 2,
      '"Tổ" (gốc) + "quốc" (nước) — gốc Hán, sắc thái trang trọng, thiêng liêng.',
      [
        '<b>Phân tích "tổ quốc"</b>:',
        '<ul><li>"<b>Tổ</b>" — gốc, nguồn cội (Hán).</li><li>"<b>Quốc</b>" — nước (Hán).</li><li>Nghĩa: <i>đất nước, nguồn cội của dân tộc</i>.</li></ul>',
        '<b>Sắc thái</b>: trang trọng, thiêng liêng — hơn hẳn "đất nước".',
        'Ví dụ: "Vì <i>tổ quốc</i> hi sinh" trang trọng hơn "vì đất nước hi sinh".',
      ],
      [
        'Sai — <b>Thuần Việt</b> không đúng. Phải chọn <i>Hán Việt, mang sắc thái trang trọng</i> vì "Tổ" (gốc) + "quốc" (nước) — gốc Hán, sắc thái trang trọng, thiêng liêng.',
        'Sai — <b>Tiếng địa phương</b> không đúng. Phải chọn <i>Hán Việt, mang sắc thái trang trọng</i> vì "Tổ" (gốc) + "quốc" (nước) — gốc Hán, sắc thái trang trọng, thiêng liêng.',
        'Đúng — <b>Hán Việt, mang sắc thái trang trọng</b>. "Tổ" (gốc) + "quốc" (nước) — gốc Hán, sắc thái trang trọng, thiêng liêng.',
        'Sai — <b>Phiên âm tiếng Anh</b> không đúng. Phải chọn <i>Hán Việt, mang sắc thái trang trọng</i> vì "Tổ" (gốc) + "quốc" (nước) — gốc Hán, sắc thái trang trọng, thiêng liêng.',
      ]
    ),
  ]),

  M(35, 'Mở rộng vốn từ theo chủ đề (gia đình – thiên nhiên – quê hương)', [
    Q('Nhóm từ nào thuộc chủ đề "gia đình"?',
      ['Máy bay, xe lửa', 'Sông, suối, núi, đồi', 'Cha, mẹ, anh, chị, em, ông, bà', 'Trường, lớp, bảng, ghế'], 2,
      'Cha, mẹ, anh, chị, em, ông, bà — các từ chỉ thành viên gia đình.',
      [
        '<b>Vốn từ về gia đình</b>:',
        '<ul><li><b>Thành viên</b>: ông, bà, cha (bố), mẹ, anh, chị, em, cô, dì, chú, bác.</li><li><b>Tình cảm</b>: yêu thương, kính trọng, biết ơn, hiếu thảo, sum vầy, đầm ấm.</li><li><b>Hoạt động</b>: chăm sóc, nuôi dưỡng, dạy bảo, đón đưa, quan tâm.</li><li><b>Đồ vật gắn liền</b>: mái nhà, bữa cơm, chiếc đèn, chiếc võng.</li></ul>',
      ],
      [
        'Sai — <b>Máy bay, xe lửa</b> không đúng. Phải chọn <i>Cha, mẹ, anh, chị, em, ông, bà</i> vì cha, mẹ, anh, chị, em, ông, bà — các từ chỉ thành viên gia đình.',
        'Sai — <b>Sông, suối, núi, đồi</b> không đúng. Phải chọn <i>Cha, mẹ, anh, chị, em, ông, bà</i> vì cha, mẹ, anh, chị, em, ông, bà — các từ chỉ thành viên gia đình.',
        'Đúng — <b>Cha, mẹ, anh, chị, em, ông, bà</b>. Cha, mẹ, anh, chị, em, ông, bà — các từ chỉ thành viên gia đình.',
        'Sai — <b>Trường, lớp, bảng, ghế</b> không đúng. Phải chọn <i>Cha, mẹ, anh, chị, em, ông, bà</i> vì cha, mẹ, anh, chị, em, ông, bà — các từ chỉ thành viên gia đình.',
      ]
    ),
    Q('Nhóm từ nào thuộc chủ đề "thiên nhiên"?',
      ['Cặp, bút, vở', 'Tivi, tủ lạnh', 'Sông, núi, biển, rừng, mây, gió', 'Cha, mẹ, anh, em'], 2,
      'Sông, núi, biển, rừng, mây, gió — các yếu tố tự nhiên.',
      [
        '<b>Vốn từ về thiên nhiên</b>:',
        '<ul><li><b>Địa hình</b>: sông, suối, biển, hồ, ao, núi, đồi, đồng, rừng.</li><li><b>Thời tiết</b>: mưa, nắng, gió, sương, mây, sấm, chớp, bão.</li><li><b>Cây cối, hoa lá</b>: cây xanh, lá vàng, hoa thắm, cỏ non, mầm biếc.</li><li><b>Âm thanh</b>: tiếng chim, tiếng ve, tiếng sóng, róc rách, rì rào.</li></ul>',
      ],
      [
        'Sai — <b>Cặp, bút, vở</b> không đúng. Phải chọn <i>Sông, núi, biển, rừng, mây, gió</i> vì sông, núi, biển, rừng, mây, gió — các yếu tố tự nhiên.',
        'Sai — <b>Tivi, tủ lạnh</b> không đúng. Phải chọn <i>Sông, núi, biển, rừng, mây, gió</i> vì sông, núi, biển, rừng, mây, gió — các yếu tố tự nhiên.',
        'Đúng — <b>Sông, núi, biển, rừng, mây, gió</b>. Sông, núi, biển, rừng, mây, gió — các yếu tố tự nhiên.',
        'Sai — <b>Cha, mẹ, anh, em</b> không đúng. Phải chọn <i>Sông, núi, biển, rừng, mây, gió</i> vì sông, núi, biển, rừng, mây, gió — các yếu tố tự nhiên.',
      ]
    ),
    Q('Nhóm từ nào gắn với "quê hương"?',
      ['Luỹ tre, đồng lúa, dòng sông, bến đò', 'Máy tính, robot', 'Thẻ ngân hàng', 'Phòng họp, văn phòng'], 0,
      'Luỹ tre, đồng lúa, dòng sông, bến đò — hình ảnh đặc trưng của quê hương Việt Nam.',
      [
        '<b>Vốn từ về quê hương</b>:',
        '<ul><li><b>Hình ảnh đặc trưng</b>: luỹ tre, đồng lúa, dòng sông, bến đò, mái đình, cây đa, giếng nước.</li><li><b>Sản vật</b>: lúa, ngô, khoai, sắn, rau xanh, cá tôm.</li><li><b>Hoạt động truyền thống</b>: cấy, gặt, chăn trâu, kéo lưới, đan lát.</li><li><b>Tình cảm</b>: yêu mến, gắn bó, nhớ nhung, tự hào, da diết.</li></ul>',
      ],
      [
        'Đúng — <b>Luỹ tre, đồng lúa, dòng sông, bến đò</b>. Luỹ tre, đồng lúa, dòng sông, bến đò — hình ảnh đặc trưng của quê hương Việt Nam.',
        'Sai — <b>Máy tính, robot</b> không đúng. Phải chọn <i>Luỹ tre, đồng lúa, dòng sông, bến đò</i> vì luỹ tre, đồng lúa, dòng sông, bến đò — hình ảnh đặc trưng của quê hương Việt Nam.',
        'Sai — <b>Thẻ ngân hàng</b> không đúng. Phải chọn <i>Luỹ tre, đồng lúa, dòng sông, bến đò</i> vì luỹ tre, đồng lúa, dòng sông, bến đò — hình ảnh đặc trưng của quê hương Việt Nam.',
        'Sai — <b>Phòng họp, văn phòng</b> không đúng. Phải chọn <i>Luỹ tre, đồng lúa, dòng sông, bến đò</i> vì luỹ tre, đồng lúa, dòng sông, bến đò — hình ảnh đặc trưng của quê hương Việt Nam.',
      ]
    ),
    Q('Trong câu "Quê hương là chùm khế ngọt", "chùm khế" gợi?',
      ['Hình ảnh thân thuộc, gần gũi của quê', 'Sự khô khan', 'Sự dữ dội', 'Sự xa lạ'], 0,
      'Hình ảnh nhỏ bé, ngọt ngào, thân thuộc của tuổi thơ quê hương.',
      [
        '<b>Phân tích "chùm khế ngọt"</b>:',
        '<ul><li>Hình ảnh <b>nhỏ bé, dân dã, gần gũi</b>.</li><li>Gợi <b>tuổi thơ êm đềm, ngọt ngào</b>.</li><li>Là <i>biểu tượng của quê hương</i> trong tâm hồn người Việt.</li></ul>',
        'Tác giả Đỗ Trung Quân không định nghĩa quê hương bằng <i>khái niệm lớn lao</i> — mà bằng hình ảnh <b>nhỏ bé thân thuộc</b>. Đó là cách nói <i>sâu sắc</i> về tình yêu quê hương.',
      ],
      [
        'Đúng — <b>Hình ảnh thân thuộc, gần gũi của quê</b>. Hình ảnh nhỏ bé, ngọt ngào, thân thuộc của tuổi thơ quê hương.',
        'Sai — <b>Sự khô khan</b> không đúng. Phải chọn <i>Hình ảnh thân thuộc, gần gũi của quê</i> vì hình ảnh nhỏ bé, ngọt ngào, thân thuộc của tuổi thơ quê hương.',
        'Sai — <b>Sự dữ dội</b> không đúng. Phải chọn <i>Hình ảnh thân thuộc, gần gũi của quê</i> vì hình ảnh nhỏ bé, ngọt ngào, thân thuộc của tuổi thơ quê hương.',
        'Sai — <b>Sự xa lạ</b> không đúng. Phải chọn <i>Hình ảnh thân thuộc, gần gũi của quê</i> vì hình ảnh nhỏ bé, ngọt ngào, thân thuộc của tuổi thơ quê hương.',
      ]
    ),
    Q('Từ ngữ nào thể hiện tình cảm với quê hương?',
      ['Lạnh lùng', 'Thờ ơ, dửng dưng', 'Ghét bỏ', 'Yêu thương, gắn bó, nhớ nhung'], 3,
      'Yêu thương, gắn bó, nhớ nhung — cảm xúc tích cực gắn liền với quê hương.',
      [
        '<b>Vốn từ tình cảm với quê hương</b>:',
        '<ul><li><b>Yêu thương</b>, mến yêu.</li><li><b>Gắn bó</b>, thân thiết.</li><li><b>Nhớ nhung</b>, da diết.</li><li><b>Tự hào</b>, kính yêu.</li></ul>',
        '⚠️ Văn học không phải nơi của <i>lạnh lùng, thờ ơ</i> với quê hương — đó là cảm xúc <i>tiêu cực</i>, không phù hợp với truyền thống văn hoá Việt.',
      ],
      [
        'Sai — <b>Lạnh lùng</b> không đúng. Phải chọn <i>Yêu thương, gắn bó, nhớ nhung</i> vì yêu thương, gắn bó, nhớ nhung — cảm xúc tích cực gắn liền với quê hương.',
        'Sai — <b>Thờ ơ, dửng dưng</b> không đúng. Phải chọn <i>Yêu thương, gắn bó, nhớ nhung</i> vì yêu thương, gắn bó, nhớ nhung — cảm xúc tích cực gắn liền với quê hương.',
        'Sai — <b>Ghét bỏ</b> không đúng. Phải chọn <i>Yêu thương, gắn bó, nhớ nhung</i> vì yêu thương, gắn bó, nhớ nhung — cảm xúc tích cực gắn liền với quê hương.',
        'Đúng — <b>Yêu thương, gắn bó, nhớ nhung</b>. Yêu thương, gắn bó, nhớ nhung — cảm xúc tích cực gắn liền với quê hương.',
      ]
    ),
    Q('Khi viết về gia đình, nên?',
      ['Liệt kê tên tuổi', 'Chọn chi tiết nhỏ, kỉ niệm thật + cảm xúc chân thành', 'Toàn lập luận', 'Chép tiểu sử'], 1,
      'Kỉ niệm cụ thể + chi tiết nhỏ + cảm xúc chân thành → bài hay.',
      [
        '<b>Bí quyết viết bài về gia đình</b>:',
        '<ul><li>Chọn <b>kỉ niệm thật</b>, có ý nghĩa.</li><li>Đưa <b>chi tiết nhỏ</b> đắt giá — bàn tay mẹ chai sần, ánh mắt bà hiền từ.</li><li>Bộc lộ <b>cảm xúc chân thành</b> — không sáo rỗng.</li></ul>',
        '⚠️ Tránh:',
        '<ul><li>Liệt kê tên tuổi (như khai lý lịch).</li><li>Chép tiểu sử (khô khan).</li><li>Toàn lập luận (không phù hợp).</li></ul>',
      ],
      [
        'Sai — <b>Liệt kê tên tuổi</b> không đúng. Phải chọn <i>Chọn chi tiết nhỏ, kỉ niệm thật + cảm xúc chân thành</i> vì kỉ niệm cụ thể + chi tiết nhỏ + cảm xúc chân thành → bài hay.',
        'Đúng — <b>Chọn chi tiết nhỏ, kỉ niệm thật + cảm xúc chân thành</b>. Kỉ niệm cụ thể + chi tiết nhỏ + cảm xúc chân thành → bài hay.',
        'Sai — <b>Toàn lập luận</b> không đúng. Phải chọn <i>Chọn chi tiết nhỏ, kỉ niệm thật + cảm xúc chân thành</i> vì kỉ niệm cụ thể + chi tiết nhỏ + cảm xúc chân thành → bài hay.',
        'Sai — <b>Chép tiểu sử</b> không đúng. Phải chọn <i>Chọn chi tiết nhỏ, kỉ niệm thật + cảm xúc chân thành</i> vì kỉ niệm cụ thể + chi tiết nhỏ + cảm xúc chân thành → bài hay.',
      ]
    ),
  ]),

  M(36, 'Ôn tập học kì 2 — Tổng kết Lớp 6', [
    Q('Hệ thống thể loại đã học gồm?',
      ['Chỉ truyện', 'Chỉ thơ', 'Đồng thoại, cổ tích, truyền thuyết, ký, thơ, nghị luận, thông tin', 'Chỉ nghị luận'], 2,
      'Lớp 6 phủ 8 thể loại: đồng thoại, cổ tích, truyền thuyết, ký, thơ lục bát, thơ tự sự, nghị luận, thông tin.',
      [
        '<b>Bản đồ thể loại văn học lớp 6</b>:',
        '<ul><li><b>Đồng thoại</b>: nhân vật loài vật được nhân hoá (Dế Mèn).</li><li><b>Cổ tích</b>: kiểu nhân vật + kì ảo + kết có hậu.</li><li><b>Truyền thuyết</b>: lõi sự thật lịch sử + kì ảo.</li><li><b>Thơ lục bát</b>: thể thơ 6–8 truyền thống.</li><li><b>Ký, hồi ký</b>: ghi chép sự thật + cảm nhận chủ quan.</li><li><b>Thơ tự sự – miêu tả</b>: kết hợp kể – tả – cảm.</li><li><b>Nghị luận</b>: luận điểm + luận cứ + lập luận.</li><li><b>Văn bản thông tin</b>: cung cấp thông tin khách quan.</li></ul>',
      ],
      [
        'Sai — <b>Chỉ truyện</b> không đúng. Phải chọn <i>Đồng thoại, cổ tích, truyền thuyết, ký, thơ, nghị luận, thông tin</i> vì lớp 6 phủ 8 thể loại: đồng thoại, cổ tích, truyền thuyết, ký, thơ lục bát, thơ tự sự, nghị luận, thông tin.',
        'Sai — <b>Chỉ thơ</b> không đúng. Phải chọn <i>Đồng thoại, cổ tích, truyền thuyết, ký, thơ, nghị luận, thông tin</i> vì lớp 6 phủ 8 thể loại: đồng thoại, cổ tích, truyền thuyết, ký, thơ lục bát, thơ tự sự, nghị luận, thông tin.',
        'Đúng — <b>Đồng thoại, cổ tích, truyền thuyết, ký, thơ, nghị luận, thông tin</b>. Lớp 6 phủ 8 thể loại: đồng thoại, cổ tích, truyền thuyết, ký, thơ lục bát, thơ tự sự, nghị luận, thông tin.',
        'Sai — <b>Chỉ nghị luận</b> không đúng. Phải chọn <i>Đồng thoại, cổ tích, truyền thuyết, ký, thơ, nghị luận, thông tin</i> vì lớp 6 phủ 8 thể loại: đồng thoại, cổ tích, truyền thuyết, ký, thơ lục bát, thơ tự sự, nghị luận, thông tin.',
      ]
    ),
    Q('Biện pháp tu từ đã học gồm?',
      ['Chỉ so sánh', 'Chỉ điệp ngữ', 'Chỉ ẩn dụ', 'So sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ, liệt kê'], 3,
      'Sáu biện pháp tu từ chính: so sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ, liệt kê.',
      [
        '<b>Sáu biện pháp tu từ trọng tâm</b>:',
        '<ul><li><b>So sánh</b> — đối chiếu A với B qua tương đồng.</li><li><b>Nhân hoá</b> — gán đặc điểm người cho vật.</li><li><b>Ẩn dụ</b> — gọi A bằng B qua tương đồng (so sánh ngầm).</li><li><b>Hoán dụ</b> — gọi A bằng B qua quan hệ gần gũi.</li><li><b>Điệp ngữ</b> — lặp có chủ ý.</li><li><b>Liệt kê</b> — kể ra hàng loạt.</li></ul>',
      ],
      [
        'Sai — <b>Chỉ so sánh</b> không đúng. Phải chọn <i>So sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ, liệt kê</i> vì sáu biện pháp tu từ chính: so sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ, liệt kê.',
        'Sai — <b>Chỉ điệp ngữ</b> không đúng. Phải chọn <i>So sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ, liệt kê</i> vì sáu biện pháp tu từ chính: so sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ, liệt kê.',
        'Sai — <b>Chỉ ẩn dụ</b> không đúng. Phải chọn <i>So sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ, liệt kê</i> vì sáu biện pháp tu từ chính: so sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ, liệt kê.',
        'Đúng — <b>So sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ, liệt kê</b>. Sáu biện pháp tu từ chính: so sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ, liệt kê.',
      ]
    ),
    Q('Câu trần thuật đơn gồm các kiểu?',
      ['Chỉ "Ai làm gì?"', 'Ai là gì? / Ai làm gì? / Ai thế nào?', 'Chỉ "Ai thế nào?"', 'Chỉ "Ai là gì?"'], 1,
      'Ba kiểu cơ bản: Ai là gì? (giới thiệu), Ai làm gì? (kể hành động), Ai thế nào? (miêu tả).',
      [
        '<b>Ba kiểu câu trần thuật đơn</b>:',
        '<ul><li>Câu "<b>Ai là gì?</b>" — vị ngữ có "là" + danh từ → <i>định nghĩa, giới thiệu</i>.</li><li>Câu "<b>Ai làm gì?</b>" — vị ngữ là động từ → <i>kể hành động</i>.</li><li>Câu "<b>Ai thế nào?</b>" — vị ngữ là tính từ → <i>miêu tả đặc điểm</i>.</li></ul>',
        'Cách phân biệt: nhìn <b>vị ngữ</b> — "là + danh từ" / động từ / tính từ.',
      ],
      [
        'Sai — <b>Chỉ "Ai làm gì?"</b> không đúng. Phải chọn <i>Ai là gì? / Ai làm gì? / Ai thế nào?</i> vì ba kiểu cơ bản: Ai là gì? (giới thiệu), Ai làm gì? (kể hành động), Ai thế nào? (miêu tả).',
        'Đúng — <b>Ai là gì? / Ai làm gì? / Ai thế nào?</b>. Ba kiểu cơ bản: Ai là gì? (giới thiệu), Ai làm gì? (kể hành động), Ai thế nào? (miêu tả).',
        'Sai — <b>Chỉ "Ai thế nào?"</b> không đúng. Phải chọn <i>Ai là gì? / Ai làm gì? / Ai thế nào?</i> vì ba kiểu cơ bản: Ai là gì? (giới thiệu), Ai làm gì? (kể hành động), Ai thế nào? (miêu tả).',
        'Sai — <b>Chỉ "Ai là gì?"</b> không đúng. Phải chọn <i>Ai là gì? / Ai làm gì? / Ai thế nào?</i> vì ba kiểu cơ bản: Ai là gì? (giới thiệu), Ai làm gì? (kể hành động), Ai thế nào? (miêu tả).',
      ]
    ),
    Q('Thành phần phụ chỉ hoàn cảnh (thời gian, nơi chốn, nguyên nhân) là?',
      ['Bổ ngữ chính', 'Trạng ngữ', 'Chủ ngữ', 'Vị ngữ'], 1,
      'Trạng ngữ = thành phần phụ bổ sung hoàn cảnh (thời gian, nơi chốn, nguyên nhân…).',
      [
        '<b>Trạng ngữ</b> là <i>thành phần phụ</i> bổ sung hoàn cảnh:',
        '<ul><li><b>Thời gian</b>: "Sáng nay", "Vào mùa thu".</li><li><b>Nơi chốn</b>: "Ở vườn", "Tại sân trường".</li><li><b>Nguyên nhân</b>: "Vì trời mưa".</li><li><b>Mục đích</b>: "Để học giỏi".</li><li><b>Cách thức</b>: "Bằng xe đạp".</li></ul>',
        '⚠️ Trạng ngữ <i>không phải</i> chủ ngữ hay vị ngữ — bỏ đi câu vẫn đúng ngữ pháp.',
      ],
      [
        'Sai — <b>Bổ ngữ chính</b> không đúng. Phải chọn <i>Trạng ngữ</i> vì trạng ngữ = thành phần phụ bổ sung hoàn cảnh (thời gian, nơi chốn, nguyên nhân…).',
        'Đúng — <b>Trạng ngữ</b>. Trạng ngữ = thành phần phụ bổ sung hoàn cảnh (thời gian, nơi chốn, nguyên nhân…).',
        'Sai — <b>Chủ ngữ</b> không đúng. Phải chọn <i>Trạng ngữ</i> vì trạng ngữ = thành phần phụ bổ sung hoàn cảnh (thời gian, nơi chốn, nguyên nhân…).',
        'Sai — <b>Vị ngữ</b> không đúng. Phải chọn <i>Trạng ngữ</i> vì trạng ngữ = thành phần phụ bổ sung hoàn cảnh (thời gian, nơi chốn, nguyên nhân…).',
      ]
    ),
    Q('Văn nghị luận yêu cầu?',
      ['Luận điểm rõ + luận cứ thuyết phục + lập luận chặt', 'Cảm xúc tuỳ tiện', 'Liệt kê số liệu thuần', 'Toàn dẫn chứng hoang đường'], 0,
      'Ba yếu tố cốt lõi: luận điểm rõ + luận cứ thuyết phục + lập luận chặt chẽ.',
      [
        '<b>Ba yếu tố cốt lõi của nghị luận</b>:',
        '<ul><li><b>Luận điểm</b>: ý kiến chính, rõ ràng, có thể bảo vệ.</li><li><b>Luận cứ</b>: lí lẽ + dẫn chứng cụ thể, xác thực.</li><li><b>Lập luận</b>: cách trình bày logic, chặt chẽ.</li></ul>',
        'Thiếu một trong ba → bài <i>không thuyết phục</i>.',
      ],
      [
        'Đúng — <b>Luận điểm rõ + luận cứ thuyết phục + lập luận chặt</b>. Ba yếu tố cốt lõi: luận điểm rõ + luận cứ thuyết phục + lập luận chặt chẽ.',
        'Sai — <b>Cảm xúc tuỳ tiện</b> không đúng. Phải chọn <i>Luận điểm rõ + luận cứ thuyết phục + lập luận chặt</i> vì ba yếu tố cốt lõi: luận điểm rõ + luận cứ thuyết phục + lập luận chặt chẽ.',
        'Sai — <b>Liệt kê số liệu thuần</b> không đúng. Phải chọn <i>Luận điểm rõ + luận cứ thuyết phục + lập luận chặt</i> vì ba yếu tố cốt lõi: luận điểm rõ + luận cứ thuyết phục + lập luận chặt chẽ.',
        'Sai — <b>Toàn dẫn chứng hoang đường</b> không đúng. Phải chọn <i>Luận điểm rõ + luận cứ thuyết phục + lập luận chặt</i> vì ba yếu tố cốt lõi: luận điểm rõ + luận cứ thuyết phục + lập luận chặt chẽ.',
      ]
    ),
    Q('Khi viết bài văn (kể/tả/biểu cảm), bố cục cần?',
      ['Mở – Thân – Kết rõ ràng, mạch lạc', '2 phần', '1 đoạn', '5 phần cố định'], 0,
      'Bố cục ba phần (Mở – Thân – Kết) rõ ràng, mạch lạc — luôn giữ.',
      [
        '<b>Bố cục bài văn ba phần</b>:',
        '<ul><li><b>Mở bài</b>: giới thiệu đối tượng, vấn đề.</li><li><b>Thân bài</b>: triển khai chính.</li><li><b>Kết bài</b>: tổng kết, cảm nghĩ, bài học.</li></ul>',
        'Đây là <i>công thức bất biến</i> cho mọi kiểu văn — tả, kể, biểu cảm, nghị luận.',
      ],
      [
        'Đúng — <b>Mở – Thân – Kết rõ ràng, mạch lạc</b>. Bố cục ba phần (Mở – Thân – Kết) rõ ràng, mạch lạc — luôn giữ.',
        'Sai — <b>2 phần</b> không đúng. Phải chọn <i>Mở – Thân – Kết rõ ràng, mạch lạc</i> vì bố cục ba phần (Mở – Thân – Kết) rõ ràng, mạch lạc — luôn giữ.',
        'Sai — <b>1 đoạn</b> không đúng. Phải chọn <i>Mở – Thân – Kết rõ ràng, mạch lạc</i> vì bố cục ba phần (Mở – Thân – Kết) rõ ràng, mạch lạc — luôn giữ.',
        'Sai — <b>5 phần cố định</b> không đúng. Phải chọn <i>Mở – Thân – Kết rõ ràng, mạch lạc</i> vì bố cục ba phần (Mở – Thân – Kết) rõ ràng, mạch lạc — luôn giữ.',
      ]
    ),
    Q('Điều quan trọng nhất khi viết là?',
      ['Diễn đạt rõ, dùng từ đúng, có cảm xúc/lí lẽ phù hợp', 'Dùng nhiều từ Hán Việt', 'Viết thật dài', 'Đặt nhiều dấu chấm than'], 0,
      'Rõ ý + đúng từ + cảm/lí phù hợp văn cảnh → bài văn hay.',
      [
        '<b>Bốn yêu cầu cốt lõi khi viết văn</b>:',
        '<ul><li><b>Diễn đạt rõ</b> — không lủng củng, mơ hồ.</li><li><b>Dùng từ đúng</b> — chính xác, đúng sắc thái.</li><li><b>Có cảm xúc</b> (với tả, kể, biểu cảm) hoặc <b>lí lẽ</b> (với nghị luận) phù hợp.</li><li><b>Phù hợp văn cảnh</b> — không lạc đề.</li></ul>',
        '<b>Lời dặn cuối năm</b>: Ngữ văn không chỉ là môn học — đó là cách ta <i>hiểu mình, hiểu người, hiểu cuộc đời</i>. Hè này, các em hãy <b>đọc thêm sách, viết nhật kí, quan sát những điều nhỏ bé</b> xung quanh.',
      ],
      [
        'Đúng — <b>Diễn đạt rõ, dùng từ đúng, có cảm xúc/lí lẽ phù hợp</b>. Rõ ý + đúng từ + cảm/lí phù hợp văn cảnh → bài văn hay.',
        'Sai — <b>Dùng nhiều từ Hán Việt</b> không đúng. Phải chọn <i>Diễn đạt rõ, dùng từ đúng, có cảm xúc/lí lẽ phù hợp</i> vì rõ ý + đúng từ + cảm/lí phù hợp văn cảnh → bài văn hay.',
        'Sai — <b>Viết thật dài</b> không đúng. Phải chọn <i>Diễn đạt rõ, dùng từ đúng, có cảm xúc/lí lẽ phù hợp</i> vì rõ ý + đúng từ + cảm/lí phù hợp văn cảnh → bài văn hay.',
        'Sai — <b>Đặt nhiều dấu chấm than</b> không đúng. Phải chọn <i>Diễn đạt rõ, dùng từ đúng, có cảm xúc/lí lẽ phù hợp</i> vì rõ ý + đúng từ + cảm/lí phù hợp văn cảnh → bài văn hay.',
      ]
    ),
  ]),
];

export const S6NV_SCENARIOS = indexBy(S6NV_WEEKS);
