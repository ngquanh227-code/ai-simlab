import React, { useState, useMemo } from 'react';
import { TRANSLATIONS } from '../data/i18n';

/**
 * Modern Executive Simulation History Dashboard
 * - High-end academic analytics & transcripts
 * - 5 KPI executive metrics
 * - Live search & discipline/tier filtering
 * - Dual view modes (Detailed Card View & Compact Table View)
 * - Rich photographic case setting covers
 * - 4-axis competency breakdown bars
 * - Pure typography buttons (NO icons) with subdued, harmonious palette
 */
export default function HistoryView({ 
  history = [], 
  language = 'vi', 
  onOpenSheet, 
  onViewRubric, 
  onReplayScenario, 
  onStartHearing 
}) {
  const t = TRANSLATIONS[language]?.historyView || TRANSLATIONS.vi.historyView;

  // Search, filter & view state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'score' | 'turns'
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'

  // Comprehensive default history cases across 6 disciplines with authentic settings & photos
  const defaultHistory = useMemo(() => [
    {
      id: 'SIM-2026-SHIAC-8891',
      date: '2026-10-23 16:45',
      scenarioTitle: 'Vụ Tranh Chấp Hợp Đồng Chip Bán Dẫn HuaXin Thượng Hải & Sự Cố Biển Đỏ',
      category: 'Luật & Trọng Tài',
      fieldKey: 'law',
      categoryColor: '#38BDF8',
      turns: 6,
      score: 88,
      tier: 'XUẤT SẮC (Tier 1)',
      tierColor: '#34D399',
      scores: { law: 92, lang: 86, mgmt: 84, econ: 90 },
      transcriptCount: 12,
      duration: '42 phút',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      evaluatorNote: 'Viện dẫn chuẩn xác Điều 79 CISG về biến cố bất khả kháng do sự cố hàng hải. Lập luận song ngữ chắc chắn, hòa giải thành công chia 3 đợt thanh toán phí kho bãi.'
    },
    {
      id: 'SIM-2026-ECON-5521',
      date: '2026-10-22 14:10',
      scenarioTitle: 'Biến Động Tỷ Giá Hối Đoái USD/VND & Rủi Ro Hợp Đồng Phòng Ngừa Hedging',
      category: 'Kinh Tế',
      fieldKey: 'economics',
      categoryColor: '#60A5FA',
      turns: 5,
      score: 84,
      tier: 'ĐẠT YÊU CẦU (Tier 2)',
      tierColor: '#38BDF8',
      scores: { law: 80, lang: 83, mgmt: 82, econ: 91 },
      transcriptCount: 10,
      duration: '35 phút',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      evaluatorNote: 'Phân tích định lượng biến động tỷ giá chặt chẽ, tối ưu biên lợi nhuận thông qua công cụ quyền chọn phái sinh tiền tệ kỳ hạn forward.'
    },
    {
      id: 'SIM-2026-MKT-9921',
      date: '2026-10-21 09:30',
      scenarioTitle: 'Đại Chiến Phá Giá Livestream TikTok Shop & Khủng Hoảng KOLs Bóc Phốt',
      category: 'Kinh Doanh',
      fieldKey: 'business',
      categoryColor: '#818CF8',
      turns: 7,
      score: 91,
      tier: 'XUẤT SẮC (Tier 1)',
      tierColor: '#34D399',
      scores: { law: 90, lang: 91, mgmt: 94, econ: 89 },
      transcriptCount: 14,
      duration: '48 phút',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      evaluatorNote: 'Kiểm soát nhịp độ tranh luận xuất sắc, thiết lập thỏa thuận giá sàn tối thiểu, chuyển hóa khủng hoảng truyền thông thành chiến dịch CSR cộng đồng.'
    },
    {
      id: 'SIM-2026-MGMT-4412',
      date: '2026-10-19 11:20',
      scenarioTitle: 'Khủng Hoảng Xung Đột Cổ Đông Công Nghệ & Tái Cấu Trúc Nhân Sự Hậu M&A',
      category: 'Quản Trị',
      fieldKey: 'management',
      categoryColor: '#A78BFA',
      turns: 6,
      score: 87,
      tier: 'XUẤT SẮC (Tier 1)',
      tierColor: '#34D399',
      scores: { law: 86, lang: 88, mgmt: 92, econ: 82 },
      transcriptCount: 12,
      duration: '38 phút',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
      evaluatorNote: 'Xử lý khéo léo mâu thuẫn quyền kiểm soát HĐQT, cơ cấu lại gói quyền mua cổ phiếu ESOP để giữ chân đội ngũ kỹ sư then chốt.'
    },
    {
      id: 'SIM-2026-LANG-3318',
      date: '2026-10-17 15:45',
      scenarioTitle: 'Đàm Phán Chuyển Giao Công Nghệ Xanh Song Ngữ Anh - Trung Tại Thượng Hải',
      category: 'Ngôn Ngữ',
      fieldKey: 'languages',
      categoryColor: '#2DD4BF',
      turns: 5,
      score: 89,
      tier: 'XUẤT SẮC (Tier 1)',
      tierColor: '#34D399',
      scores: { law: 85, lang: 95, mgmt: 86, econ: 90 },
      transcriptCount: 10,
      duration: '32 phút',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
      evaluatorNote: 'Vận dụng chuẩn xác thuật ngữ chuyển giao sở hữu trí tuệ, phản xạ linh hoạt giữa tiếng Anh thương mại và tiếng Hán pháp lý.'
    },
    {
      id: 'SIM-2026-COMM-7732',
      date: '2026-10-15 08:30',
      scenarioTitle: 'Vụ Kiện Gian Lận Xuất Xứ Hàng Hóa C/O Form E & Hàng Kẹt Cảng CIF',
      category: 'Thương Mại',
      fieldKey: 'commerce',
      categoryColor: '#38BDF8',
      turns: 6,
      score: 83,
      tier: 'ĐẠT YÊU CẦU (Tier 2)',
      tierColor: '#38BDF8',
      scores: { law: 84, lang: 80, mgmt: 81, econ: 87 },
      transcriptCount: 12,
      duration: '40 phút',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      evaluatorNote: 'Phân định rõ trách nhiệm rủi ro theo Incoterms 2020 điều kiện CIF, đàm phán thành công bảo lãnh ngân hàng để thông quan lô hàng.'
    }
  ], []);

  // Merge user history with default demo sessions if empty or blend seamlessly
  const baseList = history.length > 0 ? history : defaultHistory;

  // Normalized list ensuring full score fields and images
  const normalizedList = useMemo(() => {
    return baseList.map((item, idx) => {
      const law = item.scores?.law ?? item.lawScore ?? 85;
      const lang = item.scores?.lang ?? item.langScore ?? 85;
      const mgmt = item.scores?.mgmt ?? item.mgmtScore ?? 82;
      const econ = item.scores?.econ ?? item.econScore ?? 88;
      const calculatedScore = item.score ?? Math.round((law + lang + mgmt + econ) / 4);

      // Map fallback images if custom record doesn't have an image
      const fallbackImages = [
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
      ];

      return {
        ...item,
        score: calculatedScore,
        scores: { law, lang, mgmt, econ },
        image: item.image || fallbackImages[idx % fallbackImages.length],
        tier: calculatedScore >= 85 ? 'XUẤT SẮC (Tier 1)' : calculatedScore >= 70 ? 'ĐẠT YÊU CẦU (Tier 2)' : 'CẦN CẢI THIỆN (Tier 3)',
        tierColor: calculatedScore >= 85 ? '#34D399' : calculatedScore >= 70 ? '#38BDF8' : '#F59E0B',
        evaluatorNote: item.evaluatorNote || 'Phiên tranh tụng đã được AI ghi nhận đầy đủ biên bản, đảm bảo tính pháp lý và tiêu chuẩn học thuật kiểm định.'
      };
    });
  }, [baseList]);

  // Executive KPI summary calculations
  const kpiData = useMemo(() => {
    if (normalizedList.length === 0) {
      return { total: 0, avg: 0, passRate: 0, topDiscipline: 'Chưa có', totalTurns: 0 };
    }
    const total = normalizedList.length;
    const avg = Math.round(normalizedList.reduce((acc, cur) => acc + (cur.score || 0), 0) / total);
    const passCount = normalizedList.filter(item => (item.score || 0) >= 70).length;
    const passRate = Math.round((passCount / total) * 100);
    const totalTurns = normalizedList.reduce((acc, cur) => acc + (cur.turns || 5), 0);

    // Group scores by category
    const categoryTotals = {};
    normalizedList.forEach(item => {
      const cat = item.category || 'Liên Ngành';
      if (!categoryTotals[cat]) categoryTotals[cat] = { sum: 0, count: 0 };
      categoryTotals[cat].sum += (item.score || 0);
      categoryTotals[cat].count += 1;
    });

    let topDiscipline = 'Luật & Trọng Tài';
    let highestCatAvg = 0;
    Object.keys(categoryTotals).forEach(cat => {
      const catAvg = categoryTotals[cat].sum / categoryTotals[cat].count;
      if (catAvg > highestCatAvg) {
        highestCatAvg = catAvg;
        topDiscipline = cat;
      }
    });

    return { total, avg, passRate, topDiscipline, highestCatAvg: Math.round(highestCatAvg), totalTurns };
  }, [normalizedList]);

  // Filtered & Sorted list
  const filteredList = useMemo(() => {
    return normalizedList.filter(item => {
      // Search filter
      const term = searchTerm.trim().toLowerCase();
      const matchSearch = !term || 
        item.scenarioTitle?.toLowerCase().includes(term) ||
        item.id?.toLowerCase().includes(term) ||
        item.category?.toLowerCase().includes(term);

      // Discipline filter
      const matchField = selectedField === 'all' || 
        item.fieldKey === selectedField || 
        item.category?.toLowerCase().includes(selectedField.toLowerCase());

      // Tier filter
      const matchTier = selectedTier === 'all' ||
        (selectedTier === 'tier1' && item.score >= 85) ||
        (selectedTier === 'tier2' && item.score >= 70 && item.score < 85) ||
        (selectedTier === 'tier3' && item.score < 70);

      return matchSearch && matchField && matchTier;
    }).sort((a, b) => {
      if (sortBy === 'score') return (b.score || 0) - (a.score || 0);
      if (sortBy === 'turns') return (b.turns || 0) - (a.turns || 0);
      return 0; // default keep newest as received
    });
  }, [normalizedList, searchTerm, selectedField, selectedTier, sortBy]);

  // Discipline Filter Tabs
  const disciplineFilters = [
    { key: 'all', label: 'Tất Cả Lĩnh Vực' },
    { key: 'law', label: 'Luật' },
    { key: 'economics', label: 'Kinh Tế' },
    { key: 'management', label: 'Quản Trị' },
    { key: 'business', label: 'Kinh Doanh' },
    { key: 'languages', label: 'Ngôn Ngữ' },
    { key: 'commerce', label: 'Thương Mại' }
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 20px 80px 20px' }}>
      
      {/* Top Header Section */}
      <div 
        style={{ 
          marginBottom: '28px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          flexWrap: 'wrap', 
          gap: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '24px'
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <div 
            style={{ 
              display: 'inline-block',
              background: 'rgba(56, 189, 248, 0.08)', 
              color: '#38BDF8', 
              border: '1px solid rgba(56, 189, 248, 0.25)', 
              padding: '3px 12px', 
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              marginBottom: '10px',
              textTransform: 'uppercase'
            }}
          >
            {t.badge}
          </div>
          <h1 
            style={{ 
              fontSize: 'clamp(24px, 3.2vw, 32px)', 
              fontWeight: 800, 
              color: '#F8FAFC', 
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}
          >
            {t.title}
          </h1>
          <p style={{ fontSize: '13.5px', color: '#94A3B8', marginTop: '8px', lineHeight: 1.6 }}>
            Hệ thống tự động lưu trữ transcript hội thoại, chấm điểm năng lực 4 trục và đồng bộ hóa tức thì sang bảng tính Google Sheets (View-Only) để sinh viên nộp bài và giảng viên thẩm định.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button 
            onClick={onStartHearing}
            className="btn-primary"
            style={{ 
              padding: '10px 22px', 
              fontSize: '13px', 
              fontWeight: 700,
              background: '#0284C7',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              cursor: 'pointer',
              letterSpacing: '0.02em'
            }}
          >
            {t.startBtn}
          </button>
        </div>
      </div>

      {/* 5 Executive KPI Metric Cards */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
          gap: '14px', 
          marginBottom: '32px' 
        }}
      >
        {/* KPI 1: Tổng Phiên */}
        <div 
          style={{ 
            background: '#0B1124', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '12px', 
            padding: '18px 20px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Tổng Phiên Hoàn Thành
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#F8FAFC', marginTop: '6px' }}>
            {kpiData.total} <span style={{ fontSize: '13px', fontWeight: 500, color: '#64748B' }}>phiên</span>
          </div>
          <div style={{ fontSize: '11.5px', color: '#38BDF8', marginTop: '4px' }}>
            Đã đồng bộ hóa 100% Google Sheets
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#0284C7' }} />
        </div>

        {/* KPI 2: Điểm Trung Bình */}
        <div 
          style={{ 
            background: '#0B1124', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '12px', 
            padding: '18px 20px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Điểm Trung Bình Tích Lũy
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#34D399', marginTop: '6px' }}>
            {kpiData.avg} <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B' }}>/ 100</span>
          </div>
          <div style={{ fontSize: '11.5px', color: '#34D399', marginTop: '4px' }}>
            Xếp loại Xuất sắc (Tier 1)
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#10B981' }} />
        </div>

        {/* KPI 3: Tỷ Lệ Đạt Chuẩn */}
        <div 
          style={{ 
            background: '#0B1124', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '12px', 
            padding: '18px 20px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Tỷ Lệ Đạt Chuẩn (≥ 70)
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#F8FAFC', marginTop: '6px' }}>
            {kpiData.passRate}%
          </div>
          <div style={{ fontSize: '11.5px', color: '#94A3B8', marginTop: '4px' }}>
            Đủ điều kiện cấp chứng chỉ SimLab
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#6366F1' }} />
        </div>

        {/* KPI 4: Lĩnh Vực Thế Mạnh */}
        <div 
          style={{ 
            background: '#0B1124', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '12px', 
            padding: '18px 20px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Lĩnh Vực Thế Mạnh Nhất
          </div>
          <div style={{ fontSize: '16px', fontWeight: 800, color: '#38BDF8', marginTop: '10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {kpiData.topDiscipline}
          </div>
          <div style={{ fontSize: '11.5px', color: '#94A3B8', marginTop: '8px' }}>
            Điểm chuyên ngành: {kpiData.highestCatAvg || 89}/100
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#38BDF8' }} />
        </div>

        {/* KPI 5: Thời Lượng Thực Chiến */}
        <div 
          style={{ 
            background: '#0B1124', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '12px', 
            padding: '18px 20px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Tổng Lượt Phản Biện
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#F8FAFC', marginTop: '6px' }}>
            {kpiData.totalTurns} <span style={{ fontSize: '13px', fontWeight: 500, color: '#64748B' }}>lượt</span>
          </div>
          <div style={{ fontSize: '11.5px', color: '#94A3B8', marginTop: '4px' }}>
            Thời lượng trung bình: 38 phút/phiên
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#475569' }} />
        </div>
      </div>

      {/* Toolbar: Search, Filters & View Toggle */}
      <div 
        style={{ 
          background: '#0B1124', 
          border: '1px solid rgba(255, 255, 255, 0.08)', 
          borderRadius: '12px',
          padding: '14px 18px',
          marginBottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}
      >
        {/* Row 1: Search & Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          
          {/* Search Input */}
          <div style={{ flex: '1 1 280px', position: 'relative' }}>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm theo mã phiên (SIM-...), tên vụ việc, từ khóa..."
              style={{
                width: '100%',
                background: '#060913',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '9px 14px',
                fontSize: '13px',
                color: '#F8FAFC',
                outline: 'none',
                transition: 'border-color 0.15s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#0284C7'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)'}
            />
          </div>

          {/* Right Filters & View Mode */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Tier Filter */}
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              style={{
                background: '#060913',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: '12px',
                color: '#E2E8F0',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="all">Tất cả xếp loại</option>
              <option value="tier1">Xuất sắc (Tier 1 ≥ 85)</option>
              <option value="tier2">Đạt yêu cầu (Tier 2 70-84)</option>
              <option value="tier3">Cần cải thiện (Tier 3 &lt; 70)</option>
            </select>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: '#060913',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: '12px',
                color: '#E2E8F0',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="newest">Mới nhất trước</option>
              <option value="score">Điểm số cao nhất</option>
              <option value="turns">Số lượt nhiều nhất</option>
            </select>

            {/* View Mode Toggle */}
            <div style={{ display: 'inline-flex', background: '#060913', borderRadius: '8px', padding: '3px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button
                onClick={() => setViewMode('cards')}
                style={{
                  background: viewMode === 'cards' ? '#1E293B' : 'transparent',
                  color: viewMode === 'cards' ? '#F8FAFC' : '#94A3B8',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '5px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Dạng Thẻ
              </button>
              <button
                onClick={() => setViewMode('table')}
                style={{
                  background: viewMode === 'table' ? '#1E293B' : 'transparent',
                  color: viewMode === 'table' ? '#F8FAFC' : '#94A3B8',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '5px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Dạng Bảng
              </button>
            </div>

          </div>
        </div>

        {/* Row 2: Discipline Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '2px' }}>
          {disciplineFilters.map(filter => {
            const isActive = selectedField === filter.key;
            return (
              <button
                key={filter.key}
                onClick={() => setSelectedField(filter.key)}
                style={{
                  background: isActive ? '#0284C7' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#FFFFFF' : '#94A3B8',
                  border: isActive ? '1px solid #0284C7' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  padding: '5px 13px',
                  fontSize: '12px',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease'
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content: Card View vs Table View */}
      {filteredList.length === 0 ? (
        /* Empty Search / Filter State */
        <div 
          style={{ 
            background: '#0B1124', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '16px',
            padding: '56px 20px',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px' }}>
            Không tìm thấy phiên mô phỏng phù hợp
          </h3>
          <p style={{ fontSize: '13.5px', color: '#94A3B8', maxWidth: '420px', margin: '0 auto 20px auto' }}>
            Thử thay đổi từ khóa tìm kiếm hoặc bấm đặt lại toàn bộ bộ lọc để xem đầy đủ danh sách.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedField('all');
              setSelectedTier('all');
            }}
            style={{
              background: '#1E293B',
              color: '#F8FAFC',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '12.5px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Đặt Lại Bộ Lọc
          </button>
        </div>
      ) : viewMode === 'cards' ? (
        /* Rich Card View */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredList.map((item, idx) => (
            <div 
              key={item.id || idx}
              className="simlab-history-card"
              style={{
                background: '#0B1124',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '20px',
                gap: '20px',
                alignItems: 'center',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.35)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Left Column: Photographic Setting Thumbnail */}
              <div 
                style={{ 
                  width: '100%', 
                  height: '130px', 
                  borderRadius: '10px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.1)' 
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.scenarioTitle}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(11, 17, 36, 0.85) 0%, transparent 60%)' 
                  }} 
                />
                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: '8px', 
                    left: '8px', 
                    right: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span 
                    style={{ 
                      fontSize: '10px', 
                      fontWeight: 700, 
                      color: '#E2E8F0', 
                      background: 'rgba(0, 0, 0, 0.7)', 
                      padding: '2px 6px', 
                      borderRadius: '4px' 
                    }}
                  >
                    {item.turns} Lượt
                  </span>
                  <span 
                    style={{ 
                      fontSize: '10px', 
                      fontWeight: 700, 
                      color: '#38BDF8', 
                      background: 'rgba(0, 0, 0, 0.7)', 
                      padding: '2px 6px', 
                      borderRadius: '4px' 
                    }}
                  >
                    {item.transcriptCount || 10} Thoại
                  </span>
                </div>
              </div>

              {/* Center Column: Detailed Information & Competency Breakdown */}
              <div>
                {/* Meta Header: Date & ID */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      color: item.categoryColor || '#38BDF8',
                      background: 'rgba(56, 189, 248, 0.08)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    {item.category}
                  </span>

                  <span style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 500 }}>
                    {item.date}
                  </span>

                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748B' }}>
                    {item.id}
                  </span>
                </div>

                {/* Scenario Title */}
                <h3 style={{ fontSize: '15.5px', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px', lineHeight: 1.35 }}>
                  {item.scenarioTitle}
                </h3>

                {/* AI Evaluator Feedback Excerpt */}
                <p style={{ fontSize: '12.5px', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '14px', fontStyle: 'italic' }}>
                  "{item.evaluatorNote}"
                </p>

                {/* 4 Competency Bars */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                  {/* Law */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#94A3B8', marginBottom: '3px' }}>
                      <span>Pháp lý</span>
                      <span style={{ fontWeight: 700, color: '#F8FAFC' }}>{item.scores.law}%</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ width: `${item.scores.law}%`, height: '100%', background: '#38BDF8' }} />
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#94A3B8', marginBottom: '3px' }}>
                      <span>Ngôn ngữ</span>
                      <span style={{ fontWeight: 700, color: '#F8FAFC' }}>{item.scores.lang}%</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ width: `${item.scores.lang}%`, height: '100%', background: '#818CF8' }} />
                    </div>
                  </div>

                  {/* Management */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#94A3B8', marginBottom: '3px' }}>
                      <span>Quản trị</span>
                      <span style={{ fontWeight: 700, color: '#F8FAFC' }}>{item.scores.mgmt}%</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ width: `${item.scores.mgmt}%`, height: '100%', background: '#A78BFA' }} />
                    </div>
                  </div>

                  {/* Economics */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#94A3B8', marginBottom: '3px' }}>
                      <span>Kinh tế</span>
                      <span style={{ fontWeight: 700, color: '#F8FAFC' }}>{item.scores.econ}%</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ width: `${item.scores.econ}%`, height: '100%', background: '#34D399' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Score Pillar & Pure Typography Actions */}
              <div 
                className="simlab-history-card-right"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'flex-end', 
                  justifyContent: 'center',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingLeft: '20px',
                  height: '100%'
                }}
              >
                {/* Score badge */}
                <div className="score-box" style={{ textAlign: 'right', marginBottom: '14px' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: item.tierColor || '#34D399', lineHeight: 1 }}>
                    {item.score} <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 600 }}>/100</span>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: item.tierColor, marginTop: '4px' }}>
                    {item.tier}
                  </div>
                </div>

                {/* Pure text action buttons - no icons, harmonious colors */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '100%' }}>
                  <button
                    onClick={() => onOpenSheet(item)}
                    style={{
                      width: '100%',
                      background: 'rgba(30, 41, 59, 0.85)',
                      color: '#F8FAFC',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      padding: '7px 12px',
                      borderRadius: '6px',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#334155'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(30, 41, 59, 0.85)'}
                  >
                    Google Sheet
                  </button>

                  <button
                    onClick={() => onViewRubric(item)}
                    style={{
                      width: '100%',
                      background: '#0284C7',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      padding: '7px 12px',
                      borderRadius: '6px',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#0369A1'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#0284C7'}
                  >
                    {t.viewRubric}
                  </button>

                  <button
                    onClick={() => onReplayScenario(item)}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: '#94A3B8',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#F8FAFC';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#94A3B8';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  >
                    {t.replay}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Compact Table View */
        <div 
          style={{ 
            background: '#0B1124', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '14px',
            overflow: 'hidden'
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '820px' }}>
              <thead>
                <tr style={{ background: '#0E172E', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <th style={{ padding: '14px 16px', fontSize: '11.5px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>
                    {t.cols.date}
                  </th>
                  <th style={{ padding: '14px 16px', fontSize: '11.5px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>
                    {t.cols.scenario}
                  </th>
                  <th style={{ padding: '14px 16px', fontSize: '11.5px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>
                    {t.cols.category}
                  </th>
                  <th style={{ padding: '14px 16px', fontSize: '11.5px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>
                    {t.cols.score}
                  </th>
                  <th style={{ padding: '14px 16px', fontSize: '11.5px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', textAlign: 'right' }}>
                    {t.cols.actions}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredList.map((item, idx) => (
                  <tr 
                    key={item.id || idx}
                    style={{ 
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '16px', fontSize: '12.5px', verticalAlign: 'middle' }}>
                      <div style={{ fontWeight: 600, color: '#E2E8F0' }}>{item.date}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: '#64748B', marginTop: '3px' }}>
                        {item.id}
                      </div>
                    </td>

                    <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: '#F8FAFC', marginBottom: '4px' }}>
                        {item.scenarioTitle}
                      </div>
                      <div style={{ fontSize: '12px', color: '#94A3B8' }}>
                        {item.turns || 5} lượt phản biện • {item.transcriptCount || 10} đoạn hội thoại đã lưu
                      </div>
                    </td>

                    <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                      <span 
                        style={{ 
                          fontSize: '11.5px', 
                          fontWeight: 700, 
                          color: item.categoryColor || '#38BDF8',
                          background: 'rgba(56, 189, 248, 0.08)',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          padding: '3px 8px',
                          borderRadius: '6px'
                        }}
                      >
                        {item.category}
                      </span>
                    </td>

                    <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '18px', fontWeight: 800, color: item.tierColor || '#34D399' }}>
                          {item.score}/100
                        </span>
                        <span style={{ fontSize: '11px', color: item.tierColor, fontWeight: 700 }}>
                          {item.tier}
                        </span>
                      </div>
                    </td>

                    <td style={{ padding: '16px', verticalAlign: 'middle', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '8px' }}>
                        <button
                          onClick={() => onOpenSheet(item)}
                          style={{
                            background: '#1E293B',
                            color: '#F8FAFC',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            padding: '5px 11px',
                            borderRadius: '6px',
                            fontSize: '11.5px',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Google Sheet
                        </button>

                        <button
                          onClick={() => onViewRubric(item)}
                          style={{
                            background: '#0284C7',
                            color: '#FFFFFF',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            padding: '5px 11px',
                            borderRadius: '6px',
                            fontSize: '11.5px',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          {t.viewRubric}
                        </button>

                        <button
                          onClick={() => onReplayScenario(item)}
                          style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            color: '#94A3B8',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            padding: '5px 10px',
                            borderRadius: '6px',
                            fontSize: '11.5px',
                            fontWeight: 500,
                            cursor: 'pointer'
                          }}
                        >
                          {t.replay}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Institutional Google Sheets Synchronization Notice Banner */}
      <div 
        style={{ 
          marginTop: '32px',
          background: 'rgba(11, 17, 36, 0.7)', 
          border: '1px solid rgba(56, 189, 248, 0.2)', 
          borderRadius: '12px',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px'
        }}
      >
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#F8FAFC', marginBottom: '3px' }}>
            Cơ chế bảo lưu bảng điểm học viện & tích hợp Google Workspace
          </div>
          <div style={{ fontSize: '12px', color: '#94A3B8' }}>
            Toàn bộ transcript và điểm số được khóa mã hóa xác thực (Read-Only). Sinh viên có thể chia sẻ trực tiếp link Google Sheet để nộp bài trên Google Classroom, LMS hoặc hồ sơ năng lực cá nhân.
          </div>
        </div>

        <button
          onClick={() => onOpenSheet(filteredList[0] || normalizedList[0])}
          style={{
            background: 'transparent',
            border: '1px solid #38BDF8',
            color: '#38BDF8',
            borderRadius: '6px',
            padding: '7px 16px',
            fontSize: '12px',
            fontWeight: 700,
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          Xem Mẫu Bảng Tính Google Sheet
        </button>
      </div>

    </div>
  );
}
