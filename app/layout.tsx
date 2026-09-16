import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://denisahendra.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deni Sahendra | Backend & Cloud Engineer",
    template: "%s | Deni Sahendra",
  },
  description: "Portofolio Deni Sahendra - Backend & Cloud Engineer yang berpengalaman dalam merancang dan membangun solusi cloud serta arsitektur backend yang andal.",
  keywords: [
    "Deni Sahendra",
    "Backend Engineer",
    "Cloud Engineer",
    "Software Engineer",
    "Portfolio",
    "Karawang",
    "Indonesia",
    "Next.js",
  ],
  authors: [{ name: "Deni Sahendra" }],
  creator: "Deni Sahendra",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: "Deni Sahendra | Tech Enthusiast",
    description: "Portofolio Deni Sahendra - Tech Enthusiast",
    siteName: "Deni Sahendra Portfolio",
    images: [
      {
        url: "/icon.jpg",
        width: 800,
        height: 800,
        alt: "Deni Sahendra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deni Sahendra | Tech Enthusiast",
    description: "Portofolio Deni Sahendra - Tech Enthusiast.",
    images: ["/icon.jpg"],
  },
  icons: {
    icon: "/icon.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Deni Sahendra",
  url: siteUrl,
  image: `${siteUrl}/icon.jpg`,
  jobTitle: "Backend & Cloud Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karawang",
    addressCountry: "Indonesia",
  },
  sameAs: [
    "https://linkedin.com/in/denisahendra",
    "https://github.com/gutsznm",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-mono", jetbrainsMono.variable, "dark")}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ThemeProvider>
          <Spotlight/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
