import React, { useState } from 'react';
import { clinic } from '../data/clinicData';

const MESSAGES = [
  {
    range: [0, 1],
    label: "Less than 1 year",
    title: "Early concerns still deserve context.",
    body: "A consultation can help document when the concern began, what affects it and what you have already tried.",
    tone: "encouraging",
  },
  {
    range: [1, 3],
    label: "1 – 3 years",
    title: "A considered approach matters.",
    body: "When symptoms have changed over time, a careful history helps the doctor understand the full pattern rather than one recent episode.",
    tone: "grounded",
  },
  {
    range: [3, 7],
    label: "3 – 7 years",
    title: "A detailed history becomes important.",
    body: "Long-standing concerns may involve several stages and previous treatments. Your consultation begins with a thorough review of that history.",
    tone: "specialist",
  },
  {
    range: [7, 15],
    label: "More than 7 years",
    title: "Long-standing concerns need careful review.",
    body: "Conditions carried for many years deserve unhurried attention, including your symptoms, health history, lifestyle and previous care.",
    tone: "reassuring",
  },
];

const TONE_COLORS = {
  encouraging: '#2d7a4e',
  grounded: '#8a6a2e',
  specialist: '#c43c2a',
  reassuring: '#4a6a8a',
};

export default function SymptomEstimator({ onOpenBooking }) {
  const [years, setYears] = useState(2);

  const msg = MESSAGES.find(m => years >= m.range[0] && years < m.range[1]) || MESSAGES[MESSAGES.length - 1];

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
          How long have you had this concern?
        </div>

        <h2
          className="serif-display serif-display--md"
          style={{ color: 'var(--fg)', marginBottom: '48px', maxWidth: '640px' }}
        >
          Every case has its{' '}
          <em style={{ color: 'var(--amber-light)' }}>own timeline.</em>
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
              {years < 1 ? 'months' : years === 1 ? 'year' : 'years'}
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
            <span className="mono" style={{ fontSize: '0.75rem' }}>{'< 1 year'}</span>
            <span className="mono" style={{ fontSize: '0.75rem' }}>7+ years</span>
          </div>
        </div>

        {/* Message card */}
        <div
          key={msg.tone}
          className="ambient-glow-amber"
          style={{
            maxWidth: '640px',
            padding: '28px 32px',
            background: 'rgba(245,240,232,0.06)',
            backgroundImage: `linear-gradient(to bottom, rgba(26,35,24,0.85), rgba(26,35,24,0.95)), url(/assets/remedy_globules_paper.png)`,
            backgroundSize: 'cover',
            border: `1px solid ${TONE_COLORS[msg.tone]}50`,
            borderLeft: `4px solid ${TONE_COLORS[msg.tone]}`,
            borderRadius: '4px',
            animation: 'fadeUp 400ms cubic-bezier(0.22,1,0.36,1) both',
            marginBottom: '32px',
            boxShadow: '0 12px 36px rgba(0,0,0,0.3)',
          }}
        >
          <p className="mono" style={{ fontSize: '0.75rem', marginBottom: '8px', color: TONE_COLORS[msg.tone] }}>
            {msg.label}
          </p>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--fg)',
            marginBottom: '10px',
            lineHeight: 1.25,
          }}>
            {msg.title}
          </h3>
          <p style={{
            fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
            color: 'var(--fg-muted)',
            lineHeight: 1.7,
          }}>
            {msg.body}
          </p>
        </div>

        <button
          className="btn btn--primary"
          onClick={() => onOpenBooking?.()}
          style={{ animationDelay: '0.2s' }}
        >
          Discuss your case with Dr Somani
        </button>

      </div>
    </section>
  );
}
