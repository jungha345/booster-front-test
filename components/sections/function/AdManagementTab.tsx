"use client";

import { useRef } from "react";
import { SOLUTION_ITEMS } from "@/lib/constants";

export function AdManagementTab() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Left: Description */}
      <div className="mb-8 lg:mb-0 lg:w-[440px] lg:shrink-0">
        <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
          광고성과 관리
        </span>
        <h2 className="text-2xl lg:text-[40px] lg:leading-[1.3] font-bold text-text-dark mb-4">
          추측이 아닌 데이터로
        </h2>
        <h3 className="text-xl lg:text-[28px] lg:leading-[1.4] font-bold text-text-dark mb-4">
          <span className="text-primary">[</span>
          <span className="text-primary"> AI 기반 솔루션 </span>
          <span className="text-primary">]</span>으로
          <br />
          광고를 매출로 바꿉니다.
        </h3>
        <p className="text-sm lg:text-base text-text-gray leading-relaxed mb-6">
          성과 중심 솔루션+AI로 고객문의 → 상담 → 결제까지 모든 순간을 끊김없이
          관리합니다. 진짜 성과는 &lsquo;매출이 일어나는 순간&rsquo;
          완성되니까요.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
        >
          광고성과 관리 자세히 보기 <span className="ml-1">↗</span>
        </a>
      </div>

      {/* Right: Solution Carousel */}
      <div className="flex-1 min-w-0 relative">
        {/* Navigation Arrows - Desktop */}
        <div className="hidden lg:flex absolute -top-12 right-0 gap-2 z-10">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-bg-light transition-colors"
            aria-label="이전"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M10 4l-4 4 4 4" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-bg-light transition-colors"
            aria-label="다음"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 4l4 4-4 4" />
            </svg>
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0"
        >
          {SOLUTION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="snap-start flex-shrink-0 w-[280px] lg:w-[340px] bg-bg-section rounded-2xl p-5 lg:p-6 border border-border"
            >
              {/* Title Bar */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  {item.title}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Illustration placeholder */}
              <div className="w-full h-[160px] lg:h-[200px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl mb-4 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0177fb"
                    strokeWidth="1.5"
                  >
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-text-gray leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-white text-xs text-text-medium rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
