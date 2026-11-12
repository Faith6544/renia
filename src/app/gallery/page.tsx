import type { Metadata } from "next";

import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery — Renia",
  description:
    "A look at the homes, offices and rentals Renia cares for across the Yvelines.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
