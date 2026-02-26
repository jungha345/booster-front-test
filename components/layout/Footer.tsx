import { FOOTER_INFO, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-bg-light">
      <div className="max-w-[1080px] mx-auto px-5 py-12 lg:py-16">
        {/* Logo */}
        <div className="mb-8">
          <span className="text-lg font-extrabold text-text-dark">
            위픽부스터
          </span>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-4 lg:gap-6 mb-8 text-sm">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-medium transition-colors hover:text-text-dark ${
                link.label === "개인정보처리방침"
                  ? "text-text-dark font-bold"
                  : "text-text-medium"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Company Info */}
        <div className="text-xs text-text-medium leading-relaxed space-y-1 mb-8">
          <p>
            {FOOTER_INFO.companyName} | 대표 : {FOOTER_INFO.ceo} |
            사업자등록번호 : {FOOTER_INFO.businessNumber}
          </p>
          <p>{FOOTER_INFO.address}</p>
          <p>
            Tel : {FOOTER_INFO.phone} | E-mail : {FOOTER_INFO.email}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mb-8">
          {/* Facebook */}
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Facebook"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#868e96">
              <path d="M7.6 13V7.5h1.8l.3-2.1H7.6V4.1c0-.6.2-1 1-1h1.1V1.1c-.2 0-.8-.1-1.6-.1-1.6 0-2.7 1-2.7 2.8v1.6H3.6v2.1h1.8V13h2.2z" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="YouTube"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#868e96">
              <path d="M13.2 3.8s-.1-1-.5-1.4c-.5-.5-1-.5-1.3-.5C9.6 1.7 7 1.7 7 1.7s-2.6 0-4.4.2c-.3 0-.8 0-1.3.5-.4.4-.5 1.4-.5 1.4S.6 5 .6 6.2v1.1c0 1.2.2 2.4.2 2.4s.1 1 .5 1.4c.5.5 1.1.5 1.4.5 1 .1 4.3.1 4.3.1s2.6 0 4.4-.2c.3 0 .8 0 1.3-.5.4-.4.5-1.4.5-1.4s.2-1.2.2-2.4V6.2c0-1.2-.2-2.4-.2-2.4zM5.6 9.1V4.9L9.2 7 5.6 9.1z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#868e96">
              <path d="M3.1 12.5H.8V4.7h2.3v7.8zM2 3.7c-.7 0-1.3-.6-1.3-1.3S1.3 1.1 2 1.1s1.3.6 1.3 1.3S2.7 3.7 2 3.7zm10.5 8.8h-2.3V8.7c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2v3.9H5.1V4.7h2.2v1.1c.3-.6 1-1.3 2.1-1.3 2.3 0 2.7 1.5 2.7 3.5v4.5h.4z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-text-light">
          &copy; Wepick Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
