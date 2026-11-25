import type { Metadata } from "next";

import BookContent from "./BookContent";

export const metadata: Metadata = {
  title: "Request a Quote — Renia",
  description:
    "Request a home or business cleaning service with Renia. Choose your preferred date, time and service, then confirm the details with us by message.",
};

export default function BookPage() {
  return <BookContent />;
}
