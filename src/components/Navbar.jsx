import React, { useState } from 'react';
import LogoSimLab from './LogoSimLab';
import { TRANSLATIONS } from '../data/i18n';

export default function Navbar({ 
  currentView, 
  onNavigate, 
  onOpenHearingModal, 
  language = 'vi', 
  onLanguageChange,
  onOpenVideoGuide
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = TRANSLATIONS[language] || TRANSLATIONS.vi;

  const handleNav = (view, hash = null) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const languages = [
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'zh', label: '中文 (简体)', flag: '🇨🇳' }
  ];

  return (
    <header 
      style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        background: 'rgba(6, 9, 19, 0.88)', 
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
      }}
    >
      <div 
        style={{ 
          maxWidth: '1440px', 
          margin: '0 auto', 
          padding: '10px 20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        {/* Brand identity with LogoSimLab */}
        <div 
          onClick={() => handleNav('landing')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <LogoSimLab size="sm" />
        </div>

        {/* Center Desktop Navigation - Clean typography without icons */}
        <nav 
          className="nav-desktop-links" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            background: 'rgba(11, 17, 36, 0.7)',
            padding: '4px 8px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* 1. Trang Chủ */}
          <button
            onClick={() => handleNav('landing')}
            style={{
              background: currentView === 'landing' ? '#1E293B' : 'transparent',
              color: currentView === 'landing' ? '#F8FAFC' : '#94A3B8',
              border: currentView === 'landing' ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '12.5px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {t.nav.home}
          </button>

          {/* 2. Lĩnh Vực (6 Ngành) */}
          <button
            onClick={() => handleNav('landing', 'disciplines-section')}
            style={{
              background: 'transparent',
              color: '#94A3B8',
              border: '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '12.5px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
          >
            {t.nav.disciplines}
          </button>

          {/* 3. Mục Đích / Sứ Mệnh */}
          <button
            onClick={() => handleNav('mission')}
            style={{
              background: currentView === 'mission' ? '#1E293B' : 'transparent',
              color: currentView === 'mission' ? '#F8FAFC' : '#94A3B8',
              border: currentView === 'mission' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '12.5px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'}
            onMouseLeave={(e) => e.currentTarget.style.color = currentView === 'mission' ? '#F8FAFC' : '#94A3B8'}
          >
            {t.nav.mission}
          </button>

          {/* 4. Lịch Sử */}
          <button
            onClick={() => handleNav('history')}
            style={{
              background: currentView === 'history' ? '#1E293B' : 'transparent',
              color: currentView === 'history' ? '#F8FAFC' : '#94A3B8',
              border: currentView === 'history' ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '12.5px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
            onMouseLeave={(e) => e.currentTarget.style.color = currentView === 'history' ? '#F8FAFC' : '#94A3B8'}
          >
            {t.nav.history}
          </button>

          {/* Link YouTube Hướng Dẫn */}
          <button
            onClick={onOpenVideoGuide}
            style={{
              background: 'transparent',
              color: '#94A3B8',
              border: '1px solid transparent',
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '12.5px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#F87171'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
            title="Xem Video hướng dẫn sử dụng SimLab trên YouTube"
          >
            <span>{t.nav.youtubeGuide}</span>
          </button>
        </nav>

        {/* Right Action Tools: Language Selector + CTA "Vào Hearing" */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          
          {/* Trình Chọn Ngôn Ngữ (VI / EN / ZH) */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(17, 26, 54, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '6px 10px',
                color: '#E2E8F0',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <span>{language.toUpperCase()}</span>
            </button>

            {langDropdownOpen && (
              <div 
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '110%',
                  background: '#0B1124',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  minWidth: '130px',
                  zIndex: 200
                }}
              >
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      onLanguageChange(item.code);
                      setLangDropdownOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      background: language === item.code ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                      color: language === item.code ? '#38BDF8' : '#CBD5E1',
                      border: 'none',
                      fontSize: '12.5px',
                      fontWeight: language === item.code ? 600 : 400,
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Nút Vào Hearing - Thuần chữ, màu sắc thanh lịch */}
          <button
            onClick={onOpenHearingModal}
            className="btn-primary"
            style={{ 
              padding: '7px 14px', 
              fontSize: '12.5px', 
              fontWeight: 600
            }}
          >
            <span>{t.nav.enterHearing}</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-hamburger"
            style={{
              display: 'none',
              background: 'rgba(17, 26, 54, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '6px 12px',
              color: '#E2E8F0',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? 'Đóng' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          style={{
            background: 'rgba(6, 9, 19, 0.98)',
            borderTop: '1px solid rgba(0, 240, 255, 0.15)',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <button
            onClick={() => handleNav('landing')}
            style={{
              padding: '10px',
              textAlign: 'left',
              color: currentView === 'landing' ? '#00F0FF' : '#E2E8F0',
              fontWeight: 600,
              background: 'transparent',
              border: 'none'
            }}
          >
            {t.nav.home}
          </button>

          <button
            onClick={() => handleNav('landing', 'disciplines-section')}
            style={{
              padding: '10px',
              textAlign: 'left',
              color: '#E2E8F0',
              fontWeight: 600,
              background: 'transparent',
              border: 'none'
            }}
          >
            {t.nav.disciplines} (6 Ngành)
          </button>

          <button
            onClick={() => handleNav('mission')}
            style={{
              padding: '10px',
              textAlign: 'left',
              color: currentView === 'mission' ? '#C084FC' : '#E2E8F0',
              fontWeight: 600,
              background: 'transparent',
              border: 'none'
            }}
          >
            {t.nav.mission}
          </button>

          <button
            onClick={() => handleNav('history')}
            style={{
              padding: '10px',
              textAlign: 'left',
              color: currentView === 'history' ? '#00F0FF' : '#E2E8F0',
              fontWeight: 600,
              background: 'transparent',
              border: 'none'
            }}
          >
            {t.nav.history}
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenVideoGuide();
            }}
            style={{
              padding: '10px',
              textAlign: 'left',
              color: '#F87171',
              fontWeight: 500,
              background: 'transparent',
              border: 'none',
              fontSize: '13.5px'
            }}
          >
            {t.nav.youtubeGuide}
          </button>
        </div>
      )}
    </header>
  );
}
