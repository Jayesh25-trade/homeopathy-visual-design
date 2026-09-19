import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TONE_COLORS = {
  encouraging: '#2d7a4e',
  grounded: '#8a6a2e',
  specialist: '#c43c2a',
  reassuring: '#4a6a8a',
};

export default function SymptomEstimator({ onOpenBooking }) {
  const { t } = useLanguage();
  const [years, setYears] = useState(2);

  const getMessageIndex = (y) => {
    if (y < 1) return 0;
    if (y < 3) return 1;
    if (y < 7) return 2;
    return 3;
  };

  const idx = getMessageIndex(years);
  const toneList = ['encouraging', 'grounded', 'specialist', 'reassuring'];
  const msgTone = toneList[idx];

  const msgObj = {
    title: t(`estimator.messages.${idx}.title`),
    body: t(`estimator.messages.${idx}.body`),
  };

  return (
    <section
      className="symptom-estimator"
      aria-label="Symptom Duration Estimator"
      style={{
        background: 'var(--bg-mid)',
        padding: 'clamp(60px,8vw,100px) 0',
      }}
    >
      <div className="container">

        <div className="chapter-label">
          {t('estimator.label')}
        </div>

        <h2
          className="serif-display serif-display--md"
          style={{ color: 'var(--fg)', marginBottom: '48px', maxWidth: '640px' }}
        >
          {t('estimator.h2')}{' '}
          <em style={{ color: 'var(--amber-light)' }}>{t('estimator.h2Em')}</em>
        </h2>

        {/* Slider */}
        <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '20px',
          }}>
            <span style={{
              fontFamily: 'var(--font-serif, Fraunces, serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 300,
              color: 'var(--fg)',
              lineHeight: 1,
            }}>
              {years < 1 ? '< 1' : years}
            </span>
            <span className="mono" style={{ fontSize: '0.8rem' }}>
              {years < 1 ? t('estimator.months') : years === 1 ? t('estimator.year') : t('estimator.years')}
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={14}
            step={1}
            value={years}
            onChange={e => setYears(Number(e.target.value))}
            className="estimator-slider"
            aria-label="Number of years with this condition"
            aria-valuetext={`${years} ${years === 1 ? 'year' : 'years'}`}
          />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}>
            <span className="mono" style={{ fontSize: '0.75rem' }}>{t('estimator.lessThan1')}</span>
            <span className="mono" style={{ fontSize: '0.75rem' }}>{t('estimator.moreThan7')}</span>
          </div>
        </div>

        {/* Message card */}
        <div
          key={idx}
          className="ambient-glow-amber"
          style={{
            maxWidth: '640px',
            padding: '28px 32px',
            background: 'rgba(245,240,232,0.06)',
            backgroundImage: `linear-gradient(to bottom, rgba(26,35,24,0.85), rgba(26,35,24,0.95)), url(/assets/remedy_globules_paper.png)`,
            backgroundSize: 'cover',
            border: `1px solid ${TONE_COLORS[msgTone]}50`,
            borderLeft: `4px solid ${TONE_COLORS[msgTone]}`,
            borderRadius: '4px',
            animation: 'fadeUp 400ms cubic-bezier(0.22,1,0.36,1) both',
            marginBottom: '32px',
            boxShadow: '0 12px 36px rgba(0,0,0,0.3)',
          }}
        >
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--fg)',
            marginBottom: '10px',
            lineHeight: 1.25,
          }}>
            {msgObj.title}
          </h3>
          <p style={{
            fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
            color: 'rgba(245,240,232,0.88)',
            lineHeight: 1.7,
          }}>
            {msgObj.body}
          </p>
        </div>

        <button
          className="btn btn--primary"
          onClick={() => onOpenBooking?.()}
          style={{ animationDelay: '0.2s' }}
        >
          {t('estimator.discussBtn')}
        </button>

      </div>
    </section>
  );
}

