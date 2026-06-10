"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  priority?: boolean;
}

function preloadSlide(src: string) {
  const img = new window.Image();
  img.src = src;
}

export function PropertyImageCarousel({
  images,
  alt,
  className,
  priority = false,
}: PropertyImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const slides = images.length > 0 ? images : ["/images/ghat-aarti.jpg"];

  const preloadAdjacent = useCallback(
    (current: number) => {
      if (slides.length <= 1) return;
      preloadSlide(slides[(current + 1) % slides.length]);
      preloadSlide(slides[(current - 1 + slides.length) % slides.length]);
    },
    [slides]
  );

  useEffect(() => {
    preloadAdjacent(0);
    slides.slice(1).forEach(preloadSlide);
  }, [slides, preloadAdjacent]);

  const goTo = (direction: "prev" | "next") => {
    setIndex((current) => {
      const next =
        direction === "next"
          ? (current + 1) % slides.length
          : (current - 1 + slides.length) % slides.length;
      preloadAdjacent(next);
      return next;
    });
  };

  const goToIndex = (target: number) => {
    setIndex(target);
    preloadAdjacent(target);
  };

  return (
    <div className={cn("relative aspect-[4/3] overflow-hidden group", className)}>
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} - photo ${i + 1}`}
          fill
          priority={priority && i === 0}
          loading={priority && i === 0 ? undefined : "eager"}
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          aria-hidden={i !== index}
          className={cn(
            "object-cover transition-opacity duration-150",
            i === index ? "z-[1] opacity-100" : "z-0 opacity-0",
            "can-hover:group-hover:scale-105 can-hover:group-hover:transition-transform can-hover:group-hover:duration-300"
          )}
        />
      ))}

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goTo("prev");
            }}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-ivory/90 text-forest opacity-100 shadow-luxury transition-opacity xl:opacity-0 xl:can-hover:group-hover:opacity-100"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goTo("next");
            }}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-ivory/90 text-forest opacity-100 shadow-luxury transition-opacity xl:opacity-0 xl:can-hover:group-hover:opacity-100"
            aria-label="Next photo"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  goToIndex(i);
                }}
                className={cn(
                  "h-1.5 touch-manipulation rounded-full transition-all",
                  i === index ? "w-5 bg-saffron" : "w-1.5 bg-ivory/70"
                )}
                aria-label={`View photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
