"use client";

import GalleryGrid from "@/components/gallery/GalleryGrid";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryContent() {
  const { t } = useLanguage();
  const gallery = t.gallery;

  return (
    <main>
      {/* Replace /public/images/home-card.png to change this hero photo. */}
      <PageHero
        image="/images/home-card.png"
        imageAlt="Intérieur propre et lumineux entretenu par Renia Services"
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        intro={gallery.intro}
        primary={{ label: gallery.cta, href: "/contact" }}
        secondary={{ label: t.nav.whyRenia, href: "/#why" }}
      />

      <Section tone="cream">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.recentTitle}
          intro={gallery.recentIntro}
        />
        <div className="mt-12 lg:mt-16">
          <GalleryGrid />
        </div>
      </Section>

      <CtaBand
        eyebrow={gallery.ctaEyebrow}
        title={gallery.ctaTitle}
        text={gallery.ctaText}
        primaryLabel={gallery.cta}
        primaryHref="/contact#quote"
      />
    </main>
  );
}
