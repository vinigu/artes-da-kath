"use client";

import type { PortfolioItem } from "@/content/portfolioData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageLightbox } from "./image-lightbox";

type PortfolioCardProps = {
  categoryLabel: string;
  item: PortfolioItem;
};

export function PortfolioCard({ categoryLabel, item }: PortfolioCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loadedImageSrc, setLoadedImageSrc] = useState<string | null>(null);
  const totalImages = item.images.length;
  const currentImage = item.images[currentImageIndex] ?? item.images[0];
  const isImageLoading = loadedImageSrc !== currentImage;

  const preloadImage = (src: string | undefined) => {
    if (typeof window === "undefined" || !src) {
      return;
    }

    const image = new window.Image();
    image.src = src;
  };

  useEffect(() => {
    preloadImage(currentImage);
    preloadImage(
      item.images[
        currentImageIndex === 0 ? totalImages - 1 : currentImageIndex - 1
      ],
    );
    preloadImage(
      item.images[
        currentImageIndex === totalImages - 1 ? 0 : currentImageIndex + 1
      ],
    );
  }, [currentImage, currentImageIndex, item.images, totalImages]);

  const showPreviousImage = () => {
    setCurrentImageIndex((previousIndex) =>
      previousIndex === 0 ? totalImages - 1 : previousIndex - 1,
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((previousIndex) =>
      previousIndex === totalImages - 1 ? 0 : previousIndex + 1,
    );
  };

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--brand-mauve)]/70 bg-white shadow-[0_18px_50px_rgba(111,71,58,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(111,71,58,0.16)]">
        <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--brand-cream)]">
          {isImageLoading ? (
            <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,rgba(255,255,255,0.12)_8%,rgba(255,255,255,0.3)_18%,rgba(255,255,255,0.12)_33%)] bg-[length:200%_100%]" />
          ) : null}
          <Image
            src={currentImage}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={false}
            onLoad={() => setLoadedImageSrc(currentImage)}
            onError={() => setLoadedImageSrc(currentImage)}
          />

          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            aria-label={`Abrir galeria ampliada de ${item.title}`}
            className="absolute inset-0 z-10"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-3 z-20 flex items-center justify-between px-3">
            <button
              type="button"
              onClick={showPreviousImage}
              disabled={totalImages <= 1}
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
              disabled={totalImages <= 1}
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
