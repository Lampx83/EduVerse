// DATA seed source — 34 tỉnh/thành (sau sáp nhập 1/7/2025, Nghị quyết 202/2025/QH15).
// 28 tỉnh + 6 thành phố trực thuộc TW. Chỉ seed-content.mjs import.
// Vùng = 6 vùng kinh tế - xã hội theo phân loại hiện hành.
export const PROVINCES = [
  // ============== TRUNG DU VÀ MIỀN NÚI PHÍA BẮC (9) ==============
  { id:'tuyen-quang', name:'Tuyên Quang', region:'Trung du và miền núi phía Bắc', emoji:'🌲', capital:'Tuyên Quang', area_km2:13797,
    highlight:'Hợp nhất Tuyên Quang – Hà Giang: "Thủ đô kháng chiến" Tân Trào và cao nguyên đá Đồng Văn, mùa hoa tam giác mạch.',
    quiz:[
      { q:'Sau sáp nhập 2025, tỉnh Hà Giang nhập vào tỉnh nào?', choices:['Tuyên Quang','Lào Cai','Cao Bằng','Yên Bái'], answer:0 },
      { q:'Tân Trào – "Thủ đô kháng chiến" – gắn với sự kiện lịch sử nào?', choices:['Khởi nghĩa Lam Sơn','Cách mạng tháng Tám 1945','Chiến dịch Hồ Chí Minh','Trận Đông Khê'], answer:1 },
    ]},
  { id:'lao-cai', name:'Lào Cai', region:'Trung du và miền núi phía Bắc', emoji:'🏔️', capital:'Lào Cai', area_km2:13256,
    highlight:'Hợp nhất Lào Cai – Yên Bái: đỉnh Fansipan "nóc nhà Đông Dương", Sa Pa mờ sương và ruộng bậc thang Mù Cang Chải.',
    quiz:[
      { q:'Đỉnh núi cao nhất Việt Nam (Fansipan) nằm ở tỉnh nào?', choices:['Lai Châu','Lào Cai','Sơn La','Điện Biên'], answer:1 },
      { q:'Ruộng bậc thang Mù Cang Chải (Yên Bái cũ) nay thuộc tỉnh nào?', choices:['Lào Cai','Tuyên Quang','Phú Thọ','Sơn La'], answer:0 },
    ]},
  { id:'thai-nguyen', name:'Thái Nguyên', region:'Trung du và miền núi phía Bắc', emoji:'🍵', capital:'Thái Nguyên', area_km2:8386,
    highlight:'Hợp nhất Thái Nguyên – Bắc Kạn: "đệ nhất danh trà" Tân Cương và hồ Ba Bể xanh biếc.',
    quiz:[
      { q:'Thái Nguyên nổi tiếng với đặc sản nào?', choices:['Cà phê','Chè (trà) Tân Cương','Cacao','Hồ tiêu'], answer:1 },
      { q:'Hồ Ba Bể (Bắc Kạn cũ) nay thuộc tỉnh nào?', choices:['Thái Nguyên','Tuyên Quang','Cao Bằng','Lạng Sơn'], answer:0 },
    ]},
  { id:'phu-tho', name:'Phú Thọ', region:'Trung du và miền núi phía Bắc', emoji:'🏛️', capital:'Việt Trì', area_km2:9361,
    highlight:'Hợp nhất Phú Thọ – Vĩnh Phúc – Hòa Bình: Đất Tổ Hùng Vương, khu nghỉ mát Tam Đảo và thủy điện Hòa Bình.',
    quiz:[
      { q:'Đền Hùng – nơi giỗ Tổ Hùng Vương – thuộc tỉnh nào?', choices:['Phú Thọ','Vĩnh Phúc cũ','Hà Nội','Tuyên Quang'], answer:0 },
      { q:'Tỉnh Phú Thọ mới được hợp nhất từ mấy tỉnh cũ?', choices:['2','3','4','5'], answer:1 },
    ]},
  { id:'cao-bang', name:'Cao Bằng', region:'Trung du và miền núi phía Bắc', emoji:'💧', capital:'Cao Bằng', area_km2:6700,
    highlight:'Thác Bản Giốc hùng vĩ – biên giới Việt – Trung, hang Pác Bó lịch sử. (Giữ nguyên, không sáp nhập)',
    quiz:[
      { q:'Thác nước nổi tiếng nhất Cao Bằng?', choices:['Thác Dray Nur','Thác Bản Giốc','Thác Pongour','Thác Bạc'], answer:1 },
      { q:'Hang Pác Bó gắn với nhân vật lịch sử nào?', choices:['Lý Thường Kiệt','Trần Hưng Đạo','Hồ Chí Minh','Quang Trung'], answer:2 },
    ]},
  { id:'lang-son', name:'Lạng Sơn', region:'Trung du và miền núi phía Bắc', emoji:'🛕', capital:'Lạng Sơn', area_km2:8310,
    highlight:'Cửa khẩu Hữu Nghị, ải Chi Lăng lịch sử, động Tam Thanh huyền bí. (Giữ nguyên, không sáp nhập)',
    quiz:[
      { q:'Cửa khẩu quốc tế lớn ở Lạng Sơn tên là?', choices:['Móng Cái','Hữu Nghị','Lao Bảo','Cha Lo'], answer:1 },
      { q:'Lạng Sơn giáp với quốc gia nào?', choices:['Lào','Trung Quốc','Campuchia','Thái Lan'], answer:1 },
    ]},
  { id:'son-la', name:'Sơn La', region:'Trung du và miền núi phía Bắc', emoji:'🥛', capital:'Sơn La', area_km2:14123,
    highlight:'Cao nguyên Mộc Châu – đồi chè, hoa mận, sữa bò thơm ngon. (Giữ nguyên, không sáp nhập)',
    quiz:[
      { q:'Cao nguyên nổi tiếng nhất Sơn La?', choices:['Mộc Châu','Đồng Văn','Di Linh','Lâm Viên'], answer:0 },
      { q:'Mộc Châu nổi tiếng với loại hoa nào vào mùa xuân?', choices:['Hoa đào','Hoa mận','Hoa hồng','Hoa cải vàng'], answer:1 },
    ]},
  { id:'lai-chau', name:'Lai Châu', region:'Trung du và miền núi phía Bắc', emoji:'⛰️', capital:'Lai Châu', area_km2:9069,
    highlight:'Núi non hùng vĩ Tây Bắc – đỉnh Pu Ta Leng, ruộng bậc thang Tả Lèng. (Giữ nguyên, không sáp nhập)',
    quiz:[
      { q:'Lai Châu nằm ở tiểu vùng nào của miền Bắc?', choices:['Đông Bắc','Tây Bắc','Đồng bằng sông Hồng','Bắc Trung Bộ'], answer:1 },
      { q:'Tỉnh lỵ của Lai Châu là?', choices:['Tam Đường','Lai Châu','Phong Thổ','Mường Tè'], answer:1 },
    ]},
  { id:'dien-bien', name:'Điện Biên', region:'Trung du và miền núi phía Bắc', emoji:'🏔️', capital:'Điện Biên Phủ', area_km2:9541,
    highlight:'Chiến thắng Điện Biên Phủ 1954 – "lừng lẫy năm châu, chấn động địa cầu". (Giữ nguyên, không sáp nhập)',
    quiz:[
      { q:'Chiến thắng Điện Biên Phủ diễn ra năm nào?', choices:['1945','1954','1968','1975'], answer:1 },
      { q:'Tỉnh lỵ của Điện Biên là?', choices:['Mường Lay','Tuần Giáo','Điện Biên Phủ','Mường Nhé'], answer:2 },
    ]},

  // ============== ĐỒNG BẰNG SÔNG HỒNG (6) ==============
  { id:'ha-noi', name:'Hà Nội', region:'Đồng bằng sông Hồng', emoji:'🏯', capital:'Hà Nội', area_km2:3359,
    highlight:'Thủ đô nghìn năm văn hiến – Hồ Gươm, Văn Miếu, phố cổ 36 phố phường. (Giữ nguyên, không sáp nhập)',
    quiz:[
      { q:'Hà Nội là thủ đô của nước nào?', choices:['Việt Nam','Lào','Campuchia','Thái Lan'], answer:0 },
      { q:'Hồ nào ở trung tâm Hà Nội có Tháp Rùa?', choices:['Hồ Tây','Hồ Gươm','Hồ Trúc Bạch','Hồ Bảy Mẫu'], answer:1 },
    ]},
  { id:'hai-phong', name:'Hải Phòng', region:'Đồng bằng sông Hồng', emoji:'⚓', capital:'Hải Phòng', area_km2:3195,
    highlight:'Hợp nhất Hải Phòng – Hải Dương: thành phố Hoa phượng đỏ, cảng biển lớn nhất miền Bắc, đảo Cát Bà và bánh đậu xanh trứ danh.',
    quiz:[
      { q:'Sau sáp nhập 2025, tỉnh Hải Dương nhập vào thành phố nào?', choices:['Hà Nội','Hải Phòng','Quảng Ninh','Bắc Ninh'], answer:1 },
      { q:'Đảo nào nổi tiếng thuộc thành phố Hải Phòng?', choices:['Phú Quốc','Côn Đảo','Cát Bà','Lý Sơn'], answer:2 },
    ]},
  { id:'quang-ninh', name:'Quảng Ninh', region:'Đồng bằng sông Hồng', emoji:'🐉', capital:'Hạ Long', area_km2:6207,
    highlight:'Vịnh Hạ Long – di sản thiên nhiên thế giới với hàng nghìn đảo đá vôi. (Giữ nguyên, không sáp nhập)',
    quiz:[
      { q:'Vịnh Hạ Long thuộc tỉnh nào?', choices:['Hải Phòng','Quảng Ninh','Nam Định cũ','Thanh Hóa'], answer:1 },
      { q:'Tỉnh lỵ của Quảng Ninh là thành phố nào?', choices:['Móng Cái','Cẩm Phả','Hạ Long','Uông Bí'], answer:2 },
    ]},
  { id:'bac-ninh', name:'Bắc Ninh', region:'Đồng bằng sông Hồng', emoji:'🎶', capital:'Bắc Ninh', area_km2:4718,
    highlight:'Hợp nhất Bắc Ninh – Bắc Giang: quê hương dân ca quan họ (di sản UNESCO) và vải thiều Lục Ngạn nức tiếng.',
    quiz:[
      { q:'Dân ca quan họ là di sản gắn với tỉnh nào?', choices:['Bắc Ninh','Hưng Yên','Phú Thọ','Hà Nội'], answer:0 },
      { q:'Vải thiều Lục Ngạn (Bắc Giang cũ) nay thuộc tỉnh nào?', choices:['Bắc Ninh','Hưng Yên','Hà Nội','Thái Nguyên'], answer:0 },
    ]},
  { id:'hung-yen', name:'Hưng Yên', region:'Đồng bằng sông Hồng', emoji:'🍯', capital:'Hưng Yên', area_km2:2516,
    highlight:'Hợp nhất Hưng Yên – Thái Bình: nhãn lồng tiến vua, Phố Hiến cổ và vựa lúa đồng bằng, chùa Keo cổ kính.',
    quiz:[
      { q:'Hưng Yên nổi tiếng với loại quả "tiến vua" nào?', choices:['Nhãn lồng','Vải thiều','Cam sành','Bưởi'], answer:0 },
      { q:'Chùa Keo (Thái Bình cũ) nay thuộc tỉnh nào?', choices:['Hưng Yên','Ninh Bình','Bắc Ninh','Hà Nội'], answer:0 },
    ]},
  { id:'ninh-binh', name:'Ninh Bình', region:'Đồng bằng sông Hồng', emoji:'🛶', capital:'Hoa Lư', area_km2:3916,
    highlight:'Hợp nhất Ninh Bình – Hà Nam – Nam Định: danh thắng Tràng An, chùa Tam Chúc và đền Trần, phở bò Nam Định.',
    quiz:[
      { q:'Quần thể danh thắng Tràng An – di sản UNESCO – thuộc tỉnh nào?', choices:['Ninh Bình','Hà Nam cũ','Thanh Hóa','Quảng Ninh'], answer:0 },
      { q:'Tỉnh Ninh Bình mới hợp nhất từ Ninh Bình, Hà Nam và tỉnh nào?', choices:['Nam Định','Thái Bình','Hưng Yên','Hải Dương'], answer:0 },
    ]},

  // ============== BẮC TRUNG BỘ VÀ DUYÊN HẢI MIỀN TRUNG (9) ==============
  { id:'thanh-hoa', name:'Thanh Hóa', region:'Bắc Trung Bộ và Duyên hải miền Trung', emoji:'🏖️', capital:'Thanh Hóa', area_km2:11116,
    highlight:'Bãi biển Sầm Sơn, Thành nhà Hồ – di sản văn hóa thế giới. (Giữ nguyên, không sáp nhập)',
    quiz:[
      { q:'Bãi biển nổi tiếng nhất Thanh Hóa?', choices:['Mỹ Khê','Sầm Sơn','Nha Trang','Lăng Cô'], answer:1 },
      { q:'Thành nhà Hồ được công nhận bởi tổ chức nào?', choices:['ASEAN','UNESCO','WHO','WTO'], answer:1 },
    ]},
  { id:'nghe-an', name:'Nghệ An', region:'Bắc Trung Bộ và Duyên hải miền Trung', emoji:'🌟', capital:'Vinh', area_km2:16487,
    highlight:'Quê hương Chủ tịch Hồ Chí Minh – làng Sen, Kim Liên, Nam Đàn. (Giữ nguyên, không sáp nhập)',
    quiz:[
      { q:'Quê hương Chủ tịch Hồ Chí Minh thuộc tỉnh nào?', choices:['Hà Tĩnh','Nghệ An','Quảng Trị','Thanh Hóa'], answer:1 },
      { q:'Tỉnh lỵ của Nghệ An là thành phố nào?', choices:['Cửa Lò','Vinh','Hoàng Mai','Diễn Châu'], answer:1 },
    ]},
  { id:'ha-tinh', name:'Hà Tĩnh', region:'Bắc Trung Bộ và Duyên hải miền Trung', emoji:'📜', capital:'Hà Tĩnh', area_km2:5994,
    highlight:'Quê hương đại thi hào Nguyễn Du – tác giả Truyện Kiều. (Giữ nguyên, không sáp nhập)',
    quiz:[
      { q:'Đại thi hào Nguyễn Du quê ở tỉnh nào?', choices:['Nghệ An','Hà Tĩnh','Thanh Hóa','Quảng Trị'], answer:1 },
      { q:'Tác phẩm bất hủ của Nguyễn Du tên là?', choices:['Chinh phụ ngâm','Truyện Kiều','Cung oán ngâm','Lục Vân Tiên'], answer:1 },
    ]},
  { id:'quang-tri', name:'Quảng Trị', region:'Bắc Trung Bộ và Duyên hải miền Trung', emoji:'🕳️', capital:'Đồng Hới', area_km2:12621,
    highlight:'Hợp nhất Quảng Trị – Quảng Bình: hang Sơn Đoòng lớn nhất thế giới (Phong Nha-Kẻ Bàng), thành cổ Quảng Trị và cầu Hiền Lương.',
    quiz:[
      { q:'Hang Sơn Đoòng (Quảng Bình cũ) lớn nhất thế giới nay thuộc tỉnh nào?', choices:['Quảng Trị','Hà Tĩnh','Huế','Quảng Ngãi'], answer:0 },
      { q:'Trung tâm hành chính tỉnh Quảng Trị mới đặt tại thành phố nào?', choices:['Đông Hà','Đồng Hới','Vinh','Huế'], answer:1 },
    ]},
  { id:'hue', name:'Huế', region:'Bắc Trung Bộ và Duyên hải miền Trung', emoji:'👘', capital:'Huế', area_km2:5026,
    highlight:'Cố đô Huế – kinh thành nhà Nguyễn, áo dài, ca Huế trên sông Hương. Nay là thành phố trực thuộc Trung ương.',
    quiz:[
      { q:'Huế từng là kinh đô của triều đại nào?', choices:['Lý','Trần','Nguyễn','Lê'], answer:2 },
      { q:'Sông nào chảy qua thành phố Huế?', choices:['Sông Hương','Sông Hàn','Sông Thu Bồn','Sông Cái'], answer:0 },
    ]},
  { id:'da-nang', name:'Đà Nẵng', region:'Bắc Trung Bộ và Duyên hải miền Trung', emoji:'🌉', capital:'Đà Nẵng', area_km2:11723,
    highlight:'Hợp nhất Đà Nẵng – Quảng Nam: cầu Rồng, Bà Nà Hills, biển Mỹ Khê cùng phố cổ Hội An và thánh địa Mỹ Sơn (di sản UNESCO).',
    quiz:[
      { q:'Phố cổ Hội An (Quảng Nam cũ) nay thuộc thành phố nào?', choices:['Huế','Đà Nẵng','Quảng Ngãi','Quy Nhơn'], answer:1 },
      { q:'Cây cầu nào ở Đà Nẵng phun lửa, phun nước cuối tuần?', choices:['Cầu Vàng','Cầu Rồng','Cầu Sông Hàn','Cầu Trần Thị Lý'], answer:1 },
    ]},
  { id:'quang-ngai', name:'Quảng Ngãi', region:'Bắc Trung Bộ và Duyên hải miền Trung', emoji:'🌊', capital:'Quảng Ngãi', area_km2:14845,
    highlight:'Hợp nhất Quảng Ngãi – Kon Tum: đảo tỏi Lý Sơn và ngã ba Đông Dương, nhà rông Bana – tỉnh trải dài từ biển lên Tây Nguyên.',
    quiz:[
      { q:'Đảo "vương quốc tỏi" của Quảng Ngãi tên là?', choices:['Lý Sơn','Phú Quý','Cù Lao Chàm','Cồn Cỏ'], answer:0 },
      { q:'Ngã ba Đông Dương (Kon Tum cũ) – nay thuộc Quảng Ngãi – giáp 3 nước nào?', choices:['VN-Lào-Trung Quốc','VN-Lào-Campuchia','VN-Campuchia-Thái Lan','VN-Lào-Thái Lan'], answer:1 },
    ]},
  { id:'gia-lai', name:'Gia Lai', region:'Bắc Trung Bộ và Duyên hải miền Trung', emoji:'🥋', capital:'Quy Nhơn', area_km2:21577,
    highlight:'Hợp nhất Gia Lai – Bình Định: Biển Hồ Pleiku "đôi mắt" Tây Nguyên và đất võ Tây Sơn, biển Quy Nhơn – trung tâm đặt tại Quy Nhơn.',
    quiz:[
      { q:'Trung tâm hành chính tỉnh Gia Lai mới đặt tại thành phố ven biển nào?', choices:['Pleiku','Quy Nhơn','Nha Trang','Tuy Hòa'], answer:1 },
      { q:'Vua Quang Trung – người đất võ Tây Sơn (Bình Định cũ) – nay quê thuộc tỉnh nào?', choices:['Gia Lai','Đắk Lắk','Khánh Hòa','Quảng Ngãi'], answer:0 },
    ]},
  { id:'khanh-hoa', name:'Khánh Hòa', region:'Bắc Trung Bộ và Duyên hải miền Trung', emoji:'🏝️', capital:'Nha Trang', area_km2:8575,
    highlight:'Hợp nhất Khánh Hòa – Ninh Thuận: vịnh Nha Trang đẹp nhất thế giới cùng miền nắng gió nho, táo và vịnh Vĩnh Hy.',
    quiz:[
      { q:'Vịnh biển nào ở Khánh Hòa nổi tiếng thế giới?', choices:['Hạ Long','Lăng Cô','Nha Trang','Vân Phong'], answer:2 },
      { q:'Vùng trồng nho, táo nổi tiếng (Ninh Thuận cũ) nay thuộc tỉnh nào?', choices:['Khánh Hòa','Lâm Đồng','Đắk Lắk','Gia Lai'], answer:0 },
    ]},

  // ============== TÂY NGUYÊN (2) ==============
  { id:'dak-lak', name:'Đắk Lắk', region:'Tây Nguyên', emoji:'☕', capital:'Buôn Ma Thuột', area_km2:18056,
    highlight:'Hợp nhất Đắk Lắk – Phú Yên: thủ phủ cà phê Buôn Ma Thuột, voi Bản Đôn cùng Gành Đá Đĩa, "xứ hoa vàng cỏ xanh" ven biển.',
    quiz:[
      { q:'Đắk Lắk nổi tiếng là thủ phủ của loại nông sản nào?', choices:['Chè','Cà phê','Hồ tiêu','Cao su'], answer:1 },
      { q:'Gành Đá Đĩa, "xứ hoa vàng cỏ xanh" (Phú Yên cũ) nay thuộc tỉnh nào?', choices:['Đắk Lắk','Gia Lai','Khánh Hòa','Lâm Đồng'], answer:0 },
    ]},
  { id:'lam-dong', name:'Lâm Đồng', region:'Tây Nguyên', emoji:'🌲', capital:'Đà Lạt', area_km2:24111,
    highlight:'Hợp nhất Lâm Đồng – Đắk Nông – Bình Thuận: Đà Lạt ngàn hoa, công viên địa chất núi lửa Đắk Nông và đồi cát Mũi Né – tỉnh rộng nhất nước.',
    quiz:[
      { q:'Đà Lạt được mệnh danh là thành phố gì?', choices:['Thành phố biển','Thành phố ngàn hoa','Thành phố cảng','Thành phố vàng'], answer:1 },
      { q:'Sau sáp nhập, tỉnh nào có diện tích lớn nhất Việt Nam?', choices:['Lâm Đồng','Gia Lai','Nghệ An','Đắk Lắk'], answer:0 },
    ]},

  // ============== ĐÔNG NAM BỘ (3) ==============
  { id:'tp-hcm', name:'TP. Hồ Chí Minh', region:'Đông Nam Bộ', emoji:'🌆', capital:'TP. Hồ Chí Minh', area_km2:6771,
    highlight:'Hợp nhất TP.HCM – Bình Dương – Bà Rịa-Vũng Tàu: đô thị lớn nhất nước, thủ phủ công nghiệp và biển Vũng Tàu, Côn Đảo.',
    quiz:[
      { q:'Sau sáp nhập 2025, Bình Dương và Bà Rịa-Vũng Tàu nhập vào đâu?', choices:['Đồng Nai','TP. Hồ Chí Minh','Tây Ninh','Cần Thơ'], answer:1 },
      { q:'Bãi biển, quần đảo nghỉ dưỡng (Bà Rịa-Vũng Tàu cũ) nay thuộc TP.HCM gồm Vũng Tàu và đảo nào?', choices:['Phú Quốc','Côn Đảo','Lý Sơn','Cát Bà'], answer:1 },
    ]},
  { id:'dong-nai', name:'Đồng Nai', region:'Đông Nam Bộ', emoji:'🦏', capital:'Biên Hòa', area_km2:12739,
    highlight:'Hợp nhất Đồng Nai – Bình Phước: vườn quốc gia Cát Tiên rừng nguyên sinh và "thủ phủ điều" Việt Nam.',
    quiz:[
      { q:'Vườn quốc gia rừng nguyên sinh nổi tiếng nhất Đồng Nai?', choices:['Cát Tiên','Cúc Phương','Tràm Chim','U Minh'], answer:0 },
      { q:'"Thủ phủ hạt điều" (Bình Phước cũ) nay thuộc tỉnh nào?', choices:['Đồng Nai','Tây Ninh','Lâm Đồng','TP.HCM'], answer:0 },
    ]},
  { id:'tay-ninh', name:'Tây Ninh', region:'Đông Nam Bộ', emoji:'⛰️', capital:'Tân An', area_km2:8534,
    highlight:'Hợp nhất Tây Ninh – Long An: núi Bà Đen "nóc nhà Nam Bộ", Tòa Thánh Cao Đài và cửa ngõ miền Tây – trung tâm đặt tại Tân An.',
    quiz:[
      { q:'Ngọn núi cao nhất Nam Bộ (núi Bà Đen) thuộc tỉnh nào?', choices:['An Giang','Tây Ninh','Đồng Nai','Lâm Đồng'], answer:1 },
      { q:'Trung tâm hành chính tỉnh Tây Ninh mới đặt tại thành phố nào (Long An cũ)?', choices:['Tây Ninh','Tân An','Bến Lức','Trảng Bàng'], answer:1 },
    ]},

  // ============== ĐỒNG BẰNG SÔNG CỬU LONG (5) ==============
  { id:'can-tho', name:'Cần Thơ', region:'Đồng bằng sông Cửu Long', emoji:'🛥️', capital:'Cần Thơ', area_km2:6342,
    highlight:'Hợp nhất Cần Thơ – Sóc Trăng – Hậu Giang: "Tây Đô" chợ nổi Cái Răng, bến Ninh Kiều cùng bánh pía, lễ đua ghe Ngo của đồng bào Khmer.',
    quiz:[
      { q:'Chợ nổi nổi tiếng nhất Cần Thơ tên là?', choices:['Cái Bè','Cái Răng','Phụng Hiệp','Long Xuyên'], answer:1 },
      { q:'Lễ hội đua ghe Ngo, bánh pía (Sóc Trăng cũ) nay thuộc thành phố nào?', choices:['Cần Thơ','Vĩnh Long','Cà Mau','An Giang'], answer:0 },
    ]},
  { id:'vinh-long', name:'Vĩnh Long', region:'Đồng bằng sông Cửu Long', emoji:'🥥', capital:'Vĩnh Long', area_km2:6243,
    highlight:'Hợp nhất Vĩnh Long – Bến Tre – Trà Vinh: vương quốc gốm đỏ Mang Thít, xứ dừa Bến Tre và chùa Khmer cổ Trà Vinh.',
    quiz:[
      { q:'"Xứ dừa" với kẹo dừa nổi tiếng (Bến Tre cũ) nay thuộc tỉnh nào?', choices:['Vĩnh Long','Đồng Tháp','Cần Thơ','An Giang'], answer:0 },
      { q:'Tỉnh Vĩnh Long mới hợp nhất từ Vĩnh Long, Bến Tre và tỉnh nào?', choices:['Trà Vinh','Sóc Trăng','Tiền Giang','Hậu Giang'], answer:0 },
    ]},
  { id:'dong-thap', name:'Đồng Tháp', region:'Đồng bằng sông Cửu Long', emoji:'🌸', capital:'Mỹ Tho', area_km2:5895,
    highlight:'Hợp nhất Đồng Tháp – Tiền Giang: Đất Sen Hồng, vườn quốc gia Tràm Chim cùng chợ nổi Cái Bè, hủ tiếu Mỹ Tho – trung tâm đặt tại Mỹ Tho.',
    quiz:[
      { q:'Đồng Tháp được gọi là vùng đất gì?', choices:['Đất Phật','Đất Sen Hồng','Đất Mũi','Đất Đỏ'], answer:1 },
      { q:'Trung tâm hành chính tỉnh Đồng Tháp mới đặt tại thành phố nào (Tiền Giang cũ)?', choices:['Cao Lãnh','Mỹ Tho','Sa Đéc','Hồng Ngự'], answer:1 },
    ]},
  { id:'an-giang', name:'An Giang', region:'Đồng bằng sông Cửu Long', emoji:'🏝️', capital:'Rạch Giá', area_km2:9888,
    highlight:'Hợp nhất An Giang – Kiên Giang: núi Cấm "thiên cẩm sơn", rừng tràm Trà Sư và đảo ngọc Phú Quốc – trung tâm đặt tại Rạch Giá.',
    quiz:[
      { q:'Đảo ngọc Phú Quốc (Kiên Giang cũ) nay thuộc tỉnh nào?', choices:['An Giang','Cà Mau','Cần Thơ','Vĩnh Long'], answer:0 },
      { q:'Trung tâm hành chính tỉnh An Giang mới đặt tại thành phố nào (Kiên Giang cũ)?', choices:['Long Xuyên','Châu Đốc','Rạch Giá','Hà Tiên'], answer:2 },
    ]},
  { id:'ca-mau', name:'Cà Mau', region:'Đồng bằng sông Cửu Long', emoji:'🦀', capital:'Cà Mau', area_km2:7964,
    highlight:'Hợp nhất Cà Mau – Bạc Liêu: Mũi Cà Mau cực Nam Tổ quốc, rừng đước U Minh cùng đờn ca tài tử và điện gió ven biển Bạc Liêu.',
    quiz:[
      { q:'Cà Mau là điểm cực nào của Việt Nam?', choices:['Cực Bắc','Cực Nam','Cực Đông','Cực Tây'], answer:1 },
      { q:'Đờn ca tài tử, nhà Công tử (Bạc Liêu cũ) nay thuộc tỉnh nào?', choices:['Cà Mau','An Giang','Cần Thơ','Vĩnh Long'], answer:0 },
    ]},
];
