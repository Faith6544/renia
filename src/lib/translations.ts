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
  menuCommitments: "Our commitments",
  menuContact: "Contact",
  footerDescription: `RENIA SERVICES, residential and professional cleaning. Service area: Yvelines (78). ${CONTACT_PHONE_DISPLAY} · ${CONTACT_EMAIL}.`,
  footerLinks: [
    "RENIA HOME",
    "RENIA PRO",
    "About",
    "Our commitments",
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
  HeroButtonSecondary: "Discover our services →",
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
        title: "Book your service",
        body: "Choose your date and time. We confirm the details with you.",
      },
      {
        title: "Enjoy your space",
        body: "Our team takes care of everything, then we follow up on quality.",
      },
    ],
    cta: "See the full process",
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

  howItWorksPage: {
    eyebrow: "How it works",
    title: "A simple, transparent process.",
    intro:
      "From your first message to the moment you walk into a cared-for space, every step is clear, calm and agreed with you.",
    processEyebrow: "Step by step",
    processTitle: "What working with RENIA looks like.",
    steps: [
      {
        title: "Request your quote",
        body: "Describe your need. RENIA reviews your request.",
        detail: "Takes a few minutes. No commitment.",
      },
      {
        title: "Receive a tailored proposal",
        body: "You receive a tailored proposal.",
        detail: "Usually within one business day.",
      },
      {
        title: "Schedule the service",
        body: "The service is scheduled.",
        detail: "One named contact from start to finish.",
      },
      {
        title: "The RENIA team comes to you",
        body: "The RENIA team comes to you, then quality and your satisfaction are followed up.",
        detail: "Careful follow-up after the visit.",
      },
    ],
    includedEyebrow: "What happens next",
    includedTitle: "Details that make the difference.",
    included: [
      {
        title: "A named contact",
        body: "You speak to the same person before, during and after your service.",
      },
      {
        title: "A clear scope",
        body: "Every visit follows an agreed checklist. You know exactly what is included.",
      },
      {
        title: "Careful follow-up",
        body: "We check that the result meets your expectations and adjust the service as your needs change.",
      },
    ],
    ctaEyebrow: "Ready when you are",
    ctaTitle: "Let’s get started.",
    ctaText:
      "Tell us about your space and we will guide you through the next step, clearly and without obligation.",
    cta: "Request a quote",
    ctaSecondary: "Discover our services",
  },

  booking: {
    eyebrow: "Request a service",
    title: "Choose a date. We take care of the rest.",
    intro:
      "Send us your preferred date and time. We will check availability and confirm your request by message.",
    formEyebrow: "Your request",
    formTitle: "Tell us when you need us.",
    serviceLabel: "Service",
    serviceHome: "RENIA HOME — Home cleaning",
    servicePro: "RENIA PRO — Business premises",
    dateLabel: "Preferred date",
    timeLabel: "Preferred time",
    nameLabel: "Full name",
    namePlaceholder: "Your full name",
    phoneLabel: "Phone",
    phonePlaceholder: "+33 6 00 00 00 00",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    submit: "Send",
    submitHint:
      "Your request is saved, then WhatsApp opens with your message ready to send. Nothing is sent until you confirm it in WhatsApp.",
    required: "Required fields",
    opened:
      "Your request has been saved. WhatsApp and your email app have been opened with your message ready to send.",
    asideTitle: "Prefer to talk?",
    asideText:
      "Send us a message or call us. We will confirm availability and answer any question about your request.",
    whatsappButton: "Message us on WhatsApp",
    note: "This is a request, not a confirmed booking. We will confirm availability by message.",
    stepsTitle: "What happens after your request",
    steps: [
      {
        title: "We confirm availability",
        body: "We check the date and time you requested and reply with a confirmation.",
      },
      {
        title: "You receive the details",
        body: "We confirm the scope, the access arrangements and anything you need to prepare.",
      },
      {
        title: "We take care of the rest",
        body: "Our team arrives on time and follows the agreed checklist.",
      },
    ],
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
        body: "We keep our commitments and our schedules.",
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

  commitments: {
    eyebrow: "Our commitments",
    title: "Our commitments",
    intro: "Our commitments",
    itemsEyebrow: "What you can expect",
    itemsTitle: "Five commitments, one standard.",
    items: [
      {
        title: "Environment",
        body: "eco-friendly cleaning products offered as an option.",
      },
      {
        title: "People",
        body: "respect for our customers and our team. [Training and development: to specify if applicable.]",
      },
      {
        title: "Quality",
        body: "services adapted to each need and follow-up after the visit.",
      },
      {
        title: "Reliability",
        body: "a regular service, with organised, supervised teams.",
      },
      {
        title: "Local commitment",
        body: "a company rooted in its local area.",
      },
    ],
    pledge:
      "A healthy, serene and naturally welcoming space is the result of consistent care, attention to detail and respect for the people who live and work there.",
    ctaEyebrow: "Work with us",
    ctaTitle: "Ready to experience the difference?",
    ctaText:
      "Tell us about your home or premises. We will listen, advise and send you a clear proposal.",
    cta: "Request a quote",
  },

  contact: {
    eyebrow: "Get in touch",
    title: "Contact",
    intro:
      "A question, a quote request or a specific need? Write to us. We reply within one business day.",
    detailsEyebrow: "Contact information",
    detailsTitle: "We are close by.",
    areaLabel: "Service area",
    areaValue: "Yvelines (78)",
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
    mapTitle: "Serving the Yvelines (78)",
    mapText:
      "Share your postcode and we will confirm your address is within our service area.",
    mapPlaceholder: "Yvelines (78)",
    socialTitle: "Follow RENIA",
    socialText:
      "News, before-and-after photos and practical advice for a calmer, cleaner space.",
    formEyebrow: "Send a message",
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
      submitHint:
        "Your request is saved, then WhatsApp opens with your message ready to send. Nothing is sent until you confirm it in WhatsApp.",
      opened:
        "Thank you, your request has been received. The RENIA team is looking at your need and will come back with a tailored proposal.",
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
    note:
      "Your request is saved, then WhatsApp opens with your message ready to send. Nothing is sent until you confirm it in WhatsApp.",
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
    teamImages: [
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
    centerPromise:
      "A well-cared-for space changes the way you live and work.",
    centerImageAlt: "A clean, bright interior",
    centerCta: "Discover our services",
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

  auth: {
    signInEyebrow: "Welcome back",
    signInTitle: "Sign in to Renia.",
    signInIntro:
      "Access your account, follow your requests and manage your services.",
    signUpEyebrow: "Create an account",
    signUpTitle: "Join Renia.",
    signUpIntro:
      "Create your account to book services, follow your requests and receive your documents.",
    nameLabel: "Full name",
    namePlaceholder: "Jane Doe",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "At least 8 characters",
    signInCta: "Sign In",
    signUpCta: "Create account",
    loading: "Please wait…",
    or: "Or continue with",
    google: "Continue with Google",
    microsoft: "Continue with Microsoft",
    apple: "Continue with Apple",
    noAccount: "No account yet?",
    haveAccount: "Already have an account?",
    goSignUp: "Sign up",
    goSignIn: "Sign in",
    forgot: "Forgot password?",
    resetSent:
      "If an account exists for this email, a reset link is on its way.",
    checkEmail:
      "Almost there. Check your inbox to confirm your email address, then sign in.",
    errorGeneric: "Something went wrong. Please try again.",
    errorCredentials: "Incorrect email or password.",
    errorPassword: "Your password must be at least 8 characters.",
    setup:
      "Authentication is not configured yet. Add your Supabase credentials to .env.local and restart the server.",
    backHome: "Back to home",
    resetTitle: "Choose a new password.",
    resetIntro:
      "Enter a new password for your account. After saving, you will return to the sign-in screen.",
    newPasswordLabel: "New password",
    confirmPasswordLabel: "Confirm password",
    resetCta: "Update password",
    resetUpdating: "Updating…",
    resetSuccess: "Password updated. You can now sign in.",
    resetMismatch: "The passwords do not match.",
    resetExpired: "This recovery link has expired. Please request a new one.",
    resetBackToLogin: "Back to sign in",
    legal:
      "By continuing, you agree to our terms of sale and privacy policy.",
    secure: "Secure sign-in powered by Supabase",
    chooseUsernameEyebrow: "One last step",
    chooseUsernameTitle: "Choose your username.",
    chooseUsernameIntro:
      "Welcome to Renia! Pick the username that will appear on your account.",
    usernameLabel: "Username",
    usernamePlaceholder: "yourname",
    usernameHint: "3–20 characters. Letters, numbers and underscores only.",
    usernameCta: "Save username",
    usernameSaving: "Saving…",
    usernameTaken: "That username is already taken. Try another one.",
    usernameInvalid: "Use 3–20 characters: letters, numbers or underscores.",
    usernameError: "We could not save your username. Please try again.",
    usernameNoSession: "Your session has expired. Please sign in again.",
    usernameSkip: "Skip for now",
  },

  team: {
    eyebrow: "The people behind the care",
    title: "Meet the team.",
    intro:
      "A close-knit team of trained, supervised professionals who take care of your space as if it were their own.",
    philosophyEyebrow: "Our philosophy",
    philosophyTitle: "Care is a craft.",
    philosophyBody:
      "Every visit is prepared, checked and followed up. The same team, the same standards and the same attention to detail, so you always know who is looking after your space.",
    values: [
      {
        title: "Trained",
        body: "Organised, supervised teams who are trained for every type of space.",
      },
      {
        title: "Supervised",
        body: "Clear checklists and a named contact who follows up after each visit.",
      },
      {
        title: "Discreet",
        body: "Respectful teams who work quietly around your home or business.",
      },
    ],
    rosterEyebrow: "The team",
    rosterTitle: "Faces you can trust.",
    rosterIntro:
      "A few of the people who make Renia what it is. Full profiles are coming soon.",
    members: [
      {
        name: "Amélie Laurent",
        role: "Founder & client care",
        bio: "Amélie sets the standard: careful listening, clear quotes and a genuine eye for detail.",
        image: "/images/hero.jpg.png",
      },
      {
        name: "Sofia Benali",
        role: "RENIA HOME lead",
        bio: "Sofia coordinates the home teams and makes sure every visit follows the agreed checklist.",
        image: "/images/home-cleaning.jpg.png",
      },
      {
        name: "Marc Dubois",
        role: "RENIA PRO lead",
        bio: "Marc looks after offices, shops and short-term rentals with discretion and precision.",
        image: "/images/pro-cleaning.jpg.png",
      },
      {
        name: "Inès Moreau",
        role: "Quality & client follow-up",
        bio: "Inès checks the details, gathers feedback and keeps every promise on track.",
        image: "/images/flyer-1-layout.jpg.jpg",
      },
    ],
    joinEyebrow: "Join us",
    joinTitle: "Want to work with us?",
    joinText:
      "We are always happy to meet people who care about doing things well. Tell us about your experience and we will get back to you.",
    joinCta: "Contact us",
    ctaEyebrow: "Ready to meet?",
    ctaTitle: "Let’s talk about your space.",
    ctaText:
      "Tell us what you need and we will suggest the right service, clearly and without obligation.",
    cta: "Request a quote",
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
      "The gallery will appear once media is uploaded to Supabase Storage.",
  },

  admin: {
    eyebrow: "Admin",
    title: "Dashboard",
    intro:
      "Manage incoming requests and publish recent work to the public gallery.",
    signInTitle: "Admin sign-in required",
    signInText:
      "Sign in with your administrator account to access the dashboard.",
    signInCta: "Go to sign in",
    deniedTitle: "Access restricted",
    deniedText:
      "This account does not have administrator access. Add your email to NEXT_PUBLIC_ADMIN_EMAILS or set an admin role on the Supabase user.",
    signOut: "Sign out",
    welcome: "Signed in as",
    messagesEyebrow: "Inbox",
    messagesTitle: "Recent messages & quotes",
    messagesEmpty: "No messages yet.",
    messagesError:
      "Unable to load messages. Check the quote_requests table and its row-level security policies.",
    refresh: "Refresh",
    name: "Name",
    service: "Service",
    date: "Date",
    phone: "Phone",
    email: "Email",
    message: "Message",
    uploadEyebrow: "Publish",
    uploadTitle: "Upload recent work",
    uploadText:
      "Add a flyer, photo or video to the public gallery. Uploads appear in the footer and on the gallery page.",
    fileLabel: "File",
    fileHint: "JPG, PNG, WebP, MP4 or WebM. Maximum 50 MB.",
    uploadCta: "Upload to gallery",
    uploading: "Uploading…",
    uploadSuccess: "Uploaded to the gallery.",
    uploadError:
      "Upload failed. Check the storage bucket name and its write policies.",
    uploadTypeError: "Please choose an image or video file.",
    uploadSizeError: "This file is too large. Please choose a file under 50 MB.",
    mediaEyebrow: "Published",
    mediaTitle: "Gallery media",
    mediaEmpty: "No media published yet.",
    mediaError:
      "Unable to load media. Check the storage bucket and its public read policy.",
    open: "Open",
    delete: "Delete",
    deleting: "Deleting…",
    deleteError: "Unable to delete this file.",
    storageSetup:
      "Create a public Supabase Storage bucket named renia-gallery with a gallery folder.",
    tabInbox: "Inbox",
    tabTeam: "Manage Team",
    teamEyebrow: "Team",
    teamTitle: "Manage team",
    teamIntro:
      "Add a new team member. They will appear on the /team page immediately.",
    teamNameLabel: "Name",
    teamRoleLabel: "Role",
    teamPhotoLabel: "Photo",
    teamSave: "Add member",
    teamSaving: "Saving…",
    teamSaved: "Team member added.",
    teamNameRequired: "Please enter a name.",
    teamError: "Could not save the team member.",
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
  menuCommitments: "Nos engagements",
  menuContact: "Contact",
  footerDescription: `RENIA SERVICES, nettoyage résidentiel et professionnel. Zone d’intervention : Yvelines (78). ${CONTACT_PHONE_DISPLAY} · ${CONTACT_EMAIL}.`,
  footerLinks: [
    "RENIA HOME",
    "RENIA PRO",
    "À propos",
    "Nos engagements",
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
  HeroButtonSecondary: "Découvrir nos services →",
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
        title: "Réservez votre prestation",
        body: "Choisissez votre date et votre horaire. Nous confirmons les détails avec vous.",
      },
      {
        title: "Profitez de votre espace",
        body: "Notre équipe s’occupe de tout, puis nous faisons un suivi qualité.",
      },
    ],
    cta: "Voir le processus complet",
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

  howItWorksPage: {
    eyebrow: "Comment ça marche",
    title: "Un processus simple et transparent.",
    intro:
      "De votre premier message au moment où vous retrouvez un espace soigné, chaque étape est claire, sereine et validée avec vous.",
    processEyebrow: "Étape par étape",
    processTitle: "À quoi ressemble une collaboration avec RENIA.",
    steps: [
      {
        title: "Demandez votre devis",
        body: "Présentez votre besoin. RENIA analyse votre demande.",
        detail: "Quelques minutes suffisent. Sans engagement.",
      },
      {
        title: "Recevez une proposition adaptée",
        body: "Vous recevez une proposition adaptée.",
        detail: "Généralement sous un jour ouvré.",
      },
      {
        title: "Planifiez la prestation",
        body: "La prestation est programmée.",
        detail: "Un interlocuteur dédié du début à la fin.",
      },
      {
        title: "L’équipe RENIA intervient",
        body: "L’équipe RENIA intervient, puis la qualité et votre satisfaction sont suivies.",
        detail: "Un suivi attentif après la visite.",
      },
    ],
    includedEyebrow: "Et ensuite",
    includedTitle: "Les détails qui font la différence.",
    included: [
      {
        title: "Un interlocuteur dédié",
        body: "Vous parlez à la même personne avant, pendant et après votre prestation.",
      },
      {
        title: "Un périmètre clair",
        body: "Chaque visite suit une checklist convenue. Vous savez exactement ce qui est inclus.",
      },
      {
        title: "Un suivi attentif",
        body: "Nous vérifions que le résultat correspond à vos attentes et ajustons la prestation selon vos besoins.",
      },
    ],
    ctaEyebrow: "Prêts quand vous l’êtes",
    ctaTitle: "Commençons.",
    ctaText:
      "Parlez-nous de votre espace et nous vous guiderons vers la prochaine étape, clairement et sans engagement.",
    cta: "Demander un devis",
    ctaSecondary: "Découvrir nos services",
  },

  booking: {
    eyebrow: "Demander une prestation",
    title: "Choisissez une date. Nous nous occupons du reste.",
    intro:
      "Envoyez-nous la date et l’horaire souhaités. Nous vérifierons la disponibilité et confirmerons votre demande par message.",
    formEyebrow: "Votre demande",
    formTitle: "Dites-nous quand vous avez besoin de nous.",
    serviceLabel: "Prestation",
    serviceHome: "RENIA HOME — Ménage à domicile",
    servicePro: "RENIA PRO — Locaux professionnels",
    dateLabel: "Date souhaitée",
    timeLabel: "Horaire souhaité",
    nameLabel: "Nom complet",
    namePlaceholder: "Votre nom complet",
    phoneLabel: "Téléphone",
    phonePlaceholder: "+33 6 00 00 00 00",
    emailLabel: "Email",
    emailPlaceholder: "vous@exemple.com",
    submit: "Envoyer",
    submitHint:
      "Votre demande est enregistrée, puis WhatsApp s’ouvre avec votre message prêt à être envoyé. Rien n’est envoyé tant que vous ne confirmez pas dans WhatsApp.",
    required: "Champs obligatoires",
    opened:
      "Votre demande a été enregistrée. WhatsApp et votre application email se sont ouverts avec votre message prêt à être envoyé.",
    asideTitle: "Vous préférez échanger ?",
    asideText:
      "Envoyez-nous un message ou appelez-nous. Nous confirmerons la disponibilité et répondrons à toutes vos questions.",
    whatsappButton: "Nous écrire sur WhatsApp",
    note: "Il s’agit d’une demande, pas d’une réservation confirmée. Nous confirmerons la disponibilité par message.",
    stepsTitle: "Ce qui se passe après votre demande",
    steps: [
      {
        title: "Nous confirmons la disponibilité",
        body: "Nous vérifions la date et l’horaire demandés et vous répondons avec une confirmation.",
      },
      {
        title: "Vous recevez les détails",
        body: "Nous confirmons le périmètre, les modalités d’accès et ce que vous devez préparer.",
      },
      {
        title: "Nous nous occupons du reste",
        body: "Notre équipe arrive à l’heure et suit la checklist convenue.",
      },
    ],
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

  commitments: {
    eyebrow: "Nos engagements",
    title: "Nos engagements",
    intro: "Nos engagements",
    itemsEyebrow: "Ce que vous pouvez attendre",
    itemsTitle: "Cinq engagements, une même exigence.",
    items: [
      {
        title: "Environnement",
        body: "des produits d’entretien écologiques proposés en option.",
      },
      {
        title: "Personnes",
        body: "le respect de nos clients et de notre équipe. [Formation et développement : à préciser si applicable.]",
      },
      {
        title: "Qualité",
        body: "des prestations adaptées à chaque besoin et un suivi après intervention.",
      },
      {
        title: "Fiabilité",
        body: "un service régulier, avec des équipes organisées et encadrées.",
      },
      {
        title: "Engagement local",
        body: "une entreprise implantée dans son territoire.",
      },
    ],
    pledge:
      "Un espace sain, serein et naturellement accueillant est le résultat d’un soin constant, du souci du détail et du respect des personnes qui y vivent et y travaillent.",
    ctaEyebrow: "Travaillons ensemble",
    ctaTitle: "Prêts à découvrir la différence ?",
    ctaText:
      "Parlez-nous de votre maison ou de vos locaux. Nous vous écouterons, vous conseillerons et vous enverrons une proposition claire.",
    cta: "Demander un devis",
  },

  contact: {
    eyebrow: "Nous contacter",
    title: "Contact",
    intro:
      "Une question, une demande de devis ou un besoin particulier ? Écrivez-nous. Nous répondons sous un jour ouvré.",
    detailsEyebrow: "Coordonnées",
    detailsTitle: "Nous sommes proches de vous.",
    areaLabel: "Zone d’intervention",
    areaValue: "Yvelines (78)",
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
    mapTitle: "Au service des Yvelines (78)",
    mapText:
      "Indiquez votre code postal et nous confirmerons que votre adresse fait partie de notre zone d’intervention.",
    mapPlaceholder: "Yvelines (78)",
    socialTitle: "Suivez RENIA",
    socialText:
      "Actualités, photos avant/après et conseils pratiques pour un espace plus serein et plus propre.",
    formEyebrow: "Envoyer un message",
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
      submitHint:
        "Votre demande est enregistrée, puis WhatsApp s’ouvre avec votre message prêt à être envoyé. Rien n’est envoyé tant que vous ne confirmez pas dans WhatsApp.",
      opened:
        "Merci, votre demande est bien reçue. L’équipe RENIA étudie votre besoin et revient vers vous avec une proposition adaptée.",
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
      "Veuillez saisir un code postal français valide à 5 chiffres (ex. 78370)",
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
    note:
      "Votre demande est enregistrée, puis WhatsApp s’ouvre avec votre message prêt à être envoyé. Rien n’est envoyé tant que vous ne confirmez pas dans WhatsApp.",
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
    teamImages: [
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
    centerPromise:
      "Un espace bien entretenu change la façon dont on vit et travaille.",
    centerImageAlt: "Un intérieur propre et lumineux",
    centerCta: "Découvrir nos services",
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

  auth: {
    signInEyebrow: "Bon retour",
    signInTitle: "Connectez-vous à Renia.",
    signInIntro:
      "Accédez à votre compte, suivez vos demandes et gérez vos services.",
    signUpEyebrow: "Créer un compte",
    signUpTitle: "Rejoignez Renia.",
    signUpIntro:
      "Créez votre compte pour réserver des prestations, suivre vos demandes et recevoir vos documents.",
    nameLabel: "Nom complet",
    namePlaceholder: "Marie Dupont",
    emailLabel: "Email",
    emailPlaceholder: "vous@exemple.com",
    passwordLabel: "Mot de passe",
    passwordPlaceholder: "Au moins 8 caractères",
    signInCta: "Se connecter",
    signUpCta: "Créer un compte",
    loading: "Veuillez patienter…",
    or: "Ou continuer avec",
    google: "Continuer avec Google",
    microsoft: "Continuer avec Microsoft",
    apple: "Continuer avec Apple",
    noAccount: "Pas encore de compte ?",
    haveAccount: "Vous avez déjà un compte ?",
    goSignUp: "S’inscrire",
    goSignIn: "Se connecter",
    forgot: "Mot de passe oublié ?",
    resetSent:
      "Si un compte existe pour cet email, un lien de réinitialisation est en route.",
    checkEmail:
      "Presque terminé. Vérifiez votre boîte mail pour confirmer votre adresse, puis connectez-vous.",
    errorGeneric: "Une erreur est survenue. Veuillez réessayer.",
    errorCredentials: "Email ou mot de passe incorrect.",
    errorPassword: "Votre mot de passe doit contenir au moins 8 caractères.",
    setup:
      "L’authentification n’est pas encore configurée. Ajoutez vos identifiants Supabase dans .env.local et redémarrez le serveur.",
    backHome: "Retour à l’accueil",
    resetTitle: "Choisissez un nouveau mot de passe.",
    resetIntro:
      "Saisissez un nouveau mot de passe pour votre compte. Après enregistrement, vous reviendrez à l’écran de connexion.",
    newPasswordLabel: "Nouveau mot de passe",
    confirmPasswordLabel: "Confirmer le mot de passe",
    resetCta: "Mettre à jour le mot de passe",
    resetUpdating: "Mise à jour…",
    resetSuccess: "Mot de passe mis à jour. Vous pouvez vous connecter.",
    resetMismatch: "Les mots de passe ne correspondent pas.",
    resetExpired: "Ce lien de récupération a expiré. Veuillez en demander un nouveau.",
    resetBackToLogin: "Retour à la connexion",
    legal:
      "En continuant, vous acceptez nos conditions de vente et notre politique de confidentialité.",
    secure: "Connexion sécurisée avec Supabase",
    chooseUsernameEyebrow: "Dernière étape",
    chooseUsernameTitle: "Choisissez votre nom d’utilisateur.",
    chooseUsernameIntro:
      "Bienvenue chez Renia ! Choisissez le nom d’utilisateur qui apparaîtra sur votre compte.",
    usernameLabel: "Nom d’utilisateur",
    usernamePlaceholder: "votrenom",
    usernameHint:
      "3 à 20 caractères. Lettres, chiffres et tirets bas uniquement.",
    usernameCta: "Enregistrer",
    usernameSaving: "Enregistrement…",
    usernameTaken: "Ce nom d’utilisateur est déjà pris. Essayez-en un autre.",
    usernameInvalid:
      "Utilisez 3 à 20 caractères : lettres, chiffres ou tirets bas.",
    usernameError:
      "Impossible d’enregistrer votre nom d’utilisateur. Veuillez réessayer.",
    usernameNoSession: "Votre session a expiré. Veuillez vous reconnecter.",
    usernameSkip: "Passer pour le moment",
  },

  team: {
    eyebrow: "Les visages du soin",
    title: "Rencontrez l’équipe.",
    intro:
      "Une équipe proche, formée et encadrée, qui prend soin de votre espace comme du sien.",
    philosophyEyebrow: "Notre philosophie",
    philosophyTitle: "Le soin est un métier.",
    philosophyBody:
      "Chaque visite est préparée, vérifiée et suivie. La même équipe, les mêmes exigences et la même attention au détail, pour que vous sachiez toujours qui prend soin de votre espace.",
    values: [
      {
        title: "Formée",
        body: "Des équipes organisées et encadrées, formées à chaque type d’espace.",
      },
      {
        title: "Encadrée",
        body: "Des checklists claires et un contact dédié qui assure le suivi après chaque visite.",
      },
      {
        title: "Discrète",
        body: "Des équipes respectueuses qui travaillent en toute discrétion, chez vous ou dans vos locaux.",
      },
    ],
    rosterEyebrow: "L’équipe",
    rosterTitle: "Des visages de confiance.",
    rosterIntro:
      "Quelques-unes des personnes qui font Renia. Les profils complets arrivent bientôt.",
    members: [
      {
        name: "Amélie Laurent",
        role: "Fondatrice & relation client",
        bio: "Amélie donne le ton : une écoute attentive, des devis clairs et un vrai sens du détail.",
        image: "/images/hero.jpg.png",
      },
      {
        name: "Sofia Benali",
        role: "Responsable RENIA HOME",
        bio: "Sofia coordonne les équipes maison et veille à ce que chaque visite suive la checklist convenue.",
        image: "/images/home-cleaning.jpg.png",
      },
      {
        name: "Marc Dubois",
        role: "Responsable RENIA PRO",
        bio: "Marc accompagne bureaux, commerces et locations courte durée avec discrétion et précision.",
        image: "/images/pro-cleaning.jpg.png",
      },
      {
        name: "Inès Moreau",
        role: "Qualité & suivi client",
        bio: "Inès vérifie les détails, recueille les retours et garde chaque promesse sur les rails.",
        image: "/images/flyer-1-layout.jpg.jpg",
      },
    ],
    joinEyebrow: "Rejoignez-nous",
    joinTitle: "Envie de travailler avec nous ?",
    joinText:
      "Nous rencontrons toujours avec plaisir des personnes qui aiment le travail bien fait. Parlez-nous de votre expérience et nous reviendrons vers vous.",
    joinCta: "Nous contacter",
    ctaEyebrow: "Prêts à nous rencontrer ?",
    ctaTitle: "Parlons de votre espace.",
    ctaText:
      "Dites-nous ce dont vous avez besoin et nous vous proposerons la prestation adaptée, clairement et sans engagement.",
    cta: "Demander un devis",
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
      "La galerie apparaîtra dès que des médias seront ajoutés dans Supabase Storage.",
  },

  admin: {
    eyebrow: "Admin",
    title: "Tableau de bord",
    intro:
      "Gérez les demandes reçues et publiez vos réalisations dans la galerie publique.",
    signInTitle: "Connexion administrateur requise",
    signInText:
      "Connectez-vous avec votre compte administrateur pour accéder au tableau de bord.",
    signInCta: "Aller à la connexion",
    deniedTitle: "Accès restreint",
    deniedText:
      "Ce compte n’a pas les droits administrateur. Ajoutez votre email dans NEXT_PUBLIC_ADMIN_EMAILS ou attribuez un rôle admin à l’utilisateur dans Supabase.",
    signOut: "Se déconnecter",
    welcome: "Connecté en tant que",
    messagesEyebrow: "Boîte de réception",
    messagesTitle: "Messages et devis récents",
    messagesEmpty: "Aucun message pour le moment.",
    messagesError:
      "Impossible de charger les messages. Vérifiez la table quote_requests et ses politiques de sécurité.",
    refresh: "Actualiser",
    name: "Nom",
    service: "Service",
    date: "Date",
    phone: "Téléphone",
    email: "Email",
    message: "Message",
    uploadEyebrow: "Publier",
    uploadTitle: "Ajouter une réalisation",
    uploadText:
      "Ajoutez un flyer, une photo ou une vidéo à la galerie publique. Les fichiers apparaissent dans le pied de page et sur la page galerie.",
    fileLabel: "Fichier",
    fileHint: "JPG, PNG, WebP, MP4 ou WebM. 50 Mo maximum.",
    uploadCta: "Envoyer dans la galerie",
    uploading: "Envoi…",
    uploadSuccess: "Ajouté à la galerie.",
    uploadError:
      "Échec de l’envoi. Vérifiez le nom du bucket et ses politiques d’écriture.",
    uploadTypeError: "Veuillez choisir une image ou une vidéo.",
    uploadSizeError:
      "Ce fichier est trop lourd. Choisissez un fichier de moins de 50 Mo.",
    mediaEyebrow: "Publié",
    mediaTitle: "Médias de la galerie",
    mediaEmpty: "Aucun média publié pour le moment.",
    mediaError:
      "Impossible de charger les médias. Vérifiez le bucket et sa politique de lecture publique.",
    open: "Ouvrir",
    delete: "Supprimer",
    deleting: "Suppression…",
    deleteError: "Impossible de supprimer ce fichier.",
    storageSetup:
      "Créez un bucket Supabase Storage public nommé renia-gallery avec un dossier gallery.",
    tabInbox: "Boîte de réception",
    tabTeam: "Gérer l’équipe",
    teamEyebrow: "Équipe",
    teamTitle: "Gérer l’équipe",
    teamIntro:
      "Ajoutez un nouveau membre. Il apparaîtra sur la page /team immédiatement.",
    teamNameLabel: "Nom",
    teamRoleLabel: "Rôle",
    teamPhotoLabel: "Photo",
    teamSave: "Ajouter le membre",
    teamSaving: "Enregistrement…",
    teamSaved: "Membre ajouté.",
    teamNameRequired: "Veuillez saisir un nom.",
    teamError: "Impossible d’enregistrer le membre de l’équipe.",
  },
};

export type Translation = typeof en;

export const translations: Record<"en" | "fr", Translation> = { en, fr };
