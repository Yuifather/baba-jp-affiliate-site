"use client";

import { useId, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="rounded-2xl border border-black/10 bg-white/80">
            <h3>
              <button
                id={buttonId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-medium text-black">{item.question}</span>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-xl transition ${
                    isOpen ? "rotate-45 bg-teal-600 text-white" : "bg-white text-black/60"
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={isOpen ? "px-5 pb-5" : "hidden"}
            >
              <p className="text-sm text-black/70">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
