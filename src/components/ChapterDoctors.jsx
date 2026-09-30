import React from 'react';
import { doctors } from '../data/clinicData';

export default function ChapterDoctors({ onOpenBooking }) {
  return (
    <section
      id="doctors"
      className="paper-section section-pad scroll-target"
      style={{ backgroundColor: 'var(--bg)', position: 'relative', overflow: 'hidden' }}
      aria-label="Meet Our Doctors"
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
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-ocean" style={{ marginBottom: '0.75rem' }}>
            Experienced Practitioners
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--navy)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '0.85rem'
          }}>
            Meet Our Doctors
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Registered homoeopathic and ayurvedic practitioners dedicated to individualised, compassionate care.
          </p>
        </div>

        {/* Doctor Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {doctors.map((dr, idx) => (
            <article
              key={dr.id}
              className={`doctor-card-grid ${idx % 2 !== 0 ? 'reverse-desktop' : ''}`}
              style={{
                background: '#faf6ee',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(14, 14, 12, 0.14)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem',
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2
              }}
            >
              {/* Doctor Image Container */}
              <div className="doctor-img-col">
                <div style={{
                  position: 'relative',
                  width: 'min(280px, 100%)',
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  margin: '0 auto',
                  overflow: 'hidden',
                  border: '4px solid rgba(220, 38, 38, 0.15)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <img
                    src={dr.portrait}
                    alt={dr.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                    loading="lazy"
                  />
                </div>
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <span className="badge badge-green" style={{ background: 'rgba(220, 38, 38, 0.08)', color: '#dc2626', border: '1px solid rgba(220, 38, 38, 0.2)' }}>
                    Reg. No. {dr.regNo}
                  </span>
                </div>
              </div>

              {/* Doctor Bio & Info */}
              <div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#dc2626', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {dr.generation}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
                  color: 'var(--navy)',
                  fontWeight: 400,
                  marginTop: '0.25rem',
                  marginBottom: '0.35rem'
                }}>
                  {dr.name}
                </h3>
                <p style={{ color: 'var(--muted)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  {dr.qualifications} · {dr.role}
                </p>

                <p style={{ color: 'var(--ink)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {dr.introduction}
                </p>

                {/* Clinical Interests */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Specialised Focus Areas
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {dr.interests.map((interest, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.8rem',
                          background: '#ffffff',
                          border: '1px solid rgba(14,14,12,0.12)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--ink)',
                          fontWeight: 500
                        }}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className="btn-primary"
                  onClick={onOpenBooking}
                  style={{ fontSize: '0.9rem', padding: '0.65rem 1.35rem' }}
                >
                  Book Consultation with {dr.name.split(' ')[1] || dr.name} →
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 860px) {
          .doctor-card-grid {
            grid-template-columns: 280px 1fr !important;
          }
          .doctor-card-grid.reverse-desktop {
            grid-template-columns: 1fr 280px !important;
          }
          .doctor-card-grid.reverse-desktop .doctor-img-col {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
