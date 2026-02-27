import type { CaseStudyCard } from "@/lib/industries";

export function IndustryCaseStudySection({
  caseStudies,
}: {
  caseStudies: CaseStudyCard[];
}) {
  return (
    <section className="py-[60px] lg:py-[80px] bg-white">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Header */}
        <div className="flex items-end justify-between mb-[32px] lg:mb-[40px]">
          <h2 className="text-[22px] lg:text-[32px] font-[800] text-[#171819] leading-[1.3]">
            500+ 기업이 선택한 이유,
            <br />
            성과로 증명합니다.
          </h2>
          <a
            href="/case-study"
            className="hidden lg:inline-flex items-center text-[15px] font-[600] text-[#0177fb] hover:underline"
          >
            더 보러가기
            <span className="ml-[4px]">→</span>
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {caseStudies.map((card, idx) => (
            <article
              key={idx}
              className="bg-white rounded-[16px] border border-[#f1f2f3] overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              {/* Hero image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={card.image}
                  alt={`성공사례 ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metrics */}
              <div className="p-[16px] lg:p-[20px] flex flex-col gap-[12px]">
                {card.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-[20px] lg:text-[22px] font-[800] text-[#171819]">
                      {metric.value}
                    </p>
                    <p className="text-[12px] lg:text-[13px] font-[500] text-[#868E96] flex items-center gap-[2px]">
                      <span className="opacity-60">↗</span>
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Mobile "더 보러가기" */}
        <a
          href="/case-study"
          className="lg:hidden flex items-center justify-center mt-[24px] text-[15px] font-[600] text-[#0177fb]"
        >
          더 보러가기
          <span className="ml-[4px]">→</span>
        </a>
      </div>
    </section>
  );
}
