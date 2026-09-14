import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, ArrowLeftRight, Check, X } from 'lucide-react';

export default function ComparisonSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #0d3b2e 0%, #064e3b 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        
        <div className="section-header" style={{ color: '#ffffff' }}>
          <div className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#2dd4bf', border: '1px solid rgba(255,255,255,0.2)' }}>
            <ArrowLeftRight size={16} />
            <span>The Somani Philosophy</span>
          </div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>Why Classical Homeopathy Works</h2>
          <p className="section-subtitle" style={{ color: '#cbd5e1' }}>
            Discover how root-cause constitutional medicine provides permanent wellness compared to quick-fix symptom suppression.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          
          {/* Card 1: Conventional Symptom Masking */}
          <div className="glass-dark" style={{
            padding: '32px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            background: 'rgba(15, 23, 42, 0.6)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.2)',
                color: '#f87171',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <X size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#f87171' }}>Symptom Suppression</h3>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Temporary Quick Fixes</div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={negItemStyle}><X size={18} color="#f87171" /> Suppresses outward symptoms without fixing internal cause.</li>
              <li style={negItemStyle}><X size={18} color="#f87171" /> High risk of relapse once medication is stopped.</li>
              <li style={negItemStyle}><X size={18} color="#f87171" /> Potential risk of side effects, organ burden, or drowsiness.</li>
              <li style={negItemStyle}><X size={18} color="#f87171" /> Can lead to lifelong pill dependency and dosage increases.</li>
            </ul>
          </div>

          {/* Card 2: Somani Classical Homeopathy */}
          <div className="glass-dark" style={{
            padding: '32px',
            borderRadius: 'var(--radius-lg)',
            border: '2px solid rgba(45, 212, 191, 0.5)',
            background: 'rgba(16, 185, 129, 0.12)',
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.25)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(45, 212, 191, 0.2)',
                color: '#2dd4bf',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Check size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#2dd4bf' }}>Somani Root-Cause Healing</h3>
                <div style={{ fontSize: '0.82rem', color: '#a7f3d0' }}>Permanent Immunity Restoration</div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={posItemStyle}><Check size={18} color="#2dd4bf" /> Identifies & remedies deep constitutional imbalance.</li>
              <li style={posItemStyle}><Check size={18} color="#2dd4bf" /> Long-lasting cure that prevents disease recurrence.</li>
              <li style={posItemStyle}><Check size={18} color="#2dd4bf" /> 100% natural, non-toxic, and zero side effects.</li>
              <li style={posItemStyle}><Check size={18} color="#2dd4bf" /> Safe for infants, pregnant mothers, and senior citizens.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

const negItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  fontSize: '0.95rem',
  color: '#cbd5e1'
};

const posItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  fontSize: '0.95rem',
  color: '#ffffff',
  fontWeight: '600'
};
