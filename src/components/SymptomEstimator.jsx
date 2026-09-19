import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const STAGE_IMAGES = [
  { stage: 1, yearsText: '< 1', label: '< 1 Year', concept: 'The Beginning', src: '/assets/timeline_stage_1.png' },
  { stage: 2, yearsText: '1', label: '1 Year', concept: 'Understanding Begins', src: '/assets/timeline_stage_2.png' },
  { stage: 3, yearsText: '2', label: '2 Years', concept: 'The Story Has Layers', src: '/assets/timeline_stage_3.png' },
  { stage: 4, yearsText: '3', label: '3-4 Years', concept: 'Deeper History', src: '/assets/timeline_stage_4.png' },
  { stage: 5, yearsText: '5', label: '5-6 Years', concept: 'Layers of History', src: '/assets/timeline_stage_5.png' },
  { stage: 6, yearsText: '7+', label: '7+ Years', concept: 'Deep Roots', src: '/assets/timeline_stage_6.png' },
];

const TONE_COLORS = {
  encouraging: '#2d7a4e',
  grounded: '#c3964d',
  specialist: '#d8aa5c',
  reassuring: '#4a6a8a',
};

export default function SymptomEstimator({ onOpenBooking }) {
  const { t } = useLanguage();
  const [stageIndex, setStageIndex] = useState(2); // Default 2 years

  const getMessageIndex = (sIdx) => {
    if (sIdx === 0) return 0;
    if (sIdx <= 2) return 1;
    if (sIdx <= 4) return 2;
    return 3;
  };

  const msgIdx = getMessageIndex(stageIndex);
  const toneList = ['encouraging', 'grounded', 'specialist', 'reassuring'];
  const msgTone = toneList[msgIdx];

  const currentStage = STAGE_IMAGES[stageIndex];

  const msgObj = {
    title: t(`estimator.messages.${msgIdx}.title`),
    body: t(`estimator.messages.${msgIdx}.body`),
  };

  return (
    <section
      id="symptom-timeline"
      className="symptom-estimator"
      aria-label="How long have you had this concern? Timeline Estimator"
      style={{
        background: '#F0F4F3',
        padding: 'clamp(60px, 8vw, 110px) 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#1A2E2B',
        borderTop: '1px solid rgba(14, 74, 71, 0.12)',
        borderBottom: '1px solid rgba(14, 74, 71, 0.12)',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(196,154,69,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Eyebrow */}
        <div className="chapter-label" style={{ color: '#0E4A47', marginBottom: '16px' }}>
          {t('estimator.label')}
        </div>

        {/* 2-Column Responsive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
          }}
        >
          {/* LEFT COLUMN: Content + Interactive Slider */}
          <div style={{ maxWidth: '640px' }}>
            <h2
              className="serif-display serif-display--md"
              style={{ color: '#0E4A47', marginBottom: '32px', lineHeight: 1.18 }}
            >
              {t('estimator.h2')}{' '}
              <em style={{ color: '#C49A45', fontStyle: 'italic' }}>
                {t('estimator.h2Em')}
              </em>
            </h2>

            {/* Slider Container */}
            <div style={{ marginBottom: '36px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif, "Lora", Georgia, serif)',
                    fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
                    fontWeight: 300,
                    color: '#0E4A47',
                    lineHeight: 1,
                  }}
                >
                  {currentStage.yearsText}
                </span>
                <span className="mono" style={{ fontSize: '0.82rem', color: '#C49A45', fontWeight: 700 }}>
                  {stageIndex === 0
                    ? t('estimator.months')
                    : stageIndex === 1
                    ? t('estimator.year')
                    : t('estimator.years')}
                </span>
              </div>

              {/* Range Input Slider (0 to 5) */}
              <input
                type="range"
                min={0}
                max={5}
                step={1}
                value={stageIndex}
                onChange={(e) => setStageIndex(Number(e.target.value))}
                className="estimator-slider"
                aria-label="Timeline duration in years"
                aria-valuetext={`${currentStage.label}`}
                style={{ width: '100%', cursor: 'pointer' }}
              />

              {/* Stage Notch Labels */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '12px',
                }}
              >
                {STAGE_IMAGES.map((st, i) => (
                  <button
                    key={st.stage}
                    onClick={() => setStageIndex(i)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '4px 0',
                      cursor: 'pointer',
                      color: stageIndex === i ? '#0E4A47' : 'rgba(14, 74, 71, 0.45)',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '0.68rem',
                      fontWeight: stageIndex === i ? 700 : 500,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Message Card */}
            <div
              key={msgIdx}
              className="ambient-glow-amber"
              style={{
                padding: '24px 28px',
                background: '#FFFFFF',
                border: '1px solid rgba(196, 154, 69, 0.35)',
                borderLeft: '4px solid #C49A45',
                borderRadius: '8px',
                animation: 'fadeUp 400ms cubic-bezier(0.22,1,0.36,1) both',
                marginBottom: '28px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif, "Lora", Georgia, serif)',
                  fontWeight: 400,
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  color: '#0E4A47',
                  marginBottom: '10px',
                  lineHeight: 1.25,
                }}
              >
                {msgObj.title}
              </h3>
              <p
                style={{
                  fontSize: 'clamp(0.88rem, 1.2vw, 1rem)',
                  color: '#3D5A54',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {msgObj.body}
              </p>
            </div>

            {/* CTA Button */}
            <button
              className="btn btn--primary"
              onClick={() => onOpenBooking?.()}
              style={{ padding: '14px 28px', fontSize: '0.85rem' }}
            >
              {t('estimator.discussBtn')} →
            </button>
          </div>

          {/* RIGHT COLUMN: Evolving Editorial Visual */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 10',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(14, 74, 71, 0.12)',
              border: '1px solid rgba(14, 74, 71, 0.15)',
              background: '#FFFFFF',
            }}
          >
            {/* Vignette Overlay fading smoothly into #F0F4F3 */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 3,
                pointerEvents: 'none',
                background:
                  'radial-gradient(circle at center, transparent 50%, rgba(240, 244, 243, 0.4) 80%, rgba(240, 244, 243, 0.85) 100%)',
              }}
              aria-hidden="true"
            />

            {/* Stack of 6 Stage Images with smooth dissolve transition */}
            {STAGE_IMAGES.map((st, i) => {
              const isActive = stageIndex === i;
              return (
                <div
                  key={st.stage}
                  className="timeline-visual"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(1.04)',
                    filter: isActive ? 'blur(0px)' : 'blur(4px)',
                    transition:
                      'opacity 700ms ease, transform 1000ms cubic-bezier(.22,1,.36,1), filter 700ms ease',
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  <img
                    src={st.src}
                    alt={`${st.label} - ${st.concept}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    loading="lazy"
                  />
                </div>
              );
            })}

            {/* Concept Badge at bottom right of image frame */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                zIndex: 4,
                background: 'rgba(23, 57, 46, 0.85)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(216, 170, 92, 0.35)',
                padding: '6px 14px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--amber-light)' }} />
              <span className="mono" style={{ fontSize: '0.68rem', color: '#ffffff', letterSpacing: '0.08em' }}>
                {currentStage.concept}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
