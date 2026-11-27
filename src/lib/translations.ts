import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/site";

/**
 * Approved site copy — single source of truth.
 * All UI overrides are applied here; FR is the default language.
 */
const en = {
  // Common
  slogan: "Healthy, serene and naturally welcoming spaces.",
  mainQuote: "Get a quote",
  menuHome: "Home",
  menuReniaHome: "RENIA HOME",
  menuReniaPro: "RENIA PRO",
  menuAbout: "About",
  menuWhyRenia: "Why Renia",
  menuContact: "Contact",
  footerDescription: `RENIA SERVICES, residential and professional cleaning. Service area: the Paris region. ${CONTACT_PHONE_DISPLAY} · ${CONTACT_EMAIL}.`,
  footerLinks: [
    "RENIA HOME",
    "RENIA PRO",
    "About",
    "Why Renia",
    "Contact",
    "Legal notice",
    "Privacy policy",
    "Cookie policy",
    "Terms of sale",
  ],

  // Homepage
  HeroTitle:
    "Your trusted partner for the upkeep of your living and working spaces.",
  HeroText:
    "Professional cleaning services tailored to your needs, for individuals and businesses.",
  HeroButtonPrimary: "Get a free quote",
  YouAre: "You are:",
  Individual: "Individual: RENIA HOME · Home cleaning",
  Professional: "Professional: RENIA PRO · Premises and offices",
  AreasTitle: "One contact, two areas of expertise",
  AreasSubtitle: "Choose the service that fits your situation.",
  HomeTitle: "RENIA HOME",
  HomeText:
    "home cleaning · regular upkeep · one-off cleaning · deep cleaning · ironing.",
  HomeButton: "Discover RENIA HOME →",
  ProTitle: "RENIA PRO",
  ProText:
    "offices · shops and practices · property managers (syndics) · Airbnb and short-term rentals · business premises · tailor-made solutions.",
  ProButton: "Discover RENIA PRO →",
  QuoteCard: "Request a Quote",
  WhyTitle: "Why choose RENIA",
  Why1: "Eco-friendly products: eco-friendly products available as an option, on request.",
  Why2: "Professionalism and reliability: organised, supervised teams.",
  Why3: "Personalised service: services adapted to your needs.",
  Why4: "Flexibility: solutions adapted to your pace and constraints.",
  Why5: "Proximity: a local company, close to its customers.",
  HowTitle: "How it works",
  How1: "Request your quote: describe your need.",
  How2: "Assessment: RENIA reviews your request.",
  How3: "Proposal: you receive a tailored proposal.",
  How4: "Scheduling: the service is scheduled.",
  How5: "Service: the RENIA team comes to you.",
  How6: "Follow-up: quality and your satisfaction are followed up.",

  whyPillars: [
    {
      title: "Eco-friendly products",
      body: "Eco-friendly products available as an option, on request.",
    },
    {
      title: "Professionalism and reliability",
      body: "Organised, supervised teams.",
    },
    {
      title: "Personalised service",
      body: "Services adapted to your needs.",
    },
    {
      title: "Flexibility",
      body: "Solutions adapted to your pace and constraints.",
    },
    {
      title: "Proximity",
      body: "A local company, close to its customers.",
    },
  ],

  homeHow: {
    eyebrow: "How it works",
    title: "From first message to a space that feels cared for.",
    intro:
      "Four simple steps, one dedicated contact, and no obligation until everything feels right.",
    steps: [
      {
        title: "Request a quote",
        body: "Tell us about your space, your needs and the frequency you have in mind.",
      },
      {
        title: "Receive a proposal",
        body: "We review your request and send a clear, tailored quote.",
      },
      {
        title: "Confirm your request",
        body: "Choose your date and time. We confirm the details with you.",
      },
      {
        title: "Enjoy your space",
        body: "Our team takes care of everything, then we follow up on quality.",
      },
    ],
  },

  reviews: {
    eyebrow: "Customer reviews",
    title: "Cared-for spaces, happy clients.",
    intro: "A selection of feedback from homes and businesses we look after.",
    googleLabel: "Google Reviews",
    googleValue: "5.0",
    googleNote:
      "Read our latest reviews and share your experience on Google.",
    items: [
      {
        name: "Claire M.",
        meta: "RENIA HOME",
        quote:
          "The team is punctual, discreet and incredibly thorough. My home has never felt so calm and cared for.",
      },
      {
        name: "Thomas L.",
        meta: "RENIA PRO",
        quote:
          "Clear quote, reliable schedule and a spotless office every week. Exactly what a growing team needs.",
      },
      {
        name: "Sophie R.",
        meta: "Short-term rentals",
        quote:
          "Fast, meticulous turnarounds between guests. The photo report gives me complete peace of mind.",
      },
    ],
  },

  faqPage: {
    eyebrow: "Good to know",
    title: "Frequently asked questions.",
    intro:
      "Everything you need to know about our services and the way we work. If your question is not here, we are one message away.",
    items: [
      {
        question: "How do I ask for a quote?",
        answer:
          "Fill in our form in a few minutes. The quote is free. In the comments you can add anything that helps us: size of the home, preferred days, pets, access…",
      },
      {
        question: "Which services do you offer at home?",
        answer:
          "Home cleaning, regular or one-off cleaning, deep cleaning and ironing. If your need is different, say so in the form: we look at every request.",
      },
      {
        question: "Do you offer eco-friendly products?",
        answer:
          "Yes, we offer eco-friendly cleaning products as an option. Mention it in your quote request.",
      },
      {
        question: "Do I need to be present during the visit?",
        answer:
          "[To complete: client presence, key handover, access to the home.]",
      },
      {
        question: "What if I need to cancel or postpone a visit?",
        answer:
          "[To complete according to the terms of sale: notice period, cancellation conditions.]",
      },
      {
        question: "Which towns do you cover?",
        answer:
          "We work in Ablis, Rambouillet, Versailles and Saint-Quentin. Your town is not named? Ask us, we look at every situation.",
      },
    ],
    seeAll: "See all FAQs",
    stillTitle: "Another question?",
    stillText:
      "Write it in the “comments” field of your quote request.",
    stillCta: "Get a quote",
  },

  about: {
    eyebrow: "About us",
    title: "About RENIA SERVICES",
    intro: "A local cleaning company serving individuals and businesses.",
    missionEyebrow: "Our mission",
    mission:
      "To look after your living and working spaces with care, so that you find healthy, serene and naturally welcoming places.",
    valuesEyebrow: "What guides us",
    valuesTitle: "Our values",
    valuesIntro:
      "Every visit is built on the same simple principles, whether we are looking after a family home or a business premises.",
    values: [
      {
        title: "Reliability",
        body: "We keep our promises and our schedules.",
      },
      {
        title: "Professionalism",
        body: "Organised, supervised teams.",
      },
      {
        title: "Proximity",
        body: "A local company.",
      },
      {
        title: "Respect",
        body: "Respect for the customer, their home and our team.",
      },
      {
        title: "Environment",
        body: "Eco-friendly products offered as an option.",
      },
    ],
    visionEyebrow: "Our vision",
    visionTitle: "A recognised local cleaning company.",
    visionBody:
      "In the medium term, RENIA SERVICES aims to become a recognised player in the cleaning sector in its local area, thanks to the quality of its services, customer loyalty and gradual growth in its activity.",
    storyEyebrow: "Our story",
    storyTitle: "Our story",
    storyBody:
      "[To be written by RENIA: why RENIA was created, in a few sincere, personal sentences.]",
    storyNote: "RENIA SERVICES",
    brandsEyebrow: "One brand, two areas of expertise",
    brandsTitle: "One brand, two areas of expertise",
    brands: [
      {
        title: "RENIA HOME",
        body: "home cleaning and services for individuals.",
      },
      {
        title: "RENIA PRO",
        body: "cleaning of offices, practices, shops, property managers and short-term rentals.",
      },
    ],
    ctaEyebrow: "Let’s work together",
    ctaTitle: "Let’s work together.",
    ctaText: "Get a quote.",
    cta: "Get a quote",
  },

  contact: {
    eyebrow: "Get in touch",
    title: "Contact",
    intro:
      "A question, a quote request or a specific need? Write to us. We reply within one business day.",
    detailsEyebrow: "Contact information",
    detailsTitle: "We are close by.",
    areaLabel: "Service area",
    areaValue: "Paris region",
    phoneLabel: "Phone",
    phoneValue: CONTACT_PHONE_DISPLAY,
    emailLabel: "Email",
    emailValue: CONTACT_EMAIL,
    hoursLabel: "Opening hours",
    hoursValue: "Monday – Saturday · 8am – 6pm",
    whatsappTitle: "Prefer WhatsApp?",
    whatsappText:
      "Send us a message directly. It is the quickest way to reach us and to share photos of your space.",
    whatsappButton: "Message us on WhatsApp",
    whatsappPrefill:
      "Hello Renia Services, I would like more information about your cleaning services.",
    floatingWhatsapp: "WhatsApp us",
    mapEyebrow: "Our area",
    mapTitle: "Serving the Paris region",
    mapText:
      "Share your postcode and we will confirm your address is within our service area.",
    mapPlaceholder: "Paris region",
    socialTitle: "Follow RENIA",
    socialText:
      "News, before-and-after photos and practical advice for a calmer, cleaner space.",
    formEyebrow: "Write us",
    formTitle: "Tell us about your project.",
    formIntro:
      "Fill in the form and send us your message. We reply within one business day.",
    form: {
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      phone: "Phone",
      phonePlaceholder: "+33 6 00 00 00 00",
      subject: "Subject",
      subjectPlaceholder: "Quote request, question, partnership…",
      message: "Message",
      messagePlaceholder:
        "Tell us about your space, its size and how often you would like us to visit.",
      required: "Required fields",
      submit: "Send",
      successTitle: "Message sent",
      successBody:
        "Thank you — your email has been sent to the RENIA team. We will reply within one business day.",
      whatsappStep:
        "We will also notify you on WhatsApp as soon as your request is received.",
      error:
        "We could not send your email. Please try again or contact us directly.",
    },
  },

  recruitment: {
    eyebrow: "Recruitment",
    title: "Join the RENIA team.",
    intro:
      "We are recruiting cleaning staff, for work in private homes (RENIA HOME) and business premises (RENIA PRO).",
    lookingTitle: "What we are looking for",
    looking:
      "a taste for careful work and attention to detail; punctuality and reliability; good relations with customers; respect for instructions and the equipment entrusted to you.",
    cta: "Apply",
  },

  forms: {
    formTitle: "Get a free quote with no commitment",
    formIntro:
      "Tell us what you need. We review your request and get back to you with a tailored proposal.",
    youAre: "You are",
    individual: "Individual – RENIA HOME",
    professional: "Professional – RENIA PRO",
    contactDetails: "Your contact details",
    fullName: "Full name",
    phone: "Phone number",
    phoneError: "Please enter a valid French phone number",
    email: "Email",
    postalCode: "Postal code",
    postalCodeError: "Please enter a valid 5-digit French postal code",
    city: "City",
    propertyDetails: "What is your property type?",
    apartment: "Apartment",
    house: "House",
    surfaceArea: "What is the surface area?",
    bathrooms: "How many bathrooms/shower rooms?",
    yourNeeds: "Your needs",
    serviceType: "Service type",
    services: [
      "Regular cleaning",
      "One-off cleaning",
      "Ironing",
      "Deep cleaning",
      "Other",
    ],
    frequency: "Frequency",
    frequencies: [
      "Once",
      "Every week",
      "Every two weeks",
      "Every three weeks",
      "Once a month",
      "I don't know yet",
    ],
    comments: "Comments or additional information",
    commentsPlaceholder:
      "Size of the home, preferred days, pets, access, eco-friendly products...",
    ackTitle: "Acknowledgement",
    ackText: "I have read and agree to the privacy policy.",
    submitBtn: "Submit my request",
    organisationName: "Organisation name",
    sector: "Sector",
    sectors: [
      "Offices",
      "Shops",
      "Practices",
      "Property managers",
      "Airbnb and short-term rentals",
      "Other",
    ],
    role: "Role",
    address: "Address",
    requiredError: "Please complete all required fields.",
    emailError: "Please enter a valid email address.",
    consentError: "Please acknowledge the privacy policy.",
    surfaceError: "Please enter a valid surface area.",
    bathroomsError: "Please enter a valid number of bathrooms.",
    choiceTitle: "You are:",
    choiceHome: "Individual (RENIA HOME)",
    choicePro: "Professional (RENIA PRO)",
    free: "The quote is free and with no commitment.",
    confirmation:
      "Thank you, your request has been received. The RENIA team is looking at your need and will come back with a tailored proposal.",
    send: "Send",
    sending: "Sending…",
    error:
      "We could not save your request. Please try again or contact us directly.",
  },

  reniaHome: {
    eyebrow: "RENIA HOME",
    title: "What our home cleaning includes",
    intro: "A clear room-by-room list, so you know exactly what to expect.",
    heroPrimary: "Get a quote",
    heroSecondary: "See what is included",
    includedEyebrow: "Room by room",
    includedTitle: "What our home cleaning includes",
    includedIntro:
      "A clear room-by-room list, so you know exactly what to expect.",
    rooms: [
      {
        title: "Kitchen",
        body: "worktop, sink, outside of cabinets and appliances, hob, floors.",
        image: "/images/home-cleaning.jpg.png",
      },
      {
        title: "Bathroom and toilet",
        body: "basin, shower or bath, mirrors, sanitary ware, tiles, floors.",
        image: "/images/home-cleaning.jpg.png",
      },
      {
        title: "Bedrooms",
        body: "dusting, surfaces and furniture, floors, airing the bed if agreed.",
        image: "/images/hero.jpg.png",
      },
      {
        title: "Living room and living areas",
        body: "dusting, surfaces, accessible sofas and furniture, floors.",
        image: "/images/hero.jpg.png",
      },
      {
        title: "Entrance and corridors",
        body: "floors, accessible skirting boards, handles and switches.",
        image: "/images/home-cleaning.jpg.png",
      },
      {
        title: "Bins",
        body: "emptying the bins and putting in a clean bag.",
        image: "/images/home-cleaning.jpg.png",
      },
    ],
    extrasEyebrow: "Beyond the routine",
    extrasTitle: "Deep clean & ironing",
    deepTitle: "For a deep clean",
    deepBody:
      "a more thorough clean adapted to your home; areas that are hard to reach during routine cleaning; a priced service, quoted separately after a conversation with you.",
    deepImage: "/images/hero.jpg.png",
    extrasTitleAddition: "What you can ask for in addition",
    extrasBody:
      "ironing; eco-friendly cleaning products, offered as an option; a special request, to be specified in your quote.",
    ironTitle: "Ironing",
    ironBody:
      "Your laundry ironed with care, at your home. Add ironing to your cleaning by ticking the box in your quote request, and give the approximate amount in the comments.",
    ironImage: "/images/home-cleaning.jpg.png",
    faqEyebrow: "RENIA HOME FAQ",
    faqTitle: "RENIA HOME FAQ",
    faqs: [
      {
        question: "How do I ask for a quote?",
        answer:
          "Fill in our form in a few minutes. The quote is free. In the comments you can add anything that helps us: size of the home, preferred days, pets, access…",
      },
      {
        question: "Which services do you offer at home?",
        answer:
          "Home cleaning, regular or one-off cleaning, deep cleaning and ironing. If your need is different, say so in the form: we look at every request.",
      },
      {
        question: "Do you offer eco-friendly products?",
        answer:
          "Yes, we offer eco-friendly cleaning products as an option. Mention it in your quote request.",
      },
      {
        question: "Do I need to be present during the visit?",
        answer:
          "[To complete: client presence, key handover, access to the home.]",
      },
      {
        question: "What if I need to cancel or postpone a visit?",
        answer:
          "[To complete according to the terms of sale: notice period, cancellation conditions.]",
      },
      {
        question: "Which towns do you cover?",
        answer:
          "We work in Ablis, Rambouillet, Versailles and Saint-Quentin. Your town is not named? Ask us, we look at every situation.",
      },
    ],
    ctaEyebrow: "Ready when you are",
    ctaTitle: "Ready to ask for your quote?",
    ctaText: "Get a quote.",
    cta: "Get a quote",
  },

  reniaPro: {
    eyebrow: "RENIA PRO",
    title: "RENIA PRO: cleaning for your business premises.",
    intro:
      "Offices, practices, shops, property managers, short-term rentals: a service adapted to each place.",
    heroPrimary: "Request a professional quote",
    heroSecondary: "Professional services",
    sectorsEyebrow: "Professional services",
    sectorsTitle: "A team that understands your environment.",
    sectorsIntro:
      "Offices, practices, shops, property managers, short-term rentals: a service adapted to each place.",
    sectors: [
      {
        title: "Offices",
        body: "regular cleaning of your workspaces, according to your hours.",
      },
      {
        title: "Medical, legal and accounting practices",
        body: "a discreet service adapted to the constraints of your activity.",
      },
      {
        title: "Shops",
        body: "clean premises to welcome your customers.",
      },
      {
        title: "Property managers (syndics) and co-ownerships",
        body: "cleaning of common areas, at a rhythm agreed with you.",
      },
      {
        title: "Airbnb and short-term rentals",
        body: "preparing properties between stays (link to the dedicated page).",
      },
      {
        title: "Other business premises",
        body: "a tailor-made solution according to your need.",
      },
    ],
    sectorImages: [
      "/images/pro-cleaning.jpg.png",
      "/images/pro-cleaning.jpg.png",
      "/images/pro-cleaning.jpg.png",
    ],
    tailorEyebrow: "A tailor-made solution",
    tailorTitle: "A tailor-made solution",
    tailorBody:
      "adapted frequency (one-off, weekly, several times a week); adapted hours (before opening, during the day or after closing); a site visit to prepare a precise quote; an identified contact for follow-up.",
    tailorBullet1: "adapted frequency (one-off, weekly, several times a week)",
    tailorBullet2:
      "adapted hours (before opening, during the day or after closing)",
    tailorBullet3: "a site visit to prepare a precise quote",
    tailorBullet4: "an identified contact for follow-up",
    methodEyebrow: "Our method",
    methodTitle: "Our method",
    methodSteps: [
      { title: "Visit and assessment", body: "Visit and assessment." },
      {
        title: "Proposal",
        body: "a tailored quote, with no commitment.",
      },
      {
        title: "Service",
        body: "Service according to the agreed schedule.",
      },
      {
        title: "Follow-up",
        body: "we stay available to adjust the service.",
      },
    ],
    airbnbEyebrow: "Airbnb and short-term rentals",
    airbnbTitle:
      "Airbnb and short-term rentals: properties ready for your next guests.",
    airbnbBody:
      "RENIA PRO prepares your property between stays, so every arrival goes well.",
    airbnbBullet1:
      "A spotless property: careful preparation between each departure and arrival.",
    airbnbBullet2:
      "Suitable time slots: we organise around your departure and arrival times.",
    airbnbBullet3:
      "A single contact: a local team that you can easily reach.",
    airbnbServicesTitle: "Our services",
    airbnbServices: [
      "preparing the property between stays",
      "restoring it before a first rental",
      "regular cleaning according to your booking rhythm",
      "a tailor-made solution for your property",
    ],
    airbnbHowTitle: "How it works",
    airbnbHow: [
      "You describe your property.",
      "We study your need (a visit may be offered).",
      "You receive a proposal.",
      "We come between each stay.",
    ],
    airbnbCta: "Request a quote",
    ctaEyebrow: "Let’s talk",
    ctaTitle: "Let’s talk about your premises.",
    ctaText: "Request a professional quote.",
    cta: "Request a professional quote",
  },

  showcase: {
    eyebrow: "Two services, one standard",
    title: "Care for your home and your business.",
    intro:
      "RENIA HOME looks after private homes, RENIA PRO supports businesses. The same attention to detail, whatever the space.",
    homeTitle: "RENIA HOME",
    homeSubtitle: "Home cleaning",
    homeImageAlt: "A bright, clean living room",
    homeServicesTitle: "Home services",
    homeServices: [
      "Home cleaning",
      "Regular upkeep",
      "One-off cleaning",
      "Deep cleaning",
      "Ironing",
    ],
    homeCta: "Discover RENIA HOME",
    centerEyebrow: "Why Renia",
    centerTitle: "Why choose RENIA",
    centerText:
      "A trained, supervised team that treats your space as if it were their own.",
    centerImageAlt: "A clean, bright interior",
    engagements: [
      { title: "Eco-friendly", body: "Products offered as an option." },
      { title: "Quality", body: "A clear checklist on every visit." },
      { title: "Trained team", body: "Organised, supervised teams." },
      { title: "Flexibility", body: "Schedules built around you." },
    ],
    proTitle: "RENIA PRO",
    proSubtitle: "Professional cleaning",
    proImageAlt: "A bright, clean professional office",
    proSectorsTitle: "Professional services",
    proSectors: [
      "Offices",
      "Practices",
      "Shops",
      "Property managers",
      "Airbnb and short-term rentals",
      "Business premises",
    ],
    proCta: "Discover RENIA PRO",
  },

  contactCard: {
    eyebrow: "Renia Services",
    title: "Let’s stay in touch",
    phoneLabel: "Phone",
    emailLabel: "Email",
    websiteLabel: "Website",
    website: "reniaservices.fr",
    qrLabel: "Scan the QR code to save our details.",
    qrPlaceholder: "QR code coming soon",
    tagline: "Healthy, serene and naturally welcoming spaces.",
    signature: "RENIA SERVICES",
    cta: "Contact us",
  },

  gallery: {
    eyebrow: "Recent work",
    title: "Our gallery.",
    intro: "A look at the homes, offices and rentals we care for.",
    recentTitle: "Recent work",
    recentIntro: "A glimpse of the spaces we look after.",
    viewAll: "View full gallery",
    empty: "Fresh photos and videos are on their way.",
    close: "Close",
    previous: "Previous",
    next: "Next",
    videoLabel: "Video",
    imageLabel: "Photo",
    ctaEyebrow: "Your space next",
    ctaTitle: "Let’s make your space feel cared for.",
    ctaText:
      "Tell us about your space and we will suggest the right service, clearly and without obligation.",
    cta: "Request a quote",
    setup:
      "The gallery will appear once media is uploaded.",
  },

};

const fr: typeof en = {
  // Common
  slogan: "Des espaces sains, sereins et naturellement accueillants.",
  mainQuote: "Obtenir un devis",
  menuHome: "Accueil",
  menuReniaHome: "RENIA HOME",
  menuReniaPro: "RENIA PRO",
  menuAbout: "À propos",
  menuWhyRenia: "Pourquoi Renia",
  menuContact: "Contact",
  footerDescription: `RENIA SERVICES, nettoyage résidentiel et professionnel. Zone d’intervention : la région parisienne. ${CONTACT_PHONE_DISPLAY} · ${CONTACT_EMAIL}.`,
  footerLinks: [
    "RENIA HOME",
    "RENIA PRO",
    "À propos",
    "Pourquoi Renia",
    "Contact",
    "Mentions légales",
    "Politique de confidentialité",
    "Politique de cookies",
    "CGV",
  ],

  // Homepage
  HeroTitle:
    "Votre partenaire de confiance pour l’entretien de vos espaces de vie et de travail.",
  HeroText:
    "Des prestations de nettoyage professionnelles, adaptées à vos besoins, pour les particuliers comme pour les professionnels.",
  HeroButtonPrimary: "Obtenir un devis gratuit",
  YouAre: "Vous êtes :",
  Individual: "Particulier : RENIA HOME · Ménage à domicile",
  Professional: "Professionnel : RENIA PRO · Locaux et bureaux",
  AreasTitle: "Un seul interlocuteur, deux savoir-faire",
  AreasSubtitle: "Choisissez le service qui correspond à votre situation.",
  HomeTitle: "RENIA HOME",
  HomeText:
    "Ménage à domicile · Entretien régulier · Entretien ponctuel · Grand nettoyage · Repassage.",
  HomeButton: "Découvrir RENIA HOME →",
  ProTitle: "RENIA PRO",
  ProText:
    "Bureaux · Commerces et cabinets · Syndics · Airbnb et locations courte durée · Locaux professionnels · Solutions sur mesure.",
  ProButton: "Découvrir RENIA PRO →",
  QuoteCard: "Demander un devis",
  WhyTitle: "Pourquoi choisir RENIA",
  Why1:
    "Produits écologiques : des produits écologiques disponibles en option, sur demande.",
  Why2:
    "Professionnalisme et fiabilité : des équipes organisées et encadrées.",
  Why3: "Service personnalisé : des prestations adaptées à vos besoins.",
  Why4: "Flexibilité : des solutions adaptées à votre rythme et à vos contraintes.",
  Why5: "Proximité : une entreprise locale, proche de ses clients.",
  HowTitle: "Comment ça marche",
  How1: "Demandez votre devis : présentez votre besoin.",
  How2: "Évaluation : RENIA analyse votre demande.",
  How3: "Proposition : vous recevez une proposition adaptée.",
  How4: "Planification : la prestation est programmée.",
  How5: "Intervention : l’équipe RENIA intervient.",
  How6: "Suivi : la qualité et votre satisfaction sont suivies.",

  whyPillars: [
    {
      title: "Produits écologiques",
      body: "Des produits écologiques disponibles en option, sur demande.",
    },
    {
      title: "Professionnalisme et fiabilité",
      body: "Des équipes organisées et encadrées.",
    },
    {
      title: "Service personnalisé",
      body: "Des prestations adaptées à vos besoins.",
    },
    {
      title: "Flexibilité",
      body: "Des solutions adaptées à votre rythme et à vos contraintes.",
    },
    {
      title: "Proximité",
      body: "Une entreprise locale, proche de ses clients.",
    },
  ],

  homeHow: {
    eyebrow: "Comment ça marche",
    title: "Du premier message à un espace qui se sent entretenu.",
    intro:
      "Quatre étapes simples, un interlocuteur dédié, et aucun engagement tant que tout ne vous convient pas.",
    steps: [
      {
        title: "Demandez un devis",
        body: "Parlez-nous de votre espace, de vos besoins et de la fréquence souhaitée.",
      },
      {
        title: "Recevez une proposition",
        body: "Nous étudions votre demande et vous envoyons un devis clair et adapté.",
      },
      {
        title: "Confirmez votre demande",
        body: "Choisissez votre date et votre horaire. Nous confirmons les détails avec vous.",
      },
      {
        title: "Profitez de votre espace",
        body: "Notre équipe s’occupe de tout, puis nous faisons un suivi qualité.",
      },
    ],
  },

  reviews: {
    eyebrow: "Avis clients",
    title: "Des espaces entretenus, des clients sereins.",
    intro: "Une sélection de retours de particuliers et de professionnels.",
    googleLabel: "Avis Google",
    googleValue: "5,0",
    googleNote:
      "Retrouvez nos derniers avis et partagez votre expérience sur Google.",
    items: [
      {
        name: "Claire M.",
        meta: "RENIA HOME",
        quote:
          "L’équipe est ponctuelle, discrète et extrêmement minutieuse. Ma maison n’a jamais été aussi sereine et soignée.",
      },
      {
        name: "Thomas L.",
        meta: "RENIA PRO",
        quote:
          "Devis clair, planning fiable et bureaux impeccables chaque semaine. Exactement ce dont une équipe qui grandit a besoin.",
      },
      {
        name: "Sophie R.",
        meta: "Locations courte durée",
        quote:
          "Des remises en état rapides et minutieuses entre deux voyageurs. Le reportage photo me donne une tranquillité totale.",
      },
    ],
  },

  faqPage: {
    eyebrow: "Bon à savoir",
    title: "Questions fréquentes.",
    intro:
      "Tout ce qu’il faut savoir sur nos prestations et notre façon de travailler. Si votre question n’est pas ici, nous sommes à un message de vous.",
    items: [
      {
        question: "Comment demander un devis ?",
        answer:
          "Remplissez notre formulaire en quelques minutes. Le devis est gratuit. Vous pouvez ajouter dans les commentaires tout ce qui peut nous aider : taille du logement, jours souhaités, animaux, accès…",
      },
      {
        question: "Quels services proposez-vous à domicile ?",
        answer:
          "Ménage à domicile, entretien régulier ou ponctuel, grand nettoyage et repassage. Si votre besoin est différent, indiquez-le dans le formulaire : nous étudions chaque demande.",
      },
      {
        question: "Proposez-vous des produits écologiques ?",
        answer:
          "Oui, nous proposons des produits d’entretien écologiques en option. Précisez-le dans votre demande de devis.",
      },
      {
        question: "Dois-je être présent pendant l’intervention ?",
        answer:
          "[À compléter : présence du client, remise des clés, accès au logement.]",
      },
      {
        question: "Que se passe-t-il si je dois annuler ou reporter une intervention ?",
        answer:
          "[À compléter selon les CGV : délai de prévenance, conditions d’annulation.]",
      },
      {
        question: "Dans quelles communes intervenez-vous ?",
        answer:
          "Nous intervenons à Ablis, Rambouillet, Versailles et Saint-Quentin. Votre commune n’est pas citée ? Demandez-nous, nous étudions chaque situation.",
      },
    ],
    seeAll: "Voir toutes les questions",
    stillTitle: "Une autre question ?",
    stillText:
      "Écrivez-la dans le champ « commentaires » de votre demande de devis.",
    stillCta: "Obtenir un devis",
  },

  about: {
    eyebrow: "À propos",
    title: "À propos de RENIA SERVICES",
    intro:
      "Une entreprise de nettoyage locale, au service des particuliers et des professionnels.",
    missionEyebrow: "Notre mission",
    mission:
      "Entretenir vos espaces de vie et de travail avec sérieux, pour que vous retrouviez des lieux sains, sereins et naturellement accueillants.",
    valuesEyebrow: "Ce qui nous guide",
    valuesTitle: "Nos valeurs",
    valuesIntro:
      "Chaque intervention repose sur les mêmes principes simples, que nous entretenions une maison familiale ou des locaux professionnels.",
    values: [
      {
        title: "Fiabilité",
        body: "Nous tenons nos engagements et nos horaires.",
      },
      {
        title: "Professionnalisme",
        body: "Des équipes organisées et encadrées.",
      },
      {
        title: "Proximité",
        body: "Une entreprise locale.",
      },
      {
        title: "Respect",
        body: "Le respect du client, de son lieu de vie et de notre équipe.",
      },
      {
        title: "Environnement",
        body: "Des produits écologiques proposés en option.",
      },
    ],
    visionEyebrow: "Notre vision",
    visionTitle: "Un acteur reconnu du nettoyage.",
    visionBody:
      "À moyen terme, RENIA SERVICES ambitionne de devenir un acteur reconnu du secteur du nettoyage sur son territoire d’implantation, grâce à la qualité de ses prestations, à la fidélisation de sa clientèle et à une croissance progressive de son activité.",
    storyEyebrow: "Notre histoire",
    storyTitle: "Notre histoire",
    storyBody:
      "[À écrire par RENIA : pourquoi RENIA a été créée, en quelques phrases sincères et personnelles.]",
    storyNote: "RENIA SERVICES",
    brandsEyebrow: "Une marque, deux savoir-faire",
    brandsTitle: "Une marque, deux savoir-faire",
    brands: [
      {
        title: "RENIA HOME",
        body: "ménage et services à domicile pour les particuliers.",
      },
      {
        title: "RENIA PRO",
        body: "nettoyage de bureaux, cabinets, commerces, syndics et locations courte durée.",
      },
    ],
    ctaEyebrow: "Travaillons ensemble",
    ctaTitle: "Travaillons ensemble.",
    ctaText: "Obtenir un devis.",
    cta: "Obtenir un devis",
  },

  contact: {
    eyebrow: "Nous contacter",
    title: "Contact",
    intro:
      "Une question, une demande de devis ou un besoin particulier ? Écrivez-nous. Nous répondons sous un jour ouvré.",
    detailsEyebrow: "Coordonnées",
    detailsTitle: "Nous sommes proches de vous.",
    areaLabel: "Zone d’intervention",
    areaValue: "Région parisienne",
    phoneLabel: "Téléphone",
    phoneValue: CONTACT_PHONE_DISPLAY,
    emailLabel: "Email",
    emailValue: CONTACT_EMAIL,
    hoursLabel: "Horaires",
    hoursValue: "Lundi – Samedi · 8h – 18h",
    whatsappTitle: "Vous préférez WhatsApp ?",
    whatsappText:
      "Envoyez-nous un message directement. C’est le moyen le plus rapide de nous joindre et de partager des photos de votre espace.",
    whatsappButton: "Nous écrire sur WhatsApp",
    whatsappPrefill:
      "Bonjour Renia Services, je souhaiterais obtenir plus d’informations sur vos prestations de nettoyage.",
    floatingWhatsapp: "WhatsApp",
    mapEyebrow: "Notre zone",
    mapTitle: "Au service de la région parisienne",
    mapText:
      "Indiquez votre code postal et nous confirmerons que votre adresse fait partie de notre zone d’intervention.",
    mapPlaceholder: "Région parisienne",
    socialTitle: "Suivez RENIA",
    socialText:
      "Actualités, photos avant/après et conseils pratiques pour un espace plus serein et plus propre.",
    formEyebrow: "Écrivez-nous",
    formTitle: "Parlez-nous de votre projet.",
    formIntro:
      "Remplissez le formulaire et envoyez-nous votre message. Nous répondons sous un jour ouvré.",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom complet",
      email: "Email",
      emailPlaceholder: "vous@exemple.com",
      phone: "Téléphone",
      phonePlaceholder: "+33 6 00 00 00 00",
      subject: "Objet",
      subjectPlaceholder: "Demande de devis, question, partenariat…",
      message: "Message",
      messagePlaceholder:
        "Parlez-nous de votre espace, de sa surface et de la fréquence de vos visites souhaitées.",
      required: "Champs obligatoires",
      submit: "Envoyer",
      successTitle: "Message envoyé",
      successBody:
        "Merci — votre email a bien été transmis à l’équipe RENIA. Nous vous répondons sous un jour ouvré.",
      whatsappStep:
        "Nous vous préviendrons également sur WhatsApp dès réception de votre demande.",
      error:
        "Impossible d’envoyer votre email. Veuillez réessayer ou nous contacter directement.",
    },
  },

  recruitment: {
    eyebrow: "Recrutement",
    title: "Rejoignez l’équipe RENIA.",
    intro:
      "Nous recrutons des agents d’entretien, pour des interventions chez des particuliers (RENIA HOME) et dans des locaux professionnels (RENIA PRO).",
    lookingTitle: "Ce que nous recherchons",
    looking:
      "le goût du travail soigné et le souci du détail ; de la ponctualité et de la fiabilité ; un bon relationnel avec les clients ; le respect des consignes et du matériel confié.",
    cta: "Postuler",
  },

  forms: {
    formTitle: "Obtenir un devis gratuit et sans engagement",
    formIntro:
      "Dites-nous ce dont vous avez besoin. Nous étudions votre demande et revenons vers vous avec une proposition adaptée.",
    youAre: "Vous êtes",
    individual: "Particulier – RENIA HOME",
    professional: "Professionnel – RENIA PRO",
    contactDetails: "Vos coordonnées",
    fullName: "Nom et prénom",
    phone: "Numéro de téléphone",
    phoneError:
      "Veuillez saisir un numéro de téléphone français valide (ex. 06 14 38 36 56 ou +33 6 14 38 36 56)",
    email: "Email",
    postalCode: "Code postal",
    postalCodeError:
      "Veuillez saisir un code postal français valide à 5 chiffres (ex. 75001)",
    city: "Commune",
    propertyDetails: "Quel est le type de votre logement ?",
    apartment: "Appartement",
    house: "Maison",
    surfaceArea: "Quelle est sa superficie ?",
    bathrooms: "Combien de salles de bains et salles d'eau possède-t-il ?",
    yourNeeds: "Votre besoins",
    serviceType: "Type de service",
    services: [
      "Ménage régulier",
      "Ménage ponctuel",
      "Repassage",
      "Grand nettoyage",
      "Autre",
    ],
    frequency: "Fréquence",
    frequencies: [
      "une seule fois",
      "chaque semaine",
      "toutes les deux semaines",
      "Toutes les trois semaines",
      "Une fois par mois",
      "Je ne sais pas encore",
    ],
    comments: "Commentaires ou informations complémentaires",
    commentsPlaceholder:
      "Taille du logement, jours souhaités, animaux, accès, produits écologiques, tout ce qui peut nous aider…",
    ackTitle: "Prise de connaissance de la politique de confidentialité",
    ackText:
      "J'ai pris connaissance de la politique de confidentialité de RENIA SERVICES relative au traitement de mes données personnelles dans le cadre de ma demande de devis.",
    submitBtn: "Envoyer ma demande",
    organisationName: "Nom de l’organisation",
    sector: "Secteur",
    sectors: [
      "Bureaux",
      "Commerces",
      "Cabinets",
      "Syndics",
      "Airbnb et locations courte durée",
      "Autre",
    ],
    role: "Fonction",
    address: "Adresse",
    requiredError: "Veuillez remplir tous les champs obligatoires.",
    emailError: "Veuillez saisir une adresse email valide.",
    consentError:
      "Veuillez confirmer avoir pris connaissance de la politique de confidentialité.",
    surfaceError: "Veuillez saisir une superficie valide.",
    bathroomsError: "Veuillez saisir un nombre valide de salles d'eau.",
    choiceTitle: "Vous êtes :",
    choiceHome: "Particulier (RENIA HOME)",
    choicePro: "Professionnel (RENIA PRO)",
    free: "Le devis est gratuit et sans engagement.",
    confirmation:
      "Merci, votre demande est bien reçue. L’équipe RENIA étudie votre besoin et revient vers vous avec une proposition adaptée.",
    send: "Envoyer",
    sending: "Envoi…",
    error:
      "Impossible d’enregistrer votre demande. Veuillez réessayer ou nous contacter directement.",
  },

  reniaHome: {
    eyebrow: "RENIA HOME",
    title: "Ce que comprend notre ménage à domicile",
    intro: "Une liste claire, pièce par pièce, pour savoir exactement à quoi vous attendre.",
    heroPrimary: "Obtenir un devis",
    heroSecondary: "Voir ce qui est inclus",
    includedEyebrow: "Pièce par pièce",
    includedTitle: "Ce que comprend notre ménage à domicile",
    includedIntro:
      "Une liste claire, pièce par pièce, pour savoir exactement à quoi vous attendre.",
    rooms: [
      {
        title: "Cuisine",
        body: "plan de travail, évier, extérieur des meubles et de l’électroménager, plaques de cuisson, sols.",
        image: "/images/home-cleaning.jpg.png",
      },
      {
        title: "Salle de bain et WC",
        body: "lavabo, douche ou baignoire, miroirs, sanitaires, carrelage, sols.",
        image: "/images/home-cleaning.jpg.png",
      },
      {
        title: "Chambres",
        body: "dépoussiérage, surfaces et meubles, sols, aération du lit si convenu.",
        image: "/images/hero.jpg.png",
      },
      {
        title: "Séjour et pièces de vie",
        body: "dépoussiérage, surfaces, canapés et meubles accessibles, sols.",
        image: "/images/hero.jpg.png",
      },
      {
        title: "Entrée et couloirs",
        body: "sols, plinthes accessibles, poignées et interrupteurs.",
        image: "/images/home-cleaning.jpg.png",
      },
      {
        title: "Poubelles",
        body: "vidage des poubelles et remise en place d’un sac propre.",
        image: "/images/home-cleaning.jpg.png",
      },
    ],
    extrasEyebrow: "Au-delà de la routine",
    extrasTitle: "Grand nettoyage & repassage",
    deepTitle: "Pour un grand nettoyage",
    deepBody:
      "un nettoyage plus approfondi adapté à votre logement ; les zones peu accessibles lors d’un entretien courant ; une prestation chiffrée à part, après échange avec vous.",
    deepImage: "/images/hero.jpg.png",
    extrasTitleAddition: "Ce que vous pouvez nous demander en plus",
    extrasBody:
      "repassage ; produits d’entretien écologiques, proposés en option ; une demande particulière, à préciser dans votre devis.",
    ironTitle: "Repassage",
    ironBody:
      "Votre linge repassé avec soin, chez vous. Ajoutez le repassage à votre ménage en cochant la case dans votre demande de devis, et précisez la quantité approximative dans les commentaires.",
    ironImage: "/images/home-cleaning.jpg.png",
    faqEyebrow: "FAQ RENIA HOME",
    faqTitle: "FAQ RENIA HOME",
    faqs: [
      {
        question: "Comment demander un devis ?",
        answer:
          "Remplissez notre formulaire en quelques minutes. Le devis est gratuit. Vous pouvez ajouter dans les commentaires tout ce qui peut nous aider : taille du logement, jours souhaités, animaux, accès…",
      },
      {
        question: "Quels services proposez-vous à domicile ?",
        answer:
          "Ménage à domicile, entretien régulier ou ponctuel, grand nettoyage et repassage. Si votre besoin est différent, indiquez-le dans le formulaire : nous étudions chaque demande.",
      },
      {
        question: "Proposez-vous des produits écologiques ?",
        answer:
          "Oui, nous proposons des produits d’entretien écologiques en option. Précisez-le dans votre demande de devis.",
      },
      {
        question: "Dois-je être présent pendant l’intervention ?",
        answer:
          "[À compléter : présence du client, remise des clés, accès au logement.]",
      },
      {
        question: "Que se passe-t-il si je dois annuler ou reporter une intervention ?",
        answer:
          "[À compléter selon les CGV : délai de prévenance, conditions d’annulation.]",
      },
      {
        question: "Dans quelles communes intervenez-vous ?",
        answer:
          "Nous intervenons à Ablis, Rambouillet, Versailles et Saint-Quentin. Votre commune n’est pas citée ? Demandez-nous, nous étudions chaque situation.",
      },
    ],
    ctaEyebrow: "Prêts quand vous l’êtes",
    ctaTitle: "Prêt à demander votre devis ?",
    ctaText: "Obtenir un devis.",
    cta: "Obtenir un devis",
  },

  reniaPro: {
    eyebrow: "RENIA PRO",
    title: "RENIA PRO : le nettoyage de vos locaux professionnels.",
    intro:
      "Bureaux, cabinets, commerces, syndics, locations courte durée : une prestation adaptée à chaque lieu.",
    heroPrimary: "Demander un devis professionnel",
    heroSecondary: "Prestations professionnelles",
    sectorsEyebrow: "Prestations professionnelles",
    sectorsTitle: "Une équipe qui comprend votre environnement.",
    sectorsIntro:
      "Bureaux, cabinets, commerces, syndics, locations courte durée : une prestation adaptée à chaque lieu.",
    sectors: [
      {
        title: "Bureaux",
        body: "entretien régulier de vos espaces de travail, selon vos horaires.",
      },
      {
        title: "Cabinets médicaux, juridiques et comptables",
        body: "une intervention discrète, adaptée aux contraintes de votre activité.",
      },
      {
        title: "Commerces",
        body: "des locaux propres pour accueillir vos clients.",
      },
      {
        title: "Syndics et copropriétés",
        body: "entretien des parties communes, selon un rythme convenu avec vous.",
      },
      {
        title: "Airbnb et locations courte durée",
        body: "préparation des logements entre deux séjours (lien vers la page dédiée).",
      },
      {
        title: "Autres locaux professionnels",
        body: "une solution sur mesure selon votre besoin.",
      },
    ],
    sectorImages: [
      "/images/pro-cleaning.jpg.png",
      "/images/pro-cleaning.jpg.png",
      "/images/pro-cleaning.jpg.png",
    ],
    tailorEyebrow: "Une solution sur mesure",
    tailorTitle: "Une solution sur mesure",
    tailorBody:
      "fréquence adaptée (ponctuelle, hebdomadaire, plusieurs fois par semaine) ; horaires adaptés (avant l’ouverture, en journée ou après la fermeture) ; visite sur site pour établir un devis précis ; un interlocuteur identifié pour le suivi.",
    tailorBullet1: "fréquence adaptée (ponctuelle, hebdomadaire, plusieurs fois par semaine)",
    tailorBullet2: "horaires adaptés (avant l’ouverture, en journée ou après la fermeture)",
    tailorBullet3: "visite sur site pour établir un devis précis",
    tailorBullet4: "un interlocuteur identifié pour le suivi",
    methodEyebrow: "Notre méthode",
    methodTitle: "Notre méthode",
    methodSteps: [
      { title: "Visite et évaluation", body: "Visite et évaluation." },
      {
        title: "Proposition",
        body: "un devis adapté, sans engagement.",
      },
      {
        title: "Intervention",
        body: "Intervention selon le planning convenu.",
      },
      {
        title: "Suivi",
        body: "nous restons à votre écoute pour ajuster la prestation.",
      },
    ],
    airbnbEyebrow: "Airbnb et locations courte durée",
    airbnbTitle:
      "Airbnb et locations courte durée : des logements prêts pour vos prochains voyageurs.",
    airbnbBody:
      "RENIA PRO prépare votre logement entre deux séjours, pour que chaque arrivée se passe bien.",
    airbnbBullet1:
      "Un logement impeccable : une préparation soignée entre chaque départ et chaque arrivée.",
    airbnbBullet2:
      "Des créneaux adaptés : nous nous organisons autour de vos horaires de départ et d’arrivée.",
    airbnbBullet3:
      "Un interlocuteur unique : une équipe locale que vous pouvez joindre facilement.",
    airbnbServicesTitle: "Nos prestations",
    airbnbServices: [
      "préparation du logement entre deux séjours",
      "remise en état avant une première mise en location",
      "entretien régulier selon votre rythme de réservations",
      "solution sur mesure selon votre logement",
    ],
    airbnbHowTitle: "Comment ça marche",
    airbnbHow: [
      "Vous décrivez votre logement.",
      "Nous étudions votre besoin (une visite peut être proposée).",
      "Vous recevez une proposition.",
      "Nous intervenons entre chaque séjour.",
    ],
    airbnbCta: "Demander un devis",
    ctaEyebrow: "Parlons de vos locaux",
    ctaTitle: "Parlons de vos locaux.",
    ctaText: "Demander un devis professionnel.",
    cta: "Demander un devis professionnel",
  },

  showcase: {
    eyebrow: "Deux services, une même exigence",
    title: "Le soin de votre maison et de votre entreprise.",
    intro:
      "RENIA HOME s’occupe des particuliers, RENIA PRO accompagne les professionnels. La même attention au détail, quel que soit l’espace.",
    homeTitle: "RENIA HOME",
    homeSubtitle: "Ménage à domicile",
    homeImageAlt: "Un séjour lumineux et propre",
    homeServicesTitle: "Prestations maison",
    homeServices: [
      "Ménage à domicile",
      "Entretien régulier",
      "Entretien ponctuel",
      "Grand nettoyage",
      "Repassage",
    ],
    homeCta: "Découvrir RENIA HOME",
    centerEyebrow: "Pourquoi Renia",
    centerTitle: "Pourquoi choisir RENIA",
    centerText:
      "Une équipe formée et encadrée qui prend soin de votre espace comme du sien.",
    centerImageAlt: "Un intérieur propre et lumineux",
    engagements: [
      { title: "Écologique", body: "Des produits proposés en option." },
      { title: "Qualité", body: "Une checklist claire à chaque visite." },
      { title: "Équipe formée", body: "Des équipes organisées et encadrées." },
      { title: "Flexibilité", body: "Des horaires adaptés à votre rythme." },
    ],
    proTitle: "RENIA PRO",
    proSubtitle: "Nettoyage professionnel",
    proImageAlt: "Un bureau professionnel lumineux et propre",
    proSectorsTitle: "Prestations professionnelles",
    proSectors: [
      "Bureaux",
      "Cabinets",
      "Commerces",
      "Syndics",
      "Airbnb et locations courte durée",
      "Locaux professionnels",
    ],
    proCta: "Découvrir RENIA PRO",
  },

  contactCard: {
    eyebrow: "Renia Services",
    title: "Restons en contact",
    phoneLabel: "Téléphone",
    emailLabel: "Email",
    websiteLabel: "Site web",
    website: "reniaservices.fr",
    qrLabel: "Scannez le QR code pour enregistrer nos coordonnées.",
    qrPlaceholder: "QR code bientôt disponible",
    tagline: "Des espaces sains, sereins et naturellement accueillants.",
    signature: "RENIA SERVICES",
    cta: "Nous contacter",
  },

  gallery: {
    eyebrow: "Nos réalisations",
    title: "Notre galerie.",
    intro: "Un aperçu des maisons, bureaux et locations dont nous prenons soin.",
    recentTitle: "Nos réalisations",
    recentIntro: "Un aperçu des espaces que nous entretenons.",
    viewAll: "Voir toute la galerie",
    empty: "De nouvelles photos et vidéos arrivent bientôt.",
    close: "Fermer",
    previous: "Précédent",
    next: "Suivant",
    videoLabel: "Vidéo",
    imageLabel: "Photo",
    ctaEyebrow: "Votre espace, ensuite",
    ctaTitle: "Faisons de votre espace un lieu dont on prend soin.",
    ctaText:
      "Parlez-nous de votre espace et nous vous proposerons la prestation adaptée, clairement et sans engagement.",
    cta: "Demander un devis",
    setup:
      "La galerie apparaîtra dès que des médias seront ajoutés.",
  },

};

export type Translation = typeof en;

export const translations: Record<"en" | "fr", Translation> = { en, fr };
