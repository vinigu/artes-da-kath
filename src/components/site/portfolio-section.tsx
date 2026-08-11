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
        title="Coleções que convidam você a sentir cada detalhe"
        description="Do bordado autoral aos amigurumis afetivos, cada peça foi pensada para revelar textura, cuidado e personalidade antes mesmo do primeiro toque."
      />

      <div className="mt-12 space-y-16">
        <BordadosSection />
        <AmigurumisSection />
      </div>
    </section>
  );
}
