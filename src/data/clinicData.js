/* =============================================================
   VERIFIED CLINIC DATA — Dr Somani's Homoeopathy
   Source: https://drsomanihomoeopathy.com
   ============================================================= */

export const clinic = {
  name: "Dr Somani's Homoeopathy",
  tagline: "Think Homoeopathy, Think Somani.",
  statement: "Individualised homoeopathic care focused on understanding the person, their history and the underlying cause—not only the symptoms.",
  credibility: "A family practice · Two generations · Pune · Jalgaon · Online across India",
  founded: 1998,
  whatsapp: "https://wa.me/919834172124",
  instagram: "https://instagram.com/somanikushal",
  logo: "/assets/logo.png",
};

export const trustStats = [
  { value: "27+",  label: "Years of Service",           sub: "Since 1998" },
  { value: "50K+", label: "Patients Treated",           sub: "Across India" },
  { value: "8",    label: "Specialised Treatments",     sub: "Classical Homoeopathy" },
  { value: "2",    label: "Clinics",                    sub: "Pune & Jalgaon" },
  { value: "100%", label: "Side-effect-free Care",      sub: "Safe for all ages" },
];

export const doctors = [
  {
    id: "antim",
    name: "Dr Antim Somani",
    qualifications: "B.H.M.S",
    role: "Founder & Consulting Homoeopath",
    generation: "First Generation",
    regNo: "40721",
    experience: "27+ years",
    portrait: "/assets/dr-antim-somani.jpg",
    introduction: "Dr Antim Somani founded the practice in 1998 with a single conviction: listen to the patient first, prescribe second. Over 27 years he has built a reputation for careful, classical homoeopathy — unhurried consultations that treat the person, not merely the complaint.",
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
    id: "kushal",
    name: "Dr Kushal A Somani",
    qualifications: "M.D. (Hom)",
    role: "Consulting Homoeopath",
    generation: "Second Generation",
    regNo: "82170",
    portrait: "/assets/dr-kushal-somani.jpg",
    introduction: "Dr Kushal A Somani carries forward his father's legacy as the second generation of the practice. Holding an M.D. in Homoeopathy, he brings academic depth and a contemporary approach to classical principles — extending the family's patient-first care to a new generation of patients.",
    interests: [
      "Allergies",
      "Acidity & Digestion",
      "Paediatric Illnesses",
      "Mental Health Care",
      "Skin Diseases & Vitiligo",
      "Migraine",
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
    label: "Migraine",
    shortLabel: "Migraine",
    description: "Long-term management of recurring migraines and headaches.",
    images: ["/assets/conditions/migraine-care-v2.jpg"],
    doctorId: "antim",
  },
  {
    id: "pcod",
    label: "PCOD",
    shortLabel: "PCOD",
    description: "Individualised support for hormonal balance and cycle-related concerns.",
    images: ["/assets/conditions/pcod-care-v2.jpg"],
    doctorId: "antim",
  },
  {
    id: "kidney-stones",
    label: "Kidney Stones",
    shortLabel: "Kidney Stones",
    description: "Consultation and supportive management for kidney-stone concerns and recurrence.",
    images: ["/assets/conditions/kidney-care-v2.jpg"],
    doctorId: "antim",
  },
  {
    id: "acidity",
    label: "Acidity & Digestion",
    shortLabel: "Acidity & Digestion",
    description: "Care for acidity, gas, bloating and digestive complaints.",
    images: ["/assets/conditions/digestion-care-v2.jpg"],
    doctorId: "kushal",
  },
  {
    id: "paediatric",
    label: "Paediatric Illnesses",
    shortLabel: "Paediatric",
    description: "Gentle, individualised care for children's recurring health concerns.",
    images: ["/assets/conditions/paediatric-care-v2.jpg"],
    doctorId: "kushal",
  },
  {
    id: "mental-health",
    label: "Mental Health Care",
    shortLabel: "Mental Health",
    description: "Supportive care for stress, anxiety and emotional well-being.",
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
    heading: "Dr Antim Somani founds the practice.",
    body: "Dr Antim Somani establishes the clinic in Jalgaon — a first-generation commitment to classical, patient-first homoeopathy.",
  },
  {
    year: "Early 2000s",
    heading: "A growing circle of trust.",
    body: "Word spreads quietly. Patients arrive with chronic and complex cases — skin, migraine, allergies — seeking a slower, more considered kind of medicine.",
  },
  {
    year: "Second decade",
    heading: "Pune joins the practice.",
    body: "A second clinic opens at Wakad, Pune, making the practice accessible to a wider community across Maharashtra.",
  },
  {
    year: "Later years",
    heading: "The second generation arrives.",
    body: "Dr Kushal A Somani — Dr Antim's son — joins the practice after completing his M.D. in Homoeopathy, bringing academic depth and a fresh perspective while honouring the same classical foundations.",
  },
  {
    year: "Present",
    heading: "Father and son. Online, across India.",
    body: "Together, Dr Antim and Dr Kushal Somani offer video consultations nationwide — two generations, one unbroken commitment to unhurried, constitutionally-focused care.",
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
