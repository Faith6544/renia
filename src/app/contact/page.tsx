import type { Metadata } from "next";

import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Nous contacter — Renia",
  description:
    "Contactez Renia pour le nettoyage résidentiel ou professionnel. Envoyez-nous un message ou demandez un devis gratuit.",
};

export default function ContactPage() {
  return <ContactContent />;
}
