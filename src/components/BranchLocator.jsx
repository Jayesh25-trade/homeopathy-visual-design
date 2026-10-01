import React from 'react';
import { MapPin, Phone, Clock, Navigation, Globe, ArrowRight } from 'lucide-react';
import { clinics } from '../data/clinicData';

export default function BranchLocator({ onOpenBooking }) {
  return (
    <section id="clinics" style={{
      padding: '80px 0',
      background: '#ffffff'
    }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-eyebrow">
            <MapPin size={16} />
            <span>Clinic Locations & Contact</span>
          </div>
          <h2 className="section-title">Visit Our Clinics or Consult Online</h2>
          <p className="section-subtitle">
            Equipped clinics in Pune and Jalgaon, alongside seamless virtual consultations across India.
          </p>
        </div>

        {/* Clinic Header Acrylic Board Banner (IMG_0752.JPEG) */}
        <div style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '2rem',
          height: '160px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
          border: '1px solid rgba(16, 185, 129, 0.2)'
        }}>
          <img 
            src="/assets/client_photos/IMG_0752.JPEG" 
            alt="Dr Somani's Homoeopathy Clinic Nameplate Board" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(11, 19, 41, 0.88) 0%, rgba(11, 19, 41, 0.5) 60%, transparent 100%)',
            display: 'flex', alignItems: 'center', padding: '0 2rem'
          }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '0.4rem' }}>Be Safe &amp; Sure</span>
              <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 600, margin: 0 }}>
                Dr Somani's Homoeopathy Clinics
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.85rem', margin: '4px 0 0 0' }}>
                Wakad, Pune (E-105, One Place) · Jalgaon · Online Virtual Clinic
              </p>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {clinics.map((c) => {
            // Assign real photo for each branch card
            const branchPhoto = c.id === 'pune' 
              ? '/assets/client_photos/IMG_0751.JPEG' 
              : c.id === 'jalgaon' 
              ? '/assets/client_photos/IMG_0759.JPEG' 
              : '/assets/client_photos/IMG_0691.JPG.jpeg';

            const photoCaption = c.id === 'pune' 
              ? 'Wakad Clinic Entrance & Doorway (Office E-105)' 
              : c.id === 'jalgaon' 
              ? 'Jalgaon Main Clinic Exterior Signboard' 
              : 'Online Video Consultations with Dr. Kushal Somani';

            return (
              <div key={c.id} className="glass-card" style={{
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                border: c.id === 'pune' ? '2px solid var(--emerald-accent)' : '1px solid rgba(16, 185, 129, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px'
              }}>
                
                {/* Branch Header Photo */}
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img 
                    src={branchPhoto} 
                    alt={photoCaption} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
                  }} />
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px', right: '12px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                  }}>
                    <span className={c.id === 'pune' ? 'badge badge-gold' : 'badge badge-emerald'}>
                      {c.badge}
                    </span>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', background: 'rgba(0,0,0,0.5)', padding: '2px 8px', borderRadius: '4px', backdropFilter: 'blur(4px)' }}>
                      {c.area}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', left: '14px', right: '14px', color: '#ffffff', fontSize: '0.78rem', fontWeight: 500, opacity: 0.9 }}>
                    📸 {photoCaption}
                  </div>
                </div>

                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                    {c.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px', lineHeight: '1.45' }}>
                    📍 {c.address}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--primary-dark)', fontWeight: '600' }}>
                      <Phone size={15} color="#10b981" />
                      <span>{c.phone}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                      <Clock size={15} color="#10b981" />
                      <span>{c.timings}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ padding: '0 24px 24px 24px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {c.id !== 'online' ? (
                    <>
                      <a
                        href={c.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem' }}
                      >
                        <Navigation size={14} />
                        <span>Get Directions</span>
                      </a>
                      <a
                        href={`tel:${c.phoneClean}`}
                        className="btn btn-secondary"
                        style={{ padding: '10px 14px', fontSize: '0.85rem' }}
                      >
                        <Phone size={14} />
                        <span>Call Branch</span>
                      </a>
                    </>
                  ) : (
                    <button
                      onClick={() => onOpenBooking('Online Video Consultation')}
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '12px', fontSize: '0.9rem' }}
                    >
                      <Globe size={16} />
                      <span>Book Online Video Consult</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
