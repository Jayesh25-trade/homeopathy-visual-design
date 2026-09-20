import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import TransparentVideoTitle from './TransparentVideoTitle';

gsap.registerPlugin(ScrollTrigger);

const heroVideosData = [
  {
    id: 1,
    video: '/media/dr-somani-journey.mp4',
    poster: '/media/health-explained-poster.jpg',
    title: 'Anxiety to Confidence',
    eyebrow: 'FOUNDER & MD',
    duration: '01:28',
    cardClass: 'card-1',
  },
  {
    id: 2,
    video: '/media/health-explained.mp4',
    poster: '/media/health-explained-poster.jpg',
    title: 'Skin Allergy Healed Naturally',
    eyebrow: 'DOCTOR EXPLAINS',
    duration: '02:14',
    cardClass: 'card-2',
  },
  {
    id: 3,
    video: '/media/patient-story.mp4',
    poster: '/media/patient-story-poster.jpg',
    title: 'Stammering Overcome',
    eyebrow: 'PATIENT STORY',
    duration: '00:56',
    cardClass: 'card-3',
  },
  {
    id: 4,
    video: '/media/clinic-story.mp4',
    poster: '/media/clinic-story-poster.jpg',
    title: 'Better Sleep Brighter Days',
    eyebrow: 'PUNE & JALGAON',
    duration: '01:32',
    cardClass: 'card-4',
  },
  {
    id: 5,
    video: '/media/kids-sleeping-problem.mp4',
    poster: '/media/paediatric-care-v2.jpg',
    title: 'Skin Care Visible Results',
    eyebrow: 'PAEDIATRIC CARE',
    duration: '00:49',
    cardClass: 'card-5',
  },
  {
    id: 6,
    video: '/media/heel-pain.mp4',
    poster: '/media/heel-pain-poster.jpg',
    title: 'Chronic Migraine Relief',
    eyebrow: 'HEALTH GUIDE',
    duration: '01:19',
    cardClass: 'card-6',
  },
  {
    id: 7,
    video: '/media/eczema-care.mp4',
    poster: '/media/eczema-care-poster.jpg',
    title: 'Skin & Allergy Care',
    eyebrow: 'DERMAL CARE',
    duration: '01:15',
    cardClass: 'card-7',
  },
  {
    id: 8,
    video: '/media/migraine-care.mp4',
    poster: '/media/migraine-care-poster.jpg',
    title: 'Migraine Relief',
    eyebrow: 'CHRONIC CARE',
    duration: '01:50',
    cardClass: 'card-8',
  }
];

export default function ChapterIntro({ onOpenBooking, prefersReducedMotion }) {
  const { lang } = useLanguage();
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const desktopRailRef = useRef(null);

  const scrollRail = (dir) => {
    const rail = desktopRailRef.current;
    if (!rail) return;
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    const current = rail.scrollLeft;

    if (dir === 1) {
      if (current >= maxScroll - 25) {
        rail.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        rail.scrollBy({ left: 296, behavior: 'smooth' });
      }
    } else {
      if (current <= 25) {
        rail.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        rail.scrollBy({ left: -296, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (prefersReducedMotion) return;
    const isMobile = window.innerWidth <= 768;

    const ctx = gsap.context(() => {
      if (!isMobile) {
        // Desktop entrance animations
        gsap.set('.dsk-eyebrow', { opacity: 0, y: -16 });
        gsap.set('.dsk-title-line', { opacity: 0, x: -50 });
        gsap.set('.dsk-subtitle', { opacity: 0, y: 20 });
        gsap.set('.dsk-desc', { opacity: 0, y: 20 });
        gsap.set('.dsk-ctas', { opacity: 0, y: 20 });
        gsap.set('.dsk-rail-card', { opacity: 0, y: 30 });
        gsap.set('.dsk-bottom-bar', { opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl
          .to('.dsk-eyebrow', { opacity: 1, y: 0, duration: 0.5 }, 0.1)
          .to('.dsk-title-line', { opacity: 1, x: 0, duration: 0.65, stagger: 0.12 }, 0.25)
          .to('.dsk-subtitle', { opacity: 1, y: 0, duration: 0.5 }, 0.55)
          .to('.dsk-desc', { opacity: 1, y: 0, duration: 0.5 }, 0.68)
          .to('.dsk-ctas', { opacity: 1, y: 0, duration: 0.5 }, 0.8)
          .to('.dsk-rail-card', { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'back.out(1.3)' }, 0.9)
          .to('.dsk-bottom-bar', { opacity: 1, duration: 0.5 }, 1.3);

        // Scroll-out fade
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress;
            gsap.set('.dsk-hero-text', { y: -60 * p, opacity: 1 - p * 1.6 });
            gsap.set('.dsk-cards-section', { y: -20 * p, opacity: 1 - p * 1.2 });
          }
        });

      } else {
        // Mobile animations
        gsap.set('.speedy-eyebrow', { opacity: 0, y: -15 });
        gsap.set('.hero-video-headline-wrap', { opacity: 0, scale: 0.96, y: 20 });
        gsap.set('.hero-tagline-sub', { opacity: 0 });
        gsap.set('#subline', { opacity: 0, y: 20 });

        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
        intro
          .to('.speedy-eyebrow', { opacity: 1, y: 0, duration: 0.5 }, 0.1)
          .to('.hero-video-headline-wrap', { opacity: 1, scale: 1, y: 0, duration: 0.6 }, 0.2)
          .to('.hero-tagline-sub', { opacity: 1, duration: 0.4 }, 0.35)
          .to(cardsRef.current, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 }, 0.45)
          .to('#subline', { opacity: 1, y: 0, duration: 0.5 }, 0.7);
      }
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="beginning" ref={heroRef} className="hero" aria-label="Introduction — Dr Somani's Homoeopathy">

      {/* ══════════════════════════════════════════════ */}
      {/*  DESKTOP LAYOUT  (hidden on mobile)           */}
      {/* ══════════════════════════════════════════════ */}
      <div className="dsk-layout hide-mobile">

        {/* ── Hero Content Block ── */}
        <div className="dsk-hero-text">
          {/* Title Image — replaces starting video */}
          <div className="dsk-video-title-wrap" aria-label="Think Homoeopathy Think Somani">
            <img
              src="/media/think_somani_title_img.png"
              alt="Think Homoeopathy Think Somani"
              className="dsk-video-title dsk-title-img"
            />
          </div>

          {/* Desktop Sanskrit Tagline Watermark (Low Opacity - Lower Right Space) */}
          <div className="dsk-sanskrit-watermark" aria-hidden="true">
            <span className="dsk-sanskrit-text">चिन्तय होम्योपैथीं, चिन्तय सोमानीम्।</span>
            <svg className="dsk-sanskrit-flourish" viewBox="0 0 240 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10 C 60 18, 160 2, 215 12" stroke="#d48a3c" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M215 12 Q 223 8, 230 14 Q 222 18, 215 12 Z" fill="#d48a3c"/>
            </svg>
          </div>

          {/* Serif Subtitle */}
          <p className="dsk-subtitle">Real Stories, Real Healing</p>

          {/* Description */}
          <p className="dsk-desc">
            Personalized homoeopathic care for a healthier,<br />happier tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="dsk-ctas">
            <button
              className="dsk-book-btn"
              onClick={() => onOpenBooking?.()}
            >
              BOOK CONSULTATION →
            </button>
            <button
              className="dsk-explore-btn"
              onClick={() => document.getElementById('real-patients')?.scrollIntoView({ behavior: 'smooth' })}
            >
              EXPLORE REAL CASES
              <span className="dsk-explore-icon" aria-hidden="true">▶</span>
            </button>
          </div>
        </div>

        {/* ── Video Cards Rail ── */}
        <div className="dsk-cards-section">
          <button
            className="dsk-rail-arrow dsk-rail-arrow--left"
            onClick={() => scrollRail(-1)}
            aria-label="Previous videos"
          >
            ‹
          </button>

          <div className="dsk-cards-rail" ref={desktopRailRef}>
            {heroVideosData.map((item, i) => (
              <div
                key={item.id}
                className="dsk-rail-card"
                onClick={() => setActiveVideoIndex(i)}
                role="button"
                tabIndex={0}
                aria-label={`Play: ${item.title}`}
                onKeyDown={(e) => e.key === 'Enter' && setActiveVideoIndex(i)}
              >
                <div className="dsk-rail-thumb">
                  <video
                    src={item.video}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="dsk-rail-play" aria-hidden="true">▶</div>
                  <div className="dsk-rail-duration">{item.duration}</div>
                </div>
                <p className="dsk-rail-title">{item.title}</p>
              </div>
            ))}
          </div>

          <button
            className="dsk-rail-arrow dsk-rail-arrow--right"
            onClick={() => scrollRail(1)}
            aria-label="Next videos"
          >
            ›
          </button>
        </div>

        {/* ── Bottom Bar: Pillars + Scroll Indicator ── */}
        <div className="dsk-bottom-bar">
          <div className="dsk-pillars">
            {[
              { icon: '🌿', title: 'NATURAL', sub: 'TREATMENT' },
              { icon: '❤️', title: 'PERSONALIZED', sub: 'CARE' },
              { icon: '🪷', title: 'LONG-TERM', sub: 'WELLNESS' },
              { icon: '👥', title: 'TRUSTED BY', sub: 'THOUSANDS' },
            ].map((p, i) => (
              <div key={i} className="dsk-pillar">
                <span className="dsk-pillar-icon" aria-hidden="true">{p.icon}</span>
                <div className="dsk-pillar-text">
                  <strong>{p.title}</strong>
                  <small>{p.sub}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="dsk-scroll-cue">
            <span>SCROLL TO EXPLORE</span>
            <span className="dsk-scroll-arrow" aria-hidden="true">↓</span>
          </div>
        </div>

      </div>{/* end .dsk-layout */}


      {/* ══════════════════════════════════════════════ */}
      {/*  MOBILE LAYOUT  (hidden on desktop via CSS)   */}
      {/* ══════════════════════════════════════════════ */}
      <div className="mobile-layout-wrap">



        {/* Mobile Title Headline Image */}
        <div className="hero-video-headline-wrap" id="smallTeam">
          <img
            src="/media/think_somani_title_img.png"
            alt="Think Homoeopathy Think Somani"
            className="hero-video-headline hero-title-img"
          />
        </div>

        {/* Mobile Tagline Sub */}
        <div className="hero-tagline-sub">
          <span>चिन्तय होम्योपैथीं, चिन्तय सोमानीम्।</span>
          <span className="red-dot-mini" aria-hidden="true" />
        </div>

        {/* Mobile Stories Header */}
        <div className="mobile-stories-header">
          <div className="mobile-stories-title">
            <span>Real Stories,</span>
            <span className="italic-serif">Real Healing</span>
          </div>
          <button
            className="see-all-btn"
            onClick={() => document.getElementById('real-patients')?.scrollIntoView({ behavior: 'smooth' })}
          >
            SEE ALL &rarr;
          </button>
        </div>

        {/* Mobile Cards Row */}
        <div className="cards-row" id="cardsRow">
          {heroVideosData.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`card ${item.cardClass}`}
              onClick={() => setActiveVideoIndex(i)}
              role="button"
              tabIndex={0}
              aria-label={`Play film ${item.title}`}
            >
              <video
                src={item.video}
                poster={item.poster}
                muted
                loop
                playsInline
                preload="none"
                onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
              />
              <div className="play-sound-badge" aria-hidden="true">▶</div>
              <div className="card-duration-badge">{item.duration}</div>
              <div className="card-meta-badge">
                <span className="card-eyebrow">{item.eyebrow}</span>
                <strong className="card-title">{item.title}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Page Dots */}
        <div className="mobile-page-dots">
          <span className="dot active" /><span className="dot" /><span className="dot" /><span className="dot" />
        </div>

        {/* Mobile Feature Pillars */}
        <div className="mobile-feature-pillars">
          <div className="pillar-item">
            <span className="pillar-icon">🌿</span>
            <div className="pillar-text"><strong>NATURAL</strong><small>TREATMENT</small></div>
          </div>
          <div className="pillar-divider" />
          <div className="pillar-item">
            <span className="pillar-icon">❤️</span>
            <div className="pillar-text"><strong>PERSONALIZED</strong><small>CARE</small></div>
          </div>
          <div className="pillar-divider" />
          <div className="pillar-item">
            <span className="pillar-icon">🪷</span>
            <div className="pillar-text"><strong>LONG-TERM</strong><small>WELLNESS</small></div>
          </div>
        </div>

        {/* Mobile Subline / CTA */}
        <div className="subline" id="subline">
          <button className="arrow-pill" onClick={() => onOpenBooking?.()}>
            {lang === 'mr' ? 'सल्लामसलत बुक करा' : lang === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}
            <span className="ar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </button>
          <div className="subline-text">
            {lang === 'mr'
              ? '८ क्लिनिक चित्रपट · ५०,०००+ बरे झालेले रुग्ण · १००% नैसर्गिक'
              : lang === 'hi'
              ? '8 क्लिनिक फ़िल्में · 50,000+ ठीक हुए मरीज · 100% प्राकृतिक'
              : '8 Clinic Films · 50,000+ Patients Treated · 100% Side-effect-free'}
          </div>
        </div>

      </div>{/* end .mobile-layout-wrap */}

      {/* ── Fullscreen Video Modal (shared) ── */}
      {activeVideoIndex !== null && (
        <div
          className="hero-video-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveVideoIndex(null)}
        >
          <div className="hero-video-modal__shell" onClick={(e) => e.stopPropagation()}>
            <button
              className="hero-video-modal__close"
              onClick={() => setActiveVideoIndex(null)}
              aria-label="Close video"
            >×</button>
            <video
              src={heroVideosData[activeVideoIndex].video}
              poster={heroVideosData[activeVideoIndex].poster}
              controls autoPlay playsInline
              className="hero-video-modal__video"
            />
          </div>
        </div>
      )}
    </section>
  );
}
