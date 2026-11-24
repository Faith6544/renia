"use client";

import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/site";
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

function openInNewTab(href: string) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default function ContactForm() {
  const { language, t } = useLanguage();
  const copy = t.contact.form;
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const alerts =
    language === "fr"
      ? {
          name: "Veuillez saisir votre nom.",
          email: "Veuillez saisir votre email.",
          invalidEmail: "Veuillez saisir une adresse email valide.",
          message: "Veuillez saisir votre message.",
        }
      : {
          name: "Please enter your name.",
          email: "Please enter your email.",
          invalidEmail: "Please enter a valid email address.",
          message: "Please enter your message.",
        };

  const updateField = (field: FormField, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const saveToDatabase = async (message: string) => {
    if (!isSupabaseConfigured()) return;

    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.from("quote_requests").insert({
        full_name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        service_type: "contact",
        message,
      });

      if (error) {
        console.error("Contact message failed:", error);
      }
    } catch (error) {
      console.error("Contact message failed:", error);
    }
  };

  const handleSend = async () => {
    if (!form.name.trim()) {
      alert(alerts.name);
      return;
    }

    if (!form.email.trim()) {
      alert(alerts.email);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      alert(alerts.invalidEmail);
      return;
    }

    if (!form.message.trim()) {
      alert(alerts.message);
      return;
    }

    setStatus("sending");

    const message = [
      `${t.contact.form.name}: ${form.name.trim()}`,
      `${t.contact.form.email}: ${form.email.trim()}`,
      form.phone.trim() && `${t.contact.form.phone}: ${form.phone.trim()}`,
      form.subject.trim() &&
        `${t.contact.form.subject}: ${form.subject.trim()}`,
      "",
      form.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    await saveToDatabase(message);

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      form.subject.trim() || "Message from the Renia website",
    )}&body=${encodeURIComponent(message)}`;

    openInNewTab(mailtoUrl);
    openInNewTab(buildWhatsAppUrl(message));

    setStatus("sent");
  };

  const reset = () => {
    setForm(initialForm);
    setStatus("idle");
  };

  if (status === "sent") {
    return (
      <div className="card-soft relative z-50 p-8 text-center sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
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
        <h3 className="mt-6 text-3xl font-extrabold">{t.form.successTitle}</h3>
        <p className="mx-auto mt-4 max-w-md text-base font-medium leading-relaxed text-stone">
          {t.form.successBody}
        </p>
        <button
          type="button"
          onClick={reset}
          className="btn btn-dark mt-8 cursor-pointer"
        >
          {t.form.successAgain}
        </button>
      </div>
    );
  }

  return (
    <div className="relative z-50 min-w-0 pointer-events-auto">
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

      <div className="mt-8 rounded-2xl bg-brand-soft/70 p-6">
        <p className="mb-6 text-base font-medium leading-relaxed text-stone">
          {t.forms.note}
        </p>

        <button
          type="button"
          onClick={handleSend}
          disabled={status === "sending"}
          className="btn btn-primary w-full cursor-pointer justify-center text-center disabled:opacity-50 sm:w-auto"
        >
          {status === "sending" ? t.forms.sending : t.forms.send}
        </button>
      </div>
    </div>
  );
}
