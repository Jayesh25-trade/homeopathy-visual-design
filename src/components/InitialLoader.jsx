import React, { useState, useEffect, useRef } from 'react';

export default function InitialLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  useEffect(() => {
    // Prevent scrolling while loading screen is active
    document.body.style.overflow = 'hidden';

    // 4 Seconds Total Duration (4000ms)
    const duration = 4000;
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Smooth fade-out after reaching 100%
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 200);

      const removeTimer = setTimeout(() => {
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }, 850);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#faf6ee',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: fadeOut ? 'none' : 'auto',
        overflow: 'hidden',
      }}
    >
      {/* Background Main Page Hero Video */}
      <div className="screen-film" aria-hidden="true" style={{ opacity: 0.95 }}>
        <img
          src="/assets/somani-garden-still.jpg"
          alt="Dr Somani Natural Healing Background"
          className="screen-poster"
        />
        <video
          ref={videoRef}
          className="screen-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/assets/somani-flowers-sky.webm" type="video/webm" />
        </video>
      </div>

      {/* Elegant Radial Wash Overlay matching main page hero */}
      <div className="screen-wash" aria-hidden="true" style={{ opacity: 0.92 }} />

      {/* Content Container Aligned Exactly with Main Page Hero */}
      <div className="screen-inner" style={{ position: 'relative', zIndex: 10 }}>
        <div className="screen-copy">
          
          {/* Logo Positioned EXACTLY matching main page hero location */}
          <div className="screen-logo" style={{ marginBottom: '1.25rem' }}>
            <img
              src="/assets/somani-logo-flower.png"
              alt="Dr Somani's Homoeopathy Emblem"
            />
          </div>

          {/* Progress Counter & Bar Container */}
          <div style={{ marginTop: '1.5rem', width: '260px', textAlign: 'center' }}>
            {/* Percentage Counter (0 - 100%) */}
            <div style={{
              fontSize: '2rem',
              fontWeight: 700,
              fontFamily: 'var(--font-serif)',
              color: '#1e2060',
              marginBottom: '0.5rem',
              letterSpacing: '0.02em'
            }}>
              {Math.floor(progress)}%
            </div>

            {/* Progress Bar Track */}
            <div style={{
              width: '100%',
              height: '6px',
              background: 'rgba(30, 32, 96, 0.12)',
              borderRadius: '9999px',
              overflow: 'hidden',
              backdropFilter: 'blur(4px)',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #dc2626 0%, #10b981 100%)',
                borderRadius: '9999px',
                transition: 'width 0.1s linear',
                boxShadow: '0 0 12px rgba(220, 38, 38, 0.5)'
              }} />
            </div>

            <p style={{
              fontSize: '0.82rem',
              color: '#475569',
              marginTop: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.04em'
            }}>
              Loading clinical care &amp; doctor perspectives...
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
