import type { Metadata } from "next";

import FaqContent from "./FaqContent";

export const metadata: Metadata = {
  title: "FAQ — Renia",
  description:
    "Answers to common questions about Renia cleaning services, quotes, eco-friendly products and the way we work.",
};

export default function FaqPage() {
  return <FaqContent />;
}
