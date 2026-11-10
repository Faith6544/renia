import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
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
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${montserrat.variable} ${playfair.variable} min-h-screen bg-cream font-sans text-ink antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
