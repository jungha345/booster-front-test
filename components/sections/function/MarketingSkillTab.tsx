"use client";

import { useState, useRef } from "react";

const SKILL_TABS = ["마케팅 키트", "교육·행사", "컨설팅"] as const;

const SKILL_CARDS = [
  {
    id: "1",
    title: "마케팅 몰락에 대비하는 마케팅 성공\n전략은?",
  },
  {
    id: "2",
    title: "메디콜센터 본부장의 월 신환 5배 콜\n관리 노하우집",
  },
  {
    id: "3",
    title: "어드레서블 TV 광고가 바꾸는 마케\n팅 생태계",
  },
  {
    id: "4",
    title: "CPA 마케팅 100억 회사의 CPA 전\n략 5가지",
  },
] as const;

export function MarketingSkillTab() {
  const [activeTab, setActiveTab] =
    useState<(typeof SKILL_TABS)[number]>("마케팅 키트");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCards = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 286;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-[1080px] flex items-center justify-center py-[120px] lg:py-0">
      <div className="max-w-[1080px] w-full mx-auto px-5 flex flex-col lg:flex-row gap-[40px] items-start lg:items-center">
        {/* Left: Description */}
        <div className="lg:flex-1 lg:sticky lg:top-0">
          <div className="inline-block px-[9px] py-[5px] bg-[rgba(1,119,251,0.05)] border border-[rgba(1,119,251,0.15)] rounded-[6px] mb-[30px]">
            <span className="text-[16px] font-semibold text-[#0177fb] leading-[25.6px]">
              마케팅 스킬
            </span>
          </div>

          <h2 className="text-[32px] lg:text-[40px] font-[800] leading-[1.4] mb-[20px]">
            <span className="text-[#0177fb]">감</span>
            <span className="text-[#171819]">이 아닌 </span>
            <span className="text-[#0177fb]">전략</span>
            <span className="text-[#171819]">으로</span>
          </h2>

          <h3 className="text-[24px] lg:text-[30px] font-semibold text-[#171819] leading-[1.4] mb-[20px]">
            [ 마케팅 스킬 ]로
            <br />
            지속 가능한 구조를 만드세요.
          </h3>

          <p className="text-[15px] lg:text-[17px] font-[500] text-[#454f5d] leading-[1.6] mb-[40px]">
            이제 감에 의존하지 말고
            <br />
            성과가 쌓이는 전략을 설계하세요.
            <br />
            필요없는 과정은 비우고
            <br />꼭 필요한 전략만 남겼습니다.
          </p>

          <a
            href="#"
            className="inline-flex items-center text-[16px] font-bold text-[#171819] border-b border-transparent hover:border-[#171819] transition-all"
          >
            마케팅 스킬 더 알아보기 ↗
          </a>
        </div>

        {/* Right: Sub-tabs + Card Grid */}
        <div className="w-full lg:w-[600px] shrink-0">
          {/* Sub-tabs - underline style */}
          <div className="flex mb-[24px]">
            {SKILL_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-[22px] py-[8px] pb-[9px] text-[15px] font-semibold whitespace-nowrap transition-colors border-b ${
                  activeTab === tab
                    ? "text-[#0177fb] border-[#0177fb] bg-white"
                    : "text-[#868e96] border-[#eaeaea] hover:text-[#454f5d]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Horizontal Scrollable Card Grid */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-[16px] overflow-x-auto scrollbar-hide pb-4"
            >
              {SKILL_CARDS.map((card) => (
                <a
                  key={card.id}
                  href="#"
                  className="flex-shrink-0 w-[260px] lg:w-[270px] bg-white rounded-[12px] overflow-hidden group"
                >
                  {/* Thumbnail */}
                  <div className="aspect-[270/202] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center shadow-sm">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c4c9d0" strokeWidth="1.5">
                          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-[20px] flex flex-col gap-[10px]">
                    <p className="text-[16px] font-semibold text-[#171819] leading-[1.5] whitespace-pre-line group-hover:text-[#0177fb] transition-colors">
                      {card.title}
                    </p>
                    <span className="text-[15px] font-semibold text-[#0177fb]">
                      자세히 보기 ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Scroll Buttons */}
            <div className="flex gap-[14px] justify-center mt-[20px]">
              <button
                onClick={() => scrollCards("left")}
                className="w-[40px] h-[40px] rounded-[20px] bg-[#f1f4f9] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.08)] flex items-center justify-center text-[18px] font-bold text-[#454f5d]"
              >
                ←
              </button>
              <button
                onClick={() => scrollCards("right")}
                className="w-[40px] h-[40px] rounded-[20px] bg-[#f1f4f9] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.08)] flex items-center justify-center text-[18px] font-bold text-[#454f5d]"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
