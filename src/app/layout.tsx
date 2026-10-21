import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://hirelytics.ai"
  ),
  title: {
    default: "Hirelytics.ai — Smarter Hiring. Brighter Futures.",
    template: "%s | Hirelytics.ai",
  },
  description:
    "Hirelytics is an AI recruitment platform that screens resumes, runs job-specific voice interviews and ranks candidates with an explainable scorecard — so your team spends time on the people who matter.",
  keywords: [
    "AI recruitment",
    "AI hiring",
    "AI interviews",
    "resume screening",
    "candidate scorecard",
    "hiring platform",
    "B2B HR software",
  ],
  authors: [{ name: "Hirelytics.ai" }],
  creator: "Hirelytics.ai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hirelytics.ai",
    siteName: "Hirelytics.ai",
    title: "Hirelytics.ai — Smarter Hiring. Brighter Futures.",
    description:
      "AI-powered resume screening, voice interviews, and explainable scorecards for companies that hire seriously.",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hirelytics.ai — AI Recruitment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirelytics.ai — Smarter Hiring. Brighter Futures.",
    description:
      "AI-powered resume screening, voice interviews, and explainable scorecards for companies that hire seriously.",
    images: ["/brand/og-image.png"],
    creator: "@hireleticsai",
  },
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
