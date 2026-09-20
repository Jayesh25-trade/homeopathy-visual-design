import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const reviewsList = [
  {
    name: 'Jayesh Mal',
    meta: 'Local Guide · 8 reviews · 4 photos',
    time: '2 weeks ago',
    text: 'I had been suffering from a cough for almost a month. I contacted Dr. Kushal Somani online from Pune, while I am from Mumbai. He understood my issue ,guided me properly and sent me the medicines. Within 8 days, my cough was completely gone. Thank you Dr Kushal',
    ownerResponse: "Jayesh, Thank you for trusting Dr Somani's Homoeopathy for your health concerns. Always wishing you the best of health."
  },
  {
    name: 'Ankit Purohit',
    meta: '11 reviews · 1 photo',
    time: '2 months ago',
    text: 'We are incredibly grateful to Dr. Kushal Somani for the wonderful treatment and care he provided for our son. Before starting his homeopathy treatment, our son was facing several severe challenges: Sleep Issues, Speech Delays, Social Anxiety. After undergoing treatment with Dr. Kushal Somani, we have seen a remarkable transformation. All of these problems have been resolved. Our son is now sleeping peacefully, communicating well, and socializing happily with others.',
    ownerResponse: "Ankit, Thank you for trusting Dr. Somani's Homoeopathy for your son's treatment. We're glad to know that homoeopathy helped him."
  },
  {
    name: 'Kanhaiya Tela',
    meta: '5 reviews · 1 photo',
    time: '3 weeks ago',
    text: 'I would sincerely like to thank Dr. Kushal Somani for helping me with my piles problem. I was quite परेशान and uncomfortable because of the issue, but after taking the homeopathic treatment and medicines prescribed by Dr. Kushal Somani, I gradually started feeling much better and have now recovered. What I really appreciated was the doctor\'s patient approach, understanding, and personal attention throughout the treatment.',
    ownerResponse: "Kanhaiya, Thank you for your detailed feedback. We are happy to know that homoeopathic medicines helped you with your complaints. Always wishing you the best of health."
  },
  {
    name: 'Siddhi Jain',
    meta: 'Local Guide · 10 reviews · 23 photos',
    time: '6 months ago',
    text: 'I am extremely grateful to Dr. Kushal Somani for the incredible care and support throughout my treatment. I had been struggling with my illness for a long time, and nothing seemed to give me lasting relief. After starting homeopathic treatment with Dr. Kushal, I began noticing steady improvement in my health. He carefully listened to all my symptoms, explained the treatment clearly, and gave me confidence and hope.',
    ownerResponse: "Siddhi, Thank you for trusting Dr Somani's Homoeopathy! Always here to support your healthy journey."
  },
  {
    name: 'Radhika Joshi',
    meta: 'Local Guide · 29 reviews · 27 photos',
    time: '6 months ago',
    text: 'I consulted Dr Kushal Somani for my skin issue & the experience has been very positive. He patiently listened to my concerns and explained the treatment in a very clear and reassuring way. The medicines prescribed have been gentle and I have started noticing improvement in my skin. What I really appreciated was the doctor’s holistic approach and the time taken to understand the root cause.',
    ownerResponse: "Radhika, Thank you for sharing your experience with Dr Somani’s Homoeopathy! We’re glad to know that homoeopathy helped you for your skin ailments."
  },
  {
    name: 'Namrata Mahamunkar',
    meta: '2 reviews',
    time: '4 weeks ago',
    text: 'I am very thankful to Dr. Kushal for his kind care and treatment. I was suffering from leg pain and shoulder pain related to low calcium density, and after taking his homeopathic treatment, I experienced significant relief. He listens patiently, explains everything clearly, and provides very caring treatment. I truly appreciate his dedication.',
    ownerResponse: "Namrata, Thank you for your kind words. We are glad that your leg pain and shoulder pain is now better with homoeopathy."
  },
  {
    name: 'Dhanendra kumar Bhurtiya',
    meta: '1 review',
    time: '11 months ago',
    text: 'I had been suffering from Allergic Rhinitis for almost 6 to 7 years. Frequent sneezing, runny nose and constant discomfort had become a part of my daily life. I tried many treatments earlier but nothing gave me lasting relief. Then I started Homeopathic treatment with Dr. Somani and within a few months, I began noticing real improvement. After 6 months of regular treatment I am now completely free from my allergic rhinitis symptoms.',
    ownerResponse: "Dhanendra, Thank you for choosing Dr. Somani’s Homoeopathy. Your recovery from Allergic Rhinitis makes us really happy!"
  },
  {
    name: 'Seema Dhage',
    meta: '3 reviews',
    time: '3 weeks ago',
    text: 'I was suffering from severe hairfall and I was concerned about the quality and growth of my hair. Then I came across Dr. Somani\'s Homeopathy through a friend\'s reference. I have seen a significant difference in my hairfall it is now much better. Also, my daughter has started taking homeopathy to improve her immunity.',
    ownerResponse: "Seema, Thank you for your trust in homoeopathy."
  },
  {
    name: 'Chaitali Bihani',
    meta: '2 reviews',
    time: '10 months ago',
    text: 'I would like to express my sincere appreciation to Dr. Kushal Somani for the exceptional care. I have been struggling with chronic cold, cough, and asthma for the past 15 years. Despite consulting multiple doctors and using regular medications and asthma inhalers, I saw very little improvement. However, everything changed after I met Dr. Somani six months ago. My symptoms have reduced drastically, and use of pumps and inhalers has been completely reduced.',
    ownerResponse: "Chaitali, We are delighted to hear about your breathing improvement!"
  },
  {
    name: 'Mukund Chandak',
    meta: 'Local Guide · 7 reviews · 1 photo',
    time: '1 month ago',
    text: 'I was facing digestion and vomiting issues since long time, whenever i was having a food after 2 or 3 chapatis i used to feel like I will vomit and i couldn\'t have enough food after that. I have consulted this with Dr. Kushal Somani and I am now cured with that issue. The homeopathy medicine really worked for me.',
    ownerResponse: "Mukund, Thank you for sharing your experience. We are glad your digestion is back to normal."
  },
  {
    name: 'Tanuj Kabra',
    meta: '3 reviews',
    time: '10 months ago',
    text: 'I truly thankful to Dr. Somani\'s Homoeopathy. For a long time I had stomach problems and frequent sneezing in morning but now I feel much better. My digestive issue which I had been having for years was resolved in four to six months with homeopathy medicines. I no longer frequently fall sick.',
    ownerResponse: "Tanuj, Thank you for trusting our classical treatment."
  },
  {
    name: 'Prashant Sulkshane',
    meta: 'Local Guide · 16 reviews',
    time: '6 months ago',
    text: 'I had a truly wonderful experience at this homeopathy clinic. The doctor is extremely knowledgeable, patient, and takes the time to understand the root cause of the problem rather than just treating the symptoms. The consultation was detailed and personalized. The medicines prescribed were very effective.',
    ownerResponse: "Prashant, We appreciate your recommendation!"
  },
  {
    name: 'Dr. Suyog Somani',
    meta: 'Local Guide · 32 reviews · 36 photos',
    time: '10 months ago',
    text: 'Dr. Kushal is an enthusiastic listener, energetically involved in understanding patients problem n addresses them patiently. His diagnosis is perfect n which helped solve many chronic diseases for many of my patients in n around Baner..! Keep up the good work n All the best for future aspirations..!',
    ownerResponse: "Dr. Suyog, Thank you for your kind words and trust."
  },
  {
    name: 'Vedika Raskar',
    meta: '6 reviews',
    time: '6 months ago',
    text: 'I was facing issues with delayed periods, bloating, and weight fluctuations for almost a year, which was really stressful for me. I consulted Dr. Kushal Somani, and his homeopathic treatment has helped me a lot. Since the last three months, my menstrual cycle has been regular and on time, and I feel much better and healthier now.',
    ownerResponse: "Vedika, We are happy to know homoeopathy brought balance to your health."
  },
  {
    name: 'Dilip Malpani',
    meta: '2 reviews',
    time: '10 months ago',
    text: 'For the past 4 to 5 years I was having frequent sneezing and allergic issues especially in the mornings. I had to depend on cetirizine tablets 2 to 3 times every week. Few months ago, I started treatment at Dr. Somani’s Homoeopathy and within 2 to 3 months of regular medicines, the sneezing has completely stopped. I haven’t taken cetirizine for months now.',
    ownerResponse: "Dilip, Thank you! Stopping recurring allergy medicines naturally is our primary focus."
  },
  {
    name: 'Nutan Zawar',
    meta: '1 review',
    time: '7 months ago',
    text: 'I was having problem of recurrent mouth ulcers even eating normal food was difficult there was overall indigestion since many years. Now after homoeopathy medicine by Dr. Somani sir I can happily enjoy my food and motions are clear daily that is a huge relief. I now suggest his clinic to all friends and family.',
    ownerResponse: "Nutan, We are delighted to hear you can enjoy your meals comfortably now!"
  },
  {
    name: 'Rushikesh Suryawanshi',
    meta: '3 reviews',
    time: '10 months ago',
    text: 'Dr. Kushal Somani is one of the best homeopathy doctors I have come across. He listens to the patient very patiently and understands the root cause of the problem before starting the treatment. I have experienced a noticeable improvement in my health after taking his medicines.',
    ownerResponse: "Rushikesh, Thank you for sharing your positive feedback!"
  },
  {
    name: 'Akshay Soni',
    meta: 'Local Guide · 6 reviews',
    time: '10 months ago',
    text: 'Dr. Kushal is really a great Doctor and provides effective homeopathic treatment. I had been suffering from hairfall since last many years. Been taking the treatment from Kushal since last 8 months and my hairfall has drastically reduced and hair health has improved as well. Homeopathy has really shown me good results.',
    ownerResponse: "Akshay, Thank you! Consistent classical treatment yields lasting hair health."
  },
  {
    name: 'Jagruti Bari',
    meta: '3 reviews',
    time: '9 months ago',
    text: 'I have been associated with this homeopathy clinic since my childhood, for the past 25 years. Earlier, I was under the treatment of the doctor’s father, and for the last 5 years, I have been consulting Dr. Kushal Somani. I have always received excellent treatment for health issues like fever, tonsils, flu, and COVID recovery.',
    ownerResponse: "Jagruti, Treating 2 generations of your family over 25 years is our greatest honor."
  },
  {
    name: 'Mayur Gavali',
    meta: '1 review · 2 photos',
    time: '7 months ago',
    text: 'I took my mother for homeopathy treatment for her indigestion issue which was there since 6-7 years. She lost around 10kg in a year all investigation were normal. After starting Sir\'s medicine now she is eating and sleeping well we are very happy with the treatment now.',
    ownerResponse: "Mayur, We are so happy to hear your mother is eating and sleeping peacefully!"
  },
  {
    name: 'Madhuri Mundada',
    meta: '3 reviews',
    time: '10 months ago',
    text: 'We have seen great improvement in my daughter Avika’s health with the homeopathic treatment. Earlier she used to get frequent viral infections and needed antibiotics often but after starting Dr. Kushal’s homeopathy medicines, her immunity has improved and antibiotic use has reduced a lot.',
    ownerResponse: "Madhuri, Strengthening pediatric immunity naturally without antibiotics is our goal."
  },
  {
    name: 'Mo alim Salmani',
    meta: '3 reviews',
    time: '8 months ago',
    text: 'My name is Aalim. I had 3 alopecia areata spots: 2 on head and 1 on beard. The local application did not help in hair regrowth. I had belief in homeopathy since childhood so I took it again for alopecia and the patches are now covered with natural hair growth.',
    ownerResponse: "Aalim, Thank you for trusting classical homoeopathy for Alopecia."
  },
  {
    name: 'Hassan Bhai',
    meta: '1 review',
    time: '4 months ago',
    text: 'In the 1st consultation with Dr Kushal itself i realised his way of homeopathy is unique he explained me the details and assured me that I will be alright. And today after 11 months of his treatment i can surely say I am alright and happy. ☺️🙏',
    ownerResponse: "Hassan, Thank you for your warm words! Always wishing you continued health."
  }
];

const accents = ["ink-coral", "ink-violet", "ink-green", "ink-blue", "ink-gold"];
const rotations = ["tilt-left", "tilt-right", "tilt-soft-left", "tilt-soft-right"];

function GoogleMark() {
  return <span className="google-mark-notebook" aria-label="Google">G</span>;
}

function ReviewCard({ review, index, duplicate = false, onClick }) {
  return (
    <article
      className={`review-card-notebook ${rotations[index % rotations.length]}`}
      aria-hidden={duplicate || undefined}
      onClick={() => onClick(review)}
    >
      <div className="paper-holes-notebook" aria-hidden="true" />
      <header className="review-card__header-notebook">
        <div className={`review-card__account-notebook ${accents[index % accents.length]}`}>
          <span className="review-card__stars-notebook" aria-label="5 out of 5 stars">★★★★★</span>
          <strong>{review.name}</strong>
          <small>{review.meta}</small>
        </div>
        <GoogleMark />
      </header>
      <blockquote>{review.text}</blockquote>
      <footer>
        <span>{review.time}</span>
        <span className="verified-mark-notebook">verified</span>
      </footer>
    </article>
  );
}

function Doodles() {
  return (
    <div className="doodles" aria-hidden="true">
      <span className="doodle doodle-heart">♡</span>
      <span className="doodle doodle-spark">✦</span>
      <span className="doodle doodle-loop">↝</span>
      <span className="doodle doodle-plus">＋</span>
      <span className="doodle doodle-small-heart">♥</span>
    </div>
  );
}

export default function InfiniteReviews() {
  const { t, lang } = useLanguage();
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedReview]);

  return (
    <section id="real-patients" className="review-page-notebook" aria-label="Patient Reviews Notebook">
      <Doodles />
      
      <div className="review-intro-notebook">
        <span className="eyebrow-notebook">
          {lang === 'mr' ? 'रुग्णांचे अभिप्राय · गूगल रिव्ह्यू' : lang === 'hi' ? 'मरीजों की समीक्षाएं · गूगल रिव्यू' : 'Patient notes · Google reviews'}
        </span>
        <h2>
          {lang === 'mr' ? 'आपुलकीचे शब्द, ' : lang === 'hi' ? 'सच्चे शब्द, ' : 'Kind words, '}
          <em>{lang === 'mr' ? 'मनापासून.' : lang === 'hi' ? 'दिल से.' : 'kept close.'}</em>
        </h2>
        <p>
          {lang === 'mr'
            ? 'डॉ. अंतिम आणि डॉ. कुशल सोमाणी यांच्या रुग्णांनी सामायिक केलेले खरे अनुभव.'
            : lang === 'hi'
            ? 'डॉ. अंतिम और डॉ. कुशल सोमानी के मरीजों द्वारा साझा किए गए वास्तविक अनुभव।'
            : 'Real experiences shared by patients of Dr. Antim & Dr. Kushal Somani.'}
        </p>
        <div className="scribble-notebook" aria-hidden="true" />
      </div>

      <div className="review-loop-notebook" aria-label="Patient reviews carousel">
        <div className="review-track-notebook">
          {reviewsList.map((review, index) => (
            <ReviewCard
              key={`first-${review.name}`}
              review={review}
              index={index}
              onClick={setSelectedReview}
            />
          ))}
          {reviewsList.map((review, index) => (
            <ReviewCard
              key={`second-${review.name}`}
              review={review}
              index={index}
              duplicate
              onClick={setSelectedReview}
            />
          ))}
        </div>
      </div>

      <p className="loop-note-notebook">
        <span aria-hidden="true">←</span>{' '}
        {lang === 'mr'
          ? 'रिव्ह्यू वाचण्यासाठी माऊस कार्डवर ठेवा'
          : lang === 'hi'
          ? 'रिव्यू पढ़ने के लिए माउस कार्ड पर रखें'
          : 'Hover to pause & read every note'}{' '}
        <span aria-hidden="true">→</span>
      </p>

      <div className="review-footer-notebook" aria-label="Review highlights">
        <span>23 {lang === 'mr' ? 'रुग्ण अनुभव' : lang === 'hi' ? 'मरीजों के अनुभव' : 'patient stories'}</span>
        <i aria-hidden="true" />
        <span>5-Star {lang === 'mr' ? 'गूगल अनुभव' : lang === 'hi' ? 'गूगल अनुभव' : 'experiences'}</span>
        <i aria-hidden="true" />
        <span>{lang === 'mr' ? 'काळजीपूर्वक उपचार' : lang === 'hi' ? 'व्यक्तिगत देखभाल' : 'Thoughtful care'}</span>
      </div>

      {/* Review Modal */}
      {selectedReview && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedReview(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(28, 38, 33, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FDFBF7',
              borderRadius: '16px',
              maxWidth: '560px',
              width: '100%',
              padding: '32px 28px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
              position: 'relative',
              border: '1px solid #E2DAD0',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <button
              onClick={() => setSelectedReview(null)}
              aria-label="Close review"
              style={{
                position: 'absolute',
                top: '18px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '1.6rem',
                cursor: 'pointer',
                color: '#68736D',
                lineHeight: 1,
              }}
            >
              ×
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div>
                <span style={{ color: '#EA4335', fontSize: '1.1rem', letterSpacing: '2px', display: 'block' }}>★★★★★</span>
                <strong style={{ fontSize: '1.2rem', color: '#1C2621', display: 'block', marginTop: '4px' }}>{selectedReview.name}</strong>
                <small style={{ color: '#68736D', fontSize: '0.8rem' }}>{selectedReview.meta} · {selectedReview.time}</small>
              </div>
            </div>

            <p style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: '1rem',
              color: '#1C2621',
              lineHeight: 1.7,
              marginBottom: '24px',
              background: 'repeating-linear-gradient(to bottom, transparent 0 31px, rgba(140, 130, 115, 0.2) 31px 32px)',
              paddingBottom: '8px',
            }}>
              "{selectedReview.text}"
            </p>

            {selectedReview.ownerResponse && (
              <div
                style={{
                  background: '#F4F0E6',
                  padding: '16px 18px',
                  borderRadius: '10px',
                  borderLeft: '4px solid #17392E',
                  marginBottom: '20px',
                }}
              >
                <p style={{ margin: '0 0 6px 0', fontSize: '0.75rem', color: '#17392E', fontWeight: 700, textTransform: 'uppercase' }}>
                  {lang === 'mr' ? 'डॉ. सोमाणी यांचेकडून प्रतिसाद:' : lang === 'hi' ? 'डॉ. सोमानी की प्रतिक्रिया:' : "Response from owner (Dr. Somani's Homoeopathy):"}
                </p>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#2A3630', lineHeight: 1.5, fontStyle: 'italic' }}>
                  "{selectedReview.ownerResponse}"
                </p>
              </div>
            )}

            <div style={{ textAlign: 'right' }}>
              <button
                onClick={() => setSelectedReview(null)}
                style={{
                  background: '#17392E',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '24px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {t('common.close') || 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
