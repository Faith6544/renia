import type { Metadata } from "next";

import ChooseUsernameForm from "./ChooseUsernameForm";

export const metadata: Metadata = {
  title: "Choose your username — Renia",
  description:
    "Pick the username that will be shown on your Renia account.",
};

export default function ChooseUsernamePage() {
  return <ChooseUsernameForm />;
}
