"use client";

import type { PortfolioItem } from "@/content/portfolioData";
import { ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "./image-lightbox";

type PortfolioCardProps = {
  categoryLabel: string;
  item: PortfolioItem;
};

export function PortfolioCard({ categoryLabel, item }: PortfolioCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loadedImageSrc, setLoadedImageSrc] = useState<string | null>(null);
  const [hasImageError, setHasImageError] = useState(false);
  const totalImages = item.images.length;
  const currentImage = item.images[currentImageIndex] ?? item.images[0];
  const isImageLoading = !hasImageError && loadedImageSrc !== currentImage;

  const changeImage = (nextIndex: number) => {
    setHasImageError(false);
    setLoadedImageSrc(null);
    setCurrentImageIndex(nextIndex);
  };

  const showPreviousImage = () => {
    changeImage(
      currentImageIndex === 0 ? totalImages - 1 : currentImageIndex - 1,
    );
  };

  const showNextImage = () => {
    changeImage(
      currentImageIndex === totalImages - 1 ? 0 : currentImageIndex + 1,
    );
  };

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--brand-mauve)]/70 bg-white shadow-[0_18px_50px_rgba(111,71,58,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(111,71,58,0.16)]">
        <div
          className="relative aspect-[4/3] overflow-hidden bg-[color:var(--brand-cream)]"
          aria-busy={isImageLoading}
        >
          {isImageLoading ? (
            <div
              className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden bg-[color:var(--brand-cream)]/95 text-[color:var(--brand-brown)]"
              role="status"
              aria-label="Carregando imagem"
            >
              <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.6)_45%,transparent_70%)] bg-[length:220%_100%]" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-white/65 shadow-[0_10px_30px_rgba(111,71,58,0.14)] backdrop-blur-sm">
                <div className="absolute inset-2 animate-ping rounded-full border border-[color:var(--brand-rose)]/25" />
                <LoaderCircle
                  size={26}
                  className="relative animate-spin"
                  aria-hidden="true"
                />
              </div>
              <span className="sr-only">Carregando imagem</span>
            </div>
          ) : null}
          {hasImageError ? (
            <div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[color:var(--brand-cream)] p-6 text-center text-sm text-[color:var(--brand-brown)]"
              role="alert"
            >
              <p>Não foi possível carregar esta imagem.</p>
              <button
                type="button"
                onClick={() => {
                  setHasImageError(false);
                  setLoadedImageSrc(null);
                }}
                className="rounded-full border border-[color:var(--brand-mauve)] px-4 py-2 font-semibold transition-colors hover:border-[color:var(--brand-rose)] hover:text-[color:var(--brand-rose)]"
              >
                Tentar novamente
              </button>
            </div>
          ) : (
            <Image
              key={currentImage}
              src={currentImage}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onLoad={() => setLoadedImageSrc(currentImage)}
              onError={() => {
                setHasImageError(true);
                setLoadedImageSrc(null);
              }}
            />
          )}

          {!hasImageError ? (
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label={`Abrir galeria ampliada de ${item.title}`}
              className="absolute inset-0 z-10"
            />
          ) : null}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-3 z-20 flex items-center justify-between px-3">
            <button
              type="button"
              onClick={showPreviousImage}
              disabled={totalImages <= 1 || isImageLoading}
              aria-label={`Mostrar foto anterior de ${item.title}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[color:var(--brand-brown)] shadow-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              <ChevronLeft size={16} />
            </button>

            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[color:var(--brand-brown)]">
              {currentImageIndex + 1}/{totalImages}
            </span>

            <button
              type="button"
              onClick={showNextImage}
              disabled={totalImages <= 1 || isImageLoading}
              aria-label={`Mostrar próxima foto de ${item.title}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[color:var(--brand-brown)] shadow-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col space-y-3 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-rose)]">
            {categoryLabel}
          </p>
          <h3 className="text-xl font-semibold text-[color:var(--brand-brown)]">
            {item.title}
          </h3>
          <p className="text-sm leading-7 text-zinc-600">{item.description}</p>
        </div>
      </article>

      <ImageLightbox
        images={item.images}
        imageAlt={item.imageAlt}
        itemTitle={item.title}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}
