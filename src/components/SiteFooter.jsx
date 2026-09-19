import React from 'react';
import { clinic } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export default function SiteFooter() {
  const { t, lang } = useLanguage();

  const physicalLocations = [
    {
      id: 'wakad',
      city: lang === 'mr' ? 'वाकड, पुणे क्लिनिक' : lang === 'hi' ? 'वाकड, पुणे क्लिनिक' : 'Wakad, Pune Clinic',
      address: t('common.puneAddress'),
      mapsUrl: 'https://maps.app.goo.gl/jthY3tH3iZJyVP9j9'
    },
    {
      id: 'jalgaon',
      city: lang === 'mr' ? 'जळगाव क्लिनिक' : lang === 'hi' ? 'जलगांव क्लिनिक' : 'Jalgaon Clinic',
      address: t('common.jalgaonAddress'),
      mapsUrl: 'https://maps.google.com/?q=Somani+Homoeopathy+Jalgaon'
    }
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__maps" aria-label="Clinic maps">
        {physicalLocations.map(location => (
          <article key={location.id} className="site-footer__map">
            <iframe
              title={`${location.city} map`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="site-footer__map-label">
              <div><span>{lang === 'mr' ? 'भेट द्या' : lang === 'hi' ? 'विज़िट करें' : 'Visit us'}</span><strong>{location.city}</strong></div>
              <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">{t('footer.openMaps')}</a>
            </div>
          </article>
        ))}
      </div>
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <img src={clinic.logo} alt="Dr Somani's Homoeopathy logo" width="56" height="56" />
          <div><strong>{t('nav.brand')}</strong><span>{t('nav.brandSub')}</span></div>
        </div>
        <div className="site-footer__links">
          <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={clinic.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#doctors">{t('nav.about')}</a>
          <a href="#concerns">{t('nav.concerns')}</a>
        </div>
      </div>
      <div className="site-footer__legal">
        <span>© {new Date().getFullYear()} {t('nav.brand')}. {t('footer.rights')}</span>
        <span>{t('trust.yearsSub')} · {t('trust.clinics')} · {t('trust.clinicsSub')}</span>
      </div>
    </footer>
  );
}