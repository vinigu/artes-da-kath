import { AmigurumisSection } from "@/components/site/amigurumis-section";
import { BordadosSection } from "@/components/site/bordados-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Portfólio"
        title="Coleções que unem técnica e personalidade"
        description="Do bordado autoral aos amigurumis afetivos, cada peça possui um carrossel próprio para você explorar os detalhes sem sair do card."
      />

      <div className="mt-12 space-y-16">
        <BordadosSection />
        <AmigurumisSection />
      </div>
    </section>
  );
}
