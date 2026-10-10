import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingView from './components/LandingView';
import SimChamber from './components/SimChamber';
import ReportRubric from './components/ReportRubric';
import CaseStudioModal from './components/CaseStudioModal';
import Footer from './components/Footer';
import { SCENARIOS } from './data/scenarios';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'simulation' | 'rubric'
  const [activeScenario, setActiveScenario] = useState(SCENARIOS[0]);
  const [sessionData, setSessionData] = useState(null);
  const [isStudioOpen, setIsStudioOpen] = useState(false);

  const handleStartScenario = (scenario) => {
    setActiveScenario(scenario);
    setCurrentView('simulation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishSimulation = (data) => {
    setSessionData(data);
    setCurrentView('rubric');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetry = () => {
    setCurrentView('simulation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHome = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCreateCustomScenario = (newScenario) => {
    handleStartScenario(newScenario);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#03080B' }}>
      {/* Show sticky header only when in simulation or rubric view */}
      {currentView !== 'landing' && (
        <Navbar 
          currentView={currentView}
          onNavigate={(view) => setCurrentView(view)}
          onQuickStart={() => handleStartScenario(SCENARIOS[0])}
          onOpenStudio={() => setIsStudioOpen(true)}
        />
      )}

      <main style={{ flex: 1 }}>
        {currentView === 'landing' && (
          <LandingView 
            onStartScenario={handleStartScenario}
            onOpenStudio={() => setIsStudioOpen(true)}
          />
        )}

        {currentView === 'simulation' && (
          <SimChamber 
            scenario={activeScenario}
            onFinish={handleFinishSimulation}
            onBack={handleHome}
          />
        )}

        {currentView === 'rubric' && (
          <ReportRubric 
            sessionData={sessionData}
            scenario={activeScenario}
            onRetry={handleRetry}
            onHome={handleHome}
          />
        )}
      </main>

      <CaseStudioModal 
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        onCreateScenario={handleCreateCustomScenario}
      />

      <Footer />
    </div>
  );
}
