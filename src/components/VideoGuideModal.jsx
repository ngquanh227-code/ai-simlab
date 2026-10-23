import { X, ExternalLink, Play, Sparkles, BookOpen, Layers } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';

export default function VideoGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        background: 'rgba(3, 6, 15, 0.88)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        style={{
          background: '#0B1124',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          borderRadius: '20px',
          maxWidth: '720px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(239, 68, 68, 0.25)'
        }}
      >
        {/* Modal Header */}
        <div 
          style={{
            padding: '14px 20px',
            background: 'linear-gradient(135deg, #111B38 0%, #1E122A 100%)',
            borderBottom: '1px solid rgba(239, 68, 68, 0.25)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div 
              style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '8px', 
                background: 'rgba(239, 68, 68, 0.15)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#EF4444' 
              }}
            >
              <YoutubeIcon size={18} color="#EF4444" />
            </div>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                Kênh YouTube Hướng Dẫn Sử Dụng SimLab
              </h3>
              <div style={{ fontSize: '11px', color: '#F87171' }}>
                Chuỗi video hướng dẫn đàm phán, tranh tụng và lập luận CISG
              </div>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '4px' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player Preview / Simulated Player */}
        <div style={{ position: 'relative', background: '#04060E', padding: '24px 20px', textAlign: 'center' }}>
          <div 
            style={{ 
              width: '100%', 
              height: '320px', 
              background: 'radial-gradient(ellipse at center, rgba(30, 41, 79, 0.9) 0%, #070B19 100%)',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div 
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 0 25px rgba(239, 68, 68, 0.6)',
                cursor: 'pointer',
                marginBottom: '16px',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Play size={26} style={{ marginLeft: '4px' }} />
            </div>

            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
              Hướng Dẫn Nhanh: 5 Bước Bứt Phá Trong Phiên Đàm Phán SimLab
            </h4>
            <p style={{ fontSize: '12.5px', color: '#94A3B8', maxWidth: '460px' }}>
              Từ cách bốc thăm tình huống ngẫu nhiên đến mẹo viện dẫn Điều 79 CISG và xuất báo cáo bảng tính Google Sheet nộp bài.
            </p>
          </div>
        </div>

        {/* Modal Footer with Channel Link */}
        <div 
          style={{
            padding: '14px 20px',
            background: '#070C1B',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ fontSize: '12px', color: '#94A3B8' }}>
            Kênh chính thức: <span style={{ color: '#EF4444', fontWeight: 700 }}>AI Interactive SimLab Official</span>
          </div>

          <a
            href="https://youtube.com/@aisimlab"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ 
              background: '#EF4444', 
              color: '#FFFFFF', 
              fontSize: '12.5px', 
              padding: '8px 16px',
              textDecoration: 'none'
            }}
          >
            <YoutubeIcon size={15} color="#FFFFFF" />
            <span>Mở Kênh YouTube Đầy Đủ</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </div>
  );
}
