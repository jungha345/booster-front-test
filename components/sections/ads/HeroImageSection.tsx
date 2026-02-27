export function HeroImageSection() {
  return (
    <section className="py-[80px] lg:py-[100px] bg-white">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Desktop */}
        <img
          src="https://cdn.imweb.me/thumbnail/20250903/558f248b98727.png"
          alt="위픽부스터 광고성과"
          className="hidden lg:block w-full rounded-[16px]"
        />
        {/* Mobile */}
        <img
          src="https://cdn.imweb.me/thumbnail/20251114/004d8fd96536f.png"
          alt="위픽부스터 광고성과"
          className="lg:hidden w-full rounded-[16px]"
        />
      </div>
    </section>
  );
}
