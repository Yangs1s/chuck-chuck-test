import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../public/fonts/pretendard/PretendardVariable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-pretendard",
  preload: true,
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="ko" className={`${pretendard.variable} ${geistMono.variable}`}>
      <body className="font-pretendard antialiased bg-background-light">
        {children}
      </body>
    </html>
  );
}
