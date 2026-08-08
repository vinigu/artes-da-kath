"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

type ImageLightboxProps = {
  images: readonly string[];
  imageAlt: string;
  itemTitle: string;
  currentIndex: number;
  onIndexChange: (nextIndex: number) => void;
  isOpen: boolean;
  onClose: () => void;
};

export function ImageLightbox({
  images,
  imageAlt,
  itemTitle,
  currentIndex,
  onIndexChange,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const totalImages = images.length;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (totalImages <= 1) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onIndexChange(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onIndexChange(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [currentIndex, isOpen, onClose, onIndexChange, totalImages]);

  const currentImage = useMemo(() => {
    return images[currentIndex] ?? images[0];
  }, [currentIndex, images]);

  if (!isOpen || typeof window === "undefined" || !document?.body) {
    return null;
  }

  const showPreviousImage = () => {
    onIndexChange(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
  };

  const showNextImage = () => {
    onIndexChange(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria ampliada de ${itemTitle}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4"
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar galeria"
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white transition hover:bg-black/50"
      >
        <X size={18} />
      </button>

      <div className="w-full max-w-5xl">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 bg-black">
          <Image
            src={currentImage}
            alt={`${imageAlt} (${currentIndex + 1} de ${totalImages})`}
            fill
            sizes="100vw"
            className="object-contain"
            priority={true}
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={showPreviousImage}
            disabled={totalImages <= 1}
            aria-label={`Imagem anterior de ${itemTitle}`}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/40 px-4 text-sm font-medium text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <ChevronLeft size={16} />
            Anterior
          </button>

          <p className="rounded-full bg-white/12 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-white/90">
            {currentIndex + 1}/{totalImages}
          </p>

          <button
            type="button"
            onClick={showNextImage}
            disabled={totalImages <= 1}
            aria-label={`Próxima imagem de ${itemTitle}`}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/40 px-4 text-sm font-medium text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Próxima
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
