import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  // src: "../public/fonts/pretendard/PretendardVariable.woff2",
  // weight: "100 900",
  src: [
    {
      path: "../public/fonts/pretendard/Pretendard-Medium.subset.woff2", // 파일명 확인 필요
      weight: "400 500",
      style: "normal",
    },
    {
      path: "../public/fonts/pretendard/Pretendard-Bold.subset.woff2", // 파일명 확인 필요
      weight: "700",
      style: "normal",
    },
  ],
  // style: "normal",
  display: "swap",
  preload: true,
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "척척밥상 공동구매",
  description: "척척밥상 공동구매 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} `}>
      <body className="font-pretendard antialiased bg-background-light">
        {children}
      </body>
    </html>
  );
}
