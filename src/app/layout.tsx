import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Renia Services — Nettoyage résidentiel et professionnel",
  description:
    "Renia Home et Renia Pro : nettoyage résidentiel, remises en état Airbnb et entretien de locaux professionnels. Devis gratuit.",
  openGraph: {
    title: "Renia Services — Nettoyage résidentiel et professionnel",
    description:
      "Des prestations de nettoyage professionnelles, adaptées à vos besoins, pour les particuliers comme pour les professionnels.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
