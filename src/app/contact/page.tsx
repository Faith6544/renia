import type { Metadata } from "next";

import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Renia",
  description:
    "Contact Renia for residential or commercial cleaning. Send us a message or request a free quote.",
};

export default function ContactPage() {
  return <ContactContent />;
}
