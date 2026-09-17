import React, { useState, useMemo } from 'react';
import { z } from 'zod';
import { conditions, locations } from '../data/clinicData';
import { supabase } from '../integrations/supabase/client';

const INITIAL = {
  name: '', phone: '', condition: '', branch: '',
  date: '', timePreference: '', message: '',
};

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name').max(100, 'Name is too long'),
  phone: z.string().trim().regex(/^[0-9+\s\-()]{7,20}$/, 'Please enter a valid phone number'),
  condition: z.string().trim().min(1, 'Please select a concern').max(120),
  branch: z.string().trim().min(1, 'Please select a location').max(100),
  date: z.string().max(10),
  timePreference: z.enum(['', 'Morning', 'Afternoon', 'Evening']),
  message: z.string().trim().max(1000, 'Please keep your message under 1,000 characters'),
});

function buildWAText(form) {
  const lines = [`*New Consultation Enquiry — Dr Somani's Homoeopathy*\n`];
  if (form.name)          lines.push(`*Name:* ${form.name}`);
  if (form.phone)         lines.push(`*Phone:* ${form.phone}`);
  if (form.condition)     lines.push(`*Concern:* ${form.condition}`);
  if (form.branch)        lines.push(`*Preferred Location:* ${form.branch}`);
  if (form.date)          lines.push(`*Preferred Date:* ${form.date}`);
  if (form.timePreference) lines.push(`*Preferred Time:* ${form.timePreference}`);
  if (form.message)       lines.push(`\n${form.message}`);
  return lines.join('\n');
}

export default function AppointmentForm({ isOpen, onClose }) {
  const [form, setForm]   = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [sent, setSent]   = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const waText = useMemo(() => buildWAText(form), [form]);
  const hasAnyInput = form.name || form.phone || form.condition;

  if (!isOpen) return null;

  const validate = () => {
    const result = enquirySchema.safeParse(form);
    if (result.success) return {};
    return result.error.issues.reduce((all, issue) => {
      const key = issue.path[0];
      if (typeof key === 'string' && !all[key]) all[key] = issue.message;
      return all;
    }, {});
  };

  const set = key => e => {
    setForm(f => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors(er => { const n = { ...er }; delete n[key]; return n; });
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitting(true);
    setSubmitError('');
    const parsed = enquirySchema.parse(form);
    const { error } = await supabase.from('consultation_enquiries').insert({
      name: parsed.name,
      phone: parsed.phone,
      condition: parsed.condition,
      branch: parsed.branch,
      preferred_date: parsed.date || null,
      time_preference: parsed.timePreference || null,
      message: parsed.message || null,
    });
    setSubmitting(false);
    if (error) {
      setSubmitError('We could not save your request. Please try again or contact the clinic on WhatsApp.');
      return;
    }
    setSent(true);
  };

  const Field = ({ id, label, error, children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label
        htmlFor={id}
        className="field-label"
        style={{ color: error ? 'var(--vermilion)' : 'var(--mineral-light)' }}
      >
        {label}{error && ` — ${error}`}
      </label>
      {children}
    </div>
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a consultation"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        display: 'flex', alignItems: 'flex-end',
        justifyContent: 'center',
        background: 'rgba(14,14,12,0.65)',
        backdropFilter: 'blur(8px)',
        padding: '0',
        animation: 'fadeIn 220ms ease',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '92svh',
          overflowY: 'auto',
          background: 'var(--paper-bg)',
          borderRadius: '16px 16px 0 0',
          boxShadow: '0 -12px 60px rgba(0,0,0,0.3)',
          animation: 'slideUpSheet 380ms cubic-bezier(0.22,1,0.36,1) both',
          position: 'relative',
        }}
      >
        {/* Handle bar */}
        <div style={{ width: '36px', height: '4px', background: 'rgba(14,14,12,0.18)', borderRadius: '2px', margin: '14px auto 0' }} />

        {/* Header */}
        <div style={{
          padding: 'clamp(16px,3vw,24px) clamp(18px,4vw,40px)',
          borderBottom: '1px solid rgba(14,14,12,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        }}>
          <div>
            <p className="mono" style={{ color: 'var(--mineral)', marginBottom: '5px', fontSize: '0.62rem' }}>
              CONSULTATION ENQUIRY
            </p>
            <h2 style={{
              fontFamily: 'Fraunces, serif', fontWeight: 300,
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: 'var(--ink)', lineHeight: 1.2,
            }}>
              Begin your case.
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close form"
            style={{ color: 'rgba(14,14,12,0.45)', fontSize: '1.6rem', padding: '8px 12px', minWidth: '48px', minHeight: '48px', lineHeight: 1 }}
          >×</button>
        </div>

        {!sent ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,340px),1fr))',
            gap: '0',
          }}>
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ padding: 'clamp(18px,3vw,32px) clamp(18px,4vw,40px)', display: 'flex', flexDirection: 'column', gap: '18px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <Field id="f-name" label="Full Name" error={errors.name}>
                  <input
                    id="f-name" type="text" autoComplete="name"
                    value={form.name} onChange={set('name')}
                    className="field-input" placeholder="Your name"
                    aria-required="true" aria-invalid={!!errors.name}
                  />
                </Field>
                <Field id="f-phone" label="Phone" error={errors.phone}>
                  <input
                    id="f-phone" type="tel" autoComplete="tel"
                    value={form.phone} onChange={set('phone')}
                    className="field-input" placeholder="+91 98XXX XXXXX"
                    inputMode="tel"
                    aria-required="true" aria-invalid={!!errors.phone}
                  />
                </Field>
              </div>

              <Field id="f-condition" label="Condition / Concern" error={errors.condition}>
                <select
                  id="f-condition" value={form.condition} onChange={set('condition')}
                  className="field-input" aria-required="true" aria-invalid={!!errors.condition}
                >
                  <option value="">Select a concern</option>
                  {conditions.map(c => <option key={c.id} value={c.label}>{c.label}</option>)}
                  <option value="Other">Other / Multiple</option>
                </select>
              </Field>

              <Field id="f-branch" label="Preferred Location" error={errors.branch}>
                <select
                  id="f-branch" value={form.branch} onChange={set('branch')}
                  className="field-input" aria-required="true" aria-invalid={!!errors.branch}
                >
                  <option value="">Select a location</option>
                  {locations.map(l => <option key={l.id} value={l.city}>{l.city}</option>)}
                </select>
              </Field>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <Field id="f-date" label="Preferred Date" error={null}>
                  <input
                    id="f-date" type="date" value={form.date} onChange={set('date')}
                    className="field-input"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </Field>
                <Field id="f-time" label="Preferred Time" error={null}>
                  <select id="f-time" value={form.timePreference} onChange={set('timePreference')} className="field-input">
                    <option value="">No preference</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </Field>
              </div>

              <Field id="f-msg" label="Message (optional)" error={null}>
                <textarea
                  id="f-msg" rows="3" value={form.message} onChange={set('message')}
                  className="field-input" style={{ resize: 'vertical' }}
                  placeholder="Any additional context you'd like to share"
                />
              </Field>

              {/* WhatsApp preview toggle — mobile shows this inline */}
              {hasAnyInput && (
                <button
                  type="button"
                  onClick={() => setShowPreview(v => !v)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'none', cursor: 'pointer',
                    fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--mineral)', padding: '4px 0',
                  }}
                  aria-expanded={showPreview}
                >
                  <span>{showPreview ? '▲' : '▼'}</span>
                  Preview WhatsApp message
                </button>
              )}

              {showPreview && hasAnyInput && (
                <div>
                  <p className="mono" style={{ color: 'var(--mineral)', marginBottom: '10px', fontSize: '0.62rem' }}>
                    THIS IS WHAT THE CLINIC WILL RECEIVE
                  </p>
                  <div className="wa-preview">{waText || '—'}</div>
                </div>
              )}

               <p style={{ fontSize: '0.78rem', color: 'rgba(14,14,12,0.58)', lineHeight: 1.55 }}>
                 Your request will be saved securely. The clinic will contact you to confirm the appointment. Please do not share payment details here.
              </p>

               {submitError && <p role="alert" className="form-error">{submitError}</p>}

               <button type="submit" className="btn btn--primary btn--full" disabled={submitting}>
                 {submitting ? 'Saving your request…' : 'Request Consultation →'}
              </button>
            </form>

            {/* Desktop live preview panel */}
            <div
              className="hide-mobile"
              style={{
                padding: '32px 32px 32px 0',
                borderLeft: '1px solid rgba(14,14,12,0.07)',
                paddingLeft: '32px',
                display: 'flex', flexDirection: 'column',
              }}
            >
              <p className="mono" style={{ color: 'var(--mineral)', marginBottom: '14px', fontSize: '0.62rem' }}>
                LIVE WHATSAPP PREVIEW
              </p>
              {hasAnyInput ? (
                <>
                  <div style={{
                    flex: 1,
                    background: '#d9ead3',
                    borderRadius: '12px',
                    padding: '16px',
                    minHeight: '220px',
                    position: 'relative',
                  }}>
                    <div className="wa-preview" style={{ borderRadius: '8px' }}>
                      {waText}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(14,14,12,0.4)', marginTop: '14px', lineHeight: 1.5 }}>
                    ↑ This is the exact message the clinic will receive. It updates as you type.
                  </p>
                </>
              ) : (
                <div style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(14,14,12,0.03)', borderRadius: '8px', minHeight: '200px',
                }}>
                  <p style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(14,14,12,0.3)', textAlign: 'center' }}>
                    Start filling in the form<br />to see your message here.
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={{ padding: '48px 32px', textAlign: 'center' }}>
            <p className="mono" style={{ color: 'var(--mineral)', marginBottom: '14px', fontSize: '0.62rem' }}>
               REQUEST RECEIVED
            </p>
            <h3 style={{
              fontFamily: 'Fraunces, serif', fontWeight: 300,
              fontSize: 'clamp(1.4rem,3vw,2rem)', color: 'var(--ink)', marginBottom: '12px',
            }}>
              Thank you, {form.name.split(' ')[0]}.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(14,14,12,0.6)', lineHeight: 1.65, marginBottom: '28px', maxWidth: '380px', margin: '0 auto 28px' }}>
               Your consultation request has been saved. The clinic will contact you to confirm a suitable time.
            </p>
             <a href={`https://wa.me/919834172124?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp" style={{ marginRight: '10px' }}>
               Continue on WhatsApp
             </a>
            <button onClick={onClose} className="btn btn--outline-ink" style={{ minWidth: '160px' }}>
              Close
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 620px) {
          #f-name, #f-phone { grid-column: span 1; }
        }
      `}</style>
    </div>
  );
}
