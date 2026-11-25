"use client";

import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/site";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

const INTERACTIVE = "relative z-50 pointer-events-auto";
const PHONE_REGEX = /^(?:\+33|0)[1-9](?:[ .-]?\d{2}){4}$/;
const POSTAL_CODE_REGEX = /^\d{5}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type PropertyType = "apartment" | "house" | "";

type HomeFormState = {
  fullName: string;
  phone: string;
  email: string;
  postalCode: string;
  city: string;
  propertyType: PropertyType;
  surfaceArea: string;
  bathrooms: string;
  serviceIndex: number;
  frequencyIndex: number;
  comments: string;
  consent: boolean;
};

const initialForm: HomeFormState = {
  fullName: "",
  phone: "",
  email: "",
  postalCode: "",
  city: "",
  propertyType: "",
  surfaceArea: "",
  bathrooms: "",
  serviceIndex: 0,
  frequencyIndex: 0,
  comments: "",
  consent: false,
};

export default function HomeForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<HomeFormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const updateField = <K extends keyof HomeFormState>(
    field: K,
    value: HomeFormState[K],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const buildMessage = () => {
    const propertyType =
      form.propertyType === "apartment" ? t.forms.apartment : t.forms.house;

    return [
      `${t.forms.formTitle} — RENIA HOME`,
      `${t.forms.youAre}: ${t.forms.individual}`,
      "",
      t.forms.contactDetails,
      `${t.forms.fullName}: ${form.fullName.trim()}`,
      `${t.forms.phone}: ${form.phone.trim()}`,
      `${t.forms.email}: ${form.email.trim()}`,
      `${t.forms.postalCode}: ${form.postalCode.trim()}`,
      `${t.forms.city}: ${form.city.trim()}`,
      "",
      `${t.forms.propertyDetails}: ${propertyType}`,
      `${t.forms.surfaceArea}: ${form.surfaceArea.trim()} m²`,
      `${t.forms.bathrooms}: ${form.bathrooms.trim()}`,
      "",
      t.forms.yourNeeds,
      `${t.forms.serviceType}: ${t.forms.services[form.serviceIndex]}`,
      `${t.forms.frequency}: ${t.forms.frequencies[form.frequencyIndex]}`,
      `${t.forms.comments}: ${form.comments.trim() || "-"}`,
    ].join("\n");
  };

  const saveToDatabase = async (message: string) => {
    if (!isSupabaseConfigured()) return;

    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.from("quote_requests").insert({
        full_name: form.fullName.trim(),
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

  const handleSend = async () => {
    const requiredFieldsComplete =
      form.fullName.trim() &&
      form.phone.trim() &&
      form.email.trim() &&
      form.postalCode.trim() &&
      form.city.trim() &&
      form.propertyType &&
      form.surfaceArea.trim() &&
      form.bathrooms.trim();

    if (!requiredFieldsComplete) {
      alert(t.forms.requiredError);
      return;
    }

    if (!PHONE_REGEX.test(form.phone.trim())) {
      alert(t.forms.phoneError);
      return;
    }

    if (!POSTAL_CODE_REGEX.test(form.postalCode.trim())) {
      alert(t.forms.postalCodeError);
      return;
    }

    if (!EMAIL_REGEX.test(form.email.trim())) {
      alert(t.forms.emailError);
      return;
    }

    if (Number(form.surfaceArea) <= 0) {
      alert(t.forms.surfaceError);
      return;
    }

    if (Number(form.bathrooms) <= 0) {
      alert(t.forms.bathroomsError);
      return;
    }

    if (!form.consent) {
      alert(t.forms.consentError);
      return;
    }

    setStatus("sending");

    const message = buildMessage();
    await saveToDatabase(message);

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      t.forms.formTitle,
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoUrl;
    window.setTimeout(() => {
      window.location.href = buildWhatsAppUrl(message);
    }, 120);

    setStatus("sent");
  };

  return (
    <form
      noValidate
      onSubmit={(event) => event.preventDefault()}
      className={`min-w-0 ${INTERACTIVE}`}
    >
      <fieldset className={`border-0 p-0 ${INTERACTIVE}`}>
        <legend className="eyebrow mb-5">{t.forms.contactDetails}</legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="home-full-name" className="field-label">
              {t.forms.fullName} <span className="text-stone/50">*</span>
            </label>
            <input
              id="home-full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              className={`field-input ${INTERACTIVE}`}
              placeholder={t.forms.fullName}
            />
          </div>

          <div>
            <label htmlFor="home-phone" className="field-label">
              {t.forms.phone} <span className="text-stone/50">*</span>
            </label>
            <input
              id="home-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className={`field-input ${INTERACTIVE}`}
              placeholder="06 14 38 36 56"
            />
          </div>

          <div>
            <label htmlFor="home-email" className="field-label">
              {t.forms.email} <span className="text-stone/50">*</span>
            </label>
            <input
              id="home-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className={`field-input ${INTERACTIVE}`}
              placeholder="vous@exemple.com"
            />
          </div>

          <div>
            <label htmlFor="home-postal-code" className="field-label">
              {t.forms.postalCode} <span className="text-stone/50">*</span>
            </label>
            <input
              id="home-postal-code"
              name="postalCode"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              required
              value={form.postalCode}
              onChange={(event) =>
                updateField("postalCode", event.target.value.replace(/\D/g, ""))
              }
              className={`field-input ${INTERACTIVE}`}
              placeholder="75001"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="home-city" className="field-label">
              {t.forms.city} <span className="text-stone/50">*</span>
            </label>
            <input
              id="home-city"
              name="city"
              type="text"
              autoComplete="address-level2"
              required
              value={form.city}
              onChange={(event) => updateField("city", event.target.value)}
              className={`field-input ${INTERACTIVE}`}
              placeholder={t.forms.city}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={`mt-10 border-0 p-0 ${INTERACTIVE}`}>
        <legend className="eyebrow mb-5">{t.forms.propertyDetails}</legend>

        <div className={`grid gap-4 sm:grid-cols-2 ${INTERACTIVE}`}>
          {(["apartment", "house"] as const).map((value) => (
            <label
              key={value}
              className={`card-soft card-lift flex cursor-pointer items-center gap-4 p-5 ${INTERACTIVE} ${
                form.propertyType === value ? "ring-2 ring-brand" : ""
              }`}
            >
              <input
                type="radio"
                name="propertyType"
                value={value}
                checked={form.propertyType === value}
                onChange={() => updateField("propertyType", value)}
                className={`h-5 w-5 accent-brand ${INTERACTIVE}`}
              />
              <span className="text-base font-bold text-ink">
                {value === "apartment" ? t.forms.apartment : t.forms.house}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="home-surface" className="field-label">
              {t.forms.surfaceArea} <span className="text-stone/50">*</span>
            </label>
            <input
              id="home-surface"
              name="surfaceArea"
              type="number"
              inputMode="numeric"
              min="1"
              step="1"
              required
              value={form.surfaceArea}
              onChange={(event) => updateField("surfaceArea", event.target.value)}
              className={`field-input ${INTERACTIVE}`}
              placeholder="75"
            />
          </div>

          <div>
            <label htmlFor="home-bathrooms" className="field-label">
              {t.forms.bathrooms} <span className="text-stone/50">*</span>
            </label>
            <input
              id="home-bathrooms"
              name="bathrooms"
              type="number"
              inputMode="numeric"
              min="1"
              step="1"
              required
              value={form.bathrooms}
              onChange={(event) => updateField("bathrooms", event.target.value)}
              className={`field-input ${INTERACTIVE}`}
              placeholder="1"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={`mt-10 border-0 p-0 ${INTERACTIVE}`}>
        <legend className="eyebrow mb-5">{t.forms.yourNeeds}</legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="home-service" className="field-label">
              {t.forms.serviceType} <span className="text-stone/50">*</span>
            </label>
            <select
              id="home-service"
              name="serviceType"
              required
              value={form.serviceIndex}
              onChange={(event) =>
                updateField("serviceIndex", Number(event.target.value))
              }
              className={`field-input cursor-pointer ${INTERACTIVE}`}
            >
              {t.forms.services.map((service, index) => (
                <option key={service} value={index}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="home-frequency" className="field-label">
              {t.forms.frequency} <span className="text-stone/50">*</span>
            </label>
            <select
              id="home-frequency"
              name="frequency"
              required
              value={form.frequencyIndex}
              onChange={(event) =>
                updateField("frequencyIndex", Number(event.target.value))
              }
              className={`field-input cursor-pointer ${INTERACTIVE}`}
            >
              {t.forms.frequencies.map((frequency, index) => (
                <option key={frequency} value={index}>
                  {frequency}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="home-comments" className="field-label">
              {t.forms.comments}
            </label>
            <textarea
              id="home-comments"
              name="comments"
              rows={5}
              value={form.comments}
              onChange={(event) => updateField("comments", event.target.value)}
              className={`field-input resize-none ${INTERACTIVE}`}
              placeholder={t.forms.commentsPlaceholder}
            />
          </div>
        </div>
      </fieldset>

      <div className={`mt-10 rounded-2xl bg-brand-soft/70 p-6 ${INTERACTIVE}`}>
        <h3 className="text-lg font-extrabold">{t.forms.ackTitle}</h3>
        <label className={`mt-4 flex cursor-pointer items-start gap-4 ${INTERACTIVE}`}>
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            className={`mt-1 h-5 w-5 shrink-0 accent-brand ${INTERACTIVE}`}
          />
          <span className="text-base font-medium leading-relaxed text-stone">
            {t.forms.ackText}
          </span>
        </label>

        <button
          type="button"
          onClick={handleSend}
          disabled={status === "sending"}
          className={`btn btn-primary mt-6 w-full cursor-pointer justify-center text-center disabled:opacity-50 sm:w-auto ${INTERACTIVE}`}
        >
          {status === "sending" ? t.forms.sending : t.forms.submitBtn}
        </button>

        {status === "sent" ? (
          <p role="status" className={`mt-5 text-base font-semibold text-brand ${INTERACTIVE}`}>
            {t.forms.confirmation}
          </p>
        ) : null}
      </div>
    </form>
  );
}
