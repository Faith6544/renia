import type { Metadata } from "next";

import ResetPasswordForm from "./ResetPasswordForm";

export const metadata: Metadata = {
  title: "Reset password — Renia",
  description:
    "Choose a new password for your Renia account. Available from the sign-in screen.",
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
