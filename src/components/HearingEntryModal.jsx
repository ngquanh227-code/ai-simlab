import React, { useState } from 'react';
import { TRANSLATIONS } from '../data/i18n';
import { SCENARIOS } from '../data/scenarios';

export default function HearingEntryModal({ 
  isOpen, 
  onClose, 
  onSelectScenario, 
  language = 'vi' 
}) {
  const [selectedMode, setSelectedMode] = useState('random'); // 'random' | 'custom'
  const [customForm, setCustomForm] = useState({
    title: '',
    category: 'law',
    partnerRole: 'Luật sư đối tác nước ngoài',
    stakes: 'Tranh chấp 1,200,000 USD điều khoản bồi thường',
    context: '',
    studentGoal: 'Hạ mức phạt vi phạm xuống dưới 5% và giữ được quan hệ hợp tác'
  });
  const [isSpinning, setIsSpinning] = useState(false);

  if (!isOpen) return null;

  const t = TRANSLATIONS[language]?.hearingModal || TRANSLATIONS.vi.hearingModal;

  const handleRandomDraw = () => {
    setIsSpinning(true);
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      if (counter > 8) {
        clearInterval(interval);
        setIsSpinning(false);
        const randomIndex = Math.floor(Math.random() * SCENARIOS.length);
        onSelectScenario(SCENARIOS[randomIndex]);
        onClose();
      }
    }, 100);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customForm.title.trim()) return;

    const generatedScenario = {
      id: `CUSTOM-${Date.now()}`,
      category: customForm.category,
      categoryName: customForm.category === 'law' ? 'Luật & Trọng Tài' : customForm.category === 'econ' ? 'Kinh Tế' : 'Quản Trị & KD',
      title: customForm.title,
      summary: customForm.context || 'Tình huống thực chiến do sinh viên tự khởi tạo để thử thách bản lĩnh phản biện.',
      dossierCode: 'CUSTOM-STUDENT-CASE',
      jurisdiction: 'Trọng tài VIAC & CISG 1980',
      difficulty: 'Tùy biến (Custom Real-time)',
      persona: {
        name: customForm.partnerRole || 'Đại Diện Đàm Phán Đối Phương',
        title: 'Giám Đốc Pháp Chế & Đàm Phán Cấp Cao',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
        initialMessage: `Chúng tôi đã xem xét toàn bộ hồ sơ vụ việc "${customForm.title}". Phía các bạn đã gây ra thiệt hại nghiêm trọng cho chúng tôi. Chúng tôi yêu cầu giải quyết dứt điểm ngay tại phiên này, nếu không toàn bộ hồ sơ sẽ được chuyển thẳng sang Tòa án/Trọng tài quốc tế!`,
        initialMessageVi: `Chúng tôi đã xem xét toàn bộ hồ sơ vụ việc "${customForm.title}". Phía các bạn đã gây ra thiệt hại nghiêm trọng cho chúng tôi. Chúng tôi yêu cầu giải quyết dứt điểm ngay tại phiên này, nếu không toàn bộ hồ sơ sẽ được chuyển thẳng sang Tòa án/Trọng tài quốc tế!`,
        initialStance: 'Quyết liệt đòi bồi thường',
        languageCode: 'vi-VN'
      },
      dossiers: [
        {
          title: 'Hồ sơ kịch bản sinh viên thiết lập',
          content: customForm.context,
          excerpt: customForm.stakes
        }
      ]
    };

    onSelectScenario(generatedScenario);
    onClose();
  };

  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 2000, 
        background: 'rgba(4, 6, 14, 0.85)', 
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
          border: '1px solid rgba(255, 255, 255, 0.12)', 
          borderRadius: '20px', 
          maxWidth: '740px', 
          width: '100%', 
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7)',
          padding: '26px'
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span 
                style={{ 
                  background: 'rgba(56, 189, 248, 0.1)', 
                  border: '1px solid rgba(56, 189, 248, 0.25)', 
                  color: '#38BDF8', 
                  padding: '3px 10px', 
                  borderRadius: '9999px', 
                  fontSize: '11px', 
                  fontWeight: 600 
                }}
              >
                SIMULATION ENTRYPOINT
              </span>
              <span 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#E2E8F0',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 600
                }}
              >
                {t.genzBadge}
              </span>
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#F8FAFC' }}>
              {t.title}
            </h2>
            <p style={{ fontSize: '13px', color: '#94A3B8', marginTop: '2px' }}>
              {t.subtitle}
            </p>
          </div>

          <button 
            onClick={onClose}
            style={{ 
              background: 'rgba(255, 255, 255, 0.06)', 
              border: 'none', 
              color: '#94A3B8', 
              padding: '6px 10px', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            Đóng
          </button>
        </div>

        {/* 2 Big Mode Option Tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
          
          {/* Tab 1: Random Tình Huống */}
          <div 
            onClick={() => setSelectedMode('random')}
            style={{
              background: selectedMode === 'random' ? '#1E293B' : 'rgba(17, 26, 54, 0.6)',
              border: selectedMode === 'random' ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '14px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '11px', color: '#38BDF8', fontWeight: 700, textTransform: 'uppercase' }}>
                PHẦN 1
              </span>
            </div>
            <h3 style={{ fontSize: '14.5px', fontWeight: 700, color: '#F8FAFC', marginBottom: '4px' }}>
              {t.randomMode.title}
            </h3>
            <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5 }}>
              {t.randomMode.desc}
            </p>
          </div>

          {/* Tab 2: Tự Nhập Tình Huống */}
          <div 
            onClick={() => setSelectedMode('custom')}
            style={{
              background: selectedMode === 'custom' ? '#1E293B' : 'rgba(17, 26, 54, 0.6)',
              border: selectedMode === 'custom' ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '14px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>
                PHẦN 2
              </span>
            </div>
            <h3 style={{ fontSize: '14.5px', fontWeight: 700, color: '#F8FAFC', marginBottom: '4px' }}>
              {t.customMode.title}
            </h3>
            <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5 }}>
              {t.customMode.desc}
            </p>
          </div>
        </div>

        {/* Content based on Selected Mode */}
        {selectedMode === 'random' ? (
          <div 
            style={{ 
              background: 'rgba(17, 26, 54, 0.5)', 
              borderRadius: '14px', 
              padding: '24px', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'center'
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#F8FAFC' }}>
                Hệ Thống Trích Xuất Ngẫu Nhiên Vụ Việc Thực Chiến
              </h4>
            </div>
            <p style={{ fontSize: '13px', color: '#94A3B8', maxWidth: '560px', margin: '0 auto 20px auto', lineHeight: 1.6 }}>
              Thuật toán sẽ tự động chọn 1 trong các kịch bản thực tế thuộc 6 lĩnh vực: Kinh tế, Quản trị, Kinh doanh, Luật, Ngôn ngữ, Thương mại lấy từ tài liệu nghiên cứu và khủng hoảng mạng xã hội thực tế.
            </p>

            <button
              onClick={handleRandomDraw}
              disabled={isSpinning}
              className="btn-primary"
              style={{
                padding: '10px 24px',
                fontSize: '13px',
                fontWeight: 600,
                opacity: isSpinning ? 0.7 : 1
              }}
            >
              <span>{isSpinning ? 'Đang quay ngẫu nhiên tình huống...' : t.randomMode.btn}</span>
            </button>
          </div>
        ) : (
          /* Custom Form */
          <form onSubmit={handleCustomSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '12.5px', fontWeight: 600, color: '#CBD5E1', display: 'block', marginBottom: '6px' }}>
                Tiêu đề tình huống tranh chấp / khủng hoảng *
              </label>
              <input
                type="text"
                required
                placeholder="VD: Tranh chấp bản quyền hình ảnh AI giữa agency truyền thông và nhãn hàng thời trang"
                value={customForm.title}
                onChange={(e) => setCustomForm({ ...customForm, title: e.target.value })}
                style={{
                  width: '100%',
                  background: 'rgba(6, 9, 19, 0.7)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  color: '#FFFFFF',
                  fontSize: '13px'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '12.5px', fontWeight: 600, color: '#CBD5E1', display: 'block', marginBottom: '6px' }}>
                  Lĩnh vực đào tạo
                </label>
                <select
                  value={customForm.category}
                  onChange={(e) => setCustomForm({ ...customForm, category: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#0B1124',
                    border: '1px solid rgba(0, 240, 255, 0.25)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#FFFFFF',
                    fontSize: '13px'
                  }}
                >
                  <option value="law">Luật & Trọng Tài Quốc Tế</option>
                  <option value="econ">Kinh Tế & Ngoại Thương</option>
                  <option value="mgmt">Quản Trị Khủng Hoảng</option>
                  <option value="biz">Kinh Doanh & PR TikTok</option>
                  <option value="lang">Ngôn Ngữ & Đàm Phán Song Ngữ</option>
                  <option value="trade">Thương Mại & Cảng Biển CIF</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '12.5px', fontWeight: 600, color: '#CBD5E1', display: 'block', marginBottom: '6px' }}>
                  Vai trò AI đối kháng (Counterparty)
                </label>
                <input
                  type="text"
                  placeholder="VD: Giám đốc Pháp lý đối tác nước ngoài khó tính"
                  value={customForm.partnerRole}
                  onChange={(e) => setCustomForm({ ...customForm, partnerRole: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(6, 9, 19, 0.7)',
                    border: '1px solid rgba(0, 240, 255, 0.25)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#FFFFFF',
                    fontSize: '13px'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '12.5px', fontWeight: 600, color: '#CBD5E1', display: 'block', marginBottom: '6px' }}>
                Bối cảnh chi tiết vụ việc & Tình tiết xung đột
              </label>
              <textarea
                rows={3}
                placeholder="Mô tả vụ việc (thiệt hại, hợp đồng ký kết, lý do vi phạm, drama mạng xã hội liên quan...)"
                value={customForm.context}
                onChange={(e) => setCustomForm({ ...customForm, context: e.target.value })}
                style={{
                  width: '100%',
                  background: 'rgba(6, 9, 19, 0.7)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '6px' }}>
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary"
                style={{ padding: '9px 18px' }}
              >
                Hủy
              </button>
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '9px 20px', fontSize: '13px', fontWeight: 600 }}
              >
                <span>Khởi Tạo Kịch Bản & Vào Hearing</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
