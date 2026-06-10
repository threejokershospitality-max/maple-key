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
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden sm:min-h-[85vh]">
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

      <div className="relative z-10 site-container section-padding-sm text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="type-display mx-auto mb-6 max-w-5xl text-balance text-ivory"
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="type-lead-inverse mx-auto mb-10 max-w-2xl px-2 text-ivory/85"
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
          className="mt-12 heritage-divider mx-auto"
        />
      </div>
    </section>
  );
}
