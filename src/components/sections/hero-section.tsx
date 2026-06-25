"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { images } from "@/lib/images";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-x-hidden sm:min-h-[85svh]">
      <Image
        src={images.hero}
        alt={images.heroAlt}
        fill
        priority
        className="object-cover object-[center_35%] sm:object-[center_40%]"
        sizes="100vw"
        quality={90}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/50 to-charcoal/25"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-[calc(var(--mobile-contact-bar-height)+1rem)] pt-[calc(var(--header-height)+1rem)] sm:min-h-[85svh] sm:px-6 sm:pb-12 sm:pt-[calc(var(--header-height)+1.5rem)] lg:px-8 xl:pb-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="type-display mb-6 w-full max-w-5xl text-balance text-center text-ivory"
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="type-lead-inverse mb-10 w-full max-w-2xl text-center text-ivory/85"
        >
          Discover handpicked vacation homes and homestays in Varanasi, managed
          with care by {siteConfig.parentBrand}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" variant="secondary">
            <Link href="/properties">
              Explore Properties
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto mt-12 heritage-divider"
        />
        </div>
      </div>
    </section>
  );
}
