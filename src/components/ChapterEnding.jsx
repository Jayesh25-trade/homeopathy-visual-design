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
      aria-label="Book a Consultation"
      style={{
        backgroundColor: '#f7f4ed',
        backgroundImage: 'radial-gradient(#dcd5c7 0.8px, transparent 0.8px)',
        backgroundSize: '18px 18px',
        padding: 'clamp(3rem, 6vw, 5.5rem) 0 3rem 0',
        borderTop: '1px solid #e2dad0',
        borderBottom: '1px solid #e2dad0',
        position: 'relative'
      }}
    >
      <div className="container">

        <p style={{
          fontFamily: "'Special Elite', monospace",
          color: '#17392e',
          fontSize: '0.8rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          {lang === 'mr' ? 'प्रकरण ०७ · प्रारंभ' : lang === 'hi' ? 'अध्याय 07 · शुरुआत' : 'Chapter 07 · Begin'}
        </p>

        {/* Closing headline */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontFamily: "'Special Elite', monospace",
            fontWeight: 400,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            color: '#1c2621',
            lineHeight: 1.15,
            marginBottom: '0.75rem',
            letterSpacing: '0',
          }}>
            {t('ending.h2')}<br />
            <em style={{ color: '#dc2626', fontStyle: 'italic' }}>{t('ending.h2Em')}</em>
          </h2>

          <div style={{
            width: '180px',
            height: '8px',
            borderTop: '3px solid #d94838',
            borderRadius: '50%',
            marginBottom: '1rem',
            opacity: 0.8
          }} />

          <p style={{
            fontFamily: "'Special Elite', monospace",
            fontSize: '1.05rem',
            color: '#5c6660',
            lineHeight: 1.6,
          }}>
            {t('ending.sub')}
          </p>
        </div>

        {/* Location cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {locationsList.map((loc) => (
            <div
              key={loc.id}
              style={{
                background: '#fdfbf7',
                padding: '2.25rem 1.75rem',
                borderRadius: '16px',
                border: '1px solid #e2dad0',
                boxShadow: '0 12px 28px rgba(35, 30, 20, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 18px 36px rgba(35, 30, 20, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(35, 30, 20, 0.08)';
              }}
            >
              <div>
                <p style={{
                  fontFamily: "'Special Elite', monospace",
                  color: '#dc2626',
                  marginBottom: '0.85rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em'
                }}>
                  {loc.type === 'ONLINE' 
                    ? (lang === 'mr' ? 'ऑनलाइन' : lang === 'hi' ? 'ऑनलाइन' : 'ONLINE')
                    : (lang === 'mr' ? 'क्लिनिक' : lang === 'hi' ? 'क्लिनिक' : 'CLINIC')}
                </p>

                <h3 style={{
                  fontFamily: "'Special Elite', monospace",
                  fontWeight: 400,
                  fontSize: '1.4rem',
                  color: '#1c2621',
                  marginBottom: '0.75rem',
                }}>
                  {loc.city}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: '#2a3630',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                }}>
                  {loc.address}
                </p>

                <p style={{ fontFamily: "'Special Elite', monospace", fontSize: '0.82rem', color: '#17392e', fontWeight: 600, marginBottom: '1.5rem' }}>
                  {loc.phone}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onOpenBooking?.()}
                  className="btn-primary"
                  style={{ fontSize: '0.85rem', padding: '0.65rem 1.4rem', width: '100%' }}
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
                      marginTop: '0.85rem',
                      fontFamily: "'Special Elite', monospace",
                      fontSize: '0.78rem',
                      color: '#17392e',
                      textAlign: 'center',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    {t('common.directions')} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp primary action */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          marginBottom: '3rem',
          alignItems: 'center',
        }}>
          <a
            href={clinic.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
            style={{ fontSize: '0.9rem', padding: '0.75rem 1.75rem' }}
          >
            {t('ending.whatsappBtn')}
          </a>
          <a
            href={clinic.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-ink"
            style={{ fontFamily: "'Special Elite', monospace", fontSize: '0.88rem' }}
            aria-label="Instagram"
          >
            @somanikushal
          </a>
        </div>

        {/* Responsible disclaimer */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.82rem',
          color: '#5c6660',
          lineHeight: 1.6,
          maxWidth: '650px',
          paddingTop: '20px',
          borderTop: '1px solid #e2dad0',
        }}>
          {t('footer.disclaimer')}
        </p>

      </div>
    </section>
  );
}

