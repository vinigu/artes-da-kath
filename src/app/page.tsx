import { AboutSection } from "@/components/site/about-section";
import { ContactCTA } from "@/components/site/contact-cta";
import { CreativeProcessSection } from "@/components/site/creative-process-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { PortfolioSection } from "@/components/site/portfolio-section";
import { ShopeeSection } from "@/components/site/shopee-section";
import { contactWhatsAppLink } from "@/content/portfolio";
import { heroFeaturedImage } from "@/content/portfolioData";
import { defaultSeoDescription, siteName, toAbsoluteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import { IdeasSection } from "../components/site/ideas-section";

export const metadata: Metadata = {
  title: "Bordados e amigurumis feitos à mão",
  description: defaultSeoDescription,
  keywords: [
    "bordado personalizado",
    "amigurumi artesanal",
    "artesanato personalizado",
    "arte personalizada",
    siteName,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Bordados e amigurumis feitos a mao`,
    description: defaultSeoDescription,
    url: "/",
    siteName,
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
    title: `${siteName} | Bordados e amigurumis feitos a mao`,
    description: defaultSeoDescription,
    images: [heroFeaturedImage],
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${toAbsoluteUrl("/")}#website`,
      url: toAbsoluteUrl("/"),
      name: siteName,
      inLanguage: "pt-BR",
      description: defaultSeoDescription,
    },
    {
      "@type": "Organization",
      "@id": `${toAbsoluteUrl("/")}#organization`,
      name: siteName,
      url: toAbsoluteUrl("/"),
      logo: toAbsoluteUrl("/icons/icon-512x512.png"),
      sameAs: [contactWhatsAppLink],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+55 11 97772-5980",
          availableLanguage: ["pt-BR"],
        },
      ],
    },
    {
      "@type": "ImageGallery",
      "@id": `${toAbsoluteUrl("/")}#portfolio-gallery`,
      name: "Portfolio de bordados e amigurumis",
      url: toAbsoluteUrl("/#portfolio"),
      about: ["Bordados", "Amigurumis", "Artesanato personalizado"],
      image: [toAbsoluteUrl(heroFeaturedImage)],
    },
  ],
};

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
