import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ChapterTimeline() {
  const { t, lang } = useLanguage();

  const chapters = [
    { 
      year: "1998", 
      title: lang === 'mr' ? 'प्रारंभ · जळगाव' : lang === 'hi' ? 'शुरुआत · जलगांव' : 'Founding Year · Jalgaon',
      body: t('timeline.t1998') 
    },
    { 
      year: "2000s", 
      title: lang === 'mr' ? 'विश्वास व विस्तार' : lang === 'hi' ? 'विश्वास और विकास' : 'Growing Trust & Cases',
      body: t('timeline.t2000s') 
    },
    { 
      year: "Wakad, Pune", 
      title: lang === 'mr' ? 'वाकड, पुणे क्लिनिक' : lang === 'hi' ? 'वाकड, पुणे क्लिनिक' : 'Expansion to Pune',
      body: t('timeline.tSecondDecade') 
    },
    { 
      year: "Second Gen", 
      title: lang === 'mr' ? 'दुसरी पिढी · डॉ. कुशल सोमाणी' : lang === 'hi' ? 'दूसरी पीढ़ी · डॉ. कुशल सोमानी' : 'Academic Depth & Gen-2',
      body: t('timeline.tGen2') 
    },
    { 
      year: "Present", 
      title: lang === 'mr' ? 'डिजिटल सेवा व भारतभर उपचार' : lang === 'hi' ? 'डिजिटल परामर्श एवं सेवा' : 'Nationwide Video Care',
      body: t('timeline.tPresent') 
    },
  ];

  return (
    <section
      id="27-years"
      className="paper-section timeline-polish"
      style={{
        backgroundColor: 'var(--bg)',
        padding: 'clamp(3.5rem, 7vw, 6rem) 0',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="27 Years — One Evolving Practice"
    >
      {/* Botanical Microscopy Organic Wave Texture Layer */}
      <div
        className="parallax-layer"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/assets/botanical_microscopy.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="timeline-polish__header" style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: 'var(--muted)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem'
          }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--muted)' }} />
            {t('timeline.label')}
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            color: 'var(--navy)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            lineHeight: 1.15
          }}>
            {t('timeline.h2')}<br />
            <em style={{ color: '#dc2626', fontStyle: 'italic' }}>{t('timeline.h2Em')}</em>
          </h2>
        </div>

        {/* Timeline Entries List */}
        <div className="timeline-polish__list" style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(220, 38, 38, 0.25)' }}>
          {chapters.map((ch, i) => (
            <article
              key={i}
              className="timeline-polish__entry"
              style={{
                position: 'relative',
                marginBottom: i === chapters.length - 1 ? '0' : '2.5rem',
                paddingLeft: '1.5rem'
              }}
            >
              {/* Timeline Red Dot Marker */}
              <div className="timeline-polish__dot" style={{
                position: 'absolute',
                top: '0.35rem',
                left: '-2.15rem',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: i === chapters.length - 1 ? '#dc2626' : '#ffffff',
                border: '3px solid #dc2626',
                boxShadow: '0 0 0 4px rgba(220, 38, 38, 0.15)'
              }} />

              {/* Milestone Card */}
              <div className="timeline-polish__card" style={{
                background: 'var(--white)',
                padding: '1.5rem 1.75rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-sm)',
                maxWidth: '820px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              >
                <div className="timeline-polish__card-head" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '0.6rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    textTransform: 'uppercase'
                  }}>
                    {ch.year}
                  </span>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    color: 'var(--navy)',
                    fontWeight: 500,
                    margin: 0
                  }}>
                    {ch.title}
                  </h3>
                </div>

                <p style={{
                  color: 'var(--muted)',
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  margin: 0
                }}>
                  {ch.body}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}


