import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Base Cases Data
const casesDataBase = [
  {
    id: 'case-01',
    cKey: 'c1',
    category: 'SKIN',
    categoryType: 'Skin',
    treatment: '8 Weeks Treatment',
    doctor: 'Dr. Kushal A Somani & Dr. Antim Somani',
    beforeImg: '/media/case1_fungal_before.jpg',
    afterImg: '/media/case1_fungal_after.jpg',
    posterImg: '/media/fungal-infection-before-after.jpg'
  },
  {
    id: 'case-02',
    cKey: 'c2',
    category: 'PSORIASIS',
    categoryType: 'Psoriasis',
    treatment: '5 Months Treatment',
    doctor: 'Dr. Antim Somani (Founder)',
    beforeImg: '/media/case2_psoriasis_before.jpg',
    afterImg: '/media/case2_psoriasis_after.jpg',
    posterImg: '/media/psoriasis-arm-before-after.jpg'
  },
  {
    id: 'case-03',
    cKey: 'c3',
    category: 'HAIR',
    categoryType: 'Hair',
    treatment: '3 Months Treatment',
    doctor: 'Dr. Kushal A Somani',
    beforeImg: '/media/case3_alopecia_before.jpg',
    afterImg: '/media/case3_alopecia_after.jpg',
    posterImg: '/media/alopecia-areata-before-after.png'
  },
  {
    id: 'case-04',
    cKey: 'c4',
    category: 'VITILIGO',
    categoryType: 'Vitiligo',
    treatment: '6 Months Treatment',
    doctor: 'Dr. Kushal A Somani & Dr. Antim Somani',
    beforeImg: '/media/case4_vitiligo_before.jpg',
    afterImg: '/media/case4_vitiligo_after.jpg',
    posterImg: '/media/vitiligo-before-after.jpg'
  },
  {
    id: 'case-05',
    cKey: 'c5',
    category: 'HAIR',
    categoryType: 'Hair',
    treatment: '4 Months Treatment',
    doctor: 'Dr. Kushal A Somani',
    beforeImg: '/media/case5_malehair_before.jpg',
    afterImg: '/media/case5_malehair_after.jpg',
    posterImg: '/media/hair-regrowth-before-after.jpg'
  },
  {
    id: 'case-06',
    cKey: 'c6',
    category: 'PSORIASIS',
    categoryType: 'Psoriasis',
    treatment: '4 Months Treatment',
    doctor: 'Dr. Kushal A Somani',
    beforeImg: '/media/case6_palmar_before.jpg',
    afterImg: '/media/case6_palmar_after.jpg',
    posterImg: '/media/palmar-psoriasis-before-after.jpg'
  }
];

export default function ClinicalTransformations({ onOpenBooking }) {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);

  const casesData = casesDataBase.map(c => ({
    ...c,
    title: t(`casesSection.${c.cKey}.title`),
    shortDescription: t(`casesSection.${c.cKey}.short`),
    fullDescription: t(`casesSection.${c.cKey}.full`),
  }));

  const filters = [
    { id: 'All', label: t('casesSection.allFilters') },
    { id: 'Skin', label: lang === 'mr' ? 'त्वचारोग' : lang === 'hi' ? 'त्वचारोग' : 'Skin' },
    { id: 'Hair', label: lang === 'mr' ? 'केस' : lang === 'hi' ? 'बाल' : 'Hair' },
    { id: 'Psoriasis', label: lang === 'mr' ? 'सोरायसिस' : lang === 'hi' ? 'सोरायसिस' : 'Psoriasis' },
    { id: 'Vitiligo', label: lang === 'mr' ? 'विटिलिगो (कोड)' : lang === 'hi' ? 'सफेद दाग' : 'Vitiligo' },
  ];

  const filteredCases = activeFilter === 'All'
    ? casesData
    : casesData.filter(c => c.categoryType.toLowerCase() === activeFilter.toLowerCase());


  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedCase]);

  // Color helper for category pills
  const getCategoryBadgeStyle = (category) => {
    switch (category) {
      case 'SKIN':
        return { background: '#F0E6D2', color: '#1B2A41', border: '1px solid #E8DFD0' };
      case 'PSORIASIS':
        return { background: '#FDF0EC', color: '#B84E34', border: '1px solid #F5D5CB' };
      case 'HAIR':
        return { background: '#F3EFEF', color: '#6B5282', border: '1px solid #E0D7E5' };
      case 'VITILIGO':
        return { background: '#EDF4F9', color: '#2B6CB0', border: '1px solid #CBDDF0' };
      default:
        return { background: '#F4F4F4', color: '#555555', border: '1px solid #E0E0E0' };
    }
  };

  return (
    <section
      id="real-patients"
      style={{
        background: '#F6F2E9',
        padding: 'clamp(36px, 5vw, 80px) 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#18231F',
        borderTop: '1px solid #DDD8CC',
        borderBottom: '1px solid #DDD8CC',
      }}
      aria-label="Real Patients Before and After Case Studies"
    >
      {/* Decorative Leaf Illustration */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '15px',
          opacity: 0.1,
          pointerEvents: 'none',
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="#1B2A41" strokeWidth="1.5">
          <path d="M10 80 Q 40 20, 80 10 Q 50 60, 10 80 Z" />
          <path d="M10 80 Q 45 45, 80 10" />
        </svg>
      </div>

      {/* Decorative Script Text (Top Right) */}
      <div
        className="mobile-hide-script"
        style={{
          position: 'absolute',
          top: '30px',
          right: 'clamp(20px, 4vw, 50px)',
          pointerEvents: 'none',
          zIndex: 1,
          textAlign: 'right',
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "'Caveat', 'Playfair Display', cursive, serif",
            fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)',
            color: '#1B2A41',
            opacity: 0.35,
            display: 'block',
            lineHeight: 1.1,
            transform: 'rotate(-4deg)',
          }}
        >
          Healing<br />People<br />Naturally
        </span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        
        {/* SECTION HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 28px auto' }}>
          
          {/* Eyebrow */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ width: '20px', height: '1px', background: '#C5964A' }}></span>
            <span
              className="mono"
              style={{
                fontSize: '0.68rem',
                color: '#C5964A',
                letterSpacing: '0.14em',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              {t('casesSection.eyebrow')}
            </span>
            <span style={{ width: '20px', height: '1px', background: '#C5964A' }}></span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-serif, "Playfair Display", Georgia, serif)',
              fontSize: 'clamp(1.8rem, 3.8vw, 3.2rem)',
              fontWeight: 500,
              color: '#18231F',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '10px',
            }}
          >
            {t('casesSection.h2')} <em style={{ fontStyle: 'italic', color: '#1B2A41', fontWeight: 400 }}>{t('casesSection.h2Em')}</em>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
              color: '#68706A',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {t('casesSection.sub')}
          </p>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div
          className="filters-scroll-track"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '32px',
            overflowX: 'auto',
            paddingBottom: '6px',
            WebkitOverflowScrolling: 'touch',
          }}
          role="tablist"
          aria-label="Filter patient transformation categories"
        >
          {filters.map(filter => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                role="tab"
                aria-selected={isActive}
                style={{
                  padding: '7px 18px',
                  borderRadius: '30px',
                  fontSize: '0.8rem',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  background: isActive ? '#1B2A41' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#18231F',
                  border: isActive ? '1px solid #1B2A41' : '1px solid #DDD8CC',
                  boxShadow: isActive ? '0 4px 12px rgba(23,63,50,0.18)' : 'none',
                  flexShrink: 0
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* MAIN CASE GRID */}
        <div
          className="cases-responsive-container"
          style={{
            marginBottom: '36px',
          }}
        >
          {filteredCases.map((item) => {
            const badgeStyle = getCategoryBadgeStyle(item.category);

            return (
              <article
                key={item.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  border: '1px solid #DDD8CC',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 6px 20px rgba(24,35,31,0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  position: 'relative',
                }}
                className="case-card-item"
              >
                {/* CARD HEADER */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  {/* Category Pill */}
                  <span
                    style={{
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      padding: '3px 10px',
                      borderRadius: '10px',
                      textTransform: 'uppercase',
                      ...badgeStyle
                    }}
                  >
                    {item.category}
                  </span>

                  {/* Treatment Duration Pill */}
                  <span
                    style={{
                      fontSize: '0.68rem',
                      color: '#4A5568',
                      background: '#F6F4EE',
                      border: '1px solid #E2E0D8',
                      padding: '3px 10px',
                      borderRadius: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ fontSize: '0.7rem', color: '#1B2A41', fontWeight: 700 }}>â€¢</span>
                    {item.treatment}
                  </span>
                </div>

                {/* BEFORE + AFTER CONTAINER */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 10',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#1A231F',
                    marginBottom: '14px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedCase(item)}
                >
                  {/* BEFORE */}
                  <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                    <img
                      src={item.beforeImg}
                      alt={`${item.title} before`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                      className="case-img"
                      loading="lazy"
                    />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        background: 'rgba(24,35,31,0.85)',
                        color: '#FFFFFF',
                        fontSize: '0.58rem',
                        fontWeight: 600,
                        padding: '2px 7px',
                        borderRadius: '10px',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {t('casesSection.before')}
                    </span>
                  </div>

                  {/* AFTER */}
                  <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderLeft: '1.5px solid #FFFFFF' }}>
                    <img
                      src={item.afterImg}
                      alt={`${item.title} after`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                      className="case-img"
                      loading="lazy"
                    />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        background: '#1B2A41',
                        color: '#FFFFFF',
                        fontSize: '0.58rem',
                        fontWeight: 600,
                        padding: '2px 7px',
                        borderRadius: '10px',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {t('casesSection.after')}
                    </span>
                  </div>

                  {/* CHEVRON */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      color: '#1B2A41',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                      border: '2px solid #F6F2E9',
                      pointerEvents: 'none',
                      zIndex: 3,
                    }}
                  >
                    â€º
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif, "Playfair Display", Georgia, serif)',
                      fontSize: '1.12rem',
                      fontWeight: 600,
                      color: '#18231F',
                      lineHeight: 1.25,
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: '#68706A',
                      lineHeight: 1.45,
                      marginBottom: '14px',
                      flex: 1,
                    }}
                  >
                    {item.shortDescription}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => setSelectedCase(item)}
                      style={{
                        background: '#F2EAE0',
                        color: '#1B2A41',
                        border: 'none',
                        padding: '7px 14px',
                        borderRadius: '18px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        transition: 'all 0.2s ease',
                      }}
                      className="view-case-btn"
                    >
                      {t('common.readMore')}
                      <span className="arrow-icon" style={{ transition: 'transform 0.2s ease', display: 'inline-block' }}>
                        â†’
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM EXPLORE MORE BUTTON */}
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <a
            href="https://maps.app.goo.gl/jthY3tH3iZJyVP9j9"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#1B2A41',
              color: '#FFFFFF',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '30px',
              fontSize: '0.88rem',
              fontWeight: 600,
              fontFamily: 'Manrope, sans-serif',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 6px 20px rgba(23,63,50,0.22)',
              transition: 'all 0.25s ease',
              textDecoration: 'none',
            }}
          >
            {t('casesSection.exploreMoreBtn')}
          </a>
        </div>
      </div>

      {/* CASE DETAIL MODAL */}
      {selectedCase && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(24, 35, 31, 0.78)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px',
          }}
          onClick={() => setSelectedCase(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#FAF8F5',
              borderRadius: '20px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
              border: '1px solid #DDD8CC',
              padding: 'clamp(18px, 3.5vw, 28px)',
              color: '#18231F',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#EAE5DB',
                border: 'none',
                color: '#18231F',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                fontSize: '1.1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close modal"
            >
              âœ•
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '16px', paddingRight: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span
                  style={{
                    fontSize: '0.64rem',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '8px',
                    textTransform: 'uppercase',
                    ...getCategoryBadgeStyle(selectedCase.category)
                  }}
                >
                  {selectedCase.category}
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: '#4A5568',
                    background: '#EAE5DB',
                    padding: '3px 8px',
                    borderRadius: '8px',
                    fontWeight: 500,
                  }}
                >
                  â€¢ {selectedCase.treatment}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif, "Playfair Display", Georgia, serif)',
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)',
                  fontWeight: 600,
                  color: '#18231F',
                  margin: 0,
                }}
              >
                {selectedCase.title}
              </h3>
            </div>

            {/* Large BEFORE & AFTER Comparison */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                borderRadius: '14px',
                overflow: 'hidden',
                background: '#1A231F',
                padding: '6px',
                marginBottom: '16px',
              }}
            >
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                <img
                  src={selectedCase.beforeImg}
                  alt="Before treatment detail"
                  style={{ width: '100%', height: '210px', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    background: 'rgba(24,35,31,0.85)',
                    color: '#FFF',
                    fontSize: '0.62rem',
                    padding: '3px 8px',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  {t('casesSection.before')}
                </span>
              </div>

              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                <img
                  src={selectedCase.afterImg}
                  alt="After treatment detail"
                  style={{ width: '100%', height: '210px', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    background: '#1B2A41',
                    color: '#FFF',
                    fontSize: '0.62rem',
                    padding: '3px 8px',
                    borderRadius: '8px',
                    fontWeight: 600,
                  }}
                >
                  {t('casesSection.after')}
                </span>
              </div>
            </div>

            {/* Description & Doctor Info */}
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '0.86rem', color: '#68706A', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                {selectedCase.fullDescription}
              </p>

              <div
                style={{
                  background: '#EAE5DB',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}
              >
                <span className="mono" style={{ fontSize: '0.72rem', color: '#18231F' }}>
                  Doctor: <strong>{selectedCase.doctor}</strong>
                </span>
                <span className="mono" style={{ fontSize: '0.7rem', color: '#1B2A41', fontWeight: 600 }}>
                  âœ“ {t('trust.safe')}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={() => setSelectedCase(null)}
                style={{
                  background: 'none',
                  border: '1px solid #DDD8CC',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  color: '#68706A',
                }}
              >
                {t('common.close')}
              </button>
              <button
                onClick={() => {
                  setSelectedCase(null);
                  onOpenBooking?.();
                }}
                style={{
                  background: '#1B2A41',
                  color: '#FFF',
                  border: 'none',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {t('nav.bookBtn')} â†’
              </button>
            </div>

          </div>
        </div>
      )}

      {/* STYLES FOR RESPONSIVE CAROUSEL & HOVER ANIMATIONS */}
      <style>{`
        /* Desktop Grid */
        .cases-responsive-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 900px) {
          .cases-responsive-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        /* Mobile Horizontal Swipe Slider - Fits cleanly on phone screens without giant vertical stacking */
        @media (max-width: 640px) {
          .mobile-hide-script {
            display: none !important;
          }
          .cases-responsive-container {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 14px !important;
            padding-bottom: 12px !important;
            -webkit-overflow-scrolling: touch !important;
          }
          .case-card-item {
            width: 86vw !important;
            max-width: 310px !important;
            flex-shrink: 0 !important;
            scroll-snap-align: center !important;
          }
          .filters-scroll-track {
            justify.content: flex-start !important;
            padding-left: 4px !important;
          }
        }

        .case-card-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(23,63,50,0.1) !important;
        }
        .case-card-item:hover .case-img {
          transform: scale(1.03);
        }
        .case-card-item:hover .view-case-btn {
          background: #1B2A41 !important;
          color: #FFFFFF !important;
        }
        .case-card-item:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
