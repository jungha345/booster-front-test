"use client";

import { useState } from "react";
import { INDUSTRY_TABS, PRODUCT_ITEMS } from "@/lib/constants";

export function AdPerformanceTab() {
  const [activeIndustry, setActiveIndustry] =
    useState<(typeof INDUSTRY_TABS)[number]>("병원");

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Left: Description */}
      <div className="mb-8 lg:mb-0 lg:w-[440px] lg:shrink-0">
        <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
          광고성과 구매
        </span>
        <h2 className="text-2xl lg:text-[40px] lg:leading-[1.3] font-bold text-text-dark mb-4">
          과정이 아닌 성과로
        </h2>
        <h3 className="text-xl lg:text-[28px] lg:leading-[1.4] font-bold text-text-dark mb-4">
          <span className="text-primary">[</span>
          <span className="text-primary">렌트 계약 15건</span>
          <span className="text-primary">]</span> 까지
          <br />
          클릭 한 번이면 충분합니다.
        </h3>
        <p className="text-sm lg:text-base text-text-gray leading-relaxed mb-6">
          기획·제작·운영·개선의 복잡한 과정은 잊으세요. 노출부터 상담, 예약,
          결제까지 원하는 성과를 구매하면 끝.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
        >
          광고성과 구매하러 가기 <span className="ml-1">↗</span>
        </a>
      </div>

      {/* Right: Tabs + Grid */}
      <div className="flex-1 min-w-0">
        {/* Industry Tabs */}
        <div className="flex gap-0 border-b border-border mb-6 overflow-x-auto scrollbar-hide">
          {INDUSTRY_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveIndustry(tab)}
              className={`px-4 lg:px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeIndustry === tab
                  ? "text-text-dark border-text-dark"
                  : "text-text-medium border-transparent hover:text-text-gray"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {PRODUCT_ITEMS.map((product) => (
            <a
              key={product.id}
              href="#"
              className="group block rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#868e96"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="p-3">
                <p className="text-xs text-text-medium mb-1">
                  {product.category}{" "}
                  <span className="text-text-light">|</span>{" "}
                  {product.subcategory}
                </p>
                <p className="text-sm lg:text-base font-bold text-primary">
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
