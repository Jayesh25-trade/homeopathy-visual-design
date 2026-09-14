import React from 'react';
import { timelineChapters } from '../data/clinicData';

export default function ChapterTimeline() {
  return (
    <section
      id="27-years"
      aria-label="27 Years — One Evolving Practice"
      style={{
        background: 'var(--forest)',
        padding: 'clamp(80px,10vw,140px) 0',
        overflow: 'hidden',
      }}
    >
      <div className="container">

        <p className="chapter-label" style={{ marginBottom: '40px' }}>
          Chapter 03 · 27 Years, One Evolving Practice
        </p>

        <h2 className="serif-display serif-display--md reveal" style={{ color: 'var(--ivory)', marginBottom: '80px', maxWidth: '600px' }}>
          A practice built on<br />
          <em style={{ color: 'var(--amber-light)' }}>listening first.</em>
        </h2>

        {/* Timeline entries */}
        <div style={{ position: 'relative' }}>

          {/* Vertical root line */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '8px',
            bottom: '8px',
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(139,160,122,0.5) 10%, rgba(139,160,122,0.5) 90%, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timelineChapters.map((ch, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr',
                  gap: '40px',
                  alignItems: 'start',
                  paddingBottom: ch.isCoda ? '0' : '64px',
                  paddingLeft: '28px',
                  position: 'relative',
                }}
              >
                {/* Root node dot */}
                <div style={{
                  position: 'absolute',
                  left: '-4px',
                  top: '8px',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: ch.isCoda ? 'var(--amber)' : 'rgba(139,160,122,0.7)',
                  boxShadow: ch.isCoda ? '0 0 12px rgba(200,135,58,0.5)' : 'none',
                }} />

                {/* Year */}
                <div>
                  <span style={{
                    fontFamily: ch.isCoda ? 'var(--font-serif)' : 'var(--font-mono)',
                    fontSize: ch.isCoda ? 'clamp(2rem, 4vw, 3.5rem)' : '0.9rem',
                    fontWeight: ch.isCoda ? 300 : 400,
                    color: ch.isCoda ? 'var(--amber-light)' : 'var(--mineral-light)',
                    fontStyle: ch.isCoda ? 'italic' : 'normal',
                    lineHeight: 1.2,
                    display: 'block',
                  }}>
                    {ch.year}
                  </span>
                </div>

                {/* Content */}
                {!ch.isCoda && (
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 300,
                      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                      color: 'var(--ivory)',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                    }}>
                      {ch.heading}
                    </h3>
                    {ch.body && (
                      <p style={{
                        fontSize: '0.95rem',
                        color: 'rgba(245,240,232,0.62)',
                        lineHeight: 1.7,
                        maxWidth: '480px',
                      }}>
                        {ch.body}
                      </p>
                    )}
                  </div>
                )}

                {ch.isCoda && (
                  <div style={{ paddingTop: '12px' }}>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                      color: 'rgba(245,240,232,0.6)',
                      lineHeight: 1.5,
                    }}>
                      {ch.heading}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
