import React, { useState, useEffect } from 'react';
import { clinic, doctors } from '../data/clinicData';

export default function ChapterIntro({ onOpenBooking, prefersReducedMotion }) {
  const kushal = doctors.find(d => d.id === 'kushal') || doctors[0];
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeadingVisible(true), prefersReducedMotion ? 0 : 600);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  return (
    <section id="beginning" className="portrait-hero" aria-label="Introduction — Dr Somani's Homoeopathy">
      <div className="portrait-hero__photo" aria-hidden="true">
        <img src={kushal.portrait} alt="" loading="eager" />
        <div className="portrait-hero__photo-wash" />
      </div>

      <div className="portrait-hero__content">
        <p className="portrait-hero__kicker">Individualised homoeopathic care · Since 1998</p>
        <div className={`ink-reveal ${headingVisible ? 'revealed' : ''}`}>
          <h1>Think Homoeopathy,<br /><em>Think Somani.</em></h1>
        </div>
        <p className="portrait-hero__statement">{clinic.statement}</p>
        <div className="portrait-hero__actions">
          <button className="btn btn--primary portrait-hero__desktop-book" onClick={() => onOpenBooking?.()} id="hero-book-btn">
            Book a Consultation <span aria-hidden="true">→</span>
          </button>
          <a
            className="btn btn--whatsapp portrait-hero__mobile-book"
            href={`${clinic.whatsapp}?text=${encodeURIComponent("Hello Dr Somani's Homoeopathy, I would like to book a consultation.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on WhatsApp <span aria-hidden="true">→</span>
          </a>
          <a href="#concerns" className="portrait-hero__link">Explore areas of care</a>
        </div>
        <div className="portrait-hero__doctor">
          <span className="portrait-hero__line" />
          <div>
            <strong>{kushal.name}</strong>
            <span>{kushal.qualifications} · Reg. {kushal.regNo}</span>
          </div>
        </div>
      </div>

      <div className="portrait-hero__ribbon" aria-hidden="true">
        <div className="portrait-hero__ticker">
          <span>Listen deeply · Care individually · Heal thoughtfully · </span>
          <span>Listen deeply · Care individually · Heal thoughtfully · </span>
        </div>
      </div>
    </section>
  );
}
