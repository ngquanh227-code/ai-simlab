// Multi-language localization dictionary for AI Interactive SimLab
export const TRANSLATIONS = {
  vi: {
    brand: {
      name: 'AI SIMLAB',
      sub: 'INTERDISCIPLINARY LAB',
      slogan: 'BỨT PHÁ GIỚI HẠN - THẮP LỬA THÀNH CÔNG',
      tagline: 'Phòng Thí Nghiệm Ảo Thực Nghiệm Đàm Phán & Trọng Tài Liên Ngành Cùng AI'
    },
    nav: {
      home: 'Trang Chủ',
      disciplines: 'Lĩnh Vực',
      mission: 'Mục Đích & Sứ Mệnh',
      history: 'Lịch Sử Mô Phỏng',
      enterHearing: 'Vào Hearing',
      customCase: 'Tự Nhập Tình Huống',
      youtubeGuide: 'Video Hướng Dẫn'
    },
    disciplines: {
      title: '6 Lĩnh Vực Đào Tạo Thực Nghiệm',
      desc: 'Mô phỏng đa chiều kết hợp tài liệu nghiên cứu khoa học và các khủng hoảng thực tế nổi cộm trên mạng xã hội.',
      economics: {
        name: 'Kinh Tế',
        en: 'Economics',
        desc: 'Phân tích vĩ mô, biến động tỷ giá hối đoái, chi phí cơ hội & khủng hoảng lạm phát chuỗi cung ứng.'
      },
      management: {
        name: 'Quản Trị',
        en: 'Management',
        desc: 'Xử lý khủng hoảng truyền thông nội bộ, xung đột cổ đông & văn hóa doanh nghiệp thời đại số.'
      },
      business: {
        name: 'Kinh Doanh',
        en: 'Business',
        desc: 'Chiến lược cạnh tranh giá, đàm phán phân phối sàn TMĐT & xử lý khủng hoảng KOLs/Livestream.'
      },
      law: {
        name: 'Luật',
        en: 'Law & Arbitration',
        desc: 'Tranh tụng trọng tài quốc tế (CISG, VIAC, SHIAC), sở hữu trí tuệ bản quyền AI & điều khoản miễn trách.'
      },
      languages: {
        name: 'Ngôn Ngữ',
        en: 'Languages & Context',
        desc: 'Ngoại ngữ thương mại (Anh - Trung - Việt), thuật ngữ pháp lý và nghệ thuật ngoại giao song ngữ.'
      },
      commerce: {
        name: 'Thương Mại',
        en: 'International Trade',
        desc: 'Logistics xuất nhập khẩu CIF/FOB cảng biển, gian lận C/O xuất xứ & biện pháp tự vệ phòng vệ thương mại.'
      }
    },
    hearingModal: {
      title: 'Chọn Phương Thức Vào Hearing',
      subtitle: 'Trải nghiệm phòng thực nghiệm đàm phán nhập vai tương tác với trí tuệ nhân tạo.',
      randomMode: {
        title: 'Random Tình Huống Ngẫu Nhiên',
        badge: 'Gợi ý từ Case Study Khoa Học & MXH',
        desc: 'Hệ thống tự động quay số bốc ngẫu nhiên một vụ việc gay cấn thuộc 6 ngành học để thử thách bản lĩnh phản xạ tức thì của bạn.',
        btn: 'Bốc Thăm & Vào Hearing Ngay'
      },
      customMode: {
        title: 'Tự Nhập Tình Huống Cụ Thể',
        badge: 'Sinh Viên Tự Thiết Kế Đề Bài',
        desc: 'Tự đưa vào kịch bản giả định (vai trò, đối tác, tình tiết xung đột). AI sẽ lập tức mô phỏng đối tượng phản biện để bạn ứng biến.',
        btn: 'Soạn Kịch Bản & Khởi Tạo'
      },
      genzBadge: 'Tích hợp Visual Animation GenZ sống động'
    },
    missionView: {
      badge: 'SỨ MỆNH & TẦM NHÌN DỰ ÁN',
      title: 'Kiến Tạo Năng Lực Thực Chiến Đột Phá Cho Thế Hệ Trẻ',
      p1: 'AI Interactive SimLab ra đời với mục đích xóa bỏ khoảng cách giữa lý thuyết giảng đường và thương trường khốc liệt. Thay vì học thuộc lòng những điều luật khô khan hay những lý thuyết kinh tế trừu tượng, người học được trực tiếp ngồi vào bàn đàm phán, đối diện với những quyết định cân não hàng triệu đô.',
      p2: 'Dự án áp dụng mô hình thực nghiệm 4 trục năng lực: Pháp Lý Chắc Chắn - Ngôn Ngữ Sắc Bén - Quản Trị Tỉnh Táo - Kinh Tế Hiệu Quả, mang đậm tinh thần Bứt Phá Giới Hạn - Thắp Lửa Thành Công.',
      quote: '"Thực chiến không chỉ là đọc tài liệu, thực chiến là khi đối tác đập bàn đòi bồi thường và bạn vẫn mỉm cười trích dẫn chính xác điều khoản miễn trách nhiệm."',
      stats: [
        { label: 'Tình Huống Thực Chiến', val: '50+' },
        { label: 'Lĩnh Vực Đào Tạo', val: '06' },
        { label: 'Ngôn Ngữ Tương Tác', val: '03' },
        { label: 'Tỷ Lệ Tự Tin Sau Khóa Học', val: '98%' }
      ]
    },
    historyView: {
      badge: 'LỊCH SỬ THỰC HÀNH MÔ PHỎNG',
      title: 'Bảng Kết Quả & Hồ Sơ Đàm Phán Của Bạn',
      empty: 'Chưa có phiên thực hành nào được hoàn thành. Hãy vào Hearing để bắt đầu phiên đầu tiên!',
      startBtn: 'Vào Thực Hành Ngay',
      searchPlaceholder: 'Tìm kiếm theo mã phiên (SIM-...), tên tình huống...',
      filterAll: 'Tất cả lĩnh vực',
      filterAllTiers: 'Tất cả xếp loại',
      sortBy: 'Sắp xếp theo',
      kpis: {
        totalSessions: 'Tổng Phiên Hoàn Thành',
        avgScore: 'Điểm Trung Bình',
        passRate: 'Tỷ Lệ Đạt & Xuất Sắc',
        topStrength: 'Lĩnh Vực Thế Mạnh',
        simHours: 'Thời Lượng Thực Chiến'
      },
      competencies: {
        law: 'Pháp lý',
        lang: 'Ngôn ngữ',
        mgmt: 'Quản trị',
        econ: 'Kinh tế'
      },
      cols: {
        date: 'Thời gian',
        scenario: 'Tình huống / Hồ sơ',
        category: 'Ngành',
        turns: 'Số lượt',
        score: 'Điểm AI',
        actions: 'Hành động'
      },
      viewSheet: 'Google Sheet',
      viewRubric: 'Báo Cáo Điểm',
      replay: 'Mô Phỏng Lại'
    },
    floating: {
      btnLabel: 'Trợ Lý Ảo SimLab',
      chatTab: 'AI Chat Tư Vấn',
      staffTab: 'Hỗ Trợ Nhân Viên',
      mailTab: 'Gửi Mail Phản Hồi',
      chatPlaceholder: 'Hỏi AI về cách ứng biến, điều luật, hay thuật ngữ...',
      quickQuestions: [
        'Làm sao viện dẫn Điều 79 CISG để thoát phạt vi phạm?',
        'Cách xoa dịu đối tác Trung Quốc đang nóng giận?',
        'Quy chế tính điểm AI dựa trên những tiêu chí nào?'
      ],
      staffTitle: 'Yêu cầu hỗ trợ từ Ban Học Vụ & Kỹ Thuật',
      staffDesc: 'Đội ngũ chuyên viên SimLab luôn sẵn sàng đồng hành cùng bạn 24/7.',
      formName: 'Họ và tên sinh viên / Khách hàng',
      formEmail: 'Email nhận phản hồi',
      formPhone: 'Số điện thoại liên hệ',
      formMsg: 'Nội dung cần hỗ trợ hoặc phản hồi góp ý',
      sendBtn: 'Gửi Thông Điệp',
      successMsg: 'Yêu cầu của bạn đã được ghi nhận! Hệ thống đã gửi email xác nhận về hòm thư của bạn.'
    },
    sheet: {
      title: 'Bảng Tính Mô Phỏng Kết Quả (View-Only Mode)',
      desc: 'Dữ liệu được trích xuất tự động và đồng bộ trực tiếp với hệ thống Google Sheets bảo mật.',
      copyLink: 'Sao Chép Link Sheet',
      copied: 'Đã sao chép link!',
      colA: 'MỐC THỜI GIAN',
      colB: 'CHỦ THỂ PHÁT BIỂU',
      colC: 'NỘI DUNG ĐÀM PHÁN (ZH / EN / VI)',
      colD: 'ĐÁNH GIÁ PHẢN XẠ & CĂN CỨ PHÁP LÝ',
      colE: 'ĐIỂM NĂNG LỰC (+/-)'
    },
    rubric: {
      aiEvaluation: 'ĐÁNH GIÁ TỰ ĐỘNG TỪ HỆ THỐNG AI',
      teacherEvaluation: 'PHẦN ĐÁNH GIÁ CHUYÊN MÔN CỦA GIẢNG VIÊN & NHÀ TRƯỜNG',
      teacherName: 'Giảng viên chấm điểm',
      teacherComment: 'Nhận xét sư phạm & khuyến nghị phát triển',
      teacherGrade: 'Điểm số chính thức của Giảng viên',
      saveTeacherBtn: 'Lưu & Phê Duyệt Điểm Nhà Trường',
      approved: 'Đã phê duyệt & khóa điểm'
    }
  },
  en: {
    brand: {
      name: 'AI SIMLAB',
      sub: 'INTERDISCIPLINARY LAB',
      slogan: 'BREAK LIMITS - IGNITE SUCCESS',
      tagline: 'Interdisciplinary AI-Powered Negotiation & International Arbitration Simulation Lab'
    },
    nav: {
      home: 'Home',
      disciplines: 'Disciplines',
      mission: 'Purpose & Mission',
      history: 'Simulation History',
      enterHearing: 'Enter Hearing',
      customCase: 'Custom Scenario',
      youtubeGuide: 'Video Tutorial'
    },
    disciplines: {
      title: '6 Interdisciplinary Experimental Domains',
      desc: 'Multidimensional simulations bridging academic scientific research and viral real-world social media crises.',
      economics: {
        name: 'Economics',
        en: 'Macro & Microeconomics',
        desc: 'Macro trends, exchange rate volatility, opportunity cost, and supply chain inflation crises.'
      },
      management: {
        name: 'Management',
        en: 'Strategic Management',
        desc: 'Internal PR crises, shareholder conflicts, mass layoffs & corporate culture disputes.'
      },
      business: {
        name: 'Business',
        en: 'Business Strategy',
        desc: 'Price war strategies, e-commerce platform bargaining, and TikTok/KOL livestream scandals.'
      },
      law: {
        name: 'Law',
        en: 'Law & Arbitration',
        desc: 'Cross-border arbitration (CISG, VIAC, SHIAC), generative AI copyright infringement & liability shields.'
      },
      languages: {
        name: 'Languages',
        en: 'Commercial Languages',
        desc: 'Business English, Chinese, and Vietnamese negotiation nuances and legal diplomacy.'
      },
      commerce: {
        name: 'Commerce',
        en: 'International Trade',
        desc: 'CIF/FOB port logistics, Certificate of Origin (C/O) disputes, and anti-dumping tariffs.'
      }
    },
    hearingModal: {
      title: 'Choose Hearing Entry Mode',
      subtitle: 'Step into an immersive, interdisciplinary AI role-playing chamber.',
      randomMode: {
        title: 'Surprise Case (Randomized)',
        badge: 'From Scientific Cases & Viral Crises',
        desc: 'Instantly spins a realistic high-stakes scenario across 6 disciplines to challenge your immediate reflexes.',
        btn: 'Draw Random Case & Enter Hearing'
      },
      customMode: {
        title: 'Custom Student-Defined Case',
        badge: 'Craft Your Own Scenario',
        desc: 'Input custom dispute details, partner personas, and stakes. AI will immediately simulate and roleplay against you.',
        btn: 'Draft Scenario & Launch'
      },
      genzBadge: 'Featuring GenZ Anime Animation Stage'
    },
    missionView: {
      badge: 'MISSION & VISION',
      title: 'Pioneering Battle-Tested Competencies for the Digital Generation',
      p1: 'AI Interactive SimLab bridges the divide between sterile textbooks and ruthless boardrooms. Rather than memorizing abstract theories, learners take the hot seat against seasoned AI personas in multimillion-dollar dilemmas.',
      p2: 'Built upon a 4-pillar interdisciplinary rubric: Legal Mastery - Linguistic Agility - Strategic Calm - Economic Optimization.',
      quote: '"Real competence is when the counterparty slams the table demanding penalties, and you calmly quote the governing exemption clause."',
      stats: [
        { label: 'Real Case Studies', val: '50+' },
        { label: 'Disciplines', val: '06' },
        { label: 'Languages', val: '03' },
        { label: 'Student Confidence', val: '98%' }
      ]
    },
    historyView: {
      badge: 'SIMULATION TRANSCRIPT HISTORY',
      title: 'Your Completed Hearing Sessions & Scores',
      empty: 'No completed simulations recorded yet. Enter a Hearing session to record your first trial!',
      startBtn: 'Start Hearing Now',
      searchPlaceholder: 'Search by session ID (SIM-...), scenario title...',
      filterAll: 'All Disciplines',
      filterAllTiers: 'All Tiers',
      sortBy: 'Sort by',
      kpis: {
        totalSessions: 'Completed Sessions',
        avgScore: 'Average Score',
        passRate: 'Excellence Rate',
        topStrength: 'Strongest Discipline',
        simHours: 'Total Simulation Hours'
      },
      competencies: {
        law: 'Legal',
        lang: 'Language',
        mgmt: 'Management',
        econ: 'Economics'
      },
      cols: {
        date: 'Timestamp',
        scenario: 'Scenario / Case',
        category: 'Field',
        turns: 'Turns',
        score: 'AI Score',
        actions: 'Actions'
      },
      viewSheet: 'Google Sheet',
      viewRubric: 'Rubric Report',
      replay: 'Replay'
    },
    floating: {
      btnLabel: 'SimLab AI Assistant',
      chatTab: 'AI Consultation',
      staffTab: 'Staff Handover',
      mailTab: 'Email Feedback',
      chatPlaceholder: 'Ask AI about negotiation tactics, legal articles, or jargon...',
      quickQuestions: [
        'How do I cite CISG Art. 79 to escape penalties?',
        'How to de-escalate an enraged Chinese partner?',
        'What criteria determine my AI performance score?'
      ],
      staffTitle: 'Live Academic & Technical Support',
      staffDesc: 'Our SimLab team is ready to assist you 24/7.',
      formName: 'Student / User Full Name',
      formEmail: 'Email Address',
      formPhone: 'Contact Number',
      formMsg: 'Message or Feedback',
      sendBtn: 'Submit Request',
      successMsg: 'Your message has been received! Confirmation email sent to your inbox.'
    },
    sheet: {
      title: 'Simulation Transcript Sheet (View-Only)',
      desc: 'Data automatically exported and linked directly with secure Google Sheets protocol.',
      copyLink: 'Copy Sheet Link',
      copied: 'Link copied to clipboard!',
      colA: 'TIMESTAMP',
      colB: 'SPEAKER',
      colC: 'ARGUMENT TEXT (ZH / EN / VI)',
      colD: 'TACTICAL REFLEX & LEGAL BASIS',
      colE: 'SCORE IMPACT (+/-)'
    },
    rubric: {
      aiEvaluation: 'AUTOMATED AI EVALUATION RUBRIC',
      teacherEvaluation: 'INSTRUCTOR & FACULTY EVALUATION PANEL',
      teacherName: 'Evaluating Professor',
      teacherComment: 'Academic remarks & developmental recommendations',
      teacherGrade: 'Official Faculty Grade',
      saveTeacherBtn: 'Save & Approve Faculty Grade',
      approved: 'Faculty Grade Approved & Locked'
    }
  },
  zh: {
    brand: {
      name: 'AI SIMLAB',
      sub: '跨学科模拟实验室',
      slogan: '突破极限 · 点燃成功',
      tagline: '基于AI的多学科商务谈判与国际仲裁虚拟仿真实验平台'
    },
    nav: {
      home: '首页',
      disciplines: '专业领域',
      mission: '宗旨与使命',
      history: '仿真历史',
      enterHearing: '进入听证',
      customCase: '自定义案例',
      youtubeGuide: '使用视频教程'
    },
    disciplines: {
      title: '六大跨学科实战培养领域',
      desc: '深度融合学术研究文献与网络热议商业危机实况。',
      economics: {
        name: '经济学',
        en: 'Economics',
        desc: '宏观趋势研判、汇率波动、机会成本核算及供应链通胀危机。'
      },
      management: {
        name: '管理学',
        en: 'Management',
        desc: '内部公关危机、股东决策纷争及数字时代企业文化治理。'
      },
      business: {
        name: '商业运营',
        en: 'Business Strategy',
        desc: '电商价格战攻防、渠道博弈及头部主播带货翻车舆情危机。'
      },
      law: {
        name: '法学与仲裁',
        en: 'Law & Arbitration',
        desc: '国际商事仲裁（CISG 1980、VIAC、SHIAC）、生成式AI版权争议及免责条款。'
      },
      languages: {
        name: '商务语言',
        en: 'Business Linguistics',
        desc: '商务汉语、商务英语与越南语跨文化谈判话术与外交辞令。'
      },
      commerce: {
        name: '国际贸易',
        en: 'International Trade',
        desc: 'CIF/FOB海运风险转移、原产地证争议及反倾销贸易救济措施。'
      }
    },
    hearingModal: {
      title: '选择听证模拟入口',
      subtitle: '踏入沉浸式AI跨学科谈判与对抗决策舱。',
      randomMode: {
        title: '随机抽取实战案例',
        badge: '源自学术文献与全网真实案例',
        desc: '系统随机抽取六大领域的突发高压案例，全面考验学生临场应变能力。',
        btn: '随机抽取并进入听证'
      },
      customMode: {
        title: '学生自主输入情境',
        badge: '自由定制演练剧本',
        desc: '由学生输入特定争议情境、谈判对手身份与筹码，AI即刻生成动态博弈对手。',
        btn: '定制剧本并立即启动'
      },
      genzBadge: '搭载 Z世代动漫微剧场动态呈现'
    },
    missionView: {
      badge: '项目使命与愿景',
      title: '为数字化新一代青年打造硬核实战竞争力',
      p1: 'AI Interactive SimLab 旨在打破书本理论与凶险商场之间的壁垒。让学生不再死记硬背枯燥法条，而是直接坐上谈判桌，面对百万美元级的真实危机抉择。',
      p2: '构建“法律底线 - 语言精准 - 战略沉着 - 经济效益”四大核心能力支柱。',
      quote: '“真正的底气，是当对方拍案索赔时，你依然从容微笑着援引正确的免责条款。”',
      stats: [
        { label: '实战案例库', val: '50+' },
        { label: '涵盖专业', val: '06' },
        { label: '支持语言', val: '03' },
        { label: '学员自信度', val: '98%' }
      ]
    },
    historyView: {
      badge: '仿真对抗历史记录',
      title: '您的实训成绩单与博弈记录',
      empty: '暂无已完成的演练记录。请点击“进入听证”开启首次实训！',
      startBtn: '立即开始实战演练',
      searchPlaceholder: '搜索演练案号 (SIM-...)、情境标题...',
      filterAll: '所有专业领域',
      filterAllTiers: '所有评级',
      sortBy: '排序方式',
      kpis: {
        totalSessions: '完成演练总数',
        avgScore: '平均综合得分',
        passRate: '优秀达标率',
        topStrength: '最具优势领域',
        simHours: '实战对抗时长'
      },
      competencies: {
        law: '法理分析',
        lang: '商务用语',
        mgmt: '运营掌控',
        econ: '经济核算'
      },
      cols: {
        date: '演练时间',
        scenario: '演练案例 / 案卷',
        category: '所属领域',
        turns: '交互轮次',
        score: 'AI得分',
        actions: '操作'
      },
      viewSheet: 'Google表格',
      viewRubric: '成绩单',
      replay: '再次演练'
    },
    floating: {
      btnLabel: 'SimLab AI智能助理',
      chatTab: 'AI顾问问答',
      staffTab: '人工客服转接',
      mailTab: '邮件反馈中心',
      chatPlaceholder: '向AI咨询谈判策略、法律条款或术语解释...',
      quickQuestions: [
        '如何援引CISG第79条免除违约金？',
        '如何化解谈判对手的咄咄逼人态度？',
        'AI评分体系包含哪些具体考核维度？'
      ],
      staffTitle: '教学与技术专家支持通道',
      staffDesc: 'SimLab 专家团队全天候为您答疑解惑。',
      formName: '学生姓名 / 咨询人',
      formEmail: '电子邮箱地址',
      formPhone: '联系电话',
      formMsg: '需要协助的具体事项或反馈意见',
      sendBtn: '提交申请',
      successMsg: '已收到您的反馈！确认邮件已发送至您的邮箱。'
    },
    sheet: {
      title: '仿真结果分析工作表（只读模式）',
      desc: '数据自动解析并与安全云端在线表格协议同步。',
      copyLink: '复制表格共享链接',
      copied: '已成功复制链接！',
      colA: '时间戳',
      colB: '发言主体',
      colC: '谈判论辩内容（中/英/越）',
      colD: '战术意图与法律依据',
      colE: '能力分值变动 (+/-)'
    },
    rubric: {
      aiEvaluation: 'AI全自动智能多维评估',
      teacherEvaluation: '任课教师与学院专业评审栏',
      teacherName: '评审教师姓名',
      teacherComment: '教学点评与进阶指导建议',
      teacherGrade: '教师最终核定评级',
      saveTeacherBtn: '保存并核定学院评级',
      approved: '教师评分已锁定生效'
    }
  }
};
