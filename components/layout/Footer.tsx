const FOOTER_LINKS = [
  { label: "위픽부스터여야 하는 이유", href: "#", bold: false },
  { label: "서비스 이용약관", href: "#", bold: false },
  { label: "개인정보처리방침", href: "#", bold: true },
  { label: "위픽부스터 문의하기", href: "#", bold: false },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#f5f6f8]">
      <div className="max-w-[1080px] mx-auto px-5 py-[48px] lg:py-[64px]">
        {/* Logo */}
        <div className="mb-[32px]">
          <span className="text-[18px] font-[800] text-[#171819] tracking-tight">
            wepickbooster
          </span>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-[16px] lg:gap-[24px] mb-[32px]">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[13px] transition-colors hover:text-[#171819] ${
                link.bold
                  ? "text-[#171819] font-bold"
                  : "text-[#868e96] font-[500]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Company Info */}
        <div className="text-[12px] text-[#868e96] font-[400] leading-[1.8] mb-[32px]">
          <p>(주)위픽코퍼레이션 | 대표 : 김태환 | 사업자등록번호 : 540-81-00230</p>
          <p>서울시 성동구 연무장 5길 18, 6F</p>
          <p>Tel : 02-6013-2873 | E-mail : hello@wepick.kr</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-[12px] mb-[32px]">
          {["Facebook", "YouTube", "LinkedIn"].map((name) => (
            <a
              key={name}
              href="#"
              className="w-[32px] h-[32px] rounded-full bg-white border border-[#e5e8eb] flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label={name}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="#868e96">
                <circle cx="7" cy="7" r="3" />
              </svg>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-[#b0b8c1]">
          &copy; Wepick Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
