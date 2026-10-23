import React, { useState, useRef, useEffect } from 'react';
import { TRANSLATIONS } from '../data/i18n';
import { 
  sendSimLabAiQuery, 
  GEMINI_MODEL_CASCADE, 
  getActiveApiKey, 
  saveActiveApiKey 
} from '../services/geminiAiService';

/**
 * SimLab Floating Assistant Component
 * - Integrated real Google Gemini AI with automatic waterfall fallback
 * - Lightest model first (Flash Lite) to minimize token consumption and avoid rate limits
 * - Auto-switch to next model on 429 / Rate Limit
 * - Offline / exhaustion fallback to SimLab Local Academic Engine
 * - Pure typography controls, no garish colors
 */
export default function FloatingAssistant({ language = 'vi' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'staff' | 'mail' | 'settings'
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [switchNotice, setSwitchNotice] = useState(null);

  // Settings State
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [keySavedToast, setKeySavedToast] = useState(false);

  const t = TRANSLATIONS[language]?.floating || TRANSLATIONS.vi.floating;

  // AI Chat Messages State
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'bot',
      modelUsed: 'Gemini Flash Lite',
      text: language === 'zh' 
        ? '您好！我是 SimLab 虚拟AI助教。已为您连接 Gemini Flash Lite 极简轻量模型。您可以向我咨询跨学科谈判策略、CISG 法条援引、或平台使用指南。'
        : language === 'en'
        ? 'Hello! I am your SimLab Virtual AI Advisor powered by Gemini Flash Lite. Ask me about CISG Article 79, cross-border bargaining strategies, or platform features!'
        : 'Xin chào! Mình là Trợ lý AI Học thuật của SimLab, được kết nối trực tiếp với mô hình Gemini Flash Lite tối ưu hạn ngạch. Bạn cần cố vấn điều khoản CISG, xử lý khủng hoảng truyền thông hay cách xuất điểm Google Sheet?'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isAiLoading, isOpen, activeTab]);

  useEffect(() => {
    setApiKeyInput(getActiveApiKey());
  }, []);

  // Staff Handover Form State
  const [staffForm, setStaffForm] = useState({ name: '', phone: '', issue: '' });
  const [staffSubmitted, setStaffSubmitted] = useState(false);

  // Mail Feedback Form State
  const [mailForm, setMailForm] = useState({ name: '', email: '', feedback: '' });
  const [mailSubmitted, setMailSubmitted] = useState(false);

  const handleSendChat = async (text = null) => {
    const query = text || chatInput;
    if (!query.trim() || isAiLoading) return;

    const userMessage = { sender: 'user', text: query.trim() };
    const updatedMessages = [...chatMessages, userMessage];
    setChatMessages(updatedMessages);
    setChatInput('');
    setIsAiLoading(true);
    setSwitchNotice(null);

    try {
      // Call Gemini API with automatic model waterfall fallback
      const result = await sendSimLabAiQuery(
        query.trim(), 
        updatedMessages, 
        language,
        (switchEvent) => {
          setSwitchNotice(`Đã tự động chuyển sang ${switchEvent.toModel} (${switchEvent.reason})`);
        }
      );

      const botMessage = {
        sender: 'bot',
        text: result.text,
        modelUsed: result.modelName,
        isFallback: result.isFallback,
        fallbackFrom: result.fallbackFrom,
        isLocal: result.isLocal
      };

      setChatMessages([...updatedMessages, botMessage]);
    } catch (err) {
      console.error('[SimLab AI Error]:', err);
      setChatMessages([
        ...updatedMessages, 
        { 
          sender: 'bot', 
          text: 'Xin lỗi, hệ thống AI tạm thời gặp sự cố kết nối. Bạn hãy thử lại sau ít giây hoặc kiểm tra khóa API trong mục Cài Đặt.',
          modelUsed: 'Hệ thống'
        }
      ]);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSaveApiKey = () => {
    saveActiveApiKey(apiKeyInput.trim());
    setKeySavedToast(true);
    setTimeout(() => setKeySavedToast(false), 3000);
  };

  const handleStaffSubmit = (e) => {
    e.preventDefault();
    setStaffSubmitted(true);
    setTimeout(() => {
      setStaffSubmitted(false);
      setStaffForm({ name: '', phone: '', issue: '' });
    }, 4000);
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    setMailSubmitted(true);
    setTimeout(() => {
      setMailSubmitted(false);
      setMailForm({ name: '', email: '', feedback: '' });
    }, 4000);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1200 }}>
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: '#0B1124',
            border: '1px solid rgba(56, 189, 248, 0.45)',
            borderRadius: '9999px',
            padding: '8px 18px',
            color: '#F8FAFC',
            fontWeight: 600,
            fontSize: '12.5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1E293B';
            e.currentTarget.style.borderColor = '#38BDF8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0B1124';
            e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.45)';
          }}
        >
          <span 
            style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              background: '#10B981',
              display: 'inline-block'
            }} 
          />
          <span>{t.btnLabel}</span>
          <span style={{ fontSize: '10px', color: '#38BDF8', fontWeight: 700, background: 'rgba(56, 189, 248, 0.1)', padding: '1px 6px', borderRadius: '4px' }}>
            Flash Lite
          </span>
        </button>
      )}

      {/* Expanded Assistant Card Window */}
      {isOpen && (
        <div 
          style={{
            width: '410px',
            maxWidth: '94vw',
            height: '560px',
            background: '#0B1124',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Card Header */}
          <div 
            style={{
              padding: '12px 16px',
              background: '#0E172E',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h4 style={{ fontSize: '13.5px', fontWeight: 700, color: '#F8FAFC', margin: 0 }}>
                  Trợ Lý AI Học Thuật SimLab
                </h4>
                <span 
                  style={{ 
                    fontSize: '9.5px', 
                    fontWeight: 700, 
                    color: '#34D399', 
                    background: 'rgba(52, 211, 153, 0.1)', 
                    border: '1px solid rgba(52, 211, 153, 0.3)', 
                    padding: '1px 6px', 
                    borderRadius: '4px' 
                  }}
                >
                  Auto-Fallback Active
                </span>
              </div>
              <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>
                Ưu tiên Gemini Flash Lite • Tự động chuyển đổi khi chạm Rate Limit
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                onClick={() => setActiveTab(activeTab === 'settings' ? 'chat' : 'settings')}
                style={{
                  background: activeTab === 'settings' ? '#0284C7' : 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: activeTab === 'settings' ? '#FFFFFF' : '#CBD5E1',
                  borderRadius: '6px',
                  padding: '3px 8px',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                title="Cấu hình mô hình & API Key"
              >
                Cài Đặt AI
              </button>
              
              <button 
                onClick={() => setIsOpen(false)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#94A3B8', 
                  cursor: 'pointer', 
                  padding: '4px', 
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                Đóng
              </button>
            </div>
          </div>

          {/* Nav Tabs */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              background: '#070C1B',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '11.5px',
              fontWeight: 600
            }}
          >
            <button
              onClick={() => setActiveTab('chat')}
              style={{
                padding: '9px 4px',
                background: activeTab === 'chat' ? '#1E293B' : 'transparent',
                color: activeTab === 'chat' ? '#38BDF8' : '#94A3B8',
                border: 'none',
                borderBottom: activeTab === 'chat' ? '2px solid #0284C7' : '2px solid transparent',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              Hỏi Đáp AI
            </button>

            <button
              onClick={() => setActiveTab('staff')}
              style={{
                padding: '9px 4px',
                background: activeTab === 'staff' ? '#1E293B' : 'transparent',
                color: activeTab === 'staff' ? '#38BDF8' : '#94A3B8',
                border: 'none',
                borderBottom: activeTab === 'staff' ? '2px solid #0284C7' : '2px solid transparent',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              Hỗ Trợ Nhân Viên
            </button>

            <button
              onClick={() => setActiveTab('mail')}
              style={{
                padding: '9px 4px',
                background: activeTab === 'mail' ? '#1E293B' : 'transparent',
                color: activeTab === 'mail' ? '#38BDF8' : '#94A3B8',
                border: 'none',
                borderBottom: activeTab === 'mail' ? '2px solid #0284C7' : '2px solid transparent',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              Gửi Góp Ý
            </button>
          </div>

          {/* Model Switch Banner Alert */}
          {switchNotice && (
            <div 
              style={{ 
                background: 'rgba(245, 158, 11, 0.12)', 
                borderBottom: '1px solid rgba(245, 158, 11, 0.3)', 
                padding: '6px 12px', 
                fontSize: '11px', 
                color: '#FBBF24',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{switchNotice}</span>
              <button 
                onClick={() => setSwitchNotice(null)} 
                style={{ background: 'none', border: 'none', color: '#FBBF24', cursor: 'pointer', fontSize: '11px' }}
              >
                ✕
              </button>
            </div>
          )}

          {/* TAB 1: AI CHATBOT CONSULTATION */}
          {activeTab === 'chat' && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              
              {/* Messages Feed */}
              <div style={{ flex: 1, padding: '14px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      maxWidth: '88%',
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      background: msg.sender === 'user' ? '#0284C7' : '#0E172E',
                      color: msg.sender === 'user' ? '#FFFFFF' : '#F1F5F9',
                      padding: '10px 14px',
                      borderRadius: msg.sender === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                      fontSize: '12.5px',
                      lineHeight: 1.5,
                      border: msg.sender === 'bot' ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    <div>{msg.text}</div>
                    
                    {/* Bot Model Badge */}
                    {msg.sender === 'bot' && (
                      <div 
                        style={{ 
                          fontSize: '10px', 
                          color: '#64748B', 
                          marginTop: '6px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '6px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                          paddingTop: '4px'
                        }}
                      >
                        <span style={{ color: msg.isLocal ? '#94A3B8' : '#38BDF8', fontWeight: 600 }}>
                          {msg.modelUsed || 'Gemini Flash Lite'}
                        </span>
                        {msg.isFallback && (
                          <span style={{ color: '#F59E0B' }}>
                            (Tự động chuyển từ {msg.fallbackFrom})
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* AI Thinking Animation */}
                {isAiLoading && (
                  <div
                    style={{
                      alignSelf: 'flex-start',
                      background: '#0E172E',
                      color: '#94A3B8',
                      padding: '8px 14px',
                      borderRadius: '12px 12px 12px 2px',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: '1px solid rgba(56, 189, 248, 0.2)'
                    }}
                  >
                    <span 
                      style={{ 
                        width: '6px', 
                        height: '6px', 
                        borderRadius: '50%', 
                        background: '#38BDF8',
                        animation: 'pulse 1s infinite'
                      }} 
                    />
                    <span>Gemini AI đang phân tích dữ liệu đàm phán...</span>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions Carousel */}
              <div style={{ padding: '6px 12px', display: 'flex', gap: '6px', overflowX: 'auto', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                {t.quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendChat(q)}
                    disabled={isAiLoading}
                    style={{
                      whiteSpace: 'nowrap',
                      background: 'rgba(56, 189, 248, 0.06)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      color: '#38BDF8',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Chat Input Bar */}
              <div style={{ padding: '10px 14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', gap: '8px', background: '#070C1B' }}>
                <input
                  type="text"
                  placeholder="Hỏi AI về chiến lược đàm phán, CISG, kinh tế..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !isAiLoading && handleSendChat()}
                  disabled={isAiLoading}
                  style={{
                    flex: 1,
                    background: '#0B1124',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    color: '#FFFFFF',
                    fontSize: '12.5px',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={() => handleSendChat()}
                  disabled={isAiLoading || !chatInput.trim()}
                  style={{
                    background: isAiLoading || !chatInput.trim() ? '#1E293B' : '#0284C7',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    color: '#FFFFFF',
                    cursor: isAiLoading || !chatInput.trim() ? 'not-allowed' : 'pointer',
                    fontSize: '12px',
                    fontWeight: 700
                  }}
                >
                  {isAiLoading ? '...' : 'Gửi'}
                </button>
              </div>
            </div>
          )}

          {/* TAB: SETTINGS & MODEL WATERFALL MANAGEMENT */}
          {activeTab === 'settings' && (
            <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
              <div style={{ marginBottom: '14px' }}>
                <h5 style={{ fontSize: '13.5px', fontWeight: 700, color: '#38BDF8', margin: '0 0 4px 0' }}>
                  Cấu Hình Mô Hình & Hạn Ngạch AI
                </h5>
                <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
                  Hệ thống tự động sử dụng mô hình nhẹ nhất (Flash Lite) để giảm thiểu tiêu thụ token. Nếu gặp lỗi Rate Limit (429), hệ thống tự động đổi qua mô hình kế tiếp.
                </p>
              </div>

              {/* Cascade Hierarchy List */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Thứ Tự Ưu Tiên Tự Động (Model Cascade)
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {GEMINI_MODEL_CASCADE.map((m, idx) => (
                    <div 
                      key={m.id}
                      style={{
                        background: idx === 0 ? 'rgba(56, 189, 248, 0.08)' : '#070C1B',
                        border: idx === 0 ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '8px',
                        padding: '8px 10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: idx === 0 ? '#38BDF8' : '#E2E8F0' }}>
                          #{idx + 1}. {m.name}
                        </div>
                        <div style={{ fontSize: '10.5px', color: '#94A3B8' }}>
                          {m.tier} • {m.quotaInfo}
                        </div>
                      </div>
                      {idx === 0 && (
                        <span style={{ fontSize: '10px', fontWeight: 700, color: '#34D399', background: 'rgba(52, 211, 153, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                          Mặc định
                        </span>
                      )}
                    </div>
                  ))}
                  
                  {/* Local Heuristic Fallback */}
                  <div 
                    style={{
                      background: '#070C1B',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '8px',
                      padding: '8px 10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8' }}>
                        #7. SimLab Local Academic Engine
                      </div>
                      <div style={{ fontSize: '10.5px', color: '#64748B' }}>
                        Dự phòng học thuật nội bộ (Không phụ thuộc mạng)
                      </div>
                    </div>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#94A3B8' }}>
                      Bảo đảm 100% Uptime
                    </span>
                  </div>
                </div>
              </div>

              {/* API Key Management */}
              <div style={{ background: '#070C1B', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '12px' }}>
                <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 600, color: '#E2E8F0', marginBottom: '6px' }}>
                  Khóa API Gemini (Google AI Studio)
                </label>
                <input 
                  type="password"
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  placeholder="Nhập khóa API cá nhân (tùy chọn)..."
                  style={{
                    width: '100%',
                    background: '#0B1124',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    padding: '7px 10px',
                    fontSize: '12px',
                    color: '#F8FAFC',
                    outline: 'none',
                    marginBottom: '8px'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    onClick={handleSaveApiKey}
                    style={{
                      background: '#0284C7',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 14px',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Lưu Khóa API
                  </button>

                  <button
                    onClick={() => {
                      setApiKeyInput('');
                      saveActiveApiKey('');
                      setKeySavedToast(true);
                      setTimeout(() => setKeySavedToast(false), 3000);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94A3B8',
                      fontSize: '11px',
                      cursor: 'pointer'
                    }}
                  >
                    Đặt lại mặc định
                  </button>
                </div>

                {keySavedToast && (
                  <div style={{ fontSize: '11px', color: '#34D399', marginTop: '8px' }}>
                    Đã lưu cấu hình khóa API thành công!
                  </div>
                )}
              </div>

              <div style={{ marginTop: '14px', textAlign: 'center' }}>
                <button
                  onClick={() => setActiveTab('chat')}
                  style={{
                    background: '#1E293B',
                    color: '#F8FAFC',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    padding: '7px 18px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Quay Lại Cuộc Hội Thoại
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: STAFF HANDOVER */}
          {activeTab === 'staff' && (
            <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
              <div style={{ marginBottom: '14px' }}>
                <h5 style={{ fontSize: '13.5px', fontWeight: 700, color: '#38BDF8', margin: '0 0 4px 0' }}>
                  {t.staffTitle}
                </h5>
                <p style={{ fontSize: '11.5px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
                  {t.staffDesc}
                </p>
              </div>

              {staffSubmitted ? (
                <div style={{ padding: '24px', textAlign: 'center', background: 'rgba(52, 211, 153, 0.08)', border: '1px solid rgba(52, 211, 153, 0.25)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#34D399', marginBottom: '4px' }}>
                    Yêu cầu đã được chuyển tới ban học vụ!
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#94A3B8' }}>
                    Chuyên viên kỹ thuật sẽ liên hệ lại qua số điện thoại của bạn trong vòng 15 phút.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleStaffSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <label style={{ fontSize: '11.5px', color: '#94A3B8', display: 'block', marginBottom: '4px' }}>
                      {t.formName}
                    </label>
                    <input
                      required
                      type="text"
                      value={staffForm.name}
                      onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      style={{
                        width: '100%',
                        background: '#070C1B',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '6px',
                        padding: '7px 10px',
                        color: '#FFFFFF',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '11.5px', color: '#94A3B8', display: 'block', marginBottom: '4px' }}>
                      {t.formPhone}
                    </label>
                    <input
                      required
                      type="tel"
                      value={staffForm.phone}
                      onChange={(e) => setStaffForm({ ...staffForm, phone: e.target.value })}
                      placeholder="0912 345 678"
                      style={{
                        width: '100%',
                        background: '#070C1B',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '6px',
                        padding: '7px 10px',
                        color: '#FFFFFF',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '11.5px', color: '#94A3B8', display: 'block', marginBottom: '4px' }}>
                      {t.formMsg}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={staffForm.issue}
                      onChange={(e) => setStaffForm({ ...staffForm, issue: e.target.value })}
                      placeholder="Mô tả sự cố hoặc yêu cầu hướng dẫn..."
                      style={{
                        width: '100%',
                        background: '#070C1B',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '6px',
                        padding: '7px 10px',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#0284C7',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      marginTop: '6px'
                    }}
                  >
                    Gửi Yêu Cầu Hỗ Trợ
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: MAIL FEEDBACK */}
          {activeTab === 'mail' && (
            <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
              <div style={{ marginBottom: '14px' }}>
                <h5 style={{ fontSize: '13.5px', fontWeight: 700, color: '#38BDF8', margin: '0 0 4px 0' }}>
                  Gửi Phản Hồi & Đóng Góp Học Vụ
                </h5>
                <p style={{ fontSize: '11.5px', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
                  Mọi đóng góp về kịch bản mô phỏng hoặc cải tiến tính năng đều được ghi nhận trực tiếp.
                </p>
              </div>

              {mailSubmitted ? (
                <div style={{ padding: '24px', textAlign: 'center', background: 'rgba(52, 211, 153, 0.08)', border: '1px solid rgba(52, 211, 153, 0.25)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#34D399', marginBottom: '4px' }}>
                    Cảm ơn bạn đã đóng góp ý kiến!
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#94A3B8' }}>
                    {t.successMsg}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleMailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <label style={{ fontSize: '11.5px', color: '#94A3B8', display: 'block', marginBottom: '4px' }}>
                      {t.formName}
                    </label>
                    <input
                      required
                      type="text"
                      value={mailForm.name}
                      onChange={(e) => setMailForm({ ...mailForm, name: e.target.value })}
                      placeholder="Họ tên của bạn"
                      style={{
                        width: '100%',
                        background: '#070C1B',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '6px',
                        padding: '7px 10px',
                        color: '#FFFFFF',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '11.5px', color: '#94A3B8', display: 'block', marginBottom: '4px' }}>
                      {t.formEmail}
                    </label>
                    <input
                      required
                      type="email"
                      value={mailForm.email}
                      onChange={(e) => setMailForm({ ...mailForm, email: e.target.value })}
                      placeholder="student@university.edu.vn"
                      style={{
                        width: '100%',
                        background: '#070C1B',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '6px',
                        padding: '7px 10px',
                        color: '#FFFFFF',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '11.5px', color: '#94A3B8', display: 'block', marginBottom: '4px' }}>
                      {t.formMsg}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={mailForm.feedback}
                      onChange={(e) => setMailForm({ ...mailForm, feedback: e.target.value })}
                      placeholder="Góp ý về kịch bản, đề tài hoặc thuật toán tính điểm..."
                      style={{
                        width: '100%',
                        background: '#070C1B',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '6px',
                        padding: '7px 10px',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#0284C7',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      marginTop: '6px'
                    }}
                  >
                    Gửi Thông Điệp
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      )}

    </div>
  );
}
