import type { Metadata } from "next";

import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Create an account — Renia",
  description:
    "Create your Renia account to book services, follow your requests and receive your documents.",
};

export default function SignUpPage() {
  return <AuthForm mode="signup" />;
}
