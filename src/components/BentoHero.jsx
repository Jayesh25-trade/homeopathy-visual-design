import React from 'react';
import { trustStats } from '../data/clinicData';

export default function BentoHero({ onOpenBooking }) {
  return (
    <section id="bento-hero" className="bento-hero" aria-label="Somani Homoeopathy Overview">
      <div className="container">
        
        {/* Responsive Bento Grid Root */}
        <div className="bento-grid">
          
          {/* =========================================================
             BLOCK 1: PATIENT STORIES & REAL CASES (First Position)
             ========================================================= */}
          <a 
            href="#cases" 
            className="bento-card" 
            style={{
              position: 'relative',
              minHeight: '380px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(1.35rem, 3vw, 2.2rem)',
              background: '#0b1329',
              color: '#ffffff',
              borderRadius: '20px'
            }}
            aria-label="View Real Cases & Clinical Results"
          >
            {/* RIGHT SIDE: Real Patient Cases 2x2 Photo Collage */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '52%',
              zIndex: 1,
              pointerEvents: 'none',
              overflow: 'hidden',
            }}>
              {/* 2x2 grid collage of real before-after patient cases */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                width: '100%',
                height: '100%',
                opacity: 0.9,
                filter: 'contrast(1.08) brightness(0.95)',
              }}>
                <img src="/media/fungal-infection-before-after.jpg" alt="Skin Case" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <img src="/media/psoriasis-arm-before-after.jpg" alt="Psoriasis Case" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <img src="/media/vitiligo-before-after.jpg" alt="Vitiligo Case" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <img src="/media/hair-regrowth-before-after.jpg" alt="Alopecia Case" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Smooth Left-to-Right Horizontal Gradient: Solid Navy on Left -> Clear Photo on Right */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, #0b1329 0%, rgba(11, 19, 41, 0.92) 20%, rgba(11, 19, 41, 0.45) 55%, transparent 100%)'
              }} />
            </div>

            {/* LEFT SIDE: Pure Solid Navy Text Panel */}
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '58%' }}>
              <div className="badge badge-red" style={{ marginBottom: '0.85rem', display: 'inline-flex', boxShadow: '0 2px 8px rgba(220,38,38,0.3)' }}>
                5.0 Rating · 51,489+ Satisfied Patients
              </div>

              <h2 style={{
                color: '#ffffff',
                fontSize: 'clamp(1.65rem, 3vw, 2.5rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                lineHeight: 1.15,
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em'
              }}>
                Real Cases.<br />Real Healing.
              </h2>

              <p style={{
                color: '#cbd5e1',
                fontSize: 'clamp(0.85rem, 1.2vw, 0.96rem)',
                lineHeight: 1.55,
                marginBottom: '1.25rem',
                maxWidth: '380px',
                fontWeight: 400
              }}>
                "Documented classical homeopathic treatments for chronic skin, hair, and lifestyle conditions — proven by real clinical recovery."
              </p>

              {/* Case Category Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.35rem' }}>
                <span style={{ fontSize: '0.74rem', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', padding: '4px 12px', borderRadius: '9999px', color: '#ffffff', fontWeight: 600 }}>
                  Skin Fungal
                </span>
                <span style={{ fontSize: '0.74rem', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', padding: '4px 12px', borderRadius: '9999px', color: '#ffffff', fontWeight: 600 }}>
                  Psoriasis
                </span>
                <span style={{ fontSize: '0.74rem', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', padding: '4px 12px', borderRadius: '9999px', color: '#ffffff', fontWeight: 600 }}>
                  Vitiligo
                </span>
                <span style={{ fontSize: '0.74rem', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', padding: '4px 12px', borderRadius: '9999px', color: '#ffffff', fontWeight: 600 }}>
                  Hair Loss
                </span>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto' }}>
              <span className="btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem', boxShadow: '0 4px 16px rgba(220,38,38,0.35)' }}>
                Read Verified Cases →
              </span>
            </div>
          </a>

          {/* =========================================================
             RIGHT SUB-GRID: BLOCKS 2, 3 & 4
             ========================================================= */}
          <div className="bento-right-subgrid">

            {/* -------------------------------------------------------
               BLOCK 2: AREA OF SERVICES (Second Position)
               ------------------------------------------------------- */}
            <a 
              href="#concerns" 
              className="bento-card" 
              style={{
                position: 'relative',
                color: '#ffffff',
                padding: '1.35rem',
                minHeight: '200px',
                overflow: 'hidden',
                background: '#0c1a30',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              aria-label="Explore Area of Services"
            >
              {/* RIGHT SIDE: Photo (IMG_0715 - Pharmacy Remedy Shelves) */}
              <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '55%', zIndex: 1, pointerEvents: 'none' }}>
                <img 
                  src="/assets/client_photos/IMG_0715.JPEG" 
                  alt="Area of Services Remedies" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, filter: 'contrast(1.05) brightness(0.95)' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to right, #0c1a30 0%, rgba(12, 26, 48, 0.90) 25%, rgba(12, 26, 48, 0.40) 70%, transparent 100%)'
                }} />
              </div>

              {/* Top Row: Badge Top-Left, Arrow Circle Top-Right across full card width */}
              <div style={{
                position: 'relative', zIndex: 2,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                width: '100%', marginBottom: '0.85rem'
              }}>
                <span className="badge badge-ocean" style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>
                  50+ Conditions
                </span>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                  color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)', flexShrink: 0
                }}>
                  →
                </div>
              </div>

              {/* Body Content */}
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '85%' }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Area of Services
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                  Holistic care for skin, allergies, PCOD, paediatric &amp; chronic health.
                </p>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#60a5fa', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Explore All Services →
                </span>
              </div>
            </a>

            {/* -------------------------------------------------------
               BLOCK 3: SPECIALIZED TREATMENT (Third Position)
               ------------------------------------------------------- */}
            <a 
              href="#treatments" 
              className="bento-card" 
              style={{
                position: 'relative',
                color: '#ffffff',
                padding: '1.35rem',
                minHeight: '200px',
                overflow: 'hidden',
                background: '#0c1a30',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              aria-label="Specialized Treatment"
            >
              {/* RIGHT SIDE: Photo (IMG_0734 - Philosophy Board) */}
              <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '55%', zIndex: 1, pointerEvents: 'none' }}>
                <img 
                  src="/assets/client_photos/IMG_0734.JPEG" 
                  alt="Every person is Unique Philosophy" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, filter: 'contrast(1.05) brightness(0.95)' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to right, #0c1a30 0%, rgba(12, 26, 48, 0.90) 25%, rgba(12, 26, 48, 0.40) 70%, transparent 100%)'
                }} />
              </div>

              {/* Top Row: Badge Top-Left, Arrow Circle Top-Right across full card width */}
              <div style={{
                position: 'relative', zIndex: 2,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                width: '100%', marginBottom: '0.85rem'
              }}>
                <span className="badge badge-ocean" style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>
                  Root-Cause Care
                </span>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                  color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)', flexShrink: 0
                }}>
                  →
                </div>
              </div>

              {/* Body Content */}
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '85%' }}>
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Specialized Treatment
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                  Individualised formulas engineered for lasting wellness without side effects.
                </p>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#60a5fa', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Our Approach →
                </span>
              </div>
            </a>

            {/* -------------------------------------------------------
               BLOCK 4: OUR CLINICS (Fourth Position - Spans Wide)
               ------------------------------------------------------- */}
            <a 
              href="#locations" 
              className="bento-card" 
              style={{
                gridColumn: '1 / -1',
                position: 'relative',
                color: '#ffffff',
                minHeight: '190px',
                padding: '1.5rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#0b1329'
              }}
              aria-label="View Our Clinics"
            >
              {/* RIGHT SIDE: Real Clinic Photo (IMG_0756 - Wakad Building Exterior) */}
              <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '48%', zIndex: 1, pointerEvents: 'none' }}>
                <img 
                  src="/assets/client_photos/IMG_0756.JPEG" 
                  alt="Dr Somani Clinic Wakad Building Exterior" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 35%',
                    opacity: 0.92,
                    filter: 'contrast(1.05) brightness(0.95)'
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to right, #0b1329 0%, rgba(11, 19, 41, 0.92) 20%, rgba(11, 19, 41, 0.35) 60%, transparent 100%)'
                }} />
              </div>

              {/* Top Row: Single line badge Top-Left, Arrow Circle Top-Right across full width */}
              <div style={{
                position: 'relative', zIndex: 2,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexWrap: 'nowrap', gap: '0.75rem', width: '100%', marginBottom: '0.75rem'
              }}>
                <span className="badge" style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '4px 12px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  borderRadius: '9999px'
                }}>
                  Wakad, Pune &amp; Jalgaon
                </span>

                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.18)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                  color: '#ffffff', flexShrink: 0, border: '1px solid rgba(255,255,255,0.25)'
                }}>
                  →
                </div>
              </div>

              {/* LEFT SIDE: Card Body & CTA */}
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '58%' }}>
                <h3 style={{
                  color: '#ffffff',
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.55rem)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  marginBottom: '0.3rem'
                }}>
                  Our Clinics
                </h3>
                <p style={{
                  color: '#cbd5e1',
                  fontSize: 'clamp(0.82rem, 1.2vw, 0.9rem)',
                  lineHeight: 1.45,
                  marginBottom: '0.9rem'
                }}>
                  Modern physical clinics with in-person care &amp; global online video consultations.
                </p>
                <div>
                  <span className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Find Nearest Clinic →
                  </span>
                </div>
              </div>
            </a>

          </div>
        </div>

        {/* =========================================================
           BOTTOM HORIZONTAL TRUST STRIP RAIL
           ========================================================= */}
        <div className="bento-trust-strip" style={{
          marginTop: '1.25rem',
          marginBottom: 0,
          background: 'var(--white)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem',
          border: '1px solid var(--line)',
          boxShadow: 'var(--shadow-sm)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
          alignItems: 'center'
        }}>
          {trustStats.map((stat, idx) => (
            <div key={idx} className="bento-trust-item" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--navy)',
                fontFamily: 'var(--font-heading)'
              }}>
                {stat.value}
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2 }}>
                  {stat.label}
                </p>
                <p style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
