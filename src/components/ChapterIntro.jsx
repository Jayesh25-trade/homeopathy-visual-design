import React, { useState, useEffect } from 'react';
import { clinic, doctors } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function ChapterIntro({ onOpenBooking, prefersReducedMotion }) {
  const { t } = useLanguage();
  const kushal = doctors.find(d => d.id === 'kushal') || doctors[0];
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeadingVisible(true), prefersReducedMotion ? 0 : 600);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <section id="beginning" className="portrait-hero" aria-label="Introduction — Dr Somani's Homoeopathy">
      
      {/* Floating Language Switcher for top Hero header */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 10,
        }}
      >
        <LanguageSelector variant="dark" />
      </div>

      <div className="portrait-hero__photo" aria-hidden="true">
        <img src={kushal.portrait} alt="" loading="eager" />
        <div className="portrait-hero__photo-wash" />
      </div>

      <div className="portrait-hero__content">
        <p className="portrait-hero__kicker">{t('hero.kicker')}</p>
        <div className={`ink-reveal ${headingVisible ? 'revealed' : ''}`}>
          <h1>{t('hero.h1Line1')}<br /><em>{t('hero.h1Line2')}</em></h1>
        </div>
        <p className="portrait-hero__statement">{t('hero.statement')}</p>
        <div className="portrait-hero__actions">
          <button className="btn btn--primary portrait-hero__desktop-book" onClick={() => onOpenBooking?.()} id="hero-book-btn">
            {t('hero.desktopBook')}
          </button>
          <a
            className="btn btn--whatsapp portrait-hero__mobile-book"
            href={`${clinic.whatsapp}?text=${encodeURIComponent("Hello Dr Somani's Homoeopathy, I would like to book a consultation.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hero.mobileBook')}
          </a>
          <a href="#concerns" className="portrait-hero__link">{t('hero.exploreCare')}</a>
        </div>
        <div className="portrait-hero__doctor">
          <span className="portrait-hero__line" />
          <div>
            <strong>{kushal.name}</strong>
            <span>{t('hero.drKushalQual')}</span>
          </div>
        </div>
      </div>

      <div className="portrait-hero__ribbon" aria-hidden="true">
        <div className="portrait-hero__ticker">
          <span>{t('hero.ticker1')}</span>
          <span>{t('hero.ticker1')}</span>
        </div>
      </div>
    </section>
  );
}

