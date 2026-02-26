"use client";

import { useState, useEffect } from "react";

export function FloatingElements() {
  const [showEmailBar, setShowEmailBar] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => setShowEmailBar(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Email Bar - Desktop only */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 hidden lg:block ${
          showEmailBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-[#171819] py-3">
          <div className="max-w-[960px] mx-auto px-5 flex items-center justify-between gap-4">
            <p className="text-white text-sm font-semibold whitespace-nowrap">
              이메일 입력하고, 상담을 시작해 보세요!
            </p>
            <div className="flex items-center gap-2 flex-1 max-w-[400px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력해 주세요"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-[14px] text-white text-sm placeholder-white/50 outline-none focus:border-primary transition-colors"
              />
              <button className="px-5 py-2.5 bg-primary text-white rounded-[14px] text-sm font-semibold hover:bg-primary-hover transition-colors flex items-center gap-1">
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Kakao Talk Button */}
      <a
        href="#"
        className="fixed bottom-5 right-5 z-40 bg-kakao rounded-full px-5 py-3 flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
        aria-label="카카오톡 상담"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#3C1E1E">
          <path d="M10 1C4.5 1 0 4.6 0 9c0 2.8 1.9 5.3 4.7 6.7-.2.7-.7 2.5-.8 2.9-.1.5.2.5.4.3.2-.1 2.6-1.8 3.7-2.5.6.1 1.3.1 2 .1 5.5 0 10-3.6 10-8S15.5 1 10 1z" />
        </svg>
        <span className="text-sm font-bold text-[#3C1E1E]">상담하기</span>
      </a>
    </>
  );
}
