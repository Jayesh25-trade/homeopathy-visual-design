import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ChapterJourney({ onOpenBooking }) {
  const { t, dict, lang } = useLanguage();

  const journeySteps = dict?.careJourney?.steps || t('careJourney.steps');
  const steps = (Array.isArray(journeySteps) && journeySteps.length > 0) ? journeySteps : [
    {
      num: '01',
      title: 'First Consultation',
      desc: 'An unhurried conversation covering your main complaint, medical history, physical generalities and life situation.'
    },
    {
      num: '02',
      title: 'Individual Remedy',
      desc: 'Selecting a single homoeopathic medicine tailored to your totality of symptoms, not just a disease label.'
    },
    {
      num: '03',
      title: 'Follow-Up Review',
      desc: 'Monitoring your response after 3–6 weeks to assess direction of cure and adjust dosage or remedy as required.'
    },
    {
      num: '04',
      title: 'Long-Term Wellness',
      desc: 'Sustained improvement with reduced frequency of remedy repetition as natural resilience is restored.'
    }
  ];

  return (
    <section 
      id="journey" 
      style={{
        backgroundColor: 'var(--bg)',
        padding: 'clamp(3rem, 6vw, 5.5rem) 0',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
      aria-label="Care Journey — Four Careful Steps"
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-ocean" style={{ marginBottom: '0.85rem' }}>
            {t('careJourney.badge') || 'Chapter 03 · Care Journey'}
          </span>

          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            color: 'var(--navy)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            lineHeight: 1.18,
            marginBottom: '0.75rem'
          }}>
            {t('careJourney.h2') || 'One path.'}<br />
            <em style={{ color: '#dc2626', fontStyle: 'italic' }}>{t('careJourney.h2Em') || 'Four careful steps.'}</em>
          </h2>

          <p style={{ color: 'var(--muted)', fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)', lineHeight: 1.6 }}>
            {t('careJourney.desc') || 'Homoeopathy works best when both patient and doctor understand the sequence of care.'}
          </p>
        </div>

        {/* 4 Steps Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
          position: 'relative'
        }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--white)',
                padding: '2rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(220, 38, 38, 0.08)',
                  color: '#dc2626',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  marginBottom: '1.25rem',
                  border: '1px solid rgba(220, 38, 38, 0.2)'
                }}>
                  {step.num}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  color: 'var(--navy)',
                  fontWeight: 500,
                  marginBottom: '0.6rem',
                  lineHeight: 1.25
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  {step.desc}
                </p>
              </div>

              <div style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#dc2626',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(0,0,0,0.06)'
              }}>
                {(t('careJourney.stepLabel') || 'Step {n} of 4 →').replace('{n}', (lang === 'mr' || lang === 'hi') ? ['१', '२', '३', '४'][idx] : (idx + 1))}
              </div>
            </div>
          ))}
        </div>

        {/* Real Clinic Environment Showcase */}
        <div style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: '#faf6ee',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(14, 14, 12, 0.14)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '1.25rem', textAlign: 'center' }}>
            {t('careJourney.envHeading') || 'A Peaceful, Unhurried Healing Environment'}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            
            {/* Consultation Desk (IMG_0768.JPEG) */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
              <img 
                src="/assets/client_photos/IMG_0768.JPEG" 
                alt="Doctor Consultation Interaction" 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.65rem 0.85rem', background: '#f2ece0' }}>
                <strong style={{ fontSize: '0.84rem', color: 'var(--navy)' }}>{t('careJourney.c1Title') || 'Attentive Consultation'}</strong>
                <p style={{ fontSize: '0.76rem', color: 'var(--muted)', margin: 0 }}>{t('careJourney.c1Desc') || 'Detailed history taking & compassionate listening'}</p>
              </div>
            </div>

            {/* Consultation Room Setup (IMG_0696.JPEG) */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
              <img 
                src="/assets/client_photos/IMG_0696.JPEG" 
                alt="Private Consultation Desk Room Setup" 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.65rem 0.85rem', background: '#f2ece0' }}>
                <strong style={{ fontSize: '0.84rem', color: 'var(--navy)' }}>{t('careJourney.c2Title') || 'Private Consultation Space'}</strong>
                <p style={{ fontSize: '0.76rem', color: 'var(--muted)', margin: 0 }}>{t('careJourney.c2Desc') || 'Clean, modern & confidential room setup'}</p>
              </div>
            </div>

            {/* Patient Lounge (IMG_0720.JPEG) */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
              <img 
                src="/assets/client_photos/IMG_0720.JPEG" 
                alt="Clinic Patient Waiting Lounge" 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.65rem 0.85rem', background: '#f2ece0' }}>
                <strong style={{ fontSize: '0.84rem', color: 'var(--navy)' }}>{t('careJourney.c3Title') || 'Comfortable Waiting Lounge'}</strong>
                <p style={{ fontSize: '0.76rem', color: 'var(--muted)', margin: 0 }}>{t('careJourney.c3Desc') || 'Warm reception seating for patients & families'}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center' }}>
          <button 
            className="btn-primary" 
            onClick={onOpenBooking}
            style={{ fontSize: '0.95rem', padding: '0.8rem 2.2rem' }}
          >
            {t('careJourney.startBtn') || 'Start Your Care Journey →'}
          </button>
        </div>

      </div>
    </section>
  );
}
