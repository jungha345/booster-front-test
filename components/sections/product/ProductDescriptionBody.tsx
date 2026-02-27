import type { ProductData } from "@/lib/products";

function formatPrice(price: number) {
  return price.toLocaleString("ko-KR") + "원";
}

export function ProductDescriptionBody({
  product,
}: {
  product: ProductData;
}) {
  return (
    <section id="product-detail-body" className="pb-[60px] lg:pb-[80px]">
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="max-w-[800px] mx-auto">
          {/* Pain Points */}
          <div className="mb-[48px]">
            <h3 className="text-[18px] lg:text-[22px] font-[700] text-[#171819] mb-[8px]">
              {product.name} 창업 광고, 이런 고민 반복하고 계신가요?
            </h3>
            <div className="flex flex-col gap-[12px] mt-[20px]">
              {product.painPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-[10px] text-[14px] lg:text-[15px] text-[#454F5D] leading-[1.6]"
                >
                  <span className="shrink-0 text-[16px]">❌</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transition message */}
          <div className="text-center mb-[48px]">
            <p className="text-[15px] lg:text-[17px] text-[#868E96] mb-[8px]">
              ↓
            </p>
            <p className="text-[15px] lg:text-[17px] text-[#454F5D] leading-[1.7]">
              광고 파트너를 바꾼다고 성과가 달라지진 않습니다.
              <br />
              <strong className="text-[#171819]">
                운영 방식 자체를 바꿔야 성과가 달라집니다.
              </strong>
            </p>
          </div>

          {/* Booster solution intro */}
          <div className="bg-[#f5f7fa] rounded-[16px] p-[24px] lg:p-[32px] mb-[48px]">
            <h3 className="text-[18px] lg:text-[22px] font-[700] text-[#0177fb] mb-[12px]">
              위픽부스터 광고성과로 해결해 보세요
            </h3>
            <p className="text-[14px] lg:text-[15px] text-[#454F5D] leading-[1.7]">
              {product.name} 창업에 관심이 있는 고객을 노출부터 계약까지
              단계별로 확보할 수 있어요.
              <br />
              필요한 만큼만 선택해서, 성과가 발생했을 때만 비용을 지불하시면
              돼요.
            </p>
          </div>

          {/* Performance funnel */}
          <div className="mb-[48px]">
            <h3 className="text-[18px] lg:text-[22px] font-[700] text-[#171819] mb-[20px]">
              구매 가능 성과
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-[6px] lg:gap-[8px] mb-[32px]">
              {product.funnelSteps.map((step, i) => (
                <div key={step} className="flex items-center">
                  <span className="px-[12px] lg:px-[16px] py-[8px] bg-[#0177fb] text-white rounded-[8px] text-[13px] lg:text-[14px] font-[600]">
                    {step}
                  </span>
                  {i < product.funnelSteps.length - 1 && (
                    <span className="mx-[2px] text-[#d3d3d3] text-[14px]">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Step details */}
            <div className="flex flex-col gap-[20px]">
              {product.performanceSteps.map((step) => (
                <div
                  key={step.name}
                  className="border border-[#e7edf3] rounded-[12px] p-[20px] lg:p-[24px]"
                >
                  <h4 className="text-[16px] lg:text-[18px] font-[700] text-[#171819] mb-[8px]">
                    {step.name}
                  </h4>
                  <p className="text-[14px] text-[#454F5D] leading-[1.7] mb-[12px]">
                    {step.description}
                  </p>
                  <div>
                    <p className="text-[13px] font-[600] text-[#0177fb] mb-[6px]">
                      추천 고객
                    </p>
                    <ul className="flex flex-col gap-[4px]">
                      {step.recommendedFor.map((rec, i) => (
                        <li
                          key={i}
                          className="text-[13px] text-[#868E96] leading-[1.6] pl-[12px] relative before:content-['·'] before:absolute before:left-0"
                        >
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA mid-section */}
          <div className="text-center mb-[48px]">
            <p className="text-[15px] lg:text-[17px] text-[#454F5D] mb-[16px]">
              아직 잘 모르시겠다면, 위픽부스터에게 직접 물어보세요!
            </p>
            <a
              href="#"
              className="inline-flex items-center px-[24px] py-[12px] bg-[#0177fb] text-white rounded-full text-[14px] font-[700] hover:bg-[#0062d6] transition-colors"
            >
              🤖 지금 상담 요청하기 →
            </a>
          </div>

          {/* Case Studies */}
          <div className="mb-[48px]">
            <h3 className="text-[18px] lg:text-[22px] font-[700] text-[#171819] mb-[8px]">
              위픽부스터를 경험한 진짜 후기를 들려드려요.
            </h3>
            <p className="text-[14px] text-[#868E96] mb-[20px]">
              실제 광고 진행 사례를 통해 성과를 확인해 보세요.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
              {product.caseStudies.map((cs) => (
                <div
                  key={cs.brand}
                  className="border border-[#e7edf3] rounded-[16px] p-[20px] lg:p-[24px]"
                >
                  <div className="text-[28px] mb-[8px]">{cs.emoji}</div>
                  <h4 className="text-[16px] font-[700] text-[#171819] mb-[4px]">
                    {cs.brand}
                  </h4>
                  <p className="text-[13px] text-[#868E96] mb-[16px]">
                    {cs.label}
                  </p>
                  <div className="flex flex-col gap-[6px] text-[13px] text-[#454F5D]">
                    <div className="flex justify-between">
                      <span>기간</span>
                      <span className="font-[600]">{cs.period}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>광고비</span>
                      <span className="font-[600]">{cs.adSpend}</span>
                    </div>
                    <div className="flex justify-between border-t border-[#f1f2f3] pt-[8px] mt-[4px]">
                      <span className="font-[600] text-[#0177fb]">성과</span>
                      <span className="font-[700] text-[#0177fb]">
                        {cs.result}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#868E96] mt-[12px]">
              *더 많은 진행 사례는 미팅 시 공개해드리고 있어요.
            </p>
          </div>

          {/* Key Statistic */}
          <div className="bg-[#0177fb] rounded-[16px] p-[28px] lg:p-[36px] text-center text-white mb-[48px]">
            <p className="text-[14px] lg:text-[16px] font-[500] opacity-80 mb-[8px]">
              위픽부스터에서 {product.name} 창업문의가 발생하는 시간은
            </p>
            <p className="text-[36px] lg:text-[48px] font-[800] mb-[12px]">
              {product.keyStatistic.highlight}
            </p>
            <p className="text-[14px] lg:text-[16px] font-[500] opacity-90 leading-[1.6]">
              {product.keyStatistic.description}
            </p>
          </div>

          {/* Targeting */}
          <div className="mb-[48px]">
            <h3 className="text-[18px] lg:text-[22px] font-[700] text-[#171819] mb-[16px]">
              타겟팅도 자유롭게 선택하세요
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[12px] mb-[8px]">
              <div className="bg-[#f5f7fa] rounded-[12px] p-[16px]">
                <p className="text-[13px] font-[600] text-[#0177fb] mb-[4px]">
                  기본
                </p>
                <p className="text-[14px] text-[#171819]">
                  {product.targeting.basic}
                </p>
              </div>
              <div className="bg-[#f5f7fa] rounded-[12px] p-[16px]">
                <p className="text-[13px] font-[600] text-[#0177fb] mb-[4px]">
                  지역
                </p>
                <p className="text-[14px] text-[#171819]">
                  {product.targeting.region}
                </p>
              </div>
              <div className="bg-[#f5f7fa] rounded-[12px] p-[16px]">
                <p className="text-[13px] font-[600] text-[#0177fb] mb-[4px]">
                  상세 타겟팅
                </p>
                <p className="text-[14px] text-[#171819]">
                  {product.targeting.detail}
                </p>
              </div>
            </div>
            <p className="text-[12px] text-[#868E96]">
              {product.targeting.note}
            </p>
          </div>

          {/* A/S Policy */}
          <div className="mb-[48px]">
            <h3 className="text-[18px] lg:text-[22px] font-[700] text-[#171819] mb-[16px]">
              A/S 정책으로 불량 DB 걱정을 줄여 보세요
            </h3>
            <p className="text-[14px] text-[#454F5D] mb-[16px]">
              성과 구매 시 옵션을 선택할 수 있어요.
            </p>
            <div className="flex flex-wrap gap-[8px]">
              {product.asPolicy.map((policy) => (
                <span
                  key={policy}
                  className="px-[14px] py-[8px] bg-[#f5f7fa] rounded-[8px] text-[13px] font-[600] text-[#454F5D]"
                >
                  {policy}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-[48px]">
            <div className="flex flex-col gap-[16px]">
              {product.features.map((feat) => (
                <div
                  key={feat.title}
                  className="border border-[#e7edf3] rounded-[16px] p-[24px]"
                >
                  <h4 className="text-[16px] lg:text-[18px] font-[700] text-[#171819] mb-[8px]">
                    {feat.title}
                  </h4>
                  <p className="text-[14px] text-[#454F5D] leading-[1.7]">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-[48px]">
            <h3 className="text-[18px] lg:text-[22px] font-[700] text-[#171819] mb-[16px]">
              대행사도, 인하우스도 답답하셨죠?
            </h3>
            <p className="text-[14px] text-[#454F5D] mb-[20px]">
              이제 광고비 1원까지 슬기롭게 사용해 보세요.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-[13px] lg:text-[14px]">
                <thead>
                  <tr className="border-b-2 border-[#171819]">
                    <th className="py-[12px] px-[8px] text-left font-[700] text-[#171819]">
                      기능
                    </th>
                    <th className="py-[12px] px-[8px] text-center font-[600] text-[#868E96]">
                      광고대행사
                    </th>
                    <th className="py-[12px] px-[8px] text-center font-[600] text-[#868E96]">
                      인하우스
                    </th>
                    <th className="py-[12px] px-[8px] text-center font-[700] text-[#0177fb]">
                      위픽부스터
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.comparisonTable.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-[#f1f2f3]"
                    >
                      <td className="py-[12px] px-[8px] font-[600] text-[#171819]">
                        {row.feature}
                      </td>
                      <td className="py-[12px] px-[8px] text-center text-[#868E96]">
                        {row.agency}
                      </td>
                      <td className="py-[12px] px-[8px] text-center text-[#868E96]">
                        {row.inhouse}
                      </td>
                      <td className="py-[12px] px-[8px] text-center font-[700] text-[#0177fb]">
                        {row.booster}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <h3 className="text-[18px] lg:text-[22px] font-[700] text-[#171819] mb-[8px]">
              {product.name} 창업 광고, 이제 클릭 한 번이면 충분해요.
            </h3>
            <p className="text-[14px] text-[#454F5D] mb-[20px] leading-[1.7]">
              노출부터 계약까지, 원하는 성과와 수량을 선택해 보세요.
              <br />
              성과가 발생했을 때만 비용이 차감돼요.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-[32px] py-[14px] bg-[#0177fb] text-white rounded-full text-[16px] font-[700] hover:bg-[#0062d6] transition-colors"
            >
              성과 구매하기
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="ml-[8px]"
              >
                <path d="M6 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
