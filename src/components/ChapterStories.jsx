import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const storiesBase = [
  {
    id: 'c1',
    num: '01',
    video: '/media/care_explained_video_1.mp4',
    eyebrow: 'PCOD & HORMONAL CARE',
    title: 'Talking About PCOD'
  },
  {
    id: 'c2',
    num: '02',
    video: '/media/care_explained_video_2.mp4',
    eyebrow: 'COMMUNITY & EVENTS',
    title: 'Anchoring for Cricket Auction'
  },
  {
    id: 'c3',
    num: '03',
    video: '/media/care_explained_video_3.mp4',
    eyebrow: 'STUDENT MENTORSHIP',
    title: 'Talking to Students & Motivation'
  },
  {
    id: 'c4',
    num: '04',
    video: '/media/care_explained_video_4.mp4',
    eyebrow: 'INTEGRATIVE CONFERENCES',
    title: 'Medical Conference (Naturopathy, Ayurvedic & Homoeopathy)'
  },
  {
    id: 's1',
    num: '05',
    video: '/videos/video1.mp4',
    eyebrow: 'DOCTOR EXPLAINS',
    title: 'Understanding your health'
  },
  {
    id: 's2',
    num: '06',
    video: '/videos/video2.mp4',
    eyebrow: 'PATIENT STORY',
    title: "A patient's experience"
  },
  {
    id: 's3',
    num: '07',
    video: '/videos/video3.mp4',
    eyebrow: 'CARE JOURNEY',
    title: 'Inside the clinic'
  },
  {
    id: 's4',
    num: '08',
    video: '/videos/video4.mp4',
    eyebrow: 'HEALTH GUIDE',
    title: 'Heel pain explained'
  },
  {
    id: 's5',
    num: '09',
    video: '/videos/video5.mp4',
    eyebrow: 'HEALTH GUIDE',
    title: 'Eczema and skin care'
  },
  {
    id: 's6',
    num: '10',
    video: '/videos/video6.mp4',
    eyebrow: 'HEALTH GUIDE',
    title: 'Migraine and homoeopathy'
  }
];

export default function ChapterStories() {
  const { lang } = useLanguage();
  const [active, setActive] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const sliderRef = useRef(null);

  // 10-set repeating buffer to allow smooth, glitch-free infinite scrolling in both directions
  const infiniteStories = Array.from({ length: 10 }).flatMap(() => storiesBase);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = event => event.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  // Initialize slider position to start at Video 01 in Set 3 on mount
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const singleSetWidth = container.scrollWidth / 10;
      container.scrollLeft = singleSetWidth * 3;
    }
  }, []);

  // Seamless Buffer Shift Handler (Silent Modulo Shift without Visual Jump)
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const singleSetWidth = container.scrollWidth / 10;

    // Shift 4 full sets silently when near buffer boundaries
    if (container.scrollLeft >= singleSetWidth * 7) {
      container.scrollLeft -= singleSetWidth * 4;
    } else if (container.scrollLeft <= singleSetWidth * 2) {
      container.scrollLeft += singleSetWidth * 4;
    }
  };

  const close = () => {
    videoRef.current?.pause();
    setActive(null);
  };

  // Perfect Card-Aligned Smooth Right/Left Arrow Handlers
  const handleScrollNext = () => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.querySelector('article');
    const cardStep = firstCard ? (firstCard.offsetWidth + 20) * 2 : 520;
    sliderRef.current.scrollBy({ left: cardStep, behavior: 'smooth' });
  };

  const handleScrollPrev = () => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.querySelector('article');
    const cardStep = firstCard ? (firstCard.offsetWidth + 20) * 2 : 520;
    sliderRef.current.scrollBy({ left: -cardStep, behavior: 'smooth' });
  };

  return (
    <section 
      id="stories" 
      style={{
        backgroundColor: 'var(--bg)',
        padding: 'clamp(3rem, 6vw, 5.5rem) 0',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }} 
      aria-labelledby="stories-title"
    >
      <div className="container">
        
        {/* Header matching screenshot with Arrow Navigation Controls */}
        <div style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>
              <span style={{ width: '18px', height: '1px', background: 'var(--muted)' }} />
              FROM THE CLINIC
            </div>
            
            <h2 id="stories-title" style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              color: 'var(--navy)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              lineHeight: 1.15
            }}>
              Care, explained<br />
              <em style={{ color: '#dc2626', fontStyle: 'italic' }}>in Dr Somani’s own words.</em>
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            {/* Left / Right Infinite Navigation Arrows */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <button
                type="button"
                onClick={handleScrollPrev}
                aria-label="Scroll Previous Videos"
                style={{
                  width: '46px', height: '46px', borderRadius: '50%',
                  background: '#faf6ee',
                  border: '1.5px solid rgba(220, 38, 38, 0.4)',
                  color: '#dc2626',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s ease, background 0.2s ease, color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.background = '#dc2626';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = '#faf6ee';
                  e.currentTarget.style.color = '#dc2626';
                }}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleScrollNext}
                aria-label="Scroll Next Videos"
                style={{
                  width: '46px', height: '46px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(220, 38, 38, 0.4)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                ›
              </button>
            </div>

            <a
              href="https://www.instagram.com/somanikushal/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'var(--navy)',
                textTransform: 'uppercase',
                borderBottom: '1px solid var(--navy)',
                paddingBottom: '2px',
                transition: 'color 0.2s ease, border-color 0.2s ease'
              }}
            >
              FOLLOW @SOMANIKUSHAL ↗
            </a>
          </div>
        </div>

        {/* Single-Row Horizontal Infinite Carousel */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="no-scrollbar"
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '1.25rem',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            paddingBottom: '1rem',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {infiniteStories.map((story, index) => (
            <article 
              key={`${story.id}-${index}`} 
              style={{
                flex: '0 0 clamp(210px, 22vw, 250px)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                background: '#0f172a',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                aspectRatio: '9 / 15',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease'
              }}
              onClick={() => setActive(index % storiesBase.length)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.3)';
                const vid = e.currentTarget.querySelector('video');
                if (vid) vid.play().catch(() => {});
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                const vid = e.currentTarget.querySelector('video');
                if (vid) {
                  vid.pause();
                  vid.currentTime = 0;
                }
              }}
            >
              {/* High-Performance Lightweight Video Thumbnail Preview (Plays on Hover only) */}
              <div style={{ position: 'absolute', inset: 0 }}>
                <video 
                  src={story.video}
                  preload="metadata"
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.35) 50%, rgba(15, 23, 42, 0.4) 100%)'
                }} />
              </div>

              {/* Number Badge Top Left */}
              <div style={{
                position: 'absolute',
                top: '0.85rem',
                left: '0.85rem',
                zIndex: 3,
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.95)',
                letterSpacing: '0.05em',
                background: 'rgba(0,0,0,0.5)',
                padding: '3px 8px',
                borderRadius: '6px',
                backdropFilter: 'blur(4px)'
              }}>
                {story.num}
              </div>

              {/* Center Golden Play Button */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 3
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                  color: '#ffffff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(220, 38, 38, 0.5)',
                  fontSize: '1.1rem', paddingLeft: '3px',
                  transition: 'transform 0.2s ease'
                }}>
                  ▶
                </div>
              </div>

              {/* Bottom Caption */}
              <div style={{
                position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem',
                zIndex: 3, color: '#ffffff'
              }}>
                <span style={{
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  color: '#d8aa5c',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.2rem'
                }}>
                  {story.eyebrow}
                </span>
                <strong style={{
                  fontSize: '0.98rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 400,
                  lineHeight: 1.25,
                  display: 'block',
                  color: '#ffffff'
                }}>
                  {story.title}
                </strong>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Fullscreen Video Modal Popup */}
      {active !== null && (
        <div 
          className="video-modal" 
          role="dialog" 
          aria-modal="true" 
          aria-label={storiesBase[active].title}
          onClick={close}
          style={{
            position: 'fixed', inset: 0, zIndex: 3000,
            background: 'rgba(10, 15, 26, 0.9)',
            backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '440px',
              width: '100%',
              background: '#000000',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
            }}
          >
            <button 
              onClick={close} 
              aria-label="Close video"
              style={{
                position: 'absolute', top: '1rem', right: '1rem', zIndex: 10,
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.25)', color: '#ffffff',
                border: 'none', fontSize: '1.2rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(4px)'
              }}
            >
              ✕
            </button>

            <video 
              ref={videoRef} 
              src={storiesBase[active].video} 
              controls 
              autoPlay 
              playsInline 
              style={{ width: '100%', aspectRatio: '9 / 16', objectFit: 'cover' }} 
            />

            <div style={{ padding: '1rem 1.25rem', background: '#0f172a', color: '#ffffff' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#d8aa5c', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {storiesBase[active].eyebrow}
              </span>
              <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginTop: '0.2rem', fontWeight: 400 }}>
                {storiesBase[active].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}