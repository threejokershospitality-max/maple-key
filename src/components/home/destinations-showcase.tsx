"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { getFeaturedDestinations } from "@/data/destinations";
import { SectionHeading } from "@/components/shared/section-heading";

export function DestinationsShowcase() {
  const destinations = getFeaturedDestinations();
  const destination = destinations[0];

  if (!destination) return null;

  return (
    <section className="py-20 lg:py-28 bg-accent/30" aria-labelledby="destinations">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          subtitle="Our Home"
          title="Varanasi, Uttar Pradesh"
          description="India's eternal spiritual capital, where the sacred Ganges meets ancient temples, timeless rituals, and curated hospitality."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link
            href={`/destinations/${destination.slug}`}
            className="group block bg-ivory rounded-sm overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500"
          >
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src={destination.featuredImage}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-1 text-sm text-saffron mb-3">
                <MapPin className="h-3.5 w-3.5" />
                <span>
                  {destination.state}, {destination.country}
                </span>
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl text-forest group-hover:text-saffron transition-colors mb-3">
                {destination.name}
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                {destination.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-forest group-hover:text-saffron transition-colors font-medium">
                Explore Varanasi
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
