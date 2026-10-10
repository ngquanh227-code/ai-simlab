import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, ArrowUpRight, Scale, Languages, Shield, TrendingUp, 
  Check, ChevronRight, Play, Volume2, Sparkles, Sliders, Users, 
  FileText, Award, BookmarkCheck, ExternalLink, HelpCircle
} from 'lucide-react';
import { SCENARIOS, FOUR_PILLARS } from '../data/scenarios';
import RadarChart from './RadarChart';
import { playAiVoice, stopAiVoice } from '../utils/speech';

export default function LandingView({ onStartScenario, onOpenStudio }) {
  const [activePillarTab, setActivePillarTab] = useState('law');
  const [compareMetric, setCompareMetric] = useState('after'); // 'before' | 'after'
  const [soundPressed, setSoundPressed] = useState(true);
  const [isPlayingHeroVoice, setIsPlayingHeroVoice] = useState(false);

  const videoRef = useRef(null);
  const headlineRef = useRef(null);

  // Entrance Web Animations API
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const expoEase = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const quartEase = 'cubic-bezier(0.25, 1, 0.5, 1)';

    // Headline lines rising from clip-mask
    const lines = document.querySelectorAll('.hero-headline-line');
    lines.forEach((line, idx) => {
      line.animate(
        [
          { transform: 'translateY(115%)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ],
        { duration: 1050, delay: 350 + idx * 90, easing: expoEase, fill: 'backwards' }
      );
    });

    // Lede lines
    const ledeLines = document.querySelectorAll('.hero-lede-line');
    ledeLines.forEach((line, idx) => {
      line.animate(
        [
          { transform: 'translateY(14px)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ],
        { duration: 800, delay: 750 + idx * 60, easing: expoEase, fill: 'backwards' }
      );
    });

    // Action CTA
    const cta = document.getElementById('hero-cta-btn');
    if (cta) {
      cta.animate(
        [
          { transform: 'translateY(12px)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ],
        { duration: 800, delay: 950, easing: expoEase, fill: 'backwards' }
      );
    }
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

  const pillarDetails = {
    law: {
      title: 'Luật Kinh Tế & Trọng Tài Quốc Tế',
      latinCode: 'LEX MERCATORIA // JURISPRUDENCE',
      badge: 'Căn cứ CISG 1980 & VIAC / SHIAC',
      quote: '"Trong tranh tụng thương mại quốc tế, thắng thua không nằm ở việc ai nói to hơn, mà ở việc chứng minh được chuỗi nghĩa vụ và điều khoản loại trừ trách nhiệm."',
      topics: [
        { code: 'CISG § 79', name: 'Miễn trừ nghĩa vụ do trở ngại khách quan (Exemption of Force Majeure)', impact: 'Tiết kiệm 85% chi phí phạt vi phạm hợp đồng' },
        { code: 'INCOTERMS 2020', name: 'Phân định điểm chuyển giao rủi ro CIF / FOB tại cảng Thượng Hải', impact: 'Bác bỏ trách nhiệm hư hại hàng hóa trong hải trình' },
        { code: 'SHIAC RULES', name: 'Thủ tục hòa giải thương lượng bắt buộc trước khi mở phiên trọng tài', impact: 'Kéo dài thời hạn thanh toán thêm 60 ngày' }
      ]
    },
    lang: {
      title: 'Ngôn Ngữ & Ngoại Giao Thương Mại',
      latinCode: 'LINGUA COMMERCII // CROSS-CULTURAL',
      badge: '商务中文 (Business Chinese) & Commercial English',
      quote: '"Đàm phán với đối tác Á Đông đòi hỏi nghệ thuật giữ thể diện (Mianzi). Một từ ngữ ngoại giao đúng lúc sẽ cứu vãn hợp đồng hàng triệu USD mà văn bản pháp lý cứng nhắc không làm được."',
      topics: [
        { code: 'KÍNH NGỮ', name: 'Vận dụng kính ngữ thương mại tiếng Trung ("陈总", "贵司", "和气生财")', impact: 'Chuyển hóa lập trường đối tác từ đối đầu sang hợp tác' },
        { code: 'DIPLOMATIC TONE', name: 'Ngôn ngữ trung lập tránh quy chụp lỗi vi phạm trước khi có kết luận kiểm toán', impact: 'Bảo toàn danh tiếng doanh nghiệp trên thị trường quốc tế' },
        { code: 'CROSS-CULTURE', name: 'Thấu hiểu văn hóa ra quyết định theo thứ bậc của doanh nghiệp Thượng Hải', impact: 'Tạo cơ sở cho thỏa thuận bảo lưu điều khoản mật' }
      ]
    },
    mgmt: {
      title: 'Quản Trị Chiến Lược & Khủng Hoảng',
      latinCode: 'CRISIS MANAGEMENT & RISK GOVERNANCE',
      badge: 'Cross-functional Task Force Protocol',
      quote: '"Khủng hoảng không phá hủy doanh nghiệp; cách ban giám đốc phản ứng trong 48 giờ đầu tiên mới quyết định sự sống còn của thương hiệu."',
      topics: [
        { code: 'TASK FORCE', name: 'Thành lập Tổ công tác điều phối khủng hoảng liên ngành (Pháp lý - Logistics - Tài chính)', impact: 'Rút ngắn 70% thời gian xử lý sự cố hàng hải' },
        { code: 'PR PROTOCOL', name: 'Kiểm soát thông tin nội bộ và phát ngôn thống nhất trước truyền thông', impact: 'Ngăn chặn tin đồn thất thiệt làm sụt giảm giá cổ phiếu' },
        { code: 'SUPPLY CHAIN', name: 'Phương án kích hoạt chuỗi cung ứng dự phòng và lưu kho phân tán', impact: 'Bảo đảm cam kết giao hàng cho các khách hàng thứ cấp' }
      ]
    },
    econ: {
      title: 'Kinh Tế & Tối Ưu Chi Phí',
      latinCode: 'FINANCIAL VIABILITY & CAPITAL ALLOCATION',
      badge: 'Working Capital & Debt Covenant Safeguard',
      quote: '"Mọi giải pháp pháp lý hoàn hảo trên lý thuyết đều vô nghĩa nếu nó làm cạn kiệt dòng tiền mặt và khiến doanh nghiệp vỡ nợ ngắn hạn."',
      topics: [
        { code: 'CASHFLOW', name: 'Cấu trúc thanh toán giãn nở 3 kỳ kèm cam kết bảo lãnh thư tín dụng (L/C)', impact: 'Bảo toàn 65% dự trữ tiền mặt khả dụng của quý' },
        { code: 'DAMAGES CAP', name: 'Giới hạn mức bồi thường thực tế có hóa đơn kiểm toán, bác bỏ tiền phạt khống', impact: 'Tiết kiệm ròng $950,000 USD chi phí bồi thường' },
        { code: 'FUTURE REVENUE', name: 'Dùng cam kết đơn hàng tương lai làm đòn bẩy bù đắp tổn thất lưu kho đối tác', impact: 'Khóa chặt giá nguồn nguyên liệu linh kiện cho năm sau' }
      ]
    }
  };

  const currentPillar = pillarDetails[activePillarTab];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '96px', paddingBottom: '96px' }}>
      
      {/* FULL-VIEWPORT HERO STAGE (EXACT RIVERINE ARCHITECTURE) */}
      <section style={{ position: 'relative', width: '100vw', height: '100dvh', overflow: 'hidden', backgroundColor: '#03080B' }}>
        
        {/* Remote Video Background */}
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
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

        {/* The 3 Shade Overlays */}
        <div className="shade-h" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />
        <div className="shade-v" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />
        <div className="shade-radial" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />

        {/* UI Overlay Layer */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'auto' }}>
          
          {/* Top Left Logo Pill */}
          <a
            href="#"
            style={{
              position: 'absolute',
              top: 'calc(40 * var(--u))',
              left: 'calc(48 * var(--u))',
              width: 'calc(104 * var(--u))',
              height: 'calc(46 * var(--u))',
              borderRadius: '9999px',
              background: 'rgba(150, 220, 130, 0.035)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 calc(2 * var(--u))',
              gap: 'calc(8 * var(--u))',
              textDecoration: 'none'
            }}
            aria-label="simlab.ai home"
          >
            <div style={{
              width: 'calc(42 * var(--u))',
              height: 'calc(42 * var(--u))',
              borderRadius: '50%',
              background: 'var(--logo-disc)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg viewBox="0 0 46 46" style={{ width: 'calc(34 * var(--u))', height: 'calc(34 * var(--u))' }}>
                <path d="M24.2 37V24" stroke="var(--icon-teal)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <path d="M19.8 39.3c1.2-1.9 2.8-2.7 4.4-2.7s3.2.8 4.4 2.7" stroke="var(--icon-teal)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <path d="M23.8 30.2c-2.8-.6-5.5-2.6-7.2-5-2-1.8-5.2-2-7-4.2-1.4-1.8-1.4-4.2 0-6 2-3 5.8-5.2 8.8-6.2 1.4-.5 2.8-1 4.2-1.3" stroke="var(--icon-teal)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <path d="M14.8 23V13.2c0-1.4.8-2.6 2.4-3.4" stroke="var(--icon-teal)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <path d="M24 24.2c-1.8-1.8-3.2-3.8-3.7-6.4-.5-2.6-.6-5.2-.3-7.2" stroke="var(--icon-teal)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <path d="M24.3 23.2c1.5-3 3.5-6.4 4.3-10.2.4-2.6 1.2-4.1 2.8-4.3H35" stroke="var(--icon-teal)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <path d="M24.6 25.7c3-.7 5.8-2.1 7.4-4.5 1.2-1.8 1.4-3.8 2.8-5.2 1.4-1.4 3.2-2.1 5.2-2.4" stroke="var(--icon-teal)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            
            {/* Mirrored Moth */}
            <svg viewBox="0 0 39 30" style={{ width: 'calc(36 * var(--u))', height: 'calc(28 * var(--u))', fill: 'var(--moth)' }}>
              <path d="M19.5 12.4C17.5 9.5 14 5 10.8 3 9.6 2.4 8 2.2 6 2.3 4.2 2.4 3.1 3 3 4.8L3.1 9.8C3.2 12.4 5 15 8.3 17.3 6.6 19.5 5.6 21.8 5.4 24.2 5.2 26.2 5.8 27.6 7.3 28 8.8 28.3 10.2 27.3 11.4 25.8 14.2 22.6 17.2 19.8 19.5 17.1Z" />
              <path transform="matrix(-1 0 0 1 39 0)" d="M19.5 12.4C17.5 9.5 14 5 10.8 3 9.6 2.4 8 2.2 6 2.3 4.2 2.4 3.1 3 3 4.8L3.1 9.8C3.2 12.4 5 15 8.3 17.3 6.6 19.5 5.6 21.8 5.4 24.2 5.2 26.2 5.8 27.6 7.3 28 8.8 28.3 10.2 27.3 11.4 25.8 14.2 22.6 17.2 19.8 19.5 17.1Z" />
            </svg>
          </a>

          {/* Top Center-Right Nav Pill */}
          <nav
            style={{
              position: 'absolute',
              top: 'calc(40 * var(--u))',
              left: 'calc(50% + 10 * var(--u))',
              width: 'calc(452 * var(--u))',
              height: 'calc(47 * var(--u))',
              background: '#03080B',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 'calc(24 * var(--u))',
              paddingRight: 'calc(3 * var(--u))',
              fontSize: 'calc(13 * var(--u))',
              fontWeight: 400
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'calc(20 * var(--u))', flex: 1 }}>
              <a href="#framework" style={{ color: 'var(--ink)' }}>Trụ Cột</a>
              <a href="#chamber" style={{ color: 'var(--teal)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Phòng Lab
                <svg viewBox="0 0 11 6" style={{ width: '8px', height: '5px', stroke: 'var(--chevron)', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round' }}>
                  <path d="M.7.7 5.5 5.3 10.3.7" />
                </svg>
              </a>
              <a href="#cases" style={{ color: 'var(--ink)' }}>Hồ Sơ</a>
              <a href="#credentials" style={{ color: 'var(--ink)' }}>Đề Tài</a>
            </div>

            <button
              onClick={() => onStartScenario(SCENARIOS[0])}
              style={{
                height: 'calc(41 * var(--u))',
                padding: '0 calc(16 * var(--u))',
                background: 'var(--cream)',
                color: '#03080B',
                borderRadius: '9999px',
                fontSize: 'calc(13 * var(--u))',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'calc(10 * var(--u))',
                cursor: 'pointer'
              }}
            >
              <span>Vào Hearing</span>
              <span style={{
                width: 'calc(26 * var(--u))',
                height: 'calc(26 * var(--u))',
                borderRadius: '50%',
                background: 'var(--pine)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg viewBox="0 0 4 7" style={{ width: '4px', height: '7px', stroke: '#FFFFFF', fill: 'none', strokeWidth: 1.4, strokeLinecap: 'round' }}>
                  <path d="M.5.5 3.5 3.5.5 6.5" />
                </svg>
              </span>
            </button>
          </nav>

          {/* Far Top Right Sound Button */}
          <button
            onClick={toggleSound}
            aria-label="Ambient river sound"
            aria-pressed={soundPressed ? 'true' : 'false'}
            style={{
              position: 'absolute',
              top: 'calc(40 * var(--u))',
              right: 'calc(48 * var(--u))',
              width: 'calc(48 * var(--u))',
              height: 'calc(48 * var(--u))',
              borderRadius: '50%',
              background: 'rgba(3, 8, 11, 0.45)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--ink)'
            }}
          >
            <svg viewBox="0 0 46 46" fill="currentColor" style={{ width: 'calc(20 * var(--u))', height: 'calc(20 * var(--u))' }}>
              <path d="M14.6 19.6h3.6l5.9-4.9v18.6l-5.9-4.9h-3.6z" />
              <path
                d="M27.6 19.6c1.9 2.8 1.9 6 0 8.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                style={{ opacity: soundPressed ? 1 : 0.25, transition: 'opacity 0.2s ease' }}
              />
              <path
                d="M31.2 16.2c3.4 4.9 3.4 10.7 0 15.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                style={{ opacity: soundPressed ? 1 : 0.25, transition: 'opacity 0.2s ease' }}
              />
            </svg>
          </button>

          {/* Bottom Left Hero Content */}
          <div
            style={{
              position: 'absolute',
              bottom: 'calc(48 * var(--u))',
              left: 'calc(48 * var(--u))',
              maxWidth: 'calc(800 * var(--u))'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-brand)',
                fontWeight: 600,
                color: 'var(--teal)',
                fontSize: 'calc(15 * var(--u))',
                letterSpacing: '0.04em',
                marginBottom: 'calc(14 * var(--u))',
                display: 'block'
              }}
            >
              simlab.ai • interdisciplinary simulation
            </span>

            {/* 3-Line Headline Rising from Clip-Masks */}
            <h1
              ref={headlineRef}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'calc(64 * var(--u))',
                lineHeight: 1.05,
                color: 'var(--ink)',
                whiteSpace: 'nowrap',
                marginBottom: 'calc(22 * var(--u))'
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

            {/* 2-Line Lede */}
            <div
              style={{
                fontFamily: 'var(--font-text)',
                fontWeight: 400,
                fontSize: 'calc(16 * var(--u))',
                lineHeight: 1.5,
                color: 'var(--ink-2)',
                marginBottom: 'calc(30 * var(--u))'
              }}
            >
              <span className="hero-lede-line" style={{ display: 'block' }}>
                Hệ thống mô phỏng Role-play liên ngành: Kinh tế, Quản trị, Luật kinh tế và Ngôn ngữ.
              </span>
              <span className="hero-lede-line" style={{ display: 'block' }}>
                Rèn luyện bản lĩnh đàm phán, tranh tụng trọng tài và xử lý khủng hoảng đa ngữ cùng AI.
              </span>
            </div>

            {/* Action Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'calc(26 * var(--u))' }}>
              <button
                id="hero-cta-btn"
                onClick={() => onStartScenario(SCENARIOS[0])}
                className="btn-cta-pill"
              >
                <span>Khởi Chạy Phòng Mô Phỏng Trọng Tài</span>
                <span className="pill-disc">
                  <svg viewBox="0 0 5 8">
                    <path d="M.6.6 4 4 .6 7.4" />
                  </svg>
                </span>
              </button>

              <a
                href="#framework"
                style={{
                  fontSize: 'calc(14.5 * var(--u))',
                  fontWeight: 400,
                  color: 'var(--ink)',
                  whiteSpace: 'nowrap'
                }}
              >
                Khám Phá 4 Trụ Cột Năng Lực
              </a>
            </div>
          </div>

          {/* Bottom Right Scroll Cue */}
          <a
            href="#framework"
            style={{
              position: 'absolute',
              bottom: 'calc(48 * var(--u))',
              right: 'calc(48 * var(--u))',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'calc(8 * var(--u))',
              fontSize: 'calc(13.5 * var(--u))',
              color: 'var(--ink)',
              whiteSpace: 'nowrap'
            }}
          >
            <span>Scroll for Details</span>
            <svg viewBox="0 0 11 6" style={{ width: 'calc(10 * var(--u))', height: 'calc(6 * var(--u))', stroke: 'var(--chevron)', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round' }}>
              <path d="M.7.7 5.5 5.3 10.3.7" />
            </svg>
          </a>

        </div>
      </section>

      {/* SECTION 2: 4-PILLAR ARCHITECTURE MATRIX */}
      <section id="framework" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div className="craft-card" style={{ padding: '36px', background: 'var(--bg-surface)' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '28px' }}>
            <div>
              <div className="badge-mono" style={{ background: 'var(--pine)', color: 'var(--teal)', border: '1px solid var(--border-medium)', marginBottom: '8px' }}>
                PEDAGOGICAL FRAMEWORK // MÔ HÌNH NĂNG LỰC ĐÀO TẠO
              </div>
              <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 600, color: 'var(--ink)', marginTop: '4px' }}>
                Bốn Trục Tri Thức Giao Thoa Thực Chiến
              </h2>
            </div>

            {/* Tab switchers */}
            <div style={{ display: 'flex', background: 'var(--bg-inset)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border-subtle)', gap: '4px' }}>
              {FOUR_PILLARS.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setActivePillarTab(p.key)}
                  style={{
                    background: activePillarTab === p.key ? 'var(--bg-surface-elevated)' : 'transparent',
                    color: activePillarTab === p.key ? 'var(--teal)' : 'var(--text-muted)',
                    border: activePillarTab === p.key ? '1px solid var(--border-medium)' : '1px solid transparent',
                    borderRadius: '6px',
                    padding: '8px 14px',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '28px', alignItems: 'start' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div className="craft-inset" style={{ padding: '20px', borderLeft: '4px solid var(--teal)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="font-mono" style={{ fontSize: '11px', color: 'var(--teal)' }}>{currentPillar.latinCode}</span>
                  <span className="badge-mono" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink-2)' }}>{currentPillar.badge}</span>
                </div>
                <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                  {currentPillar.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--ink-2)', fontStyle: 'italic', lineHeight: 1.6 }}>
                  {currentPillar.quote}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  CÁC TÌNH HUỐNG VẬN DỤNG THỰC TẾ TRONG SIMLAB:
                </div>

                {currentPillar.topics.map((t, idx) => (
                  <div key={idx} className="craft-card" style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span className="badge-mono" style={{ background: 'var(--bg-inset)', color: 'var(--teal)' }}>
                        {t.code}
                      </span>
                      <span style={{ fontSize: '13px', color: 'var(--ink)', fontWeight: 500 }}>
                        {t.name}
                      </span>
                    </div>
                    <span className="font-mono" style={{ fontSize: '11.5px', color: 'var(--teal)', whiteSpace: 'nowrap' }}>
                      {t.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Radar Comparison (Before vs After) */}
            <div className="craft-inset" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>ĐO LƯỜNG HIỆU QUẢ ĐÀO TẠO</span>
                
                <div style={{ display: 'flex', background: 'var(--bg-app)', borderRadius: '4px', padding: '2px' }}>
                  <button
                    onClick={() => setCompareMetric('before')}
                    style={{
                      background: compareMetric === 'before' ? 'var(--bg-surface-elevated)' : 'transparent',
                      color: compareMetric === 'before' ? 'var(--ink)' : 'var(--text-faint)',
                      border: 'none',
                      borderRadius: '3px',
                      padding: '3px 8px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer'
                    }}
                  >
                    Chưa Qua SimLab (35%)
                  </button>
                  <button
                    onClick={() => setCompareMetric('after')}
                    style={{
                      background: compareMetric === 'after' ? 'var(--pine)' : 'transparent',
                      color: compareMetric === 'after' ? 'var(--teal)' : 'var(--text-faint)',
                      border: 'none',
                      borderRadius: '3px',
                      padding: '3px 8px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer'
                    }}
                  >
                    Sau Thực Nghiệm (90%)
                  </button>
                </div>
              </div>

              <RadarChart 
                scores={compareMetric === 'before' 
                  ? { law: 35, lang: 30, mgmt: 40, econ: 35 } 
                  : { law: 92, lang: 95, mgmt: 88, econ: 91 }
                } 
                size={240} 
              />

              <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '12px', lineHeight: 1.5 }}>
                {compareMetric === 'before' 
                  ? 'Sinh viên học lý thuyết rời rạc thường chỉ biết viện dẫn luật hoặc dịch thuật đơn thuần mà không gắn với rủi ro tài chính.' 
                  : 'Sau 3 vòng đàm phán cọ xát với AI Persona, sinh viên đạt mức phản xạ toàn diện 4 chiều, sẵn sàng tham gia các phiên đàm phán quốc tế.'}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: HEARING CHAMBER PREVIEW */}
      <section id="chamber" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div className="craft-card" style={{ padding: '28px', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px', alignItems: 'center' }}>
            
            {/* Hearing Image & Live Stream */}
            <div className="image-zoom-container" style={{ height: '320px', position: 'relative' }}>
              <img 
                src="./assets/arbitration_hearing.jpg" 
                alt="Arbitration Hearing Chamber" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3, 8, 11, 0.95) 0%, rgba(3, 8, 11, 0.2) 60%)' }} />
              
              <div style={{ position: 'absolute', bottom: '16px', left: '18px', right: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <span className="badge-mono" style={{ background: 'rgba(0,0,0,0.7)', color: 'var(--teal)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    PROCEEDING ROOM // SHIAC
                  </span>
                  <div className="font-display" style={{ fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginTop: '4px' }}>
                    Phiên Trọng Tài Tranh Chấp Hợp Đồng Cung Ứng Thượng Hải
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', background: 'rgba(0,0,0,0.6)', padding: '6px 10px', borderRadius: '4px' }}>
                  <span className="audio-wave-bar" />
                  <span className="audio-wave-bar" />
                  <span className="audio-wave-bar" />
                  <span className="audio-wave-bar" />
                  <span className="audio-wave-bar" />
                </div>
              </div>
            </div>

            {/* Persona Details & Quick Launch */}
            <div>
              <div className="badge-mono" style={{ background: 'var(--pine)', color: 'var(--teal)', marginBottom: '10px' }}>
                AI PERSONA // CHEN XIAO DONG
              </div>
              <h3 className="font-display" style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                Trần Hiểu Đông (Chen Xiao Dong - 陈晓东)
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
                Giám đốc Điều hành & Cố vấn Pháp lý cấp cao, Tập đoàn HuaXin Tech (Thượng Hải). Sắc sảo, thực dụng, viện dẫn hợp đồng CISG yêu cầu bồi thường 1.2M USD do chậm trễ thư tín dụng L/C.
              </p>

              <div className="craft-inset" style={{ padding: '14px', marginBottom: '20px', borderLeft: '3px solid var(--teal)' }}>
                <p className="font-cn" style={{ fontSize: '13px', color: 'var(--ink)', marginBottom: '4px' }}>
                  "如果今天你们依然拿不出实质性的解决方案，我们将在明天正式向SHIAC提起仲裁程序！"
                </p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  "Nếu hôm nay các bạn không đưa ra phương án thực chất, chúng tôi sẽ nộp đơn lên Trọng tài SHIAC ngay ngày mai!"
                </p>
              </div>

              <button
                onClick={() => onStartScenario(SCENARIOS[0])}
                className="btn-cta-pill"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Vào Phòng Điều Trần Ngay</span>
                <span className="pill-disc">
                  <svg viewBox="0 0 5 8"><path d="M.6.6 4 4 .6 7.4" /></svg>
                </span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: SCENARIOS REPOSITORY */}
      <section id="cases" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '64px', marginBottom: '36px' }}>
          <div className="badge-mono" style={{ background: 'var(--pine)', color: 'var(--teal)', marginBottom: '8px' }}>
            SIMULATION CASE REPOSITORY // THƯ VIỆN TÌNH HUỐNG THỰC CHIẾN
          </div>
          <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 600, color: 'var(--ink)', marginTop: '6px' }}>
            Các Bộ Kịch Bản Thực Chiến Sẵn Sàng Vận Hành
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px' }}>
          {SCENARIOS.map((sc, i) => (
            <div 
              key={sc.id} 
              className="craft-card craft-card-interactive" 
              style={{ 
                padding: '20px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px',
                border: sc.id === 'shanghai-arbitration' ? '1px solid var(--border-medium)' : '1px solid var(--border-subtle)'
              }}
            >
              <div className="image-zoom-container" style={{ height: '140px', position: 'relative' }}>
                <img 
                  src={sc.persona.avatar} 
                  alt={sc.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3, 8, 11, 0.9) 0%, transparent 60%)' }} />
                
                <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  <span className="badge-mono" style={{ background: 'rgba(0,0,0,0.7)', color: 'var(--ink)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    CASE #0{i + 1} • {sc.level}
                  </span>
                </div>

                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                  <span className="font-mono" style={{ fontSize: '11px', color: 'var(--ink-2)', background: 'rgba(0,0,0,0.7)', padding: '2px 8px', borderRadius: '4px' }}>
                    {sc.duration}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-display" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.35 }}>
                  {sc.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '6px', lineHeight: 1.5 }}>
                  {sc.subtitle}
                </p>
              </div>

              <div className="craft-inset" style={{ padding: '12px', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ color: 'var(--text-muted)' }}>Chủ thể AI: <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{sc.persona.name}</span></div>
                <div style={{ color: 'var(--text-muted)' }}>Ngôn ngữ: <span style={{ color: 'var(--ink)' }}>{sc.languages.join(' • ')}</span></div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {sc.tags.map((t, idx) => (
                  <span key={idx} className="font-mono" style={{ fontSize: '10.5px', background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => onStartScenario(sc)}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Mở Hồ Sơ & Điều Trần</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CREDENTIALS */}
      <section id="credentials" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div className="craft-card" style={{ padding: '36px', background: 'var(--bg-surface)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            
            <div>
              <div className="badge-mono" style={{ background: 'var(--pine)', color: 'var(--teal)', marginBottom: '8px' }}>
                PROJECT CREDENTIALS // ĐƠN VỊ THỰC HIỆN ĐỀ TÀI
              </div>
              <h3 className="font-display" style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>
                Nhóm Nghiên Cứu Sinh Viên Liên Ngành & Cố Vấn Chuyên Môn
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                Đề tài được xây dựng nhằm phục vụ công tác giảng dạy thực hành tại các trường đại học khối ngành Kinh tế & Luật, giúp sinh viên có không gian an toàn để trải nghiệm và học hỏi từ các sai lầm trong đàm phán thương mại quốc tế.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--ink-2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="font-mono" style={{ color: 'var(--teal)' }}>[FACULTY]</span>
                  <span>Khoa Luật Kinh tế & Khoa Ngoại ngữ Thương mại (Cố vấn học thuật)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="font-mono" style={{ color: 'var(--teal)' }}>[STUDENTS]</span>
                  <span>Nhóm Sinh viên Đề tài Nghiên cứu Khoa học & Khởi nghiệp Sáng tạo</span>
                </div>
              </div>
            </div>

            <div className="craft-inset" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={18} color="var(--teal)" />
                <span className="font-mono" style={{ fontSize: '12px', color: 'var(--teal)', fontWeight: 600 }}>GIÁ TRỊ ĐÓNG GÓP CHO ĐÀO TẠO ĐẠI HỌC</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12.5px', color: 'var(--ink-2)' }}>
                <li>• <b>Đổi mới phương pháp học tập:</b> Chuyển từ đọc slide thụ động sang nhập vai phản biện trực tiếp cùng AI.</li>
                <li>• <b>Cầu nối thực tiễn:</b> Tiếp cận các bộ hồ sơ vụ án thực tế (Trọng tài SHIAC, VIAC, SIAC) ngay trên ghế nhà trường.</li>
                <li>• <b>Sẵn sàng tuyển dụng:</b> Sinh viên sở hữu chứng nhận kỹ năng đàm phán đa ngữ và tư duy quản trị rủi ro được chứng thực định lượng.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
