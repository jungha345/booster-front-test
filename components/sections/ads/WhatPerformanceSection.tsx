"use client";

import { useState, useEffect } from "react";

const MOBILE_SLIDES = [
  "https://cdn.imweb.me/thumbnail/20250902/4144edddad91b.png",
  "https://cdn.imweb.me/thumbnail/20250902/add714feb7382.png",
  "https://cdn.imweb.me/thumbnail/20250902/f5e982d35e34d.png",
] as const;

export function WhatPerformanceSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % MOBILE_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-[80px] lg:py-[100px] bg-white">
      <div className="max-w-[1080px] mx-auto px-5 text-center">
        <h2 className="text-[24px] lg:text-[36px] font-[800] text-[#171819] mb-[16px] leading-[1.3]">
          성과 걱정 없는 마케팅의 시작
        </h2>
        <p className="text-[15px] lg:text-[18px] font-[500] text-[#454F5D] leading-[1.6] max-w-[600px] mx-auto mb-[40px]">
          광고비와 성과는 비례하지 않습니다.
          <br />
          이제 위픽부스터에서 &lsquo;성과&rsquo; 비용만 지불하세요.
        </p>

        {/* Desktop: single image */}
        <img
          src="https://cdn.imweb.me/thumbnail/20250905/6d540a6139e69.png"
          alt="성과 걱정 없는 마케팅"
          className="hidden lg:block w-full max-w-[900px] mx-auto rounded-[16px]"
        />

        {/* Mobile: carousel */}
        <div className="lg:hidden relative overflow-hidden rounded-[16px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {MOBILE_SLIDES.map((src, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <img
                  src={src}
                  alt={`성과 마케팅 ${i + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + MOBILE_SLIDES.length) % MOBILE_SLIDES.length)}
            className="absolute left-[8px] top-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full bg-white/80 shadow-sm flex items-center justify-center text-[18px] text-[#171819]"
            aria-label="이전"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % MOBILE_SLIDES.length)}
            className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full bg-white/80 shadow-sm flex items-center justify-center text-[18px] text-[#171819]"
            aria-label="다음"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-[6px] mt-[16px]">
            {MOBILE_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-[8px] rounded-full transition-all duration-300 ${
                  currentSlide === i ? "bg-[#0177fb] w-[20px]" : "bg-[#d4d4d4] w-[8px]"
                }`}
                aria-label={`슬라이드 ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
