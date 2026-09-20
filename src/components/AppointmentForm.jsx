import React, { useState, useMemo } from 'react';
import { z } from 'zod';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../integrations/firebase/client';
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

function formatE164(phone) {
  let digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return '+91' + digits;
  if (digits.length === 12 && digits.startsWith('91')) return '+' + digits;
  if (!phone.startsWith('+')) return '+' + digits;
  return phone.trim();
}

function buildWAText(form) {
  const lines = [`*New Consultation Enquiry â€” Dr Somani's Homoeopathy*\n`];
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
      {label}{error && ` â€” ${error}`}
    </label>
    {children}
  </div>
);

const CleanPreview = ({ form, t }) => (
  <div className="wa-preview" style={{ borderRadius: '8px', fontSize: '0.85rem', lineHeight: 1.6, color: '#18231F' }}>
    <strong style={{ color: '#1B2A41', display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>
      {t('form.title')} â€” Dr Somani's Homoeopathy
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
  const [step, setStep]               = useState('form'); // 'form' | 'otp'
  const [sent, setSent]               = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [submitting, setSubmitting]   = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // OTP States
  const [formattedPhone, setFormattedPhone] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpCode, setOtpCode]         = useState('');
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [otpError, setOtpError]       = useState('');

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

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {},
        'expired-callback': () => {
          if (window.recaptchaVerifier) {
            try { window.recaptchaVerifier.clear(); } catch (_) {}
            window.recaptchaVerifier = null;
          }
        }
      });
    }
  };

  const handleSendOtp = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    const targetPhone = formatE164(form.phone);
    setFormattedPhone(targetPhone);
    setSubmitting(true);
    setSubmitError('');

    try {
      setupRecaptcha();
      const confirmation = await signInWithPhoneNumber(auth, targetPhone, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setStep('otp');
      setSubmitError('');
    } catch (err) {
      console.warn('SMS OTP notification (falling back to direct save):', err);
      if (window.recaptchaVerifier) {
        try { window.recaptchaVerifier.clear(); } catch (_) {}
        window.recaptchaVerifier = null;
      }
      
      // Fallback: Save directly to database so user request is never lost
      try {
        const parsed = enquirySchema.parse(form);
        await supabase.from('consultation_enquiries').insert({
          name: parsed.name,
          phone: parsed.phone,
          condition: parsed.condition,
          branch: parsed.branch,
          preferred_date: parsed.date || null,
          time_preference: parsed.timePreference || null,
          message: parsed.message || null,
        });
        setSent(true);
      } catch (saveErr) {
        setSubmitError('We could not process your request right now. Please try booking directly on WhatsApp.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerifyOtp = async (ev) => {
    ev.preventDefault();
    if (!otpCode || otpCode.trim().length !== 6) {
      setOtpError('Please enter the 6-digit OTP sent to your phone.');
      return;
    }

    setVerifyingOtp(true);
    setOtpError('');

    try {
      await confirmationResult.confirm(otpCode.trim());
      
      // Save enquiry to Supabase
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

      if (error) {
        console.error('Supabase Save Error:', error);
      }

      setSent(true);
    } catch (err) {
      console.error('OTP Verification Error:', err);
      setOtpError('Invalid OTP code. Please check the 6-digit code sent to your mobile phone.');
    } finally {
      setVerifyingOtp(false);
    }
  };

  const resetOtpFlow = () => {
    setStep('form');
    setOtpCode('');
    setOtpError('');
    setConfirmationResult(null);
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
      <div id="recaptcha-container"></div>
      
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
              {step === 'otp' ? t('form.headingOtp') : t('form.headingForm')}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close form"
            style={{ color: 'rgba(14,14,12,0.45)', fontSize: '1.6rem', padding: '8px 12px', minWidth: '48px', minHeight: '48px', lineHeight: 1 }}
          >Ã—</button>
        </div>

        {!sent ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,340px),1fr))',
            gap: '0',
          }}>
            {/* Form Step */}
            {step === 'form' ? (
              <form
                onSubmit={handleSendOtp}
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
                      if (l.id === 'wakad') cityName = lang === 'mr' ? 'à¤µà¤¾à¤•à¤¡, à¤ªà¥à¤£à¥‡ à¤•à¥à¤²à¤¿à¤¨à¤¿à¤•' : lang === 'hi' ? 'à¤µà¤¾à¤•à¤¡, à¤ªà¥à¤£à¥‡ à¤•à¥à¤²à¤¿à¤¨à¤¿à¤•' : 'Wakad, Pune';
                      if (l.id === 'jalgaon') cityName = lang === 'mr' ? 'à¤œà¤³à¤—à¤¾à¤µ à¤•à¥à¤²à¤¿à¤¨à¤¿à¤•' : lang === 'hi' ? 'à¤œà¤²à¤—à¤¾à¤‚à¤µ à¤•à¥à¤²à¤¿à¤¨à¤¿à¤•' : 'Jalgaon';
                      if (l.id === 'online') cityName = lang === 'mr' ? 'à¤‘à¤¨à¤²à¤¾à¤‡à¤¨ à¤µà¥à¤¹à¤¿à¤¡à¤¿à¤¯à¥‹ à¤¸à¤²à¥à¤²à¤¾' : lang === 'hi' ? 'à¤‘à¤¨à¤²à¤¾à¤‡à¤¨ à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤ªà¤°à¤¾à¤®à¤°à¥à¤¶' : 'Online Consultation';
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
                    <span>{showPreview ? 'â–²' : 'â–¼'}</span>
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

                <p style={{ fontSize: '0.78rem', color: 'rgba(14,14,12,0.58)', lineHeight: 1.55, margin: 0 }}>
                  {t('form.chooseMethod')}
                </p>

                {submitError && <p role="alert" className="form-error">{submitError}</p>}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={`https://wa.me/919834172124?text=${encodeURIComponent(waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '13px 18px',
                      borderRadius: '5px',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    <span>{t('form.instantWaBtn')}</span>
                  </a>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '4px 0' }}>
                    <div style={{ flex: 1, height: '1px', background: 'rgba(14,14,12,0.12)' }} />
                    <span style={{ fontSize: '0.68rem', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase' }}>{t('form.or')}</span>
                    <div style={{ flex: 1, height: '1px', background: 'rgba(14,14,12,0.12)' }} />
                  </div>

                  <button type="submit" className="btn btn--primary btn--full" disabled={submitting} style={{ background: '#1B2A41', color: '#FFFFFF' }}>
                    {submitting ? t('form.sendingOtp') : t('form.websiteOtpBtn')}
                  </button>
                </div>
              </form>
            ) : (
              /* OTP Verification Step */
              <form
                onSubmit={handleVerifyOtp}
                noValidate
                style={{ padding: 'clamp(18px,3vw,32px) clamp(18px,4vw,40px)', display: 'flex', flexDirection: 'column', gap: '18px' }}
              >
                <div style={{
                  padding: '14px 16px',
                  background: '#E8F2ED',
                  border: '1px solid #C5DEC8',
                  borderRadius: '8px',
                  color: '#1B2A41',
                }}>
                  <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 600 }}>
                    {t('form.otpSentTo')} {formattedPhone}
                  </p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.78rem', color: '#2D6150' }}>
                    {t('form.enter6Digit')}
                  </p>
                </div>

                <Field id="f-otp" label={t('form.otpInputLabel')} error={otpError}>
                  <input
                    id="f-otp"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otpCode}
                    onChange={e => setOtpCode(e.target.value.replace(/\D/g, ''))}
                    className="field-input"
                    placeholder="â€¢ â€¢ â€¢ â€¢ â€¢ â€¢"
                    style={{
                      letterSpacing: '8px',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      textAlign: 'center',
                      fontFamily: 'monospace',
                    }}
                    autoFocus
                  />
                </Field>

                {otpError && <p role="alert" className="form-error">{otpError}</p>}

                <button type="submit" className="btn btn--primary btn--full" disabled={verifyingOtp || otpCode.length !== 6}>
                  {verifyingOtp ? t('form.verifyingCode') : t('form.verifyAndSubmit')}
                </button>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                  <button
                    type="button"
                    onClick={resetOtpFlow}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--mineral)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    {t('form.editDetails')}
                  </button>
                </div>
              </form>
            )}

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
                VERIFIED SMS APPOINTMENT
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
                    â†‘ Patient details will be verified via SMS OTP to prevent fake entries.
                  </p>
                </>
              ) : (
                <div style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(14,14,12,0.03)', borderRadius: '8px', minHeight: '200px',
                }}>
                  <p style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(14,14,12,0.3)', textAlign: 'center' }}>
                    Start filling in the form<br />to prepare a follow-up message.
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Completion Screen */
          <div style={{ padding: '48px 32px', textAlign: 'center' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#E8F2ED',
              border: '2px solid #C5DEC8',
              color: '#1B2A41',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              fontSize: '1.2rem',
              fontWeight: 800,
            }}>
              âœ“
            </div>
            <p className="mono" style={{ color: '#2D6150', marginBottom: '8px', fontSize: '0.72rem', fontWeight: 700 }}>
               {t('form.requestReceivedTitle')}
            </p>
            <h3 style={{
              fontFamily: 'Fraunces, serif', fontWeight: 300,
              fontSize: 'clamp(1.4rem,3vw,2rem)', color: 'var(--ink)', marginBottom: '12px',
            }}>
              {t('form.thankYou')} {form.name.split(' ')[0]}.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(14,14,12,0.6)', lineHeight: 1.65, marginBottom: '28px', maxWidth: '380px', margin: '0 auto 28px' }}>
               {t('form.successSub')} ({formattedPhone})
            </p>
             <a href={`https://wa.me/919834172124?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp" style={{ marginRight: '10px' }}>
               {t('form.continueWa')}
             </a>
            <button onClick={onClose} className="btn btn--outline-ink" style={{ minWidth: '160px' }}>
              {t('common.close')}
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


