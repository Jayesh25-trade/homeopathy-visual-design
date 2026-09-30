import React, { useState, useMemo } from 'react';
import { z } from 'zod';
import { conditions, locations } from '../data/clinicData';
import { supabase } from '../integrations/supabase/client';
import { useLanguage } from '../context/LanguageContext';

const INITIAL = {
  name: '', phone: '', condition: '', branch: '',
  date: '', timePreference: '', message: '',
};

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name').max(100, 'Name is too long'),
  phone: z.string().trim().regex(/^[0-9+\s\-()]{10,20}$/, 'Please enter a valid 10-digit mobile number'),
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

const Field = ({ id, label, error, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
    <label
      htmlFor={id}
      className="field-label"
      style={{ color: error ? 'var(--vermilion)' : 'var(--muted)' }}
    >
      {label}{error && ` — ${error}`}
    </label>
    {children}
  </div>
);

const CleanPreview = ({ form, t }) => (
  <div className="wa-preview" style={{ borderRadius: '8px', fontSize: '0.85rem', lineHeight: 1.6, color: '#18231F' }}>
    <strong style={{ color: '#1B2A41', display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>
      {t('form.title')} — Dr Somani's Homoeopathy
    </strong>
    {form.name && <div><strong style={{ color: '#1B2A41' }}>{t('form.fullName')}:</strong> {form.name}</div>}
    {form.phone && <div><strong style={{ color: '#1B2A41' }}>{t('form.phone')}:</strong> {form.phone}</div>}
    {form.condition && <div><strong style={{ color: '#1B2A41' }}>{t('form.concern')}:</strong> {form.condition}</div>}
    {form.branch && <div><strong style={{ color: '#1B2A41' }}>{t('form.location')}:</strong> {form.branch}</div>}
    {form.date && <div><strong style={{ color: '#1B2A41' }}>{t('form.preferredDate')}:</strong> {form.date}</div>}
    {form.timePreference && <div><strong style={{ color: '#1B2A41' }}>{t('form.preferredTime')}:</strong> {form.timePreference}</div>}
    {form.message && <div style={{ marginTop: '6px', fontStyle: 'italic', color: '#4A5568' }}>"{form.message}"</div>}
  </div>
);

export default function AppointmentForm({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const [form, setForm]               = useState(INITIAL);
  const [errors, setErrors]           = useState({});
  const [showPreview, setShowPreview] = useState(false);

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

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    // Silently log enquiry to database
    try {
      const parsed = enquirySchema.parse(form);
      supabase.from('consultation_enquiries').insert({
        name: parsed.name,
        phone: parsed.phone,
        condition: parsed.condition,
        branch: parsed.branch,
        preferred_date: parsed.date || null,
        time_preference: parsed.timePreference || null,
        message: parsed.message || null,
      }).then(() => {});
    } catch (_) {}

    // Open WhatsApp directly with patient's query
    const url = `https://wa.me/919834172124?text=${encodeURIComponent(waText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
              {t('form.title')}
            </p>
            <h2 style={{
              fontFamily: 'Fraunces, serif', fontWeight: 300,
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: 'var(--ink)', lineHeight: 1.2,
            }}>
              {t('form.headingForm')}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close form"
            style={{ color: 'rgba(14,14,12,0.45)', fontSize: '1.6rem', padding: '8px 12px', minWidth: '48px', minHeight: '48px', lineHeight: 1 }}
          >×</button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,340px),1fr))',
          gap: '0',
        }}>
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{ padding: 'clamp(18px,3vw,32px) clamp(18px,4vw,40px)', display: 'flex', flexDirection: 'column', gap: '18px' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <Field id="f-name" label={t('form.fullName')} error={errors.name}>
                <input
                  id="f-name" type="text" autoComplete="name"
                  value={form.name} onChange={set('name')}
                  className="field-input" placeholder={t('form.fullNamePlaceholder')}
                  aria-required="true" aria-invalid={!!errors.name}
                />
              </Field>
              <Field id="f-phone" label={t('form.phone')} error={errors.phone}>
                <input
                  id="f-phone" type="tel" autoComplete="tel"
                  value={form.phone} onChange={set('phone')}
                  className="field-input" placeholder={t('form.phonePlaceholder')}
                  inputMode="tel"
                  aria-required="true" aria-invalid={!!errors.phone}
                />
              </Field>
            </div>

            <Field id="f-condition" label={t('form.concern')} error={errors.condition}>
              <select
                id="f-condition" value={form.condition} onChange={set('condition')}
                className="field-input" aria-required="true" aria-invalid={!!errors.condition}
              >
                <option value="">{t('form.selectConcern')}</option>
                {conditions.map(c => {
                  const localizedLabel = lang === 'mr' ? t(`atlas.conditions.${c.id}.label`) : lang === 'hi' ? t(`atlas.conditions.${c.id}.label`) : c.label;
                  return <option key={c.id} value={c.label}>{localizedLabel}</option>;
                })}
                <option value="Other">{t('form.otherConcern')}</option>
              </select>
            </Field>

            <Field id="f-branch" label={t('form.location')} error={errors.branch}>
              <select
                id="f-branch" value={form.branch} onChange={set('branch')}
                className="field-input" aria-required="true" aria-invalid={!!errors.branch}
              >
                <option value="">{t('form.selectLocation')}</option>
                {locations.map(l => {
                  let cityName = l.city;
                  if (l.id === 'wakad') cityName = lang === 'mr' ? 'वाकड, पुणे क्लिनिक' : lang === 'hi' ? 'वाकड, पुणे क्लिनिक' : 'Wakad, Pune';
                  if (l.id === 'jalgaon') cityName = lang === 'mr' ? 'जळगाव क्लिनिक' : lang === 'hi' ? 'जलगांव क्लिनिक' : 'Jalgaon';
                  if (l.id === 'online') cityName = lang === 'mr' ? 'ऑनलाइन व्हिडिओ सल्ला' : lang === 'hi' ? 'ऑनलाइन वीडियो परामर्श' : 'Online Consultation';
                  return <option key={l.id} value={l.city}>{cityName}</option>;
                })}
              </select>
            </Field>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <Field id="f-date" label={t('form.preferredDate')} error={null}>
                <input
                  id="f-date" type="date" value={form.date} onChange={set('date')}
                  className="field-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </Field>
              <Field id="f-time" label={t('form.preferredTime')} error={null}>
                <select id="f-time" value={form.timePreference} onChange={set('timePreference')} className="field-input">
                  <option value="">{t('form.noPref')}</option>
                  <option value="Morning">{t('form.morning')}</option>
                  <option value="Afternoon">{t('form.afternoon')}</option>
                  <option value="Evening">{t('form.evening')}</option>
                </select>
              </Field>
            </div>

            <Field id="f-msg" label={t('form.message')} error={null}>
              <textarea
                id="f-msg" rows="3" value={form.message} onChange={set('message')}
                className="field-input" style={{ resize: 'vertical' }}
                placeholder={t('form.msgPlaceholder')}
              />
            </Field>

            {/* WhatsApp preview toggle */}
            {hasAnyInput && (
              <button
                type="button"
                onClick={() => setShowPreview(v => !v)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'none', cursor: 'pointer',
                  fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--mineral)', padding: '4px 0', border: 'none',
                }}
                aria-expanded={showPreview}
              >
                <span>{showPreview ? '▲' : '▼'}</span>
                {t('form.previewBtn')}
              </button>
            )}

            {showPreview && hasAnyInput && (
              <div>
                <p className="mono" style={{ color: 'var(--mineral)', marginBottom: '10px', fontSize: '0.62rem' }}>
                  {t('form.whatClinicReceives')}
                </p>
                <CleanPreview form={form} t={t} />
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
              <button
                type="submit"
                className="btn btn--whatsapp btn--full"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 20px',
                  borderRadius: '8px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  background: '#16A34A',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(22, 163, 74, 0.25)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>{t('form.instantWaBtn')}</span>
              </button>
            </div>
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
            <p className="mono" style={{ color: 'var(--mineral)', marginBottom: '14px', fontSize: '0.72rem' }}>
              DIRECT WHATSAPP CONSULTATION
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
                  <CleanPreview form={form} t={t} />
                </div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(14,14,12,0.4)', marginTop: '14px', lineHeight: 1.5 }}>
                  ↑ Patient details will be formatted into a direct WhatsApp message to Dr. Somani's clinic.
                </p>
              </>
            ) : (
              <div style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(14,14,12,0.03)', borderRadius: '8px', minHeight: '200px',
              }}>
                <p style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(14,14,12,0.3)', textAlign: 'center' }}>
                  Start filling in the form<br />to prepare your WhatsApp message.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 620px) {
          #f-name, #f-phone { grid-column: span 1; }
        }
      `}</style>
    </div>
  );
}
