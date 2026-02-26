"use client";

import { useState } from "react";
import { MARKETING_TABS, MARKETING_ITEMS } from "@/lib/constants";

export function MarketingSkillTab() {
  const [activeTab, setActiveTab] =
    useState<(typeof MARKETING_TABS)[number]>("마케팅 킷");

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Left: Description */}
      <div className="mb-8 lg:mb-0 lg:w-[440px] lg:shrink-0">
        <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
          마케팅 스킬
        </span>
        <h2 className="text-2xl lg:text-[40px] lg:leading-[1.3] font-bold text-text-dark mb-4">
          감이 아닌 전략으로
        </h2>
        <h3 className="text-xl lg:text-[28px] lg:leading-[1.4] font-bold text-text-dark mb-4">
          <span className="text-primary">[</span>
          <span className="text-primary"> 1,000억 원의 광고 노하우 </span>
          <span className="text-primary">]</span>를
          <br />
          지금 바로 내 것으로.
        </h3>
        <p className="text-sm lg:text-base text-text-gray leading-relaxed mb-6">
          마케팅 킷, 교육·이벤트, 전문 컨설팅까지. 현장에서 바로 쓸 수 있는
          실전 마케팅 스킬을 만나보세요.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
        >
          마케팅 스킬 더 알아보기 <span className="ml-1">↗</span>
        </a>
      </div>

      {/* Right: Sub-tabs + Cards */}
      <div className="flex-1 min-w-0">
        {/* Sub-tabs */}
        <div className="flex gap-0 border-b border-border mb-6 overflow-x-auto scrollbar-hide">
          {MARKETING_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 lg:px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab
                  ? "text-text-dark border-text-dark"
                  : "text-text-medium border-transparent hover:text-text-gray"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {MARKETING_ITEMS.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group block rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                {item.tag && (
                  <span
                    className={`absolute top-3 left-3 px-2 py-0.5 text-xs font-bold text-white rounded ${
                      item.tag === "HOT"
                        ? "bg-red-500"
                        : item.tag === "BEST"
                          ? "bg-primary"
                          : "bg-green-500"
                    }`}
                  >
                    {item.tag}
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-lg bg-white/80 flex items-center justify-center shadow-sm">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#868e96"
                      strokeWidth="1.5"
                    >
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="p-4">
                <h4 className="text-sm font-semibold text-text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-primary">
                    {item.price}
                  </span>
                  {"originalPrice" in item && item.originalPrice && (
                    <span className="text-xs text-text-light line-through">
                      {item.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
