import React from 'react';
import { clinic } from '../data/clinicData';

export default function ChapterIntro({ onOpenBooking }) {
  return (
    <section
      id="treatments"
      className="clinic-intro"
      style={{
        backgroundColor: '#f7f4ed',
        backgroundImage: 'radial-gradient(#dcd5c7 0.8px, transparent 0.8px)',
        backgroundSize: '18px 18px',
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        borderTop: '1px solid #e2dad0',
        borderBottom: '1px solid #e2dad0',
        position: 'relative'
      }}
      aria-label="Specialized Treatment & About Dr Somani's Homoeopathy"
    >
      <div className="container">
        <div className="clinic-intro__card" style={{
          maxWidth: '920px',
          margin: '0 auto',
          background: '#fdfbf7',
          borderRadius: '16px',
          padding: 'clamp(1.75rem, 4vw, 3.25rem)',
          border: '1px solid #e2dad0',
          boxShadow: '0 14px 28px rgba(35, 30, 20, 0.08), 2px 3px 4px rgba(35, 30, 20, 0.05)',
          position: 'relative'
        }}>
          
          <div className="clinic-intro__meta" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: '0.78rem',
              color: '#dc2626',
              background: 'rgba(220, 38, 38, 0.08)',
              padding: '0.2rem 0.65rem',
              borderRadius: '4px',
              border: '1px solid rgba(220, 38, 38, 0.2)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              About the Clinic
            </span>
            <span style={{ fontFamily: "'Special Elite', monospace", fontSize: '0.82rem', color: '#17392e', fontWeight: 600 }}>
              28+ Years of Trusted Healthcare
            </span>
          </div>

          <h2 className="clinic-intro__title" style={{
            fontSize: 'clamp(1.85rem, 3.8vw, 3rem)',
            color: '#1c2621',
            fontFamily: "'Special Elite', monospace",
            fontWeight: 400,
            lineHeight: 1.18,
            marginBottom: '0.75rem'
          }}>
            Compassionate, root-cause healing for over two decades.
          </h2>

          <div className="clinic-intro__copy" style={{
            width: '180px',
            height: '8px',
            borderTop: '3px solid #d94838',
            borderRadius: '50%',
            marginBottom: '1.5rem',
            opacity: 0.8
          }} />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            color: '#2a3630',
            fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
            lineHeight: 1.75
          }}>
            <p>
              With over 28 years of trusted experience, Dr Somani’s Homoeopathy was founded by Dr. Antim Somani in 1998 and has grown into a family-led practice serving patients in Jalgaon, Pune and beyond. Today, the clinic brings together Dr. Antim Somani, Dr. Kushal Somani and Dr. Minal Somani, who are committed to providing personalised Homoeopathic care with an individualised approach to each patient.
            </p>

            <p>
              Over the years, the clinic has cared for patients with a wide range of acute and chronic health concerns, including allergies, migraine, digestive issues, skin disorders, hair fall, asthma, arthritis, PCOD, anxiety, kidney stones and various paediatric conditions. The doctors aim to understand each patient’s health concerns, medical history and individual needs to guide their care and follow-up.
            </p>

            <p>
              With in-clinic consultations in Jalgaon and Pune and online consultations for patients across India and internationally, including the USA, Canada and Germany, Dr Somani’s Homoeopathy continues its commitment to accessible, personalised healthcare.
            </p>

            <p style={{ fontWeight: 600, color: '#17392e' }}>
              Our approach is built on experience, individual attention and a long-standing commitment to patient care. We welcome you to connect with our team and take the next step in your healthcare journey.
            </p>
          </div>

          <div className="clinic-intro__actions" style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <button className="btn-primary" onClick={onOpenBooking}>
              Book a Consultation →
            </button>
            <a href="tel:+919834172124" className="btn-outline" style={{ fontFamily: "'Special Elite', monospace" }}>
              📞 Call: +91 98341 72124
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
