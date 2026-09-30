import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import TopAnnouncementBar from './TopAnnouncementBar';
import { Calendar, Menu, X, ChevronRight } from 'lucide-react';

export default function SiteNav({ onOpenBooking }) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsVisible(scrollPos >= 100);
      setScrolled(scrollPos > 180);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#cases', label: t('nav.cases') || 'Patient Stories' },
    { href: '#concerns', label: t('nav.concerns') || 'Areas of Care' },
    { href: '#treatments', label: 'Treatments' },
    { href: '#locations', label: 'Our Clinics' },
    { href: '#doctors', label: 'Our Doctors' },
    { href: '#consultation', label: t('nav.consultation') || 'Online Consult' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
      }}
    >
      {/* Top Announcement Ticker */}
      <TopAnnouncementBar />

      {/* Main Sticky Header */}
      <header
        style={{
          backgroundColor: scrolled ? 'rgba(250, 246, 238, 0.96)' : 'rgba(250, 246, 238, 0.98)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 1px 0 rgba(226, 232, 240, 0.8)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
            padding: '0 1.25rem',
            maxWidth: '1280px',
            margin: '0 auto',
            gap: '0.75rem'
          }}
        >
          {/* Brand Logo */}
          <a 
            href="#" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexShrink: 0,
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
            }}
            aria-label="Dr Somani's Homoeopathy Home"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.015)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src="/assets/somani-logo-horizontal.png" 
              alt="Dr Somani's Homoeopathy Logo" 
              style={{ 
                height: '44px', 
                width: 'auto', 
                maxWidth: '220px',
                objectFit: 'contain',
                display: 'block' 
              }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav 
            className="desktop-nav"
            aria-label="Main Navigation"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.2rem',
              background: 'rgba(248, 250, 252, 0.8)',
              padding: '4px 6px',
              borderRadius: '9999px',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              flexShrink: 1
            }}
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                style={{
                  fontSize: '0.83rem',
                  fontWeight: 600,
                  color: '#334155',
                  padding: '6px 11px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#dc2626';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#334155';
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            {/* Language Selector Dropdown */}
            <LanguageSelector />

            {/* Vertical Separator */}
            <div 
              className="desktop-only"
              style={{ 
                height: '22px', 
                width: '1px', 
                backgroundColor: 'rgba(226, 232, 240, 0.9)' 
              }} 
            />

            {/* CTA Button */}
            <button
              onClick={onOpenBooking}
              className="desktop-only"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.84rem', 
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                padding: '0.55rem 1.25rem', 
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(220, 38, 38, 0.28)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                whiteSpace: 'nowrap' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(220, 38, 38, 0.38)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(220, 38, 38, 0.28)';
              }}
            >
              <Calendar size={14} />
              Book Appointment
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Navigation"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                color: '#0F172A',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                background: '#f8fafc',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid rgba(226, 232, 240, 0.8)',
              padding: '1.1rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)'
            }}
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  textDecoration: 'none',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '10px',
                  background: '#f8fafc'
                }}
              >
                <span>{item.label}</span>
                <ChevronRight size={16} color="#94a3b8" />
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%', 
                marginTop: '0.35rem', 
                padding: '0.8rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.92rem',
                border: 'none',
                boxShadow: '0 4px 14px rgba(220, 38, 38, 0.28)'
              }}
            >
              <Calendar size={16} />
              Book Appointment →
            </button>
          </nav>
        )}
      </header>

      <style>{`
        @media (max-width: 1180px) {
          .desktop-nav, .desktop-only {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}


