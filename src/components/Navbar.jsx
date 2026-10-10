import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function Navbar({ currentView, onNavigate, onQuickStart, onOpenStudio }) {
  return (
    <header className="craft-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand identity */}
        <div 
          onClick={() => onNavigate('landing')}
          style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}
        >
          <div style={{ 
            width: '32px', 
            height: '32px', 
            borderRadius: '6px', 
            background: '#181C25', 
            border: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 700,
            color: '#F3F4F6',
            fontFamily: 'var(--font-serif)'
          }}>
            §
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em', color: '#F3F4F6' }}>
                SIMLAB
              </span>
              <span className="badge-mono" style={{ background: 'rgba(255,255,255,0.05)', color: '#9CA3AF', border: '1px solid rgba(255,255,255,0.08)' }}>
                INTERDISCIPLINARY LAB
              </span>
            </div>
          </div>
        </div>

        {/* Center Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
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
            href="#interactive-terminal"
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onOpenStudio}
            className="btn-secondary"
            style={{ padding: '7px 12px', fontSize: '12px' }}
          >
            <Plus size={14} />
            <span>Tạo Kịch Bản Mới</span>
          </button>

          <button
            onClick={onQuickStart}
            className="btn-primary"
            style={{ padding: '7px 14px', fontSize: '12.5px' }}
          >
            <span>Vào Phiên Trọng Tài (Case #HX-2024)</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </header>
  );
}
