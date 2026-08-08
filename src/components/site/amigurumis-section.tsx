import { PortfolioCategorySection } from "@/components/site/portfolio-category-section";
import { portfolioCatalog } from "@/content/portfolioData";

export function AmigurumisSection() {
  return <PortfolioCategorySection category={portfolioCatalog.amigurumis} />;
}
