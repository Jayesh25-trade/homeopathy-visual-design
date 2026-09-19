import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector({ variant = 'default' }) {
  const { lang, setLang } = useLanguage();

  const options = [
    { code: 'en', label: 'EN' },
    { code: 'mr', label: 'मराठी' },
    { code: 'hi', label: 'हिंदी' },
  ];

  return (
    <div
      aria-label="Language Selector"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: variant === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(23,63,50,0.06)',
        border: `1px solid ${variant === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(23,63,50,0.18)'}`,
        borderRadius: '24px',
        padding: '2px',
        gap: '2px',
      }}
    >
      {options.map((opt) => {
        const isActive = lang === opt.code;
        return (
          <button
            key={opt.code}
            onClick={() => setLang(opt.code)}
            style={{
              padding: '4px 10px',
              borderRadius: '20px',
              border: 'none',
              background: isActive ? '#C5964A' : 'transparent',
              color: isActive ? '#173F32' : (variant === 'dark' ? '#FAF7F2' : '#173F32'),
              fontFamily: 'Manrope, sans-serif',
              fontWeight: isActive ? 700 : 500,
              fontSize: '0.72rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
