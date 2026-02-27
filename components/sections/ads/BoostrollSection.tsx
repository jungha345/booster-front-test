"use client";

import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    id: 1,
    webImg: "https://cdn.imweb.me/thumbnail/20250829/55f666fae661e.png",
    moImg: "https://cdn.imweb.me/thumbnail/20250902/32412ad59669c.png",
  },
  {
    id: 2,
    webImg: "https://cdn.imweb.me/thumbnail/20250829/3641d8503e24d.png",
    moImg: "https://cdn.imweb.me/thumbnail/20250902/f1d6b145eb9c6.png",
  },
  {
    id: 3,
    webImg: "https://cdn.imweb.me/thumbnail/20250922/40c694d6dc386.png",
    moImg: "https://cdn.imweb.me/thumbnail/20250902/569e1f336c615.png",
  },
] as const;

export function BoostrollSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-[80px] lg:py-[100px] bg-[#f5f7fa]">
      <div className="max-w-[1080px] mx-auto px-5">
        <h2 className="text-[22px] lg:text-[36px] font-[800] text-[#171819] text-center leading-[1.4] mb-[40px] lg:mb-[60px]">
          불편하고 불안했던 광고는 이제 그만
          <br />
          위픽부스터에서{" "}
          <span className="lg:hidden"><br /></span>
          확실한 성과만 경험하세요
        </h2>

        <div className="max-w-[900px] mx-auto">
          {/* Labels */}
          <div className="flex mb-[16px]">
            <div className="flex-1 text-center">
              <span className="inline-block px-[16px] py-[6px] bg-[#fee2e2] rounded-full text-[14px] font-[600] text-[#dc2626]">
                위픽부스터를 만나기 전,
              </span>
            </div>
            <div className="flex-1 text-center">
              <span className="inline-block px-[16px] py-[6px] bg-[#e8f2ff] rounded-full text-[14px] font-[600] text-[#0177fb]">
                위픽부스터를 만난 후,
              </span>
            </div>
          </div>

          {/* Slide Content */}
          <div className="relative overflow-hidden rounded-[20px] bg-white border border-[#f1f2f3] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <div
              className="flex transition-transform duration-800 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {SLIDES.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  {/* Desktop */}
                  <img
                    src={slide.webImg}
                    alt={`배너 ${slide.id}`}
                    className="hidden lg:block w-full"
                  />
                  {/* Mobile */}
                  <img
                    src={slide.moImg}
                    alt={`배너 ${slide.id}`}
                    className="lg:hidden w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-[8px] mt-[20px]">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-[10px] rounded-full transition-all duration-300 ${
                  currentSlide === i
                    ? "bg-[#0177fb] w-[24px]"
                    : "bg-[#d4d4d4] w-[10px] hover:bg-[#b0b8c1]"
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
