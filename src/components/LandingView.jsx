import React, { useState, useEffect, useRef } from 'react';
import { SCENARIOS } from '../data/scenarios';
import LogoSimLab from './LogoSimLab';
import { TRANSLATIONS } from '../data/i18n';
import { playAiVoice, stopAiVoice } from '../utils/speech';

export default function LandingView({ 
  onStartScenario, 
  onOpenHearingModal, 
  onOpenVideoGuide,
  onNavigate,
  language = 'vi' 
}) {
  const [activeFieldTab, setActiveFieldTab] = useState('law');
  const [soundPressed, setSoundPressed] = useState(false);
  const [isPlayingHeroVoice, setIsPlayingHeroVoice] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDisciplineFilter, setSelectedDisciplineFilter] = useState('all');

  const videoRef = useRef(null);
  const t = TRANSLATIONS[language] || TRANSLATIONS.vi;

  // Mobile Autoplay Enforcer for iOS Safari & Android Chrome
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const tryPlay = () => {
      if (video && video.paused) {
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {});
        }
      }
    };

    tryPlay();

    const handleFirstGesture = () => {
      tryPlay();
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
    };

    window.addEventListener('touchstart', handleFirstGesture, { passive: true });
    window.addEventListener('click', handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
    };
  }, []);

  // Entrance Web Animations API
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const expoEase = 'cubic-bezier(0.16, 1, 0.3, 1)';

    const lines = document.querySelectorAll('.hero-headline-line');
    lines.forEach((line, idx) => {
      line.animate(
        [
          { transform: 'translateY(115%)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ],
        { duration: 1000, delay: 300 + idx * 80, easing: expoEase, fill: 'backwards' }
      );
    });

    const ledeLines = document.querySelectorAll('.hero-lede-line');
    ledeLines.forEach((line, idx) => {
      line.animate(
        [
          { transform: 'translateY(12px)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ],
        { duration: 750, delay: 650 + idx * 50, easing: expoEase, fill: 'backwards' }
      );
    });
  }, []);

  const toggleSound = () => {
    const nextState = !soundPressed;
    setSoundPressed(nextState);
    if (!nextState) {
      stopAiVoice();
      setIsPlayingHeroVoice(false);
    } else {
      setIsPlayingHeroVoice(true);
      playAiVoice(SCENARIOS[0].persona.initialMessage, 'zh-CN');
      setTimeout(() => setIsPlayingHeroVoice(false), 8000);
    }
  };

  const disciplinesData = {
    law: {
      name: t.disciplines.law.name,
      sub: 'CISG 1980 • VIAC • SHIAC',
      quote: '"Trong tranh tụng quốc tế, thắng bại quyết định bởi chuỗi nghĩa vụ và căn cứ loại trừ trách nhiệm."',
      color: '#38BDF8',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
      imageCaption: 'Phiên giải quyết tranh chấp trọng tài quốc tế',
      casesCount: 12,
      highlights: [
        'Miễn trừ nghĩa vụ do trở ngại khách quan hàng hải (CISG Điều 79)',
        'Phân định điểm chuyển giao rủi ro CIF/FOB tại cảng Thượng Hải',
        'Thủ tục hòa giải thương lượng bắt buộc trước khi mở phiên trọng tài'
      ]
    },
    economics: {
      name: t.disciplines.economics.name,
      sub: 'MACROECONOMICS & HEDGING',
      quote: '"Mọi quyết định đàm phán thương mại suy cho cùng đều là bài toán tối ưu hóa chi phí cận biên và bảo toàn thanh khoản."',
      color: '#38BDF8',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
      imageCaption: 'Trạm giám sát thị trường tài chính & quản trị tỷ giá',
      casesCount: 9,
      highlights: [
        'Cơ chế trượt giá có kiểm soát (Band Corridor 3%-5%) gắn tỷ giá USD/EUR',
        'Phân tích độ nhạy chi phí lưu kho bãi và lạm phát nguyên vật liệu',
        'Cấu trúc dòng tiền chia 3 giai đoạn bảo vệ hạn mức nợ ngân hàng'
      ]
    },
    management: {
      name: t.disciplines.management.name,
      sub: 'CRISIS PR & LEADERSHIP',
      quote: '"Khủng hoảng không phá hủy doanh nghiệp, cách lãnh đạo phản hồi công chúng mới quyết định số phận thương hiệu."',
      color: '#94A3B8',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      imageCaption: 'Hội đồng quản trị điều hành phòng họp khủng hoảng',
      casesCount: 11,
      highlights: [
        'Xử lý khủng hoảng rò rỉ email sa thải hàng loạt trên Threads/LinkedIn',
        'Tái cấu trúc ban điều hành khủng hoảng và ổn định tinh thần nhân sự',
        'Gói hỗ trợ tài chính chuyển tiếp nhân văn bảo vệ giá trị cổ phiếu'
      ]
    },
    business: {
      name: t.disciplines.business.name,
      sub: 'E-COMMERCE & TIKTOK SHOP',
      quote: '"Bán lẻ thời đại số là nghệ thuật cân bằng giữa sức mạnh Mega-Live của KOLs và sự sống còn của kênh truyền thống."',
      color: '#38BDF8',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
      imageCaption: 'Trung tâm vận hành thương mại điện tử & kênh phân phối số',
      casesCount: 8,
      highlights: [
        'Hòa giải đại chiến phá giá Mega-Live TikTok Shop 12.000 đơn hàng',
        'Bảo vệ chính sách giá sàn niêm yết (MAP) cho 300 đại lý phân phối',
        'Phân tách SKU độc quyền online kết hợp combo voucher quà tặng'
      ]
    },
    languages: {
      name: t.disciplines.languages.name,
      sub: 'COMMERCIAL LINGUISTICS',
      quote: '"Một từ dịch sai ngữ cảnh trong hợp đồng ngoại thương có thể trả giá bằng hàng triệu đô lưu bãi tại cửa khẩu."',
      color: '#10B981',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      imageCaption: 'Hội nghị đàm phán ngoại giao & dịch thuật thương mại song phương',
      casesCount: 10,
      highlights: [
        'Tranh chấp ngữ nghĩa bản dịch Trung - Việt tại cửa khẩu Hữu Nghị',
        'Nghệ thuật sử dụng kính ngữ thương mại tiếng Trung (和气生财, 互利共赢)',
        'Điều khoản ngôn ngữ tham chiếu tối cao theo quy chuẩn Incoterms'
      ]
    },
    commerce: {
      name: t.disciplines.commerce.name,
      sub: 'INTERNATIONAL TRADE & PORTS',
      quote: '"Ngoại thương là làm chủ quy tắc xuất xứ C/O, thủ tục hải quan cảng biển và rủi ro phòng vệ thương mại."',
      color: '#F59E0B',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      imageCaption: 'Hệ thống cảng biển container & kiểm tra hải quan',
      casesCount: 14,
      highlights: [
        'Xử lý 45 container dệt may kẹt cảng Thượng Hải nghi vấn C/O Form E',
        'Chứng minh hàm lượng giá trị khu vực RVC đạt 42.5% theo ACFTA',
        'Thủ tục nộp bảo lãnh tạm giải phóng hàng tươi sống lưu bãi'
      ]
    }
  };

  const currentDiscipline = disciplinesData[activeFieldTab] || disciplinesData.law;

  const filteredScenarios = selectedDisciplineFilter === 'all' 
    ? SCENARIOS 
    : SCENARIOS.filter(s => s.field === selectedDisciplineFilter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '56px', paddingBottom: '88px', overflowX: 'hidden' }}>
      
      {/* 1. FULL-VIEWPORT HERO STAGE - TINH GỌN, VỪA VẶN, KHÔNG LÒE LOẸT, KHÔNG DÙNG ICON */}
      <section 
        className="hero-stage" 
        style={{ 
          position: 'relative', 
          width: '100vw', 
          height: '100dvh', 
          overflow: 'hidden', 
          backgroundColor: '#060913' 
        }}
      >
        {/* Remote Video Background */}
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            preload="auto"
            poster="./assets/hero_poster.jpg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '50% 40%',
              display: 'block'
            }}
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261005_182346_a590ff3b-72e5-41ce-8f69-a8c823eaecaa.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Authentic Shade Overlays */}
        <div className="shade-h" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />
        <div className="shade-v" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />
        <div className="shade-radial" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />

        {/* TOP BAR: FLOATING PILL NAVIGATION (THU NHỎ GỌN GÀNG, KHÔNG DÙNG ICON) */}
        <header 
          className="hero-top-bar" 
          style={{
            position: 'absolute',
            top: '20px',
            left: '24px',
            right: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 20
          }}
        >
          {/* Logo Pill on Left */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              height: '38px',
              padding: '0 10px 0 4px',
              borderRadius: '9999px',
              background: 'rgba(6, 9, 19, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.35)'
            }}
          >
            <LogoSimLab size="sm" />
          </div>

          {/* Center Desktop Nav Pill */}
          <nav
            className="hero-nav-pill-desktop"
            style={{
              height: '38px',
              background: 'rgba(6, 9, 19, 0.88)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '16px',
              paddingRight: '3px',
              fontSize: '12px',
              fontWeight: 500,
              gap: '4px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginRight: '12px' }}>
              {/* 1. Trang Chủ */}
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ color: '#F8FAFC', fontWeight: 600 }}
              >
                {t.nav.home}
              </a>

              {/* 2. Lĩnh Vực (6 Ngành) */}
              <a 
                href="#disciplines-section" 
                style={{ color: '#94A3B8' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
              >
                {t.nav.disciplines}
              </a>

              {/* 3. Mục Đích / Sứ Mệnh */}
              <a 
                href="#mission" 
                onClick={(e) => { e.preventDefault(); onNavigate('mission'); }}
                style={{ color: '#94A3B8' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
              >
                {t.nav.mission}
              </a>

              {/* 4. Lịch Sử */}
              <a 
                href="#history" 
                onClick={(e) => { e.preventDefault(); onNavigate('history'); }}
                style={{ color: '#94A3B8' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
              >
                {t.nav.history}
              </a>

              {/* 5. Video Hướng Dẫn YouTube (Chữ thuần, không dùng icon) */}
              <button
                onClick={onOpenVideoGuide}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94A3B8',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: 0
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F87171'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
              >
                YouTube
              </button>
            </div>

            {/* Nút Vào Hearing trong thanh pill - Gọn gàng, chữ thuần */}
            <button
              onClick={onOpenHearingModal}
              style={{
                height: '30px',
                padding: '0 13px',
                background: '#0284C7',
                color: '#FFFFFF',
                borderRadius: '9999px',
                fontSize: '11.5px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                transition: 'background 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#0369A1'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#0284C7'}
            >
              <span>{t.nav.enterHearing}</span>
            </button>
          </nav>

          {/* Right Controls: Ambient Sound (Pure text toggle) + Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={toggleSound}
              aria-label="Ambient speech sound"
              style={{
                height: '34px',
                padding: '0 12px',
                borderRadius: '9999px',
                background: 'rgba(6, 9, 19, 0.8)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: soundPressed ? '#38BDF8' : '#94A3B8',
                fontSize: '11.5px',
                fontWeight: 500
              }}
            >
              {soundPressed ? 'Âm thanh: Bật' : 'Âm thanh: Tắt'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-hamburger-btn"
              style={{
                height: '34px',
                padding: '0 12px',
                borderRadius: '9999px',
                background: 'rgba(6, 9, 19, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F8FAFC',
                fontSize: '11.5px',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? 'Đóng' : 'Menu'}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div 
            style={{
              position: 'absolute',
              top: '64px',
              left: '16px',
              right: '16px',
              background: 'rgba(6, 9, 19, 0.98)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '14px',
              padding: '16px',
              zIndex: 30,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              boxShadow: '0 16px 36px rgba(0,0,0,0.8)'
            }}
          >
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#38BDF8', fontSize: '14px' }}
            >
              Trang Chủ
            </a>
            <a 
              href="#disciplines-section" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#F8FAFC', fontSize: '14px' }}
            >
              Lĩnh Vực (6 Ngành Đào Tạo)
            </a>
            <a 
              href="#mission" 
              onClick={() => { setMobileMenuOpen(false); onNavigate('mission'); }}
              style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#CBD5E1', fontSize: '14px' }}
            >
              Mục Đích & Sứ Mệnh
            </a>
            <a 
              href="#history" 
              onClick={() => { setMobileMenuOpen(false); onNavigate('history'); }}
              style={{ padding: '8px 0', color: '#CBD5E1', fontSize: '14px' }}
            >
              Lịch Sử Mô Phỏng
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVideoGuide();
                }}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', height: '38px', color: '#FCA5A5' }}
              >
                Xem Video YouTube HDSD
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHearingModal();
                }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', height: '38px' }}
              >
                Vào Hearing Ngay
              </button>
            </div>
          </div>
        )}

        {/* BOTTOM HERO CONTENT (THU NHỎ LẠI XÍU NỮA ĐI LÀ ĐẸP, MÀU CHỮ TRẦM SANG TRỌNG) */}
        <div 
          className="hero-bottom-content" 
          style={{
            position: 'absolute',
            bottom: '28px',
            left: '28px',
            maxWidth: '620px',
            zIndex: 15
          }}
        >
          {/* Subtitle tag - Tinh gọn, không lòe loẹt, không emoji */}
          <div
            style={{
              fontFamily: 'var(--font-brand)',
              fontWeight: 600,
              color: '#94A3B8',
              fontSize: '11px',
              letterSpacing: '0.08em',
              marginBottom: '8px',
              textTransform: 'uppercase'
            }}
          >
            SIMLAB.AI • INTERDISCIPLINARY LAB • BỨT PHÁ GIỚI HẠN
          </div>

          {/* Headline title - Thu nhỏ gọn gàng, vừa mắt */}
          <h1
            className="hero-headline-title font-display"
            style={{
              fontWeight: 400,
              fontSize: 'clamp(24px, 3.2vw, 38px)',
              lineHeight: 1.15,
              color: '#F8FAFC',
              marginBottom: '12px'
            }}
          >
            <span className="headline-line-mask">
              <span className="hero-headline-line" style={{ display: 'block', letterSpacing: '-0.01em' }}>Where</span>
            </span>
            <span className="headline-line-mask">
              <span className="hero-headline-line" style={{ display: 'block', letterSpacing: '-0.02em' }}>Interdisciplinary AI</span>
            </span>
            <span className="headline-line-mask">
              <span className="hero-headline-line" style={{ display: 'block', letterSpacing: '-0.015em' }}>Transforms The Boardroom</span>
            </span>
          </h1>

          {/* Lede text */}
          <div
            className="hero-lede-text"
            style={{
              fontFamily: 'var(--font-text)',
              fontWeight: 400,
              fontSize: '13.5px',
              lineHeight: 1.5,
              color: '#94A3B8',
              marginBottom: '18px'
            }}
          >
            <span className="hero-lede-line" style={{ display: 'block' }}>
              Hệ thống mô phỏng Role-play liên ngành: Kinh tế, Quản trị, Kinh doanh, Luật, Ngôn ngữ & Thương mại.
            </span>
            <span className="hero-lede-line" style={{ display: 'block' }}>
              Rèn luyện bản lĩnh đàm phán, tranh tụng trọng tài và xử lý khủng hoảng đa ngữ cùng AI.
            </span>
          </div>

          {/* Actions Container - Nút màu thanh lịch, chữ thuần không icon */}
          <div className="hero-actions-container" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              id="hero-cta-btn"
              onClick={onOpenHearingModal}
              className="btn-cta-pill"
              style={{
                height: '38px',
                padding: '0 18px',
                fontSize: '12.5px',
                background: '#0B1124',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#F8FAFC'
              }}
            >
              <span>Bắt Đầu Phiên Thẩm Vấn</span>
            </button>

            <a
              href="#disciplines-section"
              style={{
                fontSize: '12.5px',
                fontWeight: 500,
                color: '#CBD5E1',
                padding: '6px 0',
                display: 'inline-flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#CBD5E1'}
            >
              <span>Khám Phá 6 Lĩnh Vực Đào Tạo</span>
            </a>
          </div>
        </div>

        {/* Scroll cue (desktop only) */}
        <a
          href="#disciplines-section"
          className="hero-scroll-cue-desktop"
          style={{
            position: 'absolute',
            bottom: '28px',
            right: '28px',
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '11.5px',
            color: '#64748B',
            zIndex: 15
          }}
        >
          <span>Cuộn xem chi tiết</span>
        </a>

      </section>

      {/* 2. SECTION: 6 LĨNH VỰC ĐÀO TẠO THỰC NGHIỆM (THÊM HÌNH ẢNH CHÂN THỰC, KHÔNG DÙNG ICON) */}
      <section id="disciplines-section" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 20px', width: '100%' }}>
        <div 
          style={{ 
            background: '#0B1124', 
            borderRadius: '20px', 
            padding: 'clamp(20px, 3.5vw, 32px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Section Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <span 
                style={{ 
                  background: 'rgba(56, 189, 248, 0.1)', 
                  color: '#38BDF8', 
                  border: '1px solid rgba(56, 189, 248, 0.25)', 
                  padding: '3px 10px', 
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  display: 'inline-block',
                  marginBottom: '8px'
                }}
              >
                INTERDISCIPLINARY DISCIPLINES // 6 NGÀNH ĐÀO TẠO
              </span>
              <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: 700, color: '#F8FAFC', margin: 0 }}>
                {t.disciplines.title}
              </h2>
              <p style={{ fontSize: '13.5px', color: '#94A3B8', marginTop: '6px' }}>
                {t.disciplines.desc}
              </p>
            </div>

            {/* 6 Tabs for Disciplines - Clean pill buttons without flashy neon */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                background: 'rgba(6, 9, 19, 0.8)', 
                padding: '4px', 
                borderRadius: '10px', 
                border: '1px solid rgba(255, 255, 255, 0.08)',
                gap: '4px'
              }}
            >
              {[
                { key: 'law', label: '1. Luật' },
                { key: 'economics', label: '2. Kinh Tế' },
                { key: 'management', label: '3. Quản Trị' },
                { key: 'business', label: '4. Kinh Doanh' },
                { key: 'languages', label: '5. Ngôn Ngữ' },
                { key: 'commerce', label: '6. Thương Mại' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFieldTab(tab.key)}
                  style={{
                    background: activeFieldTab === tab.key ? '#1E293B' : 'transparent',
                    color: activeFieldTab === tab.key ? '#F8FAFC' : '#94A3B8',
                    border: activeFieldTab === tab.key ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
                    borderRadius: '7px',
                    padding: '7px 12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Discipline Card Showcase (Thêm nhiều hình ảnh chân thực theo yêu cầu) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
            
            {/* Column 1: Photographic Image Showcase */}
            <div 
              style={{ 
                borderRadius: '14px', 
                overflow: 'hidden', 
                position: 'relative',
                minHeight: '260px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: '#070C1B'
              }}
            >
              <img 
                src={currentDiscipline.image} 
                alt={currentDiscipline.name} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }} 
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(6, 9, 19, 0.92) 0%, rgba(6, 9, 19, 0.3) 60%, transparent 100%)' 
                }} 
              />
              <div style={{ position: 'absolute', bottom: '14px', left: '16px', right: '16px' }}>
                <span style={{ fontSize: '11px', color: '#38BDF8', fontWeight: 600, display: 'block', marginBottom: '3px' }}>
                  {currentDiscipline.casesCount} VỤ VIỆC SẴN SÀNG
                </span>
                <span style={{ fontSize: '13px', color: '#F1F5F9', fontWeight: 500, lineHeight: 1.4 }}>
                  {currentDiscipline.imageCaption}
                </span>
              </div>
            </div>

            {/* Column 2: Field Overview & Highlights (Không icon, gạch đầu dòng thanh lịch) */}
            <div 
              style={{ 
                background: 'rgba(6, 9, 19, 0.75)', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderLeft: '4px solid #38BDF8',
                borderRadius: '14px',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#38BDF8', marginBottom: '8px', letterSpacing: '0.04em' }}>
                  {currentDiscipline.sub}
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#F8FAFC', marginBottom: '10px' }}>
                  {currentDiscipline.name}
                </h3>

                <p style={{ fontSize: '13px', color: '#CBD5E1', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '18px' }}>
                  {currentDiscipline.quote}
                </p>
              </div>

              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#94A3B8', marginBottom: '8px', textTransform: 'uppercase' }}>
                  CĂN CỨ VẬN DỤNG & ĐÒN BẨY ĐÀM PHÁN:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {currentDiscipline.highlights.map((hl, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: '#E2E8F0' }}>
                      <span style={{ color: '#38BDF8', fontWeight: 700 }}>—</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Case study launch card */}
            <div 
              style={{ 
                background: 'rgba(17, 26, 54, 0.75)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '14px',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#CBD5E1', background: 'rgba(255, 255, 255, 0.08)', padding: '3px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '10px' }}>
                  CASE STUDY THỰC TẾ ĐANG MỞ
                </span>

                {SCENARIOS.find(s => s.field === activeFieldTab) ? (
                  <>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px', lineHeight: 1.35 }}>
                      {SCENARIOS.find(s => s.field === activeFieldTab)?.title}
                    </h4>
                    <p style={{ fontSize: '12.5px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '12px' }}>
                      {SCENARIOS.find(s => s.field === activeFieldTab)?.context?.overview}
                    </p>

                    <div style={{ padding: '9px 12px', background: 'rgba(6, 9, 19, 0.85)', borderRadius: '8px', borderLeft: '3px solid #38BDF8', marginBottom: '14px' }}>
                      <span style={{ fontSize: '10.5px', color: '#38BDF8', fontWeight: 600, display: 'block', marginBottom: '2px' }}>
                        Mục tiêu sinh viên:
                      </span>
                      <span style={{ fontSize: '12px', color: '#CBD5E1' }}>
                        {SCENARIOS.find(s => s.field === activeFieldTab)?.context?.coreObjectives?.[0]}
                      </span>
                    </div>
                  </>
                ) : (
                  <p style={{ fontSize: '12.5px', color: '#94A3B8' }}>
                    Kịch bản mẫu được lấy trực tiếp từ các án lệ và vụ việc truyền thông thực tế.
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <button
                  onClick={() => {
                    const match = SCENARIOS.find(s => s.field === activeFieldTab) || SCENARIOS[0];
                    onStartScenario(match);
                  }}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center', padding: '9px 14px', fontSize: '12.5px' }}
                >
                  <span>Vào Thực Nghiệm Ca Này</span>
                </button>

                <button
                  onClick={onOpenHearingModal}
                  className="btn-secondary"
                  style={{ padding: '9px 12px', fontSize: '12.5px' }}
                >
                  <span>Ngẫu Nhiên</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION: VISUAL SIMULATION ARENA HIGHLIGHT (CHÂN THỰC, KHÔNG ICON LÒE LOẸT) */}
      <section style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 20px', width: '100%' }}>
        <div 
          style={{ 
            background: '#0B1124',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: 'clamp(20px, 3.5vw, 36px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '28px',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38BDF8', padding: '3px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, marginBottom: '10px' }}>
              TÍNH NĂNG ĐỘC QUYỀN // VISUAL SIMULATION STAGE
            </div>

            <h2 style={{ fontSize: 'clamp(20px, 3.2vw, 26px)', fontWeight: 700, color: '#F8FAFC', marginBottom: '12px', lineHeight: 1.3 }}>
              Kiến Tạo Phân Cảnh Mô Phỏng Tương Tác Trực Quan
            </h2>

            <p style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '18px' }}>
              SimLab tích hợp phân cảnh tương tác trực quan mô phỏng đối tượng phản biện với biểu cảm sắc thái biến thiên theo chất lượng lập luận, hội thoại bám sát bối cảnh và tự động ghi chép biên bản phiên thẩm vấn số.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <div style={{ fontSize: '13px', color: '#CBD5E1', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#38BDF8', fontWeight: 700 }}>—</span>
                <span><b>Biểu cảm AI đa chiều:</b> Biến thiên theo từng căn cứ viện dẫn và phương án nhượng bộ.</span>
              </div>
              <div style={{ fontSize: '13px', color: '#CBD5E1', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#38BDF8', fontWeight: 700 }}>—</span>
                <span><b>Thoại bong bóng trực tiếp:</b> Cập nhật lập luận trực diện giữa đoàn đàm phán và đối tác.</span>
              </div>
              <div style={{ fontSize: '13px', color: '#CBD5E1', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#38BDF8', fontWeight: 700 }}>—</span>
                <span><b>Tự động ghi chép biên bản:</b> Lưu trữ dữ liệu phiên thẩm vấn thành bảng điểm phân tích.</span>
              </div>
            </div>

            <button
              onClick={() => onStartScenario(SCENARIOS[0])}
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '13px' }}
            >
              <span>Trải Nghiệm Mô Phỏng Trực Quan</span>
            </button>
          </div>

          {/* Visual Photographic Showcase */}
          <div 
            style={{ 
              borderRadius: '16px', 
              overflow: 'hidden', 
              position: 'relative',
              height: '260px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: '#070C1B'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" 
              alt="Moot court and negotiation" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div 
              style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(6, 9, 19, 0.95) 0%, rgba(6, 9, 19, 0.3) 60%, transparent 100%)' 
              }} 
            />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
              <span style={{ fontSize: '11px', color: '#38BDF8', fontWeight: 600, display: 'block', marginBottom: '2px' }}>
                MÔ HÌNH PHÒNG XỬ ÁN & ĐÀM PHÁN GIẢ ĐỊNH
              </span>
              <span style={{ fontSize: '13px', color: '#F1F5F9' }}>
                Không gian thực nghiệm tranh tụng và giải quyết tranh chấp chuẩn quốc tế
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEW SECTION: KHÔNG GIAN THỰC NGHIỆM & MÔI TRƯỜNG ĐÀO TẠO (THÊM NHIỀU ẢNH THỰC TẾ) */}
      <section style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 20px', width: '100%' }}>
        <div style={{ marginBottom: '20px' }}>
          <span 
            style={{ 
              background: 'rgba(255, 255, 255, 0.06)', 
              color: '#94A3B8', 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              padding: '3px 10px', 
              borderRadius: '9999px', 
              fontSize: '11px', 
              fontWeight: 600, 
              display: 'inline-block', 
              marginBottom: '8px' 
            }}
          >
            FACILITIES & ENVIRONMENTS // CƠ SỞ THỰC NGHIỆM
          </span>
          <h2 style={{ fontSize: 'clamp(20px, 3.2vw, 26px)', fontWeight: 700, color: '#F8FAFC', margin: 0 }}>
            Không Gian Giả Lập & Môi Trường Đào Tạo
          </h2>
          <p style={{ fontSize: '13px', color: '#94A3B8', marginTop: '6px' }}>
            Hệ thống phòng mô phỏng chuẩn hóa kết nối đồng bộ giữa nền tảng AI và nghiệp vụ thực tiễn.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {[
            {
              title: 'Phòng Trọng Tài & Phiên Tòa Giả Định',
              caption: 'Rèn luyện kỹ năng tố tụng, đối soát hợp đồng CISG và tranh tụng trước trọng tài.',
              image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Trạm Dữ Liệu Kinh Tế & Phân Tích Tài Chính',
              caption: 'Theo dõi biến động tỷ giá, lạm phát và thiết lập hành lang phòng ngừa rủi ro.',
              image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Phòng Điều Hành Khủng Hoảng Doanh Nghiệp',
              caption: 'Xử lý khủng hoảng truyền thông mạng xã hội, phát ngôn và đàm phán nhân sự.',
              image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Hệ Thống Logistics & Cảng Biển Quốc Tế',
              caption: 'Thực hành chứng từ C/O Form E, vận tải đa phương thức và thủ tục hải quan cảng.',
              image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80'
            }
          ].map((env, idx) => (
            <div 
              key={idx}
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                background: '#0B1124',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '150px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={env.image} 
                  alt={env.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '14px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#F8FAFC', marginBottom: '6px' }}>
                  {env.title}
                </h4>
                <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.45 }}>
                  {env.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SECTION: SCENARIOS REPOSITORY (THÊM ẢNH BÌA CHO TỪNG CA, KHÔNG DÙNG ICON) */}
      <section id="cases" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 20px', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', padding: '3px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, marginBottom: '6px' }}>
              KHO TÌNH HUỐNG THỰC CHIẾN
            </div>
            <h2 style={{ fontSize: 'clamp(20px, 3.2vw, 26px)', fontWeight: 700, color: '#F8FAFC', margin: 0 }}>
              Kho Kịch Bản Thực Nghiệm 6 Lĩnh Vực
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {[
              { key: 'all', label: 'Tất cả' },
              { key: 'law', label: 'Luật' },
              { key: 'economics', label: 'Kinh Tế' },
              { key: 'management', label: 'Quản Trị' },
              { key: 'business', label: 'Kinh Doanh' },
              { key: 'languages', label: 'Ngôn Ngữ' },
              { key: 'commerce', label: 'Thương Mại' }
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setSelectedDisciplineFilter(f.key)}
                style={{
                  background: selectedDisciplineFilter === f.key ? '#1E293B' : 'rgba(11, 17, 36, 0.8)',
                  color: selectedDisciplineFilter === f.key ? '#F8FAFC' : '#94A3B8',
                  border: selectedDisciplineFilter === f.key ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '5px 11px',
                  borderRadius: '9999px',
                  fontSize: '11.5px',
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scenarios Grid Cards (Mỗi thẻ có ảnh bìa chân thực) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '18px' }}>
          {filteredScenarios.map((sc) => (
            <div 
              key={sc.id} 
              style={{
                background: '#0B1124',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
                boxShadow: '0 6px 20px rgba(0,0,0,0.35)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Photo Banner */}
              <div style={{ height: '140px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={sc.image} 
                  alt={sc.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11, 17, 36, 0.95) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(6, 9, 19, 0.85)', padding: '2px 8px', borderRadius: '4px', fontSize: '10.5px', color: '#F1F5F9', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  {sc.fieldName}
                </div>
                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(6, 9, 19, 0.85)', padding: '2px 8px', borderRadius: '4px', fontSize: '10.5px', color: '#94A3B8' }}>
                  {sc.duration}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#F8FAFC', marginBottom: '6px', lineHeight: 1.35 }}>
                    {sc.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '12px' }}>
                    {sc.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                    {sc.tags?.map((tag, idx) => (
                      <span key={idx} style={{ fontSize: '10.5px', color: '#CBD5E1', background: 'rgba(255, 255, 255, 0.05)', padding: '2px 6px', borderRadius: '4px' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onStartScenario(sc)}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '8px', fontSize: '12.5px' }}
                >
                  <span>Bắt Đầu Phiên Này</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
