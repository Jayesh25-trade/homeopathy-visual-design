import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Paperclip, Sparkles, Bot, User, CheckCircle2 } from 'lucide-react';
import { sanjeevaniFaqs, clinicInfo } from '../data/clinicData';

export default function SanjeevaniAI({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Namaste! 🙏 I am Sanjeevani, Dr. Somani's digital health assistant. How can I help you today? You can choose a quick question below or ask me anything!"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [attachedFile, setAttachedFile] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend = inputText) => {
    if (!textToSend.trim() && !attachedFile) return;

    const userMsg = {
      sender: 'user',
      text: textToSend + (attachedFile ? ` [Attached: ${attachedFile.name}]` : '')
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setAttachedFile(null);

    // Simulate AI response
    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let botAnswer = "Dr. Somani offers safe, side-effect-free classical homeopathy with over 27 years of experience. Would you like to book an appointment or send your details directly to the clinic on WhatsApp?";

      // FAQ match logic
      if (lower.includes('safe') || lower.includes('baby') || lower.includes('child') || lower.includes('infant')) {
        botAnswer = sanjeevaniFaqs[0].answer;
      } else if (lower.includes('skin') || lower.includes('vitiligo') || lower.includes('result') || lower.includes('long')) {
        botAnswer = sanjeevaniFaqs[1].answer;
      } else if (lower.includes('online') || lower.includes('video') || lower.includes('virtual')) {
        botAnswer = sanjeevaniFaqs[2].answer;
      } else if (lower.includes('allopathy') || lower.includes('other medicine') || lower.includes('current')) {
        botAnswer = sanjeevaniFaqs[3].answer;
      } else if (lower.includes('location') || lower.includes('pune') || lower.includes('jalgaon') || lower.includes('address')) {
        botAnswer = sanjeevaniFaqs[4].answer;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botAnswer }]);
    }, 600);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleSendToWhatsApp = () => {
    const chatSummary = messages
      .filter(m => m.sender === 'user')
      .map(m => `• ${m.text}`)
      .join('\n');

    const text = `Hi Dr. Somani, I was chatting with Sanjeevani Assistant on your website:\n\n` +
      `*My Questions / Notes*:\n${chatSummary}\n\n` +
      `Please connect me with a clinic doctor.`;

    window.open(`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      {/* Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 990,
            background: 'linear-gradient(135deg, #10b981 0%, #0d3b2e 100%)',
            color: '#ffffff',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '99px',
            padding: '12px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700',
            fontSize: '0.92rem'
          }}
          className="animate-glow"
        >
          <span style={{ fontSize: '1.2rem' }}>🌸</span>
          <span>Ask Sanjeevani AI</span>
        </button>
      )}

      {/* AI Chat Window Drawer */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          width: 'calc(100vw - 32px)',
          maxWidth: '420px',
          height: '580px',
          maxHeight: '85vh',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 50px rgba(13, 59, 46, 0.3)',
          border: '2px solid rgba(16, 185, 129, 0.3)'
        }} className="glass-panel">
          
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #0d3b2e 0%, #10b981 100%)',
            color: '#ffffff',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#ffffff',
                color: '#0d3b2e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800'
              }}>
                🌸
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.05rem', lineHeight: '1.1' }}>Sanjeevani AI</div>
                <div style={{ fontSize: '0.75rem', color: '#a7f3d0' }}>Dr. Somani's Clinic Assistant</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <X size={22} />
            </button>
          </div>

          {/* Quick FAQ Suggestion Chips */}
          <div style={{
            padding: '10px 14px',
            background: 'var(--mint-bg)',
            borderBottom: '1px solid rgba(16, 185, 129, 0.15)',
            display: 'flex',
            gap: '6px',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}>
            {sanjeevaniFaqs.slice(0, 4).map((faq, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(faq.question)}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '99px',
                  padding: '4px 12px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--primary-dark)',
                  cursor: 'pointer'
                }}
              >
                {faq.question}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            background: '#fafdfa'
          }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius: m.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: m.sender === 'user' ? 'linear-gradient(135deg, #10b981 0%, #0d3b2e 100%)' : '#ffffff',
                  color: m.sender === 'user' ? '#ffffff' : 'var(--text-main)',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  boxShadow: 'var(--shadow-sm)',
                  border: m.sender === 'bot' ? '1px solid rgba(16, 185, 129, 0.15)' : 'none'
                }}
              >
                {m.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Action to Handoff to WhatsApp */}
          <div style={{ padding: '8px 14px', background: '#f0fdf4', borderTop: '1px solid rgba(16, 185, 129, 0.15)' }}>
            <button
              onClick={handleSendToWhatsApp}
              style={{
                width: '100%',
                background: '#25d366',
                color: '#ffffff',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                padding: '8px',
                fontSize: '0.82rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <MessageSquare size={14} />
              <span>Send My Chat Details to Clinic on WhatsApp</span>
            </button>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            style={{
              padding: '12px 14px',
              background: '#ffffff',
              borderTop: '1px solid rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <label style={{ cursor: 'pointer', color: 'var(--text-muted)' }} title="Attach report (PDF/Image)">
              <Paperclip size={18} />
              <input type="file" onChange={handleFileChange} accept="image/*,application/pdf" style={{ display: 'none' }} />
            </label>

            {attachedFile && (
              <span style={{ fontSize: '0.75rem', background: 'var(--mint-bg)', padding: '2px 6px', borderRadius: '4px' }}>
                📎 {attachedFile.name.substring(0, 10)}...
              </span>
            )}

            <input
              type="text"
              placeholder="Ask Sanjeevani..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-sans)'
              }}
            />

            <button
              type="submit"
              style={{
                background: 'var(--emerald-accent)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Send size={16} />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
