import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ChapterJourney({ onOpenBooking }) {
  const { t, lang } = useLanguage();

  const steps = [
    {
      num: '01',
      title: lang === 'mr' ? 'पहिली भेट आणि संवाद' : lang === 'hi' ? 'पहला परामर्श' : 'First Consultation',
      desc: lang === 'mr' 
        ? 'तुमच्या तक्रारी, वैद्यकीय इतिहास आणि शारीरिक लक्षणांवर सविस्तर चर्चा.' 
        : lang === 'hi' 
        ? 'आपकी मुख्य शिकायत, चिकित्सा इतिहास और शारीरिक लक्षणों पर विस्तृत चर्चा।' 
        : 'An unhurried conversation covering your main complaint, medical history, physical generalities and life situation.'
    },
    {
      num: '02',
      title: lang === 'mr' ? 'वैयक्तिक औषध निवड' : lang === 'hi' ? 'व्यक्तिगत औषधि चयन' : 'Individual Remedy',
      desc: lang === 'mr' 
        ? 'केवळ आजाराच्या नावावर नाही, तर तुमच्या संपूर्ण लक्षण-समुच्चयावर आधारित औषध.' 
        : lang === 'hi' 
        ? 'केवल बीमारी के नाम पर नहीं, बल्कि आपके पूर्ण लक्षण-समूह पर आधारित औषधि।' 
        : 'Selecting a single homoeopathic medicine tailored to your totality of symptoms, not just a disease label.'
    },
    {
      num: '03',
      title: lang === 'mr' ? 'फॉलो-अप आणि आढावा' : lang === 'hi' ? 'फॉलो-अप और समीक्षा' : 'Follow-Up Review',
      desc: lang === 'mr' 
        ? '३ ते ६ आठवड्यांनी उपचारांच्या दिशेचा आढावा घेऊन औषधांची मात्रा निश्चित करणे.' 
        : lang === 'hi' 
        ? '3 से 6 सप्ताह में उपचार की दिशा की समीक्षा कर खुराक और औषधि समायोजित करना।' 
        : 'Monitoring your response after 3–6 weeks to assess direction of cure and adjust dosage or remedy as required.'
    },
    {
      num: '04',
      title: lang === 'mr' ? 'दीर्घकालीन आरोग्य' : lang === 'hi' ? 'दीर्घकालिक स्वास्थ्य' : 'Long-Term Wellness',
      desc: lang === 'mr' 
        ? 'नैसर्गिक प्रतिकारशक्ती वाढवून शाश्वत व दीर्घकालीन आरोग्य लाभ.' 
        : lang === 'hi' 
        ? 'प्राकृतिक रोग प्रतिरोधक क्षमता बढ़ाकर स्थायी व दीर्घकालिक स्वास्थ्य लाभ।' 
        : 'Sustained improvement with reduced frequency of remedy repetition as natural resilience is restored.'
    }
  ];

  return (
    <section 
      id="journey" 
      style={{
        backgroundColor: 'var(--bg)',
        padding: 'clamp(3rem, 6vw, 5.5rem) 0',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
      aria-label="Care Journey — Four Careful Steps"
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-ocean" style={{ marginBottom: '0.85rem' }}>
            {lang === 'mr' ? 'प्रकरण ०५ · उपचार प्रवास' : lang === 'hi' ? 'अध्याय 05 · देखभाल यात्रा' : 'Chapter 05 · The Journey'}
          </span>

          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            color: 'var(--navy)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            lineHeight: 1.18,
            marginBottom: '0.75rem'
          }}>
            One path.<br />
            <em style={{ color: '#dc2626', fontStyle: 'italic' }}>Four careful steps.</em>
          </h2>

          <p style={{ color: 'var(--muted)', fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)', lineHeight: 1.6 }}>
            {lang === 'mr' 
              ? 'आरोग्य सुधारणेचा प्रत्येक टप्पा समजून घेतल्यास उपचारांचे उत्तम परिणाम मिळतात.' 
              : lang === 'hi' 
              ? 'स्वास्थ्य सुधार के प्रत्येक चरण को समझकर उपचार के सर्वोत्तम परिणाम मिलते हैं।' 
              : 'Homoeopathy works best when both patient and doctor understand the sequence of care.'}
          </p>
        </div>

        {/* 4 Steps Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
          position: 'relative'
        }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--white)',
                padding: '2rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(220, 38, 38, 0.08)',
                  color: '#dc2626',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  marginBottom: '1.25rem',
                  border: '1px solid rgba(220, 38, 38, 0.2)'
                }}>
                  {step.num}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  color: 'var(--navy)',
                  fontWeight: 500,
                  marginBottom: '0.6rem',
                  lineHeight: 1.25
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  {step.desc}
                </p>
              </div>

              <div style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#dc2626',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(0,0,0,0.06)'
              }}>
                Step {idx + 1} of 4 →
              </div>
            </div>
          ))}
        </div>

        {/* Real Clinic Environment Showcase */}
        <div style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: '#faf6ee',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(14, 14, 12, 0.14)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '1.25rem', textAlign: 'center' }}>
            A Peaceful, Unhurried Healing Environment
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            
            {/* Consultation Desk (IMG_0768.JPEG) */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
              <img 
                src="/assets/client_photos/IMG_0768.JPEG" 
                alt="Doctor Consultation Interaction" 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.65rem 0.85rem', background: '#f2ece0' }}>
                <strong style={{ fontSize: '0.84rem', color: 'var(--navy)' }}>Attentive Consultation</strong>
                <p style={{ fontSize: '0.76rem', color: 'var(--muted)', margin: 0 }}>Detailed history taking &amp; compassionate listening</p>
              </div>
            </div>

            {/* Consultation Room Setup (IMG_0696.JPEG) */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
              <img 
                src="/assets/client_photos/IMG_0696.JPEG" 
                alt="Private Consultation Desk Room Setup" 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.65rem 0.85rem', background: '#f2ece0' }}>
                <strong style={{ fontSize: '0.84rem', color: 'var(--navy)' }}>Private Consultation Space</strong>
                <p style={{ fontSize: '0.76rem', color: 'var(--muted)', margin: 0 }}>Clean, modern &amp; confidential room setup</p>
              </div>
            </div>

            {/* Patient Lounge (IMG_0720.JPEG) */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
              <img 
                src="/assets/client_photos/IMG_0720.JPEG" 
                alt="Clinic Patient Waiting Lounge" 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.65rem 0.85rem', background: '#f2ece0' }}>
                <strong style={{ fontSize: '0.84rem', color: 'var(--navy)' }}>Comfortable Waiting Lounge</strong>
                <p style={{ fontSize: '0.76rem', color: 'var(--muted)', margin: 0 }}>Warm reception seating for patients &amp; families</p>
              </div>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center' }}>
          <button 
            className="btn-primary" 
            onClick={onOpenBooking}
            style={{ fontSize: '0.95rem', padding: '0.8rem 2.2rem' }}
          >
            Start Your Care Journey →
          </button>
        </div>

      </div>
    </section>
  );
}
