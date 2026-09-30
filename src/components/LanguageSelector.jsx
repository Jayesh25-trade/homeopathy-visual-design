import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

export default function LanguageSelector({ variant = 'default' }) {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'mr', label: 'मराठी', short: 'मराठी' },
    { code: 'hi', label: 'हिंदी', short: 'हिंदी' },
  ];

  const currentOption = options.find((opt) => opt.code === lang) || options[0];
  const isDark = variant === 'dark';

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        aria-expanded={isOpen}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          background: isDark ? 'rgba(255, 255, 255, 0.1)' : '#f1f5f9',
          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(20, 33, 61, 0.12)'}`,
          borderRadius: '9999px',
          padding: '5px 10px',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: isDark ? '#ffffff' : '#0F172A',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: isDark ? 'none' : '0 1px 2px rgba(0,0,0,0.04)',
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={(e) => {
          if (!isDark) e.currentTarget.style.backgroundColor = '#e2e8f0';
        }}
        onMouseLeave={(e) => {
          if (!isDark) e.currentTarget.style.backgroundColor = '#f1f5f9';
        }}
      >
        <Globe size={13} style={{ color: isDark ? '#ffffff' : '#475569', flexShrink: 0 }} />
        <span>{currentOption.short}</span>
        <ChevronDown 
          size={12} 
          style={{ 
            color: isDark ? 'rgba(255,255,255,0.7)' : '#64748B', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            flexShrink: 0
          }} 
        />
      </button>

      {/* Floating Options Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            zIndex: 200,
            minWidth: '130px',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            borderRadius: '14px',
            padding: '4px',
            boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.15), 0 8px 10px -6px rgba(15, 23, 42, 0.1)',
            animation: 'fadeInScale 0.15s ease-out'
          }}
        >
          {options.map((opt) => {
            const isSelected = lang === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => {
                  setLang(opt.code);
                  setIsOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '7px 10px',
                  fontSize: '0.82rem',
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? '#dc2626' : '#1e293b',
                  backgroundColor: isSelected ? '#fef2f2' : 'transparent',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = '#f8fafc';
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span>{opt.label}</span>
                {isSelected && <Check size={13} style={{ color: '#dc2626' }} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}


