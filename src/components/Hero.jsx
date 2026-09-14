import React from 'react';
import { Calendar, HelpCircle, ShieldCheck, Sparkles, MessageCircle, Star, Award, CheckCircle2 } from 'lucide-react';
import { clinicInfo, doctors } from '../data/clinicData';

export default function Hero({ onOpenBooking }) {
  const drKushal = doctors[0];

  return (
    <section id="home" style={{
      position: 'relative',
      padding: '70px 0 60px 0',
      background: 'radial-gradient(circle at 10% 20%, rgba(45, 212, 191, 0.08) 0%, rgba(247, 250, 247, 0) 50%), radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.08) 0%, rgba(247, 250, 247, 0) 50%)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Content */}
          <div>
            <div className="section-eyebrow" style={{ marginBottom: '20px' }}>
              <span>🌸</span>
              <span>Be Safe & Sure · Trusted Care Since 1998</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.3rem, 5vw, 3.4rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: '800',
              lineHeight: '1.15',
              marginBottom: '16px',
              color: 'var(--primary-dark)'
            }}>
              27 Years of Trusted <br />
              <span className="gradient-text">Homoeopathic Care</span>
            </h1>

            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--emerald-accent)',
              fontStyle: 'italic',
              marginBottom: '16px'
            }}>
              "{clinicInfo.slogan}"
            </p>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              marginBottom: '30px',
              maxWidth: '560px'
            }}>
              Dr. Kushal A. Somani provides compassionate, root-cause classical homeopathy. We treat the individual—not just the symptoms—boosting your immune system for permanent relief.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '36px'
            }}>
              <button onClick={() => onOpenBooking()} className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                <Calendar size={20} />
                <span>Book Appointment</span>
              </button>

              <a href="#quiz" className="btn btn-secondary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                <HelpCircle size={20} />
                <span>1-Min Health Quiz</span>
              </a>

              <a
                href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hi%20Dr.%20Somani,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '14px 24px', fontSize: '1rem' }}
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Key Assurance Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(16, 185, 129, 0.15)'
            }}>
              <div style={checkBadgeStyle}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>100% Side-Effect Free</span>
              </div>
              <div style={checkBadgeStyle}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Boosts Immunity</span>
              </div>
              <div style={checkBadgeStyle}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Long-Lasting Relief</span>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Card Spotlight */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card animate-glow" style={{
              padding: '30px',
              position: 'relative',
              zIndex: 2,
              border: '2px solid rgba(16, 185, 129, 0.25)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              
              {/* Doctor Header */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={drKushal.avatar}
                    alt={drKushal.name}
                    style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid var(--emerald-accent)',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    right: '-4px',
                    background: '#f59e0b',
                    color: '#ffffff',
                    padding: '4px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Award size={14} />
                  </div>
                </div>

                <div>
                  <span className="badge badge-emerald" style={{ marginBottom: '4px' }}>Senior Consulting Homoeopath</span>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '4px', color: 'var(--primary-dark)' }}>{drKushal.name}</h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--emerald-accent)', fontWeight: '700' }}>{drKushal.degree}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{drKushal.regNo}</div>
                </div>
              </div>

              {/* Stats Grid inside card */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                padding: '16px',
                background: 'rgba(240, 253, 244, 0.7)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '20px',
                textAlign: 'center',
                border: '1px solid rgba(16, 185, 129, 0.15)'
              }}>
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary-dark)' }}>27+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>Years Exp.</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary-dark)' }}>15K+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>Patients</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                    5.0 <Star size={14} fill="#f59e0b" />
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>Rating</div>
                </div>
              </div>

              {/* Doctor Quote */}
              <p style={{
                fontSize: '0.92rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                marginBottom: '20px',
                lineHeight: '1.5'
              }}>
                "{drKushal.quote}"
              </p>

              {/* Action */}
              <button
                onClick={() => onOpenBooking()}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                Book Appointment with Dr. Somani
              </button>

            </div>

            {/* Decorative Background Glow Blob */}
            <div style={{
              position: 'absolute',
              top: '-10%',
              right: '-10%',
              width: '280px',
              height: '280px',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(247, 250, 247, 0) 70%)',
              borderRadius: '50%',
              zIndex: 1,
              pointerEvents: 'none'
            }} />
          </div>

        </div>
      </div>
    </section>
  );
}

const checkBadgeStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '0.88rem',
  fontWeight: '600',
  color: 'var(--primary-dark)',
  background: '#ffffff',
  padding: '6px 14px',
  borderRadius: '99px',
  border: '1px solid rgba(16, 185, 129, 0.2)'
};
