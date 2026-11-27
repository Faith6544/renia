import type { Metadata } from "next";

import FaqContent from "./FaqContent";

export const metadata: Metadata = {
  title: "Questions fréquentes — Renia",
  description:
    "Réponses aux questions fréquentes sur les prestations Renia, les devis, les produits écologiques et notre façon de travailler.",
};

export default function FaqPage() {
  return <FaqContent />;
}
