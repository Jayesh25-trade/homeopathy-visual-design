import React, { useState } from 'react';
import { Star, Quote, CheckCircle, Heart, MessageSquare } from 'lucide-react';
import { testimonials } from '../data/clinicData';

export default function Testimonials() {
  const [filterCondition, setFilterCondition] = useState('All');

  const categories = ['All', 'Vitiligo & Skin Health', 'Chronic Migraine', 'PCOD & Cycle Regularity', 'Paediatric Immunity', 'Kidney Stones', 'Acidity & IBS'];

  const filtered = filterCondition === 'All'
    ? testimonials
    : testimonials.filter(t => t.condition.toLowerCase().includes(filterCondition.toLowerCase().split(' ')[0]));

  return (
    <section id="reviews" style={{
      padding: '80px 0',
      background: 'var(--sage-bg)'
    }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-eyebrow">
            <Heart size={16} />
            <span>27 Years of Trust</span>
          </div>
          <h2 className="section-title">Patient Recovery Stories</h2>
          <p className="section-subtitle">
            Real experiences from patients across Pune, Jalgaon, and online consultations across India.
          </p>
        </div>

        {/* Filter Chips */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCondition(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '99px',
                border: filterCondition === cat ? '1.5px solid var(--emerald-accent)' : '1px solid rgba(16, 185, 129, 0.2)',
                background: filterCondition === cat ? 'var(--primary-dark)' : '#ffffff',
                color: filterCondition === cat ? '#ffffff' : 'var(--text-main)',
                fontSize: '0.88rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filtered.map((item) => (
            <div key={item.id} className="glass-card" style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              
              <div>
                {/* Header info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>{item.condition}</span>
                </div>

                <p style={{
                  fontSize: '0.96rem',
                  color: 'var(--text-main)',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontStyle: 'italic'
                }}>
                  "{item.text}"
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid rgba(16, 185, 129, 0.12)'
              }}>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--primary-dark)', fontSize: '0.95rem' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    📍 {item.location}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.78rem',
                  color: '#059669',
                  fontWeight: '700'
                }}>
                  <CheckCircle size={14} /> Verified Patient
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
