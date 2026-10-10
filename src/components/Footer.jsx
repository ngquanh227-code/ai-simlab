import React from 'react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-app)', padding: '48px 24px 32px 24px', color: '#6B7280', fontSize: '13px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '32px' }}>
          <div style={{ maxWidth: '440px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="font-serif" style={{ fontSize: '16px', fontWeight: 700, color: '#F3F4F6' }}>
                § SIMLAB
              </span>
              <span className="badge-mono" style={{ background: 'var(--bg-inset)', color: '#9CA3AF' }}>
                RESEARCH PROJECT
              </span>
            </div>
            <p style={{ lineHeight: 1.6, fontSize: '13px', color: '#9CA3AF' }}>
              Nền tảng thực nghiệm mô phỏng đàm phán, tranh tụng thương mại quốc tế và xử lý khủng hoảng doanh nghiệp liên ngành dành cho sinh viên khối ngành Kinh tế, Quản trị, Luật kinh tế và Ngôn ngữ.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <div className="font-mono" style={{ color: '#D1D5DB', fontSize: '11px', letterSpacing: '0.04em', marginBottom: '10px' }}>
                KHỐI NGÀNH ĐÀO TẠO
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px' }}>
                <span style={{ color: '#9CA3AF' }}>Luật Kinh Tế & Trọng Tài Quốc Tế</span>
                <span style={{ color: '#9CA3AF' }}>Tiếng Trung & Tiếng Anh Thương Mại</span>
                <span style={{ color: '#9CA3AF' }}>Quản Trị Chiến Lược & Khủng Hoảng</span>
                <span style={{ color: '#9CA3AF' }}>Kinh Tế Ngoại Thương & Dòng Tiền</span>
              </div>
            </div>

            <div>
              <div className="font-mono" style={{ color: '#D1D5DB', fontSize: '11px', letterSpacing: '0.04em', marginBottom: '10px' }}>
                CÔNG CỤ THỰC NGHIỆM
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px' }}>
                <span style={{ color: '#9CA3AF' }}>Hồ Sơ Hợp Đồng & Chứng Cứ Mẫu (§)</span>
                <span style={{ color: '#9CA3AF' }}>Giả Lập Phiên Điều Trần Song Ngữ</span>
                <span style={{ color: '#9CA3AF' }}>Phát Âm Thoại Speech Synthesis</span>
                <span style={{ color: '#9CA3AF' }}>Bảng Điểm Rubric 4 Trục Chuẩn Hóa</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '12px' }}>
          <div className="font-mono" style={{ color: '#6B7280' }}>
            © 2026 AI INTERACTIVE SIMLAB • INITIATIVE FOR INTERDISCIPLINARY EDUCATION
          </div>
          <div className="font-mono" style={{ color: '#6B7280' }}>
            ACADEMIC RESEARCH PLATFORM // VERIFIED CLEAN
          </div>
        </div>

      </div>
    </footer>
  );
}
