import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GridGuesser — NFL & College Football Stadium Quiz",
  description:
    "NFLおよびカレッジフットボールのスタジアムの位置を当てるマップ推測ゲーム。アメリカの白地図上にピンを刺して正解座標との距離でスコアを競え！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
