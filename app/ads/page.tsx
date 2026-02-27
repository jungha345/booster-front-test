import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingElements } from "@/components/layout/FloatingElements";
import { AdsHeroSection } from "@/components/sections/ads/AdsHeroSection";
import { CategoryGridSection } from "@/components/sections/ads/CategoryGridSection";
import { AdExplainSection } from "@/components/sections/ads/AdExplainSection";
import { HeeSection } from "@/components/sections/ads/HeeSection";
import { BoostrollSection } from "@/components/sections/ads/BoostrollSection";
import { BoosterStepsSection } from "@/components/sections/ads/BoosterStepsSection";

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
        <AdsHeroSection />
        <CategoryGridSection />
        <AdExplainSection />
        <HeeSection />
        <BoostrollSection />
        <BoosterStepsSection />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
