"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AdPerformanceTab } from "@/components/sections/function/AdPerformanceTab";
import { AdManagementTab } from "@/components/sections/function/AdManagementTab";
import { MarketingSkillTab } from "@/components/sections/function/MarketingSkillTab";

const TABS = ["광고성과 구매", "광고성과 관리", "마케팅 스킬"] as const;
type Tab = (typeof TABS)[number];

const TAB_TO_ID: Record<Tab, string> = {
  "광고성과 구매": "tab-purchase",
  "광고성과 관리": "tab-management",
  "마케팅 스킬": "tab-skill",
};

export function FunctionSection() {
  const [activeTab, setActiveTab] = useState<Tab>("광고성과 구매");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isScrollingRef = useRef(false);

  // IntersectionObserver: hide tab nav when function section is out of viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsNavVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    sectionObserver.observe(section);
    return () => sectionObserver.disconnect();
  }, []);

  // IntersectionObserver: sync active tab with scroll position
  useEffect(() => {
    const ids = Object.values(TAB_TO_ID);
    const tabKeys = Object.keys(TAB_TO_ID) as Tab[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = ids.indexOf(entry.target.id);
            if (idx !== -1) {
              setActiveTab(tabKeys[idx]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to tab section on click
  const handleTabClick = useCallback((tab: Tab) => {
    setActiveTab(tab);
    const targetId = TAB_TO_ID[tab];
    const el = document.getElementById(targetId);
    if (!el) return;

    isScrollingRef.current = true;
    el.scrollIntoView({ behavior: "smooth", block: "center" });

    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  }, []);

  return (
    <section id="function" ref={sectionRef} className="bg-white py-[120px] relative">
      {/* Floating Sticky Tab - hidden when section out of view */}
      <div
        className={`function-tab-nav sticky top-[82px] z-20 flex justify-center px-5 mb-0 ${
          isNavVisible ? "" : "hidden-nav"
        }`}
      >
        <div className="inline-flex items-center gap-[8px] px-[22px] py-[14px] rounded-[14px] bg-white/90 backdrop-blur-[10px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            const isMarketing = tab === "마케팅 스킬";
            return (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`flex items-center px-[16px] py-[12px] rounded-[10px] text-[16px] font-semibold transition-all whitespace-nowrap ${
                  isActive
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

      {/* Tab Content - all rendered with IDs for IntersectionObserver */}
      <div>
        <div id="tab-purchase">
          <AdPerformanceTab />
        </div>
        <div id="tab-management">
          <AdManagementTab />
        </div>
        <div id="tab-skill">
          <MarketingSkillTab />
        </div>
      </div>
    </section>
  );
}
