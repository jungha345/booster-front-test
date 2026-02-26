import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "위픽부스터 - 불확실한 광고, 이제 확실한 성과로",
  description:
    "광고는 누구나 하지만, 위픽부스터는 성과를 만듭니다. 기획·제작·운영·개선의 복잡한 과정 없이, 원하는 성과를 구매하면 끝.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
