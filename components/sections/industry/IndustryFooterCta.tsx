export function IndustryFooterCta() {
  return (
    <section className="py-[80px] lg:py-[100px] bg-[#f5f7fa]">
      <div className="max-w-[1080px] mx-auto px-5 text-center">
        <h2 className="text-[24px] lg:text-[36px] font-[800] text-[#171819] mb-[32px] lg:mb-[40px] leading-[1.3]">
          위픽부스터, 이렇게 시작하세요!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] lg:gap-[20px] max-w-[900px] mx-auto">
          {/* Card 1: 광고성과 구매 */}
          <a
            href="/ads"
            className="group bg-white rounded-[20px] p-[28px] lg:p-[32px] text-left border border-[#f1f2f3] hover:border-[#0177fb] hover:shadow-[0_4px_16px_rgba(1,119,251,0.12)] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-[12px]">
              <span className="text-[18px] lg:text-[20px] font-[700] text-[#171819] group-hover:text-[#0177fb] transition-colors">
                광고성과 구매
              </span>
              <span className="text-[20px] text-[#868E96] group-hover:text-[#0177fb] group-hover:translate-x-[4px] transition-all">
                →
              </span>
            </div>
            <p className="text-[14px] lg:text-[15px] font-[500] text-[#868E96] leading-[1.6]">
              더 많은 고객을 만나고 싶다면,
              <br />
              지금 바로 성과를 구매하세요.
            </p>
          </a>

          {/* Card 2: 광고성과 관리 */}
          <a
            href="/sol-main"
            className="group bg-white rounded-[20px] p-[28px] lg:p-[32px] text-left border border-[#f1f2f3] hover:border-[#0177fb] hover:shadow-[0_4px_16px_rgba(1,119,251,0.12)] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-[12px]">
              <span className="text-[18px] lg:text-[20px] font-[700] text-[#171819] group-hover:text-[#0177fb] transition-colors">
                광고성과 관리
              </span>
              <span className="text-[20px] text-[#868E96] group-hover:text-[#0177fb] group-hover:translate-x-[4px] transition-all">
                →
              </span>
            </div>
            <p className="text-[14px] lg:text-[15px] font-[500] text-[#868E96] leading-[1.6]">
              성과를 매출로 이어가려면,
              <br />
              집요한 관리로 기회를 놓치지 마세요.
            </p>
          </a>

          {/* Card 3: 마케팅 스킬 */}
          <a
            href="/mk-skill-kit"
            className="group bg-white rounded-[20px] p-[28px] lg:p-[32px] text-left border border-[#f1f2f3] hover:border-[#0177fb] hover:shadow-[0_4px_16px_rgba(1,119,251,0.12)] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-[12px]">
              <span className="text-[18px] lg:text-[20px] font-[700] text-[#171819] group-hover:text-[#0177fb] transition-colors">
                마케팅 스킬
              </span>
              <span className="text-[20px] text-[#868E96] group-hover:text-[#0177fb] group-hover:translate-x-[4px] transition-all">
                →
              </span>
            </div>
            <p className="text-[14px] lg:text-[15px] font-[500] text-[#868E96] leading-[1.6]">
              지금의 성과에 만족하지 않는다면,
              <br />
              내일의 더 큰 성장을 준비하세요.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
