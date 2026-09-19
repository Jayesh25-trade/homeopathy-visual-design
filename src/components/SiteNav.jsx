import React, { useState, useEffect } from 'react';
import { clinic } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

const WHATSAPP_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function SiteNav({ onOpenBooking }) {
  const { t } = useLanguage();
  const [active, setActive] = useState('beginning');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'beginning',    label: t('nav.about') },
    { id: 'concerns',     label: t('nav.concerns') },
    { id: 'doctors',      label: t('nav.about') },
    { id: 'real-patients',label: t('nav.cases') },
    { id: 'patient-reviews', label: t('nav.reviews') },
    { id: 'consultation', label: t('nav.consultation') },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        const isScrolled = window.scrollY > 80;
        setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));

        let current = 'beginning';
        const viewportCenter = window.innerHeight * 0.5;
        for (let i = 0; i < navItems.length; i++) {
          const el = document.getElementById(navItems[i].id);
          if (el && el.getBoundingClientRect().top <= viewportCenter) {
            current = navItems[i].id;
          }
        }
        setActive(prev => (prev !== current ? current : prev));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Top bar (appears on scroll) ─────────────────────── */}
      <header
        className={`top-bar ${scrolled ? 'visible' : ''}`}
        role="banner"
      >
        {/* Logo / clinic name */}
        <button
          className="top-bar__brand"
          onClick={() => scrollTo('beginning')}
          aria-label="Back to top"
        >
          <img
            src="/assets/logo.png"
            alt="Dr Somani's Homoeopathy"
            width="32" height="32"
            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
          />
          <span className="top-bar__brand-copy">
            <strong>{t('nav.brand')}</strong>
            <small>{t('nav.brandSub')}</small>
          </span>
        </button>

        {/* Desktop nav links */}
        <nav
          aria-label="Primary navigation"
          className="hide-mobile"
          style={{ display: 'flex', gap: '0', alignItems: 'center' }}
        >
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                padding: '8px 14px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: active === item.id ? 'var(--fg)' : 'var(--fg-muted)',
                cursor: 'pointer',
                background: 'none',
                position: 'relative',
                transition: 'color 200ms',
                minHeight: '44px',
              }}
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right cluster with Language Selector */}
        <div className="top-bar__actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <LanguageSelector />
          <button
            className="btn btn--primary top-bar__book"
            onClick={() => onOpenBooking?.()}
          >
            {t('nav.bookBtn')}
          </button>
        </div>
      </header>

      {/* ── Desktop side rail ───────────────────────────────── */}
      <nav
        aria-label="Section navigation"
        className="hide-mobile"
        style={{
          position: 'fixed', left: '20px', top: '50%',
          transform: 'translateY(-50%)', zIndex: 700,
          display: 'flex', flexDirection: 'column', gap: '2px',
          opacity: scrolled ? 1 : 0,
          transition: 'opacity 400ms ease',
          pointerEvents: scrolled ? 'all' : 'none',
        }}
      >
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '5px 0', background: 'none', cursor: 'pointer',
            }}
            aria-label={item.label}
            aria-current={active === item.id ? 'location' : undefined}
          >
            <span style={{
              display: 'block',
              width: active === item.id ? '22px' : '8px',
              height: '1px',
              background: active === item.id ? 'var(--amber)' : 'rgba(139,160,122,0.4)',
              transition: 'width 280ms cubic-bezier(0.22,1,0.36,1), background 280ms',
            }} />
          </button>
        ))}
      </nav>

      {/* ── Mobile bottom bar ──────────────────────────────── */}
      <div
        className={`bottom-bar ${scrolled ? 'visible' : ''}`}
        style={{ paddingBottom: 'calc(10px + env(safe-area-inset-bottom))' }}
        aria-label="Quick actions"
      >
        <button
          className="btn btn--primary"
          onClick={() => onOpenBooking?.()}
          style={{ flex: 1, fontSize: '0.85rem', padding: '12px 16px' }}
        >
          {t('nav.bookBtn')}
        </button>
        <a
          href={clinic.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp"
          style={{ padding: '12px 16px', minWidth: '52px' }}
          aria-label="WhatsApp"
        >
          {WHATSAPP_ICON}
        </a>
      </div>
    </>
  );
}
