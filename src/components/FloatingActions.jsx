import React, { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';
import { clinic } from '../data/clinicData';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 100);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className="floating-call-container"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 1400,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.85)',
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <a
          href={clinic.phoneHref || "tel:+919834172124"}
          className="floating-call-button"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1E2060 0%, #0F172A 100%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(30, 32, 96, 0.4)',
            textDecoration: 'none',
            border: '2px solid rgba(255, 255, 255, 0.25)',
            animation: 'phoneFlickerPulse 2.2s infinite ease-in-out',
            position: 'relative',
          }}
          aria-label="Call Dr Somani's Clinic"
        >
          <PhoneCall size={22} color="#FFFFFF" className="flicker-phone-icon" />
        </a>
      </div>

      <style>{`
        @keyframes phoneFlickerPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(30, 32, 96, 0.5), 0 8px 24px rgba(30, 32, 96, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 14px rgba(30, 32, 96, 0), 0 12px 28px rgba(30, 32, 96, 0.5);
            transform: scale(1.08);
          }
        }
        .flicker-phone-icon {
          animation: phoneRingWiggle 2.2s infinite ease-in-out;
        }
        @keyframes phoneRingWiggle {
          0%, 75%, 100% { transform: rotate(0deg); }
          80% { transform: rotate(14deg); }
          85% { transform: rotate(-14deg); }
          90% { transform: rotate(10deg); }
          95% { transform: rotate(-6deg); }
        }
        @media (max-width: 600px) {
          .floating-call-container {
            bottom: 82px !important;
            left: 16px !important;
          }
          .floating-call-button {
            width: 48px !important;
            height: 48px !important;
          }
        }
      `}</style>
    </>
  );
}
