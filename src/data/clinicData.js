/* =============================================================
   VERIFIED CLINIC DATA — Dr Somani's Homoeopathy
   Source: https://drsomanihomoeopathy.com
   ============================================================= */

export const clinic = {
  name: "Dr Somani's Homoeopathy",
  tagline: "Think Homoeopathy, Think Somani.",
  statement: "Individualised homoeopathic care focused on understanding the person, their history and the underlying cause, not only the symptoms.",
  credibility: "A family practice · Three experienced doctors · Pune · Jalgaon · Online across India & International",
  founded: 1998,
  phone: "+91 98341 72124",
  phoneHref: "tel:+919834172124",
  whatsapp: "https://wa.me/919834172124",
  instagram: "https://instagram.com/somanikushal",
  logo: "/assets/somani-logo.png",
};

export const clinicInfo = clinic;

export const trustStats = [
  { value: "28+",    label: "Years of Service",       sub: "Since 1998" },
  { value: "51,489", label: "Satisfied Patients",     sub: "Across India & Abroad" },
  { value: "50+",    label: "Specialised Treatments", sub: "Classical Homoeopathy & Ayurveda" },
  { value: "2",      label: "Modern Clinics",         sub: "Wakad, Pune & Jalgaon" },
  { value: "Safe",   label: "Natural Healing",        sub: "Side-effect-free Care" },
];

export const doctors = [
  {
    id: "antim",
    name: "Dr Antim Somani",
    qualifications: "B.H.M.S",
    role: "Founder & Consulting Homoeopath",
    generation: "First Generation",
    regNo: "40721",
    experience: "28+ years",
    portrait: "/assets/dr-antim-somani.jpg",
    introduction: "Dr. Antim Somani is the founder of Dr Somani’s Homoeopathy, established in 1998. With over 28 years of clinical experience, he has dedicated his practice to providing personalised homoeopathic care to patients in Jalgaon and across India through online consultations. Known for his gentle and compassionate approach, Dr. Somani believes in listening carefully to every patient, understanding their concerns and providing individualised treatment. His clinical experience spans both acute and chronic health conditions. During the COVID-19 pandemic, he also played an active role in patient care, helping individuals through a challenging time. In recognition of his contributions, he has received multiple awards, including the Khandesh Gaurav Puraskar. His practice is built on the values of trust, empathy and attentive care, which continue to guide his work with patients.",
    interests: [
      "Skin Diseases & Vitiligo",
      "Allergies & Asthma",
      "Migraine",
      "PCOD & Hormonal Health",
      "Kidney Stones",
      "Acidity & Digestion",
      "Paediatric Illnesses",
      "Chronic Case Management",
    ],
    locations: ["Jalgaon", "Pune", "Online"],
  },
  {
    id: "kushal",
    name: "Dr Kushal Antim Somani",
    qualifications: "M.D. (Hom)",
    role: "Consulting Homoeopath",
    generation: "Second Generation",
    regNo: "82170",
    experience: "Second Generation Physician",
    portrait: "/assets/dr-kushal-somani.jpg",
    introduction: "Carrying forward a legacy of care, with a modern and holistic approach. Dr. Kushal Somani is a second-generation Homoeopathic physician continuing the legacy of Dr. Antim Somani. He completed his medical education at Dhondumama Sathe Homoeopathic Medical College, Pune and is now based in Pune, where he is passionate about providing personalised care and building meaningful, long-term relationships with his patients. With a special interest in mental health and emotional well-being, Dr. Kushal is known for his calm, composed and approachable nature, helping patients feel comfortable sharing their concerns. His practice focuses on understanding each individual’s emotional and physical health needs through a holistic perspective. Alongside his clinical practice, Dr. Kushal has extended his reach through online consultations, helping patients across India and internationally. He also contributes to health education and community awareness by conducting sessions for corporate professionals in Pune on general Homoeopathic awareness and for teenagers on mental health, emotional well-being, personal growth and holistic development.",
    interests: [
      "Mental Health Care",
      "Emotional Well-being",
      "Allergies & Respiratory",
      "Acidity & Digestion",
      "Skin & Hair Care",
      "Corporate Wellness",
    ],
    locations: ["Wakad, Pune", "Jalgaon", "Online"],
  },
  {
    id: "minal",
    name: "Dr Minal Somani",
    qualifications: "B.A.M.S",
    role: "Ayurvedic Consultant",
    generation: "Ayurvedic Care",
    regNo: "I-3124-A-1",
    experience: "28+ years",
    portrait: "/assets/dr-minal-somani.jpg",
    introduction: "Dr. Minal Somani is an experienced Ayurvedic practitioner who has been practising in Jalgaon for over 28 years. Having completed her Ayurvedic education in Pune, she believes in a holistic approach to healthcare, focusing on treating the individual as a whole and addressing the underlying causes of health concerns. With a special interest in women’s health, particularly PCOD and other gynaecological concerns, she combines her clinical experience with the principles of Ayurveda to provide personalised care. Her approach emphasises overall well-being, natural healing and long-term health.",
    interests: [
      "Women's Health",
      "PCOD & Hormonal Balance",
      "Gynaecological Care",
      "Holistic Healing",
      "Ayurvedic Wellness",
    ],
    locations: ["Jalgaon", "Online"],
  },
];

export const conditions = [
  {
    id: "skin-vitiligo",
    label: "Skin Diseases & Vitiligo",
    shortLabel: "Skin & Vitiligo",
    description: "Specialised care for vitiligo, psoriasis, eczema, acne, fungal infections and recurring skin concerns.",
    images: ["/assets/conditions/skin-care.jpg"],
    doctorId: "antim",
  },
  {
    id: "allergies",
    label: "Respiratory & Allergies",
    shortLabel: "Respiratory & Allergies",
    description: "Individualised care for allergic rhinitis, asthma, bronchitis, sinus and recurring seasonal allergies.",
    images: ["/assets/conditions/allergy-care.jpg"],
    doctorId: "antim",
  },
  {
    id: "migraine",
    label: "Migraine & Headache",
    shortLabel: "Migraine",
    description: "Long-term constitutional management of recurring migraines and chronic headaches.",
    images: ["/assets/conditions/migraine-care-v2.jpg"],
    doctorId: "kushal",
  },
  {
    id: "pcod",
    label: "PCOD & Women's Health",
    shortLabel: "PCOD & Women's Health",
    description: "Individualised Ayurvedic and Homoeopathic support for hormonal balance and gynaecological health.",
    images: ["/assets/conditions/pcod-care-v2.jpg"],
    doctorId: "minal",
  },
  {
    id: "kidney-stones",
    label: "Kidney Stones",
    shortLabel: "Kidney Stones",
    description: "Consultation and supportive management for kidney-stone dissolution and recurrence prevention.",
    images: ["/assets/conditions/kidney-care-v2.jpg"],
    doctorId: "antim",
  },
  {
    id: "acidity",
    label: "Acidity & Digestion",
    shortLabel: "Acidity & Digestion",
    description: "Holistic care for chronic acidity, gas, bloating, IBS and digestive complaints.",
    images: ["/assets/conditions/digestion-care-v2.jpg"],
    doctorId: "kushal",
  },
  {
    id: "paediatric",
    label: "Paediatric Illnesses",
    shortLabel: "Paediatric Care",
    description: "Gentle, safe, individualised care for children's recurring immune and health concerns.",
    images: ["/assets/conditions/paediatric-care-v2.jpg"],
    doctorId: "kushal",
  },
  {
    id: "mental-health",
    label: "Mental Health & Emotional Well-being",
    shortLabel: "Mental Health",
    description: "Supportive constitutional care for stress, anxiety, sleep issues and emotional well-being.",
    images: ["/assets/conditions/mental-health-care.jpg"],
    doctorId: "kushal",
  },
];

export const locations = [
  {
    id: "pune",
    city: "Wakad, Pune",
    address: "One Place Wakad, Office No. E-105, First Floor, Pink City Road, above Sanghvi Jewellers, Wakad, Pune – 411057",
    phone: "+91 98341 72124",
    phoneHref: "tel:+919834172124",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=One+Place+Wakad+Pink+City+Road+Pune+411057",
    whatsapp: "https://wa.me/919834172124",
  },
  {
    id: "jalgaon",
    city: "Jalgaon",
    address: "First Floor, Chitra Chowk – JMP Market, above Agarwal Sweet Mart, Jalgaon – 425001",
    phone: "+91 92702 78668",
    phoneHref: "tel:+919270278668",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Chitra+Chowk+JMP+Market+Jalgaon+425001",
    whatsapp: "https://wa.me/919834172124",
  },
  {
    id: "online",
    city: "Online Consultations",
    address: "Video consultations available across India, USA, Canada, Germany & Worldwide.",
    phone: "+91 98341 72124",
    phoneHref: "tel:+919834172124",
    mapsUrl: null,
    whatsapp: "https://wa.me/919834172124",
  },
];

export const timelineChapters = [
  {
    year: "1998",
    heading: "Dr Antim Somani founds the practice.",
    body: "Dr Antim Somani establishes the clinic in Jalgaon, a first-generation commitment to classical, patient-first homoeopathy.",
  },
  {
    year: "Early 2000s",
    heading: "A growing circle of trust.",
    body: "Word spreads quietly. Patients arrive with chronic cases seeking a slower, more considered kind of medicine.",
  },
  {
    year: "Expanding Care",
    heading: "Pune clinic opens at Wakad.",
    body: "A second clinic opens at Wakad, Pune, making the practice accessible to a wider community across Maharashtra.",
  },
  {
    year: "Integrative Team",
    heading: "Three doctors, holistic care.",
    body: "Dr Kushal Antim Somani (M.D. Hom) and Dr Minal Somani (B.A.M.S) bring academic depth, mental health awareness, and Ayurvedic expertise to the family practice.",
  },
  {
    year: "Present",
    heading: "Online consultations across India and globally.",
    body: "Offering video consultations across India, USA, Canada, Germany & worldwide with doorstep medicine delivery.",
  },
  {
    year: "28+ years",
    heading: "28+ years of listening before prescribing.",
    body: null,
    isCoda: true,
  },
];

export const consultationSteps = [
  {
    n: "01",
    title: "Book your slot",
    body: "Request a suitable date and time through WhatsApp or website form.",
  },
  {
    n: "02",
    title: "Confirm and pay",
    body: "Confirm the consultation and complete the fee payment securely through UPI.",
  },
  {
    n: "03",
    title: "Video consultation",
    body: "Discuss the case with the doctor through a video or in-clinic consultation.",
  },
  {
    n: "04",
    title: "Medicines and follow-up",
    body: "Receive prescription guidance, home delivery of medicines, and follow-up care.",
  },
];
