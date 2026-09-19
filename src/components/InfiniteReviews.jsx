import React, { useState, useEffect } from 'react';

const RenderStars = () => (
  <div style={{ display: 'inline-flex', gap: '2px', alignItems: 'center' }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C5964A">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

// 22 Real Google Patient Reviews
const reviewsData = [
  {
    id: 1,
    name: 'Jayesh Mal',
    meta: 'Local Guide · 8 reviews · 4 photos',
    time: '2 weeks ago',
    stars: 5,
    isNew: true,
    avatar: 'J',
    avatarBg: '#8B4513',
    text: 'I had been suffering from a cough for almost a month. I contacted Dr. Kushal Somani online from Pune, while I am from Mumbai. He understood my issue ,guided me properly and sent me the medicines. Within 8 days, my cough was completely gone. Thank you Dr Kushal',
    ownerResponse: "Jayesh, Thank you for trusting Dr Somani's Homoeopathy for your health concerns. Always wishing you the best of health."
  },
  {
    id: 2,
    name: 'Ankit Purohit',
    meta: '11 reviews · 1 photo',
    time: '2 months ago',
    stars: 5,
    isNew: false,
    avatar: 'A',
    avatarBg: '#7A5C58',
    text: 'We are incredibly grateful to Dr. Kushal Somani for the wonderful treatment and care he provided for our son. Before starting his homeopathy treatment, our son was facing several severe challenges: Sleep Issues, Speech Delays, Social Anxiety. After undergoing treatment with Dr. Kushal Somani, we have seen a remarkable transformation. All of these problems have been resolved. Our son is now sleeping peacefully, communicating well, and socializing happily with others.',
    ownerResponse: "Ankit, Thank you for trusting Dr. Somani’s Homoeopathy for your son’s treatment. We're glad to know that homoeopathy helped him."
  },
  {
    id: 2,
    name: 'Kanhaiya Tela',
    meta: '5 reviews · 1 photo',
    time: '3 weeks ago',
    stars: 5,
    isNew: true,
    avatar: 'K',
    avatarBg: '#5A7C65',
    text: 'I would sincerely like to thank Dr. Kushal Somani for helping me with my piles problem. I was quite परेशान and uncomfortable because of the issue, but after taking the homeopathic treatment and medicines prescribed by Dr. Kushal Somani, I gradually started feeling much better and have now recovered. What I really appreciated was the doctor\'s patient approach, understanding, and personal attention throughout the treatment.',
    ownerResponse: "Kanhaiya, Thank you for your detailed feedback. We are happy to know that homoeopathic medicines helped you with your complaints. Always wishing you the best of health."
  },
  {
    id: 3,
    name: 'Siddhi Jain',
    meta: 'Local Guide · 10 reviews · 23 photos',
    time: '6 months ago',
    stars: 5,
    isNew: false,
    avatar: 'S',
    avatarBg: '#8A6C58',
    text: 'I am extremely grateful to Dr. Kushal Somani for the incredible care and support throughout my treatment. I had been struggling with my illness for a long time, and nothing seemed to give me lasting relief. After starting homeopathic treatment with Dr. Kushal, I began noticing steady improvement in my health. He carefully listened to all my symptoms, explained the treatment clearly, and gave me confidence and hope.',
    ownerResponse: "Siddhi, Thank you for trusting Dr Somani's Homoeopathy! Always here to support your healthy journey."
  },
  {
    id: 4,
    name: 'Radhika Joshi',
    meta: 'Local Guide · 29 reviews · 27 photos',
    time: '6 months ago',
    stars: 5,
    isNew: false,
    avatar: 'R',
    avatarBg: '#6B5282',
    text: 'I consulted Dr Kushal Somani for my skin issue & the experience has been very positive. He patiently listened to my concerns and explained the treatment in a very clear and reassuring way. The medicines prescribed have been gentle and I have started noticing improvement in my skin. What I really appreciated was the doctor’s holistic approach and the time taken to understand the root cause.',
    ownerResponse: "Radhika, Thank you for sharing your experience with Dr Somani’s Homoeopathy! We’re glad to know that homoeopathy helped you for your skin ailments."
  },
  {
    id: 5,
    name: 'Namrata Mahamunkar',
    meta: '2 reviews',
    time: '4 weeks ago',
    stars: 5,
    isNew: false,
    avatar: 'N',
    avatarBg: '#4A6B7C',
    text: 'I am very thankful to Dr. Kushal for his kind care and treatment. I was suffering from leg pain and shoulder pain related to low calcium density, and after taking his homeopathic treatment, I experienced significant relief. He listens patiently, explains everything clearly, and provides very caring treatment. I truly appreciate his dedication.',
    ownerResponse: "Namrata, Thank you for your kind words. We are glad that your leg pain and shoulder pain is now better with homoeopathy."
  },
  {
    id: 6,
    name: 'Dhanendra kumar Bhurtiya',
    meta: '1 review',
    time: '11 months ago',
    stars: 5,
    isNew: false,
    avatar: 'D',
    avatarBg: '#7C654A',
    text: 'I had been suffering from Allergic Rhinitis for almost 6 to 7 years. Frequent sneezing, runny nose and constant discomfort had become a part of my daily life. I tried many treatments earlier but nothing gave me lasting relief. Then I started Homeopathic treatment with Dr. Somani and within a few months, I began noticing real improvement. After 6 months of regular treatment I am now completely free from my allergic rhinitis symptoms.',
    ownerResponse: "Dhanendra, Thank you for choosing Dr. Somani’s Homoeopathy. Your recovery from Allergic Rhinitis makes us really happy!"
  },
  {
    id: 7,
    name: 'Seema Dhage',
    meta: '3 reviews',
    time: '3 weeks ago',
    stars: 5,
    isNew: true,
    avatar: 'S',
    avatarBg: '#587A6C',
    text: 'I was suffering from severe hairfall and I was concerned about the quality and growth of my hair. Then I came across Dr. Somani\'s Homeopathy through a friend\'s reference. I have seen a significant difference in my hairfall it is now much better. Also, my daughter has started taking homeopathy to improve her immunity.',
    ownerResponse: "Seema, Thank you for sharing your experience with Dr Somani’s Homoeopathy. We’re glad to know that you had a positive experience with your hair fall treatment."
  },
  {
    id: 8,
    name: 'Chaitali Bihani',
    meta: '2 reviews',
    time: '10 months ago',
    stars: 5,
    isNew: false,
    avatar: 'C',
    avatarBg: '#8A5868',
    text: 'I would like to express my sincere appreciation to Dr. Kushal Somani for the exceptional care. I have been struggling with chronic cold, cough, and asthma for the past 15 years. Despite consulting multiple doctors and using regular medications and asthma inhalers, I saw very little improvement. However, everything changed after I met Dr. Somani six months ago. My symptoms have reduced drastically, and use of pumps and inhalers has been completely reduced.',
    ownerResponse: "Chaitali, Thank you for trusting Dr. Somani’s Homoeopathy for your treatment. We're glad to know that the use of inhalers has reduced now."
  },
  {
    id: 9,
    name: 'Mukund Chandak',
    meta: 'Local Guide · 7 reviews · 1 photo',
    time: '1 month ago',
    stars: 5,
    isNew: false,
    avatar: 'M',
    avatarBg: '#5A6C7A',
    text: 'I was facing digestion and vomiting issues since long time, whenever i was having a food after 2 or 3 chapatis i used to feel like I will vomit and i couldn\'t have enough food after that. I have consulted this with Dr. Kushal Somani and I am now cured with that issue. The homeopathy medicine really worked for me.',
    ownerResponse: "Mukund, We are glad to know that homeopathic medicines helped you for your digestion issues."
  },
  {
    id: 10,
    name: 'Tanuj Kabra',
    meta: '3 reviews',
    time: '10 months ago',
    stars: 5,
    isNew: false,
    avatar: 'T',
    avatarBg: '#7A6B58',
    text: 'I truly thankful to Dr. Somani\'s Homoeopathy. For a long time I had stomach problems and frequent sneezing in morning but now I feel much better. My digestive issue which I had been having for years was resolved in four to six months with homeopathy medicines. I no longer frequently fall sick.',
    ownerResponse: "Tanuj, Thank you for your valuable feedback."
  },
  {
    id: 11,
    name: 'Prashant Sulkshane',
    meta: 'Local Guide · 16 reviews',
    time: '6 months ago',
    stars: 5,
    isNew: false,
    avatar: 'P',
    avatarBg: '#4A7C5B',
    text: 'I had a truly wonderful experience at this homeopathy clinic. The doctor is extremely knowledgeable, patient, and takes the time to understand the root cause of the problem rather than just treating the symptoms. The consultation was detailed and personalized. The medicines prescribed were very effective.',
    ownerResponse: "Prashant, Thanks for your valuable feedback."
  },
  {
    id: 12,
    name: 'Dr. Suyog Somani',
    meta: 'Local Guide · 32 reviews · 36 photos',
    time: '10 months ago',
    stars: 5,
    isNew: false,
    avatar: 'S',
    avatarBg: '#7A5A6C',
    text: 'Dr. Kushal is an enthusiastic listener, energetically involved in understanding patients problem n addresses them patiently. His diagnosis is perfect n which helped solve many chronic diseases for many of my patients in n around Baner..! Keep up the good work n All the best for future aspirations..!',
    ownerResponse: "Dr Suyog, Thank you for your kind words!"
  },
  {
    id: 13,
    name: 'Vedika Raskar',
    meta: '6 reviews',
    time: '6 months ago',
    stars: 5,
    isNew: false,
    avatar: 'V',
    avatarBg: '#5C7A4A',
    text: 'I was facing issues with delayed periods, bloating, and weight fluctuations for almost a year, which was really stressful for me. I consulted Dr. Kushal Somani, and his homeopathic treatment has helped me a lot. Since the last three months, my menstrual cycle has been regular and on time, and I feel much better and healthier now.',
    ownerResponse: "Vedika, Thank you for sharing your experience with Dr Somani's Homoeopathy."
  },
  {
    id: 14,
    name: 'Dilip Malpani',
    meta: '2 reviews',
    time: '10 months ago',
    stars: 5,
    isNew: false,
    avatar: 'D',
    avatarBg: '#6B4A7C',
    text: 'For the past 4 to 5 years I was having frequent sneezing and allergic issues especially in the mornings. I had to depend on cetirizine tablets 2 to 3 times every week. Few months ago, I started treatment at Dr. Somani’s Homoeopathy and within 2 to 3 months of regular medicines, the sneezing has completely stopped. I haven’t taken cetirizine for months now.',
    ownerResponse: "Dilip, We are glad to know that homeopathic medicines gave you long lasting relief from your allergies."
  },
  {
    id: 15,
    name: 'Nutan Zawar',
    meta: '1 review',
    time: '7 months ago',
    stars: 5,
    isNew: false,
    avatar: 'N',
    avatarBg: '#7C4A5C',
    text: 'I was having problem of recurrent mouth ulcers even eating normal food was difficult there was overall indigestion since many years. Now after homoeopathy medicine by Dr. Somani sir I can happily enjoy my food and motions are clear daily that is a huge relief. I now suggest his clinic to all friends and family.',
    ownerResponse: "Nutan, Thank you for trusting Dr Somani’s Homoeopathy for your mouth ulcers treatment."
  },
  {
    id: 16,
    name: 'Rushikesh Suryawanshi',
    meta: '3 reviews',
    time: '10 months ago',
    stars: 5,
    isNew: false,
    avatar: 'R',
    avatarBg: '#4A6B5C',
    text: 'Dr. Kushal Somani is one of the best homeopathy doctors I have come across. He listens to the patient very patiently and understands the root cause of the problem before starting the treatment. I have experienced a noticeable improvement in my health after taking his medicines.',
    ownerResponse: "Rushikesh, Thanks for your kind words."
  },
  {
    id: 17,
    name: 'Akshay Soni',
    meta: 'Local Guide · 6 reviews',
    time: '10 months ago',
    stars: 5,
    isNew: false,
    avatar: 'A',
    avatarBg: '#6C7C4A',
    text: 'Dr. Kushal is really a great Doctor and provides effective homeopathic treatment. I had been suffering from hairfall since last many years. Been taking the treatment from Kushal since last 8 months and my hairfall has drastically reduced and hair health has improved as well. Homeopathy has really shown me good results.',
    ownerResponse: "Akshay, Thank you for choosing Dr. Somani’s Homoeopathy for your hairfall treatment."
  },
  {
    id: 18,
    name: 'Jagruti Bari',
    meta: '3 reviews',
    time: '9 months ago',
    stars: 5,
    isNew: false,
    avatar: 'J',
    avatarBg: '#7C5C4A',
    text: 'I have been associated with this homeopathy clinic since my childhood, for the past 25 years. Earlier, I was under the treatment of the doctor’s father, and for the last 5 years, I have been consulting Dr. Kushal Somani. I have always received excellent treatment for health issues like fever, tonsils, flu, and COVID recovery.',
    ownerResponse: "Jagruti, Thank you for consistently trusting Dr Somani's Homoeopathy."
  },
  {
    id: 19,
    name: 'Mayur Gavali',
    meta: '1 review · 2 photos',
    time: '7 months ago',
    stars: 5,
    isNew: false,
    avatar: 'M',
    avatarBg: '#5C4A7C',
    text: 'I took my mother for homeopathy treatment for her indigestion issue which was there since 6-7 years. She lost around 10kg in a year all investigation were normal. After starting Sir\'s medicine now she is eating and sleeping well we are very happy with the treatment now.',
    ownerResponse: "Mayur, Thank you for trusting Dr Somani's Homeopathy for your mother's recovery."
  },
  {
    id: 20,
    name: 'Madhuri Mundada',
    meta: '3 reviews',
    time: '10 months ago',
    stars: 5,
    isNew: false,
    avatar: 'M',
    avatarBg: '#4A7C6B',
    text: 'We have seen great improvement in my daughter Avika’s health with the homeopathic treatment. Earlier she used to get frequent viral infections and needed antibiotics often but after starting Dr. Kushal’s homeopathy medicines, her immunity has improved and antibiotic use has reduced a lot.',
    ownerResponse: "Madhuri, We really appreciate your feedback and trust in Dr. Somani’s Homoeopathy."
  },
  {
    id: 21,
    name: 'Mo alim Salmani',
    meta: '3 reviews',
    time: '8 months ago',
    stars: 5,
    isNew: false,
    avatar: 'M',
    avatarBg: '#7C6C4A',
    text: 'My name is Aalim. I had 3 alopecia areata spots: 2 on head and 1 on beard. The local application did not help in hair regrowth. I had belief in homeopathy since childhood so I took it again for alopecia and the patches are now covered with natural hair growth.',
    ownerResponse: "Alim, Thank you for your kind words! We’re delighted that your Alopecia patches improved with Homoeopathy."
  },
  {
    id: 22,
    name: 'Hassan Bhai',
    meta: '1 review',
    time: '4 months ago',
    stars: 5,
    isNew: false,
    avatar: 'H',
    avatarBg: '#586C7A',
    text: 'In the 1st consultation with Dr Kushal itself i realised his way of homeopathy is unique he explained me the details and assured me that I will be alright. And today after 11 months of his treatment i can surely say I am alright and happy. ☺️🙏',
    ownerResponse: "Hassan, Thank you for your valuable feedback and trust in Dr Somani's Homoeopathy."
  }
];

export default function InfiniteReviews() {
  const [selectedReview, setSelectedReview] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Prevent background scroll on modal open
  useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedReview]);

  // Clone array for seamless infinite looping
  const duplicatedReviews = [...reviewsData, ...reviewsData];

  return (
    <section
      id="patient-reviews"
      style={{
        background: '#F6F2E9',
        padding: 'clamp(36px, 5vw, 80px) 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#18231F',
        borderTop: '1px solid #DDD8CC',
        borderBottom: '1px solid #DDD8CC',
      }}
      aria-label="Patient Reviews and Google Testimonials"
    >
      {/* Decorative Leaf Graphic */}
      <div
        style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          opacity: 0.1,
          pointerEvents: 'none',
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="#173F32" strokeWidth="1.5">
          <path d="M10 90 Q 50 10, 90 20 Q 40 70, 10 90 Z" />
          <path d="M10 90 Q 50 50, 90 20" />
        </svg>
      </div>

      {/* Decorative Script Text (Top Left Outer Edge) */}
      <div
        className="mobile-hide-script"
        style={{
          position: 'absolute',
          top: '30px',
          left: 'clamp(20px, 4vw, 40px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "'Caveat', 'Playfair Display', cursive, serif",
            fontSize: 'clamp(1.2rem, 2.2vw, 2rem)',
            color: '#315744',
            opacity: 0.35,
            display: 'block',
            lineHeight: 1.1,
            transform: 'rotate(-5deg)',
          }}
        >
          Healing<br />People<br />Naturally
        </span>
      </div>

      {/* Decorative Script Text (Top Right Outer Edge) */}
      <div
        className="mobile-hide-script"
        style={{
          position: 'absolute',
          top: '35px',
          right: 'clamp(20px, 4vw, 40px)',
          pointerEvents: 'none',
          zIndex: 1,
          textAlign: 'right',
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "'Caveat', cursive, serif",
            fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
            color: '#C5964A',
            opacity: 0.45,
            display: 'block',
            lineHeight: 1.2,
          }}
        >
          Same People.<br />Real Results.
        </span>
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '100%', margin: '0 auto' }}>
        
        {/* SECTION HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 28px auto', padding: '0 16px' }}>
          
          {/* Eyebrow */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ width: '20px', height: '1px', background: '#C5964A' }}></span>
            <span
              className="mono"
              style={{
                fontSize: '0.68rem',
                color: '#C5964A',
                letterSpacing: '0.14em',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              PATIENT REVIEWS
            </span>
            <span style={{ width: '20px', height: '1px', background: '#C5964A' }}></span>
          </div>

          {/* Main Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-serif, "Playfair Display", Georgia, serif)',
              fontSize: 'clamp(1.8rem, 3.8vw, 3.2rem)',
              fontWeight: 500,
              color: '#18231F',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '10px',
            }}
          >
            Real Stories. <em style={{ fontStyle: 'italic', color: '#173F32', fontWeight: 400 }}>Real Trust.</em>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
              color: '#68706A',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Hear from our patients who have shared their experience with Dr. Somani’s Homoeopathy.
          </p>
        </div>

        {/* INFINITE CAROUSEL TRACK WITH EDGE FADE MASK */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            padding: '12px 0',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            style={{
              display: 'flex',
              gap: '20px',
              width: 'max-content',
              animation: 'infiniteScroll 55s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
              willChange: 'transform',
            }}
          >
            {duplicatedReviews.map((rev, index) => {
              const isLong = rev.text.length > 150;
              const displayText = isLong ? `${rev.text.slice(0, 145)}...` : rev.text;

              return (
                <article
                  key={`${rev.id}-${index}`}
                  style={{
                    width: 'clamp(280px, 78vw, 340px)',
                    background: '#FFFFFF',
                    borderRadius: '18px',
                    border: '1px solid #DDD8CC',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 6px 20px rgba(24,35,31,0.04)',
                    position: 'relative',
                    flexShrink: 0,
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  className="review-card-item"
                >
                  {/* Subtle Background Quote */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '60px',
                      left: '16px',
                      fontSize: '3.8rem',
                      fontFamily: 'Georgia, serif',
                      lineHeight: 1,
                      color: '#315744',
                      opacity: 0.08,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}
                  >
                    “
                  </span>

                  <div>
                    {/* Top Row: Avatar + Name + Google G Icon */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            background: rev.avatarBg,
                            color: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            fontFamily: 'Manrope, sans-serif',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                          }}
                        >
                          {rev.avatar}
                        </div>

                        <div>
                          <h3
                            style={{
                              margin: 0,
                              fontSize: '0.9rem',
                              fontWeight: 700,
                              color: '#18231F',
                              lineHeight: 1.2,
                            }}
                          >
                            {rev.name}
                          </h3>
                          <p
                            style={{
                              margin: '2px 0 0 0',
                              fontSize: '0.68rem',
                              color: '#68706A',
                            }}
                          >
                            {rev.meta}
                          </p>
                        </div>
                      </div>

                      {/* Google G Logo */}
                      <div style={{ width: '20px', height: '20px' }} aria-label="Google Review">
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Rating Stars & Time */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                      <RenderStars />
                      <span style={{ fontSize: '0.7rem', color: '#68706A' }}>
                        {rev.time}
                      </span>
                      {rev.isNew && (
                        <span
                          style={{
                            fontSize: '0.58rem',
                            background: '#E8F2ED',
                            color: '#173F32',
                            padding: '1px 6px',
                            borderRadius: '8px',
                            fontWeight: 700,
                            border: '1px solid #C5DEC8',
                          }}
                        >
                          New
                        </span>
                      )}
                    </div>

                    {/* Review Text Body */}
                    <p style={{ fontSize: '0.82rem', color: '#18231F', lineHeight: 1.55, margin: 0, position: 'relative', zIndex: 2 }}>
                      {displayText}
                      {isLong && (
                        <button
                          onClick={() => setSelectedReview(rev)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#173F32',
                            fontWeight: 700,
                            fontSize: '0.78rem',
                            cursor: 'pointer',
                            marginLeft: '5px',
                            padding: 0,
                            textDecoration: 'underline',
                          }}
                        >
                          Read more
                        </button>
                      )}
                    </p>
                  </div>

                  {/* Card Bottom Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      marginTop: '16px',
                      paddingTop: '10px',
                      borderTop: '1px solid #F0ECE1',
                      fontSize: '0.72rem',
                      color: '#68706A',
                    }}
                  >
                    <span style={{ cursor: 'pointer' }}>Like</span>
                    <span style={{ cursor: 'pointer' }}>Share</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM SLIM TRUST STRIP */}
        <div style={{ maxWidth: '960px', margin: '36px auto 0 auto', padding: '0 16px' }}>
          <div
            className="trust-strip-grid"
            style={{
              background: '#FFFFFF',
              border: '1px solid #DDD8CC',
              borderRadius: '16px',
              padding: '14px 20px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
              textAlign: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#18231F' }}>
                Trusted by Patients
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#18231F' }}>
                Gentle. Safe. Natural.
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#18231F' }}>
                Personalized Care
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#18231F' }}>
                Better Health.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FULL REVIEW READING MODAL */}
      {selectedReview && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(24, 35, 31, 0.78)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
          onClick={() => setSelectedReview(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '580px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              background: '#FAF8F5',
              borderRadius: '20px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
              border: '1px solid #DDD8CC',
              padding: 'clamp(18px, 3.5vw, 28px)',
              color: '#18231F',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedReview(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#EAE5DB',
                border: 'none',
                color: '#18231F',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                fontSize: '1.1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: selectedReview.avatarBg,
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                }}
              >
                {selectedReview.avatar}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#18231F' }}>
                  {selectedReview.name}
                </h3>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.72rem', color: '#68706A' }}>
                  {selectedReview.meta} · {selectedReview.time}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <RenderStars /> <span style={{ fontSize: '0.75rem', color: '#173F32', fontWeight: 600 }}>Verified Google Review</span>
            </div>

            {/* Full Review Text */}
            <p style={{ fontSize: '0.88rem', color: '#18231F', lineHeight: 1.6, marginBottom: '20px' }}>
              {selectedReview.text}
            </p>

            {/* Owner Response Box */}
            {selectedReview.ownerResponse && (
              <div
                style={{
                  background: '#EAE5DB',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  borderLeft: '4px solid #173F32',
                  marginBottom: '18px',
                }}
              >
                <p className="mono" style={{ margin: '0 0 4px 0', fontSize: '0.68rem', color: '#173F32', fontWeight: 700 }}>
                  Response from owner (Dr. Somani's Homoeopathy):
                </p>
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#18231F', lineHeight: 1.5 }}>
                  "{selectedReview.ownerResponse}"
                </p>
              </div>
            )}

            {/* Close CTA */}
            <div style={{ textAlign: 'right' }}>
              <button
                onClick={() => setSelectedReview(null)}
                style={{
                  background: '#173F32',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Close Review
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STYLES FOR ANIMATIONS & MOBILE COMPACTNESS */}
      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .review-card-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(23,63,50,0.1) !important;
        }
        @media (max-width: 640px) {
          #patient-reviews {
            padding: 32px 0 !important;
          }
          .mobile-hide-script {
            display: none !important;
          }
          .trust-strip-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            padding: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
