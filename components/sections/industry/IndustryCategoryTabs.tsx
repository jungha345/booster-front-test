"use client";

import type { IndustrySubCategory } from "@/lib/industries";

interface Props {
  subCategories: IndustrySubCategory[];
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
  accentColor: string;
}

export function IndustryCategoryTabs({
  subCategories,
  activeCategory,
  onCategoryChange,
  accentColor,
}: Props) {
  return (
    <div className="flex flex-wrap gap-[8px] lg:gap-[10px] mb-[32px] lg:mb-[40px]">
      {subCategories.map((cat) => {
        const isActive = activeCategory === cat.slug;
        return (
          <button
            key={cat.slug}
            onClick={() => onCategoryChange(cat.slug)}
            className="px-[16px] py-[8px] lg:px-[20px] lg:py-[10px] rounded-[8px] text-[13px] lg:text-[14px] font-[600] border transition-all duration-200"
            style={{
              backgroundColor: isActive ? accentColor : "#fff",
              borderColor: isActive ? accentColor : "#e7edf3",
              color: isActive ? "#fff" : "#454F5D",
            }}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
