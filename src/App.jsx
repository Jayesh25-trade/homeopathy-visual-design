import { useState, useEffect, useCallback } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import ReadingProgress     from './components/ReadingProgress';
import SiteNav             from './components/SiteNav';
import ChapterIntro        from './components/ChapterIntro';
import ChapterAtlas        from './components/ChapterAtlas';
import ParallaxDivider     from './components/ParallaxDivider';
import ChapterTimeline     from './components/ChapterTimeline';
import SymptomEstimator    from './components/SymptomEstimator';
import ChapterDoctors      from './components/ChapterDoctors';
import ChapterStories      from './components/ChapterStories';
import ClinicalTransformations from './components/ClinicalTransformations';
import InfiniteReviews from './components/InfiniteReviews';
import ChapterConsultation from './components/ChapterConsultation';
import ChapterEnding       from './components/ChapterEnding';
import AppointmentForm     from './components/AppointmentForm';
import SiteFooter          from './components/SiteFooter';
import TrustStrip          from './components/TrustStrip';

export default function App() {
  const [formOpen,  setFormOpen]  = useState(false);
  const [isMobile,  setIsMobile]  = useState(window.matchMedia('(max-width:768px)').matches);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  // Detect mobile
  useEffect(() => {
    const mq = window.matchMedia('(max-width:768px)');
    const h = e => setIsMobile(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const h = e => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  // Scroll reveal — runs once then re-observes on theme change
  useEffect(() => {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal, .ink-reveal').forEach(el => el.classList.add('revealed'));
      return;
    }
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .ink-reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [prefersReducedMotion]);

  // Body padding to account for mobile bottom bar
  useEffect(() => {
    document.body.style.paddingBottom = isMobile ? '72px' : '0';
    return () => { document.body.style.paddingBottom = '0'; };
  }, [isMobile]);

  const openBooking  = useCallback(() => setFormOpen(true),  []);
  const closeBooking = useCallback(() => setFormOpen(false), []);

  return (
    <LanguageProvider>
      <ReadingProgress />

      <SiteNav
        onOpenBooking={openBooking}
      />

      <main id="main-content">
        <ChapterIntro
          onOpenBooking={openBooking}
          prefersReducedMotion={prefersReducedMotion}
          isMobile={isMobile}
        />
        <TrustStrip />
        <ChapterAtlas    onOpenBooking={openBooking} />
        <ParallaxDivider />
        <ChapterTimeline />
        <SymptomEstimator onOpenBooking={openBooking} />
        <ChapterDoctors  onOpenBooking={openBooking} />
        <ChapterStories />
        <ClinicalTransformations onOpenBooking={openBooking} />
        <InfiniteReviews />
        <ChapterConsultation onOpenBooking={openBooking} isMobile={isMobile} />
        <ChapterEnding   onOpenBooking={openBooking} />
      </main>

      <SiteFooter onOpenBooking={openBooking} />

      <AppointmentForm
        isOpen={formOpen}
        onClose={closeBooking}
      />
    </LanguageProvider>
  );
}
