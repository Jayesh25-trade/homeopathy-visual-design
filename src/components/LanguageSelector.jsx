import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector({ variant = 'default' }) {
  const { lang, setLang } = useLanguage();

  const options = [
    { code: 'en', label: 'EN' },
    { code: 'mr', label: 'मराठी' },
    { code: 'hi', label: 'हिंदी' },
  ];

  const isDark = variant === 'dark';

  return (
    <div
      aria-label="Language Selector"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: isDark ? 'rgba(23, 57, 46, 0.88)' : 'rgba(255, 255, 255, 0.88)',
        border: `1px solid ${isDark ? 'rgba(216, 170, 92, 0.4)' : 'rgba(23, 57, 46, 0.22)'}`,
        borderRadius: '24px',
        padding: '3px',
        gap: '3px',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
      }}
    >
      {options.map((opt) => {
        const isActive = lang === opt.code;
        return (
          <button
            key={opt.code}
            onClick={() => setLang(opt.code)}
            style={{
              padding: '5px 11px',
              borderRadius: '20px',
              border: 'none',
              background: isActive ? '#C5964A' : 'transparent',
              color: isActive ? '#173F32' : (isDark ? '#F4F0E7' : '#173F32'),
              fontFamily: 'Manrope, system-ui, sans-serif',
              fontWeight: isActive ? 800 : 700,
              fontSize: '0.74rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              opacity: isActive ? 1 : 0.9,
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

