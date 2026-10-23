import React from 'react';
import { Target, Sparkles, Shield, Award, BookOpen, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { TRANSLATIONS } from '../data/i18n';
import LogoSimLab from './LogoSimLab';

export default function MissionView({ language = 'vi', onStartSimulation }) {
  const t = TRANSLATIONS[language]?.missionView || TRANSLATIONS.vi.missionView;
  const brand = TRANSLATIONS[language]?.brand || TRANSLATIONS.vi.brand;

  const coreValues = [
    {
      titleVi: 'Thực Chiến Hóa Giảng Đường',
      titleEn: 'Battlefield in the Classroom',
      titleZh: '课堂实战化转型',
      descVi: 'Chuyển hóa lý thuyết khô khan thành các phiên phản biện đối kháng trực diện với AI, rèn phản xạ xử lý khủng hoảng đa ngữ.',
      descEn: 'Transform dry theory into direct AI counter-interrogations, sharpening multilingual crisis reflexes.',
      descZh: '将枯燥的书本理论转化为直面AI的高压博弈对抗，锤炼跨语言多维危机应变本能。',
      icon: <Target size={24} color="#00F0FF" />
    },
    {
      titleVi: 'Chuẩn Mực Trọng Tài Quốc Tế',
      titleEn: 'International Arbitration Standards',
      titleZh: '国际商事仲裁严谨标准',
      descVi: 'Căn cứ theo Công ước CISG 1980, quy tắc trọng tài VIAC/SHIAC và án lệ thực tế của thương trường quốc tế.',
      descEn: 'Governed by CISG 1980, VIAC/SHIAC arbitral rules, and real cross-border commercial precedents.',
      descZh: '以联合国CISG 1980公约、VIAC及SHIAC仲裁规则与全网真实国际涉外案例为底层依据。',
      icon: <Shield size={24} color="#A855F7" />
    },
    {
      titleVi: 'Liên Ngành Đột Phá 6 Lĩnh Vực',
      titleEn: '6-Domain Interdisciplinary Fusion',
      titleZh: '六大跨学科全方位交融',
      descVi: 'Tích hợp toàn diện: Kinh tế - Quản trị - Kinh doanh - Luật - Ngôn ngữ - Thương mại trong từng hồ sơ vụ việc.',
      descEn: 'Total integration of Economics, Management, Business, Law, Languages, and International Trade in every dossier.',
      descZh: '在每一个案卷中将经济、管理、商业、法学、语言及外贸要素熔炼为一体。',
      icon: <BookOpen size={24} color="#38BDF8" />
    },
    {
      titleVi: 'Đánh Giá Khách Quan Kép (AI + Thầy Cô)',
      titleEn: 'Dual-Objective Rubric (AI + Faculty)',
      titleZh: 'AI自适应与教师双核考评体系',
      descVi: 'Hệ thống AI chấm điểm phản xạ tức thời kết hợp cùng phân hệ phê duyệt, nhận xét chuyên sâu từ Giảng viên.',
      descEn: 'Instant AI tactical reflex scoring complemented by in-depth faculty pedagogic appraisal and grading.',
      descZh: 'AI即时战术分值反馈与任课教师专业教学点评相互印证、闭环赋能。',
      icon: <Award size={24} color="#F59E0B" />
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px 80px 20px' }}>
      
      {/* Top Banner with Logo and Slogan */}
      <div 
        style={{ 
          textAlign: 'center', 
          marginBottom: '48px',
          padding: '48px 24px',
          background: 'radial-gradient(ellipse at top, rgba(168, 85, 247, 0.18) 0%, rgba(6, 9, 19, 0.6) 70%)',
          borderRadius: '24px',
          border: '1px solid rgba(0, 240, 255, 0.2)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '20px' }}>
          <LogoSimLab size="xl" showSlogan={true} />
        </div>

        <div style={{ maxWidth: '780px', margin: '16px auto 0 auto' }}>
          <span 
            style={{ 
              display: 'inline-block',
              background: 'rgba(0, 240, 255, 0.12)', 
              color: '#00F0FF', 
              border: '1px solid rgba(0, 240, 255, 0.3)', 
              padding: '4px 14px', 
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              marginBottom: '14px'
            }}
          >
            {t.badge}
          </span>
          <h1 
            style={{ 
              fontSize: 'clamp(26px, 4vw, 38px)', 
              fontWeight: 800, 
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              marginBottom: '16px'
            }}
          >
            {t.title}
          </h1>
          <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '14px' }}>
            {t.p1}
          </p>
          <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.7 }}>
            {t.p2}
          </p>
        </div>

        {/* Big Inspiring Quote */}
        <div 
          style={{ 
            marginTop: '32px', 
            padding: '20px 28px', 
            background: 'rgba(11, 17, 36, 0.8)', 
            borderLeft: '4px solid #00F0FF',
            borderRadius: '0 14px 14px 0',
            maxWidth: '820px',
            margin: '32px auto 0 auto',
            textAlign: 'left'
          }}
        >
          <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#E0E7FF', lineHeight: 1.6 }}>
            {t.quote}
          </p>
        </div>
      </div>

      {/* Stats Counter Row */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '16px',
          marginBottom: '56px'
        }}
      >
        {t.stats.map((stat, idx) => (
          <div 
            key={idx} 
            style={{
              background: 'rgba(11, 17, 36, 0.7)',
              border: '1px solid rgba(0, 240, 255, 0.15)',
              borderRadius: '16px',
              padding: '24px 20px',
              textAlign: 'center'
            }}
          >
            <div 
              style={{ 
                fontSize: '36px', 
                fontWeight: 800, 
                background: 'linear-gradient(135deg, #00F0FF 0%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '4px'
              }}
            >
              {stat.val}
            </div>
            <div style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 600, letterSpacing: '0.02em' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* 4 Core Pillars of Mission */}
      <div style={{ marginBottom: '56px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px', textAlign: 'center' }}>
          4 Trụ Cột Triết Lý Đào Tạo Của SimLab
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {coreValues.map((v, i) => (
            <div 
              key={i} 
              style={{
                background: '#0B1124',
                border: '1px solid rgba(0, 240, 255, 0.15)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'all 0.2s ease'
              }}
            >
              <div 
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '12px', 
                  background: 'rgba(0, 240, 255, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}
              >
                {v.icon}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#F8FAFC' }}>
                {language === 'zh' ? v.titleZh : language === 'en' ? v.titleEn : v.titleVi}
              </h3>
              <p style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.6 }}>
                {language === 'zh' ? v.descZh : language === 'en' ? v.descEn : v.descVi}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div 
        style={{ 
          textAlign: 'center', 
          padding: '36px', 
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(0, 240, 255, 0.15) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(0, 240, 255, 0.3)'
        }}
      >
        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
          Sẵn Sàng Bứt Phá Giới Hạn Cùng AI SimLab?
        </h3>
        <p style={{ fontSize: '14px', color: '#CBD5E1', marginBottom: '22px' }}>
          Bước vào phòng đàm phán mô phỏng và thử thách năng lực phản xạ của bạn ngay hôm nay.
        </p>
        <button 
          onClick={onStartSimulation}
          className="btn-primary"
          style={{ padding: '10px 24px', fontSize: '13.5px', fontWeight: 600 }}
        >
          <span>Vào Phòng Mô Phỏng Ngay</span>
        </button>
      </div>

    </div>
  );
}
