"use client";

import { CtaButton } from "@/components/ui/cta-button";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { shopeeStoreLink } from "@/content/portfolio";
import Image from "next/image";
import { useMemo, useState } from "react";

const ideaImages = [
  "/ideia/ideia-aqui-1.png",
  "/ideia/ideia-aqui-2.png",
  "/ideia/ideia-aqui-3.png",
  "/ideia/ideia-aqui-4.png",
  "/ideia/ideia-aqui-5.png",
  "/ideia/ideia-aqui-6.png",
  "/ideia/ideia-aqui-7.png",
] as const;

type IdeaCard = {
  src: (typeof ideaImages)[number];
  alt: string;
  aspectClassName: string;
  emphasis: string;
};
const baseIdeaCards: readonly IdeaCard[] = [
  {
    src: ideaImages[0],
    alt: "Bordado em tons terrosos com composição delicada",
    aspectClassName: "aspect-[4/7]",
    emphasis: "Bordado delicado",
  },
  {
    src: ideaImages[1],
    alt: "Amigurumi artesanal com textura suave e acabamento detalhado",
    aspectClassName: "aspect-[4/4]", // Mais próximo de um quadrado perfeito
    emphasis: "Textura macia",
  },
  {
    src: ideaImages[2],
    alt: "Bordado com elementos afetivos e paleta suave",
    aspectClassName: "aspect-[4/4]",
    emphasis: "Paleta suave",
  },
  {
    src: ideaImages[3],
    alt: "Peça artesanal em destaque com composição visual ampla",
    aspectClassName: "aspect-[4/7]",
    emphasis: "Composição ampla",
  },

  {
    src: ideaImages[4],
    alt: "Amigurumi pronto para presente com acabamento cuidadoso",
    aspectClassName: "aspect-[4/6]",
    emphasis: "Pronto para presente",
  },
  {
    src: ideaImages[5],
    alt: "Bordado autoral com detalhes finos e acolhedores",
    aspectClassName: "aspect-[4/7]",
    emphasis: "Detalhes finos",
  },
  {
    src: ideaImages[6],
    alt: "Criação artesanal com presença visual marcante",
    aspectClassName: "aspect-[4/7]",
    emphasis: "Presença marcante",
  },
];

const balancedIdeaCards = [
  baseIdeaCards[0],
  baseIdeaCards[3],
  baseIdeaCards[1],
  baseIdeaCards[4],
  baseIdeaCards[2],
  baseIdeaCards[5],
  baseIdeaCards[6],
] as const;

export function IdeasSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const orderedImages = useMemo(
    () => balancedIdeaCards.map((item) => item.src),
    [],
  );

  const activeCard =
    activeIndex === null ? null : balancedIdeaCards[activeIndex];

  return (
    <section
      id="ideias"
      className="border-b border-[color:var(--brand-mauve)]/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,247,239,0.92))]"
      aria-label="Inspirações para sua próxima arte"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--brand-rose)]">
            Ideias para você
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--brand-brown)] sm:text-4xl">
            Inspirações maiores para sentir textura, cor e presença
          </h2>
          <p className="text-lg leading-8 text-zinc-600">
            Um painel visual para imaginar sua próxima peça com mais clareza:
            bordados, amigurumis e composições que ajudam a transformar desejo
            em arte personalizada.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {balancedIdeaCards.map((item, index) => (
            <article
              key={item.src}
              className={`group relative isolate mb-4 overflow-hidden rounded-[2rem] border border-[color:var(--brand-mauve)]/70 bg-[color:var(--brand-cream)] shadow-[0_18px_50px_rgba(111,71,58,0.12)] break-inside-avoid ${item.aspectClassName}`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Abrir ideia ${index + 1}: ${item.emphasis}`}
                className="absolute inset-0 z-30 cursor-zoom-in"
              />
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  {item.emphasis}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <CtaButton
            href={shopeeStoreLink}
            label="Ver peças prontas na Shopee"
            ariaLabel="Abrir loja da Artes da Kath na Shopee"
          />
          <span className="text-sm text-zinc-600">
            Se uma dessas ideias combinou com você, a gente pode conversar sobre
            uma versão exclusiva.
          </span>
        </div>
      </div>

      <ImageLightbox
        images={orderedImages}
        imageAlt={activeCard?.alt ?? "Ideias para sua próxima arte"}
        itemTitle="Ideias para você"
        currentIndex={activeIndex ?? 0}
        onIndexChange={(nextIndex) => setActiveIndex(nextIndex)}
        isOpen={activeIndex !== null}
        onClose={() => setActiveIndex(null)}
      />
    </section>
  );
}
