import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Flame, Zap, ShieldAlert, Award, Maximize2, Minimize2 } from 'lucide-react';

export default function GenZVisualStage({ 
  currentSpeaker = 'ai', // 'ai' | 'user'
  aiStance = 'Đang thương lượng', 
  lastAiMessage = '',
  lastUserMessage = '',
  scores = { law: 50, lang: 50, mgmt: 50, econ: 50 },
  isAiTyping = false,
  scenarioTitle = ''
}) {
  const [expression, setExpression] = useState('evaluating'); // 'calm' | 'angry' | 'surprised' | 'convinced' | 'evaluating'
  const [reactionEffect, setReactionEffect] = useState(null); // 'fire' | 'law' | 'shock' | 'shield'
  const [isExpanded, setIsExpanded] = useState(false);

  // Update expression based on stance or text
  useEffect(() => {
    if (aiStance.toLowerCase().includes('xung đột') || aiStance.toLowerCase().includes('hostile') || aiStance.toLowerCase().includes('gay gắt')) {
      setExpression('angry');
      triggerReaction('fire');
    } else if (aiStance.toLowerCase().includes('cân nhắc') || aiStance.toLowerCase().includes('thiện chí') || aiStance.toLowerCase().includes('pragmatic')) {
      setExpression('convinced');
      triggerReaction('law');
    } else if (isAiTyping) {
      setExpression('evaluating');
    } else {
      setExpression('calm');
    }
  }, [aiStance, isAiTyping]);

  const triggerReaction = (type) => {
    setReactionEffect(type);
    setTimeout(() => setReactionEffect(null), 2500);
  };

  return (
    <div 
      style={{
        background: 'linear-gradient(180deg, #070B1A 0%, #0D1630 100%)',
        border: '1px solid rgba(0, 240, 255, 0.25)',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(0, 240, 255, 0.05)',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        marginBottom: '16px'
      }}
    >
      {/* Top Cyber HUD Bar */}
      <div 
        style={{ 
          padding: '8px 16px', 
          background: 'rgba(6, 9, 19, 0.75)', 
          borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontSize: '11.5px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span 
            style={{ 
              display: 'inline-block', 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              background: isAiTyping ? '#E879F9' : '#00F0FF',
              boxShadow: isAiTyping ? '0 0 10px #E879F9' : '0 0 10px #00F0FF',
              animation: 'pulse 1.5s infinite'
            }} 
          />
          <span style={{ fontFamily: 'var(--font-mono)', color: '#00F0FF', fontWeight: 700, letterSpacing: '0.06em' }}>
            GENZ ANIME CUTSCENE STAGE // LIVE INTERACTION
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span 
            style={{ 
              background: expression === 'angry' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(0, 240, 255, 0.15)',
              color: expression === 'angry' ? '#F87171' : '#38BDF8',
              border: `1px solid ${expression === 'angry' ? 'rgba(239, 68, 68, 0.4)' : 'rgba(0, 240, 255, 0.3)'}`,
              padding: '2px 8px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '10.5px'
            }}
          >
            {expression === 'angry' ? '🔥 BỐC HỎA / ANGRY' : expression === 'convinced' ? '💡 ĐÃ THUYẾT PHỤC' : '⚖️ ĐANG PHẢN BIỆN'}
          </span>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '2px' }}
            title={isExpanded ? 'Thu nhỏ' : 'Mở rộng phân cảnh'}
          >
            {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
        </div>
      </div>

      {/* Main Visual Arena */}
      <div 
        style={{ 
          minHeight: isExpanded ? '340px' : '220px', 
          position: 'relative',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at 50% 120%, rgba(124, 58, 237, 0.25) 0%, rgba(6, 9, 19, 0.9) 80%)'
        }}
      >
        {/* Background Neon Grid Floor */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: 'linear-gradient(to top, rgba(0, 240, 255, 0.1) 0%, transparent 100%)',
            borderTop: '1px dashed rgba(0, 240, 255, 0.2)',
            pointerEvents: 'none'
          }}
        />

        {/* Dynamic Reaction Banner Float */}
        {reactionEffect && (
          <div 
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 30,
              animation: 'bounce 0.6s ease',
              background: reactionEffect === 'fire' ? 'rgba(239, 68, 68, 0.9)' : 'rgba(0, 240, 255, 0.9)',
              color: '#FFFFFF',
              padding: '6px 18px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '13px',
              letterSpacing: '0.04em',
              boxShadow: '0 0 25px rgba(0, 240, 255, 0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {reactionEffect === 'fire' ? <Flame size={16} /> : <Zap size={16} />}
            <span>
              {reactionEffect === 'fire' ? '⚠️ ĐỐI TÁC GẮT GỎNG // TĂNG ĐÒN TÂM LÝ' : '✨ CISG ĐIỀU 79 // CHẶN PHẠT THÀNH CÔNG!'}
            </span>
          </div>
        )}

        {/* LEFT CHARACTER: Student Negotiator Avatar (GenZ Stylized) */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Comic Speech Bubble for User */}
          {lastUserMessage && (
            <div 
              style={{
                maxWidth: '260px',
                background: 'rgba(15, 23, 42, 0.92)',
                border: '1.5px solid #00F0FF',
                boxShadow: '0 4px 18px rgba(0, 240, 255, 0.3)',
                borderRadius: '14px 14px 14px 2px',
                padding: '10px 14px',
                fontSize: '12px',
                color: '#E2E8F0',
                marginBottom: '10px',
                lineHeight: 1.4,
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#00F0FF', letterSpacing: '0.05em' }}>
                  SINH VIÊN ĐÀM PHÁN
                </span>
                <span style={{ fontSize: '11px' }}>🎓</span>
              </div>
              <p style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {lastUserMessage}
              </p>
            </div>
          )}

          {/* Student Character Vector Graphic */}
          <div 
            style={{ 
              width: '100px', 
              height: '115px', 
              position: 'relative',
              filter: 'drop-shadow(0 0 14px rgba(0, 240, 255, 0.35))'
            }}
          >
            <svg viewBox="0 0 100 120" width="100" height="115">
              {/* Modern Cyber Hoodie / Suit */}
              <path d="M 25 70 Q 50 55 75 70 L 85 120 L 15 120 Z" fill="#1E293B" stroke="#00F0FF" strokeWidth="1.5" />
              <path d="M 45 70 L 50 100 L 55 70" stroke="#00F0FF" strokeWidth="1.5" fill="none" />
              {/* Head / Face */}
              <circle cx="50" cy="40" r="22" fill="#FFE4C4" />
              {/* Stylish Anime Hair */}
              <path d="M 28 35 Q 35 15 50 16 Q 65 15 72 35 Q 70 20 50 18 Q 30 20 28 35 Z" fill="#0F172A" />
              <path d="M 32 30 L 40 45 L 43 32 L 52 46 L 56 30 L 68 35" fill="#1E293B" />
              {/* GenZ Cyber Glasses / Visor */}
              <rect x="34" y="34" width="32" height="9" rx="3" fill="#00F0FF" opacity="0.8" />
              <line x1="36" y1="38" x2="64" y2="38" stroke="#FFFFFF" strokeWidth="1" />
              {/* Confident Smile */}
              <path d="M 44 52 Q 50 56 56 52" stroke="#475569" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* CENTER: VS Holographic Clash Badge */}
        <div 
          style={{ 
            position: 'absolute', 
            left: '50%', 
            bottom: '24px', 
            transform: 'translateX(-50%)', 
            textAlign: 'center',
            zIndex: 15
          }}
        >
          <div 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00F0FF 0%, #A855F7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '15px',
              color: '#060914',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
              margin: '0 auto 6px auto'
            }}
          >
            VS
          </div>
          <div style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>
            HỘI TRƯỜNG THỰC NGHIỆM
          </div>
        </div>

        {/* RIGHT CHARACTER: Opponent Anime AI Avatar */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Comic Speech Bubble for AI */}
          <div 
            style={{
              maxWidth: '280px',
              background: 'rgba(24, 15, 38, 0.94)',
              border: `1.5px solid ${expression === 'angry' ? '#EF4444' : '#A855F7'}`,
              boxShadow: expression === 'angry' ? '0 4px 20px rgba(239, 68, 68, 0.4)' : '0 4px 20px rgba(168, 85, 247, 0.35)',
              borderRadius: '14px 14px 2px 14px',
              padding: '10px 14px',
              fontSize: '12px',
              color: '#F8FAFC',
              marginBottom: '10px',
              lineHeight: 1.4,
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
              <span style={{ fontSize: '10px', fontWeight: 800, color: expression === 'angry' ? '#F87171' : '#C084FC', letterSpacing: '0.05em' }}>
                ĐỐI TÁC PHẢN BIỆN (AI)
              </span>
              <span style={{ fontSize: '11px' }}>
                {expression === 'angry' ? '💢' : expression === 'convinced' ? '🤝' : '💬'}
              </span>
            </div>
            <p style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {isAiTyping ? 'Đang phân tích lập luận của sinh viên...' : (lastAiMessage || 'Tôi đang lắng nghe đề xuất từ phía quý vị.')}
            </p>
          </div>

          {/* AI Character Graphic with Expression States */}
          <div 
            style={{ 
              width: '105px', 
              height: '115px', 
              position: 'relative',
              filter: expression === 'angry' ? 'drop-shadow(0 0 16px rgba(239, 68, 68, 0.5))' : 'drop-shadow(0 0 16px rgba(168, 85, 247, 0.4))'
            }}
          >
            <svg viewBox="0 0 100 120" width="105" height="115">
              {/* Corporate Suit & Tie */}
              <path d="M 20 70 Q 50 55 80 70 L 90 120 L 10 120 Z" fill="#181829" stroke={expression === 'angry' ? '#EF4444' : '#A855F7'} strokeWidth="1.5" />
              <polygon points="46,70 54,70 52,105 48,105" fill="#EF4444" />
              {/* Head / Face */}
              <circle cx="50" cy="38" r="22" fill="#FDE047" opacity="0.9" />
              {/* Anime Hair */}
              <path d="M 26 30 Q 32 10 50 12 Q 68 10 74 30 Q 70 14 50 14 Q 30 14 26 30 Z" fill="#3B0764" />
              {/* Eyes Expression */}
              {expression === 'angry' ? (
                <g stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="36" y1="34" x2="44" y2="38" />
                  <line x1="64" y1="34" x2="56" y2="38" />
                  <circle cx="41" cy="39" r="2" fill="#991B1B" />
                  <circle cx="59" cy="39" r="2" fill="#991B1B" />
                </g>
              ) : (
                <g stroke="#1E1B4B" strokeWidth="2">
                  <line x1="36" y1="36" x2="44" y2="36" strokeLinecap="round" />
                  <line x1="56" y1="36" x2="64" y2="36" strokeLinecap="round" />
                  <circle cx="40" cy="38" r="2" fill="#1E1B4B" />
                  <circle cx="60" cy="38" r="2" fill="#1E1B4B" />
                </g>
              )}
              {/* Mouth with animation */}
              {isAiTyping ? (
                <ellipse cx="50" cy="48" rx="4" ry="3" fill="#991B1B" />
              ) : expression === 'angry' ? (
                <path d="M 42 50 Q 50 44 58 50" stroke="#991B1B" strokeWidth="2" fill="none" strokeLinecap="round" />
              ) : (
                <line x1="44" y1="48" x2="56" y2="48" stroke="#1E1B4B" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}
