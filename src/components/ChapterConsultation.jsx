import React, { useState } from 'react';
import { consultationSteps, locations } from '../data/clinicData';
import BeforeYouCall from './BeforeYouCall';

export default function ChapterConsultation({ onOpenBooking }) {
  const [activeLocation, setActiveLocation] = useState(0);
  const loc = locations[activeLocation];

  return (
    <section id="consultation" className="journey" aria-label="How consultation works">
      <div className="journey__image" aria-hidden="true" />
      <div className="container journey__inner">
        <header className="journey__header reveal">
          <p className="chapter-label" style={{ color: '#E4B567' }}>How care begins</p>
          <h2 className="serif-display serif-display--md" style={{ color: '#FFFFFF' }}>One path.<br /><em style={{ color: '#E4B567' }}>Four careful steps.</em></h2>
          <p style={{ color: '#E6E1D7' }}>A clear, unhurried process—from your first message to thoughtful follow-up.</p>
        </header>

        <ol className="journey__steps">
          {consultationSteps.map((step, index) => (
            <li className="journey__step reveal" key={step.n}>
              <span className="journey__number">{step.n}</span>
              <div>
                <h3 style={{ color: '#FFFFFF' }}>{step.title}</h3>
                <p style={{ color: '#E6E1D7' }}>{step.body}</p>
              </div>
              {index < consultationSteps.length - 1 && <span className="journey__connector" aria-hidden="true" />}
            </li>
          ))}
        </ol>

        <div className="journey__booking reveal">
          <div className="journey__locations" role="tablist" aria-label="Choose clinic location">
            {locations.map((item, index) => (
              <button key={item.id} role="tab" aria-selected={index === activeLocation} onClick={() => setActiveLocation(index)}>
                {item.city}
              </button>
            ))}
          </div>
          <div className="journey__location-detail">
            <div>
              <p className="chapter-label" style={{ color: '#E4B567' }}>Selected location</p>
              <h3 style={{ color: '#FFFFFF', margin: '4px 0 8px 0', fontFamily: 'var(--font-serif)', fontSize: '1.85rem' }}>{loc.city}</h3>
              <p style={{ color: '#FAF7F2', margin: '0 0 10px 0', lineHeight: 1.6, fontSize: '0.94rem' }}>{loc.address}</p>
              <a className="journey__phone" href={loc.phoneHref} style={{ color: '#E4B567', fontSize: '1.05rem', fontWeight: 700, display: 'inline-block' }}>{loc.phone}</a>
            </div>
            <div className="journey__actions">
              <button
                type="button"
                onClick={() => onOpenBooking?.()}
                className="btn btn--primary"
                style={{
                  background: '#C5964A',
                  color: '#173F32',
                  fontWeight: 700,
                  padding: '12px 24px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  letterSpacing: '0.04em',
                }}
              >
                REQUEST CONSULTATION
              </button>
              {loc.mapsUrl && (
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 24px',
                    borderRadius: '5px',
                    color: '#FFFFFF',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1.5px solid rgba(255, 255, 255, 0.5)',
                    fontWeight: 700,
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                    fontSize: '0.85rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  DIRECTIONS
                </a>
              )}
            </div>
          </div>
          <BeforeYouCall />
        </div>
      </div>
    </section>
  );
}