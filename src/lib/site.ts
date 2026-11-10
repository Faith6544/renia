export const CONTACT_EMAIL = "hello@renia.co";
export const CONTACT_PHONE = "33614383656";
export const CONTACT_PHONE_DISPLAY = "+33 6 14 38 36 56";
export const WHATSAPP_NUMBER = "33614383656";
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps";

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
] as const;

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;

  if (!message?.trim()) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message.trim())}`;
}
