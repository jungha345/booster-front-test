import { MobileTopBar } from "@/components/layout/MobileTopBar";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { FunctionSection } from "@/components/sections/FunctionSection";
import { TrustedPartnersSection } from "@/components/sections/TrustedPartnersSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingElements } from "@/components/layout/FloatingElements";

export default function Home() {
  return (
    <>
      <MobileTopBar />
      <Header />
      <main>
        <HeroSection />
        <FunctionSection />
        <TrustedPartnersSection />
        <InsightsSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
