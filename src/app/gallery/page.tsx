import type { Metadata } from "next";

import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Notre galerie — Renia",
  description:
    "Un aperçu des maisons, bureaux et locations dont Renia prend soin.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
