import type { HTMLAttributes, ReactNode } from "react";

import Container from "@/components/ui/Container";

type SectionTone = "cream" | "white" | "green" | "dark" | "none";
type SectionSpacing = "default" | "compact" | "none";

const TONE_CLASSES: Record<SectionTone, string> = {
  cream: "bg-cream",
  white: "bg-white",
  green: "bg-green-light",
  dark: "bg-green-main text-white",
  none: "",
};

const SPACING_CLASSES: Record<SectionSpacing, string> = {
  default: "py-20 lg:py-28",
  compact: "py-16 lg:py-20",
  none: "",
};

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  containerClassName?: string;
};

/**
 * Shared page section: keeps every route on the same max-width, horizontal
 * padding and vertical rhythm. Use `tone` for the brand green shades so the
 * palette stays defined once in globals.css.
 */
export default function Section({
  children,
  tone = "cream",
  spacing = "default",
  className = "",
  containerClassName = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`${TONE_CLASSES[tone]} ${SPACING_CLASSES[spacing]}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
