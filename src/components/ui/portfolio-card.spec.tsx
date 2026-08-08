import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { PortfolioCard } from "./portfolio-card";

vi.mock("next/image", () => ({
  default: ({
    fill: _fill,
    priority: _priority,
    sizes: _sizes,
    ...props
  }: {
    fill?: boolean;
    priority?: boolean;
    sizes?: string;
  } & React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

describe("PortfolioCard", () => {
  it("navega entre imagens do carrossel interno", () => {
    render(
      <PortfolioCard
        categoryLabel="Bordados"
        item={{
          id: "item-1",
          title: "Colecao Casal",
          description: "Descricao",
          imageAlt: "Bordados da colecao casal",
          images: [
            "/portfolio/bordados/casal/bordado-casal-1.png",
            "/portfolio/bordados/casal/bordado-casal-2.png",
            "/portfolio/bordados/casal/bordado-casal-3.jpg",
          ],
        }}
      />,
    );

    const image = screen.getByRole("img", {
      name: /bordados da colecao casal/i,
    });

    expect(image).toHaveAttribute(
      "src",
      "/portfolio/bordados/casal/bordado-casal-1.png",
    );
    expect(screen.getByText("1/3")).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /mostrar proxima foto de colecao casal/i }),
    );

    expect(image).toHaveAttribute(
      "src",
      "/portfolio/bordados/casal/bordado-casal-2.png",
    );
    expect(screen.getByText("2/3")).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /mostrar foto anterior de colecao casal/i }),
    );

    expect(image).toHaveAttribute(
      "src",
      "/portfolio/bordados/casal/bordado-casal-1.png",
    );
  });
});
