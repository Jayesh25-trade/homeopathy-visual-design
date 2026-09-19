import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustStrip() {
  const { t } = useLanguage();

  const stats = [
    { value: t('trust.years'), label: t('trust.yearsSub') },
    { value: t('trust.patients'), label: t('trust.patientsSub') },
    { value: t('trust.generations'), label: t('trust.generationsSub') },
    { value: t('trust.clinics'), label: t('trust.clinicsSub') },
    { value: t('trust.safe'), label: t('trust.safeSub') },
  ];

  return (
    <section
      aria-label="Practice statistics"
      style={{
        background: '#FAF7F2',
        borderTop: '1px solid rgba(14,74,71,0.12)',
        borderBottom: '1px solid rgba(14,74,71,0.12)',
        padding: 'clamp(20px,4vw,36px) 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="container trust-strip-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '0',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(12px,2vw,20px) clamp(8px,1.5vw,16px)',
              borderRight: i < stats.length - 1
                ? '1px solid rgba(14,74,71,0.12)'
                : 'none',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)',
                color: '#C49A45',
                lineHeight: 1,
                marginBottom: '6px',
                letterSpacing: '-0.01em',
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: 'clamp(0.72rem, 1.1vw, 0.88rem)',
                color: '#0E4A47',
                marginBottom: '3px',
                letterSpacing: '0.01em',
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          [aria-label="Practice statistics"] .container {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          [aria-label="Practice statistics"] .container > div:nth-child(3) {
            border-right: none !important;
          }
          [aria-label="Practice statistics"] .container > div:nth-child(4),
          [aria-label="Practice statistics"] .container > div:nth-child(5) {
            border-top: 1px solid rgba(14,74,71,0.12);
          }
          [aria-label="Practice statistics"] .container > div:nth-child(5) {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
