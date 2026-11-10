import type { Metadata } from "next";

import FaqContent from "./FaqContent";

export const metadata: Metadata = {
  title: "FAQ — Renia",
  description:
    "Answers to common questions about Renia cleaning services, booking, the 50% tax credit, eco-friendly products and our service area in the Yvelines.",
};

export default function FaqPage() {
  return <FaqContent />;
}
