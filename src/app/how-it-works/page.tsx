import type { Metadata } from "next";

import HowItWorksContent from "./HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works — Renia",
  description:
    "From quote to cleaning: discover the simple, transparent process for booking residential or commercial cleaning with Renia in the Yvelines.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
