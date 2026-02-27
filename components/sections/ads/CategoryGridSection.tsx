const CATEGORIES = [
  {
    name: "병의원",
    href: "/ads/clinic",
    icon: "🏥",
    pills: [
      ["노출", "클릭", "상담신청", "전화상담 예약"],
      ["방문예약", "방문", "시·수술"],
    ],
  },
  {
    name: "창업",
    href: "/ads/startup",
    icon: "🚀",
    pills: [
      ["노출", "클릭", "가맹문의", "전화상담 예약"],
      ["미팅예약", "미팅완료", "가맹 계약"],
    ],
  },
  {
    name: "렌탈",
    href: "/ads/rental",
    icon: "🚗",
    pills: [
      ["노출", "클릭", "견적요청", "전화상담 예약"],
      ["방문", "계약"],
    ],
  },
  {
    name: "법률",
    href: "/ads/law",
    icon: "⚖️",
    pills: [
      ["노출", "클릭", "상담신청", "전화상담 예약"],
      ["미팅예약", "미팅완료", "수임"],
    ],
  },
  {
    name: "보험",
    href: "/ads/insurance",
    icon: "🛡️",
    pills: [
      ["노출", "클릭", "상담신청", "전화상담 예약"],
      ["미팅예약", "미팅완료", "계약"],
    ],
  },
  {
    name: "통신",
    href: "/ads/telecom",
    icon: "📡",
    pills: [
      ["노출", "클릭", "상담신청", "전화상담 예약"],
      ["계약"],
    ],
  },
  {
    name: "B2B",
    href: "/ads/b2b",
    icon: "🏢",
    pills: [
      ["노출", "클릭", "상담신청", "전화상담 예약"],
      ["방문예약", "방문", "계약"],
    ],
  },
  {
    name: "채용",
    href: "/ads/recruit",
    icon: "👥",
    pills: [
      ["노출", "클릭", "입사지원", "면접"],
      ["채용완료"],
    ],
  },
  {
    name: "분양",
    href: "/ads/distribution",
    icon: "🏠",
    pills: [
      ["노출", "클릭", "상담신청", "전화상담 예약"],
      ["모델하우스 예약", "모델하우스 방문", "계약"],
    ],
  },
] as const;

export function CategoryGridSection() {
  return (
    <section className="pb-[64px]">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Section Title */}
        <h2 className="text-[24px] font-[800] text-[#171819] mb-[18px]">
          업종별 광고성과
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group relative bg-[#f5f7fa] border border-[#f5f7fa] rounded-[16px] p-[24px] pb-[20px] transition-all duration-300 hover:bg-[#0177fb] hover:border-[#0177fb] hover:-translate-y-[3px] hover:shadow-[0_4px_12px_0_rgba(6,17,29,0.12)]"
            >
              {/* Header: title + icon */}
              <div className="flex justify-between items-start mb-[8px]">
                <div className="flex items-center">
                  <span className="text-[22px] font-[700] text-[#252D32] group-hover:text-white transition-colors duration-300">
                    {cat.name}
                  </span>
                  <span className="ml-[6px] text-[26px] font-[500] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ↗
                  </span>
                </div>
                <div className="w-[60px] h-[58px] rounded-[12px] flex items-center justify-center text-[32px] shrink-0">
                  {cat.icon}
                </div>
              </div>

              {/* Tags/Pills */}
              <div className="flex flex-col gap-[2px]">
                {cat.pills.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex flex-wrap">
                    {row.map((pill, pillIdx) => (
                      <span
                        key={pill}
                        className="text-[14px] font-[600] text-[#868E96] tracking-[0.01em] group-hover:text-white/70 transition-colors duration-300"
                      >
                        {pill}
                        {pillIdx < row.length - 1 && (
                          <span className="mx-[2px]">|</span>
                        )}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
