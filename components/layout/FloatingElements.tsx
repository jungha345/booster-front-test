"use client";

export function FloatingElements() {
  return (
    <>
      {/* Kakao Talk Button */}
      <a
        href="#"
        className="fixed bottom-5 right-5 z-40 bg-[#fee500] rounded-full px-5 py-3 flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
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
