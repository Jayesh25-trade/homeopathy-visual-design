import React from 'react';
import { UserCheck, Award, Stethoscope, CheckCircle2, ArrowRight } from 'lucide-react';
import { doctors } from '../data/clinicData';

export default function Doctors({ onOpenBooking }) {
  return (
    <section id="doctors" style={{
      padding: '80px 0',
      background: '#ffffff'
    }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-eyebrow">
            <UserCheck size={16} />
            <span>Meet The Practitioners</span>
          </div>
          <h2 className="section-title">Qualified, Caring Homoeopaths</h2>
          <p className="section-subtitle">
            Registered practitioners dedicated to safe, individualized classical homeopathic healing for the whole family.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '36px',
          alignItems: 'stretch'
        }}>
          {doctors.map((dr) => (
            <div key={dr.id} className="glass-card" style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '2px solid rgba(16, 185, 129, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              
              {/* Doctor Badge */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px'
              }}>
                <span className={dr.id === 'kushal-somani' ? 'badge badge-gold' : 'badge badge-emerald'}>
                  {dr.badge}
                </span>
              </div>

              <div>
                {/* Doctor Avatar & Header */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
                  <img
                    src={dr.avatar}
                    alt={dr.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid var(--emerald-accent)',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '4px' }}>{dr.name}</h3>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--emerald-accent)', marginBottom: '4px' }}>{dr.degree}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>{dr.regNo}</div>
                    <div style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: '700', marginTop: '2px' }}>{dr.experience}</div>
                  </div>
                </div>

                {/* Doctor Bio */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', marginBottom: '24px', lineHeight: '1.6' }}>
                  {dr.bio}
                </p>

                {/* Specialties Chips */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '10px' }}>CORE SPECIALIZATION AREAS:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {dr.specialties.map((spec, i) => (
                      <span key={i} style={{
                        background: 'var(--sage-card)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        color: 'var(--primary-dark)',
                        fontSize: '0.82rem',
                        fontWeight: '600',
                        padding: '4px 12px',
                        borderRadius: '99px'
                      }}>
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Doctor Quote */}
                <blockquote style={{
                  borderLeft: '3px solid var(--emerald-accent)',
                  paddingLeft: '14px',
                  margin: '0 0 28px 0',
                  fontStyle: 'italic',
                  color: 'var(--text-muted)',
                  fontSize: '0.92rem'
                }}>
                  "{dr.quote}"
                </blockquote>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBooking()}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                <span>Book Consultation with {dr.name.split(' ')[1]}</span>
                <ArrowRight size={16} />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
