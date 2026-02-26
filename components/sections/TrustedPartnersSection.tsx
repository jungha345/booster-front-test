const PARTNER_LOGOS = Array.from({ length: 10 }, (_, i) => ({
  id: `partner-${i + 1}`,
  name: `파트너 ${i + 1}`,
}));

const STATS = [
  {
    value: "1,281",
    unit: "건",
    label: "일 평균 광고 성과 판매",
    description: "매일 1,281건의 광고 성과가 판매되고 있습니다",
  },
  {
    value: "82",
    unit: "%",
    label: "재구매율",
    description: "고객 10명 중 8명이 다시 찾는 서비스",
  },
  {
    value: "502",
    unit: "",
    label: "경험 기업 수",
    description: "502개 기업이 위픽부스터를 경험했습니다",
  },
] as const;

function LogoRow({
  direction,
  speed,
}: {
  direction: "left" | "right";
  speed: number;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-[16px] w-max"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, i) => (
          <div
            key={`${logo.id}-${i}`}
            className="flex-shrink-0 w-[120px] lg:w-[150px] h-[48px] lg:h-[56px] bg-white rounded-[8px] border border-[#f1f2f3] flex items-center justify-center"
          >
            <span className="text-[12px] text-[#b0b8c1] font-[500]">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrustedPartnersSection() {
  return (
    <section className="bg-[#fbfbfc] py-[80px] lg:py-[120px] overflow-hidden">
      {/* Heading */}
      <div className="max-w-[1080px] mx-auto px-5 mb-[60px] lg:mb-[80px]">
        <h2 className="text-[22px] lg:text-[36px] font-bold text-[#171819] text-center leading-[1.4]">
          <span className="text-[#0177fb]">[ 500여개 이상의 기업 ]</span>과
          <br className="lg:hidden" />
          <span className="hidden lg:inline"> </span>
          위픽부스터는 증명해왔습니다
        </h2>
      </div>

      {/* Logo Slider - 4 rows */}
      <div className="space-y-[12px] lg:space-y-[16px] mb-[60px] lg:mb-[80px]">
        <LogoRow direction="left" speed={35} />
        <LogoRow direction="right" speed={40} />
        <LogoRow direction="left" speed={30} />
        <LogoRow direction="right" speed={38} />
      </div>

      {/* Stats */}
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] lg:gap-[20px]">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-[16px] p-[32px] lg:p-[40px] text-center border border-[#f1f2f3]"
            >
              <div className="w-[56px] h-[56px] mx-auto mb-[16px] bg-[rgba(1,119,251,0.05)] rounded-[16px] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0177fb" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="mb-[8px]">
                <span className="text-[32px] lg:text-[40px] font-[800] text-[#171819]">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-[20px] lg:text-[24px] font-bold text-[#0177fb] ml-[4px]">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="text-[15px] font-semibold text-[#171819] mb-[4px]">
                {stat.label}
              </p>
              <p className="text-[13px] text-[#868e96] font-[500]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
