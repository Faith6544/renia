import type { Metadata } from "next";

import ReniaHomeContent from "./ReniaHomeContent";

export const metadata: Metadata = {
  title: "RENIA HOME — Ménage à domicile | Renia Services",
  description:
    "Ménage à domicile, entretien régulier, entretien ponctuel, grand nettoyage et repassage pour les particuliers.",
};

export default function ReniaHomePage() {
  return <ReniaHomeContent />;
}
