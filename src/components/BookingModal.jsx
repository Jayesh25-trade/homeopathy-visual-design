import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { clinicInfo, doctors, treatments } from '../data/clinicData';

export default function BookingModal({ isOpen, onClose, initialCondition = '' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    branch: 'Wakad (Pune)',
    doctor: 'Dr. Kushal A. Somani',
    condition: initialCondition || '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:30 PM)',
    notes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialCondition) {
      setForm(prev => ({ ...prev, condition: initialCondition }));
    }
  }, [initialCondition]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.condition) {
      alert('Please fill in your Name, Phone Number, and Condition.');
      return;
    }

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback
    }

    setIsSuccess(true);

    const whatsappMessage = `*NEW APPOINTMENT ENQUIRY*\n` +
      `--------------------------------\n` +
      `👤 *Patient Name*: ${form.name}\n` +
      `📞 *Phone*: ${form.phone}\n` +
      `🏥 *Branch*: ${form.branch}\n` +
      `👨‍⚕️ *Doctor*: ${form.doctor}\n` +
      `🩺 *Condition*: ${form.condition}\n` +
      `🗓️ *Preferred Date*: ${form.preferredDate || 'Earliest Available'}\n` +
      `⏰ *Preferred Time*: ${form.preferredTime}\n` +
      (form.notes ? `📝 *Notes*: ${form.notes}\n` : '') +
      `--------------------------------\n` +
      `Please confirm slot availability.`;

    const cleanPhone = form.branch.includes('Jalgaon') ? '919270278668' : clinicInfo.whatsappNumber;
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappMessage)}`;
    
    setTimeout(() => {
      window.open(url, '_blank');
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleResetAndClose}>
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
        <button
          onClick={handleResetAndClose}
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

        {!isSuccess ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="badge badge-emerald">Instant Booking</span>
              <Sparkles size={16} color="#10b981" />
            </div>

            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '6px' }}>
              Book Your Consultation
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Select your clinic branch, preferred doctor, and time slot.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Branch Picker */}
              <div>
                <label style={labelStyle}>1. Select Consultation Mode / Branch *</label>
                <select
                  value={form.branch}
                  onChange={(e) => setForm({ ...form, branch: e.target.value })}
                  style={inputStyle}
                  required
                >
                  <option value="Wakad (Pune)">🏥 Pune — Wakad Clinic (One Place Wakad)</option>
                  <option value="Jalgaon Clinic">🏥 Jalgaon Clinic (JMP Market)</option>
                  <option value="Online Video Consult">🌐 Online Video Consultation (Pan India)</option>
                </select>
              </div>

              {/* Doctor Picker */}
              <div>
                <label style={labelStyle}>2. Preferred Homoeopath</label>
                <select
                  value={form.doctor}
                  onChange={(e) => setForm({ ...form, doctor: e.target.value })}
                  style={inputStyle}
                >
                  <option value="Dr. Kushal A. Somani">Dr. Kushal A. Somani (M.D. Hom · 27+ Yrs Exp)</option>
                  <option value="Dr. Antim Somani">Dr. Antim Somani (B.H.M.S)</option>
                  <option value="Any Available Practitioner">First Available Practitioner</option>
                </select>
              </div>

              {/* Condition */}
              <div>
                <label style={labelStyle}>3. Health Concern / Condition *</label>
                <select
                  value={form.condition}
                  onChange={(e) => setForm({ ...form, condition: e.target.value })}
                  style={inputStyle}
                  required
                >
                  <option value="">Select condition</option>
                  {treatments.map(t => (
                    <option key={t.id} value={t.title}>{t.title}</option>
                  ))}
                  <option value="Other Health Issue">Other Health Issue</option>
                </select>
              </div>

              {/* Patient Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Patient's Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={labelStyle}>Preferred Date</label>
                  <input
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Preferred Time Slot</label>
                  <select
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="Morning (10:00 AM - 1:30 PM)">Morning (10:00 AM - 1:30 PM)</option>
                    <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label style={labelStyle}>Brief Symptoms / Notes (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="Describe your symptoms briefly..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '14px', fontSize: '1rem', marginTop: '10px' }}
              >
                <MessageSquare size={18} />
                <span>Confirm & Send Request via WhatsApp</span>
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #0d3b2e 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              boxShadow: 'var(--shadow-glow)'
            }}>
              <CheckCircle size={36} />
            </div>

            <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '10px' }}>
              Enquiry Sent Successfully!
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1.02rem' }}>
              Opening your pre-filled WhatsApp message to <strong>Dr. Somani's Clinic</strong>. Our front desk will confirm your exact slot within 15 minutes!
            </p>

            <button
              onClick={handleResetAndClose}
              className="btn btn-secondary"
              style={{ padding: '12px 28px' }}
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.86rem',
  fontWeight: '700',
  color: 'var(--primary-dark)',
  marginBottom: '6px'
};

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid rgba(16, 185, 129, 0.25)',
  fontSize: '0.92rem',
  fontFamily: 'var(--font-sans)',
  outline: 'none'
};
