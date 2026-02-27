"use client";

import { useState } from "react";

const STEP_CATEGORIES = [
  { id: "clinic", label: "병의원", icon: "🏥" },
  { id: "startup", label: "창업", icon: "🚀" },
  { id: "rental", label: "렌탈", icon: "🚗" },
  { id: "law", label: "법률", icon: "⚖️" },
  { id: "insurance", label: "보험", icon: "🛡️" },
  { id: "telecom", label: "통신", icon: "📡" },
  { id: "b2b", label: "B2B", icon: "🏢" },
  { id: "recruit", label: "채용", icon: "👥" },
  { id: "distribution", label: "분양", icon: "🏠" },
] as const;

const STEP_PRODUCTS: Record<string, { id: string; name: string; unit: string }[]> = {
  clinic: [
    { id: "c1", name: "성형외과 · 눈성형", unit: "상담신청" },
    { id: "c2", name: "성형외과 · 지방흡입", unit: "상담신청" },
    { id: "c3", name: "피부과 · 눈밑지방재배치", unit: "상담신청" },
    { id: "c4", name: "치과 · 임플란트", unit: "상담신청" },
    { id: "c5", name: "한의원 · 다이어트", unit: "상담신청" },
  ],
  startup: [
    { id: "s1", name: "프랜차이즈 · F&B", unit: "가맹문의" },
    { id: "s2", name: "프랜차이즈 · 교육", unit: "가맹문의" },
    { id: "s3", name: "프랜차이즈 · 무인", unit: "가맹문의" },
  ],
  rental: [
    { id: "r1", name: "장기렌트 · 차량", unit: "견적요청" },
    { id: "r2", name: "렌탈 · 가전", unit: "견적요청" },
  ],
  law: [
    { id: "l1", name: "법률 · 민사", unit: "상담신청" },
    { id: "l2", name: "법률 · 형사", unit: "상담신청" },
  ],
  insurance: [
    { id: "i1", name: "보험 · 컨설팅", unit: "상담신청" },
    { id: "i2", name: "보험 · 생명보험", unit: "상담신청" },
  ],
  telecom: [
    { id: "t1", name: "통신 · 인터넷", unit: "상담신청" },
    { id: "t2", name: "통신 · IPTV", unit: "상담신청" },
  ],
  b2b: [
    { id: "b1", name: "B2B · 교육", unit: "상담신청" },
    { id: "b2", name: "B2B · 컨설팅", unit: "상담신청" },
  ],
  recruit: [
    { id: "rc1", name: "채용 · 보험", unit: "입사지원" },
    { id: "rc2", name: "채용 · 병의원", unit: "입사지원" },
  ],
  distribution: [
    { id: "d1", name: "분양 · 아파트", unit: "상담신청" },
  ],
};

export function BoosterStepsSection() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = selectedCategory ? STEP_PRODUCTS[selectedCategory] || [] : [];

  const goNext = () => {
    if (step < 3) setStep(step + 1);
  };
  const goPrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section className="py-[60px] lg:py-[100px] bg-white">
      <div className="max-w-[800px] mx-auto px-5">
        {/* Step Indicators */}
        <div className="flex justify-center gap-[8px] mb-[40px]">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex items-center gap-[6px] px-[14px] py-[6px] rounded-full text-[13px] font-[600] transition-all ${
                step === s
                  ? "bg-[#0177fb] text-white"
                  : step > s
                    ? "bg-[#e8f2ff] text-[#0177fb]"
                    : "bg-[#f5f7fa] text-[#868E96]"
              }`}
            >
              <span>STEP {s}</span>
              {step > s && <span>✓</span>}
            </div>
          ))}
        </div>

        {/* Step 1: Category Selection */}
        {step === 1 && (
          <div>
            <div className="text-center mb-[32px]">
              <span className="text-[14px] font-[600] text-[#0177fb] mb-[8px] block">
                STEP 1
              </span>
              <h3 className="text-[22px] lg:text-[28px] font-[800] text-[#171819]">
                어떤 업종에 있으신가요?
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-[12px] mb-[32px]">
              {STEP_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-[16px] lg:p-[20px] rounded-[12px] border text-center transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[#0177fb] border-[#0177fb] text-white"
                      : "bg-[#f5f7fa] border-[#f5f7fa] text-[#171819] hover:border-[#0177fb] hover:bg-[#f0f7ff]"
                  }`}
                >
                  <span className="text-[28px] block mb-[8px]">{cat.icon}</span>
                  <span className="text-[15px] font-[600]">{cat.label}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={goNext}
                disabled={!selectedCategory}
                className="px-[24px] py-[12px] bg-[#0177fb] text-white rounded-[10px] text-[15px] font-[700] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0062d6] transition-colors"
              >
                다음 →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Product Selection */}
        {step === 2 && (
          <div>
            <div className="text-center mb-[32px]">
              <span className="text-[14px] font-[600] text-[#0177fb] mb-[8px] block">
                STEP 2
              </span>
              <h3 className="text-[22px] lg:text-[28px] font-[800] text-[#171819]">
                어떤 상품을 판매하시나요?
              </h3>
            </div>

            <div className="space-y-[10px] mb-[32px]">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product.id)}
                  className={`w-full flex items-center justify-between p-[16px] lg:p-[20px] rounded-[12px] border text-left transition-all ${
                    selectedProduct === product.id
                      ? "bg-[#f0f7ff] border-[#0177fb]"
                      : "bg-[#f5f7fa] border-[#f5f7fa] hover:border-[#d4d4d4]"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-[#171819]">
                    {product.name}
                  </span>
                  <span className="text-[13px] font-[500] text-[#868E96] bg-white px-[10px] py-[4px] rounded-full">
                    {product.unit}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={goPrev}
                className="px-[24px] py-[12px] bg-white border border-[#e5e8eb] text-[#171819] rounded-[10px] text-[15px] font-[700] hover:bg-[#f5f7fa] transition-colors"
              >
                ← 이전
              </button>
              <button
                onClick={goNext}
                disabled={!selectedProduct}
                className="px-[24px] py-[12px] bg-[#0177fb] text-white rounded-[10px] text-[15px] font-[700] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0062d6] transition-colors"
              >
                다음 →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Price Confirmation */}
        {step === 3 && (
          <div>
            <div className="text-center mb-[32px]">
              <span className="text-[14px] font-[600] text-[#0177fb] mb-[8px] block">
                STEP 3
              </span>
              <h3 className="text-[22px] lg:text-[28px] font-[800] text-[#171819]">
                단가를 확인해보세요!
              </h3>
            </div>

            {/* Price Card */}
            <div className="bg-[#f5f7fa] rounded-[16px] p-[24px] lg:p-[32px] mb-[32px]">
              <div className="flex items-center gap-[12px] mb-[20px]">
                <span className="text-[14px] font-[600] text-[#0177fb] bg-[#e8f2ff] px-[10px] py-[4px] rounded-full">
                  {STEP_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
                </span>
                <span className="text-[16px] font-[600] text-[#171819]">
                  {products.find((p) => p.id === selectedProduct)?.name}
                </span>
              </div>

              <div className="bg-white rounded-[12px] p-[20px] lg:p-[24px]">
                <div className="flex items-center justify-between mb-[16px]">
                  <span className="text-[14px] font-[500] text-[#868E96]">
                    30일 최저가
                  </span>
                  <span className="text-[24px] lg:text-[32px] font-[800] text-[#0177fb]">
                    문의하기
                  </span>
                </div>
                <p className="text-[13px] font-[500] text-[#868E96] leading-[1.6]">
                  정확한 단가는 업종, 상품, 시기에 따라 달라질 수 있습니다.
                  <br />
                  문의하기를 통해 맞춤 견적을 받아보세요.
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={goPrev}
                className="px-[24px] py-[12px] bg-white border border-[#e5e8eb] text-[#171819] rounded-[10px] text-[15px] font-[700] hover:bg-[#f5f7fa] transition-colors"
              >
                ← 이전
              </button>
              <a
                href="#"
                className="px-[24px] py-[12px] bg-[#0177fb] text-white rounded-[10px] text-[15px] font-[700] hover:bg-[#0062d6] transition-colors inline-flex items-center"
              >
                문의하기
              </a>
            </div>
          </div>
        )}

        {/* Step 4: Static - 성과 달성 */}
        <div className="mt-[60px] lg:mt-[80px] bg-[#f5f7fa] rounded-[20px] p-[32px] lg:p-[40px]">
          <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px] items-center">
            <div className="flex-1">
              <span className="inline-block px-[12px] py-[4px] bg-[#e8f2ff] rounded-full text-[13px] font-[600] text-[#0177fb] mb-[12px]">
                Step 04
              </span>
              <h3 className="text-[20px] lg:text-[24px] font-[800] text-[#171819] mb-[12px]">
                성과 달성
              </h3>
              <p className="text-[14px] lg:text-[16px] font-[500] text-[#454F5D] leading-[1.6]">
                기다리기만 하면 성과가 달성됩니다.
                <br />
                성과 달성 현황은 솔루션에서 실시간으로 확인할 수 있어요.
                <br />
                충전금이 소진되면 광고 리포트를 전달하고, 피드백을 반영해 다음 차시 광고에 개선점을 적용합니다.
              </p>
            </div>
            <div className="w-full lg:w-[280px] h-[180px] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-[16px] flex items-center justify-center shrink-0">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0177fb" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
