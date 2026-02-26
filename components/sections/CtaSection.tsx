const CTA_INDUSTRIES = [
  { label: "병원", highlighted: false },
  { label: "보험", highlighted: false },
  { label: "분양", highlighted: false },
  { label: "창업", highlighted: false },
  { label: "통신", highlighted: false },
  { label: "주식", highlighted: false },
  { label: "렌탈", highlighted: false },
  { label: "B2B", highlighted: false },
  { label: "코인", highlighted: false },
  { label: "법률", highlighted: false },
  { label: "채용", highlighted: false },
  { label: "기타업종 상담문의", highlighted: true },
] as const;

export function CtaSection() {
  return (
    <section className="bg-[#1a1f27] py-[80px] lg:py-[120px]">
      <div className="max-w-[1080px] mx-auto px-5 text-center">
        {/* Heading */}
        <h2 className="text-[22px] lg:text-[36px] font-bold text-white leading-[1.4] mb-[16px] lg:mb-[24px]">
          <span className="text-[#0177fb]">[ 성과 ]</span>를 만드는 마케팅,
          <br />그 시작은{" "}
          <span className="text-[#0177fb]">[ 확실함 ]</span>입니다
        </h2>
        <p className="text-[14px] lg:text-[16px] text-white/50 font-[500] mb-[40px] lg:mb-[60px] max-w-[500px] mx-auto leading-[1.6]">
          지금 바로 업종을 선택하고, 확실한 성과를 경험해 보세요.
        </p>

        {/* Industry Pills - original: border-radius 12px, height 50px, font-size 20px */}
        <div className="flex flex-wrap justify-center gap-[12px] max-w-[700px] mx-auto">
          {CTA_INDUSTRIES.map((industry) => (
            <a
              key={industry.label}
              href="#"
              className={`inline-flex items-center gap-[8px] rounded-[12px] text-[16px] lg:text-[20px] font-[500] transition-all ${
                industry.highlighted
                  ? "bg-[#0177fb] text-white hover:bg-[#0062d6] px-[24px] lg:px-[28px] h-[50px] lg:h-[58px]"
                  : "bg-transparent border border-[rgba(255,255,255,0.16)] text-white/80 hover:bg-[rgba(255,255,255,0.07)] hover:border-white/30 px-[20px] lg:px-[24px] h-[44px] lg:h-[50px]"
              }`}
            >
              {industry.label}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M5 3l4 4-4 4" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
