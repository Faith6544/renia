"use client";

import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_EMAIL } from "@/lib/site";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type FormField = keyof typeof initialForm;

const COPY = {
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
    namePlaceholder: "Your full name",
    emailPlaceholder: "you@example.com",
    phonePlaceholder: "+33 6 12 34 56 78",
    subjectPlaceholder: "Quote request, question, partnership…",
    messagePlaceholder:
      "Tell us about your space, its size and how often you would like us to visit.",
    send: "Send Message",
    sending: "Sending…",
    hint: "We only use your details to reply to your request.",
    successTitle: "Message sent",
    successText:
      "Thank you. We have received your message and will reply within one business day.",
    another: "Send another message",
    alerts: {
      name: "Please enter your name.",
      email: "Please enter your email.",
      invalidEmail: "Please enter a valid email address.",
      message: "Please enter your message.",
    },
  },
  fr: {
    name: "Nom",
    email: "Email",
    phone: "Téléphone",
    subject: "Objet",
    message: "Message",
    namePlaceholder: "Votre nom complet",
    emailPlaceholder: "vous@exemple.com",
    phonePlaceholder: "+33 6 12 34 56 78",
    subjectPlaceholder: "Demande de devis, question, partenariat…",
    messagePlaceholder:
      "Parlez-nous de votre espace, de sa surface et de la fréquence de vos visites souhaitées.",
    send: "Envoyer le message",
    sending: "Envoi…",
    hint: "Vos coordonnées servent uniquement à répondre à votre demande.",
    successTitle: "Message envoyé",
    successText:
      "Merci. Nous avons bien reçu votre message et vous répondrons sous un jour ouvré.",
    another: "Envoyer un autre message",
    alerts: {
      name: "Veuillez saisir votre nom.",
      email: "Veuillez saisir votre email.",
      invalidEmail: "Veuillez saisir une adresse email valide.",
      message: "Veuillez saisir votre message.",
    },
  },
} as const;

export default function ContactForm() {
  const { language } = useLanguage();
  const copy = COPY[language];
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const updateField = (field: FormField, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const saveToDatabase = async () => {
    if (!isSupabaseConfigured()) return false;

    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.from("quote_requests").insert({
        full_name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        service_type: "contact",
        message: [form.subject && `Subject: ${form.subject}`, form.message]
          .filter(Boolean)
          .join("\n\n"),
      });

      if (error) {
        console.error("Contact message failed:", error);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Contact message failed:", error);
      return false;
    }
  };

  const handleSend = async () => {
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

    if (!form.message.trim()) {
      alert(copy.alerts.message);
      return;
    }

    setStatus("sending");
    const saved = await saveToDatabase();
    setStatus("sent");

    // If Supabase is not configured, keep the message deliverable by
    // opening the visitor's email client instead.
    if (!saved) {
      const body = [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        form.phone.trim() && `Phone: ${form.phone.trim()}`,
        form.subject.trim() && `Subject: ${form.subject.trim()}`,
        "",
        form.message.trim(),
      ]
        .filter(Boolean)
        .join("\n");

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        form.subject.trim() || "Message from the Renia website",
      )}&body=${encodeURIComponent(body)}`;
    }
  };

  const reset = () => {
    setForm(initialForm);
    setStatus("idle");
  };

  if (status === "sent") {
    return (
      <div className="relative z-10 rounded-2xl bg-white/70 p-8 text-center sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>
        </span>
        <h3 className="mt-6 font-serif text-3xl leading-tight text-forest">
          {copy.successTitle}
        </h3>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-stone">
          {copy.successText}
        </p>
        <button
          type="button"
          onClick={reset}
          className="btn btn-dark mt-8 cursor-pointer"
        >
          {copy.another}
        </button>
      </div>
    );
  }

  return (
    <div className="relative z-10 min-w-0">
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="contact-name" className="field-label">
            {copy.name} <span className="text-stone/50">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="field-input"
            placeholder={copy.namePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="field-label">
            {copy.email} <span className="text-stone/50">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="field-input"
            placeholder={copy.emailPlaceholder}
          />
        </div>
      </div>

      <div className="mt-7 grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="contact-phone" className="field-label">
            {copy.phone}
          </label>
          <input
            id="contact-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="field-input"
            placeholder={copy.phonePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="field-label">
            {copy.subject}
          </label>
          <input
            id="contact-subject"
            type="text"
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            className="field-input"
            placeholder={copy.subjectPlaceholder}
          />
        </div>
      </div>

      <div className="mt-7">
        <label htmlFor="contact-message" className="field-label">
          {copy.message} <span className="text-stone/50">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="field-input resize-none"
          placeholder={copy.messagePlaceholder}
        />
      </div>

      <div className="mt-8 rounded-2xl bg-white/60 p-6">
        <p className="mb-6 text-base leading-relaxed text-stone">
          {copy.hint}
        </p>

        <button
          type="button"
          onClick={handleSend}
          disabled={status === "sending"}
          className="btn btn-gold w-full cursor-pointer justify-center text-center disabled:opacity-50 sm:w-auto"
        >
          {status === "sending" ? copy.sending : copy.send}
        </button>
      </div>
    </div>
  );
}
