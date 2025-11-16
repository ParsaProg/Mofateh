import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import SmoothScrollProvider from "@/src/providers/smooth-scroll";

export const metadata: Metadata = {
  title: "دبیرستان نمونه دولتی شهید مفتح",
  description: "وبسایت دبیرستان نمونه دولتی شهید مفتح، توضیحات و معرفی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="fa" dir="rtl">
      <body className="w-[90%] mx-auto">
        <Header />
        <div className="mt-20"></div>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
