"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "광고성과구매", href: "#function" },
  { label: "광고성과관리", href: "#management" },
  { label: "마케팅 스킬", href: "#skill" },
  { label: "인사이트", href: "#insights" },
  { label: "고객센터", href: "#support" },
];

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
            : "bg-white backdrop-blur-[6px]"
        }`}
      >
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between max-w-[1920px] mx-auto h-[72px]">
          {/* Left: Logo */}
          <div className="flex items-center w-[614px] pl-[40px]">
            <a href="#" className="text-xl font-extrabold text-text-dark tracking-tight">
              wepickbooster
            </a>
          </div>

          {/* Center: Nav + 단가 조회하기 */}
          <div className="flex items-center justify-center flex-1">
            <nav className="flex items-center">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-[18px] py-[8px] text-[15px] font-normal text-[#171819] hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pl-4">
              <button className="text-[15px] font-normal text-[#171819] hover:text-primary transition-colors whitespace-nowrap">
                단가 조회하기
              </button>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center justify-end w-[614px] pr-[40px] gap-4">
            {/* Search Icon */}
            <button className="px-[10px] py-[4px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#171819"
                strokeWidth="1.5"
              >
                <circle cx="7" cy="7" r="5" />
                <path d="M11 11l3 3" strokeLinecap="round" />
              </svg>
            </button>
            {/* 문의하기 - Dark bg, white text, rounded-full */}
            <a
              href="#"
              className="px-[19px] py-[7.5px] text-[13px] font-bold text-white bg-[#212121] rounded-full tracking-[1px] hover:bg-black transition-colors"
            >
              문의하기
            </a>
            {/* 크레딧 구매 - White bg, blue text, rounded-full */}
            <a
              href="#"
              className="px-[15px] py-[7px] text-[13px] font-bold text-primary bg-white rounded-full hover:bg-blue-50 transition-colors"
            >
              크레딧 구매
            </a>
            {/* Avatar */}
            <div className="w-[34px] h-[34px] rounded-full bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gray-300" />
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between px-4 h-[60px]">
          <a href="#" className="text-lg font-extrabold text-text-dark">
            wepickbooster
          </a>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="px-3 py-1.5 text-xs font-bold text-primary bg-white rounded-full border border-gray-100"
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
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 text-base font-medium text-text-dark hover:bg-bg-light transition-colors"
              >
                단가 조회하기
              </a>
              <div className="border-t border-border mt-2 pt-4 px-6">
                <a
                  href="#"
                  className="block w-full text-center py-3 text-sm font-bold text-white bg-[#212121] rounded-full mb-2"
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
