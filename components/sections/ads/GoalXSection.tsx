"use client";

import { useState, useEffect } from "react";

const ROLLING_GOALS = [
  "5,000명에게 노출하는",
  "400명이 상담신청하는",
  "50명이 가맹 계약하는",
  "100명이 내원하는",
  "300명이 상담예약하는",
  "50명이 입사 지원하는",
  "15명이 렌트 계약하는",
  "24명이 견적을 요청하는",
] as const;

const KPS_ITEMS = [
  { label: "노출", img: "https://cdn.imweb.me/thumbnail/20250904/aac351765f4e8.png" },
  { label: "클릭", img: "https://cdn.imweb.me/thumbnail/20250904/f855589fb1e66.png" },
  { label: "상담신청", img: "https://cdn.imweb.me/thumbnail/20250904/0a1b2bab1564b.png" },
  { label: "상담예약", img: "https://cdn.imweb.me/thumbnail/20250904/a8b792608e7a9.png" },
  { label: "방문예약", img: "https://cdn.imweb.me/thumbnail/20250904/85663e50f4cc3.png" },
  { label: "방문", img: "https://cdn.imweb.me/thumbnail/20250904/866b425a2850c.png" },
  { label: "결제", img: "https://cdn.imweb.me/thumbnail/20250904/628fa12e1e4d9.png" },
] as const;

export function GoalXSection() {
  const [rollingIndex, setRollingIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [selectedKps, setSelectedKps] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRollingIndex((prev) => (prev + 1) % ROLLING_GOALS.length);
      setFadeKey((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-[80px] lg:py-[120px] bg-white">
      <div className="max-w-[1080px] mx-auto px-5 text-center">
        {/* Title with rolling text */}
        <h2 className="text-[22px] lg:text-[36px] font-[800] text-[#171819] leading-[1.4] mb-[16px]">
          이제 원하는 성과를 말씀해주실 타이밍이에요.
        </h2>
        <div className="text-[22px] lg:text-[36px] font-[800] leading-[1.4] mb-[16px]">
          <span
            key={fadeKey}
            className="inline-block text-[#0177fb]"
            style={{ animation: "fade-in 0.4s ease" }}
          >
            {ROLLING_GOALS[rollingIndex]}
          </span>
          <br />
          <span className="text-[#171819]">목표를 달성하고 싶으신가요?</span>
        </div>
        <p className="text-[15px] lg:text-[18px] font-[500] text-[#454F5D] leading-[1.6] mb-[40px] lg:mb-[60px]">
          구매한 만큼 성과가 달성되는 위픽부스터를 경험해 보세요.
        </p>

        {/* KPS Selector - Desktop */}
        <div className="hidden lg:flex justify-center gap-[12px] mb-[40px]">
          {KPS_ITEMS.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setSelectedKps(i)}
              className={`flex flex-col items-center gap-[8px] p-[16px] rounded-[16px] border transition-all duration-300 min-w-[100px] ${
                selectedKps === i
                  ? "bg-[#0177fb] border-[#0177fb] text-white shadow-[0_4px_12px_rgba(1,119,251,0.3)]"
                  : "bg-[#f5f7fa] border-[#f5f7fa] text-[#454F5D] hover:border-[#0177fb] hover:bg-[#f0f7ff]"
              }`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-[48px] h-[48px] object-contain"
              />
              <span className="text-[14px] font-[600]">{item.label}</span>
            </button>
          ))}
        </div>

        {/* KPS Selector - Mobile */}
        <div className="lg:hidden mb-[40px]">
          <img
            src="https://cdn.imweb.me/thumbnail/20250902/2f41d7c14fe1d.png"
            alt="광고성과 단계"
            className="w-full"
          />
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center px-[32px] py-[14px] bg-[#0177fb] text-white rounded-full text-[16px] font-[700] hover:bg-[#0062d6] transition-colors"
        >
          광고성과 구매하기
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="ml-[8px]">
            <path d="M6 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </section>
  );
}
