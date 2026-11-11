"use client";

import { useId, useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl transition-all duration-300 ${
              isOpen
                ? "bg-cream/80 shadow-[0_8px_30px_rgb(0,0,0,0.05)]"
                : "bg-cream/35 hover:bg-cream/60"
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition-colors duration-300 hover:text-forest sm:px-7 sm:py-7"
              >
                <span className="flex items-start gap-4 sm:gap-6">
                  <span className="mt-1 font-serif text-base leading-none text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl leading-snug tracking-[-0.01em] sm:text-2xl">
                    {item.question}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/70 text-forest shadow-[0_4px_14px_rgb(0,0,0,0.06)] transition-all duration-300 ${
                    isOpen ? "rotate-45 bg-gold text-forest" : "group-hover:bg-white"
                  }`}
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    className="h-3 w-3"
                  >
                    <path d="M8 2v12M2 8h12" />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl px-6 pb-7 text-base leading-relaxed text-stone sm:pl-[4.25rem] sm:pr-10 sm:text-[17px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
