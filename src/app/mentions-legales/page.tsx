import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales — Renia Services",
  description:
    "Mentions légales du site Renia Services : éditeur, hébergement, propriété intellectuelle et responsabilité.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      intro="Les informations relatives à l'édition et à l'exploitation du site Renia Services."
      updated="Dernière mise à jour : novembre 2026"
      sections={[
        {
          title: "Éditeur du site",
          paragraphs: [
            "Le site reniaservices.fr est édité par RENIA SERVICES, entreprise de nettoyage résidentiel et professionnel établie dans les Yvelines (78).",
            "Contact : 06 14 38 36 56 — contact@reniaservices.fr.",
          ],
        },
        {
          title: "Responsable de la publication",
          paragraphs: [
            "Le responsable de la publication est le représentant légal de RENIA SERVICES.",
            "Toute demande relative au contenu du site peut être adressée à contact@reniaservices.fr.",
          ],
        },
        {
          title: "Hébergement",
          paragraphs: [
            "Le site est hébergé par un prestataire technique situé dans l'Union européenne. Les coordonnées complètes de l'hébergeur peuvent être obtenues sur simple demande à contact@reniaservices.fr.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          paragraphs: [
            "L'ensemble des éléments composant ce site (textes, visuels, logo, mise en page, éléments graphiques) est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive de RENIA SERVICES, sauf mention contraire.",
            "Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite.",
          ],
        },
        {
          title: "Responsabilité",
          paragraphs: [
            "RENIA SERVICES s'efforce de fournir des informations exactes et à jour. Les informations présentées sur le site sont données à titre indicatif et ne constituent pas un engagement contractuel.",
            "RENIA SERVICES ne saurait être tenue responsable des erreurs, omissions ou indisponibilités temporaires du site, ni de l'utilisation qui pourrait être faite des informations qui y figurent.",
          ],
        },
        {
          title: "Données personnelles",
          paragraphs: [
            "Le traitement des données personnelles collectées via les formulaires du site est décrit dans notre politique de confidentialité.",
            "Pour exercer vos droits ou poser une question, écrivez à contact@reniaservices.fr.",
          ],
        },
        {
          title: "Droit applicable",
          paragraphs: [
            "Le présent site et ses mentions légales sont soumis au droit français. Tout litige relève des juridictions françaises compétentes.",
          ],
        },
      ]}
    />
  );
}
