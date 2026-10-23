import React, { useState } from 'react';
import { ArrowLeft, Printer, RotateCcw, Check, FileCheck, FileSpreadsheet, Award, UserCheck, ShieldCheck, Sparkles, Send } from 'lucide-react';
import RadarChart from './RadarChart';
import { TRANSLATIONS } from '../data/i18n';

export default function ReportRubric({ 
  sessionData, 
  scenario, 
  onRetry, 
  onHome, 
  language = 'vi',
  onOpenSheet 
}) {
  const t = TRANSLATIONS[language]?.rubric || TRANSLATIONS.vi.rubric;
  const scores = sessionData?.scores || { law: 85, lang: 88, mgmt: 82, econ: 90 };
  const overallScore = Math.round((scores.law + scores.lang + scores.mgmt + scores.econ) / 4);

  // Teacher Evaluation State
  const [teacherName, setTeacherName] = useState('TS. Trần Minh Khoa - Bộ Môn Luật Thương Mại Quốc Tế');
  const [teacherGrade, setTeacherGrade] = useState('9.0/10 (Xuất sắc)');
  const [teacherComment, setTeacherComment] = useState(
    'Sinh viên nắm vững Công ước CISG 1980 và có phản xạ ngôn ngữ tốt. Kỹ năng kiểm soát cảm xúc khi đối tác tạo áp lực tài chính rất đáng khen ngợi. Đề xuất cấp chứng chỉ thực nghiệm xuất sắc.'
  );
  const [isApproved, setIsApproved] = useState(false);

  const getTier = (score) => {
    if (score >= 85) return { title: 'XUẤT SẮC // TIER 1 (DISTINCTION)', color: '#34D399', bg: 'rgba(5, 150, 105, 0.15)' };
    if (score >= 70) return { title: 'ĐẠT YÊU CẦU // TIER 2 (PROFICIENT)', color: '#60A5FA', bg: 'rgba(37, 99, 235, 0.15)' };
    return { title: 'CẦN HOÀN THIỆN // TIER 3 (DEVELOPING)', color: '#FBBF24', bg: 'rgba(217, 119, 6, 0.15)' };
  };

  const tier = getTier(overallScore);

  const handleTeacherApprove = (e) => {
    e.preventDefault();
    setIsApproved(true);
  };

  return (
    <div style={{ maxWidth: '1080px', margin: '0 auto', padding: 'clamp(16px, 3vw, 32px) 16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Top Action Bar - Pure text buttons, clean colors */}
      <div className="rubric-top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <button
          onClick={onHome}
          className="btn-secondary"
          style={{ fontSize: '12.5px' }}
        >
          <span>Về Trang Chủ</span>
        </button>

        <div className="rubric-top-bar-actions" style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => onOpenSheet(sessionData)}
            className="btn-primary"
            style={{ fontSize: '12.5px' }}
          >
            <span>Xem Google Sheet (View-Only)</span>
          </button>

          <button
            onClick={() => window.print()}
            className="btn-secondary"
            style={{ fontSize: '12.5px' }}
          >
            <span>Xuất PDF / In Điểm</span>
          </button>
          
          <button
            onClick={onRetry}
            className="btn-secondary"
            style={{ fontSize: '12.5px' }}
          >
            <span>Luyện Lại Phiên Này</span>
          </button>
        </div>
      </div>

      {/* Official Certificate / Evaluation Header */}
      <div 
        className="craft-card" 
        style={{ 
          padding: 'clamp(18px, 4vw, 36px)', 
          background: '#0B1124',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}
      >
        
        {/* Certificate Metadata Header */}
        <div style={{ borderBottom: '1px solid rgba(0, 240, 255, 0.15)', paddingBottom: '18px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span 
                style={{ 
                  background: 'rgba(0, 240, 255, 0.12)', 
                  border: '1px solid rgba(0, 240, 255, 0.3)', 
                  color: '#00F0FF', 
                  padding: '2px 8px', 
                  borderRadius: '4px',
                  fontSize: '10.5px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)'
                }}
              >
                INTERDISCIPLINARY AI SIMLAB // OFFICIAL TRANSCRIPT
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 800, color: '#FFFFFF', marginTop: '6px', letterSpacing: '-0.02em' }}>
              Báo Cáo Đánh Giá Năng Lực Thực Nghiệm Đàm Phán & Trọng Tài
            </h1>
            <div style={{ fontSize: '13.5px', color: '#94A3B8', marginTop: '4px' }}>
              Hồ sơ vụ việc: <span style={{ color: '#00F0FF', fontWeight: 600 }}>{scenario?.title || 'Phiên Tranh Tụng Thương Mại Quốc Tế'}</span>
            </div>
          </div>

          <div style={{ padding: '8px 14px', background: 'rgba(6, 9, 19, 0.7)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '8px', textAlign: 'right' }}>
            <div style={{ fontSize: '10px', color: '#64748B', fontFamily: 'var(--font-mono)' }}>TRANSCRIPT RECORD ID</div>
            <div style={{ fontSize: '12.5px', color: '#00F0FF', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>SIM-2026-SHIAC-8891</div>
            <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '2px' }}>DATE: {new Date().toLocaleDateString('vi-VN')}</div>
          </div>
        </div>

        {/* 1. AUTOMATED AI EVALUATION BLOCK */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Sparkles size={18} color="#00F0FF" />
            <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#00F0FF', letterSpacing: '0.04em' }}>
              {t.aiEvaluation}
            </h2>
          </div>

          {/* Score & Summary Metric Block */}
          <div className="rubric-score-summary-grid" style={{ display: 'grid', gridTemplateColumns: '190px 1fr', gap: '24px', alignItems: 'center', marginBottom: '24px' }}>
            <div 
              style={{ 
                padding: '24px 16px', 
                background: 'rgba(6, 9, 19, 0.8)', 
                border: '1px solid rgba(0, 240, 255, 0.25)', 
                borderRadius: '16px',
                textAlign: 'center', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)'
              }}
            >
              <div style={{ fontSize: '46px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, fontFamily: 'var(--font-mono)' }}>
                {overallScore}
              </div>
              <div style={{ fontSize: '11px', color: '#64748B', marginTop: '6px', fontWeight: 600 }}>
                THANG ĐIỂM AI 100
              </div>
              <div style={{ background: tier.bg, color: tier.color, marginTop: '12px', fontSize: '10.5px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                {tier.title.split('//')[0]}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px' }}>
                Kết luận Phân tích Tự động của Hệ thống AI SimLab
              </h3>
              <p style={{ fontSize: '13.5px', color: '#CBD5E1', lineHeight: 1.65 }}>
                Đoàn đàm phán đã bảo vệ thành công quyền lợi tài chính thông qua việc viện dẫn chính xác <b>Điều 79 CISG (Bất khả kháng)</b> và ứng dụng <b>ngôn ngữ thương mại song ngữ chuẩn mực</b>. Lộ trình phân bổ dòng tiền 3 giai đoạn giúp xóa bỏ nguy cơ đền bù 1.2M USD xuống mức kho bãi thực tế có kiểm toán, bảo toàn uy tín doanh nghiệp trên thương trường.
              </p>
            </div>
          </div>

          {/* Radar & 4-Pillar Detail Grid */}
          <div className="rubric-radar-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid rgba(0, 240, 255, 0.15)', paddingTop: '20px' }}>
            
            {/* Radar Chart */}
            <div style={{ background: 'rgba(6, 9, 19, 0.6)', border: '1px solid rgba(0, 240, 255, 0.15)', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '8px', fontWeight: 700, letterSpacing: '0.04em' }}>
                BIỂU ĐỒ NĂNG LỰC 4D RADAR
              </div>
              <RadarChart scores={scores} size={230} />
            </div>

            {/* 4 Rubric Breakdown Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              <div style={{ background: 'rgba(17, 26, 54, 0.6)', border: '1px solid rgba(0, 240, 255, 0.15)', borderRadius: '10px', padding: '12px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>1. Luật Kinh Tế & Trọng Tài</span>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#00F0FF', fontFamily: 'var(--font-mono)' }}>{scores.law}%</span>
                </div>
                <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.45 }}>
                  Áp dụng chuẩn xác Điều 79 CISG về trở ngại khách quan và bác bỏ khoản phạt vi phạm 15% không có hóa đơn chứng từ.
                </p>
              </div>

              <div style={{ background: 'rgba(17, 26, 54, 0.6)', border: '1px solid rgba(0, 240, 255, 0.15)', borderRadius: '10px', padding: '12px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>2. Ngôn Ngữ & Ngoại Giao Thương Mại</span>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#34D399', fontFamily: 'var(--font-mono)' }}>{scores.lang}%</span>
                </div>
                <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.45 }}>
                  Sử dụng kính ngữ chuẩn mực ("陈总", "和气生财"), thấu hiểu tâm lý trọng chữ tín của đối tác Thượng Hải, hạ nhiệt căng thẳng.
                </p>
              </div>

              <div style={{ background: 'rgba(17, 26, 54, 0.6)', border: '1px solid rgba(0, 240, 255, 0.15)', borderRadius: '10px', padding: '12px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>3. Quản Trị Khủng Hoảng</span>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#FBBF24', fontFamily: 'var(--font-mono)' }}>{scores.mgmt}%</span>
                </div>
                <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.45 }}>
                  Chủ động đề xuất thành lập Ban Điều phối Chung thay vì chỉ đối đầu thụ động; tạo tiền đề bình ổn chuỗi cung ứng.
                </p>
              </div>

              <div style={{ background: 'rgba(17, 26, 54, 0.6)', border: '1px solid rgba(0, 240, 255, 0.15)', borderRadius: '10px', padding: '12px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>4. Kinh Tế & Tối Ưu Dòng Tiền</span>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#A855F7', fontFamily: 'var(--font-mono)' }}>{scores.econ}%</span>
                </div>
                <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.45 }}>
                  Tái cấu trúc dòng tiền 3 giai đoạn và cam kết đơn hàng tương lai, hóa giải rủi ro thiếu hụt vốn lưu động trầm trọng.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* 2. TEACHER & SCHOOL OFFICIAL EVALUATION PANEL */}
        <div 
          style={{ 
            borderTop: '2px dashed rgba(168, 85, 247, 0.3)', 
            paddingTop: '28px',
            background: 'rgba(11, 17, 36, 0.5)',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid rgba(168, 85, 247, 0.25)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <UserCheck size={18} color="#C084FC" />
              <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#C084FC', letterSpacing: '0.04em' }}>
                {t.teacherEvaluation}
              </h2>
            </div>
            
            {isApproved && (
              <span 
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#34D399',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  fontSize: '11.5px',
                  fontWeight: 700
                }}
              >
                <ShieldCheck size={14} />
                <span>{t.approved}</span>
              </span>
            )}
          </div>

          <form onSubmit={handleTeacherApprove} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '5px' }}>
                  {t.teacherName}
                </label>
                <input
                  type="text"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  disabled={isApproved}
                  style={{
                    width: '100%',
                    background: '#060914',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    color: '#FFFFFF',
                    fontSize: '12.5px'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '5px' }}>
                  {t.teacherGrade}
                </label>
                <input
                  type="text"
                  value={teacherGrade}
                  onChange={(e) => setTeacherGrade(e.target.value)}
                  disabled={isApproved}
                  style={{
                    width: '100%',
                    background: '#060914',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    color: '#34D399',
                    fontSize: '12.5px',
                    fontWeight: 700
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '12px', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '5px' }}>
                {t.teacherComment}
              </label>
              <textarea
                rows={3}
                value={teacherComment}
                onChange={(e) => setTeacherComment(e.target.value)}
                disabled={isApproved}
                style={{
                  width: '100%',
                  background: '#060914',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  color: '#FFFFFF',
                  fontSize: '12.5px',
                  lineHeight: 1.5,
                  resize: 'vertical'
                }}
              />
            </div>

            {!isApproved && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '8px 18px', fontSize: '12.5px' }}
                >
                  <span>{t.saveTeacherBtn}</span>
                </button>
              </div>
            )}
          </form>
        </div>

      </div>

    </div>
  );
}
