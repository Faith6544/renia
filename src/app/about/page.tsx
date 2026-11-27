import type { Metadata } from "next";

import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "À propos de RENIA SERVICES — Renia",
  description:
    "Une entreprise de nettoyage locale, au service des particuliers et des professionnels.",
};

export default function AboutPage() {
  return <AboutContent />;
}
