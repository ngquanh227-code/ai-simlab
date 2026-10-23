import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Download, FileSpreadsheet, Lock, Share2, Search, Filter } from 'lucide-react';
import { TRANSLATIONS } from '../data/i18n';

export default function SheetViewerModal({ 
  isOpen, 
  onClose, 
  sessionData, 
  scenario,
  language = 'vi' 
}) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('transcript'); // 'transcript' | 'rubric' | 'analytics'

  if (!isOpen) return null;

  const t = TRANSLATIONS[language]?.sheet || TRANSLATIONS.vi.sheet;
  const sheetId = sessionData?.id || 'SIM-2026-SHIAC-8891';
  const shareableUrl = `https://docs.google.com/spreadsheets/d/simlab-evaluation-view-${sheetId.toLowerCase()}/edit?usp=sharing`;

  const messages = sessionData?.messages || [
    { sender: 'ai', textVi: 'Chào quý đại diện. Phía HuaXin Tech yêu cầu giải quyết bồi thường 1.2M USD ngay!', timestamp: '10:00:15' },
    { sender: 'user', textVi: 'Căn cứ Điều 79 CISG 1980, sự cố hàng hải Biển Đỏ là biến cố bất khả kháng. Đề nghị miễn trừ tiền phạt.', timestamp: '10:02:40' },
    { sender: 'ai', textVi: 'Đội ngũ pháp lý của các bạn nắm luật rất chắc. Chúng tôi chấp nhận miễn phạt vi phạm, nhưng chi phí kho bãi thực tế tính sao?', timestamp: '10:04:10' },
    { sender: 'user', textVi: 'Chúng tôi chấp nhận bồi thường chi phí lưu kho bãi thực tế có hóa đơn kiểm toán, đồng thời chia làm 3 đợt thanh toán.', timestamp: '10:06:55' },
    { sender: 'ai', textVi: 'Phương án chia 3 đợt và bù đắp đơn hàng rất có tính xây dựng! Tôi đồng ý ký Biên bản hòa giải tạm hoãn nộp đơn lên SHIAC.', timestamp: '10:09:20' }
  ];

  const scores = sessionData?.scores || { law: 88, lang: 85, mgmt: 82, econ: 89 };
  const overallScore = Math.round((scores.law + scores.lang + scores.mgmt + scores.econ) / 4);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 2500, 
        background: 'rgba(3, 6, 15, 0.9)', 
        backdropFilter: 'blur(14px)',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div 
        style={{ 
          background: '#0B1124', 
          border: '1px solid rgba(0, 240, 255, 0.3)', 
          borderRadius: '20px', 
          maxWidth: '1100px', 
          width: '100%', 
          height: '88vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 240, 255, 0.2)',
          overflow: 'hidden'
        }}
      >
        {/* Google Sheet Window Header */}
        <div 
          style={{ 
            background: '#070C1B', 
            padding: '12px 20px', 
            borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Sheet Icon */}
            <div 
              style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '8px', 
                background: 'rgba(16, 185, 129, 0.15)', 
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#10B981'
              }}
            >
              <FileSpreadsheet size={18} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                  [SimLab Sheet] {scenario?.title || 'Báo Cáo Thực Hành Đàm Phán & Trọng Tài'}
                </h3>
                {/* View Only Tag */}
                <span 
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'rgba(245, 158, 11, 0.15)', 
                    color: '#FBBF24', 
                    border: '1px solid rgba(245, 158, 11, 0.3)', 
                    padding: '2px 8px', 
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 700
                  }}
                >
                  <Lock size={10} />
                  <span>Chỉ xem (View Only)</span>
                </span>
              </div>
              <div style={{ fontSize: '11.5px', color: '#94A3B8', marginTop: '2px' }}>
                Tệp tự động đồng bộ hóa trên Google Drive Khoa/Viện • Mã phiên: {sheetId}
              </div>
            </div>
          </div>

          {/* Right Action Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handleCopyLink}
              className="btn-primary"
              style={{ 
                padding: '7px 14px', 
                fontSize: '12.5px',
                background: copied ? '#10B981' : undefined
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? t.copied : t.copyLink}</span>
            </button>

            <button
              onClick={onClose}
              style={{ 
                background: 'rgba(255, 255, 255, 0.08)', 
                border: 'none', 
                color: '#94A3B8', 
                padding: '6px', 
                borderRadius: '8px', 
                cursor: 'pointer' 
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Shareable Link Bar (Simulating Google Sheet Link) */}
        <div 
          style={{ 
            background: 'rgba(11, 17, 36, 0.9)', 
            padding: '8px 20px', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            fontSize: '12px'
          }}
        >
          <span style={{ color: '#64748B', fontWeight: 600 }}>Link Bảng Tính:</span>
          <div 
            style={{ 
              flex: 1, 
              background: '#060914', 
              padding: '4px 10px', 
              borderRadius: '6px', 
              border: '1px solid rgba(0, 240, 255, 0.15)',
              color: '#00F0FF',
              fontFamily: 'var(--font-mono)',
              fontSize: '11.5px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {shareableUrl}
          </div>
          <button 
            onClick={handleCopyLink}
            style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '2px' }}
            title="Sao chép"
          >
            <Share2 size={14} />
          </button>
        </div>

        {/* Sheet Formula Bar */}
        <div 
          style={{ 
            background: '#0E1730', 
            padding: '6px 20px', 
            borderBottom: '1px solid rgba(0, 240, 255, 0.12)',
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            fontSize: '12px',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <span style={{ color: '#00F0FF', fontWeight: 700 }}>fx</span>
          <span style={{ color: '#E2E8F0' }}>
            =AVERAGE(D2:D{messages.length + 1}) → KẾT QUẢ ĐIỂM TỔNG HỢP: {overallScore}/100 [TIER 1 DISTINCTION]
          </span>
        </div>

        {/* Main SpreadSheet Grid Container */}
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'auto', background: '#070C1A' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '950px' }}>
            <thead>
              <tr style={{ background: '#0D162E', position: 'sticky', top: 0, zIndex: 10, borderBottom: '2px solid rgba(0, 240, 255, 0.25)' }}>
                <th style={{ width: '50px', padding: '10px', textAlign: 'center', borderRight: '1px solid rgba(255, 255, 255, 0.08)', color: '#64748B', fontSize: '11px' }}>
                  #
                </th>
                <th style={{ width: '130px', padding: '10px 14px', borderRight: '1px solid rgba(255, 255, 255, 0.08)', color: '#00F0FF', fontSize: '11px', fontWeight: 700 }}>
                  A: {t.colA}
                </th>
                <th style={{ width: '170px', padding: '10px 14px', borderRight: '1px solid rgba(255, 255, 255, 0.08)', color: '#00F0FF', fontSize: '11px', fontWeight: 700 }}>
                  B: {t.colB}
                </th>
                <th style={{ padding: '10px 14px', borderRight: '1px solid rgba(255, 255, 255, 0.08)', color: '#00F0FF', fontSize: '11px', fontWeight: 700 }}>
                  C: {t.colC}
                </th>
                <th style={{ width: '220px', padding: '10px 14px', borderRight: '1px solid rgba(255, 255, 255, 0.08)', color: '#00F0FF', fontSize: '11px', fontWeight: 700 }}>
                  D: {t.colD}
                </th>
                <th style={{ width: '110px', padding: '10px 14px', color: '#00F0FF', fontSize: '11px', fontWeight: 700, textAlign: 'center' }}>
                  E: {t.colE}
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, idx) => {
                const isUser = msg.sender === 'user';
                return (
                  <tr 
                    key={idx}
                    style={{ 
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      background: idx % 2 === 0 ? 'rgba(11, 17, 36, 0.4)' : 'transparent'
                    }}
                  >
                    {/* Row Index */}
                    <td style={{ padding: '12px 8px', textAlign: 'center', borderRight: '1px solid rgba(255, 255, 255, 0.06)', color: '#64748B', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                      {idx + 2}
                    </td>

                    {/* Col A: Timestamp */}
                    <td style={{ padding: '12px 14px', borderRight: '1px solid rgba(255, 255, 255, 0.06)', color: '#94A3B8', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                      {msg.timestamp || `10:0${idx}:30`}
                    </td>

                    {/* Col B: Speaker */}
                    <td style={{ padding: '12px 14px', borderRight: '1px solid rgba(255, 255, 255, 0.06)', fontSize: '12.5px', fontWeight: 700 }}>
                      <span 
                        style={{ 
                          color: isUser ? '#00F0FF' : '#C084FC',
                          background: isUser ? 'rgba(0, 240, 255, 0.1)' : 'rgba(168, 85, 247, 0.12)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          display: 'inline-block'
                        }}
                      >
                        {isUser ? 'Sinh Viên (User)' : 'Đối Tác Phản Biện (AI)'}
                      </span>
                    </td>

                    {/* Col C: Content */}
                    <td style={{ padding: '12px 14px', borderRight: '1px solid rgba(255, 255, 255, 0.06)', color: '#F1F5F9', fontSize: '13px', lineHeight: 1.5 }}>
                      <div>{msg.textVi || msg.text || msg.textZh}</div>
                      {msg.textZh && (
                        <div style={{ fontSize: '11.5px', color: '#94A3B8', marginTop: '4px', fontStyle: 'italic' }}>
                          原文: {msg.textZh}
                        </div>
                      )}
                    </td>

                    {/* Col D: Tactical Evaluation */}
                    <td style={{ padding: '12px 14px', borderRight: '1px solid rgba(255, 255, 255, 0.06)', fontSize: '12px', color: '#CBD5E1' }}>
                      {isUser ? (
                        <span style={{ color: '#34D399', fontWeight: 600 }}>
                          ✓ Lập luận pháp lý chuẩn CISG Điều 79 & Đề xuất giãn tiến độ dòng tiền
                        </span>
                      ) : (
                        <span style={{ color: '#94A3B8' }}>
                          Thử thách áp lực phạt vi phạm hợp đồng & Yêu cầu chứng từ kiểm toán
                        </span>
                      )}
                    </td>

                    {/* Col E: Score */}
                    <td style={{ padding: '12px 14px', textAlign: 'center', fontSize: '13px', fontWeight: 800, color: isUser ? '#34D399' : '#94A3B8' }}>
                      {isUser ? '+22.5' : '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom Sheet Footer Status Bar */}
        <div 
          style={{ 
            background: '#070C1B', 
            padding: '10px 20px', 
            borderTop: '1px solid rgba(0, 240, 255, 0.15)',
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            fontSize: '12px',
            color: '#94A3B8'
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ background: 'rgba(0, 240, 255, 0.15)', color: '#00F0FF', padding: '4px 10px', borderRadius: '4px', fontWeight: 700 }}>
              Sheet1: Hội Thoại & Điểm Số
            </span>
            <span style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#CBD5E1', padding: '4px 10px', borderRadius: '4px' }}>
              Sheet2: Bảng Điểm Giảng Viên
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span>Tổng số hàng: {messages.length + 1}</span>
            <span>Quyền truy cập: <b style={{ color: '#FBBF24' }}>Mọi người có liên kết đều có thể XEM</b></span>
          </div>
        </div>

      </div>
    </div>
  );
}
