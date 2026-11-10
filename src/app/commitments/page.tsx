import type { Metadata } from "next";

import CommitmentsContent from "./CommitmentsContent";

export const metadata: Metadata = {
  title: "Our commitments — Renia",
  description:
    "Environment, people, quality, reliability and a local commitment: the principles behind every Renia service in the Yvelines.",
};

export default function CommitmentsPage() {
  return <CommitmentsContent />;
}
