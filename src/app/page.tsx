import { AboutSection } from "@/components/site/about-section";
import { ContactCTA } from "@/components/site/contact-cta";
import { CreativeProcessSection } from "@/components/site/creative-process-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { PortfolioSection } from "@/components/site/portfolio-section";
import { ShopeeSection } from "@/components/site/shopee-section";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-transparent">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CreativeProcessSection />
        <PortfolioSection />
        <ShopeeSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
