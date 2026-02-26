"use client";

import { useRef, useState } from "react";

const SOLUTION_ITEMS = [
  {
    id: "1",
    title: "광고 성과 발생",
    description:
      "광고성과가 발생하면 실시간으로 알림을 보내드려요.\n고객에게는 신청 완료 메시지를 발송해, 응답률을 높여 드립니다. 모든 성과는 솔루션에서\n24시간 언제든 확인할 수 있어요.",
    tags: ["실시간 알림", "CRM 마케팅", "투명한 성과", "24시간 모니터링"],
  },
  {
    id: "2",
    title: "AI 자동 응대",
    description:
      "AI가 고객 문의에 자동으로 응대하여 상담 전환율을 극대화합니다. 24시간 운영으로 놓치는 고객이 없습니다.",
    tags: ["AI 챗봇", "자동응답", "상담전환", "24시간 운영"],
  },
  {
    id: "3",
    title: "고객 관리",
    description:
      "고객 데이터를 통합 관리하고 맞춤형 마케팅으로 재구매율을 높입니다. 모든 과정을 자동화합니다.",
    tags: ["고객관리", "데이터 연동", "맞춤 마케팅", "자동화"],
  },
] as const;

export function AdManagementTab() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (dir: "prev" | "next") => {
    setCurrentSlide((prev) => {
      const next = dir === "prev" ? prev - 1 : prev + 1;
      return Math.max(0, Math.min(SOLUTION_ITEMS.length - 1, next));
    });
  };

  return (
    <div className="min-h-[1080px] flex items-center justify-center py-[60px] overflow-hidden">
      <div className="max-w-[1080px] w-full mx-auto px-5 flex flex-col lg:flex-row gap-[40px] items-start lg:items-center">
        {/* Left: Description */}
        <div className="lg:flex-1">
          <div className="inline-block px-[9px] py-[5px] bg-[rgba(1,119,251,0.05)] border border-[rgba(1,119,251,0.15)] rounded-[6px] mb-[30px]">
            <span className="text-[16px] font-semibold text-[#0177fb] leading-[25.6px]">
              광고성과 관리
            </span>
          </div>

          <h2 className="text-[32px] lg:text-[40px] font-[800] leading-[1.4] mb-[20px]">
            <span className="text-[#0177fb]">추측</span>
            <span className="text-[#171819]">이 아닌 </span>
            <span className="text-[#0177fb]">데이터</span>
            <span className="text-[#171819]">로</span>
          </h2>

          <h3 className="text-[24px] lg:text-[30px] font-semibold text-[#171819] leading-[1.4] mb-[20px]">
            [ AI 기반 솔루션 ]으로
            <br />
            광고를 매출로 바꿉니다.
          </h3>

          <p className="text-[15px] lg:text-[17px] font-[500] text-[#454f5d] leading-[1.6] mb-[40px]">
            성과 중심 솔루션+AI로
            <br />
            고객문의 → 상담 → 결제까지
            <br />
            모든 순간을 끊김없이 관리합니다.
            <br />
            진짜 성과는 &lsquo;매출이 일어나는 순간&rsquo; 완성되니까요.
          </p>

          <a
            href="#"
            className="inline-flex items-center text-[16px] font-bold text-[#171819] border-b border-transparent hover:border-[#171819] transition-all"
          >
            광고성과 관리 자세히 보기 ↗
          </a>
        </div>

        {/* Right: Solution Carousel */}
        <div className="w-full lg:w-[600px] shrink-0 relative">
          {/* Carousel Track */}
          <div className="relative h-[467px] overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out absolute inset-0"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {SOLUTION_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 bg-white p-[20px] flex flex-col gap-[10px]"
                >
                  {/* Title Bar */}
                  <div className="flex items-center gap-[10px]">
                    <div className="border border-[#a8aeba] rounded-[8px] px-[7px] py-[5px]">
                      <span className="text-[16px] font-[500] text-[#7e838d]">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-[#a8aeba]" />
                  </div>

                  {/* Illustration placeholder */}
                  <div className="w-full h-[240px] rounded-[8px] flex items-center justify-center">
                    <div className="w-[560px] h-[224px] rounded-[10px] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0177fb" strokeWidth="1.5">
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="pt-[10px]">
                    <p className="text-[16px] font-[500] text-[#171819] leading-[1.6] whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-[8px] pt-[2px]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-[10px] py-[4px] bg-[#f2f8ff] border border-[#d5e9ff] rounded-[8px] text-[14px] font-[500] text-[#0177fb]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev/Next buttons */}
          <button
            onClick={() => goTo("prev")}
            className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-[22px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[0.5px] border border-[#f1f2f3] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.04)] flex items-center justify-center text-[32px] text-[#171819] leading-[20px] z-10"
            aria-label="이전"
          >
            ‹
          </button>
          <button
            onClick={() => goTo("next")}
            className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-[22px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[0.5px] border border-[#f1f2f3] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.04)] flex items-center justify-center text-[32px] text-[#171819] leading-[20px] z-10"
            aria-label="다음"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
