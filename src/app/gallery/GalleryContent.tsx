"use client";

import GalleryGrid from "@/components/gallery/GalleryGrid";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryContent() {
  const { t } = useLanguage();
  const gallery = t.gallery;

  return (
    <main>
      <PageHero
        image="/images/home-cleaning.jpg.png"
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        intro={gallery.intro}
        primary={{ label: gallery.cta, href: "/contact" }}
        secondary={{ label: t.nav.commitments, href: "/commitments" }}
      />

      <section className="bg-cream py-16 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow={gallery.eyebrow}
            title={gallery.recentTitle}
            intro={gallery.recentIntro}
          />
          <div className="mt-12 lg:mt-16">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={gallery.ctaEyebrow}
        title={gallery.ctaTitle}
        text={gallery.ctaText}
        primaryLabel={gallery.cta}
        primaryHref="/contact"
        secondaryLabel={t.nav.book}
        secondaryHref="/book"
      />
    </main>
  );
}
