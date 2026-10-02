import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Pribadi | Personal Portfolio",
  description: "Website portofolio pribadi terinspirasi dari Notion Design System.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f6f5f4] text-[#000000] font-sans">
        {children}
      </body>
    </html>
  );
}

