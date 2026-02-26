"use client";

import { useState } from "react";
import { INSIGHT_ITEMS } from "@/lib/constants";

const TABS = ["인사이트", "성공사례"] as const;

export function InsightsSection() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("인사이트");

  return (
    <section id="insights" className="bg-bg-section py-16 lg:py-24">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Heading */}
        <h2 className="text-xl lg:text-[36px] lg:leading-[1.3] font-bold text-text-dark text-center mb-10 lg:mb-14">
          <span className="text-primary">[</span>
          <span className="text-primary"> 1,000억 원의 광고 노하우 </span>
          <span className="text-primary">]</span>를
          <br className="lg:hidden" />
          <span className="hidden lg:inline"> </span>
          위픽부스터는 쌓아왔습니다
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8 lg:mb-10">
          <div className="inline-flex gap-1 bg-white rounded-full p-1 border border-border">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-text-dark text-white"
                    : "text-text-medium hover:text-text-gray"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-10">
          {INSIGHT_ITEMS.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#868e96"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-5 lg:p-6">
                <h3 className="text-base lg:text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-gray leading-relaxed line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  자세히 보기 <span className="ml-1">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white border border-border rounded-full text-sm font-semibold text-text-dark hover:bg-bg-light transition-colors"
          >
            인사이트 전체보기
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="ml-2"
            >
              <path d="M6 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
