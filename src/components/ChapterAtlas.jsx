import React, { useState } from 'react';
import { doctors, clinic } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export default function ChapterAtlas({ onOpenBooking }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);

  const conditionKeys = ['skin', 'allergies', 'migraine', 'pcod', 'kidney', 'acidity', 'paediatric', 'mental'];
  const conditionDoctorIds = ['antim', 'antim', 'antim', 'antim', 'antim', 'kushal', 'kushal', 'kushal'];
  const conditionImages = [
    '/assets/conditions/skin-care.jpg',
    '/assets/conditions/allergy-care.jpg',
    '/assets/conditions/migraine-care-v2.jpg',
    '/assets/conditions/pcod-care-v2.jpg',
    '/assets/conditions/kidney-care-v2.jpg',
    '/assets/conditions/digestion-care-v2.jpg',
    '/assets/conditions/paediatric-care-v2.jpg',
    '/assets/conditions/mental-health-care.jpg',
  ];

  const currentKey = conditionKeys[selected];
  const activeCondition = {
    key: currentKey,
    label: t(`atlas.conditions.${currentKey}.label`),
    shortLabel: t(`atlas.conditions.${currentKey}.short`),
    description: t(`atlas.conditions.${currentKey}.desc`),
    image: conditionImages[selected],
    doctorId: conditionDoctorIds[selected],
  };

  const doctor = doctors.find(d => d.id === activeCondition.doctorId) || doctors[0];

  return (
    <section
      id="concerns"
      className="paper-section section-pad"
      aria-label="Treatment Atlas — Areas of Care"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
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
          {t('atlas.label')}
        </p>

        <h2
          className="serif-display serif-display--lg"
          style={{ color: 'var(--ink)', marginBottom: 'clamp(28px,5vw,48px)', lineHeight: 1.15 }}
        >
          {t('atlas.heading')}<br />
          <em>{t('atlas.headingEm')}</em>
        </h2>

        {/* Condition pill scroller — visible on mobile */}
        <div
          className="show-mobile care-tabs"
          role="tablist"
          aria-label="Conditions"
        >
          {conditionKeys.map((key, i) => (
            <button
              key={key}
              role="tab"
              aria-selected={i === selected}
              onClick={() => setSelected(i)}
              className="care-tab"
            >
              {t(`atlas.conditions.${key}.short`)}
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
            {conditionKeys.map((key, i) => (
              <button
                key={key}
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
                  {t(`atlas.conditions.${key}.label`)}
                </span>
              </button>
            ))}
          </nav>

          {/* Right — active condition detail */}
          <div
            key={activeCondition.key}
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
                src={activeCondition.image}
                alt={activeCondition.label}
                width="1280"
                height="800"
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
                {activeCondition.shortLabel}
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: 'var(--font-serif)', fontWeight: 400,
              fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
              color: 'var(--ink)', lineHeight: 1.45, marginBottom: '22px',
            }}>
              {activeCondition.description}
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

            <button
              onClick={() => onOpenBooking?.()}
              className="btn btn--primary"
              style={{ width: '100%' }}
            >
              {t('atlas.bookForThis')}
            </button>
          </div>

        </div>
      </div>

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

