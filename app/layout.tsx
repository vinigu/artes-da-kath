import { heroFeaturedImage } from "@/content/portfolioData";
import {
  defaultSeoDescription,
  defaultSeoKeywords,
  siteName,
  siteUrl,
  toAbsoluteUrl,
} from "@/lib/seo";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultSeoDescription,
  keywords: [...defaultSeoKeywords],
  authors: [{ name: siteName }],
  creator: siteName,
  category: "Artesanato",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  manifest: "/icons/site.webmanifest",
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: ["/icons/favicon.ico", "/icons/favicon-32x32.png"],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: `${siteName} | Bordados e amigurumis feitos a mao`,
    description: defaultSeoDescription,
    type: "website",
    locale: "pt_BR",
    siteName,
    url: "/",
    images: [
      {
        url: toAbsoluteUrl(heroFeaturedImage),
        width: 1200,
        height: 630,
        alt: `${siteName} - bordados e amigurumis personalizados`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Bordados e amigurumis feitos a mao`,
    description: defaultSeoDescription,
    images: [toAbsoluteUrl(heroFeaturedImage)],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-zinc-50 text-zinc-950"
      >
        {children}
      </body>
    </html>
  );
}
