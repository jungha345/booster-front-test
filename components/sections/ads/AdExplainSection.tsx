export function AdExplainSection() {
  return (
    <section className="py-[80px] lg:py-[100px] bg-white">
      <div className="max-w-[1080px] mx-auto px-5 text-center">
        {/* Header */}
        <h2 className="text-[24px] lg:text-[36px] font-[800] text-[#171819] mb-[16px] leading-[1.3]">
          광고성과란 무엇인가요?
        </h2>
        <p className="text-[15px] lg:text-[18px] font-[500] text-[#454F5D] leading-[1.6] max-w-[700px] mx-auto mb-[40px]">
          광고성과는 노출, 클릭, 회원가입, 상담신청, 예약, 방문, 결제 등
          <br className="hidden lg:block" />
          광고를 통해 얻고자 하는 고객의 실제 행동 지표를 의미합니다.
        </p>

        {/* Infographic Images */}
        {/* Desktop */}
        <img
          src="https://cdn.imweb.me/thumbnail/20250905/68ca5a001039a.png"
          alt="광고성과란?"
          className="hidden lg:block w-full max-w-[900px] mx-auto rounded-[16px]"
        />
        {/* Mobile */}
        <img
          src="https://cdn.imweb.me/thumbnail/20250902/75ea0b9482376.png"
          alt="광고성과란?"
          className="lg:hidden w-full rounded-[16px]"
        />
      </div>
    </section>
  );
}
