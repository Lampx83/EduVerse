// ============================================================
// TRƯỜNG THPT — nội thất các toà (khớp id toà ở campus highschool)
// Nội dung theo GDPT 2018 (lớp 10–12), phân ban KHTN/KHXH, luyện thi TN THPT.
// Tách ra file riêng + gắn vào window để space.html nạp (tránh phình file).
// ============================================================
window.SPACES_HIGHSCHOOL = {
  admin:{emoji:'🏫',name:'Nhà Hiệu bộ – BGH',accent:'#6366f1',intro:'Trung tâm điều hành Trường THPT: theo dõi học tập, nội quy, tư vấn phân ban – hướng nghiệp và thông tin tuyển sinh.',
    rooms:[{ic:'📊',name:'Bảng điều khiển học tập',rd:'Theo dõi tiến độ & điểm các môn.',href:'/dashboard.html'},
      {ic:'📜',name:'Nội quy nhà trường',rd:'Quy định & văn hoá học đường.',panel:[
        {h:'Nội quy học sinh THPT'},
        {ul:['Đi học đúng giờ, mặc đồng phục đúng quy định','Lễ phép, trung thực, giữ gìn vệ sinh chung','Không gian lận trong kiểm tra – thi cử','Sử dụng điện thoại theo hướng dẫn của giáo viên','Tham gia đầy đủ hoạt động tập thể & sinh hoạt dưới cờ']},
        {note:'Văn hoá học đường: tôn trọng thầy cô, bạn bè; nói lời hay – làm việc tốt.'}]},
      {ic:'🧭',name:'Tư vấn phân ban & hướng nghiệp',rd:'Chọn tổ hợp KHTN/KHXH.',panel:[
        {h:'Chọn tổ hợp môn theo định hướng nghề'},
        {cards:[{ic:'🔬',t:'Ban KHTN',d:'Lí – Hoá – Sinh: kĩ thuật, y dược, CNTT.'},
          {ic:'🗺️',t:'Ban KHXH',d:'Sử – Địa – GDKT&PL: luật, kinh tế, sư phạm.'},
          {ic:'💻',t:'Công nghệ – Tin',d:'Tin học, công nghệ: lập trình, kĩ thuật.'},
          {ic:'🎨',t:'Nghệ thuật',d:'Âm nhạc, Mĩ thuật: thiết kế, truyền thông.'}]},
        {mcq:[{q:'Em thích Toán – Lí và muốn học kĩ thuật/CNTT. Tổ hợp phù hợp?',o:['Ban KHTN (Lí, Hoá/Tin)','Ban KHXH (Sử, Địa)','Chỉ học Văn','Không cần chọn'],a:0,fb:'Định hướng kĩ thuật/CNTT nên chọn tổ hợp có Toán – Lí (ban KHTN hoặc tổ hợp Công nghệ – Tin).'}]}]},
      {ic:'🎓',name:'Thông tin tuyển sinh ĐH',rd:'Các phương thức xét tuyển.',panel:[
        {h:'Các phương thức xét tuyển đại học'},
        {ul:['Xét điểm thi tốt nghiệp THPT','Xét học bạ THPT','Thi đánh giá năng lực / tư duy','Xét tuyển kết hợp (chứng chỉ ngoại ngữ…)','Tuyển thẳng theo quy chế']},
        {note:'Theo dõi đề án tuyển sinh của từng trường để biết tổ hợp & điểm chuẩn các năm.'}]},
      {ic:'🏛️',name:'Ban điều hành AI',rd:'Đề xuất cải tiến cho nhà trường & bình chọn.',board:true}],
    skills:['Hiểu cơ cấu trường','Chọn phân ban phù hợp','Định hướng nghề nghiệp'],
    quiz:[{q:'Cấp THPT ở Việt Nam gồm những lớp nào?',o:['Lớp 10, 11, 12','Lớp 6–9','Lớp 1–5','Lớp 10–13'],a:0},
      {q:'Theo GDPT 2018, từ lớp 10 học sinh bắt đầu?',o:['Chọn môn theo định hướng nghề (phân ban)','Học tất cả mọi môn như nhau','Chỉ học 3 môn','Nghỉ học các môn xã hội'],a:0},
      {q:'Kết quả thi tốt nghiệp THPT dùng để?',o:['Xét tốt nghiệp & xét tuyển đại học','Chỉ để biết điểm','Thay cho học bạ cả cấp','Không dùng làm gì'],a:0}]},

  grade10:{emoji:'🔟',name:'Khối lớp 10',accent:'#f59e0b',intro:'Phòng học khối 10 — bước chuyển vào THPT: làm quen phương pháp học chủ động và định hướng phân ban.',
    rooms:[{ic:'📚',name:'Chương trình lớp 10',rd:'Môn bắt buộc & môn lựa chọn.',panel:[
        {h:'Chương trình lớp 10 (GDPT 2018)'},
        {p:'Các môn & hoạt động bắt buộc:'},
        {ul:['Toán, Ngữ văn, Ngoại ngữ 1','Lịch sử','Giáo dục thể chất, Giáo dục QP-AN','Hoạt động trải nghiệm – hướng nghiệp','Nội dung giáo dục địa phương']},
        {p:'Chọn thêm 4 môn trong: Vật lí, Hoá học, Sinh học, Địa lí, GDKT&PL, Tin học, Công nghệ, Âm nhạc, Mĩ thuật.'}]},
      {ic:'🧠',name:'Phương pháp học chủ động',rd:'Tự học hiệu quả.',panel:[
        {h:'Bộ kĩ năng tự học'},
        {cards:[{ic:'📝',t:'Ghi chú Cornell',d:'Chia trang: ý chính – chi tiết – tóm tắt.'},
          {ic:'🕸️',t:'Sơ đồ tư duy',d:'Hệ thống hoá kiến thức bằng nhánh.'},
          {ic:'🍅',t:'Pomodoro',d:'Học 25 phút – nghỉ 5 phút.'},
          {ic:'🗣️',t:'Feynman',d:'Giảng lại bằng lời của mình để hiểu sâu.'}]},
        {check:['Lập thời gian biểu mỗi tuần','Học bài ngay sau buổi học','Tự đặt câu hỏi khi đọc','Ôn lại trước khi ngủ']}]},
      {ic:'🎯',name:'Đặt mục tiêu học kì',rd:'Ghi mục tiêu của bạn.',panel:[
        {h:'Mục tiêu học kì của em'},{p:'Mục tiêu rõ ràng giúp em học có động lực hơn.'},{goal:true}]},
      {ic:'📈',name:'Vẽ đồ thị hàm số (tương tác)',rd:'Hàm bậc nhất & bậc hai: kéo hệ số, xem đỉnh – nghiệm – tính đơn điệu ngay.',href:'/grapher.html?domain=highschool&type=quad'}],
    skills:['Học chủ động','Định hướng phân ban'],
    quiz:[{q:'Mệnh đề "Mọi số tự nhiên đều lớn hơn 0" là?',o:['Mệnh đề sai (vì 0 không lớn hơn 0)','Mệnh đề đúng','Không phải mệnh đề','Câu hỏi'],a:0},
      {q:'Tập hợp A = {1;2;3}. Số tập con của A là?',o:['8','3','6','9'],a:0},
      {q:'Lớp 10 trong GDPT 2018 còn gọi là lớp?',o:['Định hướng nghề nghiệp','Cuối cấp','Đầu cấp tiểu học','Dự bị đại học'],a:0}]},

  grade11:{emoji:'📗',name:'Khối lớp 11',accent:'#10b981',intro:'Phòng học khối 11 — học chuyên sâu theo tổ hợp đã chọn, đẩy mạnh học qua dự án và trải nghiệm.',
    rooms:[{ic:'📈',name:'Học chuyên sâu lớp 11',rd:'Nâng cao theo tổ hợp.',panel:[
        {h:'Trọng tâm lớp 11'},
        {p:'Lớp 11 đào sâu kiến thức theo tổ hợp đã chọn, tạo nền cho lớp 12 và kì thi.'},
        {ul:['Toán: lượng giác, dãy số, giới hạn, đạo hàm','Vật lí: dao động, sóng, điện trường – dòng điện','Hoá học: hữu cơ (hydrocarbon, alcohol…)','Ngữ văn: nghị luận xã hội & nghị luận văn học']}]},
      {ic:'🗂️',name:'Kĩ năng làm dự án (HĐTN)',rd:'Học qua dự án & trải nghiệm.',panel:[
        {h:'Quy trình thực hiện dự án học tập'},
        {ol:['Xác định vấn đề / chủ đề','Lập kế hoạch & phân công','Thực hiện, thu thập dữ liệu','Tạo sản phẩm & báo cáo','Đánh giá – rút kinh nghiệm']},
        {order:{title:'Sắp xếp 5 bước làm dự án học tập (HĐTN)',items:['Xác định vấn đề / chủ đề','Lập kế hoạch & phân công','Thực hiện, thu thập dữ liệu','Tạo sản phẩm & báo cáo','Đánh giá – rút kinh nghiệm']}},
        {note:'Hoạt động trải nghiệm – hướng nghiệp giúp em rèn kĩ năng làm việc nhóm & giải quyết vấn đề.'}]},
      {ic:'📈',name:'Đồ thị lượng giác (tương tác)',rd:'Hàm y=a·sin(bx+c): biên độ, chu kì, dịch pha — kéo hệ số xem ngay.',href:'/grapher.html?domain=highschool&type=sin'}],
    skills:['Học chuyên sâu','Làm dự án & làm việc nhóm'],
    quiz:[{q:'Đạo hàm của hàm số y = x² là?',o:['2x','x','x²/2','2'],a:0},
      {q:'Giá trị của sin90° bằng?',o:['1','0','0,5','-1'],a:0},
      {q:'Nghị luận xã hội thường bàn về?',o:['Một tư tưởng/hiện tượng đời sống','Chỉ tác phẩm văn học','Công thức toán','Bảng tuần hoàn'],a:0}]},

  grade12:{emoji:'📕',name:'Khối lớp 12',accent:'#ef4444',intro:'Phòng học khối 12 — năm cuối cấp: ôn thi tốt nghiệp THPT và chuẩn bị đăng kí xét tuyển đại học.',
    rooms:[{ic:'🎯',name:'Ôn thi tốt nghiệp THPT',rd:'Cấu trúc đề & chiến lược.',panel:[
        {h:'Kì thi tốt nghiệp THPT'},
        {ul:['Thi các môn theo quy chế hiện hành (Toán, Ngữ văn + môn lựa chọn)','Ôn theo ma trận/đề minh hoạ của Bộ GD&ĐT','Luyện đề & bấm giờ để quen áp lực','Phân bổ thời gian: câu dễ trước, câu khó sau']},
        {note:'Kết quả vừa để xét tốt nghiệp, vừa là một phương thức xét tuyển đại học.'}]},
      {ic:'📝',name:'Đăng kí nguyện vọng ĐH',rd:'Quy trình & cách sắp xếp NV.',panel:[
        {h:'Đăng kí xét tuyển đại học'},
        {ol:['Tìm hiểu ngành – trường phù hợp năng lực & sở thích','Đối chiếu điểm chuẩn các năm gần đây','Sắp xếp nguyện vọng yêu thích nhất lên trên','Đăng kí trên hệ thống tuyển sinh của Bộ GD&ĐT','Nộp lệ phí & xác nhận nhập học']},
        {order:{title:'Sắp xếp 5 bước đăng kí xét tuyển đại học',items:['Tìm hiểu ngành – trường phù hợp năng lực & sở thích','Đối chiếu điểm chuẩn các năm gần đây','Sắp xếp nguyện vọng yêu thích nhất lên trên','Đăng kí trên hệ thống tuyển sinh của Bộ GD&ĐT','Nộp lệ phí & xác nhận nhập học']}},
        {note:'Không giới hạn số nguyện vọng — nên có NV "cao", "vừa sức" và "an toàn".'}]},
      {ic:'⏱️',name:'Luyện đề bấm giờ',rd:'Rèn tốc độ & tâm lí phòng thi.',href:'/time-attack.html'},
      {ic:'🎯',name:'Đặt mục tiêu thi',rd:'Ghi mục tiêu điểm số.',panel:[{h:'Mục tiêu kì thi của em'},{goal:true}]}],
    skills:['Chiến lược ôn thi','Đăng kí xét tuyển'],
    quiz:[{q:'Nguyên hàm của f(x) = 2x là?',o:['x² + C','2 + C','x + C','2x² + C'],a:0},
      {q:'Khi sắp xếp nguyện vọng xét tuyển, nên đặt ngành yêu thích nhất ở?',o:['Nguyện vọng 1 (trên cùng)','Nguyện vọng cuối','Không quan trọng thứ tự','Bỏ trống'],a:0},
      {q:'Kì thi tốt nghiệp THPT do cơ quan nào tổ chức?',o:['Bộ Giáo dục & Đào tạo','Bộ Y tế','Trường đại học','Sở Văn hoá'],a:0}]},

  lab_phys:{emoji:'🧲',name:'Phòng bộ môn Vật lí',accent:'#6366f1',intro:'Phòng thí nghiệm Vật lí: thực hành đo lường, an toàn điện và củng cố các định luật cốt lõi.',
    rooms:[{ic:'🧪',name:'Bài thí nghiệm tiêu biểu',rd:'Thực hành Vật lí 10–12.',panel:[
        {h:'Một số bài thực hành'},
        {ul:['Đo gia tốc rơi tự do g','Khảo sát dao động con lắc đơn','Đo suất điện động & điện trở trong của nguồn','Khảo sát đoạn mạch (định luật Ohm)','Giao thoa ánh sáng – đo bước sóng']},
        {note:'Quy trình: đo số liệu → xử lí sai số → vẽ đồ thị → rút ra kết luận.'}]},
      {ic:'⚡',name:'An toàn điện trong PTN',rd:'Checklist trước khi cắm điện.',panel:[
        {check:['Kiểm tra dây & phích cắm không hở','Lắp xong mạch mới đóng nguồn','Không chạm tay ướt vào thiết bị điện','Chọn đúng thang đo của đồng hồ đo điện','Ngắt nguồn & báo giáo viên khi có sự cố']},
        {note:'Dòng điện qua người nguy hiểm — luôn ngắt nguồn trước khi thay đổi mạch.'}]},
      {ic:'🔢',name:'Công thức cốt lõi',rd:'Lật thẻ ôn công thức.',panel:[
        {flash:[{e:'🏃',f:'Định luật II Newton',b:'F = m·a'},{e:'⚡',f:'Định luật Ohm',b:'I = U / R'},
          {e:'🌊',f:'Tần số dao động',b:'f = 1 / T'},{e:'🔋',f:'Công suất điện',b:'P = U·I'},
          {e:'💡',f:'Điện năng tiêu thụ',b:'A = P·t'}]}]}],
    skills:['Kĩ năng thí nghiệm','An toàn điện','Xử lí số liệu & sai số'],
    quiz:[{q:'Theo định luật II Newton, gia tốc a của vật?',o:['Tỉ lệ thuận với lực F, tỉ lệ nghịch với khối lượng m','Tỉ lệ nghịch với F','Không phụ thuộc F','Bằng F·m'],a:0},
      {q:'Đơn vị đo cường độ dòng điện là?',o:['Ampe (A)','Vôn (V)','Oát (W)','Ôm (Ω)'],a:0},
      {q:'Lắp xong mạch điện trong PTN, việc bắt buộc khi kết thúc là?',o:['Ngắt nguồn điện','Để nguyên có điện','Chạm tay kiểm tra nóng','Tháo đồng hồ đo'],a:0}]},

  lab_chem:{emoji:'⚗️',name:'Phòng bộ môn Hoá học',accent:'#14b8a6',intro:'Phòng thí nghiệm Hoá học: thực hành phản ứng, an toàn hoá chất và đọc bảng tuần hoàn.',
    rooms:[{ic:'🧪',name:'Thí nghiệm Hoá học',rd:'Thực hành Hoá 10–12.',panel:[
        {h:'Một số thí nghiệm'},
        {ul:['Phản ứng oxi hoá – khử','Ảnh hưởng của nhiệt độ/xúc tác đến tốc độ phản ứng','Nhận biết một số ion trong dung dịch','Điều chế & thử tính chất ester','Chuẩn độ acid – base xác định nồng độ']}]},
      {ic:'🥽',name:'An toàn hoá chất',rd:'Checklist PPE & quy tắc.',panel:[
        {check:['Đeo kính bảo hộ & găng tay','Mặc áo blouse cài kín','Làm trong tủ hút khi có khí độc/mùi','Không nếm, không ngửi trực tiếp hoá chất','Biết vị trí vòi rửa mắt & bình chữa cháy']},
        {note:'Pha loãng acid đặc: rót TỪ TỪ acid vào nước, KHÔNG đổ nước vào acid (toả nhiệt mạnh, bắn).'}]},
      {ic:'🔬',name:'Bảng tuần hoàn',rd:'Lật thẻ nguyên tố.',panel:[
        {flash:[{e:'🧂',f:'Na (Z = 11)',b:'Kim loại kiềm, hoá trị I'},{e:'💨',f:'O (Z = 8)',b:'Phi kim, hoá trị II'},
          {e:'🟢',f:'Cl (Z = 17)',b:'Halogen, hoá trị I'},{e:'🧲',f:'Fe (Z = 26)',b:'Kim loại, hoá trị II/III'},
          {e:'💎',f:'C (Z = 6)',b:'Phi kim, nền của hoá hữu cơ'}]}]},
      {ic:'⚖️',name:'Cân bằng phương trình',rd:'Định luật bảo toàn khối lượng.',panel:[
        {ol:['Viết đúng công thức các chất','Cân bằng số nguyên tử mỗi nguyên tố hai vế','Kiểm tra lại điện tích (nếu là ion)','Tối giản hệ số']},
        {order:{title:'Sắp xếp 4 bước cân bằng phương trình hoá học',items:['Viết đúng công thức các chất','Cân bằng số nguyên tử mỗi nguyên tố hai vế','Kiểm tra lại điện tích (nếu là ion)','Tối giản hệ số']}},
        {mcq:[{q:'Cân bằng: H₂ + O₂ → H₂O. Hệ số đúng lần lượt là?',o:['2 ; 1 ; 2','1 ; 1 ; 1','2 ; 2 ; 2','1 ; 2 ; 1'],a:0,fb:'2H₂ + O₂ → 2H₂O — số nguyên tử H và O cân bằng hai vế.'}]}]}],
    skills:['Thí nghiệm hoá học','An toàn hoá chất','Đọc bảng tuần hoàn'],
    quiz:[{q:'Trong phản ứng oxi hoá – khử, chất khử là chất?',o:['Nhường electron','Nhận electron','Không thay đổi','Luôn là kim loại quý'],a:0},
      {q:'Số hiệu nguyên tử Z cho biết?',o:['Số proton trong hạt nhân','Số neutron','Khối lượng mol','Số phân tử'],a:0},
      {q:'Khi pha loãng acid sunfuric đặc, ta phải?',o:['Rót acid vào nước','Rót nước vào acid','Đun nóng acid','Trộn nhanh tuỳ ý'],a:0}]},

  lab_bio:{emoji:'🧬',name:'Phòng bộ môn Sinh học',accent:'#22c55e',intro:'Phòng thí nghiệm Sinh học: dùng kính hiển vi, tìm hiểu tế bào, di truyền và sinh thái.',
    rooms:[{ic:'🔬',name:'Thực hành kính hiển vi',rd:'Quan sát tế bào & mô.',panel:[
        {h:'Các bước dùng kính hiển vi'},
        {ol:['Đặt tiêu bản lên bàn kính, cố định','Chọn vật kính nhỏ (×10) trước','Điều chỉnh ốc thô để thấy ảnh, rồi ốc tinh cho rõ','Chuyển sang vật kính lớn khi cần','Vẽ và chú thích hình quan sát được']},
        {order:{title:'Sắp xếp 5 bước dùng kính hiển vi',items:['Đặt tiêu bản lên bàn kính, cố định','Chọn vật kính nhỏ (×10) trước','Điều chỉnh ốc thô để thấy ảnh, rồi ốc tinh cho rõ','Chuyển sang vật kính lớn khi cần','Vẽ và chú thích hình quan sát được']}}]},
      {ic:'🧫',name:'Tế bào & cơ thể',rd:'Cấu trúc tế bào nhân thực.',panel:[
        {cards:[{ic:'🧱',t:'Màng sinh chất',d:'Bao bọc, kiểm soát ra vào.'},{ic:'🧠',t:'Nhân',d:'Chứa ADN, điều khiển tế bào.'},
          {ic:'🔥',t:'Ti thể',d:'Hô hấp tế bào, tạo năng lượng (ATP).'},{ic:'🌿',t:'Lục lạp',d:'Quang hợp ở tế bào thực vật.'}]},
        {match:{title:'Nối bào quan với chức năng',pairs:[['Màng sinh chất','Bao bọc, kiểm soát ra vào tế bào'],['Nhân','Chứa ADN, điều khiển hoạt động tế bào'],['Ti thể','Hô hấp tế bào, tạo năng lượng ATP'],['Lục lạp','Quang hợp ở tế bào thực vật'],['Ribosome','Tổng hợp protein']]}},
        {p:'Tế bào là đơn vị cấu trúc & chức năng cơ bản của mọi cơ thể sống.'}]},
      {ic:'🧬',name:'Di truyền học',rd:'ADN, gen và quy luật Mendel.',panel:[
        {h:'Cơ sở di truyền'},
        {ul:['Trung tâm: ADN → ARN → Protein','Gen là đoạn ADN quy định tính trạng','Quy luật phân li & phân li độc lập (Mendel)','Đột biến gen / đột biến nhiễm sắc thể']},
        {mcq:[{q:'Bố mẹ kiểu gen Aa × Aa, tỉ lệ kiểu hình ở đời con (1 cặp tính trạng)?',o:['3 trội : 1 lặn','1 : 1','toàn trội','9 : 3 : 3 : 1'],a:0,fb:'Lai một cặp tính trạng dị hợp Aa × Aa cho tỉ lệ kiểu hình 3 trội : 1 lặn.'}]}]},
      {ic:'🌿',name:'Sinh thái & môi trường',rd:'Hệ sinh thái, bảo vệ môi trường.',panel:[
        {ul:['Hệ sinh thái = quần xã sinh vật + môi trường sống','Chuỗi & lưới thức ăn truyền năng lượng','Cân bằng sinh thái dễ bị phá vỡ bởi con người','Bảo vệ đa dạng sinh học & ứng phó biến đổi khí hậu']}]}],
    skills:['Dùng kính hiển vi','Hiểu di truyền cơ bản','Tư duy sinh thái'],
    quiz:[{q:'Bào quan thực hiện quang hợp ở tế bào thực vật là?',o:['Lục lạp','Ti thể','Nhân','Ribosome'],a:0},
      {q:'Vật chất mang thông tin di truyền là?',o:['ADN','Lipid','Tinh bột','Nước'],a:0},
      {q:'Lai Aa × aa cho tỉ lệ kiểu gen đời con?',o:['1 Aa : 1 aa','toàn Aa','3 : 1','1 AA : 1 aa'],a:0}]},

  computer:{emoji:'💻',name:'Phòng Tin học',accent:'#8b5cf6',intro:'Phòng máy tính: học lập trình Python, tư duy thuật toán và an toàn không gian mạng.',
    rooms:[{ic:'🐍',name:'Lập trình Python',rd:'Cú pháp & tư duy.',panel:[
        {h:'Nhập môn Python'},
        {ol:['Biến & kiểu dữ liệu (int, float, str)','Câu lệnh rẽ nhánh if – elif – else','Vòng lặp for / while','Hàm với def','Danh sách (list) & vòng lặp duyệt']},
        {note:'Tin học THPT có 2 định hướng: Tin học ứng dụng (ICT) và Khoa học máy tính (CS).'}]},
      {ic:'🔐',name:'An toàn không gian mạng',rd:'Bảo mật & ứng xử số.',panel:[
        {check:['Đặt mật khẩu mạnh, không dùng lại nhiều nơi','Bật xác thực 2 lớp (2FA)','Không bấm link lạ, không tải file không rõ nguồn','Không chia sẻ thông tin cá nhân tuỳ tiện','Tôn trọng bản quyền & văn hoá ứng xử trên mạng']},
        {mcq:[{q:'Nhận email lạ báo trúng thưởng, yêu cầu nhập mật khẩu. Em nên?',o:['Không bấm, xoá và báo cáo lừa đảo','Nhập thử xem sao','Gửi cho bạn cùng nhập','Trả lời xin thêm thông tin'],a:0,fb:'Đây là lừa đảo (phishing) — tuyệt đối không cung cấp mật khẩu/thông tin.'}]}]},
      {ic:'🧮',name:'Tư duy thuật toán',rd:'Nối thuật toán với cách làm.',panel:[
        {cards:[{ic:'🔎',t:'Tìm kiếm tuần tự',d:'Duyệt lần lượt đến khi gặp.'},{ic:'⚡',t:'Tìm kiếm nhị phân',d:'Chia đôi dãy đã sắp xếp.'},
          {ic:'🫧',t:'Sắp xếp nổi bọt',d:'Đổi chỗ cặp kề nhau nhiều lượt.'},{ic:'📌',t:'Sắp xếp chọn',d:'Chọn phần tử nhỏ nhất mỗi lượt.'}]},
        {match:{title:'Nối tên thuật toán với cách làm',pairs:[['Tìm kiếm tuần tự','Duyệt lần lượt đến khi gặp phần tử cần tìm'],['Tìm kiếm nhị phân','Chia đôi dãy đã sắp xếp để thu hẹp vùng tìm'],['Sắp xếp nổi bọt','Đổi chỗ cặp kề nhau nhiều lượt cho tới khi xong'],['Sắp xếp chọn','Mỗi lượt chọn phần tử nhỏ nhất đưa về đầu']]}}]}],
    skills:['Lập trình Python cơ bản','An toàn mạng','Tư duy thuật toán'],
    quiz:[{q:'Số nhị phân 1010 bằng số thập phân nào?',o:['10','8','12','5'],a:0},
      {q:'Trong Python, lệnh in ra màn hình là?',o:['print()','echo()','printf()','write()'],a:0},
      {q:'Tìm kiếm nhị phân yêu cầu dãy phải?',o:['Đã được sắp xếp','Toàn số chẵn','Có 10 phần tử','Không trùng nhau'],a:0}]},

  library:{emoji:'📚',name:'Thư viện',accent:'#b59b6a',intro:'Thư viện trường: rèn kĩ năng tra cứu, đọc hiểu và làm quen các tác phẩm văn học tiêu biểu.',
    rooms:[{ic:'🔎',name:'Kĩ năng tra cứu',rd:'Tìm & đánh giá nguồn tin.',panel:[
        {h:'Tra cứu thông tin đáng tin'},
        {ol:['Xác định từ khoá chính','Tìm ở sách giáo khoa, từ điển, nguồn chính thống','Đối chiếu nhiều nguồn','Ghi lại nguồn & tác giả khi trích dẫn']},
        {note:'Đánh giá độ tin cậy: tác giả là ai? cơ quan nào? cập nhật khi nào? có trích dẫn không?'}]},
      {ic:'📖',name:'Văn học Việt Nam',rd:'Tác giả – tác phẩm tiêu biểu.',panel:[
        {cards:[{ic:'📜',t:'Truyện Kiều',d:'Nguyễn Du — kiệt tác thơ Nôm.'},{ic:'🌾',t:'Chí Phèo',d:'Nam Cao — hiện thực phê phán.'},
          {ic:'🍚',t:'Vợ nhặt',d:'Kim Lân — tình người trong nạn đói.'},{ic:'🛶',t:'Người lái đò Sông Đà',d:'Nguyễn Tuân — tuỳ bút tài hoa.'}]}]},
      {ic:'✍️',name:'Phương pháp đọc – ghi chú',rd:'Đọc hiểu hiệu quả (SQ3R).',panel:[
        {h:'Phương pháp đọc SQ3R'},
        {ol:['Survey – khảo sát tổng quan','Question – đặt câu hỏi','Read – đọc kĩ','Recite – thuật lại bằng lời mình','Review – ôn lại']},
        {order:{title:'Sắp xếp 5 bước phương pháp đọc SQ3R',items:['Survey – khảo sát tổng quan','Question – đặt câu hỏi','Read – đọc kĩ','Recite – thuật lại bằng lời mình','Review – ôn lại']}}]},
      {ic:'📖',name:'Luyện đọc hiểu',rd:'Rèn ý chính, suy luận & đoán nghĩa qua ngữ cảnh.',panel:[
        {h:'Rèn kĩ năng đọc hiểu văn bản'},
        {p:'Khi đọc một đoạn trích, hãy xác định: ý chính, các chi tiết hỗ trợ, và thông điệp tác giả gửi gắm (có thể không nói thẳng).'},
        {mcq:[{q:'"Ý chính" của một đoạn văn là gì?',o:['Nội dung bao trùm, quan trọng nhất của đoạn','Câu dài nhất trong đoạn','Câu cuối cùng của đoạn','Từ được lặp lại nhiều nhất'],a:0,fb:'Ý chính là thông tin cốt lõi mà cả đoạn hướng tới — không phụ thuộc độ dài câu.'},
          {q:'Gặp một từ chưa biết khi đang đọc, cách xử lí tốt nhất?',o:['Đoán nghĩa qua ngữ cảnh rồi tra từ điển để xác nhận','Bỏ qua hoàn toàn','Dừng đọc ngay','Thay đại bằng một từ bất kì'],a:0,fb:'Suy luận theo ngữ cảnh rồi tra cứu giúp vừa hiểu bài, vừa mở rộng vốn từ.'},
          {q:'"Đọc suy luận" (inference) nghĩa là?',o:['Rút ra điều tác giả ngụ ý dù không nói thẳng','Đọc thật to thành tiếng','Chỉ đọc mỗi tiêu đề','Học thuộc lòng cả đoạn'],a:0,fb:'Suy luận là "đọc giữa những dòng chữ" để hiểu hàm ý, thái độ của tác giả.'}]}]}],
    skills:['Tra cứu & đánh giá nguồn','Đọc hiểu hiệu quả'],
    quiz:[{q:'Tác giả của Truyện Kiều là?',o:['Nguyễn Du','Nguyễn Trãi','Hồ Xuân Hương','Nam Cao'],a:0},
      {q:'Bước đầu tiên trong phương pháp SQ3R là?',o:['Survey (khảo sát)','Review','Read','Recite'],a:0},
      {q:'Khi trích dẫn thông tin, em cần?',o:['Ghi rõ nguồn & tác giả','Giấu nguồn','Chép y nguyên không ghi gì','Tự nhận là của mình'],a:0}]},

  hall:{emoji:'🎭',name:'Hội trường – Nhà đa năng',accent:'#8b5cf6',intro:'Nơi sinh hoạt dưới cờ, sự kiện, văn nghệ và rèn kĩ năng thuyết trình – hoạt động câu lạc bộ.',
    rooms:[{ic:'🌐',name:'Sự kiện Metaverse',rd:'Phòng đa người real-time.',href:'/metaverse.html'},
      {ic:'🎤',name:'Kĩ năng thuyết trình',rd:'Nói trước đám đông.',panel:[
        {h:'Thuyết trình tự tin'},
        {ul:['Mở đầu nêu rõ thông điệp chính','Mỗi slide một ý, hình ảnh rõ ràng','Giao tiếp bằng mắt, nói chậm – rõ','Luyện tập trước & chuẩn bị trả lời câu hỏi']},
        {note:'Ngôn ngữ cơ thể (đứng thẳng, tay mở) tạo thiện cảm với người nghe.'}]},
      {ic:'🎭',name:'Câu lạc bộ & văn nghệ',rd:'Hoạt động ngoại khoá.',panel:[
        {cards:[{ic:'🗣️',t:'CLB Tiếng Anh',d:'Giao tiếp, hùng biện.'},{ic:'🔬',t:'CLB STEM',d:'Khoa học – kĩ thuật – sáng tạo.'},
          {ic:'📰',t:'CLB Văn – Báo',d:'Viết, làm nội dung trường.'},{ic:'🎶',t:'Văn nghệ – Thể thao',d:'Phong trào, hội diễn.'}]}]}],
    skills:['Thuyết trình','Hoạt động tập thể'],
    quiz:[{q:'Khi thuyết trình, điều nên làm là?',o:['Giao tiếp bằng mắt với người nghe','Đọc nguyên văn slide','Nói thật nhanh','Quay lưng về khán giả'],a:0},
      {q:'Một slide thuyết trình tốt nên?',o:['Tập trung một ý chính','Chứa thật nhiều chữ','Không có tiêu đề','Toàn hiệu ứng'],a:0},
      {q:'Tham gia câu lạc bộ giúp học sinh?',o:['Phát triển kĩ năng & kết nối bạn bè','Giảm điểm số','Không có lợi ích','Bị phạt'],a:0}]},

  youth:{emoji:'🚩',name:'Đoàn TN – Phòng truyền thống',accent:'#e23b3b',intro:'Tìm hiểu tổ chức Đoàn Thanh niên, truyền thống nhà trường và ý thức công dân.',
    rooms:[{ic:'🚩',name:'Đoàn TNCS Hồ Chí Minh',rd:'Tổ chức & hoạt động Đoàn.',panel:[
        {h:'Đoàn Thanh niên Cộng sản Hồ Chí Minh'},
        {ul:['Thành lập ngày 26/3/1931','Học sinh đủ 16 tuổi, đủ điều kiện có thể được kết nạp Đoàn','Phong trào tiêu biểu: Thanh niên tình nguyện, Học sinh 3 tốt','Bồi dưỡng lí tưởng, đạo đức, lối sống cho thanh niên']},
        {note:'Mùa hè xanh, Tiếp sức mùa thi… là các hoạt động tình nguyện quen thuộc của Đoàn.'}]},
      {ic:'🏆',name:'Phòng truyền thống',rd:'Chặng đường nhà trường.',panel:[
        {h:'Truyền thống nhà trường'},
        {timeline:[{t:'Thành lập',d:'Những ngày đầu xây dựng trường.'},{t:'Phát triển',d:'Mở rộng cơ sở vật chất & đội ngũ.'},
          {t:'Thành tích',d:'Học sinh giỏi, đỗ đại học, giải phong trào.'},{t:'Hôm nay',d:'Tiếp nối truyền thống, hội nhập số.'}]}]},
      {ic:'🤝',name:'Công dân & kĩ năng sống',rd:'Quyền & nghĩa vụ công dân.',panel:[
        {mcq:[{q:'Công dân Việt Nam đủ bao nhiêu tuổi có quyền bầu cử đại biểu Quốc hội?',o:['Đủ 18 tuổi','Đủ 15 tuổi','Đủ 16 tuổi','Đủ 21 tuổi'],a:0,fb:'Đủ 18 tuổi có quyền bầu cử; đủ 21 tuổi có quyền ứng cử đại biểu Quốc hội & HĐND.'}]}]}],
    skills:['Hiểu tổ chức Đoàn','Ý thức công dân'],
    quiz:[{q:'Đoàn TNCS Hồ Chí Minh được thành lập ngày nào?',o:['26/3/1931','2/9/1945','20/11/1982','19/5/1890'],a:0},
      {q:'Công dân đủ 18 tuổi có quyền?',o:['Bầu cử','Không có quyền nào','Miễn mọi nghĩa vụ','Tự đặt ra luật'],a:0},
      {q:'Hoạt động "Tiếp sức mùa thi" gắn với tổ chức nào?',o:['Đoàn Thanh niên','Hội Phụ huynh','Công đoàn giáo viên','Hội Chữ thập đỏ quốc tế'],a:0}]},

  arts:{emoji:'🎨',name:'Phòng Nghệ thuật',accent:'#f472b6',intro:'Môn Âm nhạc & Mĩ thuật ở THPT (GDPT 2018): chơi đàn, gõ nhịp, pha màu và vẽ tự do.',
    rooms:[{ic:'🎵',name:'Âm nhạc',rd:'Chơi đàn, gõ nhịp & nhạc lí.',panel:[
        {h:'Kiến thức âm nhạc cơ bản'},
        {ul:['Cao độ – trường độ của âm thanh','Các loại nhịp: 2/4, 3/4, 4/4','Dân ca ba miền Bắc – Trung – Nam','Nhạc cụ dân tộc: đàn bầu, đàn tranh, sáo trúc']},
        {piano:true},
        {rhythm:true}]},
      {ic:'🖼️',name:'Mĩ thuật',rd:'Pha màu & vẽ tự do.',panel:[
        {cards:[{ic:'🌈',t:'Màu nóng – lạnh',d:'Tạo cảm xúc & chiều sâu.'},{ic:'🧩',t:'Bố cục',d:'Sắp xếp mảng chính – phụ.'},
          {ic:'📐',t:'Phối cảnh',d:'Diễn tả không gian xa – gần.'},{ic:'✏️',t:'Thiết kế',d:'Mĩ thuật ứng dụng, đồ hoạ.'}]},
        {mixer:true},
        {draw:true}]},
      {ic:'💡',name:'Sáng tạo & thẩm mĩ',rd:'Quy trình thiết kế sáng tạo.',panel:[
        {p:'Nghệ thuật giúp em thể hiện ý tưởng, cảm xúc và nhìn cái đẹp quanh mình — nền tảng cho thiết kế, truyền thông, kiến trúc.'},
        {order:{title:'Sắp xếp 5 bước quy trình thiết kế sáng tạo',items:['Thấu hiểu vấn đề & người dùng','Lên ý tưởng đa dạng (brainstorm)','Phác thảo & chọn phương án','Làm mẫu thử (prototype) & thử nghiệm','Hoàn thiện & chia sẻ tác phẩm']}}]}],
    skills:['Cảm thụ nghệ thuật','Tư duy thẩm mĩ'],
    quiz:[{q:'Nhịp 2/4 có mấy phách trong một ô nhịp?',o:['2 phách','4 phách','3 phách','1 phách'],a:0},
      {q:'Đàn bầu là nhạc cụ?',o:['Dân tộc Việt Nam','Phương Tây','Điện tử hiện đại','Của Ấn Độ'],a:0},
      {q:'Màu đỏ, cam, vàng được xếp vào nhóm màu?',o:['Màu nóng','Màu lạnh','Màu trung tính','Không màu'],a:0}]},

  canteen:{emoji:'🍜',name:'Căng tin',accent:'#f59e0b',intro:'Góc dinh dưỡng học đường: ăn uống cân bằng và giữ vệ sinh an toàn thực phẩm.',
    rooms:[{ic:'🥗',name:'Dinh dưỡng học đường',rd:'Bữa ăn hợp lí.',panel:[
        {h:'Ăn uống cân bằng'},
        {ul:['Đủ 4 nhóm chất: bột đường, đạm, béo, vitamin – khoáng','Ăn sáng đầy đủ để học tập tốt','Uống đủ nước mỗi ngày','Hạn chế đồ ngọt, nước có ga, đồ chiên rán']},
        {note:'Bữa ăn đa dạng giúp cơ thể tuổi dậy thì phát triển toàn diện.'}]},
      {ic:'🧼',name:'An toàn thực phẩm',rd:'Vệ sinh ăn uống.',panel:[
        {check:['Rửa tay sạch trước khi ăn','Ăn chín, uống sôi','Kiểm tra hạn sử dụng thực phẩm','Không dùng đồ ăn ôi thiu, nghi ngờ hỏng']}]}],
    skills:['Dinh dưỡng hợp lí','Vệ sinh an toàn thực phẩm'],
    quiz:[{q:'Bữa ăn cân bằng cần đủ mấy nhóm chất chính?',o:['4 nhóm','2 nhóm','1 nhóm','7 nhóm'],a:0},
      {q:'Thói quen tốt trước khi ăn là?',o:['Rửa tay sạch','Bỏ bữa','Ăn thật nhanh','Vừa ăn vừa chơi điện thoại'],a:0},
      {q:'Để phòng ngộ độc thực phẩm, nên?',o:['Ăn chín uống sôi, kiểm tra hạn dùng','Ăn đồ để lâu ngoài trời','Uống nước lã','Dùng đồ hết hạn'],a:0}]},

  medical:{emoji:'🩹',name:'Phòng Y tế',accent:'#16a34a',intro:'Phòng y tế học đường: sơ cấp cứu cơ bản và chăm sóc sức khoẻ thể chất – tinh thần tuổi học trò.',
    rooms:[{ic:'⛑️',name:'Sơ cấp cứu',rd:'Xử trí tình huống thường gặp.',panel:[
        {h:'Một số kĩ năng sơ cứu'},
        {ul:['Chảy máu: ép cầm máu, nâng cao vùng bị thương','Bỏng nhẹ: làm mát dưới vòi nước sạch 10–20 phút','Bong gân: RICE (Nghỉ – Chườm đá – Băng ép – Kê cao)','Ngất xỉu: đặt nằm nơi thoáng, kê chân cao, gọi hỗ trợ']},
        {mcq:[{q:'Bị bỏng nước sôi ở tay, việc ĐẦU TIÊN nên làm là?',o:['Làm mát vùng bỏng dưới vòi nước sạch','Bôi kem đánh răng','Chọc vỡ nốt phồng','Bôi nước mắm'],a:0,fb:'Làm mát bằng nước sạch 10–20 phút giúp giảm tổn thương; không bôi kem đánh răng/nước mắm.'}]}]},
      {ic:'🧠',name:'Sức khoẻ tâm lí tuổi học trò',rd:'Quản lí cảm xúc & stress.',panel:[
        {ul:['Ngủ đủ giấc, vận động đều đặn','Chia sẻ với người tin cậy khi căng thẳng','Hít thở sâu, nghỉ ngơi hợp lí khi áp lực thi cử','Tìm đến thầy cô / phòng tham vấn khi cần']},
        {note:'Căng thẳng kéo dài cần được lắng nghe & hỗ trợ — đừng ngại tìm giúp đỡ.'}]}],
    skills:['Sơ cấp cứu cơ bản','Chăm sóc sức khoẻ tinh thần'],
    quiz:[{q:'Sơ cứu bỏng nhẹ đúng cách là?',o:['Làm mát bằng nước sạch','Bôi kem đánh răng','Chườm nước đá trực tiếp lâu','Băng kín thật chặt'],a:0},
      {q:'RICE trong sơ cứu bong gân KHÔNG gồm bước nào?',o:['Bôi dầu nóng ngay','Nghỉ ngơi','Chườm đá','Kê cao'],a:0},
      {q:'Khi căng thẳng kéo dài, nên?',o:['Chia sẻ & tìm hỗ trợ','Giữ kín một mình','Bỏ ăn bỏ ngủ','Tự cô lập'],a:0}]},

  gym:{emoji:'🏀',name:'Nhà thể chất',accent:'#0891b2',intro:'Giáo dục thể chất & Giáo dục Quốc phòng – An ninh: rèn luyện sức khoẻ, ý chí và kĩ năng.',
    rooms:[{ic:'🏃',name:'Giáo dục thể chất',rd:'Các môn thể thao trường học.',panel:[
        {cards:[{ic:'🏃',t:'Điền kinh',d:'Chạy, nhảy, ném.'},{ic:'⚽',t:'Bóng đá',d:'Phối hợp đồng đội.'},
          {ic:'🏀',t:'Bóng rổ',d:'Phản xạ & chiến thuật.'},{ic:'🏸',t:'Cầu lông',d:'Nhanh tay, nhanh mắt.'}]},
        {note:'Tập thể dục đều đặn giúp tăng sức khoẻ, giảm căng thẳng và học tập tốt hơn.'}]},
      {ic:'🪖',name:'Giáo dục QP – AN',rd:'Kiến thức quốc phòng – an ninh.',panel:[
        {ul:['Đội ngũ từng người không có súng','Hiểu biết chung về quốc phòng toàn dân','Kĩ thuật bắn súng tiểu liên AK (lí thuyết & an toàn)','Phòng tránh tai nạn bom mìn, vật liệu nổ','Trách nhiệm bảo vệ Tổ quốc của công dân']}]},
      {ic:'⚡',name:'Phản xạ & thể lực',rd:'Trò chơi phản xạ nhanh.',href:'/time-attack.html'}],
    skills:['Rèn luyện thể chất','Kiến thức QP – AN'],
    quiz:[{q:'Lợi ích của tập thể dục đều đặn?',o:['Tăng sức khoẻ & tinh thần','Gây mệt mỏi kéo dài','Giảm trí nhớ','Không có lợi ích'],a:0},
      {q:'Môn Giáo dục QP – AN ở THPT giúp học sinh?',o:['Hiểu trách nhiệm bảo vệ Tổ quốc','Trở thành quân nhân chuyên nghiệp','Được miễn học các môn khác','Không học gì hữu ích'],a:0},
      {q:'Khi gặp vật nghi là bom mìn/vật liệu nổ, em nên?',o:['Tránh xa & báo người lớn/cơ quan chức năng','Cầm lên xem','Đập thử','Mang về nhà'],a:0}]},

  bike:{emoji:'🚲',name:'Nhà xe học sinh',accent:'#64748b',intro:'Khu để xe & góc an toàn giao thông: đi lại an toàn, văn minh và đúng luật.',
    rooms:[{ic:'🚦',name:'An toàn giao thông',rd:'Luật & văn hoá giao thông.',panel:[
        {h:'An toàn giao thông cho học sinh'},
        {ul:['Đội mũ bảo hiểm khi đi xe đạp điện / xe máy điện','Đi đúng phần đường, làn đường','Không dàn hàng ngang, không lạng lách','Không dùng điện thoại khi đang điều khiển xe','Tuân thủ đèn tín hiệu & biển báo']},
        {mcq:[{q:'Học sinh đi xe đạp điện đến trường BẮT BUỘC phải?',o:['Đội mũ bảo hiểm cài quai đúng cách','Đi thật nhanh cho kịp giờ','Chở ba bạn','Vượt đèn đỏ khi đường vắng'],a:0,fb:'Người đi xe đạp điện/xe máy điện bắt buộc đội mũ bảo hiểm; vi phạm sẽ bị xử lí theo luật.'}]}]},
      {ic:'🅿️',name:'Văn hoá để xe',rd:'Sắp xếp gọn gàng.',panel:[
        {check:['Để xe đúng nơi quy định','Khoá xe cẩn thận','Xếp xe ngay ngắn theo hàng','Tắt máy/khoá điện trước khi rời xe']}]}],
    skills:['An toàn giao thông','Ý thức kỉ luật'],
    quiz:[{q:'Khi đi xe đạp điện, học sinh bắt buộc phải?',o:['Đội mũ bảo hiểm','Chở 3','Đi vào làn ô tô','Bấm còi liên tục'],a:0},
      {q:'Đèn tín hiệu màu đỏ nghĩa là?',o:['Dừng lại','Đi nhanh','Rẽ trái tự do','Tăng tốc'],a:0},
      {q:'Hành vi nào an toàn khi tham gia giao thông?',o:['Đi đúng phần đường, chú ý quan sát','Dùng điện thoại khi lái','Dàn hàng ngang','Lạng lách'],a:0}]},
};
