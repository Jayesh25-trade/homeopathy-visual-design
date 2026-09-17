import React from 'react';
import { clinic, locations } from '../data/clinicData';

export default function ChapterEnding({ onOpenBooking }) {
  return (
    <section
      id="locations"
      className="paper-section"
      aria-label="Book a Consultation"
      style={{ padding: 'clamp(100px,12vw,160px) 0' }}
    >
      <div className="container">

        <p className="chapter-label" style={{ color: 'var(--mineral)', marginBottom: '40px' }}>
          Chapter 07 · Begin
        </p>

        {/* Closing headline */}
        <div style={{ maxWidth: '680px', marginBottom: '64px' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: 'var(--ink)',
            lineHeight: 1.15,
            marginBottom: '24px',
            letterSpacing: '0',
          }}>
            "Your case deserves time,<br />
            <em>context and careful attention.</em>"
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            color: 'var(--fg-muted)',
            lineHeight: 1.7,
          }}>
            Choose how you would like to begin. Every consultation with Dr Somani's
            starts with listening—your history, your experience, your life.
          </p>
        </div>

        {/* Location cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2px',
          marginBottom: '40px',
          background: 'var(--border)',
        }}>
          {locations.map((loc) => (
            <div
              key={loc.id}
              style={{
                background: 'var(--paper)',
                padding: '32px 28px',
              }}
            >
              <p className="mono" style={{ color: 'var(--mineral)', marginBottom: '12px', fontSize: '0.65rem' }}>
                {loc.id === 'online' ? 'ONLINE' : 'CLINIC'}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontSize: '1.3rem',
                color: 'var(--ink)',
                marginBottom: '10px',
              }}>
                {loc.city}
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--fg-muted)',
                lineHeight: 1.6,
                marginBottom: '10px',
              }}>
                {loc.address}
              </p>
              <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--mineral)', marginBottom: '20px' }}>
                {loc.phone}
              </p>
              <button
                type="button"
                onClick={() => onOpenBooking?.()}
                className="btn btn--primary"
                style={{ fontSize: '0.82rem', padding: '10px 18px' }}
              >
                Book at {loc.city}
              </button>
              {loc.mapsUrl && (
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    marginTop: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--mineral)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  Directions →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp primary action */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          marginBottom: '48px',
          alignItems: 'center',
        }}>
          <a
            href={clinic.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            WhatsApp the Clinic
          </a>
          <a
            href={clinic.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-ink"
            aria-label="Instagram"
          >
            @somanikushal
          </a>
        </div>

        {/* Responsible disclaimer */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.82rem',
          color: 'var(--fg-muted)',
          lineHeight: 1.6,
          maxWidth: '600px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
        }}>
          Treatment is individualised. Suitability and expected outcomes are discussed
          during consultation. This website does not replace emergency medical care.
        </p>

      </div>
    </section>
  );
}
