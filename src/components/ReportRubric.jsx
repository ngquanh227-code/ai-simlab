import React from 'react';
import { ArrowLeft, Printer, RotateCcw, Check, FileCheck } from 'lucide-react';
import RadarChart from './RadarChart';

export default function ReportRubric({ sessionData, scenario, onRetry, onHome }) {
  const scores = sessionData?.scores || { law: 85, lang: 88, mgmt: 82, econ: 90 };
  const overallScore = Math.round((scores.law + scores.lang + scores.mgmt + scores.econ) / 4);

  const getTier = (score) => {
    if (score >= 85) return { title: 'XUẤT SẮC // TIER 1 (DISTINCTION)', color: '#34D399', bg: 'rgba(5, 150, 105, 0.1)' };
    if (score >= 70) return { title: 'ĐẠT YÊU CẦU // TIER 2 (PROFICIENT)', color: '#60A5FA', bg: 'rgba(37, 99, 235, 0.1)' };
    return { title: 'CẦN HOÀN THIỆN // TIER 3 (DEVELOPING)', color: '#FBBF24', bg: 'rgba(217, 119, 6, 0.1)' };
  };

  const tier = getTier(overallScore);

  return (
    <div style={{ maxWidth: '980px', margin: '0 auto', padding: 'clamp(16px, 3vw, 32px) 16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Top Action Bar */}
      <div className="rubric-top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={onHome}
          className="btn-secondary"
          style={{ fontSize: '12.5px' }}
        >
          <ArrowLeft size={14} />
          <span>Trang Chủ</span>
        </button>

        <div className="rubric-top-bar-actions" style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => window.print()}
            className="btn-secondary"
            style={{ fontSize: '12.5px' }}
          >
            <Printer size={14} />
            <span>In Bảng Điểm / PDF</span>
          </button>
          
          <button
            onClick={onRetry}
            className="btn-primary"
            style={{ fontSize: '12.5px' }}
          >
            <RotateCcw size={14} />
            <span>Làm Lại Phiên Này</span>
          </button>
        </div>
      </div>

      {/* Official Certificate / Evaluation Header */}
      <div className="craft-card" style={{ padding: 'clamp(18px, 4vw, 36px)', background: 'var(--bg-surface)' }}>
        
        {/* Certificate Metadata Header */}
        <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '18px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <div className="font-mono" style={{ fontSize: '11px', color: '#6B7280', letterSpacing: '0.06em' }}>
              INTERDISCIPLINARY AI SIMLAB // PERFORMANCE TRANSCRIPT
            </div>
            <h1 className="font-serif" style={{ fontSize: 'clamp(20px, 4.5vw, 26px)', fontWeight: 600, color: '#F3F4F6', marginTop: '4px' }}>
              Báo Cáo Đánh Giá Năng Lực Thực Nghiệm Đàm Phán
            </h1>
            <div style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '4px' }}>
              Hồ sơ vụ việc: <span style={{ color: '#E5E7EB' }}>{scenario.title}</span>
            </div>
          </div>

          <div className="craft-inset" style={{ padding: '8px 12px', textAlign: 'right' }}>
            <div className="font-mono" style={{ fontSize: '10px', color: '#6B7280' }}>TRANSCRIPT ID</div>
            <div className="font-mono" style={{ fontSize: '12px', color: '#E5E7EB', fontWeight: 600 }}>SIM-2026-SHIAC-8891</div>
            <div className="font-mono" style={{ fontSize: '10px', color: '#6B7280', marginTop: '2px' }}>DATE: {new Date().toLocaleDateString('vi-VN')}</div>
          </div>
        </div>

        {/* Score & Summary Metric Block */}
        <div className="rubric-score-summary-grid" style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '24px', alignItems: 'center', marginBottom: '28px' }}>
          <div className="craft-inset" style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="font-mono" style={{ fontSize: '42px', fontWeight: 700, color: '#F3F4F6', lineHeight: 1 }}>
              {overallScore}
            </div>
            <div className="font-mono" style={{ fontSize: '10.5px', color: '#6B7280', marginTop: '6px' }}>
              THANG ĐIỂM 100
            </div>
            <div className="badge-mono" style={{ background: tier.bg, color: tier.color, marginTop: '10px', fontSize: '10px' }}>
              {tier.title.split('//')[0]}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#F3F4F6', marginBottom: '6px' }}>
              Kết luận tổng quan của Hội đồng Đánh giá
            </h3>
            <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.6 }}>
              Đoàn đàm phán đã bảo vệ thành công quyền lợi doanh nghiệp thông qua việc kết hợp chặt chẽ giữa <b>Điều 79 CISG (Bất khả kháng)</b> và <b>Kính ngữ thương mại tiếng Trung</b>. Phương án thanh toán 3 kỳ giúp giảm thiểu thiệt hại bồi thường từ 1.2M USD xuống 250,000 USD (Tiết kiệm ròng <b>$950,000 USD</b> và giữ vững hạn mức tín dụng ngân hàng).
            </p>
          </div>
        </div>

        {/* Radar & 4-Pillar Detail Grid */}
        <div className="rubric-radar-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
          
          {/* Radar Chart */}
          <div className="craft-inset" style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="font-mono" style={{ fontSize: '11px', color: '#6B7280', marginBottom: '8px' }}>
              4D COMPETENCY DISTRIBUTION
            </div>
            <RadarChart scores={scores} size={230} />
          </div>

          {/* 4 Rubric Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            
            <div className="craft-inset" style={{ padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#F3F4F6' }}>1. Luật Kinh Tế & CISG</span>
                <span className="font-mono" style={{ fontSize: '13px', fontWeight: 600, color: '#60A5FA' }}>{scores.law}%</span>
              </div>
              <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.45 }}>
                Áp dụng chuẩn xác Điều 79 CISG về trở ngại khách quan và bác bỏ khoản phạt vi phạm 15% không có hóa đơn chứng từ.
              </p>
            </div>

            <div className="craft-inset" style={{ padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#F3F4F6' }}>2. Ngôn Ngữ & Ngoại Giao Thương Mại</span>
                <span className="font-mono" style={{ fontSize: '13px', fontWeight: 600, color: '#34D399' }}>{scores.lang}%</span>
              </div>
              <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.45 }}>
                Sử dụng kính ngữ chuẩn mực ("陈总", "和气生财"), thấu hiểu tâm lý trọng chữ tín của đối tác Thượng Hải, hạ nhiệt căng thẳng.
              </p>
            </div>

            <div className="craft-inset" style={{ padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#F3F4F6' }}>3. Quản Trị Khủng Hoảng</span>
                <span className="font-mono" style={{ fontSize: '13px', fontWeight: 600, color: '#FBBF24' }}>{scores.mgmt}%</span>
              </div>
              <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.45 }}>
                Chủ động đề xuất thành lập Ban Điều phối Chung thay vì chỉ đối đầu thụ động; tạo tiền đề bình ổn chuỗi cung ứng.
              </p>
            </div>

            <div className="craft-inset" style={{ padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#F3F4F6' }}>4. Kinh Tế & Tối Ưu Chi Phí</span>
                <span className="font-mono" style={{ fontSize: '13px', fontWeight: 600, color: '#A78BFA' }}>{scores.econ}%</span>
              </div>
              <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.45 }}>
                Tái cấu trúc dòng tiền 3 giai đoạn và cam kết đơn hàng tương lai, hóa giải rủi ro thiếu hụt vốn lưu động trầm trọng.
              </p>
            </div>

          </div>

        </div>

        {/* Evaluator Notes */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginTop: '24px' }}>
          <div className="font-mono" style={{ fontSize: '11px', color: '#6B7280', marginBottom: '6px' }}>
            NHẬN XÉT CỦA GIẢNG VIÊN HƯỚNG DẪN / MENTOR
          </div>
          <p style={{ fontSize: '13px', color: '#D1D5DB', lineHeight: 1.6, fontStyle: 'italic' }}>
            "Sinh viên thể hiện được bản lĩnh tranh biện và tư duy đa ngành thực tế. Khuyến nghị ở các phiên đàm phán sau tiếp tục rèn luyện kỹ năng viện dẫn án lệ trọng tài quốc tế (SHIAC / SIAC) và phân tích sâu hơn rủi ro bảo lãnh ngân hàng L/C."
          </p>
        </div>

      </div>

    </div>
  );
}
