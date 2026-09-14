/* =============================================================
   VERIFIED CLINIC DATA — Dr Somani's Homoeopathy
   Source: https://drsomanihomoeopathy.com
   ============================================================= */

export const clinic = {
  name: "Dr Somani's Homoeopathy",
  tagline: "Think Homoeopathy, Think Somani.",
  statement: "Individualised homoeopathic care focused on understanding the person, their history and the underlying cause—not only the symptoms.",
  credibility: "Trusted care since 1998 · Pune · Jalgaon · Online across India",
  founded: 1998,
  whatsapp: "https://wa.me/919834172124",
  instagram: "https://instagram.com/somanikushal",
  logo: "/assets/logo.png",
};

export const doctors = [
  {
    id: "kushal",
    name: "Dr Kushal A Somani",
    qualifications: "M.D. (Hom)",
    role: "Consulting Homoeopath",
    regNo: "82170",
    experience: "27+ years",
    portrait: "/assets/dr-kushal-somani.jpg",
    introduction: "Dr Kushal A Somani brings more than 27 years of clinical experience in classical homoeopathy. His consultations focus on understanding the patient's history, constitution and lifestyle before selecting individualised care.",
    interests: [
      "Skin Diseases & Vitiligo",
      "Allergies",
      "Migraine",
      "PCOD",
      "Kidney Stones",
      "Acidity & Digestion",
      "Paediatric Illnesses",
      "Mental Health Care",
    ],
    locations: ["Pune", "Jalgaon", "Online"],
  },
  {
    id: "antim",
    name: "Dr Antim Somani",
    qualifications: "B.H.M.S",
    role: "Homoeopath",
    regNo: "40721",
    portrait: "/assets/dr-antim-somani.jpg",
    introduction: "Dr Antim Somani combines classical homoeopathic principles with a warm, attentive consultation style designed for patients of different ages.",
    interests: [
      "Allergies",
      "Acidity & Digestion",
      "Paediatric Illnesses",
      "Mental Health Care",
    ],
    locations: ["Pune", "Jalgaon", "Online"],
  },
];

export const conditions = [
  {
    id: "skin-vitiligo",
    label: "Skin Diseases & Vitiligo",
    shortLabel: "Skin & Vitiligo",
    description: "Specialised care for vitiligo, psoriasis, eczema, acne, fungal infections and recurring skin concerns.",
    images: [
      "/assets/disease_skin_care.png",
      "/assets/conditions/skin.jpg",
      "/assets/conditions/skin-2.jpg",
    ],
    doctorId: "kushal",
  },
  {
    id: "allergies",
    label: "Respiratory & Allergies",
    shortLabel: "Respiratory & Allergies",
    description: "Individualised care for allergic rhinitis, asthma, bronchitis, sinus and recurring seasonal allergies.",
    images: [
      "/assets/disease_respiratory.png",
      "/assets/conditions/allergies.jpg",
    ],
    doctorId: "kushal",
  },
  {
    id: "migraine",
    label: "Migraine",
    shortLabel: "Migraine",
    description: "Long-term management of recurring migraines and headaches.",
    images: ["/assets/conditions/migraine.jpg"],
    doctorId: "kushal",
  },
  {
    id: "pcod",
    label: "PCOD",
    shortLabel: "PCOD",
    description: "Individualised support for hormonal balance and cycle-related concerns.",
    images: ["/assets/conditions/pcod.jpg"],
    doctorId: "kushal",
  },
  {
    id: "kidney-stones",
    label: "Kidney Stones",
    shortLabel: "Kidney Stones",
    description: "Consultation and supportive management for kidney-stone concerns and recurrence.",
    images: ["/assets/conditions/kidney-stones.jpg"],
    doctorId: "kushal",
  },
  {
    id: "acidity",
    label: "Acidity & Digestion",
    shortLabel: "Acidity & Digestion",
    description: "Care for acidity, gas, bloating and digestive complaints.",
    images: ["/assets/conditions/acidity.jpg"],
    doctorId: "antim",
  },
  {
    id: "paediatric",
    label: "Paediatric Illnesses",
    shortLabel: "Paediatric",
    description: "Gentle, individualised care for children's recurring health concerns.",
    images: ["/assets/conditions/paediatric.jpg"],
    doctorId: "antim",
  },
  {
    id: "mental-health",
    label: "Mental Health Care",
    shortLabel: "Mental Health",
    description: "Supportive care for stress, anxiety and emotional well-being.",
    images: ["/assets/conditions/mental-health.jpg"],
    doctorId: "antim",
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
    city: "Online",
    address: "Video consultations are available across India.",
    phone: "+91 98341 72124",
    phoneHref: "tel:+919834172124",
    mapsUrl: null,
    whatsapp: "https://wa.me/919834172124",
  },
];

export const timelineChapters = [
  {
    year: "1998",
    heading: "The practice begins.",
    body: "Dr Kushal A Somani establishes the clinic, committing to classical homoeopathy in Jalgaon.",
  },
  {
    year: "Early 2000s",
    heading: "A growing circle of patients.",
    body: "Word spreads quietly. Patients arrive with chronic and complex cases — skin, migraine, allergies — seeking a slower, more considered kind of medicine.",
  },
  {
    year: "Second decade",
    heading: "Pune joins the practice.",
    body: "A second clinic opens at Wakad, Pune, making the practice accessible to a wider community across Maharashtra.",
  },
  {
    year: "Later years",
    heading: "Dr Antim Somani joins.",
    body: "Dr Antim Somani joins the practice, extending the same patient-first approach to paediatrics, digestion, lifestyle conditions and younger patients.",
  },
  {
    year: "Present",
    heading: "Online, across India.",
    body: "Video consultations become available nationwide — the same unhurried, constitutionally-focused care, wherever the patient is.",
  },
  {
    year: "27+ years",
    heading: "27+ years of listening before prescribing.",
    body: null,
    isCoda: true,
  },
];

export const consultationSteps = [
  {
    n: "01",
    title: "Book your slot",
    body: "Request a suitable date and time through WhatsApp.",
  },
  {
    n: "02",
    title: "Confirm and pay",
    body: "Confirm the consultation and complete the fee payment through UPI.",
  },
  {
    n: "03",
    title: "Video consultation",
    body: "Discuss the case with the doctor through a video call.",
  },
  {
    n: "04",
    title: "Medicines and follow-up",
    body: "Receive prescription guidance and follow-up communication through WhatsApp.",
  },
];
