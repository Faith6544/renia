import type { Metadata } from "next";

import ReniaProContent from "./ReniaProContent";

export const metadata: Metadata = {
  title: "RENIA PRO — Nettoyage professionnel | Renia Services",
  description:
    "Nettoyage des bureaux, cabinets, commerces, syndics, locations courte durée et locaux professionnels.",
};

export default function ReniaProPage() {
  return <ReniaProContent />;
}
