export function HeeSection() {
  return (
    <section className="py-[80px] lg:py-[100px] bg-white">
      <div className="max-w-[1080px] mx-auto px-5 text-center">
        <h2 className="text-[24px] lg:text-[36px] font-[800] text-[#171819] mb-[16px] leading-[1.3]">
          성과가 없다면, 비용도 없습니다
        </h2>
        <p className="text-[15px] lg:text-[18px] font-[500] text-[#454F5D] leading-[1.6] max-w-[600px] mx-auto mb-[40px]">
          광고비와 성과는 비례하지 않습니다.
          <br />
          이제 위픽부스터에서 &lsquo;성과&rsquo; 비용만 지불하세요.
        </p>

        {/* Desktop */}
        <img
          src="https://cdn.imweb.me/thumbnail/20250903/aa00d4cc8d8ac.png"
          alt="성과가 없다면 비용도 없습니다"
          className="hidden lg:block w-full max-w-[900px] mx-auto rounded-[16px]"
        />
        {/* Mobile */}
        <img
          src="https://cdn.imweb.me/thumbnail/20251114/d862b39e6e633.png"
          alt="성과가 없다면 비용도 없습니다"
          className="lg:hidden w-full rounded-[16px]"
        />
      </div>
    </section>
  );
}
