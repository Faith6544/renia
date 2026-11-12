import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales de vente — Renia Services",
  description:
    "Conditions générales de vente des prestations de nettoyage Renia Home et Renia Pro dans les Yvelines.",
};

export default function CgvPage() {
  return (
    <LegalPage
      eyebrow="Cadre contractuel"
      title="Conditions générales de vente"
      intro="Les conditions applicables aux prestations de nettoyage proposées par RENIA SERVICES aux particuliers et aux professionnels."
      updated="Dernière mise à jour : novembre 2026"
      sections={[
        {
          title: "Objet et champ d'application",
          paragraphs: [
            "Les présentes conditions générales de vente régissent les prestations de nettoyage et services associés proposés par RENIA SERVICES, sous les marques RENIA HOME et RENIA PRO.",
            "Elles s'appliquent à toute commande de prestation, que le client soit un particulier ou un professionnel, sauf conditions particulières convenues par écrit.",
          ],
        },
        {
          title: "Devis et commande",
          paragraphs: [
            "Toute prestation fait l'objet d'un devis préalable précisant le périmètre, la fréquence, la durée et le tarif. Le devis est gratuit et sans engagement.",
            "La commande devient ferme après acceptation du devis par le client et confirmation de la disponibilité par RENIA SERVICES.",
          ],
        },
        {
          title: "Prestations",
          paragraphs: [
            "Les prestations sont réalisées selon une checklist convenue avec le client. Le client s'engage à fournir un accès raisonnable aux locaux et, le cas échéant, l'eau et l'électricité nécessaires.",
            "Toute demande supplémentaire non prévue au devis peut faire l'objet d'un complément tarifaire accepté au préalable.",
          ],
        },
        {
          title: "Tarifs et paiement",
          paragraphs: [
            "Les tarifs sont indiqués en euros, toutes taxes comprises, et peuvent évoluer selon la surface, la fréquence et les contraintes particulières du site.",
            "Les modalités et échéances de paiement sont précisées sur la facture. Tout retard de paiement peut entraîner des pénalités conformément à la réglementation applicable.",
          ],
        },
        {
          title: "Crédit d'impôt et avance immédiate",
          paragraphs: [
            "Pour les prestations éligibles aux services à la personne, les particuliers peuvent bénéficier d'un crédit d'impôt de 50 % dans les conditions et limites prévues par la réglementation en vigueur.",
            "L'éligibilité dépend de la situation du client. RENIA SERVICES peut accompagner le client dans la vérification de ses droits, sans se substituer à l'administration fiscale.",
          ],
        },
        {
          title: "Annulation et report",
          paragraphs: [
            "Toute annulation ou demande de report doit être signalée dans les meilleurs délais afin de permettre la réorganisation du planning.",
            "Les conditions d'annulation applicables, notamment en cas d'annulation tardive, sont précisées dans le devis ou la confirmation de réservation.",
          ],
        },
        {
          title: "Obligations et responsabilité",
          paragraphs: [
            "RENIA SERVICES s'engage à réaliser ses prestations avec soin et professionnalisme, dans le respect des règles d'hygiène et de sécurité applicables.",
            "La responsabilité de RENIA SERVICES ne saurait être engagée en cas de dommage résultant d'un défaut d'information sur les locaux, les matériaux ou les objets présents sur place.",
          ],
        },
        {
          title: "Réclamations",
          paragraphs: [
            "Toute réclamation doit être adressée dans les meilleurs délais à contact@reniaservices.fr, en précisant la prestation concernée et les éléments permettant d'en apprécier le bien-fondé.",
            "Nous nous engageons à examiner chaque réclamation et à rechercher une solution amiable.",
          ],
        },
        {
          title: "Droit applicable et litiges",
          paragraphs: [
            "Les présentes conditions sont soumises au droit français. En cas de litige, les parties rechercheront une solution amiable avant toute action judiciaire.",
            "À défaut d'accord, les juridictions françaises compétentes seront saisies.",
          ],
        },
      ]}
    />
  );
}
