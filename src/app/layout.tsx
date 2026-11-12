import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

import "./globals.css";

// Premium font pairing: soft, elegant editorial headings + rounded readable body
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Renia — Nettoyage professionnel dans les Yvelines",
  description:
    "Renia Home et Renia Pro : nettoyage résidentiel, remises en état Airbnb et entretien de locaux professionnels dans les Yvelines (78). Devis gratuit.",
  openGraph: {
    title: "Renia — Nettoyage professionnel dans les Yvelines",
    description:
      "Des prestations de nettoyage professionnelles pour les particuliers et les professionnels des Yvelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}