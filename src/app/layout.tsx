import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  description: "Veara 品牌官网，以安静的黑色轮廓呈现日常衣橱气质。",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full bg-canvas text-ivory">
        {children}
      </body>
    </html>
  );
}
