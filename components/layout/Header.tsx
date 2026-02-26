"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-white/35 backdrop-blur-[6px]"
        }`}
      >
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between max-w-[1920px] mx-auto px-10 h-[72px]">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <a href="#" className="text-xl font-extrabold text-text-dark">
              위픽부스터
            </a>
            {/* Nav */}
            <nav className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-text-gray hover:text-text-dark transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            {/* Search */}
            <button className="p-2 rounded-lg hover:bg-black/5 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="9" r="6" />
                <path d="M13.5 13.5L17 17" strokeLinecap="round" />
              </svg>
            </button>
            {/* 문의하기 */}
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold text-text-dark border border-border rounded-lg hover:bg-black/5 transition-colors"
            >
              문의하기
            </a>
            {/* 크레딧 구매 */}
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover transition-colors"
            >
              크레딧 구매
            </a>
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#868e96"
              >
                <circle cx="8" cy="5" r="3" />
                <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between px-4 h-[60px]">
          <a href="#" className="text-lg font-extrabold text-text-dark">
            위픽부스터
          </a>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-primary rounded-md"
            >
              크레딧 구매
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="메뉴 열기"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {isMobileMenuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M6 18L18 6" />
                  </>
                ) : (
                  <>
                    <path d="M3 7h18" />
                    <path d="M3 12h18" />
                    <path d="M3 17h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-[60px] left-0 right-0 bg-white shadow-lg">
            <nav className="flex flex-col py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 text-base font-medium text-text-dark hover:bg-bg-light transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-border mt-2 pt-4 px-6">
                <a
                  href="#"
                  className="block w-full text-center py-3 text-sm font-semibold text-text-dark border border-border rounded-lg mb-2"
                >
                  문의하기
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
