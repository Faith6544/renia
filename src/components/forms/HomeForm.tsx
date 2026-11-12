"use client";

import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/site";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

const SERVICE_OPTIONS = {
  en: [
    { value: "Ménage régulier", label: "Regular cleaning" },
    { value: "Grand nettoyage", label: "Deep cleaning" },
    { value: "Repassage", label: "Ironing" },
  ],
  fr: [
    { value: "Ménage régulier", label: "Ménage régulier" },
    { value: "Grand nettoyage", label: "Grand nettoyage" },
    { value: "Repassage", label: "Repassage" },
  ],
} as const;

const FREQUENCY_OPTIONS = {
  en: [
    { value: "Weekly", label: "Weekly" },
    { value: "Bi-weekly", label: "Bi-weekly" },
    { value: "Once", label: "Once" },
  ],
  fr: [
    { value: "Weekly", label: "Hebdomadaire" },
    { value: "Bi-weekly", label: "Toutes les deux semaines" },
    { value: "Once", label: "Une fois" },
  ],
} as const;

const COPY = {
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    serviceType: "Service Type",
    frequency: "Frequency",
    namePlaceholder: "Your full name",
    emailPlaceholder: "you@example.com",
    phonePlaceholder: "+33 6 12 34 56 78",
    hint: "Your request is saved, then WhatsApp opens with your message ready to send. Nothing is sent until you confirm it in WhatsApp.",
    whatsappButton: "Send via WhatsApp",
    emailButton: "Send via Email",
    alerts: {
      name: "Please enter your name.",
      email: "Please enter your email.",
      invalidEmail: "Please enter a valid email address.",
      phone: "Please enter your phone number.",
    },
  },
  fr: {
    name: "Nom",
    email: "Email",
    phone: "Téléphone",
    serviceType: "Type de service",
    frequency: "Fréquence",
    namePlaceholder: "Votre nom complet",
    emailPlaceholder: "vous@exemple.com",
    phonePlaceholder: "+33 6 12 34 56 78",
    hint: "Votre demande est enregistrée, puis WhatsApp s'ouvre avec votre message prêt à envoyer. Rien n'est envoyé tant que vous ne confirmez pas dans WhatsApp.",
    whatsappButton: "Envoyer via WhatsApp",
    emailButton: "Envoyer par email",
    alerts: {
      name: "Veuillez saisir votre nom.",
      email: "Veuillez saisir votre email.",
      invalidEmail: "Veuillez saisir une adresse email valide.",
      phone: "Veuillez saisir votre numéro de téléphone.",
    },
  },
} as const;

type ServiceValue = (typeof SERVICE_OPTIONS)["en"][number]["value"];
type FrequencyValue = (typeof FREQUENCY_OPTIONS)["en"][number]["value"];

type HomeFormState = {
  name: string;
  email: string;
  phone: string;
  serviceType: ServiceValue;
  frequency: FrequencyValue;
};

const initialForm: HomeFormState = {
  name: "",
  email: "",
  phone: "",
  serviceType: SERVICE_OPTIONS.en[0].value,
  frequency: FREQUENCY_OPTIONS.en[0].value,
};

export default function HomeForm() {
  const { language } = useLanguage();
  const copy = COPY[language];
  const serviceOptions = SERVICE_OPTIONS[language];
  const frequencyOptions = FREQUENCY_OPTIONS[language];

  const [form, setForm] = useState<HomeFormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof HomeFormState>(
    field: K,
    value: HomeFormState[K],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const buildMessage = () => {
    const serviceLabel =
      serviceOptions.find((option) => option.value === form.serviceType)
        ?.label ?? form.serviceType;
    const frequencyLabel =
      frequencyOptions.find((option) => option.value === form.frequency)
        ?.label ?? form.frequency;

    return `Hello RENIA HOME, My name is ${form.name.trim()}. I am interested in ${serviceLabel} with a frequency of ${frequencyLabel}. My contact is ${form.phone.trim()} / ${form.email.trim()}. Thank you.`;
  };

  const saveToDatabase = async (message: string) => {
    if (!isSupabaseConfigured()) return;

    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.from("quote_requests").insert({
        full_name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        service_type: "renia_home",
        message,
      });

      if (error) {
        console.error("RENIA HOME request failed:", error);
      }
    } catch (error) {
      console.error("RENIA HOME request failed:", error);
    }
  };

  const handleSend = async (method: "whatsapp" | "email") => {
    if (!form.name.trim()) {
      alert(copy.alerts.name);
      return;
    }

    if (!form.email.trim()) {
      alert(copy.alerts.email);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      alert(copy.alerts.invalidEmail);
      return;
    }

    if (!form.phone.trim()) {
      alert(copy.alerts.phone);
      return;
    }

    setIsSubmitting(true);

    const message = buildMessage();
    await saveToDatabase(message);

    if (method === "whatsapp") {
      window.location.href = buildWhatsAppUrl(message);
    } else {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `RENIA HOME request — ${form.serviceType}`,
      )}&body=${encodeURIComponent(message)}`;
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative z-50 min-w-0 pointer-events-auto">
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="home-name" className="field-label">
            {copy.name} <span className="text-stone/50">*</span>
          </label>
          <input
            id="home-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="field-input relative z-10 pointer-events-auto"
            placeholder={copy.namePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="home-email" className="field-label">
            {copy.email} <span className="text-stone/50">*</span>
          </label>
          <input
            id="home-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="field-input relative z-10 pointer-events-auto"
            placeholder={copy.emailPlaceholder}
          />
        </div>
      </div>

      <div className="mt-7 grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="home-phone" className="field-label">
            {copy.phone} <span className="text-stone/50">*</span>
          </label>
          <input
            id="home-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="field-input relative z-10 pointer-events-auto"
            placeholder={copy.phonePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="home-service" className="field-label">
            {copy.serviceType}
          </label>
          <div className="relative">
            <select
              id="home-service"
              value={form.serviceType}
              onChange={(event) =>
                updateField("serviceType", event.target.value as ServiceValue)
              }
              className="field-input relative z-10 w-full cursor-pointer appearance-none pr-11 pointer-events-auto"
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 12 8"
              className="pointer-events-none absolute right-4 top-1/2 h-2 w-3 -translate-y-1/2 fill-none stroke-forest stroke-[1.25]"
            >
              <path d="M1 1.5 6 6.5l5-5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <label htmlFor="home-frequency" className="field-label">
          {copy.frequency}
        </label>
        <div className="relative">
          <select
            id="home-frequency"
            value={form.frequency}
            onChange={(event) =>
              updateField("frequency", event.target.value as FrequencyValue)
            }
            className="field-input relative z-10 w-full cursor-pointer appearance-none pr-11 pointer-events-auto"
          >
            {frequencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 12 8"
            className="pointer-events-none absolute right-4 top-1/2 h-2 w-3 -translate-y-1/2 fill-none stroke-forest stroke-[1.25]"
          >
            <path d="M1 1.5 6 6.5l5-5" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mt-8 rounded-2xl bg-white/60 p-6 pointer-events-auto">
        <p className="mb-6 text-base leading-relaxed text-stone">
          {copy.hint}
        </p>

        <div className="relative z-10 flex flex-col gap-4 pointer-events-auto sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => handleSend("whatsapp")}
            disabled={isSubmitting}
            className="btn btn-gold relative z-10 flex-1 cursor-pointer justify-center text-center pointer-events-auto disabled:opacity-50"
          >
            {copy.whatsappButton}
          </button>

          <button
            type="button"
            onClick={() => handleSend("email")}
            disabled={isSubmitting}
            className="btn btn-dark relative z-10 flex-1 cursor-pointer justify-center text-center pointer-events-auto disabled:opacity-50"
          >
            {copy.emailButton}
          </button>
        </div>
      </div>
    </div>
  );
}
