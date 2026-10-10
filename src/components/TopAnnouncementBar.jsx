import React from 'react';
import { Phone, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TopAnnouncementBar() {
  const { t } = useLanguage();

  const items = [
    { icon: <Award size={13} style={{ color: '#fbbf24' }} />, text: t('topBar.exp') || '28+ Years of Trusted Experience' },
    { icon: <Sparkles size={13} style={{ color: '#38bdf8' }} />, text: t('topBar.delivery') || 'Online Consultation & Doorstep Medicine Delivery' },
    { icon: <Phone size={13} style={{ color: '#4ade80' }} />, text: t('topBar.directCall') || 'Direct Doctor Consultation: +91 98341 72124' },
  ];

  const fullBannerText = items.map((item, idx) => (
    <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', margin: '0 1.5rem' }}>
      {item.icon}
      <span>{item.text}</span>
      <span style={{ opacity: 0.3, marginLeft: '1.5rem' }}>•</span>
    </span>
  ));

  return (
    <aside 
      className="top-announcement-bar"
      style={{
        backgroundColor: '#0F172A',
        color: '#f8fafc',
        fontSize: '0.78rem',
        fontWeight: '500',
        padding: '7px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 101,
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        letterSpacing: '0.01em'
      }}
      aria-label="Announcement Banner"
    >
      <div className="animate-marquee" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          {fullBannerText} {fullBannerText}
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          {fullBannerText} {fullBannerText}
        </div>
      </div>
    </aside>
  );
}

