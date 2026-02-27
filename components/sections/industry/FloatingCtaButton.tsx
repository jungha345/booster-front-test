"use client";

import { useState, useEffect } from "react";

export function FloatingCtaButton({ accentColor }: { accentColor: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#"
      className="fixed bottom-[30px] left-1/2 -translate-x-1/2 z-[999] flex items-center gap-[8px] px-[26px] py-[14px] rounded-full font-[700] text-[16px] text-white backdrop-blur-[30px] shadow-[0_4px_8px_rgba(0,0,0,0.15)] transition-opacity duration-300 lg:left-1/2 lg:-translate-x-1/2 lg:w-auto max-lg:left-[20px] max-lg:right-[80px] max-lg:translate-x-0 max-lg:bottom-[16px] max-lg:justify-center"
      style={{
        background: `linear-gradient(90deg, ${accentColor}44, #3E6BE844)`,
      }}
    >
      맞춤 제안 받기
      <span className="text-[18px]">→</span>
    </a>
  );
}
