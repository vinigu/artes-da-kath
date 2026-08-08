import { PortfolioCard } from "@/components/ui/portfolio-card";
import type { PortfolioCategory } from "@/content/portfolioData";

type PortfolioCategorySectionProps = {
  category: PortfolioCategory;
};

export function PortfolioCategorySection({
  category,
}: PortfolioCategorySectionProps) {
  return (
    <section id={category.id} className="space-y-7">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-[color:var(--brand-brown)] sm:text-3xl">
          {category.label}
        </h3>
        <p className="max-w-3xl text-base leading-7 text-zinc-600">
          {category.summary}
        </p>
      </div>

      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <PortfolioCard
            key={item.id}
            categoryLabel={category.label}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}
