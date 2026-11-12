"use client";

import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/site";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

const SECTOR_OPTIONS = {
  en: [
    { value: "Bureaux", label: "Offices" },
    { value: "Airbnb", label: "Airbnb" },
    { value: "Commerce", label: "Retail" },
    { value: "Syndic", label: "Property management" },
  ],
  fr: [
    { value: "Bureaux", label: "Bureaux" },
    { value: "Airbnb", label: "Airbnb" },
    { value: "Commerce", label: "Commerce" },
    { value: "Syndic", label: "Syndic" },
  ],
} as const;

const COPY = {
  en: {
    contactName: "Contact Name",
    companyName: "Company Name",
    businessEmail: "Business Email",
    phone: "Phone",
    sector: "Sector",
    propertySize: "Property Size (m²)",
    contactNamePlaceholder: "Your full name",
    companyNamePlaceholder: "Your company",
    emailPlaceholder: "you@company.com",
    phonePlaceholder: "+33 6 12 34 56 78",
    sizePlaceholder: "e.g. 250",
    hint: "Your request is saved, then WhatsApp opens with your message ready to send. Nothing is sent until you confirm it in WhatsApp.",
    whatsappButton: "Send via WhatsApp",
    emailButton: "Send via Email",
    alerts: {
      contactName: "Please enter the contact name.",
      companyName: "Please enter the company name.",
      email: "Please enter the business email.",
      invalidEmail: "Please enter a valid business email address.",
      phone: "Please enter the phone number.",
      size: "Please enter the property size in m².",
    },
  },
  fr: {
    contactName: "Nom du contact",
    companyName: "Nom de l'entreprise",
    businessEmail: "Email professionnel",
    phone: "Téléphone",
    sector: "Secteur",
    propertySize: "Surface (m²)",
    contactNamePlaceholder: "Votre nom complet",
    companyNamePlaceholder: "Votre entreprise",
    emailPlaceholder: "vous@entreprise.com",
    phonePlaceholder: "+33 6 12 34 56 78",
    sizePlaceholder: "ex. 250",
    hint: "Votre demande est enregistrée, puis WhatsApp s'ouvre avec votre message prêt à envoyer. Rien n'est envoyé tant que vous ne confirmez pas dans WhatsApp.",
    whatsappButton: "Envoyer via WhatsApp",
    emailButton: "Envoyer par email",
    alerts: {
      contactName: "Veuillez saisir le nom du contact.",
      companyName: "Veuillez saisir le nom de l'entreprise.",
      email: "Veuillez saisir l'email professionnel.",
      invalidEmail: "Veuillez saisir une adresse email professionnelle valide.",
      phone: "Veuillez saisir le numéro de téléphone.",
      size: "Veuillez saisir la surface en m².",
    },
  },
} as const;

type SectorValue = (typeof SECTOR_OPTIONS)["en"][number]["value"];

type ProFormState = {
  contactName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  sector: SectorValue;
  propertySize: string;
};

const initialForm: ProFormState = {
  contactName: "",
  companyName: "",
  businessEmail: "",
  phone: "",
  sector: SECTOR_OPTIONS.en[0].value,
  propertySize: "",
};

export default function ProForm() {
  const { language } = useLanguage();
  const copy = COPY[language];
  const sectorOptions = SECTOR_OPTIONS[language];

  const [form, setForm] = useState<ProFormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof ProFormState>(
    field: K,
    value: ProFormState[K],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const buildMessage = () => {
    const sectorLabel =
      sectorOptions.find((option) => option.value === form.sector)?.label ??
      form.sector;

    return `Hello RENIA PRO, My name is ${form.contactName.trim()} from ${form.companyName.trim()} (Sector: ${sectorLabel}). We are looking for cleaning services for approx ${form.propertySize.trim()} m². My contact is ${form.phone.trim()} / ${form.businessEmail.trim()}. Thank you.`;
  };

  const saveToDatabase = async (message: string) => {
    if (!isSupabaseConfigured()) return;

    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.from("quote_requests").insert({
        full_name: form.contactName.trim(),
        email: form.businessEmail.trim().toLowerCase(),
        phone: form.phone.trim(),
        service_type: "renia_pro",
        message,
      });

      if (error) {
        console.error("RENIA PRO request failed:", error);
      }
    } catch (error) {
      console.error("RENIA PRO request failed:", error);
    }
  };

  const handleSend = async (method: "whatsapp" | "email") => {
    if (!form.contactName.trim()) {
      alert(copy.alerts.contactName);
      return;
    }

    if (!form.companyName.trim()) {
      alert(copy.alerts.companyName);
      return;
    }

    if (!form.businessEmail.trim()) {
      alert(copy.alerts.email);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail.trim())) {
      alert(copy.alerts.invalidEmail);
      return;
    }

    if (!form.phone.trim()) {
      alert(copy.alerts.phone);
      return;
    }

    const propertySize = Number(form.propertySize);

    if (
      !form.propertySize.trim() ||
      !Number.isFinite(propertySize) ||
      propertySize <= 0
    ) {
      alert(copy.alerts.size);
      return;
    }

    setIsSubmitting(true);

    const message = buildMessage();
    await saveToDatabase(message);

    if (method === "whatsapp") {
      window.location.href = buildWhatsAppUrl(message);
    } else {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `RENIA PRO request — ${form.companyName.trim()}`,
      )}&body=${encodeURIComponent(message)}`;
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative z-50 min-w-0 pointer-events-auto">
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="pro-contact-name" className="field-label">
            {copy.contactName} <span className="text-stone/50">*</span>
          </label>
          <input
            id="pro-contact-name"
            type="text"
            autoComplete="name"
            value={form.contactName}
            onChange={(event) => updateField("contactName", event.target.value)}
            className="field-input relative z-10 pointer-events-auto"
            placeholder={copy.contactNamePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="pro-company-name" className="field-label">
            {copy.companyName} <span className="text-stone/50">*</span>
          </label>
          <input
            id="pro-company-name"
            type="text"
            autoComplete="organization"
            value={form.companyName}
            onChange={(event) => updateField("companyName", event.target.value)}
            className="field-input relative z-10 pointer-events-auto"
            placeholder={copy.companyNamePlaceholder}
          />
        </div>
      </div>

      <div className="mt-7 grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="pro-email" className="field-label">
            {copy.businessEmail} <span className="text-stone/50">*</span>
          </label>
          <input
            id="pro-email"
            type="email"
            autoComplete="email"
            value={form.businessEmail}
            onChange={(event) =>
              updateField("businessEmail", event.target.value)
            }
            className="field-input relative z-10 pointer-events-auto"
            placeholder={copy.emailPlaceholder}
          />
        </div>

        <div>
          <label htmlFor="pro-phone" className="field-label">
            {copy.phone} <span className="text-stone/50">*</span>
          </label>
          <input
            id="pro-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="field-input relative z-10 pointer-events-auto"
            placeholder={copy.phonePlaceholder}
          />
        </div>
      </div>

      <div className="mt-7 grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="pro-sector" className="field-label">
            {copy.sector}
          </label>
          <div className="relative">
            <select
              id="pro-sector"
              value={form.sector}
              onChange={(event) =>
                updateField("sector", event.target.value as SectorValue)
              }
              className="field-input relative z-10 w-full cursor-pointer appearance-none pr-11 pointer-events-auto"
            >
              {sectorOptions.map((option) => (
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

        <div>
          <label htmlFor="pro-size" className="field-label">
            {copy.propertySize} <span className="text-stone/50">*</span>
          </label>
          <input
            id="pro-size"
            type="number"
            inputMode="numeric"
            min="1"
            step="1"
            value={form.propertySize}
            onChange={(event) =>
              updateField("propertySize", event.target.value)
            }
            className="field-input relative z-10 pointer-events-auto"
            placeholder={copy.sizePlaceholder}
          />
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
