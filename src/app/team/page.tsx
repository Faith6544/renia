import type { Metadata } from "next";

import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Meet the team — Renia",
  description:
    "Meet the trained, supervised team behind Renia's residential and commercial cleaning services in the Yvelines.",
};

export default function TeamPage() {
  return <TeamContent />;
}
