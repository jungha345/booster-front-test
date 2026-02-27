"use client";

import { useState, useEffect, useRef } from "react";

const STEPS = [
  {
    id: 1,
    badge: "Step 01",
    title: "성과 구매",
    description:
      "어떤 매체에서 성과가 잘 나올까, 고민하지 마세요.\n업종과 광고 목표를 선택하고, 원하는 수량만큼 광고 성과를 구매하면 됩니다.\n결제가 완료되면 전담 매니저가 배정되어 캠페인을 준비합니다.",
    image: "https://cdn.imweb.me/thumbnail/20250829/151499e01b4fb.png",
  },
  {
    id: 2,
    badge: "Step 02",
    title: "광고 제작",
    description:
      "광고 제작물 검수만 해주세요.\n나머지는 위픽부스터가 알아서 진행해드려요.\n\n- 제품/서비스 스터디\n- 캠페인 런칭 자료 요청\n- 광고/상세 페이지 기획/제작\n- 광고주 검수",
    image: "https://cdn.imweb.me/thumbnail/20250829/d4778ca450e37.png",
  },
  {
    id: 3,
    badge: "Step 03",
    title: "매체 집행",
    description:
      "검수가 완료되면 캠페인이 시작됩니다.\n위픽부스터가 최적의 매체를 선정해 광고를 진행하며,\n목표 성과가 달성될 때마다 충전금이 차감됩니다.",
    image: "https://cdn.imweb.me/thumbnail/20250829/f3296f00efee0.png",
  },
  {
    id: 4,
    badge: "Step 04",
    title: "성과 달성",
    description:
      "기다리기만 하면 성과가 달성됩니다.\n성과 달성 현황은 솔루션에서 실시간으로 확인할 수 있어요.\n충전금이 소진되면 광고 리포트를 전달하고, 피드백을 반영해 다음 차시 광고에 개선점을 적용합니다.",
    image: "https://cdn.imweb.me/thumbnail/20250829/29ca63d4c965d.png",
  },
] as const;

export function WbpFlowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const viewportHeight = window.innerHeight;

      // Calculate which step should be active based on scroll position within the section
      const scrollProgress = Math.max(
        0,
        Math.min(1, -sectionTop / (sectionRef.current.offsetHeight - viewportHeight))
      );
      const stepIndex = Math.min(
        STEPS.length - 1,
        Math.floor(scrollProgress * STEPS.length)
      );
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (index: number) => {
    const target = stepRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      // Each step = 100vh of scroll space
      style={{ height: `${STEPS.length * 100}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-[1080px] mx-auto px-5 h-full flex flex-col justify-center">
          {/* Section Title */}
          <h2 className="text-[24px] lg:text-[36px] font-[800] text-[#171819] text-center leading-[1.3] mb-[32px] lg:mb-[40px]">
            광고 목표 달성,
            <br className="lg:hidden" />
            <span className="hidden lg:inline"> </span>
            클릭 한 번이면 충분합니다
          </h2>

          {/* Step Navigation */}
          <div className="flex justify-center gap-[8px] lg:gap-[12px] mb-[32px] lg:mb-[40px]">
            {STEPS.map((step, i) => (
              <button
                key={step.id}
                onClick={() => handleNavClick(i)}
                className={`px-[12px] lg:px-[16px] py-[6px] lg:py-[8px] rounded-full text-[13px] lg:text-[14px] font-[600] transition-all duration-300 ${
                  activeStep === i
                    ? "bg-[#0177fb] text-white"
                    : activeStep > i
                      ? "bg-[#e8f2ff] text-[#0177fb]"
                      : "bg-[#f5f7fa] text-[#868E96]"
                }`}
              >
                {step.badge}
              </button>
            ))}
          </div>

          {/* Step Content */}
          <div className="flex-1 max-h-[500px] lg:max-h-[600px] relative">
            {STEPS.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => { stepRefs.current[i] = el; }}
                className={`absolute inset-0 flex flex-col lg:flex-row gap-[24px] lg:gap-[40px] items-center transition-all duration-500 ${
                  activeStep === i
                    ? "opacity-100 translate-y-0"
                    : activeStep > i
                      ? "opacity-0 -translate-y-[40px]"
                      : "opacity-0 translate-y-[40px]"
                }`}
              >
                {/* Text */}
                <div className="flex-1 lg:pr-[20px]">
                  <span className="inline-block px-[12px] py-[4px] bg-[#e8f2ff] rounded-full text-[13px] font-[600] text-[#0177fb] mb-[12px]">
                    {step.badge}
                  </span>
                  <h3 className="text-[22px] lg:text-[28px] font-[800] text-[#171819] mb-[16px]">
                    {step.title}
                  </h3>
                  <p className="text-[14px] lg:text-[16px] font-[500] text-[#454F5D] leading-[1.7] whitespace-pre-line">
                    {step.description}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-[480px] shrink-0">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full rounded-[16px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
