import React from 'react';
import { clinic } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export default function ChapterIntro({ onOpenBooking }) {
  const { t } = useLanguage();

  return (
    <section
      id="treatments"
      className="clinic-intro"
      style={{
        backgroundColor: '#f7f4ed',
        backgroundImage: 'radial-gradient(#dcd5c7 0.8px, transparent 0.8px)',
        backgroundSize: '18px 18px',
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        borderTop: '1px solid #e2dad0',
        borderBottom: '1px solid #e2dad0',
        position: 'relative'
      }}
      aria-label="Specialized Treatment & About Dr Somani's Homoeopathy"
    >
      <div className="container">
        <div className="clinic-intro__card" style={{
          maxWidth: '920px',
          margin: '0 auto',
          background: '#fdfbf7',
          borderRadius: '16px',
          padding: 'clamp(1.75rem, 4vw, 3.25rem)',
          border: '1px solid #e2dad0',
          boxShadow: '0 14px 28px rgba(35, 30, 20, 0.08), 2px 3px 4px rgba(35, 30, 20, 0.05)',
          position: 'relative'
        }}>
          
          <div className="clinic-intro__meta" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: '0.78rem',
              color: '#dc2626',
              background: 'rgba(220, 38, 38, 0.08)',
              padding: '0.2rem 0.65rem',
              borderRadius: '4px',
              border: '1px solid rgba(220, 38, 38, 0.2)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              {t('intro.badge') || 'About the Clinic'}
            </span>
            <span style={{ fontFamily: "'Special Elite', monospace", fontSize: '0.82rem', color: '#17392e', fontWeight: 600 }}>
              {t('intro.years') || '28+ Years of Trusted Healthcare'}
            </span>
          </div>

          <h2 className="clinic-intro__title" style={{
            fontSize: 'clamp(1.85rem, 3.8vw, 3rem)',
            color: '#1c2621',
            fontFamily: "'Special Elite', monospace",
            fontWeight: 400,
            lineHeight: 1.18,
            marginBottom: '0.75rem'
          }}>
            {t('intro.h2') || 'Compassionate, root-cause healing for over two decades.'}
          </h2>

          <div className="clinic-intro__copy" style={{
            width: '180px',
            height: '8px',
            borderTop: '3px solid #d94838',
            borderRadius: '50%',
            marginBottom: '1.5rem',
            opacity: 0.8
          }} />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            color: '#2a3630',
            fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
            lineHeight: 1.75
          }}>
            <p>
              {t('intro.p1')}
            </p>

            <p>
              {t('intro.p2')}
            </p>

            <p>
              {t('intro.p3')}
            </p>

            <p style={{ fontWeight: 600, color: '#17392e' }}>
              {t('intro.p4')}
            </p>
          </div>

          <div className="clinic-intro__actions" style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <button className="btn-primary" onClick={onOpenBooking}>
              {t('intro.bookBtn') || 'Book a Consultation →'}
            </button>
            <a href="tel:+919834172124" className="btn-outline" style={{ fontFamily: "'Special Elite', monospace" }}>
              {t('intro.callBtn') || 'Call: +91 98341 72124'}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

