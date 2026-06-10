"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";
import { cn } from "@/lib/utils";

function preloadSlide(src: string) {
  const img = new window.Image();
  img.src = src;
}

interface PropertyGalleryProps {
  images: string[];
  name: string;
}

export function PropertyGallery({ images, name }: PropertyGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    preloadAdjacent(index);
  };

  const preloadAdjacent = useCallback(
    (current: number) => {
      if (images.length <= 1) return;
      preloadSlide(images[(current + 1) % images.length]);
      preloadSlide(images[(current - 1 + images.length) % images.length]);
    },
    [images]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    images.forEach(preloadSlide);
  }, [lightboxOpen, images]);

  const navigate = (direction: "prev" | "next") => {
    setCurrentIndex((prev) => {
      const next =
        direction === "next"
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length;
      preloadAdjacent(next);
      return next;
    });
  };

  return (
    <>
      <div className="grid h-[42vh] min-h-[260px] grid-cols-1 gap-2 md:h-[60vh] md:grid-cols-4">
        <button
          onClick={() => openLightbox(0)}
          className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-sm group"
          aria-label={`View ${name} main image`}
        >
          <Image
            src={images[0]}
            alt={`${name} - Main`}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </button>
        {images.slice(1, 5).map((img, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i + 1)}
            className="relative overflow-hidden rounded-sm hidden md:block group"
            aria-label={`View ${name} image ${i + 2}`}
          >
            <Image
              src={img}
              alt={`${name} - ${i + 2}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="25vw"
            />
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
                <span className="text-ivory flex items-center gap-2 text-sm">
                  <Grid3X3 className="h-4 w-4" />
                  +{images.length - 5} more
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
            role="dialog"
            aria-label="Image gallery lightbox"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-ivory/80 hover:text-ivory z-10 p-2"
              aria-label="Close gallery"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={() => navigate("prev")}
              className="absolute left-4 text-ivory/80 hover:text-ivory p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="relative mx-16 h-[80vh] w-full max-w-5xl">
              {images.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${name} - ${i + 1}`}
                  fill
                  loading="eager"
                  sizes="90vw"
                  aria-hidden={i !== currentIndex}
                  className={cn(
                    "object-contain transition-opacity duration-150",
                    i === currentIndex ? "z-[1] opacity-100" : "z-0 opacity-0"
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => navigate("next")}
              className="absolute right-4 text-ivory/80 hover:text-ivory p-2"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <p className="absolute bottom-4 text-ivory/60 text-sm">
              {currentIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
