import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Header } from "./header";

vi.mock("next/image", () => ({
  default: ({
    priority: _priority,
    ...props
  }: { priority?: boolean } & React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  ),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Header", () => {
  it("troca a logo para a versao compacta apos scroll", async () => {
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      writable: true,
      value: 0,
    });

    render(<Header />);

    const header = screen.getByRole("banner");
    const logo = screen.getByRole("img", {
      name: /logo artes da kath - p[aá]gina inicial/i,
    });

    expect(header).toHaveAttribute("data-scrolled", "false");
    expect(logo).toHaveAttribute("src", "/logos/logo-cheio.png");

    window.scrollY = 90;
    fireEvent.scroll(window);

    await waitFor(() => {
      expect(header).toHaveAttribute("data-scrolled", "true");
      expect(logo).toHaveAttribute("src", "/logos/logo-sem-fundo.png");
    });
  });
});
