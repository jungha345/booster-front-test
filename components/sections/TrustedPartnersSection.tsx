import { PARTNER_LOGOS, STATS } from "@/lib/constants";

function LogoRow({
  direction,
  speed,
}: {
  direction: "left" | "right";
  speed: number;
}) {
  const logos = PARTNER_LOGOS.slice(0, 10);
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-6 w-max"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {/* Duplicate for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.id}-${i}`}
            className="flex-shrink-0 w-[120px] lg:w-[150px] h-[48px] lg:h-[56px] bg-white rounded-lg border border-border flex items-center justify-center"
          >
            <span className="text-xs text-text-light font-medium">
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
    <section className="bg-[#fbfbfc] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-5 mb-10 lg:mb-14">
        <h2 className="text-xl lg:text-[36px] lg:leading-[1.3] font-bold text-text-dark text-center">
          <span className="text-primary">[</span>
          <span className="text-primary"> 500여개 이상의 기업 </span>
          <span className="text-primary">]</span>과
          <br className="lg:hidden" />
          <span className="hidden lg:inline"> </span>
          위픽부스터는 증명해왔습니다
        </h2>
      </div>

      {/* Logo Slider - 4 rows */}
      <div className="space-y-4 lg:space-y-5 mb-14 lg:mb-20">
        <LogoRow direction="left" speed={35} />
        <LogoRow direction="right" speed={40} />
        <LogoRow direction="left" speed={30} />
        <LogoRow direction="right" speed={38} />
      </div>

      {/* Stats */}
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 lg:p-8 text-center border border-border"
            >
              {/* Icon placeholder */}
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/5 rounded-2xl flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0177fb"
                  strokeWidth="1.5"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="mb-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-text-dark">
                  {stat.value}
                </span>
                <span className="text-xl lg:text-2xl font-bold text-primary ml-1">
                  {stat.unit}
                </span>
              </div>
              <p className="text-sm font-semibold text-text-dark mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-text-medium">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
