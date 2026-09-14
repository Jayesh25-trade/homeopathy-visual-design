import React, { useState } from 'react';
import { conditions, doctors, clinic } from '../data/clinicData';

export default function ChapterAtlas({ onOpenBooking }) {
  const [selected, setSelected] = useState(0);
  const active = conditions[selected];
  const doctor = doctors.find(d => d.id === active.doctorId) || doctors[0];

  return (
    <section
      id="concerns"
      className="paper-section section-pad"
      aria-label="Treatment Atlas — Areas of Care"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Microscopic texture ambient backdrop */}
      <div
        className="parallax-layer"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/assets/botanical_microscopy.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05,
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <p className="chapter-label" style={{ color: 'var(--mineral)' }}>
          Chapter 02 · The Treatment Atlas
        </p>

        <h2
          className="serif-display serif-display--lg reveal"
          style={{ color: 'var(--ink)', marginBottom: 'clamp(28px,5vw,48px)', lineHeight: 1.15 }}
        >
          Eight areas of<br />
          <em>care and attention.</em>
        </h2>

        {/* Condition pill scroller — visible on mobile */}
        <div
          className="show-mobile"
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '8px',
            marginBottom: '28px',
            paddingBottom: '8px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
          role="tablist"
          aria-label="Conditions"
        >
          {conditions.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={i === selected}
              onClick={() => setSelected(i)}
              style={{
                flexShrink: 0,
                padding: '9px 16px',
                borderRadius: '20px',
                border: `1px solid ${i === selected ? 'var(--vermilion)' : 'rgba(14,14,12,0.18)'}`,
                background: i === selected ? 'var(--vermilion)' : 'transparent',
                color: i === selected ? 'var(--ivory)' : 'var(--fg-muted)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 200ms ease',
                minHeight: '44px',
                scrollSnapAlign: 'start',
                whiteSpace: 'nowrap',
              }}
            >
              {c.shortLabel}
            </button>
          ))}
        </div>

        {/* Main layout — desktop: two cols, mobile: stacked */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 'clamp(24px,5vw,60px)',
          alignItems: 'start',
        }}>

          {/* Left — condition list (desktop only) */}
          <nav
            className="hide-mobile"
            aria-label="Condition list"
            style={{ paddingTop: '4px' }}
          >
            {conditions.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setSelected(i)}
                style={{
                  display: 'flex',
                  width: '100%',
                  padding: '13px 0 13px 16px',
                  borderBottom: '1px solid rgba(14,14,12,0.07)',
                  textAlign: 'left',
                  gap: '16px',
                  alignItems: 'baseline',
                  background: 'none',
                  cursor: 'pointer',
                  borderLeft: i === selected ? '3px solid var(--vermilion)' : '3px solid transparent',
                  transition: 'all 200ms ease',
                }}
                aria-pressed={i === selected}
              >
                <span className="mono" style={{
                  fontSize: '0.62rem',
                  color: i === selected ? 'var(--vermilion)' : 'var(--mineral)',
                  minWidth: '22px',
                  transition: 'color 200ms',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{
                   fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  fontWeight: 300,
                  color: i === selected ? 'var(--ink)' : 'rgba(14,14,12,0.5)',
                  transition: 'color 200ms',
                }}>
                  {c.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Right — active condition detail */}
          <div
            key={active.id}
            className="ambient-glow-amber"
            style={{
              animation: 'fadeUp 400ms cubic-bezier(0.22,1,0.36,1) both',
              padding: '24px',
               background: 'var(--bg-surface)',
              borderRadius: '6px',
               border: '1px solid var(--border)',
               boxShadow: 'var(--shadow-sm)',
            }}
          >
            {/* Image */}
            <div style={{
              width: '100%',
              aspectRatio: '16/10',
              borderRadius: '2px',
              overflow: 'hidden',
              marginBottom: '24px',
              position: 'relative',
              background: '#d8d4cc',
            }}>
              <img
                src={active.images[0]}
                alt={active.label}
                width="1024"
                height="640"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(26,35,24,0.4) 0%, transparent 50%)',
              }} />
              <span className="mono" style={{
                position: 'absolute', bottom: '12px', left: '14px',
                color: 'rgba(245,240,232,0.88)', fontSize: '0.6rem',
              }}>
                {active.shortLabel}
              </span>
            </div>

            {/* Description */}
            <p className="chapter-label" style={{ color: 'var(--mineral)', marginBottom: '10px' }}>
              Overview
            </p>
            <p style={{
               fontFamily: 'var(--font-serif)', fontWeight: 400,
              fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
              color: 'var(--ink)', lineHeight: 1.45, marginBottom: '22px',
            }}>
              {active.description}
            </p>

            {/* Doctor */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '14px',
              background: 'rgba(14,14,12,0.04)',
              borderRadius: '2px', marginBottom: '20px',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                overflow: 'hidden', flexShrink: 0,
                border: '2px solid rgba(200,135,58,0.4)',
              }}>
                <img
                  src={doctor.portrait}
                  alt={doctor.name}
                  width="44" height="44"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                  loading="lazy"
                />
              </div>
              <div>
                <p style={{
                   fontFamily: 'var(--font-serif)', fontWeight: 400,
                  fontSize: '1rem', color: 'var(--ink)', marginBottom: '2px',
                }}>
                  {doctor.name}
                </p>
                <p className="mono" style={{ fontSize: '0.6rem', color: 'var(--mineral)' }}>
                  {doctor.qualifications} · Reg. {doctor.regNo}
                </p>
              </div>
            </div>

            {/* Location pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '24px' }}>
              {['Pune', 'Jalgaon', 'Online'].map(loc => (
                <span key={loc} style={{
                   fontFamily: 'var(--font-sans)', fontSize: '0.68rem',
                  padding: '5px 12px', border: '1px solid rgba(14,14,12,0.18)',
                  borderRadius: '2px', color: 'var(--mineral)',
                }}>
                  {loc}
                </span>
              ))}
            </div>

            <a
              href={`${clinic.whatsapp}?text=${encodeURIComponent(`Hi Dr. Somani, I would like to discuss: ${active.label}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ width: '100%' }}
            >
              Discuss this concern
            </a>
          </div>

        </div>
      </div>

      {/* Fix two-col on mobile */}
      <style>{`
        @media (max-width: 640px) {
          #concerns .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
