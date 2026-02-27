export function PartnerSection() {
  return (
    <section className="py-[80px] lg:py-[100px] bg-[#f5f7fa]">
      <div className="max-w-[1080px] mx-auto px-5 text-center">
        <h2 className="text-[22px] lg:text-[36px] font-[800] text-[#171819] leading-[1.4] mb-[40px] lg:mb-[60px]">
          스타트업부터 대기업까지,
          <br className="lg:hidden" />
          <span className="hidden lg:inline"> </span>
          500+ 기업이 광고성과를 구매하고 있습니다
        </h2>

        {/* Desktop */}
        <img
          src="https://cdn.imweb.me/thumbnail/20250922/a7a9691515329.png"
          alt="파트너 기업"
          className="hidden lg:block w-full max-w-[900px] mx-auto"
        />
        {/* Mobile */}
        <img
          src="https://cdn.imweb.me/thumbnail/20250922/da1cb89f1fb66.png"
          alt="파트너 기업"
          className="lg:hidden w-full"
        />
      </div>
    </section>
  );
}
