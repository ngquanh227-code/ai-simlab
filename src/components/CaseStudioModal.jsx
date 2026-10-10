import React, { useState } from 'react';
import { X, Sparkles, Plus, Scale, Languages, Shield, TrendingUp, Check } from 'lucide-react';

export default function CaseStudioModal({ isOpen, onClose, onCreateScenario }) {
  const [title, setTitle] = useState('Tranh Chấp Bản Quyền Thương Hiệu & Vi Phạm Hợp Đồng Phân Phối');
  const [personaName, setPersonaName] = useState('Bà Victoria Dupont');
  const [personaTitle, setPersonaTitle] = useState('Giám đốc Pháp lý Tập đoàn Mỹ phẩm Toàn cầu (Paris)');
  const [claimAmount, setClaimAmount] = useState('2,500,000 USD');
  const [language, setLanguage] = useState('Tiếng Anh Thương Mại (Business English)');
  const [primaryPillar, setPrimaryPillar] = useState('law');

  if (!isOpen) return null;

  const handleCreate = (e) => {
    e.preventDefault();
    const newScenario = {
      id: `custom-${Date.now()}`,
      title,
      subtitle: `Yêu cầu bồi thường ${claimAmount} - Tranh chấp phân phối quốc tế`,
      level: 'Tùy chỉnh (Custom Case)',
      duration: '15 phút',
      languages: [language, 'Tiếng Việt'],
      targetAudience: 'Sinh viên Luật Kinh tế, Kinh tế Đối ngoại & Quản trị Thương hiệu',
      tags: ['Tùy chỉnh Giảng viên', 'Tranh chấp Hợp đồng', 'Bảo toàn Danh tiếng'],
      badge: 'Case Mới Khởi Tạo',
      persona: {
        name: personaName,
        title: personaTitle,
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
        personality: 'Chuyên nghiệp, khắt khe về điều khoản độc quyền lãnh thổ, đòi hỏi bồi thường thiệt hại doanh số.',
        initialStance: 'Quyết liệt (Aggressive)',
        languageCode: 'en-US',
        audioVoicePrefix: 'en',
        initialMessage: `Good morning. We have noted multiple unauthorized sub-distributors selling our luxury product line in Southeast Asia, directly breaching Section 5.4 of our Master Distribution Agreement. We demand immediate cessation and damages totaling ${claimAmount}. How does your management propose to resolve this today?`,
        initialMessageVi: `Chào buổi sáng. Chúng tôi ghi nhận nhiều nhà phân phối thứ cấp bán trái phép dòng sản phẩm cao cấp của chúng tôi tại ĐNA, vi phạm trực tiếp Mục 5.4 Hợp đồng Phân phối Độc quyền. Chúng tôi yêu cầu chấm dứt ngay và bồi thường thiệt hại ${claimAmount}. Ban lãnh đạo quý vị định giải quyết việc này hôm nay thế nào?`
      },
      context: {
        overview: `Vụ việc phân phối độc quyền với yêu cầu bồi thường ${claimAmount}. Bên Mua cần đàm phán dựa trên căn cứ hợp đồng và đề xuất kiểm soát kênh bán lẻ.`,
        studentRole: 'Trưởng đoàn Đàm phán Doanh nghiệp Việt Nam.',
        coreObjectives: [
          'Hạ mức bồi thường xuống mức tối thiểu bằng việc thu hồi hàng tồn kho trôi nổi.',
          'Rà soát điều khoản độc quyền và thẩm quyền giải quyết tranh chấp.',
          'Duy trì thỏa thuận phân phối độc quyền cho các dòng sản phẩm mới.'
        ]
      },
      dossier: [
        {
          title: 'Hợp Đồng Phân Phối Độc Quyền Quốc Tế (§ Trích lục)',
          type: 'contract',
          content: `MỤC 5.4 (ĐỘC QUYỀN LÃNH THỔ & KÊNH PHÂN PHỐI):\n"Bên Được Nhượng Quyền không được phép cung ứng sản phẩm cho bất kỳ bên thứ ba nào nằm ngoài hệ thống đại lý được ủy quyền chính thức."`
        }
      ],
      tacticalPrompts: [
        {
          category: 'law',
          label: '⚖️ [Luật] Viện dẫn thời hạn thông báo vi phạm hợp đồng',
          textVi: 'Căn cứ hợp đồng, phía quý vị có nghĩa vụ thông báo vi phạm trong vòng 10 ngày kèm tài liệu kiểm toán chứng minh thiệt hại thực tế phát sinh.',
          textZh: 'According to our distribution agreement, your notice must include certified audit proof of actual material losses before asserting claims.',
          scoreImpact: { law: 25, lang: 20, mgmt: 18, econ: 20 },
          nextStance: 'Cân nhắc (Evaluating)'
        }
      ],
      dialogueBranches: []
    };

    onCreateScenario(newScenario);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div className="craft-card" style={{ width: '680px', maxWidth: '100%', maxHeight: '90vh', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        {/* Header */}
        <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="font-mono" style={{ fontSize: '11px', color: '#3B82F6', letterSpacing: '0.04em' }}>
              SCENARIO STUDIO // GIẢNG VIÊN & NHÓM NGHIÊN CỨU
            </div>
            <h3 className="font-serif" style={{ fontSize: '18px', fontWeight: 600, color: '#F3F4F6', marginTop: '2px' }}>
              Khởi Tạo Kịch Bản Role-Play Mới
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '4px 8px', fontSize: '12px' }}
          >
            ✕
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleCreate} style={{ padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div>
            <label className="font-mono" style={{ fontSize: '11px', color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
              TIÊU ĐỀ TÌNH HUỐNG VỤ VIỆC
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="craft-inset"
              style={{ width: '100%', padding: '10px 14px', color: '#F3F4F6', fontSize: '13px', outline: 'none', border: '1px solid var(--border-subtle)' }}
              required
            />
          </div>

          <div className="grid-2col-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label className="font-mono" style={{ fontSize: '11px', color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
                TÊN CHỦ THỂ AI ĐỐI ỨNG
              </label>
              <input
                type="text"
                value={personaName}
                onChange={(e) => setPersonaName(e.target.value)}
                className="craft-inset"
                style={{ width: '100%', padding: '10px 14px', color: '#F3F4F6', fontSize: '13px', outline: 'none', border: '1px solid var(--border-subtle)' }}
                required
              />
            </div>

            <div>
              <label className="font-mono" style={{ fontSize: '11px', color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
                CHỨC VỤ & TỔ CHỨC CỦA AI
              </label>
              <input
                type="text"
                value={personaTitle}
                onChange={(e) => setPersonaTitle(e.target.value)}
                className="craft-inset"
                style={{ width: '100%', padding: '10px 14px', color: '#F3F4F6', fontSize: '13px', outline: 'none', border: '1px solid var(--border-subtle)' }}
                required
              />
            </div>
          </div>

          <div className="grid-2col-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label className="font-mono" style={{ fontSize: '11px', color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
                SỐ TIỀN TRANH CHẤP / YÊU CẦU BỒI THƯỜNG
              </label>
              <input
                type="text"
                value={claimAmount}
                onChange={(e) => setClaimAmount(e.target.value)}
                className="craft-inset"
                style={{ width: '100%', padding: '10px 14px', color: '#F3F4F6', fontSize: '13px', outline: 'none', border: '1px solid var(--border-subtle)' }}
                required
              />
            </div>

            <div>
              <label className="font-mono" style={{ fontSize: '11px', color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
                NGÔN NGỮ ĐÀM PHÁN PHIÊN HỌP
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="craft-inset"
                style={{ width: '100%', padding: '10px 14px', color: '#F3F4F6', fontSize: '13px', outline: 'none', border: '1px solid var(--border-subtle)' }}
              >
                <option value="Tiếng Anh Thương Mại (Business English)">Tiếng Anh Thương Mại (Business English)</option>
                <option value="Tiếng Trung Thương Mại (商务中文)">Tiếng Trung Thương Mại (商务中文)</option>
                <option value="Tiếng Việt Chuyên Nghiệp">Tiếng Việt Chuyên Nghiệp</option>
              </select>
            </div>
          </div>

          <div className="craft-inset" style={{ padding: '12px 14px', fontSize: '12px', color: '#9CA3AF' }}>
            ℹ️ Kịch bản sau khi tạo sẽ được nạp ngay vào <b>Phòng Mô Phỏng Trực Chiến (Live Chamber)</b>, hỗ trợ đầy đủ bộ công cụ đo lường 4D Radar và biên bản đối tụng.
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              <Plus size={15} />
              <span>Khởi Chạy Kịch Bản Này Ngay</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
