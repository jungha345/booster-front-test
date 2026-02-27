/* ───────────────────────────────────────────────
   상품 상세 페이지 데이터
   /product/[id] 에서 id 로 조회
   ─────────────────────────────────────────────── */

// ─── Types ───────────────────────────────────────

export interface PerformanceStep {
  name: string;
  description: string;
  recommendedFor: string[];
}

export interface CaseStudy {
  emoji: string;
  brand: string;
  label: string;
  period: string;
  adSpend: string;
  result: string;
}

export interface ComparisonRow {
  feature: string;
  agency: string;
  inhouse: string;
  booster: string;
}

export interface FeatureBlock {
  title: string;
  description: string;
}

export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ProductData {
  id: string;
  name: string;
  price: number;
  thumbnail: string;
  /** 카테고리 경로 e.g. ["광고성과구매", "창업", "전체"] */
  breadcrumb: { label: string; href: string }[];
  shortDescription: string;
  note: string;
  /** 업종 slug (industry 페이지 연결용) */
  industrySlug: string;

  // ─── 상세 설명 ───
  painPoints: string[];
  performanceSteps: PerformanceStep[];
  /** 성과 단계 이름만 (퍼널 표시용) */
  funnelSteps: string[];
  caseStudies: CaseStudy[];
  /** 타겟팅 옵션 */
  targeting: {
    basic: string;
    region: string;
    detail: string;
    note: string;
  };
  /** A/S 정책 (불량 DB 유형) */
  asPolicy: string[];
  /** 비교 테이블 */
  comparisonTable: ComparisonRow[];
  /** 추가 기능 블록 */
  features: FeatureBlock[];
  /** 핵심 통계 문구 */
  keyStatistic: {
    highlight: string;
    description: string;
  };

  relatedProducts: RelatedProduct[];
}

// ─── 패스트푸드 (ID: 313) ────────────────────────

const fastfood: ProductData = {
  id: "313",
  name: "패스트푸드",
  price: 103200,
  thumbnail:
    "https://cdn.imweb.me/thumbnail/20250926/b85de03247eda.png",
  breadcrumb: [
    { label: "홈", href: "/" },
    { label: "광고성과구매", href: "/ads" },
    { label: "창업", href: "/industry/startup" },
    { label: "전체", href: "/industry/startup" },
  ],
  shortDescription:
    "패스트푸드 창업 관심 고객을 상담신청→전화상담예약→가맹 계약까지 안전하게 연결하는 랜딩·콜센터 기반 광고성과입니다.",
  note: "*광고성과 결제 후에도 담당자와의 소통을 통해 성과와 옵션을 유연하게 조정할 수 있습니다.",
  industrySlug: "startup",

  painPoints: [
    "상담신청이 부족해, 가맹/매출 목표가 흔들려요.",
    "유입은 있는데, 랜딩/폼 이탈이 많아 실제 상담 연결이 잘 안 돼요.",
    "들어온 DB 중 중복·번호불량·광고성 문의가 많아 실제로 활용하기 어려워요.",
    "인력 부족으로 콜백 골든타임(10분)을 놓쳐 예약률이 낮아지고 있어요.",
    "상담 → 예약 → 계약 체계가 정리되지 않아 내부에서 일관된 관리가 어려워요.",
  ],

  funnelSteps: [
    "노출",
    "클릭",
    "상담신청",
    "전화상담예약",
    "방문예약",
    "방문",
    "결제",
  ],

  performanceSteps: [
    {
      name: "노출",
      description:
        "광고가 고객에게 보여진 횟수를 의미해요. 성과 1건 = 광고 1,000회 노출",
      recommendedFor: [
        "브랜드 인지도, 신규 프로그램/센터 홍보가 필요한 경우",
        "특정 시즌·이벤트에 맞춰 대규모 홍보가 필요한 경우",
      ],
    },
    {
      name: "클릭",
      description:
        "고객이 우리 광고를 눌러, 랜딩 페이지로 유입된 경우를 의미해요.",
      recommendedFor: [
        "랜딩페이지 유입을 통해 관심 고객을 선별하고 싶은 경우",
        "유입 데이터를 활용해 리타겟팅 광고를 진행하고 싶은 경우",
      ],
    },
    {
      name: "상담신청",
      description:
        "상담신청 성과는 고객이 상담을 위해 개인정보(이름, 연락처)를 제출한 경우를 의미합니다. 잠재양식이 아닌 오직 랜딩페이지로만 광고를 진행하여 예약률이 높습니다.",
      recommendedFor: [
        "DB 마케팅 경험이 있는 경우",
        "콜 상담 세일즈 전문 인력이 있는 경우",
        "매체별 성과 정리·DB 관리에 시간을 많이 사용하는 경우",
      ],
    },
    {
      name: "전화상담예약",
      description:
        "고객이 상담을 위해 개인정보(이름, 연락처)를 제출하고, 위픽부스터 콜센터에서 1차 콜을 진행하여 상담의사와 상담 가능 시간을 확인하여 전화 상담을 예약한 경우를 의미합니다. (평균 예약률 30%)",
      recommendedFor: [
        "DB마케팅을 진행했는데 부재와 번호불량이 많았던 경우",
        "내부 콜 상담팀에서 불량DB에 대한 클레임이 심한 경우",
        "전문 영업팀이 없어 소량이라도 의미 있는 영업을 진행하고 싶은 경우",
      ],
    },
    {
      name: "방문예약",
      description:
        "고객이 상담을 위해 개인정보(이름, 연락처)를 제출하고 위픽부스터 콜센터에서 콜을 진행하여 예약 일자와 시간을 확인하여 방문 예약을 체결한 경우를 의미합니다. (평균 방문률 40%)",
      recommendedFor: [
        "DB마케팅을 진행했었는데 예약률이 낮았던 경우",
        "전문 영업팀이 없어서 콜 영업 전부를 대행하고 싶은 경우",
      ],
    },
    {
      name: "방문",
      description:
        "고객이 상담을 위해 개인정보(이름, 연락처)를 제출하고, 위픽부스터 콜센터에서 콜을 진행하여 예약 일자와 시간을 확인한 후, 방문 예약을 체결하여 방문까지 완료한 경우를 의미합니다.",
      recommendedFor: [
        "예약/방문률이 낮았던 경우",
        "방문만 하면 내부 세일즈는 자신 있는 경우",
        "고객이 유치되었을 때만 광고비를 지불하고 싶은 경우",
      ],
    },
    {
      name: "결제",
      description:
        "고객이 온라인을 통해 상담신청을 하고 오프라인 방문하여 결제를 진행한 경우를 의미합니다.",
      recommendedFor: [
        "리스크 없이 결제 되었을 때만 광고비를 지불하고 싶은 경우",
      ],
    },
  ],

  caseStudies: [
    {
      emoji: "☕",
      brand: '"T" 카페',
      label: "가맹점 300여개",
      period: "2025-06 ~",
      adSpend: "80,000,000원",
      result: "DB 1,370건",
    },
    {
      emoji: "🍗",
      brand: '"H" 치킨',
      label: "가맹점 200개",
      period: "2024-12-21 ~",
      adSpend: "180,000,000원",
      result: "DB 2,320건",
    },
    {
      emoji: "🚲",
      brand: '"I" 공유자전거',
      label: "—",
      period: "2024-05-21 ~",
      adSpend: "20,000,000원",
      result: "가맹 계약 4건",
    },
  ],

  targeting: {
    basic: "전국, 20~50세",
    region: "수도권 / 광역시 등",
    detail: "성별, 관심사, 키워드 등",
    note: "*상세 타겟팅은 매체 데이터 기반으로 일부 오차가 발생할 수 있어요.",
  },

  asPolicy: [
    "중복",
    "결번",
    "번호불량",
    "욕설·장난신청",
    "장기부재 (5회 이상 콜)",
  ],

  comparisonTable: [
    {
      feature: "추가비용",
      agency: "소재/랜딩 제작·수정 시 수수료 발생",
      inhouse: "인건비·툴 구독료 부담",
      booster: "X",
    },
    {
      feature: "전환 설계·최적화",
      agency: "노출·클릭 중심, 후속 미흡",
      inhouse: "담당자 역량 따라 편차",
      booster: "O",
    },
    {
      feature: "진행 간편성",
      agency: "대행사 소통·관리 필요",
      inhouse: "내부 리소스 소모",
      booster: "O",
    },
    {
      feature: "리드 품질 보완(A/S)",
      agency: "계약별 상이·제한적",
      inhouse: "불가",
      booster: "O",
    },
    {
      feature: "광고 제작물 지원",
      agency: "건당 제작·세팅비 별도",
      inhouse: "내부 제작 필요",
      booster: "O",
    },
    {
      feature: "콜 영업 인력 지원",
      agency: "별도 계약 필요·대다수 미제공",
      inhouse: "추가 채용 필요",
      booster: "O",
    },
    {
      feature: "리포트 제공",
      agency: "주간/월간 리포트 수동 제공",
      inhouse: "내부 대시보드 구축 필요",
      booster: "O",
    },
  ],

  features: [
    {
      title: "광고 집행",
      description:
        "상담문의를 이끄는 광고 기획·제작 노하우. 위픽부스터는 1,000건 이상의 소재·랜딩 제작 경험을 기반으로, 업종에 맞는 페이지를 100% 무료로 제작해드려요. 상담 전환율이 평균 25% 이상 향상될 수 있는 구조를 설계하고 있어요.",
    },
    {
      title: "고객 관리",
      description:
        "성과 관리까지 가능한 솔루션 지원. 성과 발생은 물론 실시간 알림·DB 관리·리포팅 까지 모두 경험할 수 있어요. 5분 이내 응대 시 부재율이 40%이상 감소하는 효과를 보실 수 있어요.",
    },
    {
      title: "전문 인력",
      description:
        "실제 매출을 만드는 진성 고객 유입 전략. 위픽부스터 콜센터는 평균 10년차 이상의 전문 상담 인력이 직접 고객과 소통해요. 그 결과, 예약률은 평균 30% 수준을 유지하고 있습니다.",
    },
  ],

  keyStatistic: {
    highlight: "단, 1분!",
    description:
      "광고 체류 시간 1분 이상인 고객 수가 증가하면 상담문의 수도 약 400% 상승합니다.",
  },

  relatedProducts: [
    {
      id: "339",
      name: "창업 광고를 위한 최적의 마케팅 컨설팅 (전화)",
      price: 200000,
      image:
        "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/adb2ffb410724.png?w=500",
    },
    {
      id: "338",
      name: "창업 광고를 위한 최적의 마케팅 컨설팅 (대면)",
      price: 800000,
      image:
        "https://cdn-optimized.imweb.me/upload/S202507314a1b355934b2a/6947757272ce9.png?w=500",
    },
  ],
};

// ─── Registry ────────────────────────────────────

const PRODUCTS: Record<string, ProductData> = {
  "313": fastfood,
};

export function getProductById(id: string): ProductData | undefined {
  return PRODUCTS[id];
}

export function getAllProductIds(): string[] {
  return Object.keys(PRODUCTS);
}
