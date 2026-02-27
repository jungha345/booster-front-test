import { notFound } from "next/navigation";
import { getIndustryBySlug, getAllIndustrySlugs } from "@/lib/industries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingElements } from "@/components/layout/FloatingElements";
import { IndustryHeroSection } from "@/components/sections/industry/IndustryHeroSection";
import { IndustryProductGrid } from "@/components/sections/industry/IndustryProductGrid";
import { IndustryCaseStudySection } from "@/components/sections/industry/IndustryCaseStudySection";
import { IndustryFaqSection } from "@/components/sections/industry/IndustryFaqSection";
import { IndustryFooterCta } from "@/components/sections/industry/IndustryFooterCta";
import { FloatingCtaButton } from "@/components/sections/industry/FloatingCtaButton";

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getIndustryBySlug(slug);
  if (!data) return {};
  return {
    title: `${data.name} 광고성과 구매｜위픽부스터`,
    description: `${data.name} 업종 광고성과를 구매하세요. 성과 기반 과금으로 매출까지 연결되는 광고, 위픽부스터에서 경험해보세요.`,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getIndustryBySlug(slug);
  if (!data) notFound();

  return (
    <>
      <Header />
      <main>
        <IndustryHeroSection hero={data.hero} />
        <IndustryProductGrid
          subCategories={data.subCategories}
          products={data.products}
          accentColor={data.hero.accentColor}
        />
        <IndustryCaseStudySection caseStudies={data.caseStudies} />
        <IndustryFaqSection faqs={data.faqs} />
        <IndustryFooterCta />
      </main>
      <Footer />
      <FloatingElements />
      <FloatingCtaButton accentColor={data.hero.accentColor} />
    </>
  );
}
