import React from 'react';
import { doctors } from '../data/clinicData';

const MCIM_URL = "https://www.maharashtra.gov.in/Site/Upload/Government%20Resolutions/English/Marathi%20Medicine%20Information.pdf";

export default function ChapterDoctors({ onOpenBooking }) {
  return (
    <section
      id="doctors"
      className="paper-section section-pad"
      aria-label="Meet the Doctors"
    >
      <div className="container">

        <p className="chapter-label" style={{ color: 'var(--mineral)' }}>
          Chapter 04 · Meet the Doctors
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(56px,10vw,100px)' }}>
          {doctors.map((dr, i) => (
            <article
              key={dr.id}
              className="reveal"
              aria-label={dr.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(24px,5vw,60px)',
                alignItems: 'center',
              }}
            >
              {/* Portrait */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ position: 'relative', maxWidth: '400px', margin: i % 2 === 0 ? '0' : '0 0 0 auto' }}>
                  {/* Amber glow behind portrait */}
                  <div style={{
                    position: 'absolute',
                    top: '-16px', left: i % 2 === 0 ? '-16px' : 'auto',
                    right: i % 2 !== 0 ? '-16px' : 'auto',
                    width: '160px', height: '160px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(200,135,58,0.14) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }} />

                  <div style={{
                    width: 'min(280px, 80vw)',
                    aspectRatio: '1/1',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: '#2d3d29',
                    border: '4px solid var(--amber)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                    margin: '0 auto',
                  }}>
                    <img
                      src={dr.portrait}
                      alt={dr.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                      loading="lazy"
                    />
                  </div>

                  {/* Reg badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: i % 2 === 0 ? '12px' : 'auto',
                    right: i % 2 !== 0 ? '12px' : 'auto',
                    background: 'rgba(26,35,24,0.88)',
                    backdropFilter: 'blur(6px)',
                    padding: '8px 12px',
                    borderRadius: '2px',
                    border: '1px solid rgba(139,160,122,0.2)',
                  }}>
                    <p className="mono" style={{ color: 'rgba(245,240,232,0.85)', fontSize: '0.62rem' }}>
                      Reg. No. {dr.regNo}
                    </p>
                    <p className="mono" style={{ color: 'var(--mineral-light)', fontSize: '0.58rem' }}>
                      {dr.qualifications}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 style={{
                  fontFamily: 'Fraunces, serif', fontWeight: 300,
                  fontSize: 'clamp(1.7rem, 3.5vw, 2.8rem)',
                  color: 'var(--ink)', lineHeight: 1.1, marginBottom: '8px',
                }}>
                  {dr.name}
                </h2>

                <p className="mono" style={{ color: 'var(--mineral)', marginBottom: '6px', fontSize: '0.68rem' }}>
                  {dr.qualifications} · {dr.role}{dr.experience ? ` · ${dr.experience}` : ''}
                </p>

                {/* Verified badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  background: 'rgba(45,122,78,0.1)',
                  border: '1px solid rgba(45,122,78,0.25)',
                  borderRadius: '2px',
                  marginBottom: '24px',
                }}>
                  <span style={{ fontSize: '0.7rem', color: '#2d7a4e' }}>✓</span>
                  <span className="mono" style={{ fontSize: '0.6rem', color: '#2d7a4e' }}>
                    Registered Practitioner
                  </span>
                  <a
                    href={MCIM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'IBM Plex Mono, monospace',
                      fontSize: '0.58rem',
                      color: '#2d7a4e',
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                      opacity: 0.75,
                    }}
                    aria-label="Verify registration independently"
                  >
                    Verify →
                  </a>
                </div>

                <p style={{
                  fontSize: 'clamp(0.9rem, 1.4vw, 1.02rem)',
                  lineHeight: 1.75, color: 'rgba(14,14,12,0.7)',
                  marginBottom: '24px', maxWidth: '440px',
                }}>
                  {dr.introduction}
                </p>

                {/* Clinical interests */}
                <p className="mono" style={{ color: 'var(--mineral)', marginBottom: '10px', fontSize: '0.62rem' }}>
                  Clinical Interests
                </p>
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '28px',
                }}>
                  {dr.interests.map(interest => (
                    <span key={interest} style={{
                      fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem',
                      padding: '5px 11px', border: '1px solid rgba(14,14,12,0.14)',
                      borderRadius: '2px', color: 'rgba(14,14,12,0.58)',
                    }}>
                      {interest}
                    </span>
                  ))}
                </div>

                <p className="mono" style={{ color: 'var(--mineral)', marginBottom: '8px', fontSize: '0.62rem' }}>
                  Available At
                </p>
                <p style={{ fontSize: '0.92rem', color: 'rgba(14,14,12,0.6)', marginBottom: '28px' }}>
                  {dr.locations.join(' · ')}
                </p>

                <button
                  className="btn btn--outline-ink"
                  onClick={() => onOpenBooking?.()}
                  style={{ minWidth: '200px' }}
                >
                  Book with {dr.name.split(' ')[1]}
                </button>
              </div>

            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #doctors article {
            grid-template-columns: 1fr !important;
          }
          #doctors article > div:first-child {
            order: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
