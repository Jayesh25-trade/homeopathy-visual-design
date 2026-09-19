import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function BeforeYouCall() {
  const { t } = useLanguage();
  const [checked, setChecked] = useState(new Set());
  const [expanded, setExpanded] = useState(true);

  const items = [
    { title: t('consultationSection.checklist.0.title'), detail: t('consultationSection.checklist.0.detail') },
    { title: t('consultationSection.checklist.1.title'), detail: t('consultationSection.checklist.1.detail') },
    { title: t('consultationSection.checklist.2.title'), detail: t('consultationSection.checklist.2.detail') },
    { title: t('consultationSection.checklist.3.title'), detail: t('consultationSection.checklist.3.detail') },
    { title: t('consultationSection.checklist.4.title'), detail: t('consultationSection.checklist.4.detail') },
  ];

  const toggle = idx => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const allDone = checked.size === items.length;

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
            {allDone
              ? t('consultationSection.readyHeader')
              : `${t('consultationSection.beforeCallHeader')} — ${checked.size}/${items.length}`}
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
          {items.map((item, i) => (
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
                borderBottom: i < items.length - 1 ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
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
                {t('consultationSection.readyBanner')}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


