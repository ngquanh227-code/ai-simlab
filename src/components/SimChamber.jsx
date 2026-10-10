import React, { useState, useEffect, useRef } from 'react';
import { 
  Scale, Languages, Shield, TrendingUp, Volume2, VolumeX, 
  FileText, Send, Check, AlertCircle, ArrowLeft,
  ChevronRight, CornerDownLeft, Sparkles
} from 'lucide-react';
import RadarChart from './RadarChart';
import { playAiVoice, stopAiVoice } from '../utils/speech';
import confetti from 'canvas-confetti';

export default function SimChamber({ scenario, onFinish, onBack }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      textZh: scenario.persona.initialMessage,
      textVi: scenario.persona.initialMessageVi,
      timestamp: '10:00:15'
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [stance, setStance] = useState(scenario.persona.initialStance);
  const [scores, setScores] = useState({ law: 40, lang: 35, mgmt: 30, econ: 35 });
  const [activeDossierTab, setActiveDossierTab] = useState(0);
  const [showDossierModal, setShowDossierModal] = useState(false);
  const [coachTip, setCoachTip] = useState(
    'Cố vấn pháp lý: Phía đối tác đang viện dẫn Điều 12 đòi phạt 15%. Hãy lập tức viện dẫn Điều 79 CISG về trở ngại khách quan và yêu cầu đối tác chứng minh thiệt hại thực tế có hóa đơn kiểm toán.'
  );
  const [turnCount, setTurnCount] = useState(1);
  const [usedBranches, setUsedBranches] = useState([]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAiTyping]);

  useEffect(() => {
    if (audioEnabled && scenario.persona.initialMessage) {
      playAiVoice(scenario.persona.initialMessage, scenario.persona.languageCode);
    }
    return () => stopAiVoice();
  }, []);

  // Intelligent Contextual AI Engine for Negotiation
  const generateDynamicAiReply = (userInputText, currentTurn, currentScores) => {
    const lower = userInputText.toLowerCase();

    // 1. Check if user is being aggressive or rejecting entirely
    if (lower.includes('kiện') || lower.includes('tòa án') || lower.includes('không trả') || lower.includes('thách') || lower.includes('sai lầm')) {
      return {
        textZh: '贵方这是什么态度？！我们在商言商，华新科技在上海乃至整个半导体行业都是有头有脸的企业。如果你们坚持这种对抗性的态度，那我也没有必要继续坐在这里浪费时间了。法务部门将在两小时内直接启动财产保全程序！',
        textVi: 'Thái độ của quý vị là sao vậy?! Chúng ta đang nói chuyện thương trường, HuaXin Tech tại Thượng Hải và trong ngành bán dẫn là doanh nghiệp có uy tín. Nếu các bạn giữ thái độ đối đầu này, tôi không cần ngồi đây lãng phí thời gian nữa. Pháp lý của chúng tôi sẽ kích hoạt thủ tục phong tỏa tài sản trong vòng 2 giờ tới!',
        stance: 'Xung đột gay gắt (Hostile Dispute)',
        tip: 'Cảnh báo nguy hiểm: Thái độ đối đầu trực diện khiến đối tác dọa bỏ bàn đàm phán! Hãy dùng kính ngữ thương mại và nhượng bộ có kiểm soát để kéo đối tác quay lại thương lượng.',
        impact: { law: -5, lang: -8, mgmt: -10, econ: -5 }
      };
    }

    // 2. Check for CISG / Legal Force Majeure arguments
    if ((lower.includes('cisg') || lower.includes('79') || lower.includes('bất khả kháng') || lower.includes('hợp đồng') || lower.includes('điều khoản') || lower.includes('biển đỏ') || lower.includes('hàng hải')) && !usedBranches.includes('cisg')) {
      setUsedBranches(prev => [...prev, 'cisg']);
      return {
        textZh: '贵方的法律团队切入点很准。红海物流中断确实属于不可抗力的客观范畴，在CISG第79条的适用上，我可以向华新董事会说明这一点以豁免惩罚性违约金。但是，我们垫付给上游晶圆厂的锁料成本与保税仓储费高达几十万美元，这些实打实的资金占用，贵方打算怎么弥补？',
        textVi: 'Đội ngũ pháp lý của các bạn nắm luật rất chắc. Sự cố vận tải Biển Đỏ đúng là thuộc phạm trù bất khả kháng, về việc áp dụng Điều 79 CISG, tôi có thể giải trình với HĐQT HuaXin để miễn trừ khoản phạt vi phạm 15%. Nhưng chi phí cọc phôi bán dẫn và kho bãi bảo thuế thực tế hàng chục vạn USD, những tổn thất có thật này các bạn định bù đắp thế nào?',
        stance: 'Cân nhắc (Evaluating)',
        tip: 'Chiến thuật Pháp lý thành công! Đối tác chấp nhận xóa khoản phạt vi phạm 15%. Bây giờ hãy đề xuất đối sách về chi phí kho bãi thực tế và kế hoạch dòng tiền.',
        impact: { law: 22, lang: 14, mgmt: 16, econ: 18 }
      };
    }

    // 3. Check for audited invoices / actual damages limitation
    if ((lower.includes('hóa đơn') || lower.includes('kiểm toán') || lower.includes('thiệt hại thực tế') || lower.includes('chứng từ') || lower.includes('chứng minh')) && !usedBranches.includes('audit')) {
      setUsedBranches(prev => [...prev, 'audit']);
      return {
        textZh: '没问题，我们华新科技所有的仓储物流单据都有上海海关与第三方国际公证行的审计盖章，经得起任何法律推敲！如果贵方承诺以实际审计金额为基础，我们同意剔除未经证实的间接损失。但贵方必须给出一个明确的首期电汇支付截止日期！',
        textVi: 'Không thành vấn đề, mọi chứng từ kho bãi logistics của HuaXin đều có dấu kiểm toán của Hải quan Thượng Hải và công chứng quốc tế, hoàn toàn vững vàng về pháp lý! Nếu các bạn cam kết chi trả dựa trên số liệu kiểm toán thực tế, chúng tôi đồng ý loại bỏ các thiệt hại gián tiếp chưa kiểm chứng. Nhưng các bạn phải cho tôi hạn chót thanh toán chuyển khoản đợt 1 cụ thể!',
        stance: 'Cân nhắc thiện chí (Pragmatic)',
        tip: 'Đối tác đã chấp nhận nguyên tắc "chỉ bồi thường thiệt hại thực tế có hóa đơn kiểm toán". Hãy đưa ra mốc thanh toán 40% trong 5 ngày làm việc.',
        impact: { law: 20, lang: 16, mgmt: 18, econ: 20 }
      };
    }

    // 4. Check for Business Chinese / Diplomatic courtesies
    if ((lower.includes('trần tổng') || lower.includes('chiến lược') || lower.includes('hợp tác') || lower.includes('5 năm') || lower.includes('thương hiệu') || lower.includes('uy tín') || lower.includes('陈总') || lower.includes('和气生财')) && !usedBranches.includes('mianzi')) {
      setUsedBranches(prev => [...prev, 'mianzi']);
      return {
        textZh: '陈某今天之所以愿意亲自坐下来谈，也正是看在两家公司过去五年的战略互信上。中国有句古话叫“风物长宜放眼量”，我们华新不是只看眼前小利的企业。只要贵方能够拿出一套兼顾双方财务底线的可行方案，我愿意在董事会上为贵方争取最大程度的谅解！',
        textVi: 'Tôi hôm nay sở dĩ đích thân ngồi lại đây đàm phán cũng chính là nể trọng sự tin cậy chiến lược 5 năm qua giữa hai bên. Người Trung Quốc có câu "Nên phóng tầm mắt nhìn xa trông rộng", HuaXin chúng tôi không phải doanh nghiệp chỉ thấy cái lợi nhỏ trước mắt. Chỉ cần các bạn đưa ra phương án khả thi đảm bảo giới hạn tài chính của hai bên, tôi sẵn sàng nói đỡ trước HĐQT để đạt được sự thông cảm tối đa!',
        stance: 'Cởi mở & Thiện chí (Diplomatic)',
        tip: 'Khéo léo vận dụng nghệ thuật ngoại giao phương Đông đã giải tỏa triệt để áp lực đối đầu! Hãy lập tức chốt phương án thanh toán chia kỳ.',
        impact: { law: 14, lang: 26, mgmt: 20, econ: 16 }
      };
    }

    // 5. Check for Payment schedule / Future volume commit
    if ((lower.includes('thanh toán') || lower.includes('chia kỳ') || lower.includes('đợt') || lower.includes('40%') || lower.includes('quý 1') || lower.includes('đơn hàng') || lower.includes('bảo lãnh') || lower.includes('l/c')) && !usedBranches.includes('finance')) {
      setUsedBranches(prev => [...prev, 'finance']);
      return {
        textZh: '这个财务重组思路非常专业！分三期支付（首期40% + 仓储补偿25万美元），再加上锁定明年第一季度10万件核心元件的采购意向框架。既保住了贵方的现金流，也保障了我们华新的产能利用率。如果贵方能在本周内开具不可撤销跟单信用证，我原则上接受！',
        textVi: 'Tư duy tái cấu trúc tài chính này rất chuyên nghiệp! Thanh toán chia 3 đợt (đợt đầu 40% + bồi thường lưu kho 250.000 USD), cộng thêm thỏa thuận khung mua 100.000 linh kiện Quý 1 năm sau. Vừa giữ an toàn dòng tiền của các bạn, vừa đảm bảo công suất sản xuất của HuaXin chúng tôi. Nếu các bạn phát hành L/C không hủy ngang trong tuần này, về nguyên tắc tôi chấp thuận!',
        stance: 'Đồng thuận có điều kiện (Conditional Consensus)',
        tip: 'Thắng lợi bước ngoặt! Đối tác đã đồng ý hạ bồi thường từ 1.2M USD xuống 250k USD. Hãy đề xuất thành lập Joint Task Force để hoàn tất hiệp nghị.',
        impact: { law: 16, lang: 18, mgmt: 22, econ: 28 }
      };
    }

    // 6. Check for Task Force / Governance
    if ((lower.includes('task force') || lower.includes('tổ công tác') || lower.includes('liên hợp') || lower.includes('giám sát') || lower.includes('minh bạch') || lower.includes('quản trị')) && !usedBranches.includes('taskforce')) {
      setUsedBranches(prev => [...prev, 'taskforce']);
      return {
        textZh: '太棒了！“联合特别工作组”的机制完全符合现代化跨国供应链管理的最高标准。每天由双方指定专人对账与跟踪物流，既防范了违约风险，也深化了两家企业的管理协同。陈某完全赞同！',
        textVi: 'Tuyệt vời! Cơ chế "Ban Công Tác Liên Hợp" hoàn toàn đáp ứng chuẩn mực cao nhất của quản trị chuỗi cung ứng đa quốc gia hiện đại. Hằng ngày hai bên cử nhân sự đối soát và theo dõi logistics, vừa ngăn ngừa rủi ro vi phạm, vừa làm sâu sắc thêm quan hệ hợp tác quản trị. Tôi hoàn toàn đồng ý!',
        stance: 'Đồng thuận Toàn diện (Consensus Reached)',
        tip: 'Toàn bộ 4 khối kiến thức (Luật, Ngôn ngữ, Quản trị, Tài chính) đã được phối hợp xuất sắc. Bạn có thể bấm "Kết Thúc & Xuất Rubric" để xem bảng điểm.',
        impact: { law: 18, lang: 20, mgmt: 28, econ: 18 }
      };
    }

    // Progressive default turns based on count
    if (currentTurn === 1) {
      return {
        textZh: '贵方的观点我听明白了。但是请站在华新科技的立场考虑一下：我们在上海张江高科技园区的厂房每天都在产生固定折旧与财务成本。光有口头承诺不够，我们必须要看到具体的履约担保和资金时间表！',
        textVi: 'Quan điểm của các bạn tôi đã lắng nghe. Nhưng xin hãy đặt mình vào vị trí của HuaXin Tech: nhà xưởng của chúng tôi tại Khu công nghệ cao Trương Giang mỗi ngày đều phát sinh chi phí khấu hao và tài chính. Chỉ hứa suông là không đủ, chúng tôi phải thấy biện pháp bảo lãnh thanh toán và lộ trình dòng tiền cụ thể!',
        stance: 'Cân nhắc (Evaluating)',
        tip: 'Đối tác cần cam kết bảo lãnh tài chính thực tế. Hãy đề xuất chia 3 đợt thanh toán kèm bảo lãnh thư tín dụng ngân hàng.',
        impact: { law: 14, lang: 14, mgmt: 14, econ: 16 }
      };
    } else if (currentTurn === 2) {
      return {
        textZh: '双方各自退一步，事情才有转机。如果我们把原先主张的120万美元赔偿，调整为只计算实际产生的仓储与资金占用费，并且分步提货，贵方的董事会是否拥有全权授权拍板？',
        textVi: 'Mỗi bên lùi một bước thì sự việc mới có chuyển biến. Nếu chúng tôi điều chỉnh khoản đòi bồi thường 1.2M USD ban đầu thành chỉ tính chi phí lưu kho và chi phí vốn thực tế, đồng thời cho phép nhận hàng theo từng đợt, Ban Giám đốc của các bạn có toàn quyền quyết định hay không?',
        stance: 'Cởi mở (Open)',
        tip: 'Đối tác đã chủ động mở đường nhượng bộ! Hãy khẳng định toàn quyền và đưa ra con số bồi thường trần 250.000 USD.',
        impact: { law: 16, lang: 18, mgmt: 18, econ: 20 }
      };
    } else {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      return {
        textZh: '很好！贵代表团展现了极高的跨国商业智慧、敏锐的法律嗅觉与诚恳的外交格局。陈某代表华新科技正式同意签署《争议和解备忘录暨分期提货协议》！让我们为未来的战略共赢干杯！',
        textVi: 'Rất tốt! Đoàn đàm phán của các bạn đã thể hiện trí tuệ thương mại quốc tế rất cao, sự nhạy bén về pháp lý và phong thái ngoại giao chân thành. Tôi đại diện HuaXin Tech chính thức đồng ý ký Biên bản Hòa giải và Lộ trình nhận hàng! Hãy cùng nâng ly vì sự hợp tác chiến lược đôi bên cùng có lợi!',
        stance: 'Hòa giải Thành công (Full Consensus)',
        tip: 'Chúc mừng bạn! Phiên đàm phán đã khép lại thắng lợi toàn diện. Hãy bấm nút "Kết Thúc & Xuất Rubric" để nhận Bảng điểm và Giấy chứng nhận hoàn thành.',
        impact: { law: 20, lang: 22, mgmt: 22, econ: 22 }
      };
    }
  };

  const handleSendMessage = (textToSend = userInput, promptMeta = null) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isAiTyping) return;

    const newMsg = {
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toTimeString().split(' ')[0]
    };

    setMessages(prev => [...prev, newMsg]);
    setUserInput('');
    setIsAiTyping(true);

    setTimeout(() => {
      const outcome = generateDynamicAiReply(trimmed, turnCount, scores);

      setScores(prev => ({
        law: Math.min(98, Math.max(20, prev.law + (promptMeta?.scoreImpact?.law || outcome.impact.law))),
        lang: Math.min(98, Math.max(20, prev.lang + (promptMeta?.scoreImpact?.lang || outcome.impact.lang))),
        mgmt: Math.min(96, Math.max(20, prev.mgmt + (promptMeta?.scoreImpact?.mgmt || outcome.impact.mgmt))),
        econ: Math.min(97, Math.max(20, prev.econ + (promptMeta?.scoreImpact?.econ || outcome.impact.econ)))
      }));

      setStance(outcome.stance);
      setCoachTip(outcome.tip);
      setTurnCount(prev => prev + 1);
      setIsAiTyping(false);

      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          textZh: outcome.textZh,
          textVi: outcome.textVi,
          timestamp: new Date().toTimeString().split(' ')[0]
        }
      ]);

      if (audioEnabled) {
        playAiVoice(outcome.textZh, scenario.persona.languageCode);
      }
    }, 1200);
  };

  const handleFinishSession = () => {
    stopAiVoice();
    onFinish({
      scores,
      turnCount,
      stance,
      messages
    });
  };

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      
      {/* Top Procedural Bar */}
      <div className="craft-card" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={onBack}
            className="btn-secondary"
            style={{ padding: '6px 12px', fontSize: '12.5px' }}
          >
            <ArrowLeft size={14} />
            <span>Thoát Phiên Họp</span>
          </button>
          
          <div style={{ height: '24px', width: '1px', background: 'var(--border-subtle)' }} />

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge-mono" style={{ background: 'var(--bg-inset)', color: '#9CA3AF', border: '1px solid var(--border-subtle)' }}>
                HEARING NO. #{turnCount}
              </span>
              <h2 className="font-serif" style={{ fontSize: '16px', fontWeight: 600, color: '#F3F4F6' }}>
                {scenario.title}
              </h2>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => {
              if (audioEnabled) stopAiVoice();
              setAudioEnabled(!audioEnabled);
            }}
            className="btn-secondary"
            style={{ fontSize: '12.5px', padding: '6px 12px' }}
          >
            {audioEnabled ? <Volume2 size={14} color="#60A5FA" /> : <VolumeX size={14} />}
            <span>Âm Thanh Đàm Thoại: {audioEnabled ? 'BẬT' : 'TẮT'}</span>
          </button>

          <button
            onClick={() => setShowDossierModal(true)}
            className="btn-secondary"
            style={{ fontSize: '12.5px', padding: '6px 12px' }}
          >
            <FileText size={14} />
            <span>Hồ Sơ Chứng Cứ ({scenario.dossier.length})</span>
          </button>

          <button
            onClick={handleFinishSession}
            className="btn-primary"
            style={{ fontSize: '12.5px', padding: '6px 16px' }}
          >
            <span>Kết Thúc & Xuất Rubric</span>
          </button>
        </div>
      </div>

      {/* 3-Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 320px', gap: '14px', alignItems: 'stretch' }}>
        
        {/* LEFT COLUMN: Persona Dossier & Objectives */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Persona Dossier Card with Generated Portrait */}
          <div className="craft-card" style={{ padding: '18px' }}>
            <div className="font-mono" style={{ fontSize: '11px', color: '#6B7280', marginBottom: '12px', letterSpacing: '0.04em' }}>
              CHỦ THỂ ĐỐI TỤNG // ADVERSE PARTY
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
              <img 
                src={scenario.persona.avatar} 
                alt={scenario.persona.name}
                style={{ width: '56px', height: '56px', borderRadius: '8px', objectFit: 'cover', border: '1px solid var(--border-medium)' }}
              />
              <div>
                <h3 style={{ fontSize: '14.5px', fontWeight: 600, color: '#F3F4F6' }}>{scenario.persona.name}</h3>
                <p style={{ fontSize: '11px', color: '#9CA3AF', lineHeight: 1.35, marginTop: '2px' }}>
                  {scenario.persona.title}
                </p>
              </div>
            </div>

            <div className="craft-inset" style={{ padding: '10px 12px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', marginBottom: '6px' }}>
                <span style={{ color: '#6B7280' }}>Lập trường đối thoại:</span>
                <span className="font-mono" style={{ 
                  color: stance.includes('Quyết liệt') || stance.includes('Xung đột') ? '#F87171' : stance.includes('Cân nhắc') ? '#FBBF24' : '#34D399', 
                  fontWeight: 600 
                }}>
                  {stance}
                </span>
              </div>
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ 
                  width: stance.includes('Quyết liệt') ? '25%' : stance.includes('Cân nhắc') ? '60%' : stance.includes('Cởi mở') ? '85%' : stance.includes('Xung đột') ? '15%' : '100%',
                  height: '100%', 
                  background: stance.includes('Quyết liệt') || stance.includes('Xung đột') ? '#EF4444' : stance.includes('Cân nhắc') ? '#F59E0B' : '#10B981',
                  transition: 'all 0.4s ease'
                }} />
              </div>
            </div>

            <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.45, fontStyle: 'italic' }}>
              "{scenario.persona.personality}"
            </p>
          </div>

          {/* Core Objectives Checklist */}
          <div className="craft-card" style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div className="font-mono" style={{ fontSize: '11px', color: '#6B7280', marginBottom: '12px', letterSpacing: '0.04em' }}>
              MỤC TIÊU PHIÊN ĐIỀU TRẦN
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              {scenario.context.coreObjectives.map((obj, i) => {
                const isPassed = (scores.econ > 70 && i === 0) || (scores.law > 60 && i === 1) || (scores.lang > 65 && i === 2);
                return (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '8px', borderRadius: '4px', background: isPassed ? 'rgba(5, 150, 105, 0.08)' : 'transparent', border: isPassed ? '1px solid rgba(5, 150, 105, 0.2)' : '1px solid transparent' }}>
                    <span className="font-mono" style={{ color: isPassed ? '#34D399' : '#6B7280', fontSize: '11px', marginTop: '1px' }}>
                      {isPassed ? '[x]' : '[ ]'}
                    </span>
                    <span style={{ color: isPassed ? '#E5E7EB' : '#9CA3AF', lineHeight: 1.4 }}>{obj}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
              <div className="font-mono" style={{ fontSize: '11px', color: '#6B7280' }}>VAI TRÒ CỦA BẠN:</div>
              <div style={{ fontSize: '12px', color: '#E5E7EB', marginTop: '3px', lineHeight: 1.4 }}>
                {scenario.context.studentRole}
              </div>
            </div>
          </div>

        </div>

        {/* CENTER COLUMN: Hearing Record & Negotiation Console */}
        <div className="craft-card" style={{ display: 'flex', flexDirection: 'column', height: '760px', overflow: 'hidden' }}>
          
          {/* Transcript Subheader with Wave Motion */}
          <div style={{ padding: '12px 18px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-inset)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="live-pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399', display: 'inline-block' }} />
              <span className="font-mono" style={{ fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.04em' }}>
                FORMAL PROCEEDING RECORD // LƯỢT #{turnCount}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {isAiTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span className="audio-wave-bar" style={{ height: '10px' }} />
                  <span className="audio-wave-bar" style={{ height: '14px' }} />
                  <span className="audio-wave-bar" style={{ height: '8px' }} />
                </div>
              )}
              <span className="font-mono" style={{ fontSize: '11px', color: '#6B7280' }}>
                CISG JURISDICTION
              </span>
            </div>
          </div>

          {/* Transcript Feed */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '88%',
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', fontSize: '11px', color: '#6B7280' }}>
                  <span>{msg.sender === 'user' ? '[VIETNAM DELEGATION]' : `[ADVERSE PARTY • ${scenario.persona.name.split(' ')[0]}]`}</span>
                  <span>•</span>
                  <span>{msg.timestamp}</span>
                </div>

                <div 
                  style={{ 
                    padding: '14px 16px', 
                    borderRadius: '6px',
                    background: msg.sender === 'user' ? 'var(--accent-primary)' : 'var(--bg-surface-elevated)',
                    border: msg.sender === 'user' ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--border-subtle)',
                    color: '#F3F4F6',
                    fontSize: '13.5px',
                    lineHeight: 1.55
                  }}
                >
                  {msg.sender === 'ai' ? (
                    <div>
                      {/* Chinese primary text */}
                      <p className="font-cn" style={{ fontWeight: 500, color: '#F3F4F6', fontSize: '14px', marginBottom: '8px' }}>
                        {msg.textZh}
                      </p>
                      {/* Vietnamese translation */}
                      <p style={{ color: '#9CA3AF', fontSize: '12.5px', borderTop: '1px solid var(--border-subtle)', paddingTop: '8px', lineHeight: 1.5 }}>
                        <span className="font-mono" style={{ fontSize: '10.5px', color: '#6B7280' }}>[BẢN DỊCH VIỆT]</span> {msg.textVi}
                      </p>
                      
                      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => playAiVoice(msg.textZh, scenario.persona.languageCode)}
                          className="btn-secondary"
                          style={{ padding: '3px 8px', fontSize: '11px' }}
                        >
                          <Volume2 size={12} color="#60A5FA" />
                          <span>Nghe phát âm</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>{msg.text}</div>
                  )}
                </div>
              </div>
            ))}

            {isAiTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: 'var(--bg-inset)', borderRadius: '6px', border: '1px solid var(--border-subtle)', width: 'fit-content' }}>
                <span className="font-mono" style={{ fontSize: '11.5px', color: '#9CA3AF' }}>Trần Tổng đang cân nhắc lập luận pháp lý & tài chính...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Tactical Prompt Suggester Panel (Structured Strategy Cards) */}
          <div style={{ padding: '12px 16px', background: 'var(--bg-inset)', borderTop: '1px solid var(--border-subtle)' }}>
            <div className="font-mono" style={{ fontSize: '11px', color: '#6B7280', marginBottom: '8px', letterSpacing: '0.04em' }}>
              GỢI Ý CHIẾN LƯỢC ĐỐI ỨNG (TỰ DO SOẠN THẢO HOẶC NHẤP CHỌN):
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {scenario.tacticalPrompts.map((prompt, i) => (
                <button
                  key={i}
                  disabled={isAiTyping}
                  onClick={() => handleSendMessage(prompt.textVi, prompt)}
                  className="craft-card craft-card-interactive"
                  style={{
                    padding: '8px 12px',
                    textAlign: 'left',
                    background: 'var(--bg-surface)',
                    cursor: isAiTyping ? 'not-allowed' : 'pointer',
                    opacity: isAiTyping ? 0.5 : 1
                  }}
                >
                  <div className="font-mono" style={{ fontSize: '10.5px', color: '#93C5FD', fontWeight: 600, marginBottom: '2px' }}>
                    {prompt.label.replace(/^[^\s]+/, '')}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#9CA3AF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {prompt.textVi}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* User Input Console */}
          <div style={{ padding: '12px 16px', background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
              placeholder="Soạn thảo lập luận đàm phán (Ví dụ: đề xuất chia 3 kỳ thanh toán, viện dẫn Điều 79 CISG, hoặc kính ngữ tiếng Trung)..."
              disabled={isAiTyping}
              style={{
                flex: 1,
                background: 'var(--bg-inset)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                padding: '10px 14px',
                color: '#F3F4F6',
                fontSize: '13px',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isAiTyping || !userInput.trim()}
              className="btn-primary"
              style={{ padding: '0 16px', opacity: isAiTyping || !userInput.trim() ? 0.4 : 1 }}
            >
              <span>Phát Biểu</span>
              <CornerDownLeft size={14} />
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: Realtime Competency HUD & Counsel Whispers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Radar Chart HUD */}
          <div className="craft-card" style={{ padding: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="font-mono" style={{ fontSize: '11px', color: '#6B7280', letterSpacing: '0.04em' }}>
                4D COMPETENCY MATRIX
              </span>
              <span className="badge-mono" style={{ background: 'var(--bg-inset)', color: '#34D399' }}>
                LIVE SYNC
              </span>
            </div>

            <RadarChart scores={scores} size={240} />

            {/* Metric Rows */}
            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '12px' }}>
              <div className="craft-inset" style={{ padding: '8px 10px' }}>
                <div className="font-mono" style={{ fontSize: '10px', color: '#6B7280' }}>LUẬT KINH TẾ</div>
                <div className="font-mono" style={{ fontSize: '15px', fontWeight: 600, color: '#F3F4F6' }}>{scores.law}%</div>
              </div>
              <div className="craft-inset" style={{ padding: '8px 10px' }}>
                <div className="font-mono" style={{ fontSize: '10px', color: '#6B7280' }}>NGÔN NGỮ THƯƠNG MẠI</div>
                <div className="font-mono" style={{ fontSize: '15px', fontWeight: 600, color: '#F3F4F6' }}>{scores.lang}%</div>
              </div>
              <div className="craft-inset" style={{ padding: '8px 10px' }}>
                <div className="font-mono" style={{ fontSize: '10px', color: '#6B7280' }}>QUẢN TRỊ KHỦNG HOẢNG</div>
                <div className="font-mono" style={{ fontSize: '15px', fontWeight: 600, color: '#F3F4F6' }}>{scores.mgmt}%</div>
              </div>
              <div className="craft-inset" style={{ padding: '8px 10px' }}>
                <div className="font-mono" style={{ fontSize: '10px', color: '#6B7280' }}>TỐI ƯU TÀI CHÍNH</div>
                <div className="font-mono" style={{ fontSize: '15px', fontWeight: 600, color: '#F3F4F6' }}>{scores.econ}%</div>
              </div>
            </div>
          </div>

          {/* Legal Co-pilot Counsel Whispers */}
          <div className="craft-card" style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div className="font-mono" style={{ fontSize: '11px', color: '#6B7280', marginBottom: '10px', letterSpacing: '0.04em' }}>
              THAM VẤN NỘI BỘ // INTERNAL COUNSEL
            </div>
            
            <p style={{ fontSize: '12.5px', color: '#D1D5DB', lineHeight: 1.55, background: 'var(--bg-inset)', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
              {coachTip}
            </p>

            <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '11px', color: '#6B7280' }}>
              Lưu ý: Mọi phương án hòa giải cần bảo toàn mức trần chi trả bồi thường dưới 300,000 USD để không vi phạm chỉ số an toàn vốn với ngân hàng.
            </div>
          </div>

        </div>

      </div>

      {/* Dossier Modal */}
      {showDossierModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          padding: '24px'
        }}>
          <div className="craft-card" style={{ width: '840px', maxWidth: '100%', maxHeight: '85vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileText size={18} color="#93C5FD" />
                <h3 className="font-serif" style={{ fontSize: '17px', fontWeight: 600, color: '#F3F4F6' }}>
                  Hồ Sơ Chứng Cứ & Văn Bản Vụ Việc (#SHIAC-2024)
                </h3>
              </div>
              <button 
                onClick={() => setShowDossierModal(false)}
                className="btn-secondary"
                style={{ padding: '4px 8px', fontSize: '12px' }}
              >
                ✕ Đóng
              </button>
            </div>

            <div style={{ display: 'flex', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-inset)' }}>
              {scenario.dossier.map((doc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDossierTab(idx)}
                  style={{
                    padding: '10px 18px',
                    background: activeDossierTab === idx ? 'var(--bg-surface)' : 'transparent',
                    borderRight: '1px solid var(--border-subtle)',
                    borderBottom: activeDossierTab === idx ? '2px solid var(--accent-primary)' : 'none',
                    color: activeDossierTab === idx ? '#F3F4F6' : '#9CA3AF',
                    fontSize: '12.5px',
                    fontWeight: 500,
                    cursor: 'pointer'
                  }}
                >
                  {doc.title}
                </button>
              ))}
            </div>

            <div style={{ padding: '20px', overflowY: 'auto', flex: 1 }}>
              <pre style={{ 
                whiteSpace: 'pre-wrap', 
                fontFamily: 'var(--font-mono)', 
                fontSize: '12.5px', 
                color: '#D1D5DB', 
                lineHeight: 1.6,
                background: 'var(--bg-inset)',
                padding: '16px',
                borderRadius: '6px',
                border: '1px solid var(--border-subtle)'
              }}>
                {scenario.dossier[activeDossierTab]?.content}
              </pre>
            </div>

            <div style={{ padding: '12px 20px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end', background: 'var(--bg-inset)' }}>
              <button
                onClick={() => setShowDossierModal(false)}
                className="btn-primary"
                style={{ fontSize: '12.5px' }}
              >
                Tiếp Tục Phiên Điều Trần
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
