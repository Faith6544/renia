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

export default function ContactForm() {
  const { t } = useLanguage() as { t: any };
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: FormField, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const saveToDatabase = async () => {
    if (!isSupabaseConfigured()) return;
    try {
      const supabase = getSupabaseBrowserClient();
      await supabase.from("quote_requests").insert({
        full_name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        service_type: "home",
        message: `Subject: ${form.subject}\n\n${form.message}`,
      });
    } catch {
      // Ignore
    }
  };

  const handleSend = async (method: "whatsapp" | "email") => {
    // Manual Validation (Shows an alert so you know why it's not working)
    if (!form.name.trim()) return alert("Please enter your name.");
    if (!form.email.trim()) return alert("Please enter your email.");
    if (!form.message.trim()) return alert("Please enter a message.");

    setIsSubmitting(true);
    await saveToDatabase();

    const lines = [];
    lines.push(`Hello RENIA SERVICES,`);
    lines.push(`My name is ${form.name}.`);
    if (form.phone) lines.push(`My phone number is ${form.phone}.`);
    if (form.email) lines.push(`My email is ${form.email}.`);
    if (form.subject) lines.push(`\nSubject: ${form.subject}`);
    lines.push(`\nMessage:\n${form.message}`);
    lines.push(`\nThank you.`);

    const formattedMessage = lines.join("\n");

    if (method === "whatsapp") {
      window.location.href = buildWhatsAppUrl(formattedMessage);
    } else {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        form.subject || "Contact from Website"
      )}&body=${encodeURIComponent(formattedMessage)}`;
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative z-50 min-w-0 pointer-events-auto">
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="contact-name" className="field-label">
            {t.contact?.form?.name || "Name"} <span className="text-stone/50">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="field-input relative z-50 pointer-events-auto"
            placeholder={t.contact?.form?.namePlaceholder || "Jane Doe"}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="field-label">
            {t.contact?.form?.email || "Email"} <span className="text-stone/50">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="field-input relative z-50 pointer-events-auto"
            placeholder={t.contact?.form?.emailPlaceholder || "jane@example.com"}
          />
        </div>
      </div>

      <div className="mt-7 grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="contact-phone" className="field-label">
            {t.contact?.form?.phone || "Phone"} <span className="text-stone/50">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="field-input relative z-50 pointer-events-auto"
            placeholder={t.contact?.form?.phonePlaceholder || "+33 6 12 34 56 78"}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="field-label">
            {t.contact?.form?.subject || "Subject"}
          </label>
          <input
            id="contact-subject"
            type="text"
            value={form.subject}
            onChange={(e) => updateField("subject", e.target.value)}
            className="field-input relative z-50 pointer-events-auto"
            placeholder={t.contact?.form?.subjectPlaceholder || "Quote request, question..."}
          />
        </div>
      </div>

      <div className="mt-7">
        <label htmlFor="contact-message" className="field-label">
          {t.contact?.form?.message || "Message"} <span className="text-stone/50">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="field-input relative z-50 resize-none pointer-events-auto"
          placeholder={t.contact?.form?.messagePlaceholder || "Tell us about your space..."}
        />
      </div>

      <div className="relative z-50 mt-8 rounded-2xl bg-white/60 p-6 pointer-events-auto">
        <p className="mb-6 text-[11px] leading-relaxed text-stone">
          {t.contact?.form?.submitHint || "Fill out the form above, then choose how you want to send it."}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center relative z-[999] pointer-events-auto">
          <button
            type="button"
            onClick={() => handleSend("whatsapp")}
            disabled={isSubmitting}
            className="btn btn-gold relative z-[999] flex-1 cursor-pointer justify-center text-center disabled:opacity-50 pointer-events-auto"
          >
            Send via WhatsApp
          </button>

          <button
            type="button"
            onClick={() => handleSend("email")}
            disabled={isSubmitting}
            className="btn btn-dark relative z-[999] flex-1 cursor-pointer justify-center text-center disabled:opacity-50 pointer-events-auto"
          >
            Send via Email
          </button>
        </div>
      </div>
    </div>
  );
}