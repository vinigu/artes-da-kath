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
import { useEffect, useMemo, useRef, useState } from "react";
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
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [loadedImageSrc, setLoadedImageSrc] = useState<string | null>(null);
  const [hasImageError, setHasImageError] = useState(false);

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

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousActiveElement = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", trapFocus);

    return () => {
      document.removeEventListener("keydown", trapFocus);
      previousActiveElement?.focus();
    };
  }, [isOpen]);

  const currentImage = useMemo(() => {
    return images[currentIndex] ?? images[0];
  }, [currentIndex, images]);
  const isImageLoading = !hasImageError && loadedImageSrc !== currentImage;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    transformRef.current?.resetTransform(0);
  }, [currentImage, isOpen]);

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
      ref={dialogRef}
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
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Fechar galeria"
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white transition hover:bg-black/50"
      >
        <X size={18} />
      </button>

      <div className="w-full max-w-5xl">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 bg-black">
          {isImageLoading && !hasImageError ? (
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
                    {hasImageError ? (
                      <div
                        className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center text-sm text-white"
                        role="alert"
                      >
                        <p>Não foi possível carregar esta imagem.</p>
                        <button
                          type="button"
                          onClick={() => {
                            setHasImageError(false);
                            setLoadedImageSrc(null);
                          }}
                          className="rounded-full border border-white/40 px-4 py-2 font-semibold transition-colors hover:bg-white/15"
                        >
                          Tentar novamente
                        </button>
                      </div>
                    ) : (
                      <Image
                        key={currentImage}
                        src={currentImage}
                        alt={`${imageAlt} (${currentIndex + 1} de ${totalImages})`}
                        fill
                        sizes="100vw"
                        className="object-contain"
                        loading="eager"
                        onLoad={() => {
                          setLoadedImageSrc(currentImage);
                          setHasImageError(false);
                        }}
                        onError={() => {
                          setHasImageError(true);
                          setLoadedImageSrc(null);
                        }}
                      />
                    )}
                  </div>
                </TransformComponent>

                <div className="absolute inset-x-4 bottom-4 z-40 flex items-center justify-between gap-3 md:inset-x-6">
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    disabled={totalImages <= 1}
                    aria-label={`Imagem anterior de ${itemTitle}`}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-white/40 bg-black/55 px-4 text-sm font-medium text-white shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-black/70 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <ChevronLeft size={16} />
                    Anterior
                  </button>

                  <p className="rounded-full bg-black/55 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/90 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-md">
                    {currentIndex + 1}/{totalImages}
                  </p>

                  <button
                    type="button"
                    onClick={showNextImage}
                    disabled={totalImages <= 1}
                    aria-label={`Próxima imagem de ${itemTitle}`}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-white/40 bg-black/55 px-4 text-sm font-medium text-white shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-black/70 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Próxima
                    <ChevronRight size={16} />
                  </button>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </div>,
    document.body,
  );
}
