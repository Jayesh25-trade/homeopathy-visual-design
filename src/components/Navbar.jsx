import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Leaf, MapPin, MessageSquare } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #0d3b2e 0%, #10b981 100%)',
        color: '#ffffff',
        fontSize: '0.85rem',
        padding: '8px 0',
        fontWeight: '500',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              background: '#f59e0b',
              color: '#0d3b2e',
              padding: '2px 8px',
              borderRadius: '99px',
              fontSize: '0.75rem',
              fontWeight: '700'
            }}>27+ YEARS TRUST</span>
            <span>Wakad (Pune) & Jalgaon Clinics · Online Consultations Pan-India</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href={`tel:${clinicInfo.phonePune.replace(/\s/g, '')}`} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Phone size={14} /> Pune: {clinicInfo.phonePune}
            </a>
            <a href={`tel:${clinicInfo.phoneJalgaon.replace(/\s/g, '')}`} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Phone size={14} /> Jalgaon: {clinicInfo.phoneJalgaon}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 900,
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(247, 250, 247, 0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(16, 185, 129, 0.15)',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 10px 30px rgba(13, 59, 46, 0.08)' : 'none'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px'
        }}>
          {/* Logo */}
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #10b981 0%, #0d3b2e 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
            }}>
              <Leaf size={24} />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: '800',
                color: 'var(--primary-dark)',
                lineHeight: '1.1'
              }}>
                Dr. Somani's
              </div>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'var(--emerald-accent)',
                letterSpacing: '0.5px'
              }}>
                HOMOEOPATHY
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            '@media (max-width: 900px)': { display: 'none' }
          }} className="desktop-nav">
            <a href="#about" style={linkStyle}>About</a>
            <a href="#treatments" style={linkStyle}>Treatments</a>
            <a href="#quiz" style={linkStyle}>Symptom Quiz</a>
            <a href="#doctors" style={linkStyle}>Doctors</a>
            <a href="#online" style={linkStyle}>Online Consult</a>
            <a href="#clinics" style={linkStyle}>Clinics</a>
            <a href="#reviews" style={linkStyle}>Reviews</a>
          </nav>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button onClick={() => onOpenBooking()} className="btn btn-primary">
              <Calendar size={18} />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--primary-dark)',
                cursor: 'pointer',
                padding: '8px',
                display: 'none'
              }}
              className="mobile-toggle"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div style={{
            padding: '20px',
            background: '#ffffff',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>About Clinic</a>
            <a href="#treatments" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>Specialized Treatments</a>
            <a href="#quiz" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>1-Min Symptom Quiz</a>
            <a href="#doctors" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>Meet Doctors</a>
            <a href="#online" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>Online Consultation</a>
            <a href="#clinics" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>Clinic Locations</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>Patient Stories</a>
          </div>
        )}
      </header>
    </>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--text-main)',
  fontWeight: '600',
  fontSize: '0.95rem',
  transition: 'color 0.2s ease',
};

const mobileLinkStyle = {
  textDecoration: 'none',
  color: 'var(--primary-dark)',
  fontWeight: '600',
  fontSize: '1.05rem',
  padding: '8px 0',
  borderBottom: '1px solid #f1f5f9'
};
