"use client";

import { useState } from "react";
import type { ProductData } from "@/lib/products";

function formatPrice(price: number) {
  return price.toLocaleString("ko-KR") + "원";
}

export function ProductHeroSection({ product }: { product: ProductData }) {
  const [activeTab, setActiveTab] = useState<"detail" | "review" | "qna">(
    "detail",
  );

  return (
    <section className="pt-[80px] lg:pt-[100px] pb-[40px] lg:pb-[60px]">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Breadcrumb - desktop only */}
        <nav className="hidden lg:flex items-center gap-[6px] text-[13px] text-[#868E96] mb-[24px]">
          {product.breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-[6px]">
              {i > 0 && <span className="text-[#d3d3d3]">›</span>}
              <a
                href={item.href}
                className={`hover:text-[#0177fb] transition-colors ${
                  i === product.breadcrumb.length - 1
                    ? "text-[#171819] font-[600]"
                    : ""
                }`}
              >
                {item.label}
              </a>
            </span>
          ))}
        </nav>

        {/* 2-column layout */}
        <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px]">
          {/* Left: Product image */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-square bg-[#f5f7fa] rounded-[16px] overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="w-full lg:w-1/2">
            {/* Product name */}
            <h1 className="text-[22px] lg:text-[28px] font-[700] text-[#171819] mb-[12px]">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-[22px] lg:text-[26px] font-[700] text-[#0177fb] mb-[20px]">
              {formatPrice(product.price)}
            </p>

            {/* Short description */}
            <div className="mb-[16px]">
              <p className="text-[14px] lg:text-[15px] text-[#454F5D] leading-[1.7]">
                {product.shortDescription}
              </p>
            </div>

            {/* Note */}
            <div className="bg-[#d5e9ff] rounded-[8px] px-[12px] py-[8px] mb-[28px]">
              <p className="text-[13px] text-[#444] leading-[1.6] italic">
                {product.note}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-[10px]">
              <a
                href="#"
                className="flex-1 flex items-center justify-center h-[52px] bg-[#0177fb] text-white rounded-[10px] text-[16px] font-[700] hover:bg-[#0062d6] transition-colors"
              >
                구매하기
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center h-[52px] bg-white border border-[#e7edf3] text-[#454F5D] rounded-[10px] text-[16px] font-[700] hover:border-[#0177fb] hover:text-[#0177fb] transition-colors"
              >
                맞춤 견적 받기
              </a>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="mt-[40px] lg:mt-[60px] border-b border-[#e7edf3] sticky top-[60px] bg-white z-10">
          <div className="flex">
            {(
              [
                { key: "detail", label: "상세정보" },
                { key: "review", label: "구매평" },
                { key: "qna", label: "Q&A" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  if (tab.key === "detail") {
                    document
                      .getElementById("product-detail-body")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`flex-1 py-[14px] text-[15px] font-[600] text-center border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? "border-[#0177fb] text-[#0177fb]"
                    : "border-transparent text-[#868E96] hover:text-[#454F5D]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
