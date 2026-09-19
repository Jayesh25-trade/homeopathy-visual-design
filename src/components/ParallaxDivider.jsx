import React, { useEffect, useRef } from 'react';

export default function ParallaxDivider() {
  const bgRef = useRef(null);

  useEffect(() => {
    let scheduledAnimationFrame = false;

    const handleScroll = () => {
      if (scheduledAnimationFrame) return;
      scheduledAnimationFrame = true;

      requestAnimationFrame(() => {
        scheduledAnimationFrame = false;
        if (bgRef.current) {
          const scrollY = window.scrollY;
          const offsetY = (scrollY * 0.12) % 80;
          bgRef.current.style.transform = `translate3d(0, ${offsetY}px, 0) scale(1.1)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      aria-label="Natural Healing Philosophy"
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(320px, 45vh, 520px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Mountain Background Parallax Layer */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/assets/endura_parallax_mountain.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0) scale(1.1)',
        }}
      />

      {/* Dark overlay for readability */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(35,66,58,0.75) 0%, rgba(35,66,58,0.65) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: '#f4f1ea',
          maxWidth: '780px',
        }}
      >
        <p className="mono" style={{ color: 'var(--amber-light)', marginBottom: '14px', letterSpacing: '0.15em' }}>
          CLINICAL PHILOSOPHY
        </p>
        <h2
          className="serif-display serif-display--md"
          style={{ color: '#ffffff', lineHeight: 1.25, marginBottom: '16px' }}
        >
          Rooted in 27+ Years of Practice.<br />
          <em style={{ color: 'var(--amber-light)', fontStyle: 'italic' }}>Inspired by Nature.</em>
        </h2>
        <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)', color: 'rgba(244,241,234,0.85)', lineHeight: 1.7 }}>
          Classical homoeopathy treats the individual as a whole — awakening the body’s innate vital force to restore true balance and lasting well-being.
        </p>
      </div>
    </section>
  );
}

