import type { Metadata } from "next";

import ReniaHomeContent from "./ReniaHomeContent";

export const metadata: Metadata = {
  title: "RENIA HOME — Personal services | Renia",
  description:
    "Regular cleaning, one-off cleaning, deep cleaning and ironing for homes across the Yvelines, with the 50% tax credit for eligible customers.",
};

export default function ReniaHomePage() {
  return <ReniaHomeContent />;
}
