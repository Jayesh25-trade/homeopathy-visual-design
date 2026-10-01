import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, CheckCircle, ShieldAlert, HeartHandshake, Wind, Zap, Flame, Baby, Smile } from 'lucide-react';
import { treatments } from '../data/clinicData';

export default function Treatments({ onOpenBooking }) {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={24} color="#10b981" />;
      case 'Wind': return <Wind size={24} color="#10b981" />;
      case 'Zap': return <Zap size={24} color="#10b981" />;
      case 'HeartHandshake': return <HeartHandshake size={24} color="#10b981" />;
      case 'ShieldAlert': return <ShieldAlert size={24} color="#10b981" />;
      case 'Flame': return <Flame size={24} color="#10b981" />;
      case 'Baby': return <Baby size={24} color="#10b981" />;
      case 'Smile': return <Smile size={24} color="#10b981" />;
      default: return <Sparkles size={24} color="#10b981" />;
    }
  };

  return (
    <section id="treatments" style={{
      padding: '80px 0',
      background: 'var(--sage-bg)'
    }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={16} />
            <span>Specialized Homoeopathy</span>
          </div>
          <h2 className="section-title">Root-Cause Treatment Specialties</h2>
          <p className="section-subtitle">
            Click on any condition to explore Dr. Somani's specialized classical homeopathic healing approach.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {treatments.map((t) => (
            <div
              key={t.id}
              className="glass-card"
              onClick={() => setSelectedTreatment(t)}
              style={{
                padding: '28px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1.5px solid rgba(16, 185, 129, 0.18)',
                position: 'relative'
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: 'var(--mint-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>
                    {t.emoji}
                  </div>
                  <span className="badge badge-emerald">{t.badge}</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '10px' }}>
                  {t.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px', lineHeight: '1.5' }}>
                  {t.shortDesc}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid rgba(16, 185, 129, 0.12)',
                color: 'var(--emerald-accent)',
                fontWeight: '700',
                fontSize: '0.9rem'
              }}>
                <span>Explore Care Plan</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
           IN-HOUSE AUTHENTIC PHARMACY & REMEDY PREPARATION
           ========================================================= */}
        <div style={{
          marginTop: '3.5rem',
          padding: '2.2rem',
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '0.4rem' }}>In-House Pharmacy</span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', margin: 0 }}>
                Authentic German &amp; Standardised Remedy Dispensary
              </h3>
            </div>
            <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              100% Pure · Individualised Potencies · Direct Preparation
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            
            {/* Pharmacy Photo 1: Glass Dilutions (IMG_0716.JPEG) */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
              <img 
                src="/assets/client_photos/IMG_0716.JPEG" 
                alt="Homoeopathic Glass Remedy Dilution Bottles" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.75rem 1rem', background: '#fdfbf7' }}>
                <strong style={{ fontSize: '0.88rem', color: 'var(--primary-dark)' }}>Pure Homoeopathic Dilutions</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>Sealed, high-potency remedies sourced from certified homoeopathic pharmacopoeias.</p>
              </div>
            </div>

            {/* Pharmacy Photo 2: Preparation Counter (IMG_0718.JPEG) */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
              <img 
                src="/assets/client_photos/IMG_0718.JPEG" 
                alt="Homoeopathic Medicine Preparation Counter" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.75rem 1rem', background: '#fdfbf7' }}>
                <strong style={{ fontSize: '0.88rem', color: 'var(--primary-dark)' }}>Custom Dose Preparation</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>Hand-dispensed medicated globule vials tailored specifically for each patient's case.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Treatment Detail Modal */}
        {selectedTreatment && (
          <div className="modal-overlay" onClick={() => setSelectedTreatment(null)}>
            <div
              className="glass-panel"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '650px',
                width: '100%',
                borderRadius: 'var(--radius-lg)',
                padding: '36px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTreatment(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(0,0,0,0.05)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <span style={{ fontSize: '2.5rem' }}>{selectedTreatment.emoji}</span>
                <div>
                  <span className="badge badge-emerald" style={{ marginBottom: '4px' }}>{selectedTreatment.badge}</span>
                  <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)' }}>{selectedTreatment.title}</h2>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: '1.6', marginBottom: '24px' }}>
                {selectedTreatment.fullDesc}
              </p>

              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-dark)', marginBottom: '14px' }}>
                  Conditions Covered Under This Program:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                  {selectedTreatment.conditions.map((cond, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 14px',
                      background: 'var(--sage-card)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(16, 185, 129, 0.15)',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: 'var(--primary-dark)'
                    }}>
                      <CheckCircle size={16} color="#10b981" />
                      <span>{cond}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  const cond = selectedTreatment.title;
                  setSelectedTreatment(null);
                  onOpenBooking(cond);
                }}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
              >
                <span>Book Consultation for {selectedTreatment.title}</span>
                <ArrowRight size={18} />
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
