"use client";

import { useState, useMemo } from "react";
import type { IndustrySubCategory, IndustryProduct } from "@/lib/industries";
import { IndustryCategoryTabs } from "./IndustryCategoryTabs";

interface Props {
  subCategories: IndustrySubCategory[];
  products: IndustryProduct[];
  accentColor: string;
}

function formatPrice(price: number) {
  return price.toLocaleString("ko-KR") + "원";
}

export function IndustryProductGrid({
  subCategories,
  products,
  accentColor,
}: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    return list;
  }, [products, activeCategory, searchQuery]);

  // Category title for current active category
  const activeCatLabel =
    subCategories.find((c) => c.slug === activeCategory)?.label ?? "";

  return (
    <section id="products" className="py-[60px] lg:py-[80px]">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Category tabs */}
        <IndustryCategoryTabs
          subCategories={subCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          accentColor={accentColor}
        />

        {/* Section heading for active category */}
        {activeCategory !== "all" && (
          <h2 className="text-[20px] lg:text-[28px] font-[800] text-[#171819] mb-[24px]">
            {activeCatLabel} 업종 광고 BEST
          </h2>
        )}

        {/* Search input */}
        <div className="relative mb-[28px] lg:mb-[36px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="광고를 진행하고 싶은 업종 입력"
            className="w-full max-w-[400px] px-[16px] py-[12px] pl-[40px] rounded-[10px] border border-[#e7edf3] text-[14px] text-[#171819] placeholder-[#868E96] focus:outline-none focus:border-[#0177fb] transition-colors"
          />
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#868E96]"
          >
            <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] lg:gap-[16px]">
          {filtered.map((product) => (
            <a
              key={product.id}
              href={`/product/${product.id}`}
              className="group bg-white rounded-[12px] border border-[#f1f2f3] overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-[#f5f7fa] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-[12px] lg:p-[16px]">
                <h3 className="text-[14px] lg:text-[16px] font-[700] text-[#171819] mb-[4px]">
                  {product.name}
                </h3>
                <p
                  className="text-[14px] lg:text-[16px] font-[700]"
                  style={{ color: accentColor }}
                >
                  {formatPrice(product.price)}
                </p>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[15px] text-[#868E96] py-[40px]">
            검색 결과가 없습니다.
          </p>
        )}
      </div>
    </section>
  );
}
