"use client";

import { useState, useEffect, useRef } from "react";

const FEATURE_CARDS = [
  {
    number: "1",
    title: "과정이 아닌 성과로",
    description: "고객과 확실하게 만나고 싶다면,\n지금 바로 성과를 구매하세요.",
    cta: "광고성과 구매",
    href: "#function",
  },
  {
    number: "2",
    title: "추측이 아닌 데이터로",
    description: "광고를 매출로 이어가려면,\n집요한 관리로 기회를 놓치지 마세요.",
    cta: "광고성과 관리",
    href: "#management",
  },
  {
    number: "3",
    title: "감이 아닌 전략으로",
    description: "더 이상 감에 의존하지 말고,\n지속 가능한 전략을 세워보세요.",
    cta: "마케팅 스킬",
    href: "#skill",
  },
] as const;

export function HeroSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [email, setEmail] = useState("");
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Cards-wrap entrance animation via IntersectionObserver
  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 800ms delay like original
          setTimeout(() => setCardsVisible(true), 800);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-contain bg-center bg-no-repeat"
             style={{ backgroundImage: "url('https://cdn.imweb.me/thumbnail/20251023/c46b44d68b612.png')" }}>
      {/* Hero Area */}
      <div className="relative min-h-[calc(100vh-290px)] flex flex-col items-center pt-[119px] lg:pt-[119px] pb-[80px] lg:pb-[0px] px-5 overflow-hidden">
        {/* Background - light gradient */}
        <div className="absolute inset-0 via-white to-white" />

        {/* Intro Content */}
        <div className="relative z-10 w-full max-w-[1160px] mx-auto">
          {/* Headline */}
          <div className="text-center mb-[38.8px] mt-[100px]">
            <h1 className="text-[36px] lg:text-[48px] font-[800] leading-[1.3] mb-[40px]">
              <span className="text-[#111]">불확실한 광고,</span>
              <br />
              <span className="bg-gradient-to-r from-[#bffa62] to-[#0177fb] bg-clip-text text-transparent">
                이제 확실한 성과로
              </span>
            </h1>
            <p className="text-[16px] lg:text-[18px] font-[500] text-[#454f5d] leading-[1.6]">
              &ldquo;왜 광고비를 써도 결과는 불확실할까?&rdquo;
              <br />
              광고비가 곧 결과가 되는 일
              <br />
              그 당연함을 이제 우리가 만듭니다.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Wrap - glassmorphic container with entrance animation */}
      <div
        ref={cardsRef}
        className={`cards-wrap relative bg-gradient-to-t from-white from-50% to-[rgba(255,255,255,0.24)] backdrop-blur-[50px] border-t border-l border-r border-[#e0e8f9] rounded-t-[40px] lg:rounded-t-[100px] px-5 pt-[60px] lg:pt-[100px] pb-[80px] lg:pb-[120px] -mt-[100px] ${
          cardsVisible ? "show" : ""
        }`}
      >
        <div className="max-w-[1080px] mx-auto">
          {/* Section Text */}
          <div className="mb-[36px]">
            <h3 className="text-[24px] lg:text-[30px] font-bold text-[#171819] leading-[1.4] mb-[18.9px]">
              성과가 일어나는 순간까지
              <br />
              빠르고 집요하게
              <br />
              위픽부스터가 광고를 만드는 세가지 방식
            </h3>
            <p className="text-[16px] lg:text-[18px] font-[500] text-[#454f5d] leading-[1.6]">
              불확실함에 지친 광고 시장에서
              <br />
              확실한 성과를 만듭니다.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col lg:flex-row gap-[20px]">
            {FEATURE_CARDS.map((card, i) => (
              <div
                key={card.number}
                className="flex-1 rounded-[20px] p-[4px] transition-all duration-400 cursor-pointer group"
                style={{
                  background: activeCard === i ? "#dbecfc" : "transparent",
                  transform: activeCard === i ? "translateY(-4px)" : "translateY(0)",
                }}
                onMouseEnter={() => setActiveCard(i)}
              >
                <div
                  className={`relative rounded-[16px] p-[24px] lg:p-[30px] h-full min-h-[220px] lg:min-h-[246px] transition-all duration-400 ${
                    activeCard === i
                      ? "bg-white border border-[#0177fb]"
                      : "bg-[#fbfcfd] border border-[#f1f2f3]"
                  }`}
                >
                  {/* Number Badge */}
                  <div
                    className={`w-[28px] h-[28px] rounded-[5px] flex items-center justify-center mb-[28px] transition-colors duration-400 ${
                      activeCard === i
                        ? "bg-[#0177fb]"
                        : "bg-[rgba(134,142,150,0.19)]"
                    }`}
                  >
                    <span
                      className={`text-[16px] font-semibold ${
                        activeCard === i ? "text-white" : "text-[#868e96]"
                      }`}
                    >
                      {card.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    className={`text-[20px] lg:text-[22px] font-bold mb-[12px] transition-colors duration-400 ${
                      activeCard === i ? "text-[#0177fb]" : "text-[#171819]"
                    }`}
                  >
                    {card.title}
                  </h4>

                  {/* Description */}
                  <p
                    className={`text-[15px] lg:text-[16px] font-semibold leading-[1.5] mb-[20px] whitespace-pre-line transition-colors duration-400 ${
                      activeCard === i ? "text-[#454f5d]" : "text-[#868e96]"
                    }`}
                  >
                    {card.description}
                  </p>

                  {/* CTA with arrow animation */}
                  <div className="flex items-center gap-1">
                    <span
                      className={`text-[16px] font-semibold transition-colors duration-400 ${
                        activeCard === i ? "text-[#454f5d]" : "text-[#868e96]"
                      }`}
                    >
                      {card.cta}
                    </span>
                    <span
                      className="text-[16px] font-semibold transition-all duration-400"
                      style={{
                        color: activeCard === i ? "#0177fb" : "#868e96",
                        transform: activeCard === i ? "translateX(12px)" : "translateX(0)",
                        display: "inline-block",
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Sticky Email Bar */}
      <div className="hidden lg:block fixed bottom-[26px] left-1/2 -translate-x-1/2 z-40 w-full max-w-[960px] px-5">
        <div className="bg-[#171819] rounded-[14px] px-5 py-2 flex items-center gap-4 shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:-translate-y-[2px] transition-transform duration-300">
          <p className="text-white text-[14px] font-semibold whitespace-nowrap shrink-0">
            이메일 입력하고, 상담을 시작해 보세요!
          </p>
          <div className="flex items-center gap-2 flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해 주세요"
              className="email-input flex-1 h-[48px] px-4 bg-white rounded-[8px] text-[14px] text-[#171819] placeholder-[#b0b8c1] outline-none transition-all border border-transparent"
            />
            <button className="w-[56px] h-[48px] bg-primary text-white rounded-[8px] text-lg font-bold hover:bg-primary-hover transition-colors flex items-center justify-center shrink-0">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
