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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {clinics.map((c) => (
            <div key={c.id} className="glass-card" style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: c.id === 'pune' ? '2px solid var(--emerald-accent)' : '1px solid rgba(16, 185, 129, 0.2)',
              position: 'relative'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className={c.id === 'pune' ? 'badge badge-gold' : 'badge badge-emerald'}>
                    {c.badge}
                  </span>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--emerald-accent)' }}>
                    {c.area}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                  {c.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '20px', lineHeight: '1.5' }}>
                  📍 {c.address}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--primary-dark)', fontWeight: '600' }}>
                    <Phone size={16} color="#10b981" />
                    <span>{c.phone}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    <Clock size={16} color="#10b981" />
                    <span>{c.timings}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {c.id !== 'online' ? (
                  <>
                    <a
                      href={c.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '10px 14px', fontSize: '0.88rem' }}
                    >
                      <Navigation size={14} />
                      <span>Get Directions</span>
                    </a>
                    <a
                      href={`tel:${c.phoneClean}`}
                      className="btn btn-secondary"
                      style={{ padding: '10px 14px', fontSize: '0.88rem' }}
                    >
                      <Phone size={14} />
                      <span>Call Branch</span>
                    </a>
                  </>
                ) : (
                  <button
                    onClick={() => onOpenBooking('Online Video Consultation')}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '12px' }}
                  >
                    <Globe size={16} />
                    <span>Book Online Video Consult</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
