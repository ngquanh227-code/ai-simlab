import { Globe, Mail, Sparkles } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, FacebookIcon, TelegramIcon, TikTokIcon } from './SocialIcons';
import LogoSimLab from './LogoSimLab';

export default function Footer() {
  const socialLinks = [
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@aisimlab_official',
      color: '#00F0FF',
      icon: <TikTokIcon size={16} />
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@aisimlab',
      color: '#EF4444',
      icon: <YoutubeIcon size={16} color="#EF4444" />
    },
    {
      name: 'Fanpage',
      url: 'https://facebook.com/aisimlab.edu',
      color: '#3B82F6',
      icon: <FacebookIcon size={16} color="#3B82F6" />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/aisimlab',
      color: '#E879F9',
      icon: <InstagramIcon size={16} color="#E879F9" />
    },
    {
      name: 'Telegram',
      url: 'https://t.me/aisimlab_community',
      color: '#38BDF8',
      icon: <TelegramIcon size={16} color="#38BDF8" />
    }
  ];

  return (
    <footer 
      style={{ 
        borderTop: '1px solid rgba(0, 240, 255, 0.15)', 
        background: '#04060E', 
        padding: '56px 24px 36px 24px', 
        color: '#94A3B8', 
        fontSize: '13px',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '36px' }}>
        
        {/* Main Grid: Brand + 6 Disciplines + Social Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', alignItems: 'flex-start' }}>
          
          {/* Column 1: Brand & Slogan */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <LogoSimLab size="default" showSlogan={true} />
            <p style={{ lineHeight: 1.65, fontSize: '13px', color: '#94A3B8', maxWidth: '380px', marginTop: '6px' }}>
              Nền tảng thực nghiệm đàm phán, trọng tài thương mại quốc tế và xử lý khủng hoảng đa ngữ ứng dụng AI liên ngành dành cho sinh viên thế hệ số.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00F0FF', fontSize: '12px', fontWeight: 600 }}>
              <Sparkles size={14} />
              <span>Hệ thống kiểm thử tiêu chuẩn CISG 1980 & VIAC/SHIAC</span>
            </div>
          </div>

          {/* Column 2: 6 Lĩnh Vực Đào Tạo */}
          <div>
            <div style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
              6 LĨNH VỰC THỰC NGHIỆM LIÊN NGÀNH
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12.5px' }}>
              <span style={{ color: '#00F0FF' }}>• Luật Kinh Tế & Trọng Tài</span>
              <span style={{ color: '#38BDF8' }}>• Kinh Tế & Tài Chính Vĩ Mô</span>
              <span style={{ color: '#A855F7' }}>• Quản Trị Chiến Lược & PR</span>
              <span style={{ color: '#E879F9' }}>• Kinh Doanh & TikTok Shop</span>
              <span style={{ color: '#10B981' }}>• Ngôn Ngữ Thương Mại</span>
              <span style={{ color: '#F59E0B' }}>• Thương Mại Cảng Biển CIF</span>
            </div>
          </div>

          {/* Column 3: Social Network Links */}
          <div>
            <div style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
              KẾT NỐI MẠNG XÃ HỘI // OFFICIAL CHANNELS
            </div>
            <p style={{ fontSize: '12.5px', color: '#94A3B8', marginBottom: '14px' }}>
              Theo dõi các bài giảng tình huống, video ngắn tóm tắt vụ việc drama mạng xã hội và kết nối với cộng đồng:
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '7px 14px',
                    borderRadius: '8px',
                    background: 'rgba(11, 17, 36, 0.8)',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                    color: item.color,
                    fontSize: '12px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 240, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(11, 17, 36, 0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
            paddingTop: '24px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '14px', 
            fontSize: '12px' 
          }}
        >
          <div style={{ color: '#64748B', fontFamily: 'var(--font-mono)' }}>
            © 2026 AI INTERACTIVE SIMLAB • BỨT PHÁ GIỚI HẠN - THẮP LỬA THÀNH CÔNG
          </div>
          <div style={{ display: 'flex', gap: '16px', color: '#94A3B8' }}>
            <span>Bảo mật dữ liệu học tập</span>
            <span>•</span>
            <span>Quy chế đánh giá Rubric</span>
            <span>•</span>
            <span style={{ color: '#00F0FF' }}>Ngôn ngữ: Tiếng Việt / English / 中文</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
