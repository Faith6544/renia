"use client";

import { useState, type FormEvent } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/site";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type FormField = keyof typeof initialForm;

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [opened, setOpened] = useState(false);

  const updateField = (field: FormField, value: string) => {
    setOpened(false);
    setForm((current) => ({ ...current, [field]: value }));
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = form.name.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();
    const contactDetails = [form.email.trim(), form.phone.trim()]
      .filter(Boolean)
      .join(" · ");

    const whatsappMessage = [
      `Hello Renia Services, my name is ${name}.`,
      subject ? `Subject: ${subject}.` : "",
      message,
      contactDetails ? `Contact: ${contactDetails}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    window.open(
      buildWhatsAppUrl(whatsappMessage),
      "_blank",
      "noopener,noreferrer",
    );
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0">
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="contact-name" className="field-label">
            {t.contact.form.name} <span className="text-stone/50">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="field-input"
            placeholder={t.contact.form.namePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="field-label">
            {t.contact.form.email} <span className="text-stone/50">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="field-input"
            placeholder={t.contact.form.emailPlaceholder}
          />
        </div>
      </div>

      <div className="mt-7 grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="contact-phone" className="field-label">
            {t.contact.form.phone} <span className="text-stone/50">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="field-input"
            placeholder={t.contact.form.phonePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="field-label">
            {t.contact.form.subject}
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            className="field-input"
            placeholder={t.contact.form.subjectPlaceholder}
          />
        </div>
      </div>

      <div className="mt-7">
        <label htmlFor="contact-message" className="field-label">
          {t.contact.form.message} <span className="text-stone/50">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="field-input resize-none"
          placeholder={t.contact.form.messagePlaceholder}
        />
      </div>

      <div className="mt-8 flex flex-col gap-6 rounded-2xl bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[11px] leading-relaxed text-stone">
          {t.contact.form.submitHint}
        </p>

        <button type="submit" className="btn btn-dark group">
          {t.contact.form.submit}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>

      <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-stone/70">
        {t.contact.form.required}
      </p>

      <div aria-live="polite">
        {opened ? (
          <p className="mt-6 rounded-xl bg-gold/10 px-4 py-3 text-sm leading-relaxed text-forest">
            {t.contact.form.opened}
          </p>
        ) : null}
      </div>
    </form>
  );
}
