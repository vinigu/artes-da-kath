/* eslint-disable @next/next/no-img-element */
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { PortfolioCard } from "./portfolio-card";

vi.mock("next/image", () => ({
  default: ({
    fill,
    priority,
    sizes,
    ...props
  }: {
    fill?: boolean;
    priority?: boolean;
    sizes?: string;
  } & React.ImgHTMLAttributes<HTMLImageElement>) => {
    void fill;
    void priority;
    void sizes;
    return <img {...props} alt={props.alt ?? ""} />;
  },
}));

vi.mock("react-zoom-pan-pinch", () => ({
  TransformWrapper: ({
    children,
  }: {
    children: (controls: {
      zoomIn: () => void;
      zoomOut: () => void;
      resetTransform: () => void;
    }) => React.ReactNode;
  }) => (
    <div>
      {children({
        zoomIn: () => undefined,
        zoomOut: () => undefined,
        resetTransform: () => undefined,
      })}
    </div>
  ),
  TransformComponent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("PortfolioCard", () => {
  it("navega entre imagens do carrossel interno", () => {
    render(
      <PortfolioCard
        categoryLabel="Bordados"
        item={{
          id: "item-1",
          title: "Coleção Casal",
          description: "Descrição",
          imageAlt: "Bordados da coleção casal",
          images: [
            "/portfolio/bordados/casal/bordado-casal-1.png",
            "/portfolio/bordados/casal/bordado-casal-2.png",
            "/portfolio/bordados/casal/bordado-casal-3.jpg",
          ],
        }}
      />,
    );

    const getImage = () =>
      screen.getByRole("img", {
        name: /bordados da coleção casal/i,
      });

    expect(getImage()).toHaveAttribute(
      "src",
      "/portfolio/bordados/casal/bordado-casal-1.png",
    );
    expect(screen.getByText("1/3")).toBeInTheDocument();

    fireEvent.load(getImage());

    fireEvent.click(
      screen.getByRole("button", {
        name: /mostrar próxima foto de coleção casal/i,
      }),
    );

    expect(getImage()).toHaveAttribute(
      "src",
      "/portfolio/bordados/casal/bordado-casal-2.png",
    );
    expect(screen.getByText("2/3")).toBeInTheDocument();

    fireEvent.load(getImage());

    fireEvent.click(
      screen.getByRole("button", {
        name: /mostrar foto anterior de coleção casal/i,
      }),
    );

    expect(getImage()).toHaveAttribute(
      "src",
      "/portfolio/bordados/casal/bordado-casal-1.png",
    );
  });

  it("bloqueia a navegação enquanto a imagem atual carrega", () => {
    render(
      <PortfolioCard
        categoryLabel="Bordados"
        item={{
          id: "item-1",
          title: "Coleção Casal",
          description: "Descrição",
          imageAlt: "Bordados da coleção casal",
          images: [
            "/portfolio/bordados/casal/bordado-casal-1.png",
            "/portfolio/bordados/casal/bordado-casal-2.png",
            "/portfolio/bordados/casal/bordado-casal-3.jpg",
          ],
        }}
      />,
    );

    const getImage = () =>
      screen.getByRole("img", {
        name: /bordados da coleção casal/i,
      });
    const getImageContainer = () => getImage().closest("[aria-busy]");
    const nextButton = screen.getByRole("button", {
      name: /mostrar próxima foto de coleção casal/i,
    });

    expect(getImageContainer()).toHaveAttribute("aria-busy", "true");
    expect(
      screen.getByRole("status", { name: "Carregando imagem" }),
    ).toBeInTheDocument();
    expect(nextButton).toBeDisabled();

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(screen.getByText("1/3")).toBeInTheDocument();
    expect(getImageContainer()).toHaveAttribute("aria-busy", "true");

    fireEvent.load(getImage());

    expect(getImageContainer()).toHaveAttribute("aria-busy", "false");
    expect(
      screen.queryByRole("status", { name: "Carregando imagem" }),
    ).not.toBeInTheDocument();
    expect(nextButton).toBeEnabled();
  });

  it("mostra uma tentativa de recuperacao quando a imagem falha", () => {
    render(
      <PortfolioCard
        categoryLabel="Bordados"
        item={{
          id: "item-1",
          title: "Coleção Casal",
          description: "Descrição",
          imageAlt: "Bordados da coleção casal",
          images: ["/imagem-indisponivel.png"],
        }}
      />,
    );

    fireEvent.error(
      screen.getByRole("img", { name: /bordados da coleção casal/i }),
    );

    expect(
      screen.getByRole("alert", {
        name: "",
      }),
    ).toHaveTextContent("Não foi possível carregar esta imagem.");
    expect(
      screen.getByRole("button", { name: "Tentar novamente" }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Tentar novamente" }));

    expect(
      screen.getByRole("img", { name: /bordados da coleção casal/i }),
    ).toBeInTheDocument();
  });

  it("gerencia o foco e fecha a galeria com Escape", () => {
    render(
      <PortfolioCard
        categoryLabel="Bordados"
        item={{
          id: "item-1",
          title: "Coleção Casal",
          description: "Descrição",
          imageAlt: "Bordados da coleção casal",
          images: ["/portfolio/bordados/casal/bordado-casal-1.png"],
        }}
      />,
    );

    const opener = screen.getByRole("button", {
      name: /abrir galeria ampliada de coleção casal/i,
    });
    opener.focus();
    fireEvent.click(opener);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    const closeButton = screen.getByRole("button", { name: "Fechar galeria" });
    expect(document.activeElement).toBe(closeButton);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.activeElement).toBe(opener);
  });
});
