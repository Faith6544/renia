export type Language = "en" | "fr";

const en = {
  nav: {
    home: "Home",
    about: "About Us",
    reniaHome: "RENIA HOME",
    reniaPro: "RENIA PRO",
    howItWorks: "How It Works",
    faq: "FAQ",
    contact: "Contact",
    quote: "Request a Quote",
    book: "Book a Service",
    commitments: "Our commitments",
  },
  hero: {
    eyebrow: "Cleaning services · Yvelines 78",
    title:
      "Your trusted partner for the upkeep of your living and working spaces.",
    subtitle:
      "Professional cleaning services tailored to your needs, for individuals and businesses across the Yvelines.",
    quote: "Get a free quote",
    services: "Discover our services",
  },
  sap: {
    eyebrow: "Personal services (SAP)",
    credit: "tax credit",
    title: "A 50% tax credit on your cleaning services.",
    body: "As an approved personal services provider, Renia Home lets eligible households recover half the cost of their cleaning.",
    points: [
      "50% tax credit for eligible customers",
      "Declared, trained and insured professionals",
      "Simple invoicing and annual tax certificate",
    ],
    note: "Eligibility depends on your situation. We are happy to explain it in detail.",
  },
  split: {
    eyebrow: "Our two houses",
    title: "One standard of care, two ways to serve you.",
    home: {
      label: "RENIA HOME",
      kicker: "Residential",
      description:
        "Regular and one-off cleaning for private homes, apartments and second residences.",
      cta: "Discover RENIA HOME",
    },
    pro: {
      label: "RENIA PRO",
      kicker: "Airbnb & Commercial",
      description:
        "Turnovers, offices and commercial spaces maintained with precision and discretion.",
      cta: "Discover RENIA PRO",
    },
  },
  quote: {
    eyebrow: "Request a quote",
    title: "Tell us about your space.",
    body: "Share a few details and we will reply within one business day with a tailored quote. Free and without obligation.",
    responseLabel: "Response time",
    responseValue: "Within one business day",
    emailLabel: "Prefer email?",
    areaLabel: "Service area",
    areaValue: "Yvelines (78) and surrounding areas",
  },
  form: {
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    serviceType: "Service type",
    serviceHome: "RENIA HOME — Residential",
    servicePro: "RENIA PRO — Airbnb & Commercial",
    message: "Message",
    namePlaceholder: "Jane Doe",
    emailPlaceholder: "jane@example.com",
    phonePlaceholder: "+33 6 00 00 00 00",
    messagePlaceholder:
      "Tell us about your space, its size and how often you would like us to visit.",
    consent:
      "By submitting, you agree to be contacted about your quote. No spam, ever.",
    submit: "Send request",
    sending: "Sending...",
    successEyebrow: "Request received",
    successTitle: "Thank you",
    successBody:
      "Your request is with us. We will review the details and reply within one business day.",
    successAgain: "Send another request",
    errorGeneric:
      "Something went wrong while sending your request. Please try again or email contact@reniaservices.fr.",
    setup:
      "The quote form is not connected yet. Add your Supabase credentials to .env.local and restart the server.",
  },
  footer: {
    tagline: "Healthy, calm and naturally welcoming spaces.",
    servicesTitle: "Services",
    companyTitle: "Company",
    contactTitle: "Get in touch",
    home: "RENIA HOME",
    pro: "RENIA PRO",
    about: "About",
    commitments: "Our commitments",
    contact: "Contact",
    quote: "Request a quote",
    howItWorks: "How It Works",
    faq: "FAQ",
    book: "Book a Service",
    areaLabel: "Service area",
    area: "Yvelines (78)",
    hours: "Monday – Saturday · 8am – 6pm",
    rights: "All rights reserved.",
    signature: "Residential & Commercial Cleaning",
    legalTitle: "Legal",
    legalNotice: "Legal notice",
    privacy: "Privacy policy",
    terms: "Terms of sale",
  },
};

const fr: typeof en = {
  nav: {
    home: "Accueil",
    about: "À propos",
    reniaHome: "RENIA HOME",
    reniaPro: "RENIA PRO",
    howItWorks: "Comment ça marche",
    faq: "FAQ",
    contact: "Contact",
    quote: "Demander un devis",
    book: "Réserver un service",
    commitments: "Nos engagements",
  },
  hero: {
    eyebrow: "Services de nettoyage · Yvelines 78",
    title:
      "Votre partenaire de confiance pour l'entretien de vos espaces de vie et de travail.",
    subtitle:
      "Des prestations de nettoyage professionnelles, adaptées à vos besoins, pour les particuliers comme pour les professionnels des Yvelines.",
    quote: "Devis gratuit",
    services: "Découvrir nos services",
  },
  sap: {
    eyebrow: "Services à la personne (SAP)",
    credit: "crédit d'impôt",
    title: "Un crédit d'impôt de 50 % sur vos prestations de nettoyage.",
    body: "En tant que prestataire de services à la personne agréé, Renia Home permet aux foyers éligibles de récupérer la moitié du coût de leurs prestations de nettoyage.",
    points: [
      "Crédit d'impôt de 50 % pour les clients éligibles",
      "Professionnels déclarés, formés et assurés",
      "Facturation simple et attestation fiscale annuelle",
    ],
    note: "L'éligibilité dépend de votre situation. Nous serons ravis de vous l'expliquer en détail.",
  },
  split: {
    eyebrow: "Nos deux maisons",
    title: "Une même exigence, deux façons de vous accompagner.",
    home: {
      label: "RENIA HOME",
      kicker: "Résidentiel",
      description:
        "Nettoyage régulier et ponctuel pour maisons, appartements et résidences secondaires.",
      cta: "Découvrir RENIA HOME",
    },
    pro: {
      label: "RENIA PRO",
      kicker: "Airbnb & Professionnel",
      description:
        "Remises en état, bureaux et espaces commerciaux entretenus avec précision et discrétion.",
      cta: "Découvrir RENIA PRO",
    },
  },
  quote: {
    eyebrow: "Demander un devis",
    title: "Parlez-nous de votre espace.",
    body: "Partagez quelques informations et nous vous répondrons sous un jour ouvré avec un devis personnalisé. Gratuit et sans engagement.",
    responseLabel: "Délai de réponse",
    responseValue: "Sous un jour ouvré",
    emailLabel: "Vous préférez écrire ?",
    areaLabel: "Zone d'intervention",
    areaValue: "Yvelines (78) et alentours",
  },
  form: {
    fullName: "Nom complet",
    email: "Email",
    phone: "Téléphone",
    serviceType: "Type de service",
    serviceHome: "RENIA HOME — Résidentiel",
    servicePro: "RENIA PRO — Airbnb & Professionnel",
    message: "Message",
    namePlaceholder: "Marie Dupont",
    emailPlaceholder: "marie@exemple.com",
    phonePlaceholder: "+33 6 00 00 00 00",
    messagePlaceholder:
      "Parlez-nous de votre espace, de sa surface et de la fréquence de vos visites souhaitées.",
    consent:
      "En envoyant ce formulaire, vous acceptez d'être contacté au sujet de votre devis. Aucun spam, jamais.",
    submit: "Envoyer la demande",
    sending: "Envoi...",
    successEyebrow: "Demande reçue",
    successTitle: "Merci",
    successBody:
      "Votre demande nous est bien parvenue. Nous en étudierons les détails et vous répondrons sous un jour ouvré.",
    successAgain: "Envoyer une autre demande",
    errorGeneric:
      "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer ou écrire à contact@reniaservices.fr.",
    setup:
      "Le formulaire de devis n'est pas encore connecté. Ajoutez vos identifiants Supabase dans .env.local puis redémarrez le serveur.",
  },
  footer: {
    tagline: "Des espaces sains, sereins et naturellement accueillants.",
    servicesTitle: "Services",
    companyTitle: "Entreprise",
    contactTitle: "Nous contacter",
    home: "RENIA HOME",
    pro: "RENIA PRO",
    about: "À propos",
    commitments: "Nos engagements",
    contact: "Contact",
    quote: "Demander un devis",
    howItWorks: "Comment ça marche",
    faq: "FAQ",
    book: "Réserver une prestation",
    areaLabel: "Zone d'intervention",
    area: "Yvelines (78)",
    hours: "Lundi – Samedi · 8h – 18h",
    rights: "Tous droits réservés.",
    signature: "Nettoyage résidentiel & commercial",
    legalTitle: "Informations légales",
    legalNotice: "Mentions légales",
    privacy: "Politique de confidentialité",
    terms: "CGV",
  },
};

export type Dictionary = typeof en;

export const dictionary: Record<Language, Dictionary> = { en, fr };
