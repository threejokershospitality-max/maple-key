"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  priority?: boolean;
}

export function PropertyImageCarousel({
  images,
  alt,
  className,
  priority = false,
}: PropertyImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const slides = images.length > 0 ? images : ["/images/ghat-aarti.jpg"];

  const goTo = (direction: "prev" | "next") => {
    setIndex((current) =>
      direction === "next"
        ? (current + 1) % slides.length
        : (current - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className={cn("relative aspect-[4/3] overflow-hidden group", className)}>
      <Image
        src={slides[index]}
        alt={`${alt} - photo ${index + 1}`}
        fill
        priority={priority && index === 0}
        loading={priority && index === 0 ? undefined : "lazy"}
        quality={75}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goTo("prev");
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-ivory/90 text-forest shadow-luxury opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
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
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-ivory/90 text-forest shadow-luxury opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            aria-label="Next photo"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all",
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
