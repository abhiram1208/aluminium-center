// ─────────────────────────────────────────────────────────────
// SITE CONFIGURATION
// Edit this file to update business details across the whole site.
// Replace every [BRACKETED] placeholder with real information.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: "Aluminium Center",
  tagline: "Precisely crafted around your space.",

  address: "Kushalnagar,CWHC+H37, Basavanahalli, Karnataka 571234",
  phone: "+91 87140 18736, +91 99477 45963",

  email: " aluminiumcenter169@gmail.com",

  // Digits only, international format, no symbols — e.g. "911234567890"
  // whatsappNumber: "",

  hours: [
    { day: "Monday – Saturday", time: "8:30am – 7:30pm]" },
    { day: "Sunday", time: "CLOSED" },
  ],

  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7051.91837731852!2d75.920188!3d12.428938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5a700360c1f89%3A0xe00eaae4a816dbb3!2sAluminium%20Center%20Kushalnagar!5e1!3m2!1sen!2sin!4v1786515867160!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir//Aluminium+Center,+CWHC%2BH37,+Basavanahalli,+Karnataka+571234/@12.428938,75.920188,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba5a700360c1f89:0xe00eaae4a816dbb3!2m2!1d75.920188!2d12.428938",

  // Leave blank ("") to hide a social link in the footer
  social: {
    instagram: "https://www.instagram.com/aluminium.center/?utm_source=ig_web_button_share_sheet",
    facebook: "",
    pinterest: "",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "In Association", href: "#in-association" },
  { label: "Contact", href: "#contact" },
];

export const heroSlides = [
  {
    range: [0, 0.2],
    label: "Aluminium Center",
    headline: "Designed to belong.",
    body: "Contemporary interiors, precisely crafted around your space.",
  },
  {
    range: [0.2, 0.45],
    label: null,
    headline: "Every line has a purpose.",
    body: "Precision profiles, seamless surfaces, and carefully considered details come together as one.",
  },
  {
    range: [0.45, 0.75],
    label: null,
    headline: "Built around precision.",
    body: "Every component is engineered for strength, alignment, and lasting performance.",
  },
  {
    range: [0.75, 1.0],
    label: null,
    headline: "Crafted for your space.",
    body: "Custom interiors, built around the way you live.",
    cta: true,
  },
];

export const whyPoints = [
  { title: "Custom Designed", text: "Every layout is planned around your room, not the other way around." },
  { title: "Precision Crafted", text: "Profiles, joints, and panels fabricated to tight, consistent tolerances." },
  { title: "Space Efficient", text: "Storage and structure designed to make the most of the space available." },
  { title: "Professional Installation", text: "Fitted on site by our own team, finished to sit flush and true." },
  { title: "Contemporary Finishing", text: "Clean profiles and restrained hardware for a considered, modern look." },
  { title: "Built for Everyday Use", text: "Materials and mechanisms chosen to hold up to daily, real-world use." },
];

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    text: "We visit or meet to understand the space, dimensions, requirements, and vision behind the project.",
  },
  {
    number: "02",
    title: "Design",
    text: "We develop the layout, appearance, materials, and functional details together with you.",
  },
  {
    number: "03",
    title: "Fabrication",
    text: "Every component is precisely fabricated, aligned, and finished in our workshop.",
  },
  {
    number: "04",
    title: "Installation",
    text: "Our team installs on site and refines every detail until it's right.",
  },
];
