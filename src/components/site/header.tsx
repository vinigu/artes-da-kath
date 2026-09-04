"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#ideias", label: "Ideias" },
  { href: "#processo-criativo", label: "Processo" },
  { href: "#shopee", label: "Shopee" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contato" },
];

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        hasScrolled
          ? "border-b border-[color:var(--brand-mauve)]/70 bg-white/75 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      data-scrolled={hasScrolled ? "true" : "false"}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          hasScrolled ? "py-2.5" : "py-4 sm:py-5"
        }`}
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label="Ir para o início do site Artes da Kath"
        >
          <div
            className={`relative overflow-hidden transition-all duration-300 ${
              hasScrolled
                ? "h-[42px] w-[130px] sm:h-[52px] sm:w-[156px]"
                : "h-[66px] w-[190px] sm:h-[82px] sm:w-[232px]"
            }`}
          >
            <Image
              src={
                hasScrolled
                  ? "/logos/logo-sem-fundo.png"
                  : "/logos/logo-cheio.png"
              }
              alt="Logo Artes da Kath - Página Inicial"
              width={350}
              height={150}
              priority
              sizes="(max-width: 640px) 180px, 350px"
              className={
                hasScrolled
                  ? "h-full w-full object-contain transition-all duration-300"
                  : "h-full w-full object-cover transition-all duration-300"
              }
            />
          </div>
        </Link>

        <nav aria-label="Menu principal" className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[color:var(--brand-brown)] transition-colors hover:text-[color:var(--brand-rose)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--brand-mauve)]/70 text-[color:var(--brand-brown)] transition-colors hover:border-[color:var(--brand-rose)] hover:text-[color:var(--brand-rose)] md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Menu principal mobile"
          className="border-t border-[color:var(--brand-mauve)]/70 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-[color:var(--brand-mauve)]/40 px-2 py-3 text-sm font-medium text-[color:var(--brand-brown)] last:border-b-0 hover:text-[color:var(--brand-rose)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
