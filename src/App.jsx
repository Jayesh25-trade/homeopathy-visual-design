import { useState, useEffect, useCallback } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import ReadingProgress     from './components/ReadingProgress';
import SiteNav             from './components/SiteNav';
import CinematicHero       from './components/CinematicHero';
import BentoHero           from './components/BentoHero';
import ChapterIntro        from './components/ChapterIntro';
import ChapterAtlas        from './components/ChapterAtlas';
import ParallaxDivider     from './components/ParallaxDivider';
import ChapterTimeline     from './components/ChapterTimeline';
import ChapterJourney      from './components/ChapterJourney';
import SymptomEstimator    from './components/SymptomEstimator';
import ChapterDoctors      from './components/ChapterDoctors';
import ChapterStories      from './components/ChapterStories';
import ClinicalTransformations from './components/ClinicalTransformations';
import InfiniteReviews     from './components/InfiniteReviews';
import ChapterConsultation from './components/ChapterConsultation';
import ChapterEnding       from './components/ChapterEnding';
import AppointmentForm     from './components/AppointmentForm';
import SiteFooter          from './components/SiteFooter';
import FloatingActions     from './components/FloatingActions';
import MobileBottomNav     from './components/MobileBottomNav';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  const openBooking  = useCallback(() => setFormOpen(true),  []);
  const closeBooking = useCallback(() => setFormOpen(false), []);

  return (
    <LanguageProvider>
      <ReadingProgress />

      {/* Header (Slides down after scrolling past cinematic hero) */}
      <SiteNav onOpenBooking={openBooking} />

      <main id="main-content">
        {/* Cinematic Somani Flow Cover Hero Page */}
        <CinematicHero onOpenBooking={openBooking} />

        {/* Bento Top Hero Section */}
        <BentoHero onOpenBooking={openBooking} />

        {/* About the Clinic */}
        <ChapterIntro onOpenBooking={openBooking} />

        {/* Area of Services */}
        <ChapterAtlas onOpenBooking={openBooking} />

        <ParallaxDivider />

        {/* Patient Stories & Real Cases */}
        <ClinicalTransformations onOpenBooking={openBooking} />
        
        {/* Verified Google Patient Reviews */}
        <InfiniteReviews />

        {/* Practice Journey Timeline */}
        <ChapterTimeline />

        {/* Care Journey — One path. Four careful steps. */}
        <ChapterJourney onOpenBooking={openBooking} />

        {/* Symptom Estimator */}
        <SymptomEstimator onOpenBooking={openBooking} />

        {/* Meet Our Doctors (Dr. Antim, Dr. Kushal, Dr. Minal) */}
        <ChapterDoctors onOpenBooking={openBooking} />

        {/* Video Stories Gallery */}
        <ChapterStories />

        {/* Online Consultations (Your Doctor, Just a Click Away) */}
        <ChapterConsultation onOpenBooking={openBooking} />

        {/* Clinics & Contact */}
        <ChapterEnding onOpenBooking={openBooking} />
      </main>

      <SiteFooter onOpenBooking={openBooking} />

      {/* Mobile App Bottom Bar */}
      <MobileBottomNav onOpenBooking={openBooking} />

      {/* Booking Modal */}
      <AppointmentForm
        isOpen={formOpen}
        onClose={closeBooking}
      />
    </LanguageProvider>
  );
}
