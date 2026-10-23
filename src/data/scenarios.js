// AI Interactive SimLab - 6 Interdisciplinary Fields
// Scenarios derived from scientific cases, international arbitral awards, and viral business social media crises.

export const SCENARIOS = [
  // 1. LUẬT (LAW & ARBITRATION)
  {
    id: 'shanghai-arbitration',
    field: 'law',
    fieldName: 'Luật Kinh Tế & Trọng Tài',
    fieldColor: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    title: 'Phiên Trọng Tài: Tranh Chấp Hợp Đồng Bán Dẫn & Biến Cố Biển Đỏ',
    subtitle: 'Hòa giải tranh chấp 1.2M USD giữa Công ty Công nghệ Việt Nam & Đối tác Thượng Hải (CISG 1980)',
    level: 'Nâng cao (Advanced)',
    duration: '15 - 20 phút',
    languages: ['Tiếng Trung (商务中文)', 'Tiếng Anh', 'Tiếng Việt'],
    targetAudience: 'Sinh viên Luật Kinh tế, Ngôn ngữ Trung & Trọng tài Quốc tế',
    tags: ['CISG Điều 79', 'SHIAC', 'Bất Khả Kháng', 'Phạt Vi Phạm'],
    badge: 'Hồ Sơ Trọng Tài Tiêu Biểu',
    persona: {
      name: 'Trần Hiểu Đông (Chen Xiao Dong - 陈晓东)',
      title: 'Giám đốc Điều hành & Cố vấn Pháp lý cấp cao, Tập đoàn HuaXin Tech (Thượng Hải)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      personality: 'Cương quyết, sắc bén, am hiểu luật CISG, đặt áp lực tài chính và uy tín hợp đồng lên hàng đầu.',
      initialStance: 'Quyết liệt (Aggressive)',
      languageCode: 'zh-CN',
      audioVoicePrefix: 'zh',
      initialMessage: '各位代表，好。我们华新科技等待贵司的信用证修改和逾期赔偿方案已经整整三周了！合同第12条明确规定：逾期付款导致排产停滞，需按合同总额15%支付违约金，并赔偿仓储损失共计120万美元。如果今天你们依然拿不出实质性的解决方案，我们法务团队将在明天正式向上海国际仲裁中心（SHIAC）提起仲裁程序！',
      initialMessageVi: 'Chào các vị đại diện. HuaXin Tech chúng tôi đã đợi phương án sửa L/C và bồi thường chậm hạn của quý công ty suốt 3 tuần qua! Điều 12 hợp đồng nêu rõ: chậm thanh toán làm ngưng trệ sản xuất phải chịu phạt 15% và bồi thường tổn thất lưu kho tổng cộng 1.2 triệu USD. Nếu hôm nay các bạn vẫn không đưa ra giải pháp thực chất, đội ngũ pháp lý của chúng tôi sẽ nộp đơn lên SHIAC ngay ngày mai!',
    },
    context: {
      overview: 'Công ty công nghệ Việt Nam ký hợp đồng mua 200.000 linh kiện bán dẫn trị giá 8 triệu USD từ HuaXin Tech (Thượng Hải). Tuyến logistics Biển Đỏ đứt gãy làm cước tàu tăng 280%, ngân hàng chậm duyệt bảo lãnh L/C. Đối tác đòi phạt 1.2M USD.',
      studentRole: 'Trưởng ban Đàm phán Liên ngành (Đại diện Công ty Việt Nam), phối hợp Luật sư nội bộ và Chuyên viên Ngôn ngữ.',
      coreObjectives: [
        'Hạ mức bồi thường từ 1.2 triệu USD xuống dưới 300.000 USD thực tế kho bãi.',
        'Vận dụng Điều 79 CISG (Bất khả kháng) để miễn trừ 100% khoản phạt vi phạm 15%.',
        'Sử dụng kính ngữ thương mại tiếng Trung để giữ vững quan hệ đối tác chiến lược.',
        'Đề xuất lộ trình thanh toán 3 đợt để bảo toàn thanh khoản.'
      ]
    },
    dossier: [
      {
        title: 'Hợp đồng Ngoại thương số HX-VN-2024 (§ Trích yếu)',
        type: 'contract',
        content: `• ĐIỀU 8 (FORCE MAJEURE - BẤT KHẢ KHÁNG):
"Các bên được miễn trừ trách nhiệm bồi thường nếu chứng minh được việc không thực hiện nghĩa vụ do trở ngại khách quan nằm ngoài tầm kiểm soát hợp lý (theo Điều 79 Công ước Viên CISG 1980)."

• ĐIỀU 12 (PHẠT VI PHẠM & BỒI THƯỜNG THIỆT HẠI):
"Bên vi phạm thời hạn mở L/C quá 14 ngày làm việc phải chịu phạt vi phạm 8% giá trị lô hàng và bồi thường thiệt hại thực tế phát sinh có hóa đơn kiểm toán."

• ĐIỀU 14 (TRỌNG TÀI ÁP DỤNG):
"Giải quyết tại Trung tâm Trọng tài Quốc tế Thượng Hải (SHIAC). Luật áp dụng: CISG 1980 & Incoterms 2020."`
      },
      {
        title: 'Báo cáo Kiểm toán Dòng tiền Quý 4',
        type: 'finance',
        content: `• Quỹ tiền mặt khả dụng: 650.000 USD.
• Mức chịu đựng tối ưu: Bồi thường kho bãi thực tế có hóa đơn kiểm toán 200.000 - 250.000 USD. Không chấp nhận phạt phạt chế tài 15% (trên 1 triệu USD).`
      }
    ],
    tacticalPrompts: [
      {
        category: 'law',
        label: '[Luật] Viện dẫn Điều 79 CISG về trở ngại khách quan hàng hải',
        textVi: 'Căn cứ Điều 79 Công ước CISG 1980, sự cố hàng hải Biển Đỏ là biến cố nằm ngoài khả năng lường trước của hai bên. Chúng tôi đề nghị miễn trừ hoàn toàn khoản phạt 15% và chỉ đối soát chi phí kho bãi thực tế có chứng từ.',
        textZh: '依据CISG第79条关于不可抗力免责之规定，红海物流事件属于无法预见的客观障碍。我方主张免除15%惩罚性违约金，仅就经审计的实际仓储损失进行核算。',
        scoreImpact: { law: 25, lang: 18, mgmt: 15, econ: 20 },
        nextStance: 'Cân nhắc (Evaluating)'
      }
    ]
  },

  // 2. KINH TẾ (ECONOMICS & MACRO FINANCE)
  {
    id: 'macro-currency-crisis',
    field: 'economics',
    fieldName: 'Kinh Tế & Tài Chính Vĩ Mô',
    fieldColor: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    title: 'Khủng Hoảng Tỷ Giá & Đứt Gãy Chuỗi Cung Ứng Năng Lượng EU',
    subtitle: 'Tái cấu trúc hợp đồng xuất khẩu gỗ sinh khối 15 triệu EUR trước biến động tỷ giá và lạm phát châu Âu',
    level: 'Chuyên gia (Expert)',
    duration: '15 - 20 phút',
    languages: ['Tiếng Anh', 'Tiếng Việt'],
    targetAudience: 'Sinh viên Kinh tế Quốc tế, Tài chính - Ngân hàng, Phân tích Kinh tế Vi mô & Vĩ mô',
    tags: ['Tỷ giá hối đoái', 'Hedging', 'Chi phí cận biên', 'Lạm phát EU'],
    badge: 'Tài Liệu Nghiên Cứu Vĩ Mô',
    persona: {
      name: 'Dr. Henrik Lindqvist',
      title: 'Giám đốc Mua hàng Năng lượng Tái tạo Toàn cầu, Nordic EcoPower (Stockholm / Hamburg)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
      personality: 'Nhà kinh tế học thực dụng, tính toán chi ly từng cent trên megawatt-giờ, gây sức ép bằng các chỉ số lạm phát.',
      initialStance: 'Áp lực tài chính cao',
      languageCode: 'en-US',
      audioVoicePrefix: 'en',
      initialMessage: 'Gentlemen, EUR/USD volatility and spot freight indices have destroyed our projected margins! If your Vietnamese consortium cannot offer a 14% price concession per metric ton under CIF Rotterdam, Nordic EcoPower will terminate the 3-year procurement agreement and hedge our supply in Canada.',
      initialMessageVi: 'Thưa quý vị, biến động tỷ giá EUR/USD và chỉ số cước biển giao ngay đã xóa sổ toàn bộ biên lợi nhuận của chúng tôi! Nếu liên minh Việt Nam không thể giảm 14% đơn giá mỗi tấn theo điều kiện CIF Rotterdam, Nordic EcoPower sẽ hủy hợp đồng 3 năm và chuyển sang mua bù từ Canada.',
    },
    context: {
      overview: 'Doanh nghiệp xuất khẩu viên nén gỗ Việt Nam đứng trước nguy cơ mất hợp đồng 15 triệu EUR khi đối tác Bắc Âu đòi hạ giá 14% do đồng Euro mất giá và lạm phát chi phí lưu kho.',
      studentRole: 'Giám đốc Kinh tế & Chiến lược Định giá Quốc tế (Chief Economist).',
      coreObjectives: [
        'Giữ mức điều chỉnh giá không vượt quá 3.5% bằng cách chia sẻ công cụ phòng ngừa rủi ro tỷ giá (Currency Hedging).',
        'Chứng minh lợi thế chi phí sản xuất cận biên tại Đông Nam Á so với nhà cung cấp Canada.',
        'Đề xuất thanh toán bằng rổ tiền tệ song song để bảo toàn giá trị thặng dư.'
      ]
    },
    dossier: [
      {
        title: 'Bảng Phân Tích Độ Nhạy Tỷ Giá & Chi Phí Sản Xuất',
        type: 'finance',
        content: `• Biên lợi nhuận ròng hiện tại: 8.2%. Nếu giảm giá 14%, doanh nghiệp Việt Nam sẽ lỗ 5.8% trên mỗi chuyến tàu (khoảng 350.000 EUR/tháng).
• Điểm hòa vốn (Break-even): Giảm tối đa 3.8% với điều kiện đối tác thanh toán trước 50% tiền cọc bằng USD.`
      }
    ],
    tacticalPrompts: [
      {
        category: 'econ',
        label: '[Kinh tế] Phân tích biên lợi nhuận & Cơ chế chia sẻ rủi ro tỷ giá (Band Corridor)',
        textVi: 'Nếu giảm 14%, chuỗi sản xuất sẽ chịu lỗ âm vốn. Chúng tôi đề xuất cơ chế trượt giá có kiểm soát (Corridor 3% - 5%) gắn với chỉ số cước Platts và đồng bảo lãnh USD để cả hai bên cùng chia sẻ rủi ro vĩ mô.',
        textZh: 'A 14% discount will push production below margin. We propose an index-linked hedging corridor (3-5%) pegged to Platts freight and currency collars to preserve mutual viability.',
        scoreImpact: { law: 18, lang: 22, mgmt: 20, econ: 28 },
        nextStance: 'Cân nhắc (Evaluating)'
      }
    ]
  },

  // 3. QUẢN TRỊ (MANAGEMENT & CRISIS PR)
  {
    id: 'management-pr-scandal',
    field: 'mgmt',
    fieldName: 'Quản Trị Doanh Nghiệp & Khủng Hoảng',
    fieldColor: '#94A3B8',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    title: 'Xử Lý Rò Rỉ Email Sa Thải 1.500 Nhân Sự & Khủng Hoảng Mạng Xã Hội',
    subtitle: 'Đối chất giữa Ban Điều Hành Tập Đoàn & Đại diện Công Đoàn / Ký giả Điều tra (Scandal Threads/LinkedIn)',
    level: 'Trung cấp (Intermediate)',
    duration: '10 - 15 phút',
    languages: ['Tiếng Anh', 'Tiếng Việt'],
    targetAudience: 'Sinh viên Quản trị Kinh doanh, Quản trị Nhân sự & Truyền thông Doanh nghiệp',
    tags: ['Khủng hoảng PR', 'Threads / LinkedIn', 'Văn hóa doanh nghiệp', 'Bảo toàn thương hiệu'],
    badge: 'Khủng Hoảng Mạng Xã Hội Thực Tế',
    persona: {
      name: 'Victoria Hastings',
      title: 'Đại diện Liên Minh Quyền Người Lao Động & Biên tập viên Tạp chí Nhân Sự Số (Singapore)',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      personality: 'Truy vấn đanh thép, dẫn dắt các bình luận chỉ trích gay gắt trên mạng xã hội, đòi hỏi câu trả lời nhân văn và bồi thường.',
      initialStance: 'Bức xúc & Truy vấn gay gắt',
      languageCode: 'en-US',
      audioVoicePrefix: 'en',
      initialMessage: 'Your internal email telling 1,500 employees their contracts are terminated via an automated bot was leaked on Threads with 4 million views! Former staff are posting internal chats proving toxic culture. Are you issuing a public apology with golden handshakes, or do you expect a nationwide boycott tomorrow morning?',
      initialMessageVi: 'Email nội bộ sa thải 1.500 nhân viên bằng bot tự động của các vị vừa bị phát tán lên Threads với hơn 4 triệu lượt xem! Nhân sự cũ đang đăng hàng loạt tin nhắn chứng minh văn hóa công ty độc hại. Các vị có công khai xin lỗi và chi trả gói đền bù xứng đáng không, hay chờ đợi một làn sóng tẩy chay vào sáng mai?',
    },
    context: {
      overview: 'Công ty công nghệ tái cấu trúc, gửi email thông báo cắt giảm hàng loạt nhân sự vào lúc nửa đêm. Vụ việc bị leak lên mạng xã hội, các KOLs và cựu nhân viên tố cáo lãnh đạo vô cảm, cổ phiếu công ty giảm 9% trong phiên mở cửa.',
      studentRole: 'Giám đốc Điều hành Khủng hoảng (Crisis CEO) phối hợp Giám đốc Nhân sự & Truyền thông.',
      coreObjectives: [
        'Công bố thông điệp xin lỗi chân thành, nhân văn, xoa dịu làn sóng phẫn nộ trên mạng xã hội.',
        'Đưa ra gói hỗ trợ tài chính chuyển tiếp (Outplacement Severance 3 tháng lương + bảo hiểm y tế).',
        'Thiết lập Ban chuyển đổi nội bộ minh bạch, tái ổn định tinh thần cho nhân viên ở lại.'
      ]
    },
    dossier: [
      {
        title: 'Báo cáo Đo Lường Dư Luận Xã Hội (Social Listening Quý 4)',
        type: 'evidence',
        content: `• Chỉ số cảm xúc (Sentiment): 88% Tiêu cực. Từ khóa nổi bật: "Vô cảm", "Sa thải nửa đêm", "Tẩy chay sản phẩm".
• Ngân sách dự phòng khủng hoảng tối đa: 2.8 triệu USD cho gói trợ cấp thôi việc nâng cao.`
      }
    ],
    tacticalPrompts: [
      {
        category: 'mgmt',
        label: '[Quản trị] Nhận lỗi cá nhân từ CEO & Công bố gói chuyển đổi nhân văn 3 tháng lương',
        textVi: 'Chúng tôi nhận hoàn toàn trách nhiệm về phương thức giao tiếp thiếu nhân văn vừa qua. Ban điều hành sẽ ban hành thông điệp xin lỗi công khai, cung cấp gói hỗ trợ 3 tháng lương nguyên vẹn và kết nối giới thiệu việc làm cho toàn bộ nhân sự bị ảnh hưởng.',
        textZh: 'We take full personal accountability for this communication misstep. I am issuing an immediate public apology and guaranteeing a 3-month transition package with health benefits and career placement.',
        scoreImpact: { law: 16, lang: 24, mgmt: 30, econ: 15 },
        nextStance: 'Hạ nhiệt (De-escalating)'
      }
    ]
  },

  // 4. KINH DOANH (BUSINESS & E-COMMERCE TIKTOK SHOP)
  {
    id: 'business-tiktok-price-war',
    field: 'business',
    fieldName: 'Kinh Doanh & Thương Mại Điện Tử',
    fieldColor: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    title: 'Đại Chiến Phá Giá Livestream TikTok Shop & Khủng Hoảng KOLs Bóc Phốt',
    subtitle: 'Giải quyết xung đột kênh phân phối truyền thống vs. Kênh Livestream Mega-Live phá giá 40%',
    level: 'Thực chiến GenZ',
    duration: '10 - 15 phút',
    languages: ['Tiếng Việt', 'Tiếng Anh'],
    targetAudience: 'Sinh viên Quản trị Kinh doanh, Marketing Số, Thương mại Điện tử & Bán lẻ',
    tags: ['TikTok Shop', 'Chiến tranh giá', 'Mega Live', 'Bảo vệ đại lý'],
    badge: 'Tình Huống GenZ Thời Thượng',
    persona: {
      name: 'Nguyễn Đăng Khôi (Top Creator & MCN Agency Director)',
      title: 'Giám Đốc Mạng Lưới Đa Kênh (MCN) & Đại diện KOL 6 triệu Followers',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      personality: 'Phong cách năng động, đòi hỏi deal độc quyền giảm giá sốc, dọa cắt đứt hợp tác nếu nhãn hàng phạt vì bán phá giá.',
      initialStance: 'Căng thẳng & Tự tin vị thế',
      languageCode: 'vi-VN',
      audioVoicePrefix: 'vi',
      initialMessage: 'Bên anh vừa chốt 12.000 đơn trong phiên Mega-Live tối qua, mang về cho nhãn hàng gần 5 tỷ doanh số! Giờ các đại lý truyền thống của các em kêu ca vì giá rẻ hơn 35%, rồi các em đòi giữ lại 800 triệu tiền hoa hồng affiliate của bên anh à? Các em muốn giữ 300 cửa hàng truyền thống ế ẩm hay muốn nắm lấy kênh bán hàng triệu đô của GenZ?',
      initialMessageVi: 'Bên anh vừa chốt 12.000 đơn trong phiên Mega-Live tối qua, mang về cho nhãn hàng gần 5 tỷ doanh số! Giờ các đại lý truyền thống của các em kêu ca vì giá rẻ hơn 35%, rồi các em đòi giữ lại 800 triệu tiền hoa hồng affiliate của bên anh à? Các em muốn giữ 300 cửa hàng truyền thống ế ẩm hay muốn nắm lấy kênh bán hàng triệu đô của GenZ?',
    },
    context: {
      overview: 'Nhãn hàng mỹ phẩm hợp tác với Top TikToker tổ chức phiên Mega-Live. Do muốn lập kỷ lục doanh số, KOL đã tự ý cộng dồn voucher trợ giá, bán rẻ hơn giá niêm yết của 300 đại lý phân phối offline, khiến các đại lý đồng loạt đình công trả hàng.',
      studentRole: 'Giám đốc Kinh doanh (Chief Commercial Officer - CCO).',
      coreObjectives: [
        'Hòa giải xung đột giữa kênh Digital Livestream và hệ thống đại lý truyền thống (Omni-channel Harmony).',
        'Cơ cấu lại cơ chế sản phẩm: phân tách phiên bản dung tích độc quyền online và combo quà tặng thay vì giảm giá sốc trực tiếp.',
        'Giữ vững quan hệ hợp tác với MCN mà không để vỡ trận chính sách giá niêm yết.'
      ]
    },
    dossier: [
      {
        title: 'Hợp Đồng Hợp Tác Quảng Bá & Cam Kết Duy Trì Giá MAP (Minimum Advertised Price)',
        type: 'contract',
        content: `• ĐIỀU 5 (GIÁ BÁN TỐI THIỂU - MAP):
"KOL không được công bố giá bán thấp hơn 15% so với giá niêm yết tại quầy đại lý trừ khi có văn bản phê duyệt từ nhãn hàng."`
      }
    ],
    tacticalPrompts: [
      {
        category: 'biz',
        label: '[Kinh doanh] Phân tách SKU độc quyền online & Tặng combo trải nghiệm thay vì phá giá niêm yết',
        textVi: 'Chúng tôi ghi nhận kỷ lục doanh số 5 tỷ, nhưng để bảo vệ thương hiệu bền vững, giải pháp tối ưu là chuyển sang SKU dung tích riêng biệt và bổ sung quà tặng giá trị cao cho phiên live sau, giữ nguyên mức giá sàn để đại lý offline yên tâm đồng hành.',
        textZh: 'We recognize the record 5B revenue. However, to safeguard brand equity, we will offer exclusive online bundles with gift vouchers rather than discounting the core offline retail price.',
        scoreImpact: { law: 15, lang: 20, mgmt: 24, econ: 26 },
        nextStance: 'Đồng thuận có điều kiện (Conditional)'
      }
    ]
  },

  // 5. NGÔN NGỮ (LANGUAGES & DIPLOMATIC TRANSLATION)
  {
    id: 'language-customs-nuance',
    field: 'languages',
    fieldName: 'Ngôn Ngữ & Ngoại Giao Thương Mại',
    fieldColor: '#10B981',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    title: 'Sự Cố Sai Lệch Bản Dịch Thuật Ngữ Hợp Đồng Song Phương Trung - Việt',
    subtitle: 'Tranh cãi nghĩa vụ giao hàng "Tại Xưởng" (EXW) hay "Tại Cảng Biên Giới" (CPT Bằng Tường)',
    level: 'Chuyên sâu Song ngữ',
    duration: '10 - 15 phút',
    languages: ['Tiếng Trung (商务汉语)', 'Tiếng Việt'],
    targetAudience: 'Sinh viên Ngôn ngữ Trung, Biên phiên dịch Thương mại & Luật Quốc tế',
    tags: ['Dịch thuật hợp đồng', 'Thuật ngữ Incoterms', 'Kính ngữ tiếng Trung', 'Ngoại giao'],
    badge: 'Thực Nghiệm Ngôn Ngữ Chuyên Sâu',
    persona: {
      name: 'Vương Vĩnh Cường (Wang Yong Qiang - 王永强)',
      title: 'Trưởng ban Thu mua & Logistics, Tập đoàn Nông sản Quảng Tây (Nam Ninh)',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
      personality: 'Cẩn trọng câu chữ, vin vào bản thảo tiếng Trung để thoái thác chi phí thông quan tại cửa khẩu.',
      initialStance: 'Tranh chấp ngữ nghĩa',
      languageCode: 'zh-CN',
      audioVoicePrefix: 'zh',
      initialMessage: '你们的合同翻译完全是一笔糊涂账！在中文版合同第6条，白纸黑字写着“中方口岸交货”，这就意味着越方必须负责将80车鲜果运过友谊关并完成中方报关！现在货物堵在凭祥口岸产生每天数万块的冷柜费，贵方翻译团队必须对此负全部法律责任！',
      initialMessageVi: 'Bản dịch hợp đồng của các bạn hoàn toàn mập mờ! Trong bản hợp đồng tiếng Trung Điều 6, ghi rõ ràng "Giao hàng tại cửa khẩu phía Trung Quốc", điều đó có nghĩa là bên Việt Nam phải chịu trách nhiệm đưa 80 xe hoa quả qua Hữu Nghị Quan và làm thủ tục thông quan phía Trung Quốc! Giờ hàng kẹt ở Bằng Tường phát sinh hàng vạn tiền phí container lạnh mỗi ngày, đội ngũ biên dịch của các bạn phải chịu toàn bộ trách nhiệm!',
    },
    context: {
      overview: 'Hợp đồng xuất khẩu thanh long và mít sấy trị giá 3.5 triệu USD ký kết song ngữ. Do sơ suất biên dịch giữa thuật ngữ "Giao tại cửa khẩu bên bán" (DAF) và "Giao tại bãi hàng bên mua", hai bên đổ lỗi cho nhau về phí thông quan và bãi đỗ xe lạnh.',
      studentRole: 'Chuyên viên Ngôn ngữ & Đàm phán Đối ngoại Song ngữ Trung - Việt.',
      coreObjectives: [
        'Vận dụng điều khoản "Ngôn ngữ gốc ưu tiên" (Governing Language Clause) để giải thích thiện chí.',
        'Sử dụng thuật ngữ tiếng Trung ngoại giao chuẩn xác: 互利共赢 (Cùng có lợi), 厘清责任 (Làm rõ trách nhiệm), 排除歧义 (Loại bỏ mập mờ).',
        'Thống nhất giải pháp chia đôi chi phí lưu bãi tạm thời để kịp thông quan giải phóng 80 xe hàng tươi.'
      ]
    },
    dossier: [
      {
        title: 'Hợp đồng Song ngữ số CN-VN-AGRI (§ Điều khoản ngôn ngữ)',
        type: 'contract',
        content: `• ĐIỀU 18 (NGÔN NGỮ HỢP ĐỒNG):
"Hợp đồng lập bằng tiếng Việt và tiếng Trung. Trường hợp có sự khác biệt về cách hiểu câu chữ, hai bên căn cứ theo bản tiếng Anh chuẩn Incoterms 2020 để giải thích."`
      }
    ],
    tacticalPrompts: [
      {
        category: 'lang',
        label: '[Ngôn ngữ] Viện dẫn Điều khoản Ngôn ngữ đối chiếu Incoterms & Dùng kính ngữ xoa dịu',
        textVi: 'Thưa ông Vương, theo Điều 18 hợp đồng, bản tham chiếu Incoterms tiếng Anh là căn cứ giải thích tối cao. Để tránh hoa quả tươi hư hại, chúng tôi đề xuất trước mắt chia sẻ 50-50 chi phí container lạnh và cùng phối hợp mở luồng xanh thông quan ngay trong chiều nay.',
        textZh: '王总，依据合同第18条，双方应参照Incoterms中英文基准条款释义。当务之急是确保果品新鲜度，我方提议暂按50%共同分担冷柜留置费，并协力启动边境通关绿色通道。',
        scoreImpact: { law: 20, lang: 30, mgmt: 22, econ: 20 },
        nextStance: 'Hòa giải (Conciliatory)'
      }
    ]
  },

  // 6. THƯƠNG MẠI (COMMERCE & PORT LOGISTICS CIF)
  {
    id: 'commerce-cif-logistics',
    field: 'commerce',
    fieldName: 'Thương Mại Quốc Tế & Cảng Biển',
    fieldColor: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    title: 'Vụ Kiện Gian Lận Xuất Xứ Hàng Hóa C/O Form E & Hàng Kẹt Cảng CIF',
    subtitle: 'Giải quyết 45 container hàng dệt may bị Hải quan nghi vấn nguồn gốc xơ sợi tại cảng Thượng Hải',
    level: 'Chuyên sâu Ngoại thương',
    duration: '15 - 20 phút',
    languages: ['Tiếng Anh', 'Tiếng Trung', 'Tiếng Việt'],
    targetAudience: 'Sinh viên Thương mại Quốc tế, Kinh tế Đối ngoại, Logistics & Xuất Nhập Khẩu',
    tags: ['C/O Form E', 'Incoterms CIF', 'Hải quan cảng biển', 'Chống gian lận'],
    badge: 'Án Lệ Xuất Nhập Khẩu',
    persona: {
      name: 'Cao Khải Phong (Gao Kai Feng - 高凯峰)',
      title: 'Giám đốc Chuỗi Cung Ứng & Đại diện Cảng Biển Logistics (Thượng Hải / Ninh Ba)',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
      personality: 'Thực dụng, am hiểu thủ tục hải quan, dọa phạt tiền tỷ vì container lưu bãi quá hạn làm ảnh hưởng cầu cảng.',
      initialStance: 'Cương quyết đòi phạt',
      languageCode: 'zh-CN',
      audioVoicePrefix: 'zh',
      initialMessage: '你们这批45个集装箱的面料，原产地证Form E被上海海关抽查质疑转口欺诈！海关直接扣留，现在堆存费、滞箱费每天产生8万人民币！根据CIF合同，所有清关受阻风险由谁买单？再过3天不解决，海关就要把整批货物没收拍卖！',
      initialMessageVi: 'Lô 45 container vải dệt của các bạn có chứng nhận xuất xứ Form E vừa bị Hải quan Thượng Hải kiểm tra và nghi vấn gian lận xuất xứ chuyển tải! Hải quan đã tạm giữ hàng, phí lưu bãi lưu container mỗi ngày lên tới 8 vạn NDT! Theo hợp đồng CIF, rủi ro thông quan đình trệ này ai chịu? Nếu 3 ngày nữa không giải quyết xong, hải quan sẽ tịch thu bán đấu giá toàn bộ!',
    },
    context: {
      overview: 'Lô hàng xuất khẩu sang Thượng Hải theo giá CIF bị hải quan nghi ngờ gian lận quy tắc xuất xứ xơ sợi. Đối tác đòi hủy hợp đồng và bắt bên xuất khẩu chịu toàn bộ tiền phạt lưu kho bãi hơn 500.000 NDT.',
      studentRole: 'Trưởng phòng Chứng từ & Logistics Ngoại thương.',
      coreObjectives: [
        'Cung cấp bộ hồ sơ truy xuất nguồn gốc nguyên liệu xơ sợi (BOM - Bill of Materials) đã được VCCI chứng thực.',
        'Làm rõ phân định chuyển giao rủi ro theo Incoterms 2020 CIF (rủi ro tổn thất hàng hóa đã chuyển giao khi qua lan can tàu).',
        'Phối hợp với đại lý hải quan địa phương xin cơ chế nộp bảo lãnh tạm giải phóng hàng.'
      ]
    },
    dossier: [
      {
        title: 'Bộ Chứng Từ Xuất Xứ VCCI & Tờ Khai Hải Quan Hàng Hải',
        type: 'evidence',
        content: `• Giấy chứng nhận C/O Form E số VN-CN-24-9981 do Bộ Công Thương Việt Nam ủy quyền VCCI cấp hợp lệ.
• Toàn bộ hóa đơn mua phôi xơ dệt nội địa chứng minh hàm lượng giá trị khu vực (RVC) đạt 42.5% (vượt mức tiêu chuẩn 40%).`
      }
    ],
    tacticalPrompts: [
      {
        category: 'trade',
        label: '[Thương mại] Xuất trình BOM truy xuất nguồn gốc RVC 42.5% & Xin bảo lãnh tạm giải phóng hàng',
        textVi: 'Toàn bộ hồ sơ truy xuất nguồn gốc BOM của chúng tôi đạt 42.5% RVC chuẩn ACFTA. Chúng tôi sẽ chuyển bản công chứng số của VCCI trong vòng 2 giờ và cử đại lý hải quan làm việc với Hải quan Thượng Hải để đặt cọc bảo lãnh thông quan ngay.',
        textZh: '我方原产地溯源BOM表清晰证明RVC达42.5%，完全符合中国-东盟自贸区规则。两小时内我们将提供经认证的电子关单，并协助贵司向海关缴纳保证金先行放行货物。',
        scoreImpact: { law: 24, lang: 22, mgmt: 20, econ: 25 },
        nextStance: 'Hợp tác (Cooperative)'
      }
    ]
  }
];

export const FOUR_PILLARS = [
  {
    key: 'law',
    title: 'Luật Kinh Tế & Trọng Tài',
    subtitle: 'Legal Compliance & Arbitration',
    color: '#00F0FF',
    bg: 'rgba(0, 240, 255, 0.1)',
    borderColor: 'rgba(0, 240, 255, 0.25)',
    icon: 'Scale',
    description: 'Rà soát hợp đồng thương mại quốc tế, viện dẫn Công ước Viên (CISG 1980), Incoterms 2020, điều khoản bất khả kháng và thủ tục trọng tài SHIAC/VIAC.',
    skills: ['Rà soát rủi ro pháp lý hợp đồng', 'Viện dẫn điều khoản miễn trách (CISG Art. 79)', 'Chiến thuật tranh tụng trọng tài thương mại (VIAC/SHIAC/SIAC)']
  },
  {
    key: 'econ',
    title: 'Kinh Tế & Phân Tích Vĩ Mô',
    subtitle: 'Macroeconomics & Margin Optimization',
    color: '#38BDF8',
    bg: 'rgba(56, 189, 248, 0.1)',
    borderColor: 'rgba(56, 189, 248, 0.25)',
    icon: 'TrendingUp',
    description: 'Tối ưu chi phí bồi thường, bảo toàn thanh khoản dòng tiền, phân tích biên lợi nhuận, cấu trúc phương án thanh toán và dự báo rủi ro tỷ giá.',
    skills: ['Tối ưu hóa chi phí bồi thường & phạt vi phạm', 'Cấu trúc dòng tiền thanh toán nhiều kỳ', 'Phân tích điểm hòa vốn và rủi ro tỷ giá']
  },
  {
    key: 'mgmt',
    title: 'Quản Trị Chiến Lược & Khủng Hoảng',
    subtitle: 'Strategic Leadership & Crisis Agility',
    color: '#A855F7',
    bg: 'rgba(168, 85, 247, 0.1)',
    borderColor: 'rgba(168, 85, 247, 0.25)',
    icon: 'ShieldAlert',
    description: 'Điều hành phòng họp khủng hoảng, lãnh đạo đàm phán liên ngành, giải quyết xung đột nội bộ và bảo vệ uy tín thương hiệu trên mạng xã hội.',
    skills: ['Xử lý khủng hoảng truyền thông & mạng xã hội', 'Phối hợp tác chiến đa phòng ban', 'Bảo toàn uy tín và quan hệ đối tác dài hạn']
  },
  {
    key: 'biz',
    title: 'Kinh Doanh & Thương Mại Số',
    subtitle: 'Commercial Agility & E-Commerce',
    color: '#E879F9',
    bg: 'rgba(232, 121, 249, 0.1)',
    borderColor: 'rgba(232, 121, 249, 0.25)',
    icon: 'TrendingUp',
    description: 'Chiến lược cạnh tranh giá, thương thảo chiết khấu kênh phân phối, quản trị xung đột giữa kênh truyền thống và TikTok Shop Mega-Live.',
    skills: ['Quản trị kênh phân phối đa nền tảng', 'Bảo vệ giá sàn niêm yết (MAP)', 'Nghệ thuật đàm phán hợp đồng MCN/KOLs']
  },
  {
    key: 'lang',
    title: 'Ngôn Ngữ & Ngoại Giao',
    subtitle: 'Linguistic & Cross-Cultural Mastery',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'rgba(16, 185, 129, 0.25)',
    icon: 'Languages',
    description: 'Vận dụng ngôn ngữ thương mại chuẩn xác (Tiếng Trung 商务中文, Tiếng Anh đàm phán, Kính ngữ ngoại giao), thấu hiểu văn hóa đàm phán Á - Âu.',
    skills: ['Kính ngữ & Thuật ngữ thương mại quốc tế', 'Xoa dịu mâu thuẫn đa văn hóa', 'Chuyển ngữ linh hoạt trong tình huống căng thẳng']
  },
  {
    key: 'trade',
    title: 'Thương Mại Quốc Tế & Cảng Biển',
    subtitle: 'International Trade & Port Logistics',
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.1)',
    borderColor: 'rgba(245, 158, 11, 0.25)',
    icon: 'Scale',
    description: 'Phân định điểm chuyển giao rủi ro CIF/FOB Incoterms 2020, giải quyết vướng mắc chứng nhận xuất xứ C/O Form E và tranh chấp hàng hải cảng biển.',
    skills: ['Truy xuất nguồn gốc xuất xứ C/O Form E', 'Phân định rủi ro hàng hải Incoterms 2020', 'Kỹ thuật giải phóng hàng lưu kho cảng biển']
  }
];
