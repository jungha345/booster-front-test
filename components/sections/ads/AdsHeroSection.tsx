export function AdsHeroSection() {
  return (
    <section className="pt-[72px] lg:pt-[72px]">
      <div className="max-w-[1080px] mx-auto px-5 py-[32px] lg:py-[60px]">
        <div
          className="rounded-[24px] px-[20px] py-[40px] lg:px-[32px] lg:py-[60px] text-center relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn.imweb.me/thumbnail/20251110/51dcf60605ed8.png)",
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-[#f5f7fa]/80 rounded-[24px]" />

          <div className="relative z-10">
            {/* Badge */}
            <p className="inline-block px-[12px] py-[6px] bg-[#f5f7f8] border border-[rgba(69,79,93,0.10)] rounded-[6px] text-[16px] lg:text-[18px] font-[600] text-[#454F5D] mb-[30px]">
              광고성과 구매
            </p>

            {/* Title */}
            <h1 className="text-[28px] lg:text-[44px] font-[800] text-[#171819] mb-[20px] leading-[1.3]">
              과정이 아닌 성과로
            </h1>

            {/* Subtitle */}
            <h3 className="text-[16px] lg:text-[18px] font-[500] text-[#454F5D] leading-[1.4]">
              우리 업종에 필요한 성과만 구매하세요.
              <br />
              성과가 발생할 때만 광고비를 지불하면 됩니다.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
