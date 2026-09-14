import React, { useState } from 'react';
import { Video, Calendar, CreditCard, Pill, ShieldCheck, MessageCircle, CheckCircle } from 'lucide-react';
import { clinicInfo, treatments } from '../data/clinicData';

export default function OnlineConsult({ onOpenBooking }) {
  const [form, setForm] = useState({
    name: '',
    city: '',
    concern: '',
    day: 'Today',
    time: 'Evening'
  });

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!form.name || !form.concern) {
      alert('Please fill in your name and select a concern.');
      return;
    }

    const text = `Hi Dr. Somani, I would like to request an *Online Video Consultation*:\n\n` +
      `👤 *Name*: ${form.name}\n` +
      `🌆 *City*: ${form.city || 'Not specified'}\n` +
      `🩺 *Concern*: ${form.concern}\n` +
      `🗓️ *Preferred Day*: ${form.day}\n` +
      `⏰ *Preferred Time*: ${form.time}\n\n` +
      `Please confirm slot availability.`;

    window.open(`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="online" style={{
      padding: '80px 0',
      background: '#ffffff'
    }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-eyebrow">
            <Video size={16} />
            <span>Pan-India Virtual Care</span>
          </div>
          <h2 className="section-title">Online Homoeopathic Consultation</h2>
          <p className="section-subtitle">
            Get the same trusted 27+ years of clinical expertise from the comfort of your home — anywhere in India or abroad.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '50px'
        }}>
          
          <div style={stepCardStyle}>
            <div style={stepNoStyle}>1</div>
            <Calendar size={28} color="#10b981" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '6px' }}>Book Your Slot</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Choose your convenient date & time window for consultation.</p>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNoStyle}>2</div>
            <CreditCard size={28} color="#10b981" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '6px' }}>Confirm & Pay</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Secure payment via GPay, PhonePe, Paytm, or UPI ID.</p>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNoStyle}>3</div>
            <Video size={28} color="#10b981" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '6px' }}>Video Consultation</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Detailed 20-30 min video consultation with Dr. Somani.</p>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNoStyle}>4</div>
            <Pill size={28} color="#10b981" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '6px' }}>Doorstep Medicines</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Medicines dispatched to your doorstep with clear dosage instructions.</p>
          </div>

        </div>

        {/* Interactive Quick Slot Panel */}
        <div className="glass-panel" style={{
          padding: '36px',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '900px',
          margin: '0 auto',
          border: '2px solid rgba(16, 185, 129, 0.2)'
        }}>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '20px', textAlign: 'center' }}>
            Request an Online Slot Immediately
          </h3>

          <form onSubmit={handleSendWhatsApp} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px'
          }}>
            <div>
              <label style={labelStyle}>Your Name *</label>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Your City</label>
              <input
                type="text"
                placeholder="e.g. Mumbai, Delhi, Bangalore"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                style={inputStyle}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Select Concern *</label>
              <select
                value={form.concern}
                onChange={(e) => setForm({ ...form, concern: e.target.value })}
                required
                style={inputStyle}
              >
                <option value="">Select a treatment specialty</option>
                {treatments.map(t => (
                  <option key={t.id} value={t.title}>{t.title}</option>
                ))}
                <option value="Other Concern">Other Health Concern</option>
              </select>
            </div>

            {/* Preferred Day Chips */}
            <div>
              <label style={labelStyle}>Preferred Day</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['Today', 'Tomorrow', 'This Week'].map(day => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setForm({ ...form, day })}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: 'var(--radius-sm)',
                      border: form.day === day ? '1.5px solid var(--emerald-accent)' : '1px solid #cbd5e1',
                      background: form.day === day ? 'var(--mint-bg)' : '#fff',
                      color: form.day === day ? 'var(--primary-dark)' : 'var(--text-muted)',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Time Chips */}
            <div>
              <label style={labelStyle}>Preferred Time</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['Morning', 'Afternoon', 'Evening'].map(time => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setForm({ ...form, time })}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: 'var(--radius-sm)',
                      border: form.time === time ? '1.5px solid var(--emerald-accent)' : '1px solid #cbd5e1',
                      background: form.time === time ? 'var(--mint-bg)' : '#fff',
                      color: form.time === time ? 'var(--primary-dark)' : 'var(--text-muted)',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
              <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', padding: '14px', fontSize: '1rem' }}>
                <MessageCircle size={20} />
                <span>Request Slot via WhatsApp</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

const stepCardStyle = {
  background: 'var(--sage-card)',
  padding: '24px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid rgba(16, 185, 129, 0.15)',
  position: 'relative',
  textAlign: 'left'
};

const stepNoStyle = {
  position: 'absolute',
  top: '16px',
  right: '16px',
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  background: 'var(--mint-bg)',
  color: 'var(--emerald-accent)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '800',
  fontSize: '0.85rem'
};

const labelStyle = {
  display: 'block',
  fontSize: '0.88rem',
  fontWeight: '700',
  color: 'var(--primary-dark)',
  marginBottom: '6px'
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid rgba(16, 185, 129, 0.25)',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-sans)',
  outline: 'none'
};
