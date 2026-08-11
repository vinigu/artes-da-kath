import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.SITE_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

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
  applicationName: "Artes da Kath",
  title: {
    default: "Artes da Kath",
    template: "%s | Artes da Kath",
  },
  description:
    "Artes da Kath cria bordados, amigurumis e artesanato autoral com carinho, identidade e acabamento feito à mão.",
  keywords: [
    "Artes da Kath",
    "bordado",
    "bordados",
    "amigurumi",
    "amigurumis",
    "artesanato",
    "arte personalizada",
  ],
  alternates: {
    canonical: "/",
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
    title: "Artes da Kath | Bordados e amigurumis feitos à mão",
    description:
      "Descubra bordados, amigurumis e peças artesanais criadas com cuidado, personalidade e acabamento exclusivo.",
    type: "website",
    locale: "pt_BR",
    siteName: "Artes da Kath",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artes da Kath | Bordados e amigurumis feitos à mão",
    description:
      "Bordados, amigurumis e artesanato autoral com identidade, carinho e acabamento feito à mão.",
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
