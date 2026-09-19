import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import BeforeYouCall from './BeforeYouCall';

export default function ChapterConsultation({ onOpenBooking }) {
  const { t, lang } = useLanguage();
  const [activeLocation, setActiveLocation] = useState(0);

  const steps = [
    { n: '01', title: t('consultationSection.steps.0.title'), body: t('consultationSection.steps.0.body') },
    { n: '02', title: t('consultationSection.steps.1.title'), body: t('consultationSection.steps.1.body') },
    { n: '03', title: t('consultationSection.steps.2.title'), body: t('consultationSection.steps.2.body') },
    { n: '04', title: t('consultationSection.steps.3.title'), body: t('consultationSection.steps.3.body') },
  ];

  const locItems = [
    {
      id: 'wakad',
      city: lang === 'mr' ? 'पुणे क्लिनिक' : lang === 'hi' ? 'पुणे क्लिनिक' : 'Wakad, Pune',
      address: t('common.puneAddress'),
      phone: '+91 98226 77921',
      phoneHref: 'tel:+919822677921',
      mapsUrl: 'https://maps.app.goo.gl/jthY3tH3iZJyVP9j9'
    },
    {
      id: 'jalgaon',
      city: lang === 'mr' ? 'जळगाव क्लिनिक' : lang === 'hi' ? 'जलगांव क्लिनिक' : 'Jalgaon',
      address: t('common.jalgaonAddress'),
      phone: '+91 94222 77921',
      phoneHref: 'tel:+919422277921',
      mapsUrl: 'https://maps.google.com/?q=Somani+Homoeopathy+Jalgaon'
    },
    {
      id: 'online',
      city: lang === 'mr' ? 'ऑनलाइन व्हिडियो सल्ला' : lang === 'hi' ? 'ऑनलाइन वीडियो परामर्श' : 'Online / Pan-India',
      address: t('common.onlineAddress'),
      phone: '+91 98226 77921',
      phoneHref: 'tel:+919822677921',
    }
  ];

  const loc = locItems[activeLocation];

  return (
    <section id="consultation" className="journey" aria-label="How consultation works">
      <div className="journey__image" aria-hidden="true" />
      <div className="container journey__inner">
        <header className="journey__header reveal">
          <p className="chapter-label" style={{ color: '#E4B567' }}>{t('consultationSection.label')}</p>
          <h2 className="serif-display serif-display--md" style={{ color: '#FFFFFF' }}>
            {t('consultationSection.h2')}<br />
            <em style={{ color: '#E4B567' }}>{t('consultationSection.h2Em')}</em>
          </h2>
          <p style={{ color: '#E6E1D7' }}>{t('consultationSection.sub')}</p>
        </header>

        <ol className="journey__steps">
          {steps.map((step, index) => (
            <li className="journey__step reveal" key={step.n}>
              <span className="journey__number">{step.n}</span>
              <div>
                <h3 style={{ color: '#FFFFFF' }}>{step.title}</h3>
                <p style={{ color: '#E6E1D7' }}>{step.body}</p>
              </div>
              {index < steps.length - 1 && <span className="journey__connector" aria-hidden="true" />}
            </li>
          ))}
        </ol>

        <div className="journey__booking reveal">
          <div className="journey__locations" role="tablist" aria-label="Choose clinic location">
            {locItems.map((item, index) => (
              <button key={item.id} role="tab" aria-selected={index === activeLocation} onClick={() => setActiveLocation(index)}>
                {item.city}
              </button>
            ))}
          </div>
          <div className="journey__location-detail">
            <div>
              <p className="chapter-label" style={{ color: '#E4B567' }}>{t('common.selectLocation')}</p>
              <h3 style={{ color: '#FFFFFF', margin: '4px 0 8px 0', fontFamily: 'var(--font-serif)', fontSize: '1.85rem' }}>{loc.city}</h3>
              <p style={{ color: '#FAF7F2', margin: '0 0 10px 0', lineHeight: 1.6, fontSize: '0.94rem' }}>{loc.address}</p>
              <a className="journey__phone" href={loc.phoneHref} style={{ color: '#E4B567', fontSize: '1.05rem', fontWeight: 700, display: 'inline-block' }}>{loc.phone}</a>
            </div>
            <div className="journey__actions">
              <button
                type="button"
                onClick={() => onOpenBooking?.()}
                className="btn btn--primary"
                style={{
                  background: '#C5964A',
                  color: '#173F32',
                  fontWeight: 700,
                  padding: '12px 24px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  letterSpacing: '0.04em',
                }}
              >
                {t('common.requestConsultation')}
              </button>
              {loc.mapsUrl && (
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 24px',
                    borderRadius: '5px',
                    color: '#FFFFFF',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1.5px solid rgba(255, 255, 255, 0.5)',
                    fontWeight: 700,
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                    fontSize: '0.85rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {t('common.directions')}
                </a>
              )}
            </div>
          </div>
          <BeforeYouCall />
        </div>
      </div>
    </section>
  );
}
