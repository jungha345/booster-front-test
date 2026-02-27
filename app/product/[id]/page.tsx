import { notFound } from "next/navigation";
import { getProductById, getAllProductIds } from "@/lib/products";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingElements } from "@/components/layout/FloatingElements";
import { ProductHeroSection } from "@/components/sections/product/ProductHeroSection";
import { ProductDescriptionBody } from "@/components/sections/product/ProductDescriptionBody";
import { ProductRelatedSection } from "@/components/sections/product/ProductRelatedSection";

export function generateStaticParams() {
  return getAllProductIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `창업 ${product.name} DB 광고｜성과 없으면 0원`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main>
        <ProductHeroSection product={product} />
        <ProductDescriptionBody product={product} />
        <ProductRelatedSection products={product.relatedProducts} />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
