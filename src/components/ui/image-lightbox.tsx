"use client";

import {
  ChevronLeft,
  ChevronRight,
  LoaderCircle,
  Search,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  TransformComponent,
  TransformWrapper,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";

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
  const transformRef = useRef<ReactZoomPanPinchRef | null>(null);
  const preloadedImagesRef = useRef<Set<string>>(new Set());
  const [isImageLoading, setIsImageLoading] = useState(true);

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

  const preloadImage = useCallback((src: string | undefined) => {
    if (
      !src ||
      preloadedImagesRef.current.has(src) ||
      typeof window === "undefined"
    ) {
      return;
    }

    const image = new window.Image();
    image.src = src;
    image.onload = () => {
      preloadedImagesRef.current.add(src);
    };
  }, []);

  const currentImage = useMemo(() => {
    return images[currentIndex] ?? images[0];
  }, [currentIndex, images]);

  const previousImage = useMemo(() => {
    if (totalImages <= 1) {
      return undefined;
    }

    return images[currentIndex === 0 ? totalImages - 1 : currentIndex - 1];
  }, [currentIndex, images, totalImages]);

  const nextImage = useMemo(() => {
    if (totalImages <= 1) {
      return undefined;
    }

    return images[currentIndex === totalImages - 1 ? 0 : currentIndex + 1];
  }, [currentIndex, images, totalImages]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (currentImage && preloadedImagesRef.current.has(currentImage)) {
      setIsImageLoading(false);
    } else {
      setIsImageLoading(true);
    }

    transformRef.current?.resetTransform(0);
    preloadImage(previousImage);
    preloadImage(nextImage);
  }, [currentImage, isOpen, nextImage, preloadImage, previousImage]);

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
          {isImageLoading ? (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/45">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-sm text-white/90">
                <LoaderCircle size={16} className="animate-spin" />
                Carregando imagem...
              </div>
            </div>
          ) : null}

          <TransformWrapper
            ref={transformRef}
            initialScale={1}
            minScale={1}
            maxScale={4}
            wheel={{ step: 0.15 }}
            pinch={{ step: 5 }}
            doubleClick={{ mode: "toggle", step: 1.3 }}
            centerOnInit
            limitToBounds
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className="absolute right-3 top-3 z-30 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => zoomOut()}
                    aria-label="Reduzir zoom"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white transition hover:bg-black/60"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => resetTransform()}
                    aria-label="Resetar zoom"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white transition hover:bg-black/60"
                  >
                    <Search size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => zoomIn()}
                    aria-label="Aumentar zoom"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white transition hover:bg-black/60"
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>

                <TransformComponent
                  wrapperClass="!w-full !h-full"
                  contentClass="!w-full !h-full"
                >
                  <div className="relative h-full w-full">
                    <Image
                      key={currentImage}
                      src={currentImage}
                      alt={`${imageAlt} (${currentIndex + 1} de ${totalImages})`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority={isOpen}
                      onLoad={() => {
                        preloadedImagesRef.current.add(currentImage);
                        setIsImageLoading(false);
                      }}
                    />
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
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
