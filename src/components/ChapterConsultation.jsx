import React from 'react';
import { consultationSteps } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export default function ChapterConsultation({ onOpenBooking }) {
  const { t, dict } = useLanguage();

  const localizedSteps = dict?.onlineCare?.steps || t('onlineCare.steps');
  const steps = (Array.isArray(localizedSteps) && localizedSteps.length > 0) ? localizedSteps : consultationSteps;

  return (
    <section 
      id="consultation" 
      className="paper-section section-pad scroll-target"
      style={{ 
        backgroundColor: 'var(--bg)', 
        position: 'relative', 
        overflow: 'hidden',
        borderTop: '2px solid rgba(220, 38, 38, 0.2)',
        paddingTop: 'clamp(4rem, 7vw, 6.5rem)'
      }}
      aria-label="Online Homoeopathic Consultations"
    >
      {/* Botanical Microscopy Organic Wave Texture Layer */}
      <div
        className="parallax-layer"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/assets/botanical_microscopy.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-ocean" style={{ marginBottom: '0.85rem', background: 'rgba(220, 38, 38, 0.08)', color: '#dc2626', border: '1px solid rgba(220, 38, 38, 0.2)' }}>
            {t('onlineCare.badge') || 'Global Online Care'}
          </span>
          
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            color: 'var(--navy)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            lineHeight: 1.15,
            marginBottom: '0.5rem'
          }}>
            {t('onlineCare.h2') || 'Your Doctor, Just a Click Away'}
          </h2>

          <h3 style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: '#dc2626',
            fontWeight: 600,
            marginBottom: '1.75rem',
            fontStyle: 'italic',
            fontFamily: 'var(--font-serif)'
          }}>
            {t('onlineCare.sub') || 'Online Homoeopathic Consultations Across the Globe'}
          </h3>

          <div style={{
            color: 'var(--ink)',
            fontSize: '1.02rem',
            lineHeight: 1.75,
            textAlign: 'left',
            background: '#faf6ee',
            padding: '2rem 2.25rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(14, 14, 12, 0.14)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.1rem'
          }}>
            <p>
              {t('onlineCare.p1')}
            </p>

            <p>
              {t('onlineCare.p2')}
            </p>
          </div>
        </div>

        {/* 4 Consultation Step Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: '#faf6ee',
                padding: '1.75rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(14, 14, 12, 0.14)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 14px 32px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.04)';
              }}
            >
              <div style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#dc2626',
                fontFamily: 'var(--font-serif)',
                marginBottom: '0.6rem'
              }}>
                {step.n}
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--navy)', fontFamily: 'var(--font-serif)', marginBottom: '0.4rem', fontWeight: 500 }}>
                {step.title}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Action CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <button className="btn-primary" onClick={onOpenBooking} style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            {t('onlineCare.cta') || 'Book Your Online Consultation Now →'}
          </button>
        </div>

      </div>
    </section>
  );
}