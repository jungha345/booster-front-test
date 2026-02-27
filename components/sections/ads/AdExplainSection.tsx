const STEPS = [
  {
    label: "노출",
    description: "광고가 사용자에게 보여지는 횟수",
  },
  {
    label: "클릭",
    description: "광고를 클릭하여 랜딩페이지에 방문",
  },
  {
    label: "상담신청",
    description: "상담 폼 작성 및 신청 완료",
  },
  {
    label: "예약",
    description: "전화상담 또는 방문 예약 완료",
  },
  {
    label: "방문",
    description: "실제 매장/병원 방문 완료",
  },
  {
    label: "결제·계약",
    description: "최종 결제 또는 계약 체결",
  },
] as const;

export function AdExplainSection() {
  return (
    <section className="py-[60px] lg:py-[100px] bg-white">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-[40px] lg:mb-[60px]">
          <h2 className="text-[24px] lg:text-[36px] font-[800] text-[#171819] mb-[16px] leading-[1.3]">
            광고성과란 무엇인가요?
          </h2>
          <p className="text-[15px] lg:text-[18px] font-[500] text-[#454F5D] leading-[1.6] max-w-[700px] mx-auto">
            광고성과는 노출, 클릭, 회원가입, 상담신청, 예약, 방문, 결제 등
            <br className="hidden lg:block" />
            광고를 통해 얻고자 하는 고객의 실제 행동 지표를 의미합니다.
          </p>
        </div>

        {/* Funnel Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[12px] lg:gap-[16px]">
          {STEPS.map((step, i) => (
            <div
              key={step.label}
              className="relative bg-[#f5f7fa] rounded-[16px] p-[20px] lg:p-[24px] text-center group"
            >
              {/* Step Number */}
              <div className="w-[32px] h-[32px] rounded-full bg-[#0177fb] text-white text-[14px] font-bold flex items-center justify-center mx-auto mb-[12px]">
                {i + 1}
              </div>
              {/* Label */}
              <p className="text-[16px] lg:text-[18px] font-[700] text-[#171819] mb-[6px]">
                {step.label}
              </p>
              {/* Description */}
              <p className="text-[13px] lg:text-[14px] font-[500] text-[#868E96] leading-[1.5]">
                {step.description}
              </p>
              {/* Arrow connector (not on last) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-[12px] -translate-y-1/2 text-[#c4c9d0] text-[18px] z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-[40px] lg:mt-[60px]">
          <p className="text-[15px] lg:text-[17px] font-[500] text-[#454F5D] mb-[20px] leading-[1.6]">
            위픽부스터는 이 중 원하는 성과만 선택하여 구매할 수 있습니다.
            <br />
            성과가 발생할 때만 비용이 청구되므로, 광고비 낭비 없이 확실한 결과를 얻을 수 있습니다.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-[24px] py-[12px] bg-[#0177fb] text-white rounded-full text-[15px] font-[700] hover:bg-[#0062d6] transition-colors"
          >
            광고성과 구매하기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="ml-[8px]">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
