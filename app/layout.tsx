import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GridGuesser — NFL & College Football Stadium Quiz",
  description:
    "A map guessing game for NFL and College Football stadiums. Drop a pin on the US map and try to get as close as possible to the real location!",
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
