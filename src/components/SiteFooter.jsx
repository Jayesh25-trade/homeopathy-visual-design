import React, { useState } from 'react';
import { clinic } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export default function SiteFooter({ onOpenBooking }) {
  const { t, lang } = useLanguage();
  const [activeMobileSection, setActiveMobileSection] = useState(null);

  const toggleMobileSection = (id) => {
    setActiveMobileSection((prev) => (prev === id ? null : id));
  };

  const mapLocations = [
    {
      id: 'wakad',
      city: lang === 'mr' ? 'वाकड, पुणे क्लिनिक' : lang === 'hi' ? 'वाकड, पुणे क्लिनिक' : 'Wakad, Pune Clinic',
      address: 'One Place Wakad, Office No. E-105, First Floor, Pink City Road, Wakad, Pune – 411057',
      embedUrl: 'https://maps.google.com/maps?q=One+Place+Wakad+Pink+City+Road+Pune+411057&t=&z=15&ie=UTF8&iwloc=&output=embed',
      mapsUrl: 'https://maps.app.goo.gl/jthY3tH3iZJyVP9j9'
    },
    {
      id: 'jalgaon',
      city: lang === 'mr' ? 'जळगाव क्लिनिक' : lang === 'hi' ? 'जलगांव क्लिनिक' : 'Jalgaon Clinic',
      address: 'First Floor, Chitra Chowk – JMP Market, above Agarwal Sweet Mart, Jalgaon – 425001',
      embedUrl: 'https://maps.google.com/maps?q=Chitra+Chowk+JMP+Market+Jalgaon+425001&t=&z=15&ie=UTF8&iwloc=&output=embed',
      mapsUrl: 'https://maps.google.com/?q=Somani+Homoeopathy+Jalgaon'
    }
  ];

  return (
    <footer id="site-footer" className="custom-site-footer" aria-label="Site Footer">
      
      {/* ── 1. Interactive Google Maps Section (Side-by-Side Floating Cards) ── */}
      <section className="site-footer__maps-section" aria-label="Clinic Maps">
        <div className="container">
          <div className="maps-section-header">
            <span className="mono maps-eyebrow">
              {lang === 'mr' ? 'क्लिनिक स्थाने' : lang === 'hi' ? 'क्लिनिक स्थान' : 'OUR CLINIC LOCATIONS'}
            </span>
            <h3 className="maps-section-title">
              {lang === 'mr' ? 'आमच्या क्लिनिक्सला भेट द्या' : lang === 'hi' ? 'हमारे क्लिनिक पर आएं' : 'Visit Our Clinics in Pune & Jalgaon'}
            </h3>
          </div>

          <div className="site-footer__maps">
            {mapLocations.map((loc) => (
              <article key={loc.id} className="site-footer__map-card">
                <iframe
                  title={`${loc.city} Map`}
                  src={loc.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="site-footer__map-iframe"
                />
                <div className="site-footer__map-overlay">
                  <div>
                    <span className="map-overlay-sub">
                      {lang === 'mr' ? 'भेट द्या' : lang === 'hi' ? 'विज़िट करें' : 'VISIT US'}
                    </span>
                    <strong className="map-overlay-city">{loc.city}</strong>
                  </div>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-overlay-btn"
                  >
                    Open Maps ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. DESKTOP FOOTER (System / Laptop View > 850px) ──────────────────── */}
      <div className="footer-desktop-wrapper hide-mobile">
        <div className="container footer-desktop-container">
          
          {/* Column 1: Brand & Slogan */}
          <div className="footer-col footer-col--brand">
            <div className="footer-brand-header">
              <img src="/assets/logo.png" alt="Dr Somani's Homoeopathy logo" className="footer-logo-img" />
              <div>
                <h3 className="footer-brand-title">{t('nav.brand')}</h3>
                <p className="footer-brand-tagline">THINK HOMOEOPATHY, THINK SOMANI.</p>
              </div>
            </div>
            
            <p className="footer-brand-desc">
              {lang === 'mr' 
                ? '१९९८ पासून विश्वासार्ह होमिओपॅथिक उपचार. पुणे आणि जळगावमधील कुटुंबांना नैसर्गिक आणि कायमस्वरूपी आरोग्य मिळवून देण्यासाठी वचनबद्ध.'
                : lang === 'hi'
                ? '1998 से विश्वसनीय होम्योपैथिक देखभाल। पुणे और जलगांव में परिवारों को प्राकृतिक और स्थायी स्वास्थ्य देने के लिए समर्पित।'
                : 'Trusted homoeopathic care since 1998, helping families in Pune & Jalgaon live healthier, happier lives — naturally.'}
            </p>

            {/* 3 Trust Badges */}
            <div className="footer-trust-badges">
              <div className="footer-trust-badge">
                <span className="badge-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E4B567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </span>
                <span>Natural Healing</span>
              </div>
              <div className="footer-trust-badge">
                <span className="badge-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E4B567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </span>
                <span>Personalised Care</span>
              </div>
              <div className="footer-trust-badge">
                <span className="badge-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E4B567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <span>Trusted Since 1998</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-nav-list">
              <li><a href="#beginning">Home</a></li>
              <li><a href="#doctors">About Us</a></li>
              <li><a href="#doctors">Our Doctors</a></li>
              <li><a href="#concerns">Conditions We Treat</a></li>
              <li><a href="#real-patients">Patient Stories</a></li>
              <li><a href="#consultation">Contact Us</a></li>
              <li><button onClick={() => onOpenBooking?.()} className="footer-link-btn">Book Consultation</button></li>
            </ul>
          </div>

          {/* Column 3: Our Clinics */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Clinics</h4>
            <div className="footer-clinic-item">
              <strong>Wakad, Pune Clinic</strong>
              <p className="footer-clinic-addr">One Place Wakad, E-105, Pink City Rd</p>
              <a href="https://maps.app.goo.gl/jthY3tH3iZJyVP9j9" target="_blank" rel="noopener noreferrer" className="footer-maps-link">
                View on Google Maps ↗
              </a>
            </div>
            <div className="footer-clinic-item" style={{ marginTop: '16px' }}>
              <strong>Jalgaon Clinic</strong>
              <p className="footer-clinic-addr">Chitra Chowk, JMP Market, Jalgaon</p>
              <a href="https://maps.google.com/?q=Somani+Homoeopathy+Jalgaon" target="_blank" rel="noopener noreferrer" className="footer-maps-link">
                View on Google Maps ↗
              </a>
            </div>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E4B567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <a href="tel:+919834172124">+91 98341 72124</a>
              </li>
              <li>
                <span className="contact-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#E4B567"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </span>
                <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </li>
              <li>
                <span className="contact-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E4B567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <a href="mailto:info@drsomanis.com">info@drsomanis.com</a>
              </li>
              <li className="footer-hours">
                <span className="contact-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E4B567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <div>
                  <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                  <small style={{ color: '#E4B567', fontWeight: 600 }}>Sunday: By Appointment</small>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us & Quote */}
          <div className="footer-col footer-col--follow">
            <h4 className="footer-col-title">Follow Us</h4>
            <div className="footer-social-icons">
              <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>

            <div className="footer-quote-box">
              <p className="footer-quote-text">“Healing naturally. For a better tomorrow.”</p>
              <div className="footer-script-tag">
                <em>Health Naturally Always</em>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Bar */}
        <div className="container footer-desktop-bottom">
          <div>© {new Date().getFullYear()} Dr Somani's Homoeopathy. All rights reserved.</div>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms &amp; Conditions</a>
            <span>|</span>
            <a href="#sitemap">Sitemap</a>
          </div>
          <div>Made with pride in India</div>
        </div>
      </div>

      {/* ── 3. MOBILE FOOTER (Phone / Mobile View <= 850px) ────────────────────── */}
      <div className="footer-mobile-wrapper show-mobile">
        <div className="footer-mobile-container">
          
          {/* Header Quote */}
          <div className="footer-mobile-header">
            <p className="mobile-quote-heading">Healing Naturally</p>
            <p className="mobile-quote-sub">For a Better Tomorrow</p>
            <div className="mobile-gold-divider" />
          </div>

          {/* Logo & Brand */}
          <div className="footer-mobile-brand">
            <img src="/assets/logo.png" alt="Dr Somani's Homoeopathy" className="mobile-brand-logo" />
            <h3 className="mobile-brand-title">Dr Somani's Homoeopathy</h3>
            <p className="mobile-brand-tagline">THINK HOMOEOPATHY, THINK SOMANI.</p>
          </div>

          {/* Accordion Categories */}
          <div className="mobile-accordion-group">
            
            {/* 1. Quick Links */}
            <div className="mobile-accordion-item">
              <button className="mobile-accordion-header" onClick={() => toggleMobileSection('quick-links')}>
                <div className="accordion-title-left">
                  <span className="acc-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#17392e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </span>
                  <span>Quick Links</span>
                </div>
                <span className={`acc-chevron ${activeMobileSection === 'quick-links' ? 'open' : ''}`}>∨</span>
              </button>
              {activeMobileSection === 'quick-links' && (
                <div className="mobile-accordion-body">
                  <a href="#beginning">Home</a>
                  <a href="#doctors">About Us</a>
                  <a href="#doctors">Our Doctors</a>
                  <a href="#concerns">Conditions We Treat</a>
                  <a href="#real-patients">Patient Stories</a>
                  <a href="#consultation">Contact Us</a>
                </div>
              )}
            </div>

            {/* 2. Our Clinics */}
            <div className="mobile-accordion-item">
              <button className="mobile-accordion-header" onClick={() => toggleMobileSection('our-clinics')}>
                <div className="accordion-title-left">
                  <span className="acc-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#17392e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span>Our Clinics</span>
                </div>
                <span className={`acc-chevron ${activeMobileSection === 'our-clinics' ? 'open' : ''}`}>∨</span>
              </button>
              {activeMobileSection === 'our-clinics' && (
                <div className="mobile-accordion-body">
                  <strong>Wakad, Pune Clinic</strong>
                  <p>One Place Wakad, E-105, Pink City Rd</p>
                  <a href="https://maps.app.goo.gl/jthY3tH3iZJyVP9j9" target="_blank" rel="noopener noreferrer" className="mobile-maps-btn">
                    View Wakad Map ↗
                  </a>
                  <strong style={{ marginTop: '12px' }}>Jalgaon Clinic</strong>
                  <p>Chitra Chowk, JMP Market, Jalgaon</p>
                  <a href="https://maps.google.com/?q=Somani+Homoeopathy+Jalgaon" target="_blank" rel="noopener noreferrer" className="mobile-maps-btn">
                    View Jalgaon Map ↗
                  </a>
                </div>
              )}
            </div>

            {/* 3. Get in Touch */}
            <div className="mobile-accordion-item">
              <button className="mobile-accordion-header" onClick={() => toggleMobileSection('get-in-touch')}>
                <div className="accordion-title-left">
                  <span className="acc-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#17392e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <span>Get in Touch</span>
                </div>
                <span className={`acc-chevron ${activeMobileSection === 'get-in-touch' ? 'open' : ''}`}>∨</span>
              </button>
              {activeMobileSection === 'get-in-touch' && (
                <div className="mobile-accordion-body">
                  <a href="tel:+919834172124">Phone: +91 98341 72124</a>
                  <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp Consultation</a>
                  <a href="mailto:info@drsomanis.com">info@drsomanis.com</a>
                  <p style={{ marginTop: '8px', fontSize: '0.8rem', color: '#68706A' }}>Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              )}
            </div>

            {/* 4. Follow Us */}
            <div className="mobile-accordion-item">
              <button className="mobile-accordion-header" onClick={() => toggleMobileSection('follow-us')}>
                <div className="accordion-title-left">
                  <span className="acc-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#17392e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </span>
                  <span>Follow Us</span>
                </div>
                <span className={`acc-chevron ${activeMobileSection === 'follow-us' ? 'open' : ''}`}>∨</span>
              </button>
              {activeMobileSection === 'follow-us' && (
                <div className="mobile-accordion-body">
                  <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp Channel</a>
                  <a href={clinic.instagram} target="_blank" rel="noopener noreferrer">Instagram Official</a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook Page</a>
                </div>
              )}
            </div>

          </div>

          {/* Golden CTA Button */}
          <button className="mobile-cta-gold-btn" onClick={() => onOpenBooking?.()}>
            BOOK CONSULTATION <span>›</span>
          </button>

          {/* Social Cluster */}
          <div className="mobile-social-circle-group">
            <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="mobile-social-circle" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" className="mobile-social-circle" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mobile-social-circle" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mobile-social-circle" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>

          {/* Mobile Legal Bar */}
          <div className="mobile-footer-bottom">
            <p>© {new Date().getFullYear()} Dr Somani's Homoeopathy. All rights reserved.</p>
            <div className="mobile-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span>|</span>
              <a href="#terms">Terms</a>
              <span>|</span>
              <a href="#sitemap">Sitemap</a>
            </div>
            <p className="mobile-made-in-india">Made with pride in India</p>
          </div>

        </div>
      </div>

    </footer>
  );
}