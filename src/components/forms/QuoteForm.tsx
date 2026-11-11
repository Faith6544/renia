"use client";

import { useState, type FormEvent } from "react";

import { useLanguage } from "@/context/LanguageContext";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";
import type { ServiceType } from "@/types";

type Status = "idle" | "loading" | "success";
type ErrorKind = "setup" | "generic" | null;

const initialForm = {
  full_name: "",
  email: "",
  phone: "",
  service_type: "home" as ServiceType,
  message: "",
};

export default function QuoteForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorKind, setErrorKind] = useState<ErrorKind>(null);
  const [submittedName, setSubmittedName] = useState("");

  const errorMessage =
    errorKind === "setup"
      ? t.form.setup
      : errorKind === "generic"
        ? t.form.errorGeneric
        : "";

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setErrorKind(null);
    setForm((current) => ({ ...current, [field]: value }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorKind(null);

    if (!isSupabaseConfigured()) {
      setErrorKind("setup");
      return;
    }

    setStatus("loading");

    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.from("quote_requests").insert({
        full_name: form.full_name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        service_type: form.service_type,
        message: form.message.trim(),
      });

      if (error) throw error;

      setSubmittedName(form.full_name.trim().split(" ")[0] ?? "");
      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      console.error("Quote request failed:", error);
      setStatus("idle");
      setErrorKind(isSupabaseConfigured() ? "generic" : "setup");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex min-h-[440px] flex-col justify-between"
        aria-live="polite"
      >
        <div>
          <p className="eyebrow text-gold">{t.form.successEyebrow}</p>
          <h3 className="mt-8 font-serif text-3xl leading-tight tracking-[-0.01em] sm:text-4xl">
            {t.form.successTitle}
            {submittedName ? `, ${submittedName}` : ""}.
          </h3>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-stone">
            {t.form.successBody}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setErrorKind(null);
          }}
          className="pill-link mt-10 self-start"
        >
          {t.form.successAgain}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0">
      <fieldset
        disabled={status === "loading"}
        className="min-w-0 space-y-7 disabled:opacity-60"
      >
        <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
          <div>
            <label htmlFor="full_name" className="field-label">
              {t.form.fullName} <span className="text-stone/50">*</span>
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              autoComplete="name"
              required
              value={form.full_name}
              onChange={(event) =>
                updateField("full_name", event.target.value)
              }
              className="field-input"
              placeholder={t.form.namePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="email" className="field-label">
              {t.form.email} <span className="text-stone/50">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="field-input"
              placeholder={t.form.emailPlaceholder}
            />
          </div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
          <div>
            <label htmlFor="phone" className="field-label">
              {t.form.phone} <span className="text-stone/50">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className="field-input"
              placeholder={t.form.phonePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="service_type" className="field-label">
              {t.form.serviceType}
            </label>
            <div className="relative">
              <select
                id="service_type"
                name="service_type"
                value={form.service_type}
                onChange={(event) =>
                  updateField(
                    "service_type",
                    event.target.value as ServiceType,
                  )
                }
                className="field-input cursor-pointer pr-8"
              >
                <option value="home">{t.form.serviceHome}</option>
                <option value="pro">{t.form.servicePro}</option>
              </select>
              <svg
                aria-hidden="true"
                viewBox="0 0 12 8"
                className="pointer-events-none absolute right-0 top-1/2 h-2 w-3 -translate-y-1/2 fill-none stroke-forest stroke-[1.25]"
              >
                <path d="M1 1.5 6 6.5l5-5" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="field-label">
            {t.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="field-input resize-none"
            placeholder={t.form.messagePlaceholder}
          />
        </div>

        <div aria-live="polite">
          {errorMessage ? (
            <p
              role="alert"
              className="rounded-xl bg-[#8a2f2a]/10 px-4 py-3 text-base leading-relaxed text-[#8a2f2a]"
            >
              {errorMessage}
            </p>
          ) : null}
        </div>

        {process.env.NODE_ENV === "development" &&
        !isSupabaseConfigured() ? (
          <p className="rounded-xl bg-gold/10 px-4 py-3 text-base leading-relaxed text-stone">
            {t.form.setup}
          </p>
        ) : null}

        <div className="flex flex-col gap-6 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[260px] text-base leading-relaxed text-stone">
            {t.form.consent}
          </p>
          <button
            type="submit"
            className="btn btn-dark group disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? t.form.sending : t.form.submit}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </fieldset>
    </form>
  );
}
