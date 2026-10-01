import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown, Award } from 'lucide-react';

export default function CinematicHero() {
  const screenRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const screen = screenRef.current;
    const video = videoRef.current;
    if (!screen || !video) return;

    // Explicit iOS WebKit autoplay & mute configuration
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    const attemptPlay = () => {
      if (video && video.paused) {
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {
            // Low Power Mode or iOS autoplay policy fallback
          });
        }
      }
    };

    attemptPlay();

    const handleTouchUnlock = () => {
      attemptPlay();
      window.removeEventListener('touchstart', handleTouchUnlock);
      window.removeEventListener('scroll', handleTouchUnlock);
    };

    window.addEventListener('touchstart', handleTouchUnlock, { passive: true });
    window.addEventListener('scroll', handleTouchUnlock, { passive: true });

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      if (video) video.pause();
      screen.classList.add('is-ready');
      return () => {
        window.removeEventListener('touchstart', handleTouchUnlock);
        window.removeEventListener('scroll', handleTouchUnlock);
      };
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onStart: () => screen.classList.add('is-ready'),
      });

      tl.fromTo(
        '.screen-film',
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 2.1, ease: 'power2.out' },
        0
      )
        .fromTo(
          '.screen-logo',
          { opacity: 0, scale: 0.82, filter: 'blur(12px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.4 },
          0.2
        )
        .fromTo(
          '.screen-badge',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.9 },
          0.45
        )
        .fromTo(
          '.screen-think',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.1 },
          0.7
        )
        .fromTo(
          '.screen-home span',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
          1.0
        )
        .fromTo(
          '.screen-somani span',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.16 },
          1.3
        )
        .fromTo(
          '.screen-tagline',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.9 },
          1.6
        )
        .fromTo(
          '.screen-scroll-cue',
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.9 },
          1.8
        );
    }, screen);

    return () => {
      ctx.revert();
      window.removeEventListener('touchstart', handleTouchUnlock);
      window.removeEventListener('scroll', handleTouchUnlock);
    };
  }, []);

  return (
    <section ref={screenRef} className="somani-screen" id="cinematic-hero" aria-label="Dr Somani's Homoeopathy Cinematic Intro">
      {/* Background Film & Video */}
      <div className="screen-film" aria-hidden="true">
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
          defaultMuted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          aria-hidden="true"
        >
          <source src="/assets/think_homeopathy_loop_1080p.mp4" type="video/mp4" />
          <source src="/assets/somani-flowers-sky.webm" type="video/webm" />
        </video>
      </div>

      {/* Elegant Radial Wash Overlay */}
      <div className="screen-wash" aria-hidden="true" />

      {/* Screen Content Container */}
      <div className="screen-inner">
        <div className="screen-copy">
          {/* Brand Flower Emblem Logo */}
          <div className="screen-logo">
            <img
              src="/assets/somani-logo-flower.png"
              alt="Dr Somani's Homoeopathy Emblem"
            />
          </div>

          {/* Main Centered Typography */}
          <p className="screen-think">Think</p>
          <h1 className="screen-home">
            <span>Homeopathy.</span>
          </h1>
          <p className="screen-somani">
            <span>Think</span>
            <span style={{ color: '#dc2626' }}>Somani.</span>
          </p>

          <p className="screen-tagline">
            Gentle, Root-Cause Classical Healing Across Generations
          </p>
        </div>

        {/* Scroll Cue Prompt */}
        <div className="screen-scroll-cue">
          <span>Scroll to Explore</span>
          <ChevronDown size={18} className="scroll-chevron" />
        </div>
      </div>
    </section>
  );
}
