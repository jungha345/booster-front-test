"use client";

import { useState } from "react";

const FEATURE_CARDS = [
  {
    number: "01",
    title: "과정이 아닌 성과로",
    subtitle: "광고성과 구매",
    description: "기획·제작·운영·개선의 복잡한 과정은 잊으세요. 원하는 성과를 구매하면 끝.",
    link: { label: "광고성과 구매하러 가기", href: "#function" },
    active: true,
  },
  {
    number: "02",
    title: "추측이 아닌 데이터로",
    subtitle: "광고성과 관리",
    description: "AI 기반 솔루션으로 고객문의부터 결제까지 끊김없이 관리합니다.",
    link: { label: "광고성과 관리 알아보기", href: "#management" },
    active: false,
  },
  {
    number: "03",
    title: "감이 아닌 전략으로",
    subtitle: "마케팅 스킬",
    description: "1,000억 원의 광고 노하우를 담은 마케팅 킷과 교육을 만나보세요.",
    link: { label: "마케팅 스킬 알아보기", href: "#skill" },
    active: false,
  },
] as const;

export function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-[#0a1628] overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,119,251,0.15)_0%,transparent_70%)]" />

      <div className="relative max-w-[1080px] mx-auto px-5 pt-32 lg:pt-40 pb-16 lg:pb-24">
        {/* Main headline */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl lg:text-[56px] lg:leading-[1.2] font-extrabold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-[#34d399] via-[#22d3ee] to-[#818cf8] bg-clip-text text-transparent">
              불확실한 광고,
            </span>
            <br />
            <span className="text-white">
              이제{" "}
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">
                확실한 성과
              </span>
              로
            </span>
          </h1>
          <p className="text-sm lg:text-lg text-white/60 max-w-[500px] mx-auto leading-relaxed">
            광고는 누구나 하지만, 위픽부스터는 성과를 만듭니다.
            <br className="hidden lg:block" />
            기획부터 결제까지, 원하는 성과를 선택하면 끝.
          </p>
        </div>

        {/* Email input - mobile */}
        <div className="lg:hidden mb-10">
          <div className="flex items-center gap-2 max-w-[340px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해 주세요"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder-white/40 outline-none focus:border-primary transition-colors"
            />
            <button className="px-4 py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-hover transition-colors">
              →
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.number}
              className={`relative rounded-[20px] p-6 lg:p-7 transition-all duration-300 ${
                card.active
                  ? "bg-white/10 backdrop-blur-xl border border-primary/50 shadow-[0_0_30px_rgba(1,119,251,0.15)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                    card.active
                      ? "bg-primary/20 text-primary"
                      : "bg-white/10 text-white/50"
                  }`}
                >
                  {card.number}
                </span>
                <span className="text-xs text-white/50 font-medium">
                  {card.subtitle}
                </span>
              </div>
              <h3
                className={`text-lg lg:text-xl font-bold mb-2 ${
                  card.active ? "text-white" : "text-white/70"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  card.active ? "text-white/70" : "text-white/40"
                }`}
              >
                {card.description}
              </p>
              <a
                href={card.link.href}
                className={`inline-flex items-center text-sm font-semibold transition-colors ${
                  card.active
                    ? "text-primary hover:text-primary-hover"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {card.link.label}
                <span className="ml-1">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
