"use client";

import { useState } from "react";
import type { IndustryHero } from "@/lib/industries";

function highlightText(
  text: string,
  highlight: string,
  color: string,
) {
  if (!highlight) return text;
  const parts = text.split(highlight);
  if (parts.length === 1) return text;
  return (
    <>
      {parts[0]}
      <span style={{ color }}>{highlight}</span>
      {parts[1]}
    </>
  );
}

export function IndustryHeroSection({ hero }: { hero: IndustryHero }) {
  const [activeStep, setActiveStep] = useState(hero.steps.length - 1);

  return (
    <section
      className="relative pt-[100px] lg:pt-[120px] pb-[60px] lg:pb-[80px] bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.bgImage})` }}
    >
      <div className="max-w-[1080px] mx-auto px-5 text-center">
        {/* Badge */}
        <p
          className="inline-block text-[14px] lg:text-[16px] font-[500] text-white rounded-[8px] px-[12px] py-[8px] mb-[10px]"
          style={{ backgroundColor: "#171819" }}
        >
          {hero.badge}
        </p>

        {/* Headline */}
        <h1 className="text-[28px] lg:text-[44px] font-[700] text-[#171819] leading-[1.4] mb-[16px]">
          {hero.headline.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {highlightText(line, hero.highlightedText, hero.accentColor)}
            </span>
          ))}
        </h1>

        {/* Brand logos strip */}
        <div className="mb-[20px]">
          <img
            src={hero.brandLogosImage}
            alt="파트너 브랜드"
            className="mx-auto max-w-[400px] lg:max-w-[500px] w-full"
          />
        </div>

        {/* Sub-headline */}
        <p className="text-[20px] lg:text-[36px] font-[700] text-[#171819] leading-[1.4] mb-[32px]">
          {hero.subHeadline.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {highlightText(line, hero.highlightedSubText, hero.accentColor)}
            </span>
          ))}
        </p>

        {/* Mobile: Progress bar */}
        <div className="lg:hidden mb-[24px]">
          <div className="flex justify-between items-center text-[14px] font-[600] text-[#171819] mb-[8px]">
            <span>{hero.steps[0]}</span>
            <span>{hero.steps[hero.steps.length - 1]} 😎</span>
          </div>
          <div className="h-[8px] bg-[#e7edf3] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${((activeStep + 1) / hero.steps.length) * 100}%`,
                backgroundColor: hero.accentColor,
              }}
            />
          </div>
        </div>

        {/* Desktop: Step tracker box */}
        <div className="hidden lg:block max-w-[700px] mx-auto bg-white rounded-[16px] p-[28px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] mb-[24px]">
          <p className="text-[16px] font-[700] text-[#171819] mb-[20px]">
            {hero.stepsBoxTitle}
          </p>
          <div className="flex items-center justify-center gap-[4px] flex-wrap">
            {hero.steps.map((step, i) => (
              <div key={step} className="flex items-center">
                <button
                  onClick={() => setActiveStep(i)}
                  className="px-[14px] py-[8px] rounded-[8px] text-[14px] font-[600] transition-all duration-200"
                  style={{
                    backgroundColor:
                      i <= activeStep ? hero.accentColor : "#f5f7fa",
                    color: i <= activeStep ? "#fff" : "#868E96",
                  }}
                >
                  {step}
                </button>
                {i < hero.steps.length - 1 && (
                  <span className="mx-[2px] text-[#d3d3d3]">→</span>
                )}
              </div>
            ))}
          </div>
          <a
            href="#products"
            className="inline-flex items-center mt-[20px] px-[28px] py-[12px] rounded-full text-[15px] font-[700] text-white transition-colors"
            style={{ backgroundColor: hero.accentColor }}
          >
            성과 구매
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="ml-[6px]"
            >
              <path d="M6 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Blue banner */}
        <div
          className="max-w-[600px] mx-auto rounded-[10px] py-[16px] px-[20px] text-[16px] lg:text-[22px] font-[700] text-white text-center"
          style={{ backgroundColor: hero.accentColor }}
        >
          {hero.blueBanner}
        </div>
      </div>
    </section>
  );
}
