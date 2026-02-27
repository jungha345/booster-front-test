import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingElements } from "@/components/layout/FloatingElements";
import { AdsHeroSection } from "@/components/sections/ads/AdsHeroSection";
import { CategoryGridSection } from "@/components/sections/ads/CategoryGridSection";
import { AdExplainSection } from "@/components/sections/ads/AdExplainSection";
import { HeeSection } from "@/components/sections/ads/HeeSection";
import { BoostrollSection } from "@/components/sections/ads/BoostrollSection";
import { HeroImageSection } from "@/components/sections/ads/HeroImageSection";
import { WbpFlowSection } from "@/components/sections/ads/WbpFlowSection";
import { WhatPerformanceSection } from "@/components/sections/ads/WhatPerformanceSection";
import { PartnerSection } from "@/components/sections/ads/PartnerSection";
import { GoalXSection } from "@/components/sections/ads/GoalXSection";
import { CommonFooterCta } from "@/components/sections/ads/CommonFooterCta";

export const metadata: Metadata = {
  title: "광고성과 구매｜위픽부스터",
  description:
    "광고비를 가장 확실하게 쓰는 방법, '성과'를 구매하세요. 성과 기반 과금과 구조화된 전략으로 매출까지 연결되는 광고, 위픽부스터에서 경험해보세요.",
};

export default function AdsPage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero Banner */}
        <AdsHeroSection />
        {/* 2. Category Cards Grid (9 cards) */}
        <CategoryGridSection />
        {/* 3. "광고성과란 무엇인가요?" */}
        <AdExplainSection />
        {/* 4. "성과가 없다면, 비용도 없습니다" */}
        <HeeSection />
        {/* 5. Before/After Carousel */}
        <BoostrollSection />
        {/* 6. Hero Image (full-width) */}
        <HeroImageSection />
        {/* 7. WBP Flow 4-Step (sticky scroll) */}
        <WbpFlowSection />
        {/* 8. "성과 걱정 없는 마케팅의 시작" */}
        <WhatPerformanceSection />
        {/* 9. Partner Logos (500+) */}
        <PartnerSection />
        {/* 10. Goal X Rotating CTA */}
        <GoalXSection />
        {/* 11. Footer CTA */}
        <CommonFooterCta />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
