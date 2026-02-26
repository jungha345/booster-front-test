"use client";

import { useState } from "react";

const INDUSTRY_TABS = ["병원", "창업", "채용", "렌탈", "법률", "다른업종"] as const;

const PRODUCT_ITEMS = [
  { id: "1", category: "성형외과", subcategory: "눈성형", price: "51,600원" },
  { id: "2", category: "성형외과", subcategory: "지방흡입", price: "54,000원" },
  { id: "3", category: "피부과", subcategory: "눈밑지방재배치", price: "49,200원" },
] as const;

export function AdPerformanceTab() {
  const [activeIndustry, setActiveIndustry] =
    useState<(typeof INDUSTRY_TABS)[number]>("병원");

  return (
    <div className="min-h-[1080px] flex items-center justify-center py-[120px] lg:py-0">
      <div className="max-w-[1080px] w-full mx-auto px-5 flex flex-col lg:flex-row gap-[40px] items-start lg:items-center">
        {/* Left: Description */}
        <div className="lg:flex-1">
          {/* Badge */}
          <div className="inline-block px-[9px] py-[5px] bg-[rgba(1,119,251,0.05)] border border-[rgba(1,119,251,0.15)] rounded-[6px] mb-[30px]">
            <span className="text-[16px] font-semibold text-[#0177fb] leading-[25.6px]">
              광고성과 구매
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[32px] lg:text-[40px] font-[800] leading-[1.4] mb-[20px]">
            <span className="text-[#0177fb]">과정</span>
            <span className="text-[#171819]">이 아닌 </span>
            <span className="text-[#0177fb]">성과</span>
            <span className="text-[#171819]">로</span>
          </h2>

          {/* Subtitle */}
          <h3 className="text-[24px] lg:text-[30px] font-semibold text-[#171819] leading-[1.4] mb-[20px]">
            [ 렌트 계약 15건 ] 까지
            <br />
            클릭 한 번이면 충분합니다.
          </h3>

          {/* Description */}
          <p className="text-[15px] lg:text-[17px] font-[500] text-[#454f5d] leading-[1.6] mb-[40px]">
            기획·제작·운영·개선의 복잡한 과정은 잊으세요.
            <br />
            노출부터 상담, 예약, 결제까지
            <br />
            원하는 성과를 구매하면 끝.
          </p>

          {/* Link */}
          <a
            href="#"
            className="inline-flex items-center text-[16px] font-bold text-[#171819] border-b border-transparent hover:border-[#171819] transition-all"
          >
            광고성과 구매하러 가기
            <span className="ml-1 text-[20px]">↗</span>
          </a>
        </div>

        {/* Right: Tabs + Grid */}
        <div className="w-full lg:w-[600px] shrink-0">
          {/* Industry Tabs - underline style */}
          <div className="flex mb-[20px]">
            {INDUSTRY_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveIndustry(tab)}
                className={`px-[22px] py-[8px] pb-[9px] text-[16px] font-semibold whitespace-nowrap transition-colors border-b ${
                  activeIndustry === tab
                    ? "text-[#0177fb] border-[#0177fb] bg-white"
                    : "text-[#888] border-[#eaeaea] hover:text-[#454f5d]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Grid - 3 columns with 12px gap */}
          <div className="flex gap-[12px]">
            {PRODUCT_ITEMS.map((product) => (
              <a
                key={product.id}
                href="#"
                className="flex-1 flex flex-col gap-[10px] rounded-[4px] group"
              >
                {/* Thumbnail - 190x190 square */}
                <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-[4px] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 rounded-lg flex items-center justify-center shadow-sm">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4c9d0" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className="flex flex-col gap-[4px]">
                  <div className="flex items-center gap-[6px] text-[15px] font-[500]">
                    <span className="text-[#171819]">{product.category}</span>
                    <span className="text-[#d4d4d4] text-[12px]">|</span>
                    <span className="text-[#171819]">{product.subcategory}</span>
                  </div>
                  <span className="text-[16px] font-semibold text-[#171819]">
                    {product.price}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
