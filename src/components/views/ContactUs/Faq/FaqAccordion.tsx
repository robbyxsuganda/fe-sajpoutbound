"use client";

import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FaqItem[] = [
    {
      id: 1,
      question: "What services does SAJP Outbound provide?",
      answer:
        "SAJP Outbound provides various logistics services including domestic and international shipping, warehousing, customs clearance, and logistics consultation. We also offer customized solutions for your business needs.",
    },
    {
      id: 2,
      question: "How long does domestic shipping take?",
      answer:
        "Domestic shipping time varies depending on distance and service type. For regular shipping: Jakarta to Surabaya (1-2 days), Jakarta to Medan (2-3 days), Jakarta to Bali (1-2 days). We also provide express service for faster delivery.",
    },
    {
      id: 3,
      question: "How can I track my shipment?",
      answer:
        "You can track your shipment through our website by entering the tracking number, or by contacting our customer service. We will also send shipping status updates via SMS and email.",
    },
    {
      id: 4,
      question: "Does SAJP Outbound serve international shipping?",
      answer:
        "Yes, we serve shipping to various countries in Asia, Europe, America, and Australia. We have a network of trusted international partners to ensure your shipment arrives safely and on time.",
    },
    {
      id: 5,
      question: "How to calculate shipping costs?",
      answer:
        "Shipping costs are calculated based on weight, dimensions, distance, and service type. You can use the shipping calculator on our website or contact customer service for accurate cost estimates.",
    },
    {
      id: 6,
      question: "Is there insurance service for shipments?",
      answer:
        "Yes, we provide insurance services for shipments with various coverage options. This insurance service provides additional protection for valuable or fragile items.",
    },
    {
      id: 7,
      question: "What is the procedure for shipping dangerous goods?",
      answer:
        "For dangerous goods shipping, we require special documentation and follow international regulations. Our team will help you prepare all necessary documents and ensure compliance with safety standards.",
    },
    {
      id: 8,
      question: "Does SAJP Outbound provide warehousing services?",
      answer:
        "Yes, we have modern warehouse facilities in various strategic locations. Our warehousing services include storage, inventory management, and fulfillment services to support your business operations.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {faqData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-[var(--color-primary)]/5 transition-all duration-200"
          >
            <h3 className="text-lg font-semibold text-[var(--color-neutral-black)] pr-4">
              {item.question}
            </h3>
            <div className="flex-shrink-0">
              <svg
                className={`w-6 h-6 text-[var(--color-primary)] transition-transform duration-300 ${
                  openItems.includes(item.id) ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openItems.includes(item.id)
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6">
              <div className="border-t border-[var(--color-neutral-light-gray)] pt-4">
                <p className="text-[var(--color-neutral-gray)] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
