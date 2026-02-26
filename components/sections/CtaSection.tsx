import { CTA_INDUSTRIES } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="bg-bg-dark py-16 lg:py-24">
      <div className="max-w-[1080px] mx-auto px-5 text-center">
        {/* Heading */}
        <h2 className="text-xl lg:text-[36px] lg:leading-[1.3] font-bold text-white mb-4 lg:mb-6">
          <span className="text-primary">[</span>
          <span className="text-primary"> 성과 </span>
          <span className="text-primary">]</span>를 만드는 마케팅,
          <br />그 시작은{" "}
          <span className="text-primary">[</span>
          <span className="text-primary"> 확실함 </span>
          <span className="text-primary">]</span>입니다
        </h2>
        <p className="text-sm lg:text-base text-white/50 mb-10 lg:mb-14 max-w-[500px] mx-auto">
          지금 바로 업종을 선택하고, 확실한 성과를 경험해 보세요.
        </p>

        {/* Industry Pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-[700px] mx-auto">
          {CTA_INDUSTRIES.map((industry) => (
            <a
              key={industry.label}
              href="#"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                industry.highlighted
                  ? "bg-primary text-white hover:bg-primary-hover"
                  : "bg-transparent border border-white/[0.16] text-white/80 hover:bg-white/10 hover:border-white/30"
              }`}
            >
              {industry.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M5 3l4 4-4 4" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
