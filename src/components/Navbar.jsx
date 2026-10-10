import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function Navbar({ currentView, onNavigate, onQuickStart, onOpenStudio }) {
  return (
    <header className="craft-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand identity */}
        <div 
          onClick={() => onNavigate('landing')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{ 
            width: '30px', 
            height: '30px', 
            borderRadius: '6px', 
            background: '#181C25', 
            border: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: 700,
            color: '#F3F4F6',
            fontFamily: 'var(--font-serif)'
          }}>
            §
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '14.5px', fontWeight: 700, letterSpacing: '-0.01em', color: '#F3F4F6' }}>
                SIMLAB
              </span>
              <span className="badge-mono nav-desktop-links" style={{ background: 'rgba(255,255,255,0.05)', color: '#9CA3AF', border: '1px solid rgba(255,255,255,0.08)' }}>
                INTERDISCIPLINARY LAB
              </span>
            </div>
          </div>
        </div>

        {/* Center Nav (Desktop Only) */}
        <nav className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button
            onClick={() => onNavigate('landing')}
            style={{
              background: currentView === 'landing' ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
              color: currentView === 'landing' ? '#F3F4F6' : '#9CA3AF',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Tổng Quan Đề Tài
          </button>

          <a
            href="#framework"
            onClick={() => onNavigate('landing')}
            style={{
              color: '#9CA3AF',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 500,
              textDecoration: 'none'
            }}
          >
            4 Trục Năng Lực
          </a>

          <a
            href="#cases"
            onClick={() => onNavigate('landing')}
            style={{
              color: '#9CA3AF',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 500,
              textDecoration: 'none'
            }}
          >
            Hồ Sơ Vụ Việc
          </a>
        </nav>

        {/* Right CTA */}
        <div className="navbar-mobile-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onOpenStudio}
            className="btn-secondary"
            style={{ padding: '6px 10px', fontSize: '12px' }}
          >
            <Plus size={13} />
            <span className="nav-desktop-links">Kịch Bản Mới</span>
          </button>

          <button
            onClick={onQuickStart}
            className="btn-primary"
            style={{ padding: '6px 12px', fontSize: '12px' }}
          >
            <span>Vào Hearing</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

      </div>
    </header>
  );
}
