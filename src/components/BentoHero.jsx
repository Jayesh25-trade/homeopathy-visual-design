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
              minHeight: '360px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              background: 'linear-gradient(135deg, #14213d 0%, #1c2d4f 60%, #0d1b2a 100%)',
              color: '#ffffff',
              borderRadius: '20px'
            }}
            aria-label="View Real Cases & Clinical Results"
          >
            {/* Ambient Low-Opacity Patient Cases Collage Background */}
            <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              pointerEvents: 'none',
              overflow: 'hidden',
            }}>
              {/* Subtle 2x2 grid collage of real before-after patient cases with low opacity */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                width: '100%',
                height: '100%',
                opacity: 0.25,
                filter: 'grayscale(20%) contrast(1.1)',
                transform: 'scale(1.05)'
              }}>
                <img src="/media/fungal-infection-before-after.jpg" alt="Skin Case" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <img src="/media/psoriasis-arm-before-after.jpg" alt="Psoriasis Case" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <img src="/media/vitiligo-before-after.jpg" alt="Vitiligo Case" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <img src="/media/hair-regrowth-before-after.jpg" alt="Alopecia Case" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Dark Overlay Gradient to guarantee 100% text readability */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(20, 33, 61, 0.94) 0%, rgba(28, 45, 79, 0.88) 55%, rgba(13, 27, 42, 0.96) 100%)'
              }} />
            </div>

            {/* Card Content Header */}
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '85%' }}>
              <div className="badge badge-red" style={{ marginBottom: '0.85rem' }}>
                5.0 Rating · 51,489+ Satisfied Patients
              </div>

              <h2 style={{
                color: '#ffffff',
                fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '0.65rem'
              }}>
                Real Cases.<br />Real Healing.
              </h2>

              <p style={{
                color: 'rgba(255, 255, 255, 0.88)',
                fontSize: 'clamp(0.85rem, 1.2vw, 0.96rem)',
                lineHeight: 1.5,
                marginBottom: '1rem',
                maxWidth: '360px'
              }}>
                "Documented classical homeopathic treatments for chronic skin, hair, and lifestyle conditions — proven by real clinical recovery."
              </p>

              {/* Case Category Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)', padding: '3px 10px', borderRadius: '9999px', color: '#ffffff', fontWeight: 600 }}>
                  Skin Fungal
                </span>
                <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)', padding: '3px 10px', borderRadius: '9999px', color: '#ffffff', fontWeight: 600 }}>
                  Psoriasis
                </span>
                <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)', padding: '3px 10px', borderRadius: '9999px', color: '#ffffff', fontWeight: 600 }}>
                  Vitiligo
                </span>
                <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)', padding: '3px 10px', borderRadius: '9999px', color: '#ffffff', fontWeight: 600 }}>
                  Hair Loss
                </span>
              </div>
            </div>

            {/* Bottom Action Pill */}
            <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto' }}>
              <span className="btn-primary" style={{ padding: '0.6rem 1.35rem', fontSize: '0.86rem' }}>
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
                padding: '1.25rem',
                minHeight: '200px',
                overflow: 'hidden'
              }}
              aria-label="Explore Area of Services"
            >
              {/* Client Photo Ambient Background (IMG_0715 - Pharmacy Remedy Shelves) */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                <img 
                  src="/assets/client_photos/IMG_0715.JPEG" 
                  alt="Area of Services Remedies" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35, filter: 'brightness(0.7)' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(20, 33, 61, 0.92) 0%, rgba(31, 78, 121, 0.85) 100%)'
                }} />
              </div>

              <div style={{
                position: 'relative', zIndex: 2,
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                marginBottom: '0.75rem'
              }}>
                <span className="badge badge-ocean" style={{ background: 'rgba(255,255,255,0.18)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}>
                  50+ Conditions
                </span>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.25)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1rem'
                }}>
                  →
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.35rem', marginBottom: '0.35rem' }}>
                  Area of Services
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.82rem', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                  Holistic care for skin, allergies, PCOD, paediatric & chronic health.
                </p>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
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
                padding: '1.25rem',
                minHeight: '200px',
                overflow: 'hidden'
              }}
              aria-label="Specialized Treatment"
            >
              {/* Client Photo Ambient Background (IMG_0734 - Philosophy Board) */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
                <img 
                  src="/assets/client_photos/IMG_0734.JPEG" 
                  alt="Every person is Unique Philosophy" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.28, filter: 'contrast(1.05)' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(15, 30, 54, 0.93) 0%, rgba(24, 48, 80, 0.86) 100%)'
                }} />
              </div>

              <div style={{
                position: 'relative', zIndex: 2,
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                marginBottom: '0.75rem'
              }}>
                <span className="badge badge-ocean" style={{ background: 'rgba(255,255,255,0.18)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>
                  Root-Cause Care
                </span>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.25)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                  color: '#ffffff'
                }}>
                  →
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                  Specialized Treatment
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.82rem', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                  Individualised formulas engineered for lasting wellness without side effects.
                </p>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Our Approach →
                </span>
              </div>
            </a>

            {/* -------------------------------------------------------
               BLOCK 4: OUR CLINICS (Fourth Position - Spans Wide Full Card)
               ------------------------------------------------------- */}
            <a 
              href="#locations" 
              className="bento-card" 
              style={{
                gridColumn: '1 / -1',
                position: 'relative',
                color: '#ffffff',
                minHeight: '180px',
                padding: '1.35rem 1.5rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              aria-label="View Our Clinics"
            >
              {/* Client Photo Full Ambient Background (IMG_0756 - Real Wakad Building Exterior) */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
                <img 
                  src="/assets/client_photos/IMG_0756.JPEG" 
                  alt="Dr Somani Clinic Wakad Building Exterior" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 35%',
                    opacity: 0.32,
                    filter: 'contrast(1.1) brightness(0.85)'
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.94) 0%, rgba(20, 33, 61, 0.88) 55%, rgba(28, 45, 79, 0.92) 100%)'
                }} />
              </div>

              {/* Card Top Row Header */}
              <div style={{
                position: 'relative', zIndex: 2,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexWrap: 'nowrap', gap: '0.75rem', marginBottom: '0.5rem'
              }}>
                <span className="badge" style={{
                  background: 'rgba(255, 255, 255, 0.18)',
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
                  background: 'rgba(255, 255, 255, 0.25)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                  color: '#ffffff', flexShrink: 0
                }}>
                  →
                </div>
              </div>

              {/* Card Body & CTA */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                  color: '#ffffff',
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 400,
                  marginBottom: '0.3rem'
                }}>
                  Our Clinics
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.88)',
                  fontSize: 'clamp(0.82rem, 1.2vw, 0.9rem)',
                  lineHeight: 1.45,
                  maxWidth: '480px',
                  marginBottom: '0.85rem'
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
