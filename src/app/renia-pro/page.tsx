import type { Metadata } from "next";

import ReniaProContent from "./ReniaProContent";

export const metadata: Metadata = {
  title: "RENIA PRO — Professional cleaning | Renia Services",
  description:
    "Cleaning for offices, practices, shops, property managers, short-term rentals and business premises.",
};

export default function ReniaProPage() {
  return <ReniaProContent />;
}
