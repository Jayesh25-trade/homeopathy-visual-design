import React, { useState } from 'react';

const ITEMS = [
  {
    icon: '📋',
    title: 'Recent medical reports',
    detail: 'Blood tests, scans, or specialist letters from the last 6 months. Clear photos on your phone are fine.',
  },
  {
    icon: '💊',
    title: 'Current medicines or prescriptions',
    detail: 'Any allopathic, homoeopathic, or other medicines you are currently taking, with their dosages.',
  },
  {
    icon: '🗓️',
    title: 'Timeline of your symptoms',
    detail: 'When the concern first appeared, how it has changed, and what you have already tried.',
  },
  {
    icon: '📶',
    title: 'A stable internet connection',
    detail: 'For online consultations. A quiet space without interruption helps the doctor focus on your case.',
  },
  {
    icon: '🧘',
    title: 'A few minutes of calm',
    detail: "Dr Somani's consultations are unhurried. Being relaxed helps you remember details that matter.",
  },
];

export default function BeforeYouCall() {
  const [checked, setChecked] = useState(new Set());
  const [expanded, setExpanded] = useState(false);

  const toggle = idx => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const allDone = checked.size === ITEMS.length;

  return (
    <div style={{
      background: 'rgba(245,240,232,0.04)',
      border: '1px solid var(--border)',
      borderRadius: '2px',
      overflow: 'hidden',
    }}>

      {/* Accordion header */}
      <button
        onClick={() => setExpanded(v => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 24px',
          background: 'none',
          cursor: 'pointer',
          gap: '12px',
        }}
        aria-expanded={expanded}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1rem' }}>📂</span>
          <span className="before-call__title" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: allDone ? '#2d7a4e' : 'var(--mineral-light)',
          }}>
            {allDone ? '✓ Ready for your consultation' : `Before you call — ${checked.size}/${ITEMS.length} ready`}
          </span>
        </div>
        <span style={{
          color: 'var(--mineral-light)',
          fontSize: '1.2rem',
          transform: expanded ? 'rotate(180deg)' : 'none',
          transition: 'transform 280ms ease',
        }}>
          ⌄
        </span>
      </button>

      {/* Checklist items */}
      {expanded && (
        <div style={{ padding: '0 24px 20px' }}>
          {ITEMS.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="checklist-item"
              style={{
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                background: 'none',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '14px 0',
                borderBottom: '1px solid var(--border)',
                animationDelay: `${i * 60}ms`,
              }}
              aria-pressed={checked.has(i)}
              aria-label={`Mark "${item.title}" as ready`}
            >
              {/* Checkbox */}
              <div
                className={`checklist-check ${checked.has(i) ? 'checked' : ''}`}
                aria-hidden="true"
              >
                {checked.has(i) && '✓'}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <span style={{ fontSize: '0.95rem' }}>{item.icon}</span>
                   <span className="before-call__item-title" style={{
                     fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: 'clamp(0.88rem, 1.5vw, 0.95rem)',
                    color: checked.has(i) ? 'var(--fg-muted)' : 'var(--fg)',
                    textDecoration: checked.has(i) ? 'line-through' : 'none',
                    opacity: checked.has(i) ? 0.55 : 1,
                    transition: 'all 250ms',
                  }}>
                    {item.title}
                  </span>
                </div>
                 <p className="before-call__detail" style={{
                  fontSize: 'clamp(0.8rem, 1.3vw, 0.88rem)',
                  color: 'var(--fg-faint)',
                  lineHeight: 1.55,
                }}>
                  {item.detail}
                </p>
              </div>
            </button>
          ))}

          {allDone && (
            <div style={{
              marginTop: '16px',
              padding: '12px 16px',
              background: 'rgba(45,122,78,0.15)',
              border: '1px solid rgba(45,122,78,0.3)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              animation: 'fadeUp 350ms ease both',
            }}>
              <span style={{ fontSize: '1.1rem' }}>✓</span>
               <span style={{
                 fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                letterSpacing: '0.08em',
                color: '#2d7a4e',
                textTransform: 'uppercase',
              }}>
                You are ready. Your consultation can begin.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
