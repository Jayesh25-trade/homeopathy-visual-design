import React from 'react';
import { clinic, locations } from '../data/clinicData';

export default function SiteFooter() {
  const physicalLocations = locations.filter(location => location.mapsUrl);
  return (
    <footer className="site-footer">
      <div className="site-footer__maps" aria-label="Clinic maps">
        {physicalLocations.map(location => (
          <article key={location.id} className="site-footer__map">
            <iframe
              title={`${location.city} clinic map`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="site-footer__map-label">
              <div><span>Visit us</span><strong>{location.city}</strong></div>
              <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">Open map ↗</a>
            </div>
          </article>
        ))}
      </div>
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <img src={clinic.logo} alt="Dr Somani's Homoeopathy logo" width="56" height="56" />
          <div><strong>{clinic.name}</strong><span>Think Homoeopathy, Think Somani.</span></div>
        </div>
        <div className="site-footer__links">
          <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={clinic.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#doctors">Our doctors</a>
          <a href="#concerns">Areas of care</a>
        </div>
      </div>
      <div className="site-footer__legal">
        <span>© {new Date().getFullYear()} {clinic.name}</span>
        <span>Established 1998 · Pune · Jalgaon · Online</span>
      </div>
    </footer>
  );
}