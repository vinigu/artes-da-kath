import { AboutSection } from "@/components/site/about-section";
import { ContactCTA } from "@/components/site/contact-cta";
import { CreativeProcessSection } from "@/components/site/creative-process-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { PortfolioSection } from "@/components/site/portfolio-section";
import { ShopeeSection } from "@/components/site/shopee-section";
import { heroFeaturedImage } from "@/content/portfolioData";
import type { Metadata } from "next";
import { IdeasSection } from "../components/site/ideas-section";

export const metadata: Metadata = {
  title: "Bordados e amigurumis feitos à mão",
  description:
    "Conheça a Artes da Kath: bordados, amigurumis e arte personalizada feitos à mão com carinho, presença e acabamento exclusivo.",
  keywords: [
    "bordado personalizado",
    "amigurumi artesanal",
    "artesanato",
    "arte personalizada",
    "Artes da Kath",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Artes da Kath | Bordados e amigurumis feitos à mão",
    description:
      "Bordados, amigurumis e arte personalizada com acabamento exclusivo e identidade autoral.",
    url: "/",
    siteName: "Artes da Kath",
    type: "website",
    images: [
      {
        url: heroFeaturedImage,
        width: 1200,
        height: 630,
        alt: "Artes da Kath - bordados e amigurumis feitos à mão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artes da Kath | Bordados e amigurumis feitos à mão",
    description:
      "Bordados, amigurumis e arte personalizada com acabamento exclusivo.",
    images: [heroFeaturedImage],
  },
};

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-transparent">
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <IdeasSection />
        <CreativeProcessSection />
        <AboutSection />
        <ShopeeSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
