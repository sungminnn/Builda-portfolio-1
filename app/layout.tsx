import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUNE INTERIOR | Premium Space Design",
  description: "고급 인테리어 포트폴리오 및 견적문의 랜딩 페이지",
  icons: {
    icon: [
      { url: "/images/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/images/favicon.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: "/images/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/images/favicon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
