import type { Metadata } from "next";

import ReniaProContent from "./ReniaProContent";

export const metadata: Metadata = {
  title: "RENIA PRO — Commercial cleaning | Renia",
  description:
    "Reliable cleaning for offices, practices, shops, managed properties and short-term rentals across the Yvelines.",
};

export default function ReniaProPage() {
  return <ReniaProContent />;
}
