"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left: Title */}
          <div className="mb-8 lg:mb-0 lg:w-[320px] lg:shrink-0">
            <h2 className="text-2xl lg:text-[36px] lg:leading-[1.3] font-bold text-text-dark mb-3">
              자주 묻는 질문
            </h2>
            <p className="text-sm lg:text-base text-text-gray">
              위픽부스터 이용 전 꼭 확인해보세요
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="flex-1">
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[14px] border border-border overflow-hidden transition-shadow hover:shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex items-center w-full px-5 py-4 text-left gap-3"
                  >
                    {/* Q Badge */}
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      Q
                    </span>
                    {/* Question */}
                    <span className="flex-1 text-sm lg:text-base font-semibold text-text-dark">
                      {item.question}
                    </span>
                    {/* Toggle Icon */}
                    <span
                      className={`flex-shrink-0 text-text-medium text-lg transition-transform duration-300 ${
                        openIndex === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 pl-[52px]">
                      <p className="text-sm text-text-gray leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
