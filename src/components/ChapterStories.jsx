import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const storiesBase = [
  {
    id: 's1',
    num: '01',
    video: '/videos/video1.mp4',
    eyebrow: 'DOCTOR EXPLAINS',
    title: 'Understanding your health'
  },
  {
    id: 's2',
    num: '02',
    video: '/videos/video2.mp4',
    eyebrow: 'PATIENT STORY',
    title: "A patient's experience"
  },
  {
    id: 's3',
    num: '03',
    video: '/videos/video3.mp4',
    eyebrow: 'CARE JOURNEY',
    title: 'Inside the clinic'
  },
  {
    id: 's4',
    num: '04',
    video: '/videos/video4.mp4',
    eyebrow: 'HEALTH GUIDE',
    title: 'Heel pain explained'
  },
  {
    id: 's5',
    num: '05',
    video: '/videos/video5.mp4',
    eyebrow: 'HEALTH GUIDE',
    title: 'Eczema and skin care'
  },
  {
    id: 's6',
    num: '06',
    video: '/videos/video6.mp4',
    eyebrow: 'HEALTH GUIDE',
    title: 'Migraine and homoeopathy'
  }
];

export default function ChapterStories() {
  const { lang } = useLanguage();
  const [active, setActive] = useState(null);
  const videoRef = useRef(null);

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

  const close = () => {
    videoRef.current?.pause();
    setActive(null);
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
        
        {/* Header matching screenshot */}
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

        {/* 6 Grid Video Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '1.25rem',
        }}>
          {storiesBase.map((story, index) => (
            <article 
              key={story.id} 
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                background: '#1a1a1a',
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                aspectRatio: '9 / 15',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onClick={() => setActive(index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Video Frame Thumbnail Preview */}
              <div style={{ position: 'absolute', inset: 0 }}>
                <video 
                  src={`${story.video}#t=0.5`}
                  preload="metadata"
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.25) 50%, rgba(15, 23, 42, 0.3) 100%)'
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
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '0.05em'
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
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #d8aa5c 0%, #c3964d 100%)',
                  color: '#ffffff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(195, 150, 77, 0.5)',
                  fontSize: '1rem', paddingLeft: '3px',
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
                  fontSize: '0.65rem',
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
                  fontSize: '1rem',
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