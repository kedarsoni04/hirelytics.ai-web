"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-[#E3E8F7]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="py-1">
            <button
              id={`faq-btn-${i}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-4 text-left group"
            >
              <span className="text-[#0B1250] font-semibold text-sm sm:text-base leading-snug group-hover:text-[#2F70FE] transition-colors">
                {item.q}
              </span>
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] flex items-center justify-center text-[#2F70FE] transition-transform duration-200">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-5 text-[#4B5578] text-sm leading-relaxed pr-8">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
