import React, { useState, useEffect } from 'react';
import RootCanvas from './RootCanvas';
import { clinic, doctors, conditions } from '../data/clinicData';

export default function ChapterIntro({ onOpenBooking, prefersReducedMotion, isMobile }) {
  const [hoveredCondition, setHoveredCondition] = useState(null);
  const [activeCondition, setActiveCondition] = useState(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeadingVisible(true), prefersReducedMotion ? 0 : 600);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  const hoveredData = hoveredCondition !== null ? conditions[hoveredCondition] : null;
  const activeData  = activeCondition  !== null ? conditions[activeCondition]  : null;

  const closePanel = () => setActiveCondition(null);

  return (
    <section
      id="beginning"
      aria-label="Introduction — Dr Somani's Homoeopathy"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg)',
        overflow: 'hidden',
      }}
    >
      {/* Canvas */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <RootCanvas
          onConditionHover={setHoveredCondition}
          onConditionClick={setActiveCondition}
          prefersReducedMotion={prefersReducedMotion}
          isMobile={isMobile}
        />
      </div>

      {/* Parallax Ambient Image Overlay */}
      <div
        className="parallax-layer"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/assets/homeopathy_hero_ambient.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          opacity: 0.28,
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }}
      />

      {/* Gradient over canvas so left text is readable */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: isMobile
            ? 'linear-gradient(to bottom, rgba(26,35,24,0.92) 0%, rgba(26,35,24,0.7) 55%, rgba(26,35,24,0.3) 100%)'
            : 'linear-gradient(105deg, rgba(26,35,24,0.96) 0%, rgba(26,35,24,0.8) 45%, rgba(26,35,24,0.15) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
          gap: '40px',
          alignItems: 'center',
          minHeight: '100svh',
          paddingTop: isMobile ? '64px' : '80px',
          paddingBottom: isMobile ? '100px' : '80px',
        }}
      >
        <div style={{ maxWidth: isMobile ? '100%' : '560px' }}>

          {/* Mono annotation */}
          <p className="mono" style={{ marginBottom: '22px', fontSize: '0.65rem' }}>
            Dr Somani's Homoeopathy · Est. 1998
          </p>

          {/* Ink-reveal heading */}
          <div
            className={`ink-reveal ${headingVisible ? 'revealed' : ''}`}
            aria-label="Think Homoeopathy, Think Somani."
          >
            <h1
              className="serif-display serif-display--xl"
              style={{ color: 'var(--fg)', marginBottom: '4px' }}
            >
              Think
            </h1>
            <h1
              className="serif-display serif-display--xl"
              style={{ color: 'var(--fg)', marginBottom: '4px' }}
            >
              Homoeopathy,
            </h1>
            <h1
              className="serif-display serif-display--xl"
              style={{
                fontStyle: 'italic',
                color: 'var(--amber-light)',
              }}
            >
              Think Somani.
            </h1>
          </div>

          <p style={{
            marginTop: '24px',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.08rem)',
            lineHeight: 1.75,
            color: 'var(--fg-muted)',
            maxWidth: '440px',
            marginBottom: '14px',
          }}>
            {clinic.statement}
          </p>

          <p className="mono" style={{ fontSize: '0.65rem', marginBottom: '36px' }}>
            {clinic.credibility}
          </p>

          {/* CTA row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '44px',
          }}>
            <button
              className="btn btn--primary"
              onClick={() => onOpenBooking?.()}
              id="hero-book-btn"
            >
              Book a Consultation
            </button>
            <a
              href={clinic.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
              aria-label="WhatsApp the Clinic"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Doctor portrait badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            padding: '10px 14px',
            background: 'rgba(245,240,232,0.06)',
            border: '1px solid rgba(245,240,232,0.12)',
            borderRadius: '2px',
          }}>
            <div style={{
              width: '52px', height: '52px', flexShrink: 0,
              borderRadius: '50% 40% 50% 40% / 40% 50% 40% 50%',
              overflow: 'hidden',
              border: '2px solid rgba(200,135,58,0.5)',
            }}>
              <img
                src={doctors[0].portrait}
                alt={doctors[0].name}
                width="52" height="52"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                loading="eager"
              />
            </div>
            <div>
              <p style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 300,
                fontSize: '1rem',
                color: 'var(--fg)',
                marginBottom: '2px',
              }}>
                {doctors[0].name}
              </p>
              <p className="mono" style={{ fontSize: '0.62rem' }}>
                {doctors[0].qualifications} · {doctors[0].experience} · Reg. {doctors[0].regNo}
              </p>
            </div>
          </div>

        </div>

        {/* Right side — Arched photo frame (Desktop only) */}
        {!isMobile && (
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              className="arch-frame"
              style={{
                width: 'min(380px, 90%)',
                aspectRatio: '3/4',
                position: 'relative',
              }}
            >
              <img
                src="/assets/arch_botanical_clinic.png"
                alt="Dr Somani Homoeopathy Clinic Sanctuary"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(35,66,58,0.6) 0%, transparent 60%)',
                }}
              />
              <span className="mono" style={{ position: 'absolute', bottom: '16px', left: '20px', color: '#fff', fontSize: '0.65rem' }}>
                CLINIC SANCTUARY · WAKAD & JALGAON
              </span>
            </div>
          </div>
        )}

        {/* Hover condition panel — desktop */}
        {hoveredData && !activeData && !isMobile && (
          <div
            aria-live="polite"
            aria-atomic="true"
            style={{
              position: 'absolute',
              bottom: '60px',
              right: 0,
              maxWidth: '280px',
              background: 'var(--glass)',
              border: '1px solid var(--glass-border)',
              borderRadius: '2px',
              padding: '18px 20px',
              pointerEvents: 'none',
              animation: 'fadeUp 300ms ease both',
            }}
          >
            <p className="mono" style={{ marginBottom: '6px', fontSize: '0.6rem' }}>CONCERN</p>
            <p style={{
              fontFamily: 'Fraunces, serif', fontWeight: 300,
              fontSize: '1.1rem', color: 'var(--fg)', marginBottom: '7px',
            }}>
              {hoveredData.label}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', lineHeight: 1.5 }}>
              {hoveredData.description}
            </p>
          </div>
        )}

        {/* Active condition modal */}
        {activeData && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeData.label}
            style={{
              position: isMobile ? 'fixed' : 'absolute',
              bottom: isMobile ? 0 : '40px',
              left: isMobile ? 0 : 'auto',
              right: isMobile ? 0 : 0,
              zIndex: 200,
              width: isMobile ? '100%' : 'min(360px, 92vw)',
              background: 'var(--glass)',
              borderTop: isMobile ? '1px solid var(--glass-border)' : 'none',
              border: !isMobile ? '1px solid rgba(200,135,58,0.3)' : undefined,
              borderRadius: isMobile ? '16px 16px 0 0' : '2px',
              padding: '24px 20px calc(24px + env(safe-area-inset-bottom))',
              animation: isMobile ? 'slideUpSheet 350ms cubic-bezier(0.22,1,0.36,1)' : 'fadeUp 300ms ease both',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {isMobile && <div className="bottom-sheet-handle" />}
            <button
              onClick={closePanel}
              aria-label="Close"
              style={{
                position: 'absolute', top: '14px', right: '14px',
                color: 'var(--fg-muted)', fontSize: '1.4rem', lineHeight: 1, padding: '6px 10px',
                minWidth: '44px', minHeight: '44px',
              }}
            >×</button>

            <p className="mono" style={{ marginBottom: '8px', fontSize: '0.6rem' }}>PATIENT CONCERN</p>
            <h2 style={{
              fontFamily: 'Fraunces, serif', fontWeight: 300,
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              color: 'var(--fg)', marginBottom: '10px', lineHeight: 1.2,
            }}>
              {activeData.label}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', lineHeight: 1.6, marginBottom: '18px' }}>
              {activeData.description}
            </p>

            <div style={{
              width: '100%', height: '130px', borderRadius: '2px',
              overflow: 'hidden', marginBottom: '18px',
            }}>
              <img
                src={activeData.images[0]}
                alt={activeData.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>

            <a
              href={`${clinic.whatsapp}?text=${encodeURIComponent(`Hi Dr. Somani, I would like to discuss a concern about: ${activeData.label}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--full"
            >
              Discuss this concern
            </a>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: isMobile ? '90px' : '24px',
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          zIndex: 10, opacity: 0.45, pointerEvents: 'none',
        }}
      >
        <span className="mono" style={{ fontSize: '0.58rem' }}>SCROLL</span>
        <div style={{
          width: '1px', height: '32px',
          background: 'linear-gradient(to bottom, rgba(245,240,232,0.7), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
