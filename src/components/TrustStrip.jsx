import React from 'react';
import { trustStats } from '../data/clinicData';

export default function TrustStrip() {
  return (
    <section
      aria-label="Practice statistics"
      style={{
        background: 'var(--forest)',
        borderTop: '1px solid rgba(139,160,122,0.15)',
        borderBottom: '1px solid rgba(139,160,122,0.15)',
        padding: 'clamp(20px,4vw,36px) 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '0',
        }}
      >
        {trustStats.map((stat, i) => (
          <div
            key={stat.label}
            className="reveal"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(12px,2vw,20px) clamp(8px,1.5vw,16px)',
              borderRight: i < trustStats.length - 1
                ? '1px solid rgba(139,160,122,0.18)'
                : 'none',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                color: 'var(--amber-light)',
                lineHeight: 1,
                marginBottom: '6px',
                letterSpacing: '-0.01em',
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: 'clamp(0.72rem, 1.1vw, 0.88rem)',
                color: 'rgba(245,240,232,0.92)',
                marginBottom: '3px',
                letterSpacing: '0.01em',
              }}
            >
              {stat.label}
            </span>
            <span
              className="mono"
              style={{
                fontSize: '0.56rem',
                color: 'var(--mineral-light)',
                letterSpacing: '0.04em',
              }}
            >
              {stat.sub}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          [aria-label="Practice statistics"] .container {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          [aria-label="Practice statistics"] .container > div:nth-child(3) {
            border-right: none !important;
          }
          [aria-label="Practice statistics"] .container > div:nth-child(4),
          [aria-label="Practice statistics"] .container > div:nth-child(5) {
            border-top: 1px solid rgba(139,160,122,0.18);
          }
          [aria-label="Practice statistics"] .container > div:nth-child(5) {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
