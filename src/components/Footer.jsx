import React from 'react';
import { Leaf, Phone, Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0d3b2e 0%, #06261d 100%)',
      color: '#cbd5e1',
      padding: '70px 0 30px 0',
      borderTop: '1px solid rgba(45, 212, 191, 0.2)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #10b981 0%, #2dd4bf 100%)',
                color: '#0d3b2e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800'
              }}>
                <Leaf size={22} />
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>
                Dr. Somani's Homoeopathy
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>
              {clinicInfo.tagline}. Providing root-cause classical homeopathic healing for 27+ years across Pune, Jalgaon, and Pan-India online care.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={clinicInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '16px' }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#home" style={footerLinkStyle}>Home</a></li>
              <li><a href="#about" style={footerLinkStyle}>About Clinic</a></li>
              <li><a href="#treatments" style={footerLinkStyle}>Specialized Treatments</a></li>
              <li><a href="#quiz" style={footerLinkStyle}>1-Min Symptom Quiz</a></li>
              <li><a href="#doctors" style={footerLinkStyle}>Meet Doctors</a></li>
              <li><a href="#online" style={footerLinkStyle}>Online Video Consultation</a></li>
              <li><a href="#clinics" style={footerLinkStyle}>Clinics & Directions</a></li>
            </ul>
          </div>

          {/* Wakad Pune Branch */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '16px' }}>🏥 Wakad (Pune) Branch</h4>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '12px' }}>
              Office No. E-105, 1st Floor, One Place Wakad, Pink City Road, above Sanghvi Jewellers, Wakad, Pune – 411057
            </p>
            <div style={{ fontSize: '0.88rem', color: '#2dd4bf', fontWeight: '700' }}>
              📞 {clinicInfo.phonePune}
            </div>
          </div>

          {/* Jalgaon Branch */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '16px' }}>🏥 Jalgaon Branch</h4>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '12px' }}>
              First Floor, Chitra Chowk – JMP Market, above Agarwal Sweet Mart, Jalgaon – 425001
            </p>
            <div style={{ fontSize: '0.88rem', color: '#2dd4bf', fontWeight: '700' }}>
              📞 {clinicInfo.phoneJalgaon}
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          <div>
            © {currentYear} Dr. Somani's Homoeopathy. All rights reserved. Registered Medical Practitioners (Reg. 82170 & 40721).
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#a7f3d0' }}>
            <ShieldCheck size={14} /> Safe & Certified Classical Homoeopathy
          </div>
        </div>

      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: '#cbd5e1',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
};
