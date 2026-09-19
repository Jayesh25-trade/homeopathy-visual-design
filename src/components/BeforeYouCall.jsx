import React, { useState } from 'react';

const ITEMS = [
  {
    title: 'Recent medical reports',
    detail: 'Blood tests, scans, or specialist letters from the last 6 months. Clear photos on your phone are fine.',
  },
  {
    title: 'Current medicines or prescriptions',
    detail: 'Any allopathic, homoeopathic, or other medicines you are currently taking, with their dosages.',
  },
  {
    title: 'Timeline of your symptoms',
    detail: 'When the concern first appeared, how it has changed, and what you have already tried.',
  },
  {
    title: 'A stable internet connection',
    detail: 'For online consultations. A quiet space without interruption helps the doctor focus on your case.',
  },
  {
    title: 'A few minutes of calm',
    detail: "Dr Somani's consultations are unhurried. Being relaxed helps you remember details that matter.",
  },
];

export default function BeforeYouCall() {
  const [checked, setChecked] = useState(new Set());
  const [expanded, setExpanded] = useState(true);

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
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.22)',
      borderRadius: '8px',
      overflow: 'hidden',
      marginTop: '24px',
    }}>

      {/* Accordion header */}
      <button
        onClick={() => setExpanded(v => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: '12px',
        }}
        aria-expanded={expanded}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="before-call__title" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: allDone ? '#4ADE80' : '#E4B567',
            fontWeight: 700,
          }}>
            {allDone ? 'Ready for your consultation' : `BEFORE YOU CALL — ${checked.size}/${ITEMS.length} READY`}
          </span>
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FAF7F2"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: expanded ? 'rotate(180deg)' : 'none',
            transition: 'transform 280ms ease',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Checklist items */}
      {expanded && (
        <div style={{ padding: '0 20px 20px 20px' }}>
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
                padding: '12px 0',
                borderBottom: i < ITEMS.length - 1 ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
              }}
              aria-pressed={checked.has(i)}
              aria-label={`Mark "${item.title}" as ready`}
            >
              {/* Custom Checkbox Circle */}
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: checked.has(i) ? '1.5px solid #4ADE80' : '1.5px solid rgba(255, 255, 255, 0.6)',
                  background: checked.has(i) ? '#4ADE80' : 'transparent',
                  color: checked.has(i) ? '#173F32' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                  transition: 'all 0.2s ease',
                }}
              >
                {checked.has(i) && (
                  <svg width="11" height="9" viewBox="0 0 12 10" fill="none" stroke="#173F32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1.5 5 4.5 8 10.5 1.5" />
                  </svg>
                )}
              </div>

              <div style={{ flex: 1 }}>
                <span style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: '0.94rem',
                  color: checked.has(i) ? 'rgba(250,247,242,0.45)' : '#FFFFFF',
                  textDecoration: checked.has(i) ? 'line-through' : 'none',
                  marginBottom: '3px',
                  transition: 'color 0.2s ease',
                }}>
                  {item.title}
                </span>
                <p style={{
                  margin: 0,
                  fontSize: '0.84rem',
                  color: checked.has(i) ? 'rgba(250,247,242,0.35)' : '#E6E1D7',
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
              background: 'rgba(74,222,128,0.15)',
              border: '1px solid rgba(74,222,128,0.35)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <svg width="14" height="12" viewBox="0 0 12 10" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1.5 5 4.5 8 10.5 1.5" />
              </svg>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                letterSpacing: '0.06em',
                color: '#4ADE80',
                textTransform: 'uppercase',
                fontWeight: 700
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

