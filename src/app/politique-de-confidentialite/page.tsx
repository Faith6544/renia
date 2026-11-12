import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Renia Services",
  description:
    "Comment Renia Services collecte, utilise et protège vos données personnelles, et comment exercer vos droits.",
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Vos données"
      title="Politique de confidentialité"
      intro="Nous collectons le strict nécessaire pour répondre à vos demandes et organiser nos prestations. Voici comment vos données sont utilisées et protégées."
      updated="Dernière mise à jour : novembre 2026"
      sections={[
        {
          title: "Données collectées",
          paragraphs: [
            "Lorsque vous utilisez un formulaire du site, nous pouvons collecter votre nom, votre adresse email, votre numéro de téléphone, le nom de votre entreprise, la surface de vos locaux, le type de prestation souhaité et le contenu de votre message.",
            "Nous ne collectons aucune donnée sensible et ne demandons aucune information bancaire via le site.",
          ],
        },
        {
          title: "Finalités du traitement",
          paragraphs: [
            "Vos données sont utilisées pour répondre à vos demandes de devis ou d'information, organiser et suivre les prestations, vous contacter au sujet de votre demande et assurer le suivi de la relation client.",
            "Elles ne sont jamais vendues ni utilisées à des fins de prospection non sollicitée.",
          ],
        },
        {
          title: "Base légale",
          paragraphs: [
            "Le traitement repose sur votre consentement lorsque vous envoyez volontairement un formulaire, et sur l'exécution d'un contrat ou de mesures précontractuelles lorsque vous demandez un devis ou réservez une prestation.",
            "Il peut également reposer sur l'intérêt légitime de RENIA SERVICES à assurer le suivi de ses prestations et la sécurité de son site.",
          ],
        },
        {
          title: "Durée de conservation",
          paragraphs: [
            "Les demandes de contact et de devis sont conservées le temps nécessaire au traitement de la demande, puis pendant la durée de la relation commerciale.",
            "Les documents liés à une prestation sont conservés pendant la durée légale applicable, notamment en matière comptable et fiscale.",
          ],
        },
        {
          title: "Destinataires des données",
          paragraphs: [
            "Vos données sont accessibles aux personnes habilitées de RENIA SERVICES et, le cas échéant, à nos prestataires techniques (hébergement, base de données, messagerie) agissant pour notre compte et présentant des garanties de sécurité.",
            "Aucune donnée n'est transmise à des tiers à des fins commerciales.",
          ],
        },
        {
          title: "Vos droits",
          paragraphs: [
            "Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données.",
            "Pour exercer ces droits, écrivez à contact@reniaservices.fr. Une réponse vous sera apportée dans les délais légaux.",
          ],
        },
        {
          title: "Cookies et stockage local",
          paragraphs: [
            "Le site n'utilise pas de cookies publicitaires. Un stockage local est utilisé uniquement pour mémoriser votre choix de langue (anglais ou français) sur votre appareil.",
            "Vous pouvez supprimer ce stockage à tout moment via les paramètres de votre navigateur.",
          ],
        },
        {
          title: "Sécurité et contact",
          paragraphs: [
            "Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre toute perte, altération ou accès non autorisé.",
            "Pour toute question relative à cette politique, contactez-nous à contact@reniaservices.fr.",
          ],
        },
      ]}
    />
  );
}
