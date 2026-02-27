export function HeeSection() {
  return (
    <section className="py-[60px] lg:py-[100px] bg-white">
      <div className="max-w-[1080px] mx-auto px-5 text-center">
        {/* Title */}
        <h2 className="text-[24px] lg:text-[36px] font-[800] text-[#171819] mb-[16px] leading-[1.3]">
          성과가 없다면, 비용도 없습니다
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] lg:text-[18px] font-[500] text-[#454F5D] leading-[1.6] max-w-[600px] mx-auto mb-[40px] lg:mb-[60px]">
          광고비와 성과는 비례하지 않습니다.
          <br />
          이제 위픽부스터에서 &lsquo;성과&rsquo; 비용만 지불하세요.
        </p>

        {/* Infographic Placeholder */}
        <div className="max-w-[800px] mx-auto">
          <div className="bg-[#f5f7fa] rounded-[24px] p-[40px] lg:p-[60px]">
            {/* Comparison: Before vs After */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
              {/* Before */}
              <div className="bg-white rounded-[16px] p-[24px] lg:p-[32px] border border-[#f1f2f3]">
                <div className="w-[48px] h-[48px] rounded-full bg-[#fee2e2] flex items-center justify-center mx-auto mb-[16px]">
                  <span className="text-[24px]">😰</span>
                </div>
                <p className="text-[16px] lg:text-[18px] font-[700] text-[#171819] mb-[8px]">
                  기존 광고
                </p>
                <p className="text-[14px] font-[500] text-[#868E96] leading-[1.6]">
                  광고비를 소진해도
                  <br />
                  성과가 보장되지 않습니다
                </p>
                <div className="mt-[16px] py-[8px] px-[16px] bg-[#fee2e2] rounded-[8px] inline-block">
                  <span className="text-[14px] font-[600] text-[#dc2626]">비용 발생 = 성과 불확실</span>
                </div>
              </div>

              {/* After */}
              <div className="bg-white rounded-[16px] p-[24px] lg:p-[32px] border border-[#0177fb]">
                <div className="w-[48px] h-[48px] rounded-full bg-[#e8f2ff] flex items-center justify-center mx-auto mb-[16px]">
                  <span className="text-[24px]">🎯</span>
                </div>
                <p className="text-[16px] lg:text-[18px] font-[700] text-[#171819] mb-[8px]">
                  위픽부스터
                </p>
                <p className="text-[14px] font-[500] text-[#868E96] leading-[1.6]">
                  성과가 발생할 때만
                  <br />
                  비용이 청구됩니다
                </p>
                <div className="mt-[16px] py-[8px] px-[16px] bg-[#e8f2ff] rounded-[8px] inline-block">
                  <span className="text-[14px] font-[600] text-[#0177fb]">성과 발생 = 비용 지불</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
