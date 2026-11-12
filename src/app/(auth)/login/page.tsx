import type { Metadata } from "next";

import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Sign in — Renia",
  description:
    "Sign in to your Renia account to follow your requests and manage your services.",
};

export default function LoginPage() {
  return <AuthForm mode="signin" />;
}
