/* ───────────────────────────────────────────────
   업종별 페이지 데이터
   /industry/[slug] 에서 slug 로 조회
   ─────────────────────────────────────────────── */

// ─── Types ───────────────────────────────────────

export interface IndustryHero {
  badge: string;
  /** 줄바꿈은 \n */
  headline: string;
  /** headline 중 accent 색상 처리할 부분 */
  highlightedText: string;
  subHeadline: string;
  highlightedSubText: string;
  /** 히어로 배경 이미지 */
  bgImage: string;
  /** 브랜드 로고 스트립 이미지 */
  brandLogosImage: string;
  /** 성과 단계 (progress bar) */
  steps: string[];
  /** 성과 박스 타이틀 e.g. "[창업] 업종 구매 가능 성과" */
  stepsBoxTitle: string;
  /** 하단 파란 배너 문구 */
  blueBanner: string;
  /** 액센트 컬러 */
  accentColor: string;
}

export interface IndustrySubCategory {
  label: string;
  slug: string;
}

export interface IndustryProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string; // matches SubCategory.slug
}

export interface CaseStudyCard {
  image: string;
  metrics: { value: string; label: string }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  hero: IndustryHero;
  subCategories: IndustrySubCategory[];
  products: IndustryProduct[];
  caseStudies: CaseStudyCard[];
  faqs: FaqItem[];
}

// ─── 창업 (Startup / Franchise) ──────────────────

const startup: IndustryData = {
  slug: "startup",
  name: "창업",
  hero: {
    badge: "창업 광고성과 구매",
    headline: "대표님!\n1,000호점 넘는 인기 브랜드는\n왜 위픽부스터와 함께 할까요?",
    highlightedText: "왜 위픽부스터와 함께",
    subHeadline:
      "광고 제작, 매체 선택, 광고비 걱정 없이\n성과만 구매하면 되니까요!",
    highlightedSubText: "성과만 구매",
    bgImage:
      "https://cdn.imweb.me/thumbnail/20250921/e9edb988cd80c.png",
    brandLogosImage:
      "https://cdn.imweb.me/upload/S202507314a1b355934b2a/3d137c6cab433.png",
    steps: [
      "노출",
      "클릭",
      "가맹문의",
      "전화상담예약",
      "미팅예약",
      "대면미팅",
      "가맹 계약",
    ],
    stepsBoxTitle: "[창업] 업종 구매 가능 성과",
    blueBanner: "위픽부스터에서는 성과 없으면 0원입니다.",
    accentColor: "#3EA2FF",
  },

  subCategories: [
    { label: "전체", slug: "all" },
    { label: "F&B", slug: "fnb" },
    { label: "교육", slug: "edu" },
    { label: "무인", slug: "unmanned" },
    { label: "미용", slug: "beauty" },
    { label: "생활", slug: "living" },
    { label: "숙박", slug: "hotel" },
    { label: "스포츠", slug: "sports" },
    { label: "취미·여가", slug: "leisure" },
  ],

  products: [
    // ── F&B ──
    { id: "313", name: "패스트푸드", price: 103200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/39dc52dde8dc2.png?w=500", category: "fnb" },
    { id: "314", name: "디저트·카페", price: 103200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/10d2ff07316a7.png?w=500", category: "fnb" },
    { id: "312", name: "비건·건강식", price: 103200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/88af3c3edd787.png?w=500", category: "fnb" },
    { id: "311", name: "아시안 푸드", price: 103200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/8ab3728b880d1.png?w=500", category: "fnb" },
    { id: "310", name: "주점·펍", price: 103200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/797be1c3c8c3c.png?w=500", category: "fnb" },
    { id: "309", name: "분식", price: 103200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/c14f1bd5ff3b9.png?w=500", category: "fnb" },
    { id: "308", name: "양식", price: 103200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/b398f02bdaae4.png?w=500", category: "fnb" },
    { id: "307", name: "일식", price: 103200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/48d60403268ac.png?w=500", category: "fnb" },
    { id: "305", name: "한식", price: 103200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/82b40f4c9e1b1.png?w=500", category: "fnb" },
    { id: "306", name: "중식", price: 103200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/6aeb0027cc392.png?w=500", category: "fnb" },
    // ── 교육 ──
    { id: "326", name: "학원", price: 115200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/91cb12cd80ff4.png?w=500", category: "edu" },
    { id: "98", name: "스터디카페", price: 117600, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/e67e2e3e143f2.png?w=500", category: "edu" },
    // ── 무인 ──
    { id: "320", name: "무인 빨래방", price: 92400, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/37e4652ca5c4d.png?w=500", category: "unmanned" },
    { id: "319", name: "무인 소품샵", price: 92400, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/8d2f401fd09eb.png?w=500", category: "unmanned" },
    { id: "318", name: "무인 편의점", price: 92400, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/7b8277ead5f56.png?w=500", category: "unmanned" },
    { id: "317", name: "무인 스터디카페", price: 122400, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/05694f5a5b135.png?w=500", category: "unmanned" },
    { id: "316", name: "무인 프린트카페", price: 92400, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/cf58e3f0f299e.png?w=500", category: "unmanned" },
    { id: "315", name: "무인 카페", price: 92400, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/2dd15de5ee34f.png?w=500", category: "unmanned" },
    // ── 미용 ──
    { id: "321", name: "미용실", price: 112800, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/2fd5a9490c076.png?w=500", category: "beauty" },
    { id: "322", name: "속눈썹", price: 108000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/f27cb7bf24bb9.png?w=500", category: "beauty" },
    { id: "323", name: "반영구", price: 108000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/58a061ecb1cb4.png?w=500", category: "beauty" },
    { id: "324", name: "네일아트", price: 108000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/1fd7b2bd8196a.png?w=500", category: "beauty" },
    { id: "325", name: "피부관리·에스테틱", price: 108000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/03973fbc59d4d.png?w=500", category: "beauty" },
    // ── 생활 ──
    { id: "336", name: "편의점", price: 114000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/962827397a9ec.png?w=500", category: "living" },
    { id: "337", name: "안경원", price: 96000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/ff7efc392b549.png?w=500", category: "living" },
    // ── 숙박 ──
    { id: "327", name: "모텔", price: 126000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/6a068c8b88f25.png?w=500", category: "hotel" },
    { id: "328", name: "호텔", price: 126000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/0e0ef04248824.png?w=500", category: "hotel" },
    // ── 스포츠 ──
    { id: "95", name: "헬스·피트니스", price: 96000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/1c24aaff06e86.png?w=500", category: "sports" },
    { id: "333", name: "스크린 골프", price: 114000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/7faca17c5c7c6.png?w=500", category: "sports" },
    { id: "334", name: "풋살·축구", price: 96000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/79ab22d01d879.png?w=500", category: "sports" },
    { id: "335", name: "하키", price: 96000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/9163ee0162401.png?w=500", category: "sports" },
    // ── 취미·여가 ──
    { id: "96", name: "키즈카페", price: 84000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/362d173b31257.png?w=500", category: "leisure" },
    { id: "97", name: "만화카페", price: 117600, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/65f7e66ed0cbd.png?w=500", category: "leisure" },
    { id: "329", name: "PC방", price: 112800, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/850fbb0ca3f8f.png?w=500", category: "leisure" },
    { id: "330", name: "방탈출", price: 115200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/7d95012cccd4f.png?w=500", category: "leisure" },
    { id: "331", name: "보드게임", price: 115200, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/4d00c101ab043.png?w=500", category: "leisure" },
    { id: "332", name: "반려동물샵", price: 114000, image: "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/dfe31f4bbe50e.png?w=500", category: "leisure" },
  ],

  caseStudies: [
    {
      image: "https://cdn.imweb.me/upload/S202507314a1b355934b2a/66cd0de021da4.png",
      metrics: [
        { value: "+286건", label: "환자 상담신청 수" },
        { value: "+28명", label: "실제 방문 환자 수" },
        { value: "+555%", label: "위픽부스터 도입 후 ROAS" },
      ],
    },
    {
      image: "https://cdn.imweb.me/upload/S202507314a1b355934b2a/77aafa0347d91.png",
      metrics: [
        { value: "+6배", label: "위픽부스터 도입 후 월 신환 수" },
        { value: "+400%", label: "병원 마케팅을 통한 ROAS" },
        { value: "+358%", label: "3개월만에 평균 병원 매출" },
      ],
    },
    {
      image: "https://cdn.imweb.me/upload/S202507314a1b355934b2a/03c0abb600765.png",
      metrics: [
        { value: "5.8%", label: "광고 클릭률 (CTR)" },
        { value: "+360%", label: "웹 페이지 방문율" },
        { value: "+320%", label: "상담 문의" },
      ],
    },
    {
      image: "https://cdn.imweb.me/upload/S202507314a1b355934b2a/f96d70c9d1ad3.png",
      metrics: [
        { value: "4.9%", label: "광고 클릭률 (CTR)" },
        { value: "+360%", label: "웹 페이지 방문율" },
        { value: "+290%", label: "상담 문의" },
      ],
    },
  ],

  faqs: [
    {
      question: "위픽부스터는 어떤 서비스인가요?",
      answer:
        "위픽부스터는 쇼핑몰에서 물건을 고르듯, 필요한 광고성과(노출·클릭·상담신청·방문·결제 등)를 원하는 만큼 선택해 구매할 수 있는 성과구매형 퍼포먼스 광고 플랫폼입니다.",
    },
    {
      question: "일반 광고 대행과 위픽부스터, 어떤 점이 다른가요?",
      answer:
        "일반 광고 대행은 광고비와 운영비를 함께 지불해야 하지만 성과는 불확실하고, 확인도 번거로운 경우가 많습니다. 위픽부스터는 성과 발생 시 충전금에서 차감되며, 광고 제작물은 추가 비용 없이 제공됩니다. 또한 CRM 솔루션으로 실시간 현황과 알림까지 지원해 빠르게 대응할 수 있습니다.",
    },
    {
      question: "어떤 업종에서 이용할 수 있나요?",
      answer:
        "병원, 프랜차이즈, 법률, 렌트, 교육, B2B 등 성과가 필요한 모든 업종에서 이용할 수 있습니다. 지금까지 500개 이상의 고객사가 위픽부스터와 함께 성과를 만들어왔습니다.",
    },
    {
      question: "최소 광고 집행 금액은 얼마인가요?",
      answer:
        "위픽부스터는 별도의 계약금이 없으며, 필요한 만큼의 성과를 선택해 광고를 진행할 수 있습니다. 평균 집행 금액은 상담 신청 300만원, 전화 상담 예약 500만원, 방문 예약 800만원, 방문 1,200만원 수준입니다. ※ 업종·지역·타겟·목표에 따라 금액이 달라질 수 있으며, 상담 시 맞춤 안내가 가능합니다.",
    },
    {
      question: "광고는 언제부터 진행되나요?",
      answer:
        "광고는 자료 전달 후, 스터디 → 전략 검토 → 소재·랜딩 제작 과정을 거쳐 진행되며, 보통 영업일 기준 10일 이내에 캠페인이 시작됩니다.",
    },
    {
      question: "결제 방식은 어떻게 되나요?",
      answer:
        "위픽부스터는 3가지 결제 방식을 지원합니다. 무통장 입금(세금계산서 발행 가능), 카드 결제(일회성 결제와 정기 자동결제 지원), 후불 결제(심사 승인 후 광고를 먼저 진행하고, 성과 발생 시 결제).",
    },
  ],
};

// ─── Registry ────────────────────────────────────

const INDUSTRIES: Record<string, IndustryData> = {
  startup,
};

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return INDUSTRIES[slug];
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(INDUSTRIES);
}
