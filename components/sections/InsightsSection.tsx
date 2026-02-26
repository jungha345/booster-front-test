"use client";

import { useState } from "react";

const TABS = ["인사이트", "성공사례"] as const;

const INSIGHT_ITEMS = [
  {
    id: "1",
    title: "O2O 비즈니스 마케팅 효율 계산 방법",
    excerpt: "O2O 비즈니스에서 마케팅 효율을 정확하게 측정하고 개선하는 방법을 알아봅니다.",
  },
  {
    id: "2",
    title: "토스 광고 전환 2,822개 만든 이야기",
    excerpt: "토스 광고에서 2,822개의 전환을 만들어낸 실전 마케팅 전략을 공개합니다.",
  },
  {
    id: "3",
    title: "병원 광고에서 없으면 안 될, '이 것'",
    excerpt: "병원 광고의 필수 요소와 성공적인 환자 유치 전략에 대해 알아봅니다.",
  },
] as const;

export function InsightsSection() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("인사이트");

  return (
    <section id="insights" className="bg-[#f8f9fc] py-[80px] lg:py-[120px]">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Heading */}
        <h2 className="text-[22px] lg:text-[36px] font-bold text-[#171819] text-center leading-[1.4] mb-[40px] lg:mb-[60px]">
          <span className="text-[#0177fb]">[ 1,000억 원의 광고 노하우 ]</span>
          를
          <br className="lg:hidden" />
          <span className="hidden lg:inline"> </span>
          위픽부스터는 쌓아왔습니다
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-[32px] lg:mb-[40px]">
          <div className="inline-flex gap-[4px] bg-white rounded-full p-[4px] border border-[#f1f2f3]">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-[20px] py-[8px] rounded-full text-[14px] font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-[#171819] text-white"
                    : "text-[#868e96] hover:text-[#454f5d]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] lg:gap-[20px] mb-[32px] lg:mb-[40px]">
          {INSIGHT_ITEMS.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group bg-white rounded-[16px] overflow-hidden border border-[#f1f2f3] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
            >
              {/* Thumbnail */}
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4c9d0" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-[20px] lg:p-[24px]">
                <h3 className="text-[16px] lg:text-[18px] font-bold text-[#171819] mb-[8px] group-hover:text-[#0177fb] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#868e96] font-[500] leading-[1.6] line-clamp-2 mb-[16px]">
                  {item.excerpt}
                </p>
                <span className="text-[15px] font-semibold text-[#0177fb]">
                  자세히 보기 ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center px-[24px] py-[12px] bg-white border border-[#e5e8eb] rounded-full text-[14px] font-semibold text-[#171819] hover:bg-[#f5f6f8] transition-colors"
          >
            인사이트 전체보기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="ml-[8px]">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
