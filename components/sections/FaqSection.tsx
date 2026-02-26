"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "위픽부스터는 어떤 서비스인가요?",
    answer: "위픽부스터는 광고 성과를 직접 구매할 수 있는 성과형 마케팅 플랫폼입니다. 기획·제작·운영·개선의 복잡한 과정 없이, 원하는 성과(노출, 클릭, 상담, 예약, 결제 등)를 선택하고 구매하면 끝입니다.",
  },
  {
    question: "기존 광고대행사와 어떤 점이 다른가요?",
    answer: "기존 광고대행사는 광고비를 소진하는 방식이지만, 위픽부스터는 실제 성과(상담, 예약, 결제)가 발생할 때만 비용이 청구됩니다. 불확실한 광고비 지출 없이 확실한 성과만 구매할 수 있습니다.",
  },
  {
    question: "어떤 업종이 이용할 수 있나요?",
    answer: "병원, 성형외과, 피부과, 치과, 한의원 등 의료 분야부터 창업, 프랜차이즈, 렌탈, 법률, 채용, B2B 등 다양한 업종에서 이용 가능합니다.",
  },
  {
    question: "최소 광고 예산은 얼마인가요?",
    answer: "업종과 목표 성과에 따라 다르지만, 소규모 예산으로도 시작할 수 있습니다. 최소 구매 단위는 성과 1건부터 가능하며, 상담을 통해 예산에 맞는 최적의 플랜을 제안해 드립니다.",
  },
  {
    question: "광고는 언제부터 시작되나요?",
    answer: "성과 구매 후 최소 1~3영업일 내에 광고가 집행됩니다. 업종과 캠페인 규모에 따라 셋업 기간이 달라질 수 있으며, 담당 매니저가 진행 상황을 안내해 드립니다.",
  },
  {
    question: "결제 방법은 어떻게 되나요?",
    answer: "신용카드, 계좌이체, 가상계좌 등 다양한 결제 수단을 지원합니다. 크레딧을 미리 충전하여 사용하거나, 건별 결제도 가능합니다. 세금계산서 발행도 지원합니다.",
  },
] as const;

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-[80px] lg:py-[120px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row lg:gap-[60px]">
          {/* Left: Title */}
          <div className="mb-[32px] lg:mb-0 lg:w-[320px] lg:shrink-0">
            <h2 className="text-[24px] lg:text-[36px] font-bold text-[#171819] leading-[1.3] mb-[12px]">
              자주 묻는 질문
            </h2>
            <p className="text-[14px] lg:text-[16px] font-[500] text-[#868e96]">
              위픽부스터 이용 전 꼭 확인해보세요
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="flex-1">
            <div className="space-y-[12px]">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[14px] border border-[#f1f2f3] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex items-center w-full px-[20px] py-[16px] text-left gap-[12px]"
                  >
                    <span className="flex-shrink-0 w-[28px] h-[28px] rounded-full bg-[#0177fb] text-white text-[12px] font-bold flex items-center justify-center">
                      Q
                    </span>
                    <span className="flex-1 text-[14px] lg:text-[16px] font-semibold text-[#171819] leading-[1.5]">
                      {item.question}
                    </span>
                    <span
                      className={`flex-shrink-0 text-[20px] text-[#868e96] transition-transform duration-300 ${
                        openIndex === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-[20px] pb-[20px] pl-[60px]">
                      <p className="text-[14px] text-[#454f5d] font-[500] leading-[1.7]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
