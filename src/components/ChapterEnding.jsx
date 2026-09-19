import React from 'react';
import { clinic } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export default function ChapterEnding({ onOpenBooking }) {
  const { t, lang } = useLanguage();

  const locationsList = [
    {
      id: 'wakad',
      city: lang === 'mr' ? 'वाकड, पुणे' : lang === 'hi' ? 'वाकड, पुणे' : 'Wakad, Pune',
      address: t('common.puneAddress'),
      phone: '+91 98226 77921',
      type: 'CLINIC',
      mapsUrl: 'https://maps.app.goo.gl/jthY3tH3iZJyVP9j9'
    },
    {
      id: 'jalgaon',
      city: lang === 'mr' ? 'जळगाव' : lang === 'hi' ? 'जलगांव' : 'Jalgaon',
      address: t('common.jalgaonAddress'),
      phone: '+91 94222 77921',
      type: 'CLINIC',
      mapsUrl: 'https://maps.google.com/?q=Somani+Homoeopathy+Jalgaon'
    },
    {
      id: 'online',
      city: lang === 'mr' ? 'ऑनलाइन सल्ला' : lang === 'hi' ? 'ऑनलाइन परामर्श' : 'Online Consultation',
      address: t('common.onlineAddress'),
      phone: '+91 98226 77921',
      type: 'ONLINE',
    }
  ];

  return (
    <section
      id="locations"
      className="paper-section"
      aria-label="Book a Consultation"
      style={{ padding: 'clamp(36px, 4vw, 56px) 0 20px 0' }}
    >
      <div className="container">

        <p className="chapter-label" style={{ color: 'var(--mineral)', marginBottom: '40px' }}>
          {lang === 'mr' ? 'प्रकरण ०७ · प्रारंभ' : lang === 'hi' ? 'अध्याय 07 · शुरुआत' : 'Chapter 07 · Begin'}
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
            {t('ending.h2')}<br />
            <em>{t('ending.h2Em')}</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            color: 'var(--fg-muted)',
            lineHeight: 1.7,
          }}>
            {t('ending.sub')}
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
          {locationsList.map((loc) => (
            <div
              key={loc.id}
              style={{
                background: 'var(--paper)',
                padding: '32px 28px',
              }}
            >
              <p className="mono" style={{ color: 'var(--mineral)', marginBottom: '12px', fontSize: '0.65rem' }}>
                {loc.type === 'ONLINE' 
                  ? (lang === 'mr' ? 'ऑनलाइन' : lang === 'hi' ? 'ऑनलाइन' : 'ONLINE')
                  : (lang === 'mr' ? 'क्लिनिक' : lang === 'hi' ? 'क्लिनिक' : 'CLINIC')}
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
                {t('ending.requestBtn')}
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
                  {t('common.directions')} →
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
            {t('ending.whatsappBtn')}
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
          {t('footer.disclaimer')}
        </p>

      </div>
    </section>
  );
}

