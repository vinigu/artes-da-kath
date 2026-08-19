import { portfolioCatalog } from "@/content/portfolioData";
import { toAbsoluteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";

function getPortfolioImages(): string[] {
  const imageSet = new Set<string>();

  for (const category of Object.values(portfolioCatalog)) {
    for (const item of category.items) {
      for (const image of item.images) {
        imageSet.add(toAbsoluteUrl(image));
      }
    }
  }

  return [...imageSet];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioImages = getPortfolioImages();

  return [
    {
      url: toAbsoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: portfolioImages,
    },
  ];
}
