"use client";

import { useState } from "react";
import { AdPerformanceTab } from "@/components/sections/function/AdPerformanceTab";
import { AdManagementTab } from "@/components/sections/function/AdManagementTab";
import { MarketingSkillTab } from "@/components/sections/function/MarketingSkillTab";

const TABS = ["광고성과 구매", "광고성과 관리", "마케팅 스킬"] as const;
type Tab = (typeof TABS)[number];

export function FunctionSection() {
  const [activeTab, setActiveTab] = useState<Tab>("광고성과 구매");

  return (
    <section id="function" className="bg-white py-[120px] relative">
      {/* Floating Sticky Tab */}
      <div className="sticky top-0 z-20 flex justify-center px-5 mb-0">
        <div className="inline-flex items-center gap-[8px] px-[22px] py-[14px] rounded-[14px] bg-white/90 backdrop-blur-[10px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            const isMarketing = tab === "마케팅 스킬";
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-[16px] py-[12px] rounded-[10px] text-[16px] font-semibold transition-all whitespace-nowrap ${
                  isActive && isMarketing
                    ? "bg-[rgba(1,119,251,0.07)] text-[#0177fb] font-bold"
                    : isActive
                      ? "bg-[rgba(1,119,251,0.07)] text-[#0177fb] font-bold"
                      : "text-[#171819] hover:bg-gray-50"
                }`}
              >
                {isMarketing && (
                  <span className="mr-[6px] flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill={isActive ? "#0177fb" : "#868e96"} fillOpacity="0.1" />
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke={isActive ? "#0177fb" : "#868e96"} strokeWidth="1.5" fill="none" />
                      <path d="M2 17l10 5 10-5" stroke={isActive ? "#0177fb" : "#868e96"} strokeWidth="1.5" fill="none" />
                    </svg>
                  </span>
                )}
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "광고성과 구매" && <AdPerformanceTab />}
        {activeTab === "광고성과 관리" && <AdManagementTab />}
        {activeTab === "마케팅 스킬" && <MarketingSkillTab />}
      </div>
    </section>
  );
}
