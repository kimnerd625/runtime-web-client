import type { Metadata } from "next";
import "./globals.css";
import { notoSans, nanumSquare, ibmSans, Pretendard } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${Pretendard.className} antialiased`}>{children}</body>
    </html>
  );
}
