"use client";

import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    id: 1,
    before: "광고비만 나가고 성과는 불확실한 상태",
    after: "성과가 발생할 때만 비용 지불",
  },
  {
    id: 2,
    before: "복잡한 기획·제작·운영 과정의 반복",
    after: "원하는 성과를 선택하고 구매하면 끝",
  },
  {
    id: 3,
    before: "고객 응대와 관리를 직접 해야 하는 부담",
    after: "AI 솔루션으로 자동 응대 & 관리",
  },
] as const;

export function BoostrollSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-[60px] lg:py-[100px] bg-[#f5f7fa]">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Title */}
        <h2 className="text-[22px] lg:text-[36px] font-[800] text-[#171819] text-center leading-[1.4] mb-[40px] lg:mb-[60px]">
          불편하고 불안했던 광고는 이제 그만
          <br />
          위픽부스터에서{" "}
          <span className="lg:hidden">
            <br />
          </span>
          확실한 성과만 경험하세요
        </h2>

        {/* Carousel */}
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
                  <div className="grid grid-cols-2 min-h-[200px] lg:min-h-[280px]">
                    {/* Before */}
                    <div className="p-[24px] lg:p-[40px] flex items-center justify-center border-r border-[#f1f2f3] bg-[#fafafa]">
                      <p className="text-[15px] lg:text-[20px] font-[600] text-[#868E96] text-center leading-[1.5]">
                        {slide.before}
                      </p>
                    </div>
                    {/* After */}
                    <div className="p-[24px] lg:p-[40px] flex items-center justify-center">
                      <p className="text-[15px] lg:text-[20px] font-[700] text-[#0177fb] text-center leading-[1.5]">
                        {slide.after}
                      </p>
                    </div>
                  </div>
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
                className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                  currentSlide === i
                    ? "bg-[#0177fb] w-[24px]"
                    : "bg-[#d4d4d4] hover:bg-[#b0b8c1]"
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
