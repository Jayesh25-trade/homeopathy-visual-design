import React, { useState } from 'react';
import { HelpCircle, CheckCircle, ArrowRight, ArrowLeft, Sparkles, MessageCircle, RefreshCw } from 'lucide-react';
import { quizQuestions, clinicInfo } from '../data/clinicData';

export default function HealthQuiz({ onOpenBooking }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    concern: null,
    duration: null,
    mode: null
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (questionId, option) => {
    if (questionId === 1) {
      setAnswers(prev => ({ ...prev, concern: option.category }));
    } else if (questionId === 2) {
      setAnswers(prev => ({ ...prev, duration: option.duration }));
    } else if (questionId === 3) {
      setAnswers(prev => ({ ...prev, mode: option.mode }));
    }

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({ concern: null, duration: null, mode: null });
    setIsCompleted(false);
  };

  const generateWhatsAppText = () => {
    const text = `Hi Dr. Somani, I completed the Health Quiz on your website:\n\n` +
      `📌 *Condition*: ${answers.concern || 'Not specified'}\n` +
      `⏱️ *Duration*: ${answers.duration || 'Not specified'}\n` +
      `📍 *Preferred Mode*: ${answers.mode || 'Online Consultation'}\n\n` +
      `Please guide me on appointment availability and treatment plan.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="quiz" style={{
      padding: '80px 0',
      background: 'linear-gradient(180deg, #f7faf7 0%, #e6f4ea 50%, #f7faf7 100%)'
    }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={16} />
            <span>Interactive Assessment</span>
          </div>
          <h2 className="section-title">1-Minute Holistic Health Analyzer</h2>
          <p className="section-subtitle">
            Answer 3 quick questions to discover how Dr. Somani's classical homeopathic treatment can address your root-cause illness.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="glass-panel" style={{
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            border: '2px solid rgba(16, 185, 129, 0.2)',
            boxShadow: 'var(--shadow-lg)'
          }}>

            {!isCompleted ? (
              <div>
                {/* Progress Bar */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: 'var(--emerald-accent)'
                  }}>
                    <span>STEP {currentStep + 1} OF 3</span>
                    <span>{Math.round(((currentStep + 1) / 3) * 100)}% Completed</span>
                  </div>
                  <div style={{
                    height: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    borderRadius: '99px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${((currentStep + 1) / 3) * 100}%`,
                      background: 'linear-gradient(90deg, #10b981 0%, #0d3b2e 100%)',
                      borderRadius: '99px',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>

                {/* Question */}
                <h3 style={{
                  fontSize: '1.4rem',
                  color: 'var(--primary-dark)',
                  marginBottom: '24px',
                  fontWeight: '700'
                }}>
                  {quizQuestions[currentStep].question}
                </h3>

                {/* Options Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '14px',
                  marginBottom: '28px'
                }}>
                  {quizQuestions[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(quizQuestions[currentStep].id, opt)}
                      style={{
                        padding: '16px 20px',
                        background: '#ffffff',
                        border: '1.5px solid rgba(16, 185, 129, 0.2)',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '0.98rem',
                        fontWeight: '600',
                        color: 'var(--primary-dark)',
                        transition: 'all 0.2s ease',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--emerald-accent)';
                        e.currentTarget.style.background = 'var(--sage-card)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.2)';
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      {opt.icon && <span style={{ fontSize: '1.4rem' }}>{opt.icon}</span>}
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>

                {/* Back Button */}
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}
                  >
                    <ArrowLeft size={16} /> Back to previous question
                  </button>
                )}

              </div>
            ) : (
              /* Completed Result State */
              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981 0%, #0d3b2e 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  boxShadow: 'var(--shadow-glow)'
                }}>
                  <CheckCircle size={36} />
                </div>

                <span className="badge badge-emerald" style={{ marginBottom: '12px' }}>Assessment Complete</span>

                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                  Your Healing Pathway is Ready!
                </h3>

                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1.05rem' }}>
                  Based on your responses, Dr. Somani's classical homeopathic treatment is highly effective for <strong>{answers.concern}</strong> ({answers.duration}).
                </p>

                {/* Response Summary Card */}
                <div style={{
                  background: 'var(--sage-card)',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px dashed var(--emerald-accent)',
                  marginBottom: '28px',
                  textAlign: 'left',
                  maxWidth: '500px',
                  margin: '0 auto 28px auto'
                }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--emerald-accent)', marginBottom: '8px' }}>SUMMARY OF YOUR ENQUIRY</div>
                  <div style={{ fontSize: '0.95rem', marginBottom: '4px' }}>• <strong>Condition:</strong> {answers.concern}</div>
                  <div style={{ fontSize: '0.95rem', marginBottom: '4px' }}>• <strong>Duration:</strong> {answers.duration}</div>
                  <div style={{ fontSize: '0.95rem' }}>• <strong>Preferred Mode:</strong> {answers.mode}</div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
                  <a
                    href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${generateWhatsAppText()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: '14px 28px' }}
                  >
                    <MessageCircle size={20} />
                    <span>Send Summary to Clinic on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenBooking()}
                    className="btn btn-primary"
                    style={{ padding: '14px 28px' }}
                  >
                    <span>Book Consultation Now</span>
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={handleReset}
                    className="btn btn-secondary"
                    style={{ padding: '14px 20px' }}
                  >
                    <RefreshCw size={16} />
                    <span>Retake Quiz</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
