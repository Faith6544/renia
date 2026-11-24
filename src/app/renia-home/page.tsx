import type { Metadata } from "next";

import ReniaHomeContent from "./ReniaHomeContent";

export const metadata: Metadata = {
  title: "RENIA HOME — Home cleaning | Renia Services",
  description:
    "Home cleaning, regular upkeep, one-off cleaning, deep cleaning and ironing for individuals.",
};

export default function ReniaHomePage() {
  return <ReniaHomeContent />;
}
