import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingView from './components/LandingView';
import SimChamber from './components/SimChamber';
import ReportRubric from './components/ReportRubric';
import MissionView from './components/MissionView';
import HistoryView from './components/HistoryView';
import HearingEntryModal from './components/HearingEntryModal';
import VideoGuideModal from './components/VideoGuideModal';
import SheetViewerModal from './components/SheetViewerModal';
import FloatingAssistant from './components/FloatingAssistant';
import Footer from './components/Footer';
import { SCENARIOS } from './data/scenarios';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'simulation' | 'rubric' | 'mission' | 'history'
  const [language, setLanguage] = useState('vi'); // 'vi' | 'en' | 'zh'
  const [activeScenario, setActiveScenario] = useState(SCENARIOS[0]);
  const [sessionData, setSessionData] = useState(null);
  
  // Modals state
  const [isHearingModalOpen, setIsHearingModalOpen] = useState(false);
  const [isVideoGuideOpen, setIsVideoGuideOpen] = useState(false);
  const [isSheetModalOpen, setIsSheetModalOpen] = useState(false);
  const [sheetModalSession, setSheetModalSession] = useState(null);

  // History state with localStorage
  const [historyList, setHistoryList] = useState(() => {
    try {
      const saved = localStorage.getItem('simlab_history_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [
      {
        id: 'SIM-2026-SHIAC-8891',
        date: '2026-10-23 16:45',
        scenarioTitle: 'Vụ Tranh Chấp Hợp Đồng Chip Bán Dẫn HuaXin Thượng Hải & Sự Cố Biển Đỏ',
        category: 'Luật & Trọng Tài',
        categoryColor: '#00F0FF',
        turns: 6,
        score: 86,
        tier: 'XUẤT SẮC (Tier 1)',
        tierColor: '#34D399',
        lawScore: 88,
        langScore: 85,
        mgmtScore: 82,
        econScore: 89,
        transcriptCount: 12
      },
      {
        id: 'SIM-2026-VIAC-7732',
        date: '2026-10-22 14:10',
        scenarioTitle: 'Vụ Kiện Gian Lận Xuất Xứ Hàng Hóa C/O Form E & Hàng Kẹt Cảng CIF',
        category: 'Thương Mại & Ngoại Thương',
        categoryColor: '#F59E0B',
        turns: 5,
        score: 79,
        tier: 'ĐẠT YÊU CẦU (Tier 2)',
        tierColor: '#60A5FA',
        lawScore: 78,
        langScore: 80,
        mgmtScore: 76,
        econScore: 82,
        transcriptCount: 10
      },
      {
        id: 'SIM-2026-PR-9921',
        date: '2026-10-21 09:30',
        scenarioTitle: 'Đại Chiến Phá Giá Livestream TikTok Shop & Khủng Hoảng KOLs Bóc Phốt',
        category: 'Kinh Doanh & PR TikTok',
        categoryColor: '#E879F9',
        turns: 7,
        score: 91,
        tier: 'XUẤT SẮC (Tier 1)',
        tierColor: '#34D399',
        lawScore: 92,
        langScore: 90,
        mgmtScore: 94,
        econScore: 88,
        transcriptCount: 14
      }
    ];
  });

  const handleStartScenario = (scenario) => {
    setActiveScenario(scenario);
    setCurrentView('simulation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishSimulation = (data) => {
    setSessionData(data);

    // Save to history list
    const overallScore = Math.round((data.scores.law + data.scores.lang + data.scores.mgmt + data.scores.econ) / 4);
    const newRecord = {
      id: `SIM-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' }),
      scenarioTitle: activeScenario.title,
      category: activeScenario.fieldName || 'Liên Ngành',
      categoryColor: activeScenario.fieldColor || '#00F0FF',
      turns: data.turnCount,
      score: overallScore,
      tier: overallScore >= 85 ? 'XUẤT SẮC (Tier 1)' : overallScore >= 70 ? 'ĐẠT YÊU CẦU (Tier 2)' : 'CẦN HOÀN THIỆN (Tier 3)',
      tierColor: overallScore >= 85 ? '#34D399' : overallScore >= 70 ? '#60A5FA' : '#FBBF24',
      scores: data.scores,
      messages: data.messages,
      transcriptCount: data.messages?.length || 8
    };

    const updated = [newRecord, ...historyList];
    setHistoryList(updated);
    try {
      localStorage.setItem('simlab_history_v2', JSON.stringify(updated));
    } catch (e) {}

    setCurrentView('rubric');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSheet = (session = null) => {
    const targetSession = session || sessionData || historyList[0];
    setSheetModalSession(targetSession);
    setIsSheetModalOpen(true);
  };

  const handleReplayScenario = (item) => {
    const match = SCENARIOS.find(s => s.title === item.scenarioTitle) || SCENARIOS[0];
    handleStartScenario(match);
  };

  const handleViewRubric = (item) => {
    setSessionData({
      scores: item.scores || { law: 85, lang: 88, mgmt: 82, econ: 90 },
      turnCount: item.turns || 5,
      messages: item.messages || []
    });
    const match = SCENARIOS.find(s => s.title === item.scenarioTitle) || SCENARIOS[0];
    setActiveScenario(match);
    setCurrentView('rubric');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#060913', color: '#F8FAFC' }}>
      
      {/* Sticky Top Navigation (Show on sub-views, Landing has its own hero pill nav) */}
      {currentView !== 'landing' && (
        <Navbar 
          currentView={currentView}
          onNavigate={handleNavigate}
          onOpenHearingModal={() => setIsHearingModalOpen(true)}
          language={language}
          onLanguageChange={(lang) => setLanguage(lang)}
          onOpenVideoGuide={() => setIsVideoGuideOpen(true)}
        />
      )}

      {/* Main View Router */}
      <main style={{ flex: 1 }}>
        {currentView === 'landing' && (
          <LandingView 
            onStartScenario={handleStartScenario}
            onOpenHearingModal={() => setIsHearingModalOpen(true)}
            onOpenVideoGuide={() => setIsVideoGuideOpen(true)}
            onNavigate={handleNavigate}
            language={language}
          />
        )}

        {currentView === 'mission' && (
          <MissionView 
            language={language}
            onStartSimulation={() => setIsHearingModalOpen(true)}
          />
        )}

        {currentView === 'history' && (
          <HistoryView 
            history={historyList}
            language={language}
            onOpenSheet={handleOpenSheet}
            onViewRubric={handleViewRubric}
            onReplayScenario={handleReplayScenario}
            onStartHearing={() => setIsHearingModalOpen(true)}
          />
        )}

        {currentView === 'simulation' && (
          <SimChamber 
            scenario={activeScenario}
            onFinish={handleFinishSimulation}
            onBack={() => handleNavigate('landing')}
          />
        )}

        {currentView === 'rubric' && (
          <ReportRubric 
            sessionData={sessionData}
            scenario={activeScenario}
            onRetry={() => handleStartScenario(activeScenario)}
            onHome={() => handleNavigate('landing')}
            language={language}
            onOpenSheet={handleOpenSheet}
          />
        )}
      </main>

      {/* Hearing Selection Modal (Random Mode & Student Custom Mode) */}
      <HearingEntryModal 
        isOpen={isHearingModalOpen}
        onClose={() => setIsHearingModalOpen(false)}
        onSelectScenario={handleStartScenario}
        language={language}
      />

      {/* YouTube Guide Video Modal */}
      <VideoGuideModal 
        isOpen={isVideoGuideOpen}
        onClose={() => setIsVideoGuideOpen(false)}
      />

      {/* Google Sheet Viewer Modal (View-Only) */}
      <SheetViewerModal 
        isOpen={isSheetModalOpen}
        onClose={() => setIsSheetModalOpen(false)}
        sessionData={sheetModalSession}
        scenario={activeScenario}
        language={language}
      />

      {/* Floating Virtual AI Assistant (Bottom-Right) */}
      <FloatingAssistant language={language} />

      {/* Global Footer with Social Links & Branding */}
      <Footer />
    </div>
  );
}
