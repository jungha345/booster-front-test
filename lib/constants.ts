export const NAV_ITEMS = [
  { label: "광고성과구매", href: "#function" },
  { label: "광고성과관리", href: "#management" },
  { label: "마케팅 스킬", href: "#skill" },
  { label: "인사이트", href: "#insights" },
  { label: "고객센터", href: "#support" },
] as const;

export const FUNCTION_TABS = [
  "광고성과 구매",
  "광고성과 관리",
  "마케팅 스킬",
] as const;

export const INDUSTRY_TABS = [
  "병원",
  "창업",
  "채용",
  "렌탈",
  "법률",
  "다른업종",
] as const;

export const PRODUCT_ITEMS = [
  {
    id: "1",
    category: "성형외과",
    subcategory: "눈성형",
    price: "51,600원",
    industry: "병원",
  },
  {
    id: "2",
    category: "성형외과",
    subcategory: "지방흡입",
    price: "54,000원",
    industry: "병원",
  },
  {
    id: "3",
    category: "피부과",
    subcategory: "눈밑지방재배치",
    price: "49,200원",
    industry: "병원",
  },
] as const;

export const SOLUTION_ITEMS = [
  {
    id: "1",
    title: "AI 자동응답",
    description:
      "고객 문의에 AI가 즉시 응답하여 상담 전환율을 높입니다.",
    tags: ["AI 챗봇", "자동응답", "상담전환", "24시간 운영"],
  },
  {
    id: "2",
    title: "성과 대시보드",
    description:
      "광고 성과를 실시간으로 모니터링하고 데이터 기반 의사결정을 지원합니다.",
    tags: ["실시간 분석", "ROI 추적", "리포트", "데이터 시각화"],
  },
  {
    id: "3",
    title: "CRM 연동",
    description:
      "고객 데이터를 통합 관리하여 맞춤형 마케팅을 실현합니다.",
    tags: ["고객관리", "데이터 연동", "맞춤 마케팅", "자동화"],
  },
] as const;

export const MARKETING_TABS = [
  "마케팅 킷",
  "교육·이벤트",
  "컨설팅",
] as const;

export const MARKETING_ITEMS = [
  {
    id: "1",
    title: "렌탈 광고를 위한 최적의 마케팅 컨설팅 (전화)",
    price: "무료",
    tag: "HOT",
  },
  {
    id: "2",
    title: "[70% 할인] 광고비 누수부터 영업 부진까지 한 번에 해결하는 마스터 가이드",
    price: "15,000원",
    originalPrice: "50,000원",
    tag: "BEST",
  },
  {
    id: "3",
    title: "[최종가 5,000원 쿠폰] 개인회생 성과 최적화 플레이북",
    price: "5,000원",
    originalPrice: "25,000원",
    tag: "NEW",
  },
] as const;

export const PARTNER_LOGOS = Array.from({ length: 20 }, (_, i) => ({
  id: `partner-${i + 1}`,
  name: `파트너 ${i + 1}`,
}));

export const STATS = [
  {
    value: "1,281",
    unit: "건",
    label: "일 평균 광고 성과 판매",
    description: "매일 1,281건의 광고 성과가 판매되고 있습니다",
  },
  {
    value: "82",
    unit: "%",
    label: "재구매율",
    description: "고객 10명 중 8명이 다시 찾는 서비스",
  },
  {
    value: "502",
    unit: "",
    label: "경험 기업 수",
    description: "502개 기업이 위픽부스터를 경험했습니다",
  },
] as const;

export const INSIGHT_ITEMS = [
  {
    id: "1",
    title: "O2O 비즈니스 마케팅 효율 계산 방법",
    excerpt:
      "O2O 비즈니스에서 마케팅 효율을 정확하게 측정하고 개선하는 방법을 알아봅니다.",
    category: "인사이트",
  },
  {
    id: "2",
    title: "토스 광고 전환 2,822개 만든 이야기",
    excerpt:
      "토스 광고에서 2,822개의 전환을 만들어낸 실전 마케팅 전략을 공개합니다.",
    category: "인사이트",
  },
  {
    id: "3",
    title: "병원 광고에서 없으면 안 될, '이 것'",
    excerpt:
      "병원 광고의 필수 요소와 성공적인 환자 유치 전략에 대해 알아봅니다.",
    category: "인사이트",
  },
] as const;

export const CTA_INDUSTRIES = [
  { label: "병원", highlighted: false },
  { label: "보험", highlighted: false },
  { label: "분양", highlighted: false },
  { label: "창업", highlighted: false },
  { label: "통신", highlighted: false },
  { label: "주식", highlighted: false },
  { label: "렌탈", highlighted: false },
  { label: "B2B", highlighted: false },
  { label: "코인", highlighted: false },
  { label: "법률", highlighted: false },
  { label: "채용", highlighted: false },
  { label: "기타업종 상담문의", highlighted: true },
] as const;

export const FAQ_ITEMS = [
  {
    question: "위픽부스터는 어떤 서비스인가요?",
    answer:
      "위픽부스터는 광고 성과를 직접 구매할 수 있는 성과형 마케팅 플랫폼입니다. 기획·제작·운영·개선의 복잡한 과정 없이, 원하는 성과(노출, 클릭, 상담, 예약, 결제 등)를 선택하고 구매하면 끝입니다.",
  },
  {
    question: "기존 광고대행사와 어떤 점이 다른가요?",
    answer:
      "기존 광고대행사는 광고비를 소진하는 방식이지만, 위픽부스터는 실제 성과(상담, 예약, 결제)가 발생할 때만 비용이 청구됩니다. 불확실한 광고비 지출 없이 확실한 성과만 구매할 수 있습니다.",
  },
  {
    question: "어떤 업종이 이용할 수 있나요?",
    answer:
      "병원, 성형외과, 피부과, 치과, 한의원 등 의료 분야부터 창업, 프랜차이즈, 렌탈, 법률, 채용, B2B 등 다양한 업종에서 이용 가능합니다. 맞춤 상담을 통해 최적의 광고 성과를 설계해 드립니다.",
  },
  {
    question: "최소 광고 예산은 얼마인가요?",
    answer:
      "업종과 목표 성과에 따라 다르지만, 소규모 예산으로도 시작할 수 있습니다. 최소 구매 단위는 성과 1건부터 가능하며, 상담을 통해 예산에 맞는 최적의 플랜을 제안해 드립니다.",
  },
  {
    question: "광고는 언제부터 시작되나요?",
    answer:
      "성과 구매 후 최소 1~3영업일 내에 광고가 집행됩니다. 업종과 캠페인 규모에 따라 셋업 기간이 달라질 수 있으며, 담당 매니저가 진행 상황을 안내해 드립니다.",
  },
  {
    question: "결제 방법은 어떻게 되나요?",
    answer:
      "신용카드, 계좌이체, 가상계좌 등 다양한 결제 수단을 지원합니다. 크레딧을 미리 충전하여 사용하거나, 건별 결제도 가능합니다. 세금계산서 발행도 지원합니다.",
  },
] as const;

export const FOOTER_INFO = {
  companyName: "(주)위픽코퍼레이션",
  ceo: "김태환",
  businessNumber: "540-81-00230",
  address: "서울시 성동구 연무장 5길 18, 6F",
  phone: "02-6013-2873",
  email: "hello@wepick.kr",
} as const;

export const FOOTER_LINKS = [
  { label: "위픽부스터여야 하는 이유", href: "#" },
  { label: "서비스 이용약관", href: "#" },
  { label: "개인정보처리방침", href: "#" },
  { label: "위픽부스터 문의하기", href: "#" },
] as const;
