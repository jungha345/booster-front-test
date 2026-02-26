"use client";

import { useState } from "react";
import { FUNCTION_TABS } from "@/lib/constants";
import { AdPerformanceTab } from "@/components/sections/function/AdPerformanceTab";
import { AdManagementTab } from "@/components/sections/function/AdManagementTab";
import { MarketingSkillTab } from "@/components/sections/function/MarketingSkillTab";

export function FunctionSection() {
  const [activeTab, setActiveTab] =
    useState<(typeof FUNCTION_TABS)[number]>("광고성과 구매");

  return (
    <section id="function" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 lg:mb-16">
          <div className="inline-flex items-center bg-bg-light rounded-full p-1.5">
            {FUNCTION_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 lg:px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-white text-text-dark shadow-sm"
                    : "text-text-medium hover:text-text-gray"
                }`}
              >
                {tab === "마케팅 스킬" && (
                  <span className="inline-block w-4 h-4 mr-1 align-middle">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </span>
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "광고성과 구매" && <AdPerformanceTab />}
          {activeTab === "광고성과 관리" && <AdManagementTab />}
          {activeTab === "마케팅 스킬" && <MarketingSkillTab />}
        </div>
      </div>
    </section>
  );
}
