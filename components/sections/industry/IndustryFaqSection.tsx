"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/industries";

export function IndustryFaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[60px] lg:py-[80px] bg-white">
      <div className="max-w-[1080px] mx-auto px-5">
        <h2 className="text-[22px] lg:text-[32px] font-[800] text-[#171819] mb-[32px] lg:mb-[40px]">
          자주 묻는 질문
        </h2>

        <div className="flex flex-col gap-[1px] border border-[#e7edf3] rounded-[16px] overflow-hidden">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-start gap-[12px] p-[20px] lg:p-[24px] text-left hover:bg-[#f9fafb] transition-colors"
                >
                  <span className="shrink-0 w-[28px] h-[28px] rounded-full bg-[#0177fb] text-white text-[13px] font-[700] flex items-center justify-center mt-[1px]">
                    Q.
                  </span>
                  <span className="flex-1 text-[15px] lg:text-[17px] font-[600] text-[#171819]">
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 text-[20px] text-[#868E96] transition-transform duration-300 mt-[2px]"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className="faq-content"
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.3s ease",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-[20px] lg:px-[24px] pb-[20px] lg:pb-[24px] pl-[60px] lg:pl-[64px]">
                      <p className="text-[14px] lg:text-[15px] font-[400] text-[#454F5D] leading-[1.7]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
