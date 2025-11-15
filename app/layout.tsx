import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
