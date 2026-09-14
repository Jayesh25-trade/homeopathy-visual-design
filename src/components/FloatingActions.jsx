import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function FloatingActions() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      zIndex: 980,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hi%20Dr.%20Somani,%20I%20want%20to%20enquire%20about%20a%20consultation.`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#25d366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        aria-label="WhatsApp Clinic"
      >
        <MessageCircle size={26} />
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${clinicInfo.phonePune.replace(/\s/g, '')}`}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981 0%, #0d3b2e 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(16, 185, 129, 0.45)',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        aria-label="Call Clinic"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
