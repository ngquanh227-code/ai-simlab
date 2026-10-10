export const SCENARIOS = [
  {
    id: 'shanghai-arbitration',
    title: 'Phiên Trọng Tài Thương Mại: Tranh Chấp Hợp Đồng Cung Ứng Quốc Tế',
    subtitle: 'Đàm phán hòa giải tranh chấp 1.2M USD giữa Công ty Công nghệ Việt Nam & Đối tác Thượng Hải',
    level: 'Nâng cao (Advanced)',
    duration: '15 - 20 phút',
    languages: ['Tiếng Trung Thương Mại (商务中文)', 'Tiếng Anh', 'Tiếng Việt'],
    targetAudience: 'Sinh viên Luật Kinh tế, Ngôn ngữ Trung, Ngoại thương & Quản trị Logistics',
    tags: ['Luật Quốc tế CISG', 'Đàm phán đa ngữ', 'Bảo toàn dòng tiền', 'Xử lý mâu thuẫn'],
    badge: 'Kịch bản Tiêu biểu',
    persona: {
      name: 'Trần Hiểu Đông (Chen Xiao Dong - 陈晓东)',
      title: 'Giám đốc Điều hành & Cố vấn Pháp lý cấp cao, Tập đoàn HuaXin Tech (Thượng Hải)',
      avatar: './assets/persona_chen.jpg',
      personality: 'Cương quyết, sắc bén, am hiểu luật CISG, đặt lợi ích tài chính và cam kết giao hàng lên hàng đầu.',
      initialStance: 'Quyết liệt (Aggressive)',
      languageCode: 'zh-CN',
      audioVoicePrefix: 'zh',
      initialMessage: '各位代表，好。我们华新科技等待贵司的信用证修改和逾期赔偿方案已经整整三周了！合同第12条明确规定：逾期付款导致排产停滞，需按合同总额15%支付违约金，并赔偿仓储损失共计120万美元。如果今天你们依然拿不出实质性的解决方案，我们法务团队将在明天正式向上海国际仲裁中心（SHIAC）提起仲裁程序！',
      initialMessageVi: 'Chào các vị đại diện. HuaXin Tech chúng tôi đã đợi phương án sửa L/C và bồi thường chậm hạn của quý công ty suốt 3 tuần qua! Điều 12 hợp đồng nêu rõ: chậm thanh toán làm ngưng trệ sản xuất phải chịu phạt 15% và bồi thường tổn thất lưu kho tổng cộng 1.2 triệu USD. Nếu hôm nay các bạn vẫn không đưa ra giải pháp thực chất, đội ngũ pháp lý của chúng tôi sẽ nộp đơn lên SHIAC ngay ngày mai!',
    },
    context: {
      overview: 'Công ty công nghệ Việt Nam (bên Mua) ký hợp đồng mua 200.000 linh kiện bán dẫn trị giá 8 triệu USD từ HuaXin Tech (Thượng Hải). Do chuỗi logistics đường biển qua Biển Đỏ gián đoạn và tỷ giá USD/VND biến động mạnh, ngân hàng phía Việt Nam chậm phát hành bảo lãnh L/C đợt 2, dẫn đến tồn kho tại Thượng Hải. Đối tác yêu cầu bồi thường 1.2 triệu USD hoặc kiện ra Trọng tài SHIAC.',
      studentRole: 'Trưởng ban Đàm phán Liên ngành (Đại diện Công ty Việt Nam), phối hợp Luật sư nội bộ, Chuyên viên Ngôn ngữ Trung và Giám đốc Tài chính.',
      coreObjectives: [
        'Hạ mức bồi thường từ 1.2 triệu USD xuống dưới 300.000 USD (hoặc bù đắp bằng đơn hàng tương lai).',
        'Vận dụng Điều 79 CISG (Bất khả kháng/Trở ngại khách quan) để đàm phán miễn trừ phạt vi phạm.',
        'Sử dụng ngôn ngữ ngoại giao và kính ngữ thương mại tiếng Trung để xoa dịu quan hệ đối tác chiến lược.',
        'Đưa ra lộ trình thanh toán linh hoạt 3 giai đoạn để bảo toàn thanh khoản công ty.'
      ]
    },
    dossier: [
      {
        title: 'Hợp đồng Ngoại thương số HX-VN-2024 (§ Trích yếu)',
        type: 'contract',
        content: `• ĐIỀU 8 (FORCE MAJEURE - BẤT KHẢ KHÁNG):
"Các bên được miễn trừ trách nhiệm bồi thường nếu chứng minh được việc không thực hiện nghĩa vụ do trở ngại khách quan nằm ngoài tầm kiểm soát hợp lý, không lường trước được tại thời điểm ký kết (theo Điều 79 Công ước Viên CISG 1980)."

• ĐIỀU 12 (PHẠT VI PHẠM & BỒI THƯỜNG THIỆT HẠI):
"Bên vi phạm thời hạn mở L/C quá 14 ngày làm việc phải chịu phạt vi phạm 8% giá trị lô hàng chậm trễ và bồi thường toàn bộ thiệt hại thực tế phát sinh (gồm chi phí lưu kho bãi, nhân công chờ việc)."

• ĐIỀU 14 (LUẬT ÁP DỤNG & GIẢI QUYẾT TRANH CHẤP):
"Mọi tranh chấp phát sinh được ưu tiên hòa giải thương lượng trong vòng 30 ngày. Trường hợp không đạt được thỏa thuận, vụ việc sẽ được đưa ra Trung tâm Trọng tài Quốc tế Thượng Hải (SHIAC) phán quyết. Luật áp dụng là CISG 1980 và tập quán thương mại quốc tế Incoterms 2020."`
      },
      {
        title: 'Báo cáo Dòng tiền & Thanh khoản Quý 4 (Nội bộ)',
        type: 'finance',
        content: `• Dự trữ tiền mặt khả dụng: 650.000 USD.
• Nếu phải bồi thường ngay 1.200.000 USD: Công ty sẽ âm vốn lưu động, vi phạm hệ số an toàn nợ với ngân hàng (Debt Covenant Breach), đe dọa trực tiếp hoạt động kinh doanh.
• Khả năng chịu đựng tối ưu: Bồi thường chi phí phát sinh thực tế lưu kho tối đa 180.000 - 250.000 USD, thanh toán tiền hàng đợt 2 chia làm 3 kỳ trong 60 ngày.`
      },
      {
        title: 'Công văn Gián đoạn Logistics & Ngoại hối',
        type: 'evidence',
        content: `• Công văn từ Hãng tàu Quốc tế xác nhận tuyến vận tải qua Biển Đỏ bị đình chỉ bất khả kháng, cước phí tàu tăng 280%, các ngân hàng trung gian đình chỉ duyệt bảo lãnh L/C đa tệ trong 10 ngày.
• Đủ căn cứ cấu thành yếu tố trở ngại khách quan theo CISG Điều 79 khoản 1.`
      }
    ],
    tacticalPrompts: [
      {
        category: 'law',
        label: '⚖️ [Luật CISG] Viện dẫn Điều 79 Bất khả kháng & Thiệt hại thực tế',
        textVi: 'Thưa ông Trần, căn cứ Điều 8 Hợp đồng và Điều 79 CISG, sự gián đoạn tuyến hàng hải và thủ tục L/C là trở ngại khách quan ngoài tầm kiểm soát. Chúng tôi sẵn sàng bồi hoàn chi phí lưu kho bãi thực tế có hóa đơn kiểm toán, nhưng yêu cầu bác bỏ khoản phạt 15% vượt quá thiệt hại thực tế.',
        textZh: '陈总，根据合同第8条以及联合国《国际货物销售合同公约》(CISG) 第79条，本次航运与外汇通道受阻属于双方无法合理预见的不可抗力。我们充分理解华新科技的难处，愿全额承担经审计的实际仓储与资金占用成本，但希望免除15%惩罚性违约金。',
        scoreImpact: { law: 26, lang: 20, mgmt: 18, econ: 22 },
        nextStance: 'Cân nhắc (Evaluating)'
      },
      {
        category: 'lang',
        label: '🌐 [Ngôn ngữ - Trung] Kính ngữ ngoại giao thương mại & Quan hệ lâu dài',
        textVi: 'Kính gửi Trần tổng, HuaXin Tech luôn là đối tác chiến lược số một của chúng tôi tại Thượng Hải. Đưa nhau ra trọng tài SHIAC sẽ làm tổn hại danh tiếng và quan hệ 5 năm qua. Chúng tôi muốn đề xuất thỏa thuận hòa giải có lợi cho cả hai bên.',
        textZh: '陈晓东总经理，华新科技一直是我们最核心的战略合作伙伴。对薄公堂只会损害双方五年建立的信任与市场声誉。中国有句古话叫“和气生财”，我们今天带着百分之百的诚意，希望能达成一份共赢的调解备忘录。',
        scoreImpact: { law: 16, lang: 28, mgmt: 22, econ: 16 },
        nextStance: 'Cởi mở (Open)'
      },
      {
        category: 'econ',
        label: '💰 [Kinh tế] Đề xuất Lộ trình thanh toán 3 kỳ & Cam kết đơn hàng Q1',
        textVi: 'Về mặt tài chính, chúng tôi đề xuất thanh toán ngay 40% giá trị lô hàng trong 5 ngày tới, phần còn lại chia làm 2 kỳ kèm bảo lãnh ngân hàng hạng A, đồng thời ký trước thỏa thuận mua 100.000 linh kiện cho Quý 1 năm sau.',
        textZh: '在财务方案上，我们建议分三期执行：5个工作日内电汇支付40%货款及实际仓储补偿20万美元；剩余款项分两期结清并附顶级银行保函。同时，我们愿提前锁定明年初10万件核心元件的采购意向订单。',
        scoreImpact: { law: 18, lang: 18, mgmt: 22, econ: 28 },
        nextStance: 'Đồng thuận có điều kiện (Conditional Agreement)'
      },
      {
        category: 'mgmt',
        label: '🏢 [Quản trị] Thành lập Ban Điều phối Khủng hoảng chung 2 bên',
        textVi: 'Chúng tôi đề xuất hai bên lập ngay một Task Force khẩn cấp gồm đại diện Logistics và Tài chính hai nước để giám sát tiến độ thông quan từng ngày, chia sẻ dữ liệu tồn kho theo thời gian thực để ngăn ngừa rủi ro tái diễn.',
        textZh: '我们提议立即建立两家公司的“联合特别工作组”，每天同步物流通关与外汇结算进度。通过全流程数字化透明管理，从根本上杜绝类似供应链风险再度发生。',
        scoreImpact: { law: 18, lang: 20, mgmt: 28, econ: 18 },
        nextStance: 'Hòa giải Thành công (Full Consensus)'
      }
    ],
    // Deep dynamic branching dialogue engine
    dialogueBranches: [
      {
        conditionKeywords: ['cisg', 'điều 79', 'bất khả kháng', '不可抗力', '79条', 'hợp đồng', 'trở ngại'],
        responseZh: '贵方的法律团队确实做足了功课。我承认红海物流阻断有其客观性，CISG第79条的免责法理我们在原则上并不排斥。但是，120万美元中包含了我们垫付给上游晶圆厂的锁料成本与每日高昂的保税仓储费用，这笔真金白银的损失，贵方打算怎么解决？',
        responseVi: 'Đội ngũ pháp lý của quý vị nghiên cứu rất kỹ. Tôi thừa nhận sự cố hàng hải có tính khách quan, về mặt pháp lý chúng tôi không hoàn toàn bác bỏ Điều 79 CISG. Tuy nhiên, trong 1.2 triệu USD đó có cả chi phí chúng tôi đã ứng trước cho xưởng đúc bán dẫn và kho bãi bảo thuế mỗi ngày. Thiệt hại tiền tươi thóc thật này, quý vị định giải quyết thế nào?',
        stance: 'Cân nhắc (Evaluating)',
        pillarBonus: 'law',
        coachTip: 'Trần Tổng đã chấp nhận lý lẽ pháp lý về Điều 79 CISG và nhượng bộ về tiền phạt vi phạm. Hãy lập tức đưa ra đề xuất bồi hoàn chi phí kho bãi thực tế kèm phương án thanh toán tài chính.'
      },
      {
        conditionKeywords: ['hóa đơn', 'kiểm toán', 'thiệt hại thực tế', 'chứng minh', '审计', '实际损失', 'điều 77', 'giảm thiểu'],
        responseZh: '我们华新在上海也是上市公司，每一笔报关与仓储账目都清清楚楚、随时经得起四大审计！如果贵方承诺全额承担实际仓储发票的支出，并免除无休止的扯皮，我可以把财务明细表同步给贵方核对。但关键是首笔补偿金何时到账？',
        responseVi: 'HuaXin chúng tôi tại Thượng Hải cũng là công ty niêm yết, mọi khoản chi hải quan và kho bãi đều minh bạch, sẵn sàng chịu kiểm toán Big 4 bất cứ lúc nào! Nếu quý vị cam kết chi trả các khoản theo hóa đơn kho bãi thực tế, tôi có thể chuyển bảng kê tài chính cho quý vị rà soát ngay. Nhưng quan trọng là khoản bù đắp đầu tiên khi nào về tài khoản?',
        stance: 'Cân nhắc (Evaluating)',
        pillarBonus: 'law',
        coachTip: 'Tuyệt vời! Đối tác đồng ý mở sổ sách kế toán kiểm toán thiệt hại thực tế. Hãy đề xuất mốc thanh toán 40% trong 5 ngày làm việc.'
      },
      {
        conditionKeywords: ['thương mại', 'hợp tác', 'chiến lược', '和气生财', '战略合作', 'danh tiếng', '5 năm', 'tin tưởng'],
        responseZh: '陈某也是看在两家公司过去五年的情分上，才坐下来跟你们谈这最后一次。我们不想撕破脸，但华新董事会对财报考核非常严厉。如果只讲感情没有真金白银的履约保证，我回去无法向董事会交差！你们必须拿出具有约束力的财务方案。',
        responseVi: 'Tôi cũng chính vì nể tình nghĩa hợp tác 5 năm qua giữa hai bên nên mới ngồi lại buổi cuối cùng này. Chúng tôi không muốn làm căng, nhưng Hội đồng Quản trị HuaXin kiểm toán rất nghiêm ngặt. Nếu chỉ nói về tình cảm mà không có bảo lãnh thanh toán cụ thể, tôi không thể ăn nói với HĐQT! Các bạn phải đưa ra giải pháp tài chính có tính ràng buộc.',
        stance: 'Cởi mở (Open)',
        pillarBonus: 'lang',
        coachTip: 'Ngoại giao văn hóa phương Đông đã phát huy tác dụng rõ rệt! Trần Tổng đã trải lòng về áp lực với HĐQT. Hãy tung ra phương án thanh toán 3 kỳ có bảo lãnh ngân hàng.'
      },
      {
        conditionKeywords: ['thanh toán', '3 kỳ', '40%', '20 vạn', 'chia đợt', 'quý 1', '采购', 'đơn hàng', 'bảo lãnh', 'l/c'],
        responseZh: '分三期支付（首期40%），加上锁定明年第一季度的10万件采购意向订单... 这个方案很有建设性！如果我们能将实际仓储补偿明确为25万美元，并在5个工作日内收到首笔款项，我可以代表华新科技签署和解备忘录，暂缓向SHIAC提交仲裁！',
        responseVi: 'Thanh toán 3 kỳ (đợt đầu 40%), cộng với việc ký thỏa thuận mua 100.000 linh kiện Quý 1 năm sau... Phương án này rất có tính xây dựng! Nếu chúng ta chốt mức bồi thường kho bãi là 250.000 USD và nhận được đợt thanh toán đầu tiên trong 5 ngày làm việc, tôi có thể đại diện HuaXin ký biên bản hòa giải, tạm dừng nộp đơn lên SHIAC!',
        stance: 'Đồng thuận có điều kiện (Conditional Agreement)',
        pillarBonus: 'econ',
        coachTip: 'Thắng lợi lớn về tài chính! Mức bồi thường đã giảm từ 1.2M USD xuống 250k USD (Tiết kiệm ròng 950.000 USD). Hãy đề xuất lập Task Force chung để chốt thỏa thuận.'
      },
      {
        conditionKeywords: ['task force', 'ban điều phối', '联合', 'quản trị', 'minh bạch', 'giám sát', 'chuỗi cung ứng', 'logistics'],
        responseZh: '太好了！建立联合特别工作组能确保后续的通关与排产万无一失。陈某非常钦佩贵团队今天展现出的专业法律功底、敏锐的商业诚意与国际化格局。我同意签署《争议和解备忘录暨分期提货协议》！愿两家公司的合作历久弥坚！',
        responseVi: 'Tuyệt vời! Một Ban công tác liên hợp sẽ đảm bảo tiến độ thông quan và sản xuất tiếp theo không phát sinh sai sót. Tôi rất khâm phục sự am hiểu luật pháp, thiện chí thương mại và tầm nhìn quốc tế của đội ngũ các bạn hôm nay. Tôi đồng ý ký Biên bản Hòa giải và Lộ trình nhận hàng! Chúc cho sự hợp tác của chúng ta ngày càng bền chặt!',
        stance: 'Hòa giải Thành công (Full Consensus)',
        pillarBonus: 'mgmt',
        coachTip: 'Phiên đàm phán trọng tài quốc tế đã đạt kết quả viên mãn! Bạn đã giải quyết toàn diện cả 4 trụ cột: Luật, Ngôn ngữ, Quản trị và Tài chính.'
      },
      {
        conditionKeywords: ['kiện', 'tòa án', 'không trả', 'không chấp nhận', 'tùy các vị', 'thách', 'bác bỏ hoàn toàn'],
        responseZh: '既然贵方态度如此轻率，视商业诚信如无物，那我们也没什么好多谈的了！法务部门已经在起草财产保全申请，明天上午SHIAC立案后，贵方在华关联资产都将被依法冻结！我们法庭上见！',
        responseVi: 'Nếu quý vị đã có thái độ thiếu thiện chí như vậy, xem nhẹ chữ tín thương mại, thì chúng tôi không còn gì để nói nữa! Bộ phận pháp lý của chúng tôi đang soạn đơn yêu cầu phong tỏa tài sản. Sáng mai khi SHIAC thụ lý, các tài sản liên quan của quý vị sẽ bị áp dụng biện pháp khẩn cấp tạm thời! Hẹn gặp quý vị tại phiên trọng tài!',
        stance: 'Xung đột gay gắt (Hostile Dispute)',
        pillarBonus: 'mgmt',
        coachTip: 'Cảnh báo nguy cơ đổ vỡ! Đối đầu trực diện đang đẩy công ty vào nguy cơ bị phong tỏa tài sản tại Thượng Hải. Hãy lập tức xoa dịu bằng kính ngữ thương mại và đề xuất giải pháp thỏa hiệp.'
      }
    ]
  },
  {
    id: 'crisis-recall',
    title: 'Xử Lý Khủng Hoảng Truyền Thông: Thu Hồi 50.000 Xe Điện Lỗi Pin',
    subtitle: 'Đối chất giữa Ban Giám đốc Khủng hoảng & Đại diện Người tiêu dùng / Cơ quan Giám sát Bắc Mỹ',
    level: 'Trung cấp (Intermediate)',
    duration: '10 - 15 phút',
    languages: ['Tiếng Anh', 'Tiếng Việt'],
    targetAudience: 'Sinh viên Quản trị Kinh doanh, Luật Bảo vệ NTD & Truyền thông Doanh nghiệp',
    tags: ['Quản trị rủi ro', 'Trách nhiệm pháp lý', 'Truyền thông khủng hoảng', 'Dự phòng tài chính'],
    badge: 'Mô phỏng Khủng hoảng',
    persona: {
      name: 'Bà Elena Vance',
      title: 'Đại diện Liên minh Quyền Người Tiêu Dùng Quốc Tế & Ký giả Điều tra (New York)',
      avatar: './assets/crisis_room.jpg',
      personality: 'Truy vấn quyết liệt, đòi hỏi tính minh bạch dữ liệu kiểm định và chính sách bồi thường bảo vệ an toàn tính mạng khách hàng.',
      initialStance: 'Nghi vấn & Áp lực cao',
      languageCode: 'en-US',
      audioVoicePrefix: 'en',
      initialMessage: 'Your company has kept silent for 48 hours while 3 battery fire incidents occurred! We have collected testimony from 1,200 vehicle owners. Are you prioritizing quarterly corporate profits over consumer lives? Will there be an immediate, voluntary global recall, or do we force an injunction through regulatory court tomorrow?',
      initialMessageVi: 'Công ty của các vị đã giữ im lặng suốt 48 giờ qua trong khi có 3 vụ cháy pin xảy ra! Chúng tôi đã thu thập lời khai của 1.200 chủ xe. Có phải các vị đang đặt lợi nhuận quý lên trên tính mạng người tiêu dùng? Liệu sẽ có một đợt tự nguyện thu hồi toàn cầu ngay lập tức, hay chúng tôi phải yêu cầu tòa án ban hành lệnh khẩn cấp vào ngày mai?',
    },
    context: {
      overview: 'Mẫu sedan điện vừa xuất khẩu bị phát hiện lỗi quá nhiệt cụm pin tại thị trường Bắc Mỹ. Cơ quan giám sát chuẩn bị ban hành lệnh cấm lưu hành nếu công ty không chủ động công bố chiến dịch thu hồi và bồi thường.',
      studentRole: 'Giám đốc Điều hành Khủng hoảng (Crisis CEO) phối hợp Giám đốc Pháp lý và Giám đốc Tài chính.',
      coreObjectives: [
        'Công bố chiến lược thu hồi tự nguyện có trách nhiệm để giữ vững thương hiệu.',
        'Minh bạch dữ liệu kỹ thuật và thiết lập đường dây hotline hỗ trợ xe thay thế 24/7.',
        'Phân bổ quỹ dự phòng bảo hành 15 triệu USD hợp lý, tránh nguy cơ vỡ nợ.'
      ]
    },
    dossier: [
      {
        title: 'Quy định Pháp lý An toàn Phương tiện Giao thông',
        type: 'contract',
        content: `Căn cứ Luật An toàn Phương tiện Quốc tế: Hãng sản xuất có nghĩa vụ báo cáo sự cố trong vòng 5 ngày làm việc và đưa ra phương án khắc phục miễn phí cho người dùng.`
      },
      {
        title: 'Báo cáo Kiểm toán Quỹ Dự phòng Bảo hành',
        type: 'finance',
        content: `Quỹ bảo hành hiện có: 22 triệu USD. Chi phí thay thế cell pin cho 50.000 xe: ước tính 14.5 triệu USD. Xe thuê thay thế tạm thời: 3.2 triệu USD.`
      }
    ],
    tacticalPrompts: [
      {
        category: 'mgmt',
        label: '🏢 [Quản trị] Tự nguyện thu hồi toàn diện & Cung cấp xe thay thế 24/7',
        textVi: 'Chúng tôi nhận trách nhiệm cao nhất, công bố chiến dịch tự nguyện thu hồi toàn bộ 50.000 xe để thay thế cụm pin nâng cấp miễn phí, đồng thời chi trả toàn bộ chi phí thuê xe tạm thời cho khách hàng.',
        textZh: 'We take full corporate responsibility. We are voluntarily recalling all 50,000 affected units for a free battery module replacement and providing immediate mobility vouchers.',
        scoreImpact: { law: 22, lang: 24, mgmt: 28, econ: 20 },
        nextStance: 'Hạ nhiệt (De-escalating)'
      }
    ],
    dialogueBranches: []
  },
  {
    id: 'global-franchise',
    title: 'Đàm Phán Nhượng Quyền F&B Quốc Tế Song Ngữ Anh - Việt',
    subtitle: 'Thương thảo Hợp đồng Franchise Master khu vực Đông Nam Á',
    level: 'Cơ bản đến Trung cấp',
    duration: '10 - 15 phút',
    languages: ['Tiếng Anh', 'Tiếng Việt'],
    targetAudience: 'Sinh viên Quản trị Kinh doanh Quốc tế, Kinh tế Đối ngoại, Tiếng Anh Thương mại',
    tags: ['Franchise Royalty', 'Độc quyền lãnh thổ', 'Kiểm soát chất lượng', 'Incoterms'],
    badge: 'Đàm phán Thương mại',
    persona: {
      name: 'Marcus Sterling',
      title: 'Phó Chủ tịch Cấp cao phụ trách Nhượng quyền Toàn cầu, Artisan Coffee Corp (New York)',
      avatar: './assets/arbitration_hearing.jpg',
      personality: 'Thực dụng, chú trọng thương hiệu quốc tế, đàm phán tỷ lệ phí nhượng quyền (Royalty fee) và điều khoản độc quyền thị trường rất khắt khe.',
      initialStance: 'Giữ vững lập trường',
      languageCode: 'en-US',
      audioVoicePrefix: 'en',
      initialMessage: 'Good afternoon. We are excited about Vietnam and Southeast Asia, but our standard Master Franchise fee is $1.5M upfront plus a 7.5% gross sales royalty. Any territorial exclusivity also requires opening a minimum of 25 stores within 24 months. What is your counter-proposal?',
      initialMessageVi: 'Chào buổi chiều. Chúng tôi rất hào hứng với thị trường Việt Nam và ĐNA, nhưng phí Master Franchise tiêu chuẩn của chúng tôi là 1.5 triệu USD trả trước cộng 7.5% doanh thu thô. Bất kỳ sự độc quyền lãnh thổ nào cũng đòi hỏi mở tối thiểu 25 cửa hàng trong 24 tháng. Đề xuất đối ứng của quý vị là gì?',
    },
    context: {
      overview: 'Tập đoàn F&B Việt Nam đàm phán giành quyền Master Franchise thương hiệu cà phê cao cấp của Mỹ cho 3 quốc gia Việt Nam - Lào - Campuchia.',
      studentRole: 'Trưởng ban Phát triển Kinh doanh Quốc tế.',
      coreObjectives: [
        'Đàm phán giảm tỷ lệ Royalty từ 7.5% xuống 5% trong 3 năm đầu.',
        'Điều chỉnh lộ trình mở cửa hàng phù hợp với năng lực tài chính và nghiên cứu thị trường địa phương.',
        'Bảo lưu quyền cung ứng 40% nguyên liệu hạt cà phê đặc sản nội địa Việt Nam.'
      ]
    },
    dossier: [
      {
        title: 'Bản Dự thảo Điều khoản Nhượng quyền (Term Sheet)',
        type: 'contract',
        content: `• Upfront Fee: 1,500,000 USD. Royalty: 7.5% Monthly Gross Revenue. Marketing Fund: 2% Revenue.`
      }
    ],
    tacticalPrompts: [],
    dialogueBranches: []
  }
];

export const FOUR_PILLARS = [
  {
    key: 'law',
    title: 'Luật Kinh Tế',
    subtitle: 'Legal Compliance & Arbitration',
    color: '#3B82F6',
    bg: 'rgba(59, 130, 246, 0.1)',
    borderColor: 'rgba(59, 130, 246, 0.25)',
    icon: 'Scale',
    description: 'Rà soát hợp đồng thương mại quốc tế, viện dẫn Công ước Viên (CISG 1980), Incoterms 2020, điều khoản bất khả kháng và thủ tục trọng tài SHIAC/VIAC.',
    skills: ['Rà soát rủi ro pháp lý hợp đồng', 'Viện dẫn điều khoản miễn trách (CISG Art. 79)', 'Chiến thuật tranh tụng trọng tài thương mại (VIAC/SHIAC/SIAC)']
  },
  {
    key: 'lang',
    title: 'Ngôn Ngữ & Ngoại Giao',
    subtitle: 'Linguistic & Cross-Cultural Mastery',
    color: '#06B6D4',
    bg: 'rgba(6, 182, 212, 0.1)',
    borderColor: 'rgba(6, 182, 212, 0.25)',
    icon: 'Languages',
    description: 'Vận dụng ngôn ngữ thương mại chuẩn xác (Tiếng Trung 商务中文, Tiếng Anh đàm phán, Kính ngữ ngoại giao), thấu hiểu văn hóa đàm phán Á - Âu.',
    skills: ['Kính ngữ & Thuật ngữ thương mại quốc tế', 'Xoa dịu mâu thuẫn đa văn hóa', 'Khả năng chuyển ngữ linh hoạt trong tình huống căng thẳng']
  },
  {
    key: 'mgmt',
    title: 'Quản Trị Chiến Lược',
    subtitle: 'Strategic Leadership & Crisis Agility',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'rgba(16, 185, 129, 0.25)',
    icon: 'ShieldAlert',
    description: 'Điều hành phòng họp khủng hoảng, lãnh đạo đàm phán liên ngành, giải quyết xung đột lợi ích và bảo vệ uy tín thương hiệu doanh nghiệp.',
    skills: ['Xử lý khủng hoảng truyền thông & chuỗi cung ứng', 'Phối hợp tác chiến đa phòng ban', 'Bảo toàn uy tín và quan hệ đối tác dài hạn']
  },
  {
    key: 'econ',
    title: 'Kinh Tế & Tài Chính',
    subtitle: 'Financial Viability & Cost Optimization',
    color: '#A855F7',
    bg: 'rgba(168, 85, 247, 0.1)',
    borderColor: 'rgba(168, 85, 247, 0.25)',
    icon: 'TrendingUp',
    description: 'Tối ưu chi phí bồi thường, bảo toàn thanh khoản dòng tiền, phân tích biên lợi nhuận, cấu trúc phương án thanh toán và dự báo rủi ro tỷ giá.',
    skills: ['Tối ưu hóa chi phí bồi thường & phạt vi phạm', 'Cấu trúc dòng tiền thanh toán nhiều kỳ (Cashflow optimization)', 'Phân tích điểm hòa vốn và rủi ro tài chính']
  }
];
