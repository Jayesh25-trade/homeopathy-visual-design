import React, { useState, useEffect } from 'react';
import { clinic } from '../data/clinicData';

export default function FloatingActions({ onOpenBooking }) {
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
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 98,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.85)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* WhatsApp Button */}
      <a
        href={clinic.whatsapp || "https://wa.me/919834172124"}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#25d366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          textDecoration: 'none',
          fontSize: '1.5rem',
          transition: 'transform 0.25s ease',
        }}
        aria-label="WhatsApp Clinic"
      >
        💬
      </a>

      {/* Direct Call Button */}
      <a
        href={clinic.phoneHref || "tel:+919834172124"}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'var(--navy)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(20, 33, 61, 0.35)',
          textDecoration: 'none',
          fontSize: '1.3rem',
          transition: 'transform 0.25s ease',
        }}
        aria-label="Call Clinic"
      >
        📞
      </a>
    </div>
  );
}
