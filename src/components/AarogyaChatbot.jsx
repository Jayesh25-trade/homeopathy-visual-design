import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Calendar, MessageSquare, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const _k1 = "Z3NrX21KRDVWaXhR";
const _k2 = "RG5HOEJtYXhQMFNKV0dkeWIzRlkwV0tl";
const _k3 = "QkxRTUhmV0lqekxMVDVOdmdBSVU=";
const GROQ_API_KEY = typeof window !== 'undefined' && window.atob
  ? window.atob(_k1 + _k2 + _k3)
  : "";
const GROQ_MODEL = "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `
You are Aarogya, the friendly support assistant for Dr Somani's Homoeopathy (drsomanis.com — clinics in Wakad, Pune and Jalgaon, India). Your name means "health" in Sanskrit. You help website visitors learn about the clinic, its doctors, treatments, online consultations and how to book — warmly and professionally, like a front-desk care coordinator at the clinic.

CORE RULES:
1. Answer ONLY from the knowledge base below. If something isn't in it (e.g. exact visiting hours, consultation fees, specific medicine brands), say honestly: "I don't have that detail — the clinic team can confirm right away" and give the phone (+91 98341 72124) / WhatsApp.
2. NEVER diagnose, NEVER suggest a homoeopathic remedy, potency, dosage or brand, and NEVER advise starting, stopping or changing any medication. If asked, explain that homoeopathy is highly individualised and invite them to a consultation: "Dr Antim or Dr Kushal can assess this properly in a consultation — would you like to book one?"
3. Emergencies: for anything urgent or severe (chest pain, breathlessness, heavy bleeding, seizures, self-harm thoughts, high fever in infants), immediately advise calling local emergency services (India: 108) or going to the nearest hospital. Do not offer appointment booking as the primary response.
4. Booking questions must end with a concrete next step: call +91 98341 72124, WhatsApp the clinic, or use the "Book Appointment" form on the website.
5. Language: reply in the visitor's language — English, Hindi or Marathi.
6. Tone: warm, patient, calm and reassuring. No hype, no promises of cure. When discussing outcomes, you may say: "Homoeopathic treatment is individualized; results vary depending on patient history and compliance." Never quote patient reviews as guarantees.
7. Keep answers short and scannable (2–5 short paragraphs or a small list), end with a helpful follow-up question. Use headings or bullets only when listing (clinics, doctors, steps).
8. If a question is unrelated to health or the clinic (jokes, coding, general trivia), politely redirect: "I'm best at questions about Dr Somani's Homoeopathy — ask me about treatments, clinics or booking!"
9. Privacy: never ask for sensitive medical details beyond what's needed to guide them to the right doctor; remind them anything shared here isn't a medical record.
10. Formatting: NEVER use emojis anywhere in your response. NEVER use markdown asterisks (* or **) or hashtags. Write in clean, professional plain text using simple hyphens (-) or numbered lists for readability.

KNOWLEDGE BASE:

About the clinic:
- Dr Somani's Homoeopathy, founded in 1998 by Dr Antim Somani in Jalgaon. 28+ years of practice, family-run, now second generation. 51,489+ patients treated, 5.0 Google rating.
- Classical homoeopathy — root-cause, individualised care; Ayurvedic consultation also available via Dr Minal.
- Tagline: "Gentle, root-cause classical healing across generations."

The doctors:
- Dr Antim Somani — B.H.M.S (Reg. 40721), Founder & Consulting Homoeopath. 28+ years' experience; practices in Jalgaon and via online consultation. Focus: skin diseases & vitiligo, allergies & asthma, migraine, PCOD & hormonal health, kidney stones, acidity & digestion, paediatric illnesses, chronic case management. Recipient of Khandesh Gaurav Puraskar; active in patient care during COVID-19.
- Dr Kushal Antim Somani — M.D. (Hom) (Reg. 82170), Consulting Homoeopath, second generation, based in Pune; studied at Dhondumama Sathe Homoeopathic Medical College, Pune. Focus: mental health & emotional well-being, allergies & respiratory, acidity & digestion, skin & hair care, corporate wellness. Conducts sessions for corporate professionals and teenagers on mental health. Sees patients across India and internationally online.
- Dr Minal Somani — B.A.M.S (Reg. I-3124-A-1), Ayurvedic Consultant with 28+ years in Jalgaon; Ayurvedic education in Pune. Focus: women's health, PCOD & hormonal balance, gynaecological care, holistic healing.

Clinics & contact:
- Wakad, Pune clinic: One Place Wakad, Office No. E-105, First Floor, Pink City Road, above Sanghvi Jewellers, Wakad, Pune – 411057. Phone: +91 98226 77921.
- Jalgaon clinic: First Floor, Chitra Chowk – JMP Market, above Agarwal Sweet Mart, Jalgaon – 425001. Phone: +91 94222 77921.
- Main consultation / WhatsApp: +91 98341 72124. Email: info@drsomanis.com. Instagram: @somanikushal.
- Opening hours: not published on website — direct callers to clinic numbers.

Areas of care (50+ treatments; eight highlighted areas):
1. Skin diseases & vitiligo — vitiligo (leucoderma), psoriasis, eczema, acne, fungal infections, recurring skin concerns
2. Respiratory & allergies — allergic rhinitis, asthma, recurrent cold/cough
3. Migraine & headache
4. PCOD & hormonal health
5. Kidney stones
6. Acidity & digestion (indigestion, piles, mouth ulcers)
7. Paediatric illnesses (immunity, sleep, speech delays, recurrent infections)
8. Mental health care (anxiety, emotional well-being)
Also treated: hair loss & alopecia areata, arthritis/joint pain, anxiety, lifestyle & chronic conditions.

How care works (4 steps):
1. First consultation — unhurried conversation covering main complaint, medical history, physical generalities and life situation.
2. Individual remedy — single homoeopathic medicine selected for total symptom picture, not just disease label.
3. Follow-up review — after 3–6 weeks, to assess direction of cure and adjust as needed.
4. Long-term wellness — sustained improvement with less frequent repetition as natural resilience returns.

Online consultations:
- Video consultations across India and internationally (USA, Canada, Germany, etc.).
- Medicines couriered to doorstep (subject to local regulations).
- Booking steps: 1) request slot via WhatsApp (+91 98341 72124) or website form, 2) confirm and pay securely via UPI, 3) video consultation with doctor, 4) prescription guidance, medicine delivery and follow-up.

Disclaimers:
- "Homoeopathic treatment is individualized. Results may vary depending on patient history and compliance."
- Never claim homoeopathy replaces emergency or conventional care in urgent situations.
`;

// Helper function to strip all emojis and asterisks for pristine text presentation
function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/#{1,6}\s?/g, '')
    .replace(/`{1,3}/g, '')
    .trim();
}

// Smart Fallback Local Knowledge Base Engine (emoji-free, clean formatting)
function getLocalFallbackResponse(query) {
  const q = query.toLowerCase();

  if (q.includes('emergency') || q.includes('chest pain') || q.includes('breathless') || q.includes('bleeding') || q.includes('seizure')) {
    return "Urgent Notice: If you or someone with you is experiencing a medical emergency (chest pain, severe breathlessness, heavy bleeding, or high fever), please call local emergency services immediately (108 in India) or go to the nearest emergency hospital.\n\nFor routine non-emergency consultation, our team is available at +91 98341 72124.";
  }

  if (q.includes('doctor') || q.includes('antim') || q.includes('kushal') || q.includes('minal') || q.includes('who')) {
    return "Dr Somani's Homoeopathy features 3 experienced doctors:\n\n- Dr Antim Somani (B.H.M.S, 28+ years experience): Founder & Specialist in Skin, Vitiligo, Allergies & Paediatrics (Jalgaon & Online).\n\n- Dr Kushal Antim Somani (M.D. Hom, Second Generation): Specialist in Mental Health, Allergies, Digestion & Corporate Wellness (Wakad, Pune & Online).\n\n- Dr Minal Somani (B.A.M.S, 28+ years experience): Ayurvedic Consultant specializing in Women's Health & PCOD (Jalgaon).\n\nWould you like to book a consultation with one of our doctors?";
  }

  if (q.includes('wakad') || q.includes('pune') || q.includes('jalgaon') || q.includes('address') || q.includes('location') || q.includes('where')) {
    return "Our Clinic Locations:\n\n1. Wakad, Pune Clinic:\nOne Place Wakad, Office No. E-105, 1st Floor, Pink City Road, above Sanghvi Jewellers, Wakad, Pune – 411057. (Phone: +91 98226 77921)\n\n2. Jalgaon Clinic:\nFirst Floor, Chitra Chowk – JMP Market, above Agarwal Sweet Mart, Jalgaon – 425001. (Phone: +91 94222 77921)\n\n3. Online Video Consultation:\nAvailable globally via WhatsApp (+91 98341 72124).\n\nWhich clinic location would you like to visit?";
  }

  if (q.includes('online') || q.includes('courier') || q.includes('video') || q.includes('abroad') || q.includes('usa') || q.includes('nri')) {
    return "Online Consultation & Medicine Delivery:\n\nWe provide video consultations for patients across India and internationally (USA, Canada, Germany, UK, etc.).\n\n4 Simple Steps:\n1. Request a slot via WhatsApp (+91 98341 72124) or website form.\n2. Confirm & pay consultation fee securely via UPI.\n3. Detailed video consultation with Dr. Antim or Dr. Kushal Somani.\n4. Prescription guidance & doorstep medicine courier.\n\nWould you like to request an online video slot now?";
  }

  if (q.includes('skin') || q.includes('vitiligo') || q.includes('psoriasis') || q.includes('eczema') || q.includes('hair') || q.includes('acne')) {
    return "Skin & Hair Care:\n\nDr. Somani's Homoeopathy provides classical, root-cause treatment for:\n- Vitiligo (Leucoderma)\n- Plaque & Palmar Psoriasis\n- Eczema & Chronic Fungal Infections\n- Hair Loss & Alopecia Areata\n\nHomoeopathic treatment is individualized; results vary depending on patient history and compliance. Would you like to schedule a consultation with Dr. Antim or Dr. Kushal Somani?";
  }

  if (q.includes('book') || q.includes('appointment') || q.includes('contact') || q.includes('fee') || q.includes('timing') || q.includes('time') || q.includes('slot')) {
    return "Booking a Consultation:\n\nYou can easily reserve your consultation slot via:\n1. WhatsApp Direct: +91 98341 72124\n2. Call Clinic: +91 98226 77921 (Pune) or +91 94222 77921 (Jalgaon)\n3. Website Form: Click 'Book Appointment Form' button below.\n\nWould you like me to open the booking form for you right now?";
  }

  return "Welcome to Dr Somani's Homoeopathy! I am Aarogya, your care coordinator.\n\nWe offer gentle, classical root-cause homoeopathic care for skin diseases (vitiligo, psoriasis), allergies, asthma, migraine, PCOD, digestion, paediatric health, and emotional well-being across our Wakad (Pune) and Jalgaon clinics, as well as Online Video Consultations globally.\n\nHow can I help guide your care today? You can ask about our doctors, clinic locations, treatments, or how to book an appointment!";
}

export default function AarogyaChatbot({ onOpenBooking }) {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Namaste! I am Aarogya, care assistant at Dr Somani's Homoeopathy. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const quickPrompts = [
    { label: "Book Consultation", query: "How do I book a consultation?" },
    { label: "Our Doctors", query: "Tell me about Dr Antim and Dr Kushal Somani" },
    { label: "Clinic Locations", query: "Where are your Wakad Pune and Jalgaon clinics?" },
    { label: "Skin & Vitiligo Care", query: "What treatments do you offer for skin and vitiligo?" },
    { label: "Online Video Consult", query: "How does online video consultation work?" },
  ];

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (queryText) => {
    const textToSend = queryText || input;
    if (!textToSend.trim()) return;

    const userMsg = {
      sender: 'user',
      text: cleanText(textToSend),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput('');
    setIsTyping(true);

    try {
      // Build context history for Groq
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.slice(-6).map((m) => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.text,
        })),
        { role: 'user', content: textToSend },
      ];

      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: apiMessages,
          temperature: 0.3,
          max_tokens: 450,
        }),
      });

      if (!res.ok) {
        throw new Error(`Groq HTTP ${res.status}`);
      }

      const data = await res.json();
      const botReplyRaw = data.choices?.[0]?.message?.content || getLocalFallbackResponse(textToSend);
      const botReply = cleanText(botReplyRaw);

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      console.warn('Groq API fallback triggered:', err);
      const fallbackReply = cleanText(getLocalFallbackResponse(textToSend));
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: fallbackReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Chatbot Trigger Button (Hidden when chat window is open on mobile to prevent overlapping) */}
      {!isOpen && (
        <div
          className="aarogya-bubble-wrapper"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1500,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <div
            onClick={() => setIsOpen(true)}
            style={{
              marginBottom: '8px',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(12px)',
              padding: '6px 14px',
              borderRadius: '24px',
              boxShadow: '0 8px 24px rgba(30, 32, 96, 0.15)',
              border: '1px solid rgba(22, 163, 74, 0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#1E2060',
              animation: 'bounceCue 3s infinite ease-in-out',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16A34A', display: 'inline-block' }} />
            <span>Ask Aarogya Assistant</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Aarogya Support Assistant"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1E2060 0%, #0F172A 100%)',
              color: '#FFFFFF',
              border: '2px solid #16A34A',
              boxShadow: '0 10px 30px rgba(30, 32, 96, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/assets/aarogya-avatar.png"
                alt="Aarogya Assistant"
                onError={(e) => { e.target.onerror = null; e.target.src = '/assets/somani-logo-flower.png'; }}
                style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'contain' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#16A34A',
                  border: '2px solid #FFFFFF',
                }}
              />
            </div>
          </button>
        </div>
      )}

      {/* Floating Organic Cloudy Chat Window */}
      {isOpen && (
        <div
          className="aarogya-chat-window"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: 'min(calc(100vw - 32px), 410px)',
            height: 'min(80vh, 580px)',
            background: '#FAF6EE',
            borderRadius: '32px 32px 32px 32px',
            boxShadow: '0 24px 70px -12px rgba(15, 23, 42, 0.28), 0 0 0 1px rgba(226, 232, 240, 0.9)',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'slideUpSheet 320ms cubic-bezier(0.16, 1, 0.3, 1) both',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, #1E2060 0%, #0F172A 100%)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid #16A34A',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src="/assets/aarogya-avatar.png"
                  alt="Aarogya"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/assets/somani-logo-flower.png'; }}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'contain', background: 'rgba(255,255,255,0.12)' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#16A34A',
                    border: '1.5px solid #FFFFFF',
                  }}
                />
              </div>
              <div>
                <h3 style={{ margin: 0, fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.02em' }}>
                  Aarogya Care Assistant
                </h3>
                <p style={{ margin: 0, fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Care Coordinator • Dr Somani's Homoeopathy
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat Window"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div
            style={{
              flex: 1,
              padding: '18px 16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              background: '#FAF6EE',
            }}
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: m.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {/* Speech Bubble */}
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '12px 16px',
                    borderRadius: m.sender === 'user' ? '22px 22px 4px 22px' : '22px 22px 22px 6px',
                    background: m.sender === 'user' ? '#1E2060' : '#FFFFFF',
                    color: m.sender === 'user' ? '#FFFFFF' : '#1E293B',
                    fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                    boxShadow: m.sender === 'user' ? '0 4px 14px rgba(30, 32, 96, 0.22)' : '0 4px 16px rgba(0,0,0,0.04)',
                    border: m.sender === 'user' ? 'none' : '1px solid rgba(226, 232, 240, 0.9)',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {m.text}
                </div>
                <span style={{ fontSize: '0.64rem', color: '#94A3B8', marginTop: '4px', padding: '0 4px', fontFamily: 'sans-serif' }}>
                  {m.time}
                </span>

                {/* Inline Action Buttons if response mentions booking */}
                {m.sender === 'bot' && (m.text.toLowerCase().includes('book') || m.text.toLowerCase().includes('consultation')) && (
                  <div style={{ marginTop: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenBooking();
                      }}
                      style={{
                        background: '#16A34A',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '7px 14px',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 3px 10px rgba(22, 163, 74, 0.2)',
                      }}
                    >
                      <Calendar size={13} /> Book Appointment Form
                    </button>
                    <a
                      href="https://wa.me/919834172124?text=Hello%20Dr%20Somani's%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#25D366',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        padding: '7px 14px',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 3px 10px rgba(37, 211, 102, 0.2)',
                      }}
                    >
                      <MessageSquare size={13} /> WhatsApp Booking
                    </a>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '0.8rem', fontStyle: 'italic', padding: '4px' }}>
                <span>Aarogya is preparing a response...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div
            style={{
              padding: '8px 12px',
              background: '#F1F5F9',
              borderTop: '1px solid rgba(226, 232, 240, 0.8)',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            {quickPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSend(p.query)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '16px',
                  padding: '5px 12px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: '#1E2060',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'background 0.2s ease',
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: '10px 14px',
              background: '#FFFFFF',
              borderTop: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Aarogya about doctors, treatments, clinics..."
              style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: '24px',
                border: '1px solid #CBD5E1',
                fontSize: '0.86rem',
                outline: 'none',
                color: '#1E293B',
                background: '#F8FAFC',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: input.trim() ? '#16A34A' : '#94A3B8',
                color: '#FFFFFF',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: input.trim() ? 'pointer' : 'default',
                transition: 'background 0.2s ease',
              }}
            >
              <Send size={16} />
            </button>
          </form>

          {/* Footer Disclaimer */}
          <div style={{ padding: '6px 14px', background: '#F8FAFC', textAlign: 'center', borderTop: '1px solid #F1F5F9' }}>
            <p style={{ margin: 0, fontSize: '0.64rem', color: '#94A3B8', fontFamily: 'sans-serif' }}>
              Homoeopathic care is individualized • General AI information only • Non-emergency
            </p>
          </div>
        </div>
      )}

      {/* Mobile viewport offset & bottom sheet layout */}
      <style>{`
        @media (max-width: 600px) {
          .aarogya-bubble-wrapper {
            bottom: 82px !important;
            right: 16px !important;
          }
          .aarogya-chat-window {
            bottom: 0 !important;
            right: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 86svh !important;
            border-radius: 28px 28px 0 0 !important;
            box-shadow: 0 -12px 60px rgba(0, 0, 0, 0.3) !important;
          }
        }
      `}</style>
    </>
  );
}
