"use client";

import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/site";

const initialForm = {
  service: "home",
  date: "",
  time: "",
  name: "",
  phone: "",
  email: "",
};

type BookingField = keyof typeof initialForm;

export default function BookingForm() {
  const { t, language } = useLanguage();
  const page = t.booking;
  const alerts =
    language === "fr"
      ? {
          date: "Veuillez choisir une date.",
          time: "Veuillez choisir un horaire.",
          name: "Veuillez saisir votre nom.",
          phone: "Veuillez saisir votre numéro de téléphone.",
          email: "Veuillez saisir votre email.",
          invalidEmail: "Veuillez saisir une adresse email valide.",
        }
      : {
          date: "Please choose a date.",
          time: "Please choose a time.",
          name: "Please enter your name.",
          phone: "Please enter your phone number.",
          email: "Please enter your email.",
          invalidEmail: "Please enter a valid email address.",
        };
  const [form, setForm] = useState(initialForm);
  const [opened, setOpened] = useState(false);

  const updateField = (field: BookingField, value: string) => {
    setOpened(false);
    setForm((current) => ({ ...current, [field]: value }));
  };

  function handleSend() {
    if (!form.date) {
      alert(alerts.date);
      return;
    }

    if (!form.time) {
      alert(alerts.time);
      return;
    }

    if (!form.name.trim()) {
      alert(alerts.name);
      return;
    }

    if (!form.phone.trim()) {
      alert(alerts.phone);
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

    const service =
      form.service === "pro" ? page.servicePro : page.serviceHome;

    const message = [
      `${page.eyebrow} — Renia Services`,
      `${page.serviceLabel}: ${service}`,
      `${page.dateLabel}: ${form.date}`,
      `${page.timeLabel}: ${form.time}`,
      `${page.nameLabel}: ${form.name.trim()}`,
      `${page.phoneLabel}: ${form.phone.trim()}`,
      `${page.emailLabel}: ${form.email.trim()}`,
    ].join("\n");

    setOpened(true);
    window.location.href = buildWhatsAppUrl(message);
  }

  return (
    <div className="relative z-50 min-w-0 pointer-events-auto">
      <div>
        <label htmlFor="booking-service" className="field-label">
          {page.serviceLabel} <span className="text-stone/50">*</span>
        </label>
        <div className="relative">
          <select
            id="booking-service"
            name="service"
            required
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="field-input cursor-pointer pr-10"
          >
            <option value="home">{page.serviceHome}</option>
            <option value="pro">{page.servicePro}</option>
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

      <div className="mt-7 grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="booking-date" className="field-label">
            {page.dateLabel} <span className="text-stone/50">*</span>
          </label>
          <input
            id="booking-date"
            name="date"
            type="date"
            required
            value={form.date}
            onChange={(event) => updateField("date", event.target.value)}
            className="field-input cursor-pointer"
          />
        </div>

        <div>
          <label htmlFor="booking-time" className="field-label">
            {page.timeLabel} <span className="text-stone/50">*</span>
          </label>
          <input
            id="booking-time"
            name="time"
            type="time"
            required
            value={form.time}
            onChange={(event) => updateField("time", event.target.value)}
            className="field-input cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-7 grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="booking-name" className="field-label">
            {page.nameLabel} <span className="text-stone/50">*</span>
          </label>
          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="field-input"
            placeholder={page.namePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="booking-phone" className="field-label">
            {page.phoneLabel} <span className="text-stone/50">*</span>
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="field-input"
            placeholder={page.phonePlaceholder}
          />
        </div>
      </div>

      <div className="mt-7">
        <label htmlFor="booking-email" className="field-label">
          {page.emailLabel} <span className="text-stone/50">*</span>
        </label>
        <input
          id="booking-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="field-input"
          placeholder={page.emailPlaceholder}
        />
      </div>

      <div className="mt-8 flex flex-col gap-6 rounded-2xl bg-cream p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-base leading-relaxed text-stone">
          {page.submitHint}
        </p>

        <button
          type="button"
          onClick={handleSend}
          className="btn btn-dark group shrink-0 pointer-events-auto"
        >
          {page.submit}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>

      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-stone/70">
        {page.required}
      </p>

      <div aria-live="polite">
        {opened ? (
          <p className="mt-6 rounded-xl bg-gold/10 px-4 py-3 text-base leading-relaxed text-forest">
            {page.opened}
          </p>
        ) : null}
      </div>
    </div>
  );
}
