import type { Metadata } from "next";

import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About RENIA SERVICES — Renia",
  description:
    "A local cleaning company serving individuals and businesses in the Yvelines.",
};

export default function AboutPage() {
  return <AboutContent />;
}
