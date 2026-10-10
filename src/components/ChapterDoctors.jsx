import React, { useState } from 'react';
import { doctors } from '../data/clinicData';
import { X, Award, CheckCircle, GraduationCap, BookOpen, Stethoscope, Calendar, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const getLocalizedInterest = (interest, lang) => {
  if (lang === 'mr') {
    const map = {
      "Skin Diseases & Vitiligo": "त्वचारोग व विटिलिगो (कोड)",
      "Allergies & Asthma": "ऍलर्जी व दमा",
      "Migraine": "मायग्रेन व डोकेदुखी",
      "PCOD & Hormonal Health": "पीसीओडी व संप्रेरक आरोग्य",
      "Kidney Stones": "मूतखडा (किडनी स्टोन)",
      "Acidity & Digestion": "ॲसिडिटी व पचनसंस्था",
      "Paediatric Illnesses": "बालरोग व मुलांचे आरोग्य",
      "Chronic Case Management": "जुनाट आजार व्यवस्थापन",
      "Mental Health & Emotional Well-being": "मानसिक आरोग्य व भावनिक स्वास्थ्य",
      "Mental Health Care": "मानसिक आरोग्य",
      "Respiratory & Allergies": "श्वसन विकार व ऍलर्जी",
      "Hair & Skin Care": "केस व त्वचा निगा",
      "Teenager & Adult Mental Health": "तरुणांचे मानसिक आरोग्य",
      "Corporate Wellness": "कॉर्पोरेट वेलनेस",
      "Women's Health & Gynaecological Care": "महिला आरोग्य व स्त्रीरोग",
      "Women's Health": "महिला आरोग्य",
      "Ayurvedic Pulse Diagnosis": "आयुर्वेदिक नाडी परीक्षा",
      "Holistic Lifestyle & Diet": "समग्र जीवनशैली व आहार"
    };
    return map[interest] || interest;
  }
  if (lang === 'hi') {
    const map = {
      "Skin Diseases & Vitiligo": "त्वचारोग व सफेद दाग (विटिलिगो)",
      "Allergies & Asthma": "एलर्जी व अस्थमा",
      "Migraine": "माइग्रेन व सिरदर्द",
      "PCOD & Hormonal Health": "पीसीओडी व हार्मोनल स्वास्थ्य",
      "Kidney Stones": "गुर्दे की पथरी",
      "Acidity & Digestion": "एसिडिटी व पाचन",
      "Paediatric Illnesses": "बाल रोग",
      "Chronic Case Management": "क्रोनिक रोग प्रबंधन",
      "Mental Health & Emotional Well-being": "मानसिक स्वास्थ्य एवं संतुलन",
      "Mental Health Care": "मानसिक स्वास्थ्य",
      "Respiratory & Allergies": "श्वसन रोग व एलर्जी",
      "Hair & Skin Care": "बाल व त्वचा देखभाल",
      "Teenager & Adult Mental Health": "युवा मानसिक स्वास्थ्य",
      "Corporate Wellness": "कॉर्पोरेट वेलनेस",
      "Women's Health & Gynaecological Care": "महिला स्वास्थ्य एवं स्त्री रोग",
      "Women's Health": "महिला स्वास्थ्य",
      "Ayurvedic Pulse Diagnosis": "आयुर्वेदिक नाड़ी परीक्षा",
      "Holistic Lifestyle & Diet": "समग्र जीवनशैली व आहार"
    };
    return map[interest] || interest;
  }
  return interest;
};

export default function ChapterDoctors({ onOpenBooking }) {
  const { t, lang } = useLanguage();
  const [selectedDoctorBio, setSelectedDoctorBio] = useState(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Extended photo galleries for doctors
  const doctorGalleries = {
    kushal: [
      { url: "/assets/client_photos/IMG_0680.JPG.jpeg", title: "Dr. Kushal Somani — Consultation Desk" },
      { url: "/assets/client_photos/IMG_0687.JPG.jpeg", title: "Dr. Kushal Somani — Senior Specialist Portrait" },
      { url: "/assets/client_photos/IMG_0686.JPG.jpeg", title: "Materia Medica Reference Library" },
      { url: "/assets/client_photos/IMG_0691.JPG.jpeg", title: "Online Video Consultation Desk" },
      { url: "/assets/client_photos/IMG_0700.JPEG", title: "MUHS University Graduation Degree & Gold Medal" },
    ],
    antim: [
      { url: "/assets/dr-antim-somani.jpg", title: "Dr. Antim Somani — Founder & Senior Specialist" },
      { url: "/assets/client_photos/IMG_0752.JPEG", title: "Dr Somani's Homoeopathy Clinic Branding" },
    ],
    minal: [
      { url: "/assets/dr-minal-somani.jpg", title: "Dr. Minal Somani — Senior Ayurvedic Consultant" },
    ]
  };

  const handleOpenBio = (dr) => {
    setSelectedDoctorBio(dr);
    setActivePhotoIdx(0);
  };

  return (
    <section
      id="doctors"
      className="paper-section section-pad scroll-target"
      style={{ backgroundColor: 'var(--bg)', position: 'relative', overflow: 'hidden' }}
      aria-label="Meet Our Doctors"
    >
      {/* Botanical Microscopy Organic Wave Texture Layer */}
      <div
        className="parallax-layer"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/assets/botanical_microscopy.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-ocean" style={{ marginBottom: '0.75rem' }}>
            {t('doctorsSection.badge') || 'Experienced Practitioners'}
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--navy)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '0.85rem'
          }}>
            {t('doctorsSection.h2') || 'Meet Our Doctors'}
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.02rem', lineHeight: 1.6 }}>
            {t('doctorsSection.sub') || 'Registered homoeopathic and ayurvedic practitioners dedicated to individualised, compassionate care.'}
          </p>
        </div>

        {/* Doctor Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {doctors.map((dr, idx) => (
            <article
              key={dr.id}
              className={`doctor-card-grid ${idx % 2 !== 0 ? 'reverse-desktop' : ''}`}
              style={{
                background: '#faf6ee',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(14, 14, 12, 0.14)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem',
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2
              }}
            >
              {/* Doctor Image Container (Clickable to open full bio) */}
              <div 
                className="doctor-img-col"
                onClick={() => handleOpenBio(dr)}
                style={{ cursor: 'pointer' }}
                title="Click to view full professional bio & credentials"
              >
                <div style={{
                  position: 'relative',
                  width: 'min(280px, 100%)',
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  margin: '0 auto',
                  overflow: 'hidden',
                  border: '4px solid rgba(220, 38, 38, 0.25)',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(220, 38, 38, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                >
                  <img
                    src={dr.portrait}
                    alt={dr.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, inset: 'auto 0 0 0',
                    background: 'rgba(11, 19, 41, 0.85)', color: '#ffffff',
                    fontSize: '0.75rem', fontWeight: 600, padding: '5px 0', textAlign: 'center',
                    letterSpacing: '0.04em'
                  }}>
                    {lang === 'mr' ? 'सविस्तर माहिती पहा' : lang === 'hi' ? 'पूरा परिचय देखें' : 'Click for Full Bio'}
                  </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <span className="badge badge-green" style={{ background: 'rgba(220, 38, 38, 0.08)', color: '#dc2626', border: '1px solid rgba(220, 38, 38, 0.2)' }}>
                    {lang === 'mr' ? 'नोंदणी क्र. ' : lang === 'hi' ? 'पंजीकरण संख्या ' : 'Reg. No. '}{dr.regNo}
                  </span>
                </div>
              </div>

              {/* Doctor Bio & Info */}
              <div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#dc2626', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {dr.id === 'antim' ? (lang === 'mr' ? 'संस्थापक व पहिली पिढी' : lang === 'hi' ? 'संस्थापक एवं पहली पीढ़ी' : dr.generation) : dr.id === 'kushal' ? (lang === 'mr' ? 'दुसरी पिढी' : lang === 'hi' ? 'दूसरी पीढ़ी' : dr.generation) : (lang === 'mr' ? 'आयुर्वेदिक तज्ज्ञ' : lang === 'hi' ? 'आयुर्वेदिक विशेषज्ञ' : dr.generation)}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
                  color: 'var(--navy)',
                  fontWeight: 400,
                  marginTop: '0.25rem',
                  marginBottom: '0.35rem'
                }}>
                  {t(`doctorsSection.${dr.id === 'antim' ? 'drAntim' : dr.id === 'kushal' ? 'drKushal' : 'drMinal'}.name`) || dr.name}
                </h3>
                <p style={{ color: 'var(--muted)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  {t(`doctorsSection.${dr.id === 'antim' ? 'drAntim' : dr.id === 'kushal' ? 'drKushal' : 'drMinal'}.qual`) || `${dr.qualifications} · ${dr.role}`}
                </p>

                <p style={{ color: 'var(--ink)', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '1.1rem' }}>
                  {t(`doctorsSection.${dr.id === 'antim' ? 'drAntim' : dr.id === 'kushal' ? 'drKushal' : 'drMinal'}.intro`) || (dr.id === 'kushal' 
                    ? 'Second-generation physician continuing a 28-year clinical legacy. Awarded MUHS University Gold Medal. Specialised in Mental Health, Emotional Well-being, Skin Diseases, Allergies, and Chronic Care.' 
                    : dr.id === 'antim' 
                    ? 'Founder of Dr Somani’s Homoeopathy (est. 1998). Over 28+ years of clinical excellence treating 50,000+ patients across India. Recipient of Khandesh Gaurav Puraskar.' 
                    : 'Senior Ayurvedic Consultant with 28+ years experience. Specialising in Women’s Health, PCOD, hormonal balance, and holistic natural healing.')}
                </p>

                {/* Read Full Bio Button */}
                <button
                  type="button"
                  onClick={() => handleOpenBio(dr)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#dc2626',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    padding: 0,
                    marginBottom: '1.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {lang === 'mr' ? 'संपूर्ण परिचय आणि पदव्या पहा →' : lang === 'hi' ? 'पूरा परिचय और योग्यता देखें →' : 'Read Full Professional Bio & Credentials →'}
                </button>

                {/* Clinical Interests */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {t('doctorsSection.interestsLabel') || 'Specialised Focus Areas'}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {dr.interests.map((interest, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.8rem',
                          background: '#ffffff',
                          border: '1px solid rgba(14,14,12,0.12)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--ink)',
                          fontWeight: 500
                        }}
                      >
                        {getLocalizedInterest(interest, lang)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className="btn-primary"
                  onClick={onOpenBooking}
                  style={{ fontSize: '0.9rem', padding: '0.65rem 1.35rem' }}
                >
                  {t('doctorsSection.bookWithDr') || 'Book Consultation with'} {dr.name.split(' ')[1] || dr.name} →
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* =========================================================
           ACADEMIC CREDENTIALS & CLINICAL EXCELLENCE SHOWCASE
           ========================================================= */}
        <div style={{
          marginTop: '3.5rem',
          padding: '2rem',
          background: '#faf6ee',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(14, 14, 12, 0.14)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="badge badge-gold">
              {lang === 'mr' ? 'प्रमाणित पदव्या' : lang === 'hi' ? 'सत्यापित प्रमाण' : 'Verified Credentials'}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)' }}>
              {lang === 'mr' ? 'एमयूएचएस सुवर्णपदक विजेता' : lang === 'hi' ? 'एमयूएचएस स्वर्ण पदक विजेता' : 'MUHS University Gold Medalist'}
            </span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1rem' }}>
            {lang === 'mr' ? 'शैक्षणिक उत्कृष्टता आणि वैद्यकीय प्रमाणपत्रे' : lang === 'hi' ? 'शैक्षणिक उत्कृष्टता और चिकित्सा प्रमाण' : 'Academic Excellence & Medical Credentials'}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            
            {/* Real Gold Medal Certificate Photo (IMG_0700.JPEG) */}
            <div 
              onClick={() => handleOpenBio(doctors.find(d => d.id === 'kushal') || doctors[1])}
              style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.12)', boxShadow: 'var(--shadow-sm)', cursor: 'pointer' }}
              title="Click to view full degree transcript & bio"
            >
              <img 
                src="/assets/client_photos/IMG_0700.JPEG" 
                alt="Dr. Kushal Somani MUHS Gold Medal Certificate" 
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.75rem 1rem', background: '#f2ece0', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                <strong style={{ fontSize: '0.88rem', color: 'var(--navy)' }}>
                  {lang === 'mr' ? 'पदवी आणि सुवर्णपदक' : lang === 'hi' ? 'स्नातक उपाधि और स्वर्ण पदक' : 'Graduation Degree & Gold Medal'}
                </strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--muted)', margin: 0 }}>
                  {lang === 'mr' ? 'धोंडूमामा साठे होमिओपॅथिक मेडिकल कॉलेज आणि एमयूएचएस नाशिक' : lang === 'hi' ? 'धोंडूमामा साठे होम्योपैथिक मेडिकल कॉलेज और एमयूएचएस नासिक' : 'Dhondumama Sathe Homoeopathic Medical College & MUHS Nashik'}
                </p>
              </div>
            </div>

            {/* Real Consultation Desk Photo (IMG_0686.JPG.jpeg) */}
            <div 
              onClick={() => handleOpenBio(doctors.find(d => d.id === 'kushal') || doctors[1])}
              style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.12)', boxShadow: 'var(--shadow-sm)', cursor: 'pointer' }}
              title="Click to view consultation library & bio"
            >
              <img 
                src="/assets/client_photos/IMG_0686.JPG.jpeg" 
                alt="Dr. Kushal Somani Consultation Room Library" 
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.75rem 1rem', background: '#f2ece0', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                <strong style={{ fontSize: '0.88rem', color: 'var(--navy)' }}>
                  {lang === 'mr' ? 'क्लासिकल मटेरिया मेडिका ग्रंथालय' : lang === 'hi' ? 'शास्त्रीय मटेरिया मेडिका लाइब्रेरी' : 'Classical Materia Medica Library'}
                </strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--muted)', margin: 0 }}>
                  {lang === 'mr' ? 'सखोल केस स्टडी व वैयक्तिक उपचारांसाठी सुसज्ज ग्रंथालय' : lang === 'hi' ? 'गहन केस स्टडी और व्यक्तिगत उपचार के लिए सुसज्जित लाइब्रेरी' : 'Deep case study environment for comprehensive individualised care'}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* =========================================================
         PROFESSIONAL LONG BIO & CREDENTIALS LIGHTBOX MODAL
         ========================================================= */}
      {selectedDoctorBio && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedDoctorBio(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(11, 19, 41, 0.75)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FAF6EE',
              maxWidth: '780px',
              width: '100%',
              borderRadius: '24px',
              border: '1px solid rgba(14,14,12,0.18)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              padding: 'clamp(1.5rem, 4vw, 2.2rem)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDoctorBio(null)}
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                background: 'rgba(0,0,0,0.06)', border: 'none', borderRadius: '50%',
                width: '38px', height: '38px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10
              }}
            >
              <X size={20} color="#0b1329" />
            </button>

            {/* Modal Header Title & Badges */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                <span className="badge badge-gold">
                  {selectedDoctorBio.id === 'antim' ? (lang === 'mr' ? 'संस्थापक' : lang === 'hi' ? 'संस्थापक' : selectedDoctorBio.generation) : selectedDoctorBio.id === 'kushal' ? (lang === 'mr' ? 'दुसरी पिढी' : lang === 'hi' ? 'दूसरी पीढ़ी' : selectedDoctorBio.generation) : (lang === 'mr' ? 'आयुर्वेद तज्ज्ञ' : lang === 'hi' ? 'आयुर्वेद विशेषज्ञ' : selectedDoctorBio.generation)}
                </span>
                {selectedDoctorBio.id === 'kushal' && (
                  <span className="badge badge-emerald" style={{ background: '#10b981', color: '#fff' }}>
                    {lang === 'mr' ? 'एमयूएचएस सुवर्णपदक विजेते' : lang === 'hi' ? 'एमयूएचएस स्वर्ण पदक विजेता' : 'MUHS Gold Medalist'}
                  </span>
                )}
                <span className="badge badge-ocean">
                  {lang === 'mr' ? 'नोंदणी क्र. ' : lang === 'hi' ? 'पंजीकरण संख्या ' : 'Reg. No. '}{selectedDoctorBio.regNo}
                </span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--navy)', margin: '0 0 4px 0' }}>
                {t(`doctorsSection.${selectedDoctorBio.id === 'antim' ? 'drAntim' : selectedDoctorBio.id === 'kushal' ? 'drKushal' : 'drMinal'}.name`) || selectedDoctorBio.name}
              </h2>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#dc2626' }}>
                {t(`doctorsSection.${selectedDoctorBio.id === 'antim' ? 'drAntim' : selectedDoctorBio.id === 'kushal' ? 'drKushal' : 'drMinal'}.qual`) || `${selectedDoctorBio.qualifications} · ${selectedDoctorBio.role}`}
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--muted)', marginTop: '2px' }}>
                {lang === 'mr' ? 'येथे उपलब्ध: ' : lang === 'hi' ? 'उपलब्ध: ' : 'Practicing at: '}
                {selectedDoctorBio.locations.map(l => l === 'Jalgaon' ? (lang === 'mr' ? 'जळगाव' : lang === 'hi' ? 'जलगांव' : l) : l === 'Pune' ? (lang === 'mr' ? 'पुणे' : lang === 'hi' ? 'पुणे' : l) : (lang === 'mr' ? 'ऑनलाइन' : lang === 'hi' ? 'ऑनलाइन' : l)).join(' · ')}
              </div>
            </div>

            {/* LARGE HERO PHOTO PREVIEW SHOWCASE (BIG & VISIBLE TO NAKED EYE) */}
            <div style={{
              marginBottom: '1.5rem',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#0b1329',
              border: '2px solid rgba(220, 38, 38, 0.35)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.18)',
              position: 'relative'
            }}>
              <div style={{ width: '100%', height: 'clamp(280px, 45vh, 380px)', position: 'relative' }}>
                <img
                  src={(doctorGalleries[selectedDoctorBio.id] && doctorGalleries[selectedDoctorBio.id][activePhotoIdx]?.url) || selectedDoctorBio.portrait}
                  alt={(doctorGalleries[selectedDoctorBio.id] && doctorGalleries[selectedDoctorBio.id][activePhotoIdx]?.title) || selectedDoctorBio.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 19, 41, 0.9) 0%, rgba(11, 19, 41, 0.1) 40%, transparent 100%)',
                  pointerEvents: 'none'
                }} />
                
                {/* Photo Caption Badge Banner */}
                <div style={{
                  position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem',
                  color: '#ffffff', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px'
                }}>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#dc2626', display: 'inline-block' }} />
                    {(doctorGalleries[selectedDoctorBio.id] && doctorGalleries[selectedDoctorBio.id][activePhotoIdx]?.title) || selectedDoctorBio.name}
                  </div>

                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>
                    Photo {activePhotoIdx + 1} of {(doctorGalleries[selectedDoctorBio.id]?.length) || 1}
                  </span>
                </div>
              </div>

              {/* Photo Thumbnail Strip Selector (Enlarged Buttons) */}
              {doctorGalleries[selectedDoctorBio.id] && doctorGalleries[selectedDoctorBio.id].length > 1 && (
                <div style={{ background: '#131e3a', padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {lang === 'mr' ? 'मोठा फोटो पाहण्यासाठी क्लिक करा:' : lang === 'hi' ? 'बड़ा फोटो देखने के लिए क्लिक करें:' : 'SELECT PHOTO TO PREVIEW LARGE:'}
                  </div>
                  <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px' }}>
                    {doctorGalleries[selectedDoctorBio.id].map((photo, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => setActivePhotoIdx(pIdx)}
                        style={{
                          flexShrink: 0,
                          border: activePhotoIdx === pIdx ? '3px solid #dc2626' : '1.5px solid rgba(255,255,255,0.2)',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          padding: 0,
                          cursor: 'pointer',
                          background: '#000000',
                          opacity: activePhotoIdx === pIdx ? 1 : 0.65,
                          transform: activePhotoIdx === pIdx ? 'scale(1.05)' : 'scale(1)',
                          transition: 'all 0.2s ease',
                          boxShadow: activePhotoIdx === pIdx ? '0 4px 14px rgba(220,38,38,0.4)' : 'none'
                        }}
                        title={photo.title}
                      >
                        <img src={photo.url} alt={photo.title} style={{ width: '84px', height: '64px', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Concise Executive Bio Summary */}
            <div style={{ background: '#ffffff', padding: '1.25rem 1.4rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--ink)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.18rem', color: 'var(--navy)', marginBottom: '0.6rem', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '0.35rem' }}>
                Professional Overview &amp; Clinical Credentials
              </h4>

              {selectedDoctorBio.id === 'kushal' && (
                <div>
                  <p style={{ margin: '0 0 0.8rem 0' }}>
                    Dr. Kushal Somani is a second-generation homoeopathic physician continuing the 28-year clinical legacy of Dr. Antim Somani. He completed his M.D. (Hom) at Dhondumama Sathe Homoeopathic Medical College, Pune, and was awarded the prestigious <strong>MUHS University Gold Medal</strong> for academic excellence.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginTop: '0.75rem' }}>
                    <div style={{ background: '#faf6ee', padding: '0.75rem', borderRadius: '8px', borderLeft: '3px solid #dc2626' }}>
                      <strong style={{ color: 'var(--navy)', fontSize: '0.86rem' }}>Clinical Specialisations</strong>
                      <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: '2px 0 0 0' }}>Mental Health, Stress &amp; Anxiety, Skin Diseases (Vitiligo/Psoriasis), Allergies &amp; Chronic Care.</p>
                    </div>
                    <div style={{ background: '#faf6ee', padding: '0.75rem', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
                      <strong style={{ color: 'var(--navy)', fontSize: '0.86rem' }}>Corporate &amp; Community Care</strong>
                      <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: '2px 0 0 0' }}>Wellness speaker for Pune MNCs &amp; teen mental health mentor.</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedDoctorBio.id === 'antim' && (
                <div>
                  <p style={{ margin: '0 0 0.8rem 0' }}>
                    Founder of Dr Somani’s Homoeopathy (est. 1998). Over 28+ years of clinical experience treating 50,000+ patients across India and internationally. Recipient of the prestigious Khandesh Gaurav Puraskar.
                  </p>
                  <div style={{ background: '#faf6ee', padding: '0.75rem', borderRadius: '8px', borderLeft: '3px solid #dc2626' }}>
                    <strong style={{ color: 'var(--navy)', fontSize: '0.86rem' }}>Pioneer in Classical Homoeopathy</strong>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: '2px 0 0 0' }}>Expertise in chronic skin conditions, asthma, migraine, PCOD, and paediatric care.</p>
                  </div>
                </div>
              )}

              {selectedDoctorBio.id === 'minal' && (
                <div>
                  <p style={{ margin: '0 0 0.8rem 0' }}>
                    Experienced Ayurvedic Consultant with 28+ years of practice in Jalgaon. Focuses on holistic natural healing, addressing the root cause of health concerns.
                  </p>
                  <div style={{ background: '#faf6ee', padding: '0.75rem', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
                    <strong style={{ color: 'var(--navy)', fontSize: '0.86rem' }}>Women's Health &amp; Ayurvedic Care</strong>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: '2px 0 0 0' }}>Specialised in PCOD, hormonal balance, gynaecological care, and long-term wellness.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="btn-primary"
                onClick={() => {
                  const doctorName = selectedDoctorBio.name;
                  setSelectedDoctorBio(null);
                  onOpenBooking(doctorName);
                }}
                style={{ flex: 1, padding: '0.8rem 1.4rem', fontSize: '0.92rem' }}
              >
                {t('doctorsSection.bookWithDr') || 'Book Consultation with'} {selectedDoctorBio.name.split(' ')[1] || selectedDoctorBio.name} →
              </button>
              <button
                onClick={() => setSelectedDoctorBio(null)}
                className="btn-secondary"
                style={{ padding: '0.8rem 1.4rem', fontSize: '0.92rem', background: '#e2d9cc', color: 'var(--navy)', border: 'none' }}
              >
                {lang === 'mr' ? 'प्रोफाइल बंद करा' : lang === 'hi' ? 'प्रोफाइल बंद करें' : 'Close Profile'}
              </button>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .doctor-card-grid {
            grid-template-columns: 280px 1fr !important;
          }
          .doctor-card-grid.reverse-desktop {
            grid-template-columns: 1fr 280px !important;
          }
          .doctor-card-grid.reverse-desktop .doctor-img-col {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

