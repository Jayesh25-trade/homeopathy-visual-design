import React, { useState } from 'react';
import { consultationSteps, locations, clinic } from '../data/clinicData';
import BeforeYouCall from './BeforeYouCall';

export default function ChapterConsultation({ onOpenBooking, isMobile }) {
  const [activeLocation, setActiveLocation] = useState(0);
  const [sheetOpen, setSheetOpen] = useState(false);
  const loc = locations[activeLocation];

  const LocationSheet = () => (
    isMobile ? (
      <div
        className="bottom-sheet-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Choose a location"
        onClick={e => { if (e.target === e.currentTarget) setSheetOpen(false); }}
      >
        <div className="bottom-sheet">
          <div className="bottom-sheet-handle" />
          <p className="mono" style={{ marginBottom: '20px', fontSize: '0.65rem' }}>
            CHOOSE A LOCATION
          </p>
          {locations.map((l, i) => (
            <button
              key={l.id}
              onClick={() => { setActiveLocation(i); setSheetOpen(false); }}
              style={{
                display: 'flex',
                width: '100%',
                padding: '16px 0',
                borderBottom: '1px solid var(--border)',
                gap: '14px',
                alignItems: 'center',
                background: 'none',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                background: i === activeLocation ? 'var(--vermilion)' : 'var(--border-strong)',
              }} />
              <span style={{
                fontFamily: 'Fraunces, serif', fontWeight: 300,
                fontSize: '1.2rem', color: 'var(--fg)',
              }}>
                {l.city}
              </span>
            </button>
          ))}
        </div>
      </div>
    ) : null
  );

  return (
    <section
      id="consultation"
      aria-label="The Consultation Ritual"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(60px,8vw,120px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sanctuary background image layer */}
      <div
        className="parallax-layer"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/assets/healing_sanctuary_bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <p className="chapter-label">Chapter 05 · The Consultation Ritual</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(40px,6vw,80px)',
          alignItems: 'start',
        }}>

          {/* Steps */}
          <div>
            <h2 className="serif-display serif-display--md reveal" style={{ color: 'var(--fg)', marginBottom: '44px' }}>
              One path,<br />
              <em style={{ color: 'var(--amber-light)' }}>careful steps.</em>
            </h2>

            <div style={{ position: 'relative', paddingLeft: '26px' }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: '1px',
                background: 'linear-gradient(to bottom, rgba(139,160,122,0.5), transparent)',
              }} />

              {consultationSteps.map((step, i) => (
                <div
                  key={step.n}
                  className="reveal"
                  style={{
                    paddingBottom: i < consultationSteps.length - 1 ? '40px' : '0',
                    position: 'relative',
                    transition: `opacity ${0.3 + i * 0.1}s ease`,
                  }}
                >
                  <div style={{
                    position: 'absolute', left: '-29px', top: '5px',
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: 'rgba(139,160,122,0.7)',
                  }} />
                  <span className="mono" style={{ display: 'block', marginBottom: '5px', color: 'var(--amber)', fontSize: '0.68rem' }}>
                    {step.n}
                  </span>
                  <h3 style={{
                    fontFamily: 'Fraunces, serif', fontWeight: 300,
                    fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
                    color: 'var(--fg)', marginBottom: '7px', lineHeight: 1.25,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', lineHeight: 1.65, maxWidth: '360px' }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location + Before You Call */}
          <div>
            {/* Location chooser */}
            <p className="mono" style={{ marginBottom: '14px', fontSize: '0.62rem' }}>
              Choose a Location
            </p>

            {/* Mobile: tap to open sheet */}
            {isMobile ? (
              <button
                onClick={() => setSheetOpen(true)}
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  background: 'rgba(139,160,122,0.1)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: '2px',
                  marginBottom: '24px',
                  cursor: 'pointer',
                  minHeight: '52px',
                }}
                aria-haspopup="dialog"
              >
                <span style={{
                  fontFamily: 'Fraunces, serif', fontWeight: 300,
                  fontSize: '1.1rem', color: 'var(--fg)',
                }}>
                  {loc.city}
                </span>
                <span style={{ color: 'var(--fg-muted)', fontSize: '1.1rem' }}>⌄</span>
              </button>
            ) : (
              /* Desktop: inline tab switcher */
              <div style={{
                display: 'flex', gap: '0', marginBottom: '24px',
                border: '1px solid var(--border)', borderRadius: '2px', overflow: 'hidden',
              }}>
                {locations.map((l, i) => (
                  <button
                    key={l.id}
                    onClick={() => setActiveLocation(i)}
                    style={{
                      flex: 1, padding: '11px 8px',
                      background: i === activeLocation ? 'rgba(139,160,122,0.15)' : 'transparent',
                      color: i === activeLocation ? 'var(--fg)' : 'var(--fg-muted)',
                      fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem',
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      borderRight: i < locations.length - 1 ? '1px solid var(--border)' : 'none',
                      transition: 'all 200ms ease', cursor: 'pointer', minHeight: '48px',
                    }}
                    aria-pressed={i === activeLocation}
                  >
                    {l.city}
                  </button>
                ))}
              </div>
            )}

            {/* Location detail */}
            <div key={loc.id} style={{ animation: 'fadeUp 300ms ease both', marginBottom: '36px' }}>
              <h3 style={{
                fontFamily: 'Fraunces, serif', fontWeight: 300,
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                color: 'var(--fg)', marginBottom: '12px',
              }}>
                {loc.city}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', lineHeight: 1.7, marginBottom: '14px' }}>
                {loc.address}
              </p>
              <p className="mono" style={{ fontSize: '0.82rem', color: 'var(--mineral-light)', marginBottom: '22px' }}>
                {loc.phone}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a
                  href={loc.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Book at {loc.city}
                </a>
                {loc.mapsUrl && (
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline"
                    style={{ fontSize: '0.82rem' }}
                  >
                    Directions
                  </a>
                )}
                <a href={loc.phoneHref} className="btn btn--outline" style={{ fontSize: '0.82rem' }} aria-label="Call clinic">
                  Call
                </a>
              </div>
            </div>

            {/* Before You Call */}
            <BeforeYouCall />
          </div>
        </div>
      </div>

      {sheetOpen && <LocationSheet />}
    </section>
  );
}
