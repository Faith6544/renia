"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/context/LanguageContext";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { TeamMember } from "@/types";

export default function TeamContent() {
  const { t } = useLanguage();
  const team = t.team;
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    let active = true;

    async function loadTeam() {
      const fallbackMembers: TeamMember[] = (team.members ?? []).map(
        (member) => ({
          id: member.name,
          name: member.name,
          role: member.role,
          photo: member.image,
          bio: member.bio ?? null,
          created_at: null,
        }),
      );

      if (!isSupabaseConfigured()) {
        if (active) {
          setMembers(fallbackMembers);
        }
        return;
      }

      try {
        const supabase = getSupabaseBrowserClient();
        const { data, error } = await supabase.from("team_members").select("*");

        if (error) {
          throw error;
        }

        const nextMembers = (data ?? []) as TeamMember[];

        if (active) {
          setMembers(nextMembers.length > 0 ? nextMembers : fallbackMembers);
        }
      } catch (error) {
        console.error("Team members load failed:", error);
        if (active) {
          setMembers(fallbackMembers);
        }
      }
    }

    void loadTeam();

    return () => {
      active = false;
    };
  }, [team]);

  const teamMembers =
    members.length > 0 ? members : (team.members ?? []).map((member) => ({
      id: member.name,
      name: member.name,
      role: member.role,
      photo: member.image,
      bio: member.bio ?? null,
      created_at: null,
    }));

  return (
    <main>
      <PageHero
        image="/images/hero.jpg.png"
        eyebrow={team.eyebrow}
        title={team.title}
        intro={team.intro}
        primary={{ label: team.cta, href: "/contact" }}
        secondary={{ label: t.nav.book, href: "/book" }}
      />

      {/* Philosophy */}
      <section className="bg-cream py-16 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{team.philosophyEyebrow}</p>
            <div className="mt-6 h-px w-16 bg-gold" aria-hidden="true" />
            <h2 className="mt-8 max-w-sm text-balance font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.02em]">
              {team.philosophyTitle}
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-3xl text-balance font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-normal leading-[1.2] tracking-[-0.02em]">
              {team.philosophyBody}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {team.values.map((value, index) => (
                <article
                  key={value.title}
                  className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                  <span className="font-serif text-2xl leading-none text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-serif text-xl leading-tight tracking-[-0.01em]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-stone">
                    {value.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roster */}
      <section className="bg-white py-16 lg:py-32">
        <div className="shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">{team.rosterEyebrow}</p>
              <h2 className="mt-5 text-balance font-serif text-[clamp(2rem,4.2vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">
                {team.rosterTitle}
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-stone">
              {team.rosterIntro}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="group overflow-hidden rounded-3xl bg-cream shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-forest">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo ?? member.name}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-serif text-xl leading-tight text-cream">
                      {member.name}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-gold">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-base leading-relaxed text-stone">
                    {member.bio ?? team.philosophyBody}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="bg-cream pb-16 lg:pb-32">
        <div className="shell">
          <div className="grid gap-8 rounded-3xl bg-bone p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12 lg:grid-cols-12 lg:items-center lg:gap-16 lg:p-16">
            <div className="lg:col-span-7">
              <p className="eyebrow">{team.joinEyebrow}</p>
              <h2 className="mt-5 max-w-xl text-balance font-serif text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.02em]">
                {team.joinTitle}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-stone">
                {team.joinText}
              </p>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <Link href="/contact" className="pill-link">
                {team.joinCta} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={team.ctaEyebrow}
        title={team.ctaTitle}
        text={team.ctaText}
        primaryLabel={team.cta}
        primaryHref="/contact"
        secondaryLabel={t.nav.book}
        secondaryHref="/book"
      />
    </main>
  );
}
